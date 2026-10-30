import type { Level } from '../data/site';
import { SECTIONS } from '../data/sections';
import { EXAMS, type ExamId } from '../data/exams';
import type { Guide } from './guides';
import { slugOf } from './guides';

/** Короткое описание уровня для карточек «Выбери уровень». */
export const LEVEL_INFO: Record<Level, { title: string; text: string; color: string }> = {
  A1: { title: 'Первые шаги', text: 'Представиться, понять объявление, заполнить анкету. Нужен для визы супруга.', color: 'var(--lime)' },
  A2: { title: 'Повседневная жизнь', text: 'Магазин, врач, работа, короткие письма. Экзамен сдаётся целиком.', color: 'var(--teal)' },
  B1: { title: 'Самый популярный', text: 'Гражданство, Ausbildung, работа. Четыре модуля, порог 60 из 100.', color: 'var(--deep)' },
  B2: { title: 'Учёба и работа', text: 'Спорить, аргументировать, писать посты на 150 слов.', color: 'var(--violet)' },
  C1: { title: 'Свободно', text: 'Вуз, сложные тексты, доклад и дискуссия. Новый формат с 2024 года.', color: 'var(--pink)' },
  C2: { title: 'Почти носитель', text: 'Высший уровень. Рецензия на книгу, дебаты с экзаменатором.', color: 'var(--sun)' },
};

export interface RouteItem {
  title: string;
  href: string;
  section: string;
  minutes?: number;
  external?: boolean;
  slug: string;
}
export interface RouteGroup {
  /** id раздела, если это подгруппа модуля */
  section?: string;
  label?: string;
  items: RouteItem[];
}
export interface RouteStep {
  n: number;
  title: string;
  text: string;
  icon: string;
  groups: RouteGroup[];
}

const REG = ['goethe-v-kazakhstane-cena-zapis', 'goethe-v-uzbekistane-cena-zapis'];

/** Порядок внутри модуля: обзор → части → критерии → баллы. */
function rank(slug: string): number {
  if (/^goethe-(a1|a2|b1|b2|c1|c2)-/.test(slug) || slug.startsWith('sovety')) return 0;
  if (slug.startsWith('redemittel')) return 4;
  if (slug.startsWith('kriterii')) return 5;
  if (slug.startsWith('bally')) return 6;
  if (slug.startsWith('zahlen')) return 3;
  return 2;
}
const PRUEF_ORDER = ['goethe-zertifikat-urovni', 'start-deutsch-1-a1-viza', 'kak-schitayutsya-bally-goethe', 'goethe-telc-oesd-testdaf'];

export function buildRoute(all: Guide[], level: Level, toItem: (g: Guide) => RouteItem, exam: ExamId = 'goethe'): RouteStep[] {
  const EX = EXAMS[exam];
  const has = (g: Guide) => g.data.levels.includes(level);
  const of = (section: string) => all.filter((g) => g.data.section === section && has(g));
  const sortRank = (a: Guide, b: Guide) => rank(slugOf(a)) - rank(slugOf(b)) || slugOf(a).localeCompare(slugOf(b));

  const pruef = of('pruefung')
    .filter((g) => !REG.includes(slugOf(g)))
    .sort((a, b) => (PRUEF_ORDER.indexOf(slugOf(a)) + 99) % 99 - (PRUEF_ORDER.indexOf(slugOf(b)) + 99) % 99);
  // Сначала официальный пробник (диагностика), потом Übungssatz, потом пробники Stellas, в конце обзор.
  const mockRank = (g: Guide) => {
    const sl = slugOf(g);
    if (sl === 'goethe-modellsatz-skachat' || sl.endsWith('-skachat') || sl.startsWith('probniki-')) return 9;
    if (sl.startsWith('stellas-')) return 5 + Number(sl.slice(-1) || 0) / 10;
    if (sl.includes('uebungssatz')) return 2;
    return 0;
  };
  const probe = of('probniki').sort((a, b) => mockRank(a) - mockRank(b));
  const moduleIds = EX.sections.map((s) => s.id).filter((id) => !['pruefung', 'probniki', 'grammatik'].includes(id));
  const modules = moduleIds.map((id) => ({
    section: id,
    label: EX.sections.find((s) => s.id === id)!.de,
    items: of(id).sort(sortRank).map(toItem),
  })).filter((g) => g.items.length);
  const gram = of('grammatik').map(toItem);
  const dativ = exam === 'goethe' ? SECTIONS.find((s) => s.id === 'grammatik')!.planned.find((p) => p.href && p.levels.includes(level)) : undefined;
  if (dativ) gram.push({ title: dativ.title, href: dativ.href!, section: 'grammatik', external: true, slug: dativ.slug });
  const reg = all.filter((g) => REG.includes(slugOf(g))).map(toItem);

  return [
    { n: 1, title: 'Пойми экзамен', text: 'Из чего состоит экзамен, сколько длится и как считают баллы. 10 минут, и паника уходит.', icon: 'graduation-cap', groups: [{ items: pruef.map(toItem) }] },
    { n: 2, title: 'Сдай пробник', text: `Реши официальный пробник ${EX.name} с нашим бланком ответов. Узнаешь баллы и своё слабое место.`, icon: 'file-text', groups: [{ items: probe.map(toItem) }] },
    { n: 3, title: 'Тренируй модули', text: 'Начни с модуля, где в пробнике было меньше всего баллов. В каждом гайде есть тренажёр или упражнения.', icon: 'target', groups: modules },
    { n: 4, title: 'Подтяни грамматику', text: 'Только то, что поднимает баллы в Schreiben и Sprechen.', icon: 'puzzle', groups: [{ items: gram }] },
    { n: 5, title: 'Запишись на экзамен', text: 'Где сдавать, сколько стоит и как не пропустить запись.', icon: 'calendar-check', groups: [{ items: reg }] },
  ].filter((s) => s.groups.some((g) => g.items.length));
}

/** На какой шаг маршрута ведёт раздел гайда. */
export function stepOf(section: string, slug: string): number {
  if (REG.includes(slug)) return 5;
  return ({ pruefung: 1, probniki: 2, lesen: 3, hoeren: 3, sprachbausteine: 3, schreiben: 3, sprechen: 3, grammatik: 4 } as Record<string, number>)[section] ?? 3;
}
