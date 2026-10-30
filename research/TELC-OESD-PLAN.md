# Контент telc и ÖSD: общий бриф для авторов

Сначала прочитай целиком `research/AUTHORING.md` (особенно разделы 2, 3, 7, 9, 10). Образцы готовых статей Goethe:
`src/content/guides/probniki/b1-modellsatz-razbor.mdx` (разбор пробника с AnswerSheet),
`src/content/guides/lesen/sovety-goethe-b1-lesen.mdx` (гайд по модулю),
`src/content/guides/schreiben/schreiben-b1-teil-1-e-mail.mdx` (Schreiben с Trainer),
`src/content/guides/pruefung/kak-schitayutsya-bally-goethe.mdx` (формат и баллы).
Ссылки на официальные пробники: `research/probniki-telc.md`, `research/probniki-oesd.md`.

## Жёсткие правила
- Голос: как в AUTHORING.md, раздел 2. Без выдуманных личных историй. Подпись ставит шаблон («Команда Stellas»), личных имён в тексте нет.
- Нет: тренажёра Sprechen с записью голоса, ИИ-проверки, отдельных гайдов по грамматике и лексике.
- Факты (формат, время, баллы, порог, задания) только из официальных материалов этого экзамена: telc.net, Handbuch, Prüfungsordnung, Übungstest, osd.at, Prüfungsziele/Prüfungsbeschreibung, Modellsatz. Цифры Goethe не переносить. Если факт не нашёл, не пиши его.
- Ответы в AnswerSheet только из официального ключа (Lösungen) в PDF. Ключ извлекай через `pdftotext -layout`, при сомнении рендери страницу `pdftoppm -png -r 110 -f N -l N` и смотри картинку. После записи сверь каждый ответ ещё раз с ключом.
- Пробники скачивай в свою папку `/private/tmp/claude-501/-Users-shyngysnarseyit-Desktop-Projects-exams/2891d721-4f0b-4dfc-bb38-4bf77339f966/scratchpad/dl/<твой-id>/` (каждый архив в отдельную пустую подпапку). Аудио не воспроизводить никогда.
- Тексты официальных заданий не перепечатывать: в разборе короткая суть вопроса по-русски (поле `q`), ответ, объяснение (`why`), ссылка на официальный PDF.
- Не трогай общий код (`src/components`, `src/layouts`, `src/lib`, `src/data`, `src/styles`) и чужие файлы. Только свои `.mdx` и при желании свой факт-файл `research/<exam>-<level>.md`.
- Каждый файл проверь: `node scripts/check-mdx.mjs <файл>`. В конце `npm run build` не нужен (его запустит координатор), но `npx astro check` можно.

## Слаги (чтобы ссылаться друг на друга)
Папки: `src/content/guides/telc/<section>/` и `src/content/guides/oesd/<section>/`. `levels` во frontmatter обязательно.

telc (разделы pruefung, probniki, lesen, sprachbausteine, hoeren, schreiben, sprechen):
- обзор: `pruefung/telc-ekzameny-kakoj-vybrat` (какие бывают экзамены telc, какой нужен для визы, ВНЖ, гражданства, учёбы, работы), `probniki/telc-uebungstest-skachat` (все бесплатные Übungstests со ссылками)
- для уровня X (a1, a2, b1, b2, c1, c2) и `dtz` и `c1-hochschule`:
  `pruefung/telc-X-format`, `probniki/telc-X-uebungstest-razbor`, `lesen/telc-X-lesen`, `sprachbausteine/telc-X-sprachbausteine` (если в экзамене есть), `hoeren/telc-X-hoeren`, `schreiben/telc-X-schreiben`, `sprechen/telc-X-sprechen`
  Для A1/A2 модули можно объединять, если части короткие (например `lesen/telc-a1-lesen` и т.д. остаются, но короче).

ÖSD (разделы pruefung, probniki, lesen, hoeren, schreiben, sprechen):
- обзор: `pruefung/oesd-ekzameny-kakoj-vybrat`, `probniki/oesd-modellsatz-skachat`
- для уровня X (a1, a2, b1, b2, c1, c2): `pruefung/oesd-X-format`, `probniki/oesd-X-modellsatz-razbor`, `lesen/oesd-X-lesen`, `hoeren/oesd-X-hoeren`, `schreiben/oesd-X-schreiben`, `sprechen/oesd-X-sprechen`

AnswerSheet id: `telc-X-ut1-<module>` / `oesd-X-ms-<module>`, всегда с `level` и `module`.

## Отчёт координатору
Список файлов, по каждому разбору: сколько заданий, откуда ключ (URL PDF и страница), что не нашёл или в чём не уверен.
