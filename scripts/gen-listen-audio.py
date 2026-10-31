"""Озвучка всех <Listen> в mp3 нейроголосами Microsoft Edge (бесплатно, без ключа).

Берёт тексты из собранного сайта (dist), чтобы строка совпала с тем, что хеширует Listen.astro.
Реплики «Moderatorin: …», «Brandt: …» читают разные голоса, имя говорящего в звук не попадает.
ÖSD озвучивают австрийские голоса. Готовые файлы не пересоздаются.

  npm run build
  python3 -m venv .venv-tts && .venv-tts/bin/pip install edge-tts
  .venv-tts/bin/python scripts/gen-listen-audio.py
  npm run build
"""
import asyncio, hashlib, html, pathlib, re, subprocess, sys, tempfile

import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public/audio/listen'
RATE = '-6%'
F_DE, M_DE = ['de-DE-KatjaNeural', 'de-DE-AmalaNeural', 'de-DE-SeraphinaMultilingualNeural'], ['de-DE-ConradNeural', 'de-DE-KillianNeural', 'de-DE-FlorianMultilingualNeural']
F_AT, M_AT = ['de-AT-IngridNeural', *F_DE[:2]], ['de-AT-JonasNeural', *M_DE[:2]]
FEMALE = set('anna maria lena julia sarah sara laura lisa katrin katharina monika sabine petra claudia andrea nina eva lea marie sophie emma mia hannah hanna jana sandra birgit ute karin heike susanne paula elif ayşe ayse olga irina natalia svenja miriam jasmin franziska johanna clara klara greta ida frieda carla frau mutter tochter oma schwester ärztin'.split())
MALE = set('jonas thomas peter michael stefan andreas markus tobias lukas paul max felix jan tim tom uwe klaus jürgen frank daniel david martin leon jens tarek kemal sergej ali ivan mehmet ahmed falk ludwig ben noah elias finn lars sven jakob simon florian moritz herr herrn mann vater sohn opa bruder arzt moderator sprecher reporter kellner verkäufer gast anrufer hörer'.split())

LABEL = re.compile(r'(?:^|(?<=[.!?…“"»]\s))((?:[A-ZÄÖÜ][\wäöüß-]*\.?\s){0,2}[A-ZÄÖÜ][\wäöüß-]+):\s')


NOT_SPEAKER = set('erstens zweitens drittens viertens der die das ein eine einziger einzige im nur aber also fazit tipp achtung wichtig hinweis beispiel'.split())
KNOWN = {}  # Nachname -> Geschlecht aus allen Texten (Abschnitte einer Diskussion nennen Namen nur einmal)


def turns(text: str):
    """[(speaker|None, Satz)]: Sprecher, wenn mindestens zwei verschiedene Labels vorkommen."""
    cuts = [m for m in LABEL.finditer(text) if m.group(1).split()[0].lower() not in NOT_SPEAKER]
    if len({m.group(1) for m in cuts}) < 2:
        return [(None, text)]
    out = []
    if cuts[0].start() > 0:
        out.append((None, text[:cuts[0].start()].strip()))
    for i, m in enumerate(cuts):
        end = cuts[i + 1].start() if i + 1 < len(cuts) else len(text)
        out.append((m.group(1), text[m.end():end].strip()))
    return [t for t in out if t[1]]


def gender(label: str, text: str):
    low = label.lower()
    words = low.replace('.', '').split()
    if words[0] in FEMALE:
        return 'f'
    if words[0] in MALE:
        return 'm'
    if len(words) == 1 and low.endswith('in') and len(low) > 5:  # Moderatorin, Kellnerin
        return 'f'
    last = re.escape(label.split()[-1])
    for first in re.findall(rf'\b([A-ZÄÖÜ][a-zäöüß]+) (?:[A-ZÄÖÜ][a-zäöüß]+ )?{last}\b', text):
        if first.lower() in FEMALE - {'frau'}:
            return 'f'
        if first.lower() in MALE - {'herr', 'herrn'}:
            return 'm'
    if re.search(rf'\bFrau (?:Doktor |Dr\. |Professorin )?{last}\b', text):
        return 'f'
    if re.search(rf'\bHerrn? (?:Doktor |Dr\. |Professor )?{last}\b', text):
        return 'm'
    if low.endswith('a'):
        return 'f'
    return KNOWN.get(label.split()[-1])


def voices(parts, text, austrian, seed):
    F, M = (F_AT, M_AT) if austrian else (F_DE, M_DE)
    fi = mi = 0
    cast = {}
    for spk, _ in parts:
        if spk in cast:
            continue
        g = gender(spk, text) if spk else ('f' if seed % 2 else 'm')
        if g is None:
            g = 'm' if fi > mi else 'f'
        if g == 'f':
            cast[spk] = F[fi % len(F)]; fi += 1
        else:
            cast[spk] = M[mi % len(M)]; mi += 1
    return cast


def collect():
    items = {}
    for f in (ROOT / 'dist').rglob('*.html'):
        h = f.read_text('utf8')
        for m in re.finditer(r'data-listen[^>]*?data-text="([^"]*)"', h):
            text = html.unescape(m.group(1))
            key = hashlib.sha1(text.encode('utf8')).hexdigest()[:12]
            items.setdefault(key, (text, '/oesd/' in str(f)))
    for text, _ in items.values():
        for spk, _ in turns(text):
            if spk and (g := gender(spk, text)):
                KNOWN.setdefault(spk.split()[-1], g)
    return items


async def make(key, text, austrian, sem):
    dst = OUT / f'{key}.mp3'
    if dst.exists():
        return 'skip'
    async with sem:
        parts = turns(text)
        cast = voices(parts, text, austrian, int(key, 16))
        with tempfile.TemporaryDirectory() as tmp:
            tmp = pathlib.Path(tmp)
            files = []
            for i, (spk, line) in enumerate(parts):
                p = tmp / f'{i:03d}.mp3'
                for attempt in range(4):
                    try:
                        await edge_tts.Communicate(line, cast[spk], rate=RATE).save(str(p))
                        break
                    except Exception as e:  # сеть иногда рвётся
                        if attempt == 3:
                            raise
                        await asyncio.sleep(2 + attempt * 3)
                files.append(p)
            # между репликами пауза 0,45 с, в начале 0,3 с
            gap = 0.45 if len(parts) > 1 else 0
            inputs, chain = ['-f', 'lavfi', '-t', '0.3', '-i', 'anullsrc=r=24000:cl=mono'], ['[0:a]']
            for i, p in enumerate(files):
                inputs += ['-i', str(p)]
                chain.append(f'[{i + 1}:a]')
                if gap and i < len(files) - 1:
                    inputs += ['-f', 'lavfi', '-t', str(gap), '-i', 'anullsrc=r=24000:cl=mono']
                    chain.append(f'[{len(chain)}:a]')
            n = len(chain)
            fc = ''.join(f'{c}aresample=24000,aformat=channel_layouts=mono[s{k}];' for k, c in enumerate(chain))
            fc += ''.join(f'[s{k}]' for k in range(n)) + f'concat=n={n}:v=0:a=1[out]'
            proc = await asyncio.create_subprocess_exec('ffmpeg', '-y', '-loglevel', 'error', *inputs, '-filter_complex', fc, '-map', '[out]', '-ac', '1', '-b:a', '48k', str(dst))
            await proc.wait()
            if proc.returncode:
                raise RuntimeError(f'ffmpeg failed for {key}')
        return f'ok {len(parts)} parts, voices: {", ".join(sorted(set(cast.values())))}'


async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    items = collect()
    if not items:
        sys.exit('Нет текстов: сначала npm run build')
    sem = asyncio.Semaphore(6)
    keys = list(items)
    res = await asyncio.gather(*(make(k, *items[k], sem) for k in keys), return_exceptions=True)
    bad = 0
    for k, r in zip(keys, res):
        if isinstance(r, Exception):
            bad += 1
            print('FAIL', k, r)
        elif r != 'skip':
            print(k, r)
    print(f'всего {len(keys)}, ошибок {bad}')


asyncio.run(main())
