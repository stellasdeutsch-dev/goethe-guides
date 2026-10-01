"""Выписать ответы из всех AnswerSheet статьи: python3 scripts/answers.py <file.mdx>"""
import re, sys
s = open(sys.argv[1]).read()
for sheet in re.findall(r'<AnswerSheet[\s\S]*?\n/>|<AnswerSheet[\s\S]*?\]\}\s*/>', s):
    title = re.search(r'title="([^"]+)"', sheet).group(1)
    items = re.findall(r"n: '?([\w.]+)'?, part: '([^']+)', o: \[([^\]]*)\], a: (\d+)", sheet)
    by = {}
    for n, part, o, a in items:
        opts = [x.strip().strip("'") for x in o.split(',')]
        by.setdefault(part, []).append(f"{n}:{opts[int(a)]}")
    print(title, f'({len(items)})')
    for p, xs in by.items():
        print('  ', p, ' '.join(xs))
