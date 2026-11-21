"""Проверка пробников: ключ, баланс ответов, цитаты из why, аудио, уникальность id.
python3 -I scripts/audit-mocks.py . <file.mdx> [...]
Цитаты в заданиях на пропуски и поиск ошибок (Sprachbausteine, ÖSD Lesen 3–4) дают ложные «не найдена»: там цитируют заполненную форму."""
import collections, pathlib, re, sys

root = pathlib.Path(sys.argv[1])
files = [pathlib.Path(f) for f in sys.argv[2:]]
guides = root / 'src/content/guides'

# id бланков и тексты аудио по всему сайту
site_ids, site_listen = collections.Counter(), collections.Counter()
for f in guides.rglob('*.mdx'):
    s = f.read_text('utf8')
    for m in re.finditer(r'<AnswerSheet[\s\S]*?\bid="([^"]+)"', s):
        site_ids[m.group(1)] += 1
    for m in re.finditer(r'<Listen\b[\s\S]*?\btext="([^"]*)"', s):
        site_listen[m.group(1)] += 1

norm = lambda t: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', t)).replace('’', "'").strip().lower()
bad_total = 0
for f in files:
    s = f.read_text('utf8')
    probs, notes = [], []
    if '—' in s:
        probs.append(f'длинное тире: {s.count("—")}')
    sheets = re.findall(r'<AnswerSheet[\s\S]*?\n\s*/>', s)
    total = 0
    body_wo_why = re.sub(r"why: '(?:[^'\\]|\\.|'')*'", '', s)
    attrs = ' '.join(re.findall(r'\b(?:text|q|title|ru)="([^"]*)"', body_wo_why))
    body_n = norm(body_wo_why) + ' ' + norm(attrs)
    for sh in sheets:
        sid = re.search(r'\bid="([^"]+)"', sh).group(1)
        if site_ids[sid] > 1:
            probs.append(f'id {sid} встречается {site_ids[sid]} раз')
        items = re.findall(r"o: \[([^\]]*)\], a: (\d+)", sh)
        total += len(items)
        ans = []
        for o, a in items:
            opts = [x.strip().strip("'\"") for x in o.split(',')]
            a = int(a)
            if a >= len(opts):
                probs.append(f'{sid}: a={a} вне вариантов {opts}')
                continue
            ans.append(opts[a])
        cnt = collections.Counter(ans)
        run = best = 1
        for i in range(1, len(ans)):
            run = run + 1 if ans[i] == ans[i - 1] else 1
            best = max(best, run)
        if best >= 4:
            probs.append(f'{sid}: серия из {best} одинаковых ответов')
        notes.append(f'{sid}: {len(items)} [{" ".join(f"{k}:{v}" for k, v in cnt.most_common())}]')
        for w in re.findall(r"why: '((?:[^'\\]|\\.|'')*)'", sh):
            w = w.replace("''", "'")
            for q in re.findall(r'«([^»]{6,})»', w) + re.findall(r'\*\*([^*]{6,})\*\*', w):
                if not re.search(r'[A-Za-zÄÖÜäöüß]{3}', q) or re.search(r'[А-Яа-яЁё]', q):
                    continue
                qn = norm(q).strip(' .,!?…"„“')
                parts = [p.strip() for p in re.split(r'\s*(?:\.\.\.|…)\s*', qn) if len(p.strip()) > 3]
                if parts and not all(p in body_n for p in parts):
                    probs.append(f'{sid}: цитата не найдена в тексте: «{q[:70]}»')
    for t in re.findall(r'<Listen\b[\s\S]*?\btext="([^"]*)"', s):
        if site_listen[t] > 1:
            probs.append(f'аудио-текст повторяется на сайте: {t[:50]}…')
    n_listen = len(re.findall(r'<Listen\b', s))
    bad_total += bool(probs)
    print(('✗ ' if probs else '✓ ') + f.name + f'  ({total} заданий, {len(sheets)} бланков, {n_listen} аудио, {len(s)//1024} КБ)')
    for n in notes:
        print('    ' + n)
    for p in probs[:25]:
        print('  ! ' + p)
    if len(probs) > 25:
        print(f'  ! … ещё {len(probs) - 25}')
sys.exit(1 if bad_total else 0)
