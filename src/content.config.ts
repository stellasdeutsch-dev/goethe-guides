import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    /** Кусок заголовка, который подсветить плашкой .hl */
    hl: z.string().optional(),
    seoTitle: z.string().max(60),
    description: z.string().max(160),
    lede: z.string().optional(),
    section: z.enum(['pruefung', 'probniki', 'lesen', 'hoeren', 'schreiben', 'sprechen', 'grammatik']),
    levels: z.array(z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])).min(1),
    kurz: z.array(z.string()).min(2),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    next: z.array(z.object({ title: z.string(), text: z.string(), href: z.string().optional() })).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    sources: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
