// Extract Lucide icons into an inline <symbol> sprite (no runtime dependency).
// Usage: node extract_icons.js out/icons.svg Gift Key Heart MapPin ...
// Use in HTML: <svg class="ic"><use href="#i-map-pin"/></svg>
// Icon names are PascalCase from https://lucide.dev/icons (map-pin -> MapPin).
const fs = require('fs'), path = require('path'), https = require('https'), os = require('os');
const VERSION = '0.469.0';
const [out, ...names] = process.argv.slice(2);
if (!out || !names.length) { console.error('usage: node extract_icons.js out.svg IconName ...'); process.exit(1); }
const cache = path.join(os.tmpdir(), `lucide-${VERSION}.js`);
function run() {
  const L = require(cache), miss = [];
  let svg = '';
  for (const n of names) {
    const d = L.icons[n];
    if (!d) { miss.push(n); continue; }
    const id = n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([a-zA-Z])([0-9])/g, '$1-$2').toLowerCase();
    const inner = d[2].map(([t, attrs]) => '<' + t + ' ' + Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ') + '/>').join('');
    svg += `<symbol id="i-${id}" viewBox="0 0 24 24">${inner}</symbol>\n`;
  }
  fs.writeFileSync(out, svg);
  console.log(`wrote ${names.length - miss.length} icons to ${out}`);
  if (miss.length) console.log('missing:', miss.join(', '));
}
if (fs.existsSync(cache)) run();
else https.get(`https://cdn.jsdelivr.net/npm/lucide@${VERSION}/dist/umd/lucide.min.js`, r => {
  const f = fs.createWriteStream(cache); r.pipe(f); f.on('finish', () => f.close(run));
});
