import { EXAMS, type ExamId, type Track } from '../data/exams';
import { url } from '../data/site';
import { getGuides, guideHref, readingTime, slugOf, type Guide } from './guides';

/** Гайды telc/ÖSD привязаны к треку через слаг: telc-b1-…, telc-dtz-…, telc-c1-hochschule-… */
const TRACK_RE = /^(?:telc|oesd)-(c1-hochschule|dtz|a1|a2|b1|b2|c1|c2)-/;

/** Общие гайды Goethe, которые не относятся к одному уровню: они живут на экране выбора уровня. */
export const REG = ['goethe-v-kazakhstane-cena-zapis', 'goethe-v-uzbekistane-cena-zapis'];
const GLOBAL = ['goethe-zertifikat-urovni', 'goethe-telc-oesd-testdaf', 'goethe-modellsatz-skachat', ...REG];

export function trackIdsOf(g: Guide): string[] {
  const slug = slugOf(g);
  const m = slug.match(TRACK_RE);
  if (m) return [m[1]];
  if (g.data.exam !== 'goethe' || GLOBAL.includes(slug)) return [];
  return g.data.levels.map((l) => l.toLowerCase());
}

/** Гайды экзамена без трека: обзоры и каталоги пробников. */
export const generalGuides = (all: Guide[]) => all.filter((g) => trackIdsOf(g).length === 0 && !REG.includes(slugOf(g)));

/** Порядок внутри раздела: обзор → части → критерии → баллы; пробники: официальный первым. */
function rank(g: Guide): number {
  const s = slugOf(g);
  if (g.data.section === 'probniki') {
    if (s.startsWith('stellas-') || s.includes('probnik-stellas')) return 5 + Number(s.slice(-1) || 0) / 10;
    if (s.includes('uebungssatz')) return 2;
    return 0;
  }
  if (g.data.section === 'pruefung') {
    if (s.includes('format') || s.includes('start-deutsch')) return 0;
    if (s.includes('bally')) return 1;
    return 2;
  }
  if (/^(goethe|telc|oesd)-[a-z0-9-]+-(lesen|hoeren|schreiben|sprechen|sprachbausteine)$/.test(s) || s.startsWith('sovety')) return 0;
  if (s.includes('trenirovka')) return 1;
  if (s.startsWith('redemittel')) return 4;
  if (s.startsWith('kriterii')) return 5;
  if (s.startsWith('bally')) return 6;
  if (s.startsWith('zahlen')) return 3;
  return 2;
}
export const ordered = (gs: Guide[]) => [...gs].sort((a, b) => rank(a) - rank(b) || slugOf(a).localeCompare(slugOf(b)));

export interface Item { title: string; href: string; minutes: number; slug: string }
export const toItem = (g: Guide): Item => ({ title: g.data.title, href: guideHref(g), minutes: readingTime(g.body), slug: slugOf(g) });

export const MODULE_SKIP = ['pruefung', 'probniki', 'grammatik'];

export interface TrackData {
  track: Track;
  guides: Guide[];
  /** раздел → гайды трека в нужном порядке */
  bySection: Record<string, Guide[]>;
  modules: string[];
}

export async function trackData(exam: ExamId, trackId: string): Promise<TrackData> {
  const EX = EXAMS[exam];
  const track = EX.tracks.find((t) => t.id === trackId)!;
  const guides = (await getGuides(exam)).filter((g) => trackIdsOf(g).includes(trackId));
  const bySection: Record<string, Guide[]> = {};
  for (const s of EX.sections) {
    const gs = ordered(guides.filter((g) => g.data.section === s.id));
    if (gs.length) bySection[s.id] = gs;
  }
  const modules = EX.sections.map((s) => s.id).filter((id) => !MODULE_SKIP.includes(id) && bySection[id]);
  return { track, guides, bySection, modules };
}

/** Треки, у которых есть хотя бы один гайд. */
export async function readyTracks(exam: ExamId): Promise<Track[]> {
  const all = await getGuides(exam);
  return EXAMS[exam].tracks.filter((t) => all.some((g) => trackIdsOf(g).includes(t.id)));
}

export const trackHref = (exam: ExamId, trackId: string, section?: string) =>
  url(`${EXAMS[exam].base}/uroven/${trackId}/${section ? `${section}/` : ''}`);

/** Разделы, где есть хоть один гайд (для страниц /<раздел>/). */
export async function sectionsWithTracks(exam: ExamId): Promise<string[]> {
  const all = await getGuides(exam);
  return [...new Set(all.map((g) => g.data.section))];
}
