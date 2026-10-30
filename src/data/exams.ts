import type { Level } from './site';
import { SECTIONS, type Section } from './sections';

export type ExamId = 'goethe' | 'telc' | 'oesd';

export interface Exam {
  id: ExamId;
  /** Короткое имя для меню и карточек. */
  name: string;
  /** Полное название экзамена. */
  full: string;
  /** Базовый путь раздела сайта. */
  base: string;
  color: string;
  blurb: string;
  sections: Section[];
  levelInfo: Record<Level, { title: string; text: string; color: string }>;
}

const LVL_COLORS: Record<Level, string> = { A1: 'var(--lime)', A2: 'var(--teal)', B1: 'var(--deep)', B2: 'var(--violet)', C1: 'var(--pink)', C2: 'var(--sun)' };
const generic = (texts: Record<Level, [string, string]>) =>
  Object.fromEntries(Object.entries(texts).map(([l, [title, text]]) => [l, { title, text, color: LVL_COLORS[l as Level] }])) as Exam['levelInfo'];

/** Разделы для экзаменов, построенных по модулям (ÖSD) и с Sprachbausteine (telc). */
const mod = (id: Section['id'], title: string, de: string, icon: string, color: string, ink: string, lede: string): Section => ({ id, title, de, icon, color, ink, lede, planned: [] });

const TELC_SECTIONS: Section[] = [
  mod('pruefung', 'Об экзамене', 'Prüfung', 'graduation-cap', 'var(--violet)', '#fff', 'Формат telc по уровням, баллы, правила сдачи и пересдачи.'),
  mod('probniki', 'Пробники', 'Übungstests', 'file-text', 'var(--teal)', '#fff', 'Официальные тренировочные тесты telc с разбором и наши пробники.'),
  mod('lesen', 'Чтение', 'Leseverstehen', 'book-open', 'var(--deep)', 'var(--ink)', 'Все части Leseverstehen: глобальное, детальное и выборочное чтение.'),
  mod('sprachbausteine', 'Sprachbausteine', 'Sprachbausteine', 'puzzle', 'var(--purple)', '#fff', 'Грамматика и лексика в тексте: часть, которой нет у Goethe.'),
  mod('hoeren', 'Аудирование', 'Hörverstehen', 'headphones', 'var(--pink)', '#fff', 'Hörverstehen telc: что звучит один раз, что дважды, где ловушки.'),
  mod('schreiben', 'Письмо', 'Schriftlicher Ausdruck', 'pen-line', 'var(--burst)', 'var(--ink)', 'Schriftlicher Ausdruck: письма по пунктам, критерии и тренажёр.'),
  mod('sprechen', 'Говорение', 'Mündliche Prüfung', 'mic', 'var(--sun)', '#fff', 'Устная часть в паре: знакомство, тема, совместное планирование.'),
];

const OESD_SECTIONS: Section[] = [
  mod('pruefung', 'Об экзамене', 'Prüfung', 'graduation-cap', 'var(--violet)', '#fff', 'Формат ÖSD по уровням, модули, баллы и пересдача.'),
  mod('probniki', 'Пробники', 'Modellsätze', 'file-text', 'var(--teal)', '#fff', 'Официальные модельные тесты ÖSD с разбором и наши пробники.'),
  mod('lesen', 'Чтение', 'Lesen', 'book-open', 'var(--deep)', 'var(--ink)', 'Модуль Lesen ÖSD: типы заданий и стратегия.'),
  mod('hoeren', 'Аудирование', 'Hören', 'headphones', 'var(--pink)', '#fff', 'Модуль Hören ÖSD: австрийский немецкий, паузы, ловушки.'),
  mod('schreiben', 'Письмо', 'Schreiben', 'pen-line', 'var(--burst)', 'var(--ink)', 'Модуль Schreiben ÖSD: тексты по пунктам и критерии.'),
  mod('sprechen', 'Говорение', 'Sprechen', 'mic', 'var(--sun)', '#fff', 'Модуль Sprechen ÖSD: монолог, диалог, задания в паре.'),
];

export const EXAMS: Record<ExamId, Exam> = {
  goethe: {
    id: 'goethe',
    name: 'Goethe',
    full: 'Goethe-Zertifikat',
    base: '/ru/guides',
    color: 'var(--deep)',
    blurb: 'Экзамен Goethe-Institut. A1–C2, от B1 модульный: каждый модуль можно сдать и пересдать отдельно.',
    sections: SECTIONS,
    levelInfo: {
      A1: { title: 'Первые шаги', text: 'Представиться, понять объявление, заполнить анкету. Нужен для визы супруга.', color: LVL_COLORS.A1 },
      A2: { title: 'Повседневная жизнь', text: 'Магазин, врач, работа, короткие письма. Экзамен сдаётся целиком.', color: LVL_COLORS.A2 },
      B1: { title: 'Самый популярный', text: 'Гражданство, Ausbildung, работа. Четыре модуля, порог 60 из 100.', color: LVL_COLORS.B1 },
      B2: { title: 'Учёба и работа', text: 'Спорить, аргументировать, писать посты на 150 слов.', color: LVL_COLORS.B2 },
      C1: { title: 'Свободно', text: 'Вуз, сложные тексты, доклад и дискуссия. Новый формат с 2024 года.', color: LVL_COLORS.C1 },
      C2: { title: 'Почти носитель', text: 'Высший уровень. Рецензия на книгу, дебаты с экзаменатором.', color: LVL_COLORS.C2 },
    },
  },
  telc: {
    id: 'telc',
    name: 'telc',
    full: 'telc Deutsch',
    base: '/ru/telc',
    color: 'var(--pink)',
    blurb: 'Экзамены telc gGmbH. Свой формат с частью Sprachbausteine и устной частью в паре.',
    sections: TELC_SECTIONS,
    levelInfo: generic({
      A1: ['Первые шаги', 'Базовые фразы и простые тексты.'],
      A2: ['Повседневная жизнь', 'Короткие тексты, объявления, простые письма.'],
      B1: ['Самый популярный', 'Работа, учёба, жизнь в Германии. Письмо и разговор в паре.'],
      B2: ['Учёба и работа', 'Сложные тексты, аргументация, официальные письма.'],
      C1: ['Свободно', 'Академические и профессиональные тексты.'],
      C2: ['Почти носитель', 'Высший уровень владения языком.'],
    }),
  },
  oesd: {
    id: 'oesd',
    name: 'ÖSD',
    full: 'ÖSD Zertifikat',
    base: '/ru/oesd',
    color: 'var(--red)',
    blurb: 'Австрийский диплом немецкого языка. Экзамены от A1 до C2.',
    sections: OESD_SECTIONS,
    levelInfo: generic({
      A1: ['Первые шаги', 'Базовые фразы и простые тексты.'],
      A2: ['Повседневная жизнь', 'Короткие тексты, объявления, простые письма.'],
      B1: ['Самый популярный', 'Работа, учёба, жизнь в Австрии и Германии.'],
      B2: ['Учёба и работа', 'Сложные тексты, аргументация, официальные письма.'],
      C1: ['Свободно', 'Академические и профессиональные тексты.'],
      C2: ['Почти носитель', 'Высший уровень владения языком.'],
    }),
  },
};

export const EXAM_IDS: ExamId[] = ['goethe', 'telc', 'oesd'];
export const sectionOf = (exam: ExamId, id: string) => EXAMS[exam].sections.find((s) => s.id === id);
