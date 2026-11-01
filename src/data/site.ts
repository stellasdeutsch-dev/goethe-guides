export const SITE = {
  name: 'Stellas · Goethe',
  title: 'Гайды по Goethe-Zertifikat',
  description:
    'Гайды по Goethe-Zertifikat A1–C2: Lesen, Hören, Schreiben, Sprechen. Формат заданий, ловушки, шаблоны и тренажёры.',
  /** Автор на сайте — бренд, без личного имени. */
  author: {
    name: 'Команда Stellas',
    about: 'Пишем гайды по Goethe-Zertifikat простым языком. Формат сверяем с официальными материалами Goethe-Institut.',
    telegram: 'https://t.me/stellasdeutsch',
  },
  platform: 'https://app.lava.top/801303618?tabId=products&sort=published',
  telegram: 'https://t.me/stellasdeutsch',
  lang: 'ru',
};

/** Ссылка с учётом base (сайт пока живёт в подпапке на GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type Level = (typeof LEVELS)[number];
