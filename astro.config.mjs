// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Пока нет своего домена, сайт живёт на GitHub Pages в подпапке репозитория.
// Когда подключим домен: site = 'https://<домен>', base = '/'.
export default defineConfig({
  site: 'https://stellasdeutsch-dev.github.io',
  base: '/goethe-guides',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
