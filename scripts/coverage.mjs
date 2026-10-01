// Покрытие: сколько гайдов в каждом разделе на каждом уровне. node scripts/coverage.mjs
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import YAML from 'yaml';
const L = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const S = ['pruefung', 'probniki', 'lesen', 'hoeren', 'schreiben', 'sprechen', 'grammatik'];
const cov = Object.fromEntries(S.map((s) => [s, Object.fromEntries(L.map((l) => [l, []]))]));
for (const f of globSync('src/content/guides/*/*.mdx')) {
  const fm = YAML.parse(readFileSync(f, 'utf8').split('---')[1]);
  for (const l of fm.levels) cov[fm.section][l].push(f.split('/').pop().replace('.mdx', ''));
}
cov.grammatik.A2.push('dativ(ext)'); cov.grammatik.B1.push('dativ(ext)');
console.log('section'.padEnd(10), L.map((l) => l.padEnd(4)).join(' '));
for (const s of S) console.log(s.padEnd(10), L.map((l) => String(cov[s][l].length).padEnd(4)).join(' '));
for (const s of S) for (const l of L) if (!cov[s][l].length) console.log('EMPTY', s, l);
