// Проверка статьи без сборки сайта: frontmatter по схеме + компиляция MDX.
// Usage: node scripts/check-mdx.mjs src/content/guides/<section>/<slug>.mdx [...]
import { readFileSync } from 'node:fs';
import { compile } from '@mdx-js/mdx';
import YAML from 'yaml';

const SECTIONS = ['pruefung', 'lesen', 'hoeren', 'schreiben', 'sprechen', 'grammatik'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const COMPONENTS = ['Callout', 'Task', 'Score', 'Anatomy', 'Steps', 'Step', 'Phrases', 'Phrase', 'Trainer', 'Quiz', 'Dialog', 'PointsCalc', 'Listen'];

let failed = 0;
for (const file of process.argv.slice(2)) {
  const errs = [];
  const src = readFileSync(file, 'utf8');
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) errs.push('нет frontmatter');
  else {
    let d;
    try { d = YAML.parse(m[1]); } catch (e) { errs.push('YAML: ' + e.message); }
    if (d) {
      for (const k of ['title', 'seoTitle', 'description', 'lede', 'section', 'levels', 'kurz', 'faq', 'next', 'published', 'updated', 'sources'])
        if (d[k] === undefined) errs.push(`нет поля ${k}`);
      if (d.seoTitle && d.seoTitle.length > 60) errs.push(`seoTitle ${d.seoTitle.length} > 60`);
      if (d.description && d.description.length > 160) errs.push(`description ${d.description.length} > 160`);
      if (d.hl && d.title && !d.title.includes(d.hl)) errs.push('hl не найден в title');
      if (d.section && !SECTIONS.includes(d.section)) errs.push('section: ' + d.section);
      if (d.section && !file.includes(`/guides/${d.section}/`)) errs.push('файл лежит не в папке своего section');
      (d.levels || []).forEach((l) => LEVELS.includes(l) || errs.push('level: ' + l));
      if ((d.kurz || []).length < 3) errs.push('kurz < 3 пунктов');
      if ((d.faq || []).length < 4) errs.push('faq < 4 вопросов');
      if ((d.sources || []).length < 2) errs.push('sources < 2');
      (d.sources || []).forEach((s) => /^https?:\/\//.test(s.url || '') || errs.push('source без url'));
      (d.next || []).forEach((n) => n.href && !/^(\/ru\/guides\/[a-z]+\/[a-z0-9-]+\/|https?:\/\/)/.test(n.href) && errs.push('next.href формат: ' + n.href));
    }
  }
  // Импорты компонентов должны быть известны.
  for (const imp of src.matchAll(/^import (\w+) from '..\/..\/..\/components\/mdx\/(\w+)\.astro';$/gm))
    if (!COMPONENTS.includes(imp[2])) errs.push('неизвестный компонент ' + imp[2]);
  for (const tag of new Set([...src.matchAll(/<([A-Z]\w+)/g)].map((x) => x[1])))
    if (!new RegExp(`^import ${tag} from`, 'm').test(src)) errs.push(`<${tag}> без import`);
  try {
    await compile(src.replace(/^---\n[\s\S]*?\n---\n/, ''), { format: 'mdx' });
  } catch (e) {
    errs.push('MDX: ' + (e.reason || e.message) + (e.line ? ` (строка ~${e.line + (m ? m[0].split('\n').length - 1 : 0)})` : ''));
  }
  if (errs.length) { failed++; console.log(`✗ ${file}\n  - ${errs.join('\n  - ')}`); }
  else console.log(`✓ ${file}`);
}
process.exit(failed ? 1 : 0);
