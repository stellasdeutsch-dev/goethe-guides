import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../../../data/site';
import { getGuides, guideHref } from '../../../lib/guides';

export async function GET(context: APIContext) {
  const guides = await getGuides();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    customData: '<language>ru</language>',
    items: guides.map((g) => ({
      title: g.data.title,
      description: g.data.description,
      pubDate: g.data.updated,
      link: guideHref(g),
    })),
  });
}
