"""Вставить предупреждение про §11.4 перед образцами Schreiben в разборах пробников."""
import re, sys
CALLOUT = '''<Callout type="trap" title="Образец не для заучивания">
  <p>Бери из образцов структуру и фразы, а не текст целиком. По правилам Goethe (Prüfungsordnung §11.4) заученные наизусть ответы и шаблонные тексты считаются признаком того, что работа не твоя. За это могут исключить с экзамена.</p>
</Callout>
'''
for f in sys.argv[1:]:
    s = open(f).read()
    if '§11.4' in s:
        print('skip (already)', f); continue
    m = re.search(r'^## Schreiben[^\n]*\n\n', s, re.M)
    if not m:
        print('NO Schreiben heading', f); continue
    s = s[:m.end()] + CALLOUT + '\n' + s[m.end():]
    if not re.search(r"^import Callout from", s, re.M):
        last = list(re.finditer(r"^import .*$", s, re.M))[-1]
        s = s[:last.end()] + "\nimport Callout from '../../../components/mdx/Callout.astro';" + s[last.end():]
    open(f, 'w').write(s)
    print('ok', f)
