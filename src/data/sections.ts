import type { Level } from './site';

export type SectionId = 'pruefung' | 'probniki' | 'lesen' | 'hoeren' | 'schreiben' | 'sprechen' | 'grammatik';

export interface Planned {
  slug: string;
  title: string;
  levels: Level[];
  /** Если гайд уже живёт отдельным сайтом. */
  href?: string;
}

export interface Section {
  id: SectionId;
  title: string;
  de: string;
  icon: string;
  color: string;
  ink: string;
  lede: string;
  /** Статьи из плана, которые ещё не написаны. Показываем как «скоро». */
  planned: Planned[];
}

export const SECTIONS: Section[] = [
  {
    id: 'pruefung',
    title: 'Об экзамене',
    de: 'Prüfung',
    icon: 'graduation-cap',
    color: 'var(--violet)',
    ink: '#fff',
    lede: 'Какой уровень тебе нужен. Сколько стоит. Как считают баллы. Без воды.',
    planned: [
      { slug: 'goethe-zertifikat-urovni', title: 'Что такое Goethe-Zertifikat: уровни A1–C2 и какой нужен тебе', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      { slug: 'kak-schitayutsya-bally-goethe', title: 'Как считаются баллы: проходной порог, модули и пересдача', levels: ['B1', 'B2', 'C1'] },
      { slug: 'goethe-v-kazakhstane-cena-zapis', title: 'Goethe в Казахстане в 2026: цены, центры, запись', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      { slug: 'goethe-v-uzbekistane-cena-zapis', title: 'Goethe в Узбекистане в 2026: цены, центры, запись', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      { slug: 'goethe-telc-oesd-testdaf', title: 'Goethe, telc, ÖSD или TestDaF: что выбрать', levels: ['B1', 'B2', 'C1'] },
      { slug: 'start-deutsch-1-a1-viza', title: 'A1 для визы воссоединения: что реально проверяют', levels: ['A1'] },
    ],
  },
  {
    id: 'probniki',
    title: 'Пробники',
    de: 'Modellsätze',
    icon: 'file-text',
    color: 'var(--teal)',
    ink: '#fff',
    lede: 'Официальные пробники Goethe A1–C2. Решаешь оригинал, ответы отмечаешь у нас, получаешь баллы и разбор каждого задания.',
    planned: [
      { slug: 'goethe-modellsatz-skachat', title: 'Официальные пробники Goethe A1–C2: где скачать и как готовиться', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      { slug: 'a1-modellsatz-razbor', title: 'Start Deutsch 1 (A1): разбор официального пробника', levels: ['A1'] },
      { slug: 'a2-modellsatz-razbor', title: 'Goethe A2: разбор официального пробника', levels: ['A2'] },
      { slug: 'b1-modellsatz-razbor', title: 'Goethe B1 Modellsatz: решение и разбор', levels: ['B1'] },
      { slug: 'b1-uebungssatz-razbor', title: 'Goethe B1 Übungssatz: решение и разбор', levels: ['B1'] },
      { slug: 'b2-modellsatz-razbor', title: 'Goethe B2 Modellsatz: решение и разбор', levels: ['B2'] },
      { slug: 'c1-modellsatz-razbor', title: 'Goethe C1 Modellsatz: решение и разбор', levels: ['C1'] },
    ],
  },
  {
    id: 'lesen',
    title: 'Чтение',
    de: 'Lesen',
    icon: 'book-open',
    color: 'var(--deep)',
    ink: 'var(--ink)',
    lede: 'Читать всё не нужно. Нужно знать, где искать. Разбираем каждую часть.',
    planned: [
      { slug: 'sovety-goethe-b1-lesen', title: 'Lesen B1: план на 65 минут', levels: ['B1'] },
      { slug: 'richtig-falsch-goethe-lesen', title: 'Richtig/Falsch: как не путать «не сказано» и «неправильно»', levels: ['A2', 'B1'] },
      { slug: 'zuordnung-anzeigen-goethe-b1', title: 'Lesen Teil 3: объявления и ситуации', levels: ['B1'] },
      { slug: 'ja-nein-meinungen-goethe-b1', title: 'Lesen Teil 4: Ja/Nein по мнениям читателей', levels: ['B1'] },
      { slug: 'bally-lesen-goethe', title: 'Баллы Lesen: таблица пересчёта', levels: ['B1'] },
    ],
  },
  {
    id: 'hoeren',
    title: 'Аудирование',
    de: 'Hören',
    icon: 'headphones',
    color: 'var(--pink)',
    ink: '#fff',
    lede: 'Аудио не ждёт. Учимся слушать по-экзаменному: ключевые слова, паузы, ловушки.',
    planned: [
      { slug: 'sovety-goethe-b1-hoeren', title: 'Hören B1: что делать в паузах', levels: ['B1'] },
      { slug: 'hoeren-teil-1-durchsagen', title: 'Hören Teil 1: объявления и сообщения', levels: ['B1'] },
      { slug: 'wer-sagt-was-hoeren-teil-4', title: 'Hören Teil 4: кто что сказал', levels: ['B1'] },
      { slug: 'zahlen-uhrzeit-hoeren', title: 'Числа, время, даты на слух: главные ловушки', levels: ['A1', 'A2', 'B1'] },
      { slug: 'bally-hoeren-goethe', title: 'Баллы Hören: таблица пересчёта', levels: ['B1'] },
    ],
  },
  {
    id: 'schreiben',
    title: 'Письмо',
    de: 'Schreiben',
    icon: 'pen-line',
    color: 'var(--burst)',
    ink: 'var(--ink)',
    lede: 'Письмо другу, пост в форуме, письмо начальнику. Шаблоны, фразы и тренажёр с таймером.',
    planned: [
      { slug: 'redemittel-schreiben-goethe-b1', title: 'Redemittel для Schreiben B1: фразы по частям письма', levels: ['B1'] },
      { slug: 'schreiben-b1-teil-2-forum', title: 'Teil 2: мнение в форуме', levels: ['B1'] },
      { slug: 'schreiben-b1-teil-3-formell', title: 'Teil 3: формальное письмо', levels: ['B1'] },
      { slug: 'kriterii-schreiben-goethe', title: 'Критерии Schreiben простым языком', levels: ['B1', 'B2'] },
    ],
  },
  {
    id: 'sprechen',
    title: 'Говорение',
    de: 'Sprechen',
    icon: 'mic',
    color: 'var(--sun)',
    ink: '#fff',
    lede: 'Говорить в паре с незнакомцем страшно. Разбираем, как не молчать и не тонуть.',
    planned: [
      { slug: 'sprechen-b1-teil-1-planen', title: 'Teil 1: gemeinsam etwas planen', levels: ['B1'] },
      { slug: 'sprechen-b1-teil-2-praesentation', title: 'Teil 2: презентация', levels: ['B1'] },
      { slug: 'sprechen-b1-teil-3-fragen', title: 'Teil 3: отзыв и вопрос партнёру', levels: ['B1'] },
      { slug: 'kriterii-sprechen-goethe', title: 'Критерии Sprechen простым языком', levels: ['B1', 'B2'] },
    ],
  },
  {
    id: 'grammatik',
    title: 'Грамматика для экзамена',
    de: 'Grammatik',
    icon: 'puzzle',
    color: 'var(--noon)',
    ink: 'var(--ink)',
    lede: 'Только то, что реально поднимает балл в Schreiben и Sprechen.',
    planned: [
      { slug: 'konnektoren-goethe-b1', title: 'weil, deshalb, obwohl, trotzdem: коннекторы для B1', levels: ['B1'] },
      { slug: 'dativ', title: 'Dativ: кому, чему и предлоги-банда', levels: ['A2', 'B1'], href: 'https://stellasdeutsch-dev.github.io/dativ/' },
    ],
  },
];

export const sectionById = (id: string) => SECTIONS.find((s) => s.id === id);
