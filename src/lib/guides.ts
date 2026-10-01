import { getCollection, type CollectionEntry } from 'astro:content';
import { url } from '../data/site';

export type Guide = CollectionEntry<'guides'>;

/** Опубликованные гайды, свежие сверху. */
export async function getGuides(): Promise<Guide[]> {
  const all = await getCollection('guides', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime());
}

/** id вида "schreiben/schreiben-b1-teil-1-e-mail" → slug без раздела. */
export const slugOf = (g: Guide) => g.id.split('/').pop()!;

export const guideHref = (g: Guide) => url(`/ru/guides/${g.data.section}/${slugOf(g)}/`);

/** Время чтения: ~170 слов в минуту, MDX-разметку не считаем. */
export function readingTime(body = ''): number {
  const text = body
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>|{}[\]()-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 170));
}

const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const ruDate = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

/** Склонение: 1 гайд, 2 гайда, 5 гайдов. */
export function plural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

const ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
/** Подпись уровней: одна-две капсулы как есть, больше — диапазон «A1–B1». */
export function levelLabels(levels: readonly string[]): string[] {
  if (levels.length <= 2) return [...levels];
  const sorted = [...levels].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
  return [`${sorted[0]}–${sorted[sorted.length - 1]}`];
}
