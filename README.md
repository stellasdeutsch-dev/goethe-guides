# Гайды по Goethe-Zertifikat

Бесплатные гайды по Goethe-Zertifikat A1–C2 от Stellas: Lesen, Hören, Schreiben, Sprechen.

Сайт: https://stellasdeutsch-dev.github.io/goethe-guides/ru/guides/

## Как устроено

- Astro 7, статический сайт, MDX-статьи в `src/content/guides/{раздел}/{slug}.mdx`.
- Разделы и план статей: `src/data/sections.ts`.
- Компоненты для статей: `src/components/mdx/` (Callout, Task, Anatomy, Steps, Phrases, Score, Trainer, Quiz).
- Факты об экзамене с источниками: `research/`.
- Поиск: Pagefind, индекс строится после `astro build`.

## Команды

```sh
npm install
npm run dev      # локально
npm run build    # сборка + поисковый индекс в dist/
```

Пуш в `main` публикует сайт через GitHub Actions.
