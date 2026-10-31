"""Озвучка коротких фраз (кнопки data-say и кубики идей) в mp3, голос de-DE-KatjaNeural.

Имя файла: первые 12 знаков sha1 от текста, как в say() из src/scripts/lib.ts.
Запуск после npm run build, тем же окружением, что scripts/gen-listen-audio.py.
"""
import asyncio, hashlib, html, json, pathlib, re

import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public/audio/say'
VOICE, RATE = 'de-DE-KatjaNeural', '-8%'


def collect():
    texts = set()
    for f in (ROOT / 'dist').rglob('*.html'):
        h = f.read_text('utf8')
        texts.update(html.unescape(t) for t in re.findall(r'data-say="([^"]+)"', h))
        for d in re.findall(r'data-dice="([^"]+)"', h):
            for pairs in json.loads(html.unescape(d)).values():
                texts.update(de for de, _ in pairs)
    return {hashlib.sha1(t.encode('utf8')).hexdigest()[:12]: t for t in texts if t.strip()}


async def make(key, text, sem):
    dst = OUT / f'{key}.mp3'
    if dst.exists():
        return False
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, VOICE, rate=RATE).save(str(dst))
                return True
            except Exception:
                dst.unlink(missing_ok=True)
                if attempt == 3:
                    raise
                await asyncio.sleep(2 + attempt * 3)


async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    items = collect()
    sem = asyncio.Semaphore(8)
    res = await asyncio.gather(*(make(k, t, sem) for k, t in items.items()), return_exceptions=True)
    bad = [k for k, r in zip(items, res) if isinstance(r, Exception)]
    print(f'всего {len(items)}, новых {sum(r is True for r in res)}, ошибок {len(bad)}', *bad[:10])


asyncio.run(main())
