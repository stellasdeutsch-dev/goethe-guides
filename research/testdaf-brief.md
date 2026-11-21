# Бриф: раздел TestDaF с нуля (ноябрь 2026)

Для автора (человека или агента). Прочитай целиком до первой строки.

Проект `/Users/shyngysnarseyit/ff`, Astro-сайт с гайдами к Goethe, telc, ÖSD. Теперь добавляем четвёртый экзамен: TestDaF. Код уже готов (экзамен `testdaf`, маршрут `/ru/testdaf/`), не хватает статей.

Сначала прочитай: `research/AUTHORING.md` (голос §2, правда о фактах §3, компоненты §7, разбор пробника §9, раздел про telc/ÖSD), `research/testdaf.md` (все факты о формате, баллах, записи, ценах, с источниками) и `research/probniki-testdaf.md` (официальные материалы).

## Что за экзамен (коротко)

Экзамен для поступления в немецкий вуз. Уровней A1–C2 нет: результат по каждой из четырёх частей TDN 3, 4 или 5 (B2–C1), ниже «unter TDN 3». Два варианта: цифровой (основной) и бумажный (ещё проводится). Все цифры бери только из `research/testdaf.md`. Чего там нет или помечено «не подтверждено», не пиши. Цифры Goethe/telc/ÖSD не переносить.

## Где лежат файлы

`src/content/guides/testdaf/<section>/<slug>.mdx`, разделы: `pruefung`, `probniki`, `lesen`, `hoeren`, `schreiben`, `sprechen`.

Frontmatter как у статей telc/ÖSD, но:
```yaml
exam: testdaf
section: lesen
levels: [B2, C1]
published: 2026-11-21
updated: 2026-11-21
```
`next.href` в формате `/ru/testdaf/<section>/<slug>/`. Ссылки в тексте относительные: `[Баллы TDN](../../pruefung/testdaf-bally-tdn/)`.

## Все статьи раздела (слаги, чтобы ссылаться друг на друга)

| section | slug | тема |
|---|---|---|
| pruefung | testdaf-chto-eto | Что такое TestDaF, кому нужен, TDN 3–5, цифровой и бумажный, чем отличается от Goethe C1 / telc C1 Hochschule / DSH (коротко, со ссылкой на сравнение) |
| pruefung | testdaf-format | Формат цифрового TestDaF целиком: 4 части, все 23 типа заданий, время; блок про бумажный вариант |
| pruefung | testdaf-bally-tdn | Баллы 0–20, перевод в TDN, требования вузов (4×TDN 4 и исключения), срок действия, пересдача, комбинированный сертификат |
| pruefung | testdaf-zapis-cena | Запись, даты, цены (Германия, Казахстан, Узбекистан, на момент проверки), где сдавать, когда результат |
| pruefung | testdaf-ili-dsh-goethe-c1 | TestDaF, DSH, Goethe C1, telc C1 Hochschule: что выбрать для вуза |
| lesen | testdaf-lesen | Lesen: 7 типов заданий, что делать в каждом, время, ловушки |
| lesen | testdaf-lesen-trenirovka | Тренировка Lesen: по одному своему заданию на каждый из 7 типов, с бланком |
| hoeren | testdaf-hoeren | Hören: 7 типов, один раз, видео-задания, короткие ответы с клавиатуры |
| hoeren | testdaf-hoeren-trenirovka | Тренировка Hören: по одному своему заданию на каждый тип, с аудио и бланком |
| schreiben | testdaf-schreiben | Schreiben: две задачи, на что смотрят эксперты, ошибки |
| schreiben | testdaf-schreiben-argumentation | Аргументативный текст ≥200 слов: структура, Redemittel, образец, тренажёр |
| schreiben | testdaf-schreiben-grafik | Пересказ текста и графика 100–150 слов: структура, Redemittel для графика, образец, тренажёр |
| sprechen | testdaf-sprechen | Sprechen: 7 заданий, подготовка и ответ по таймеру, что оценивают |
| sprechen | testdaf-sprechen-trenirovka | Тренировка: по одному своему заданию на каждый тип, с таймером и образцом ответа |
| probniki | testdaf-materialy-skachat | Все бесплатные официальные материалы со ссылками |
| probniki | testdaf-demo-razbor | Разбор официальной Demo-Version цифрового TestDaF (бланк по официальному ключу) |
| probniki | testdaf-modelltest-1-razbor | Разбор бумажного Modelltest 01 (бланк по официальному ключу) |
| probniki | testdaf-modelltest-2-razbor | Разбор бумажного Modelltest 02 |
| probniki | testdaf-probnik-stellas-1 … -5 | Пробники Stellas в формате цифрового TestDaF |

## Образцы устройства

- Гайд по части: `src/content/guides/telc/lesen/telc-c1-hochschule-lesen.mdx`, `src/content/guides/oesd/hoeren/oesd-c1-hoeren.mdx`.
- Тренировки: `src/content/guides/sprechen/sprechen-c1-trenirovka-1.mdx` и похожие `*trenirovka*`.
- Разбор официального пробника: `src/content/guides/telc/probniki/telc-c1-hochschule-uebungstest-razbor.mdx`.
- Пробник Stellas: `src/content/guides/telc/probniki/telc-c1-hochschule-probnik-stellas-2.mdx` (академические тексты) и `src/content/guides/probniki/stellas-probnik-c1-3.mdx`. Копируй устройство, не тексты.

## Правила для пробников и тренировок TestDaF

- **Формат один в один с цифровым TestDaF**: те же 7 + 7 типов заданий, то же число items (34 Lesen, 30 Hören), то же время (см. таблицу в `research/testdaf.md`). Заголовки модулей `## Lesen`, `## Hören`, `## Schreiben`, `## Sprechen`.
- **Баллы.** Официальной таблицы «верные ответы → 0–20» нет. Поэтому в бланке `maxPoints` = число заданий, `factor={1}`, без `pass`. На странице честно: «сколько верных из 34», шкалу TDN по баллам 0–20 объясни, но не обещай перевод верных ответов в TDN.
- **Короткие ответы с клавиатуры** (Übersicht ergänzen, Textstellen notieren, Laut- und Schriftbild abgleichen): человек пишет ответ на бумаге, потом выбирает свою версию из 3 вариантов в бланке. Так сделано в ÖSD A2/C1.
- **Видео-задания Hören** даём как `<Listen>` с репликами говорящих и пометкой «на экзамене это видео».
- **Sprechen**: каждое из 7 заданий с точным временем подготовки и ответа из research, образец ответа, таймер (по образцу тренировок Sprechen).
- **Schreiben**: обе задачи с тренажёром (`Trainer`/`WriteCheck` по образцам), график описывай таблицей или словами (картинку не рисуй), образец ответа и разбор.
- **Темы академические**: вуз, наука, учёба, общество. Не повторять темы друг друга: перед текстом запиши бронь тем в `/private/tmp/claude-501/-Users-shyngysnarseyit-ff/23813bd2-7a0e-4748-bf21-51aace1137b3/scratchpad/topics/testdaf-<твой-id>.md`, прочитай чужие брони и все пробники C1 сайта.
- **Качество заданий, аудио, проверки**: всё из `research/stellas-mocks-brief.md` («Качество заданий», «Аудио», «Уроки прошлой волны», «Проверка перед сдачей»). `id` бланков: `testdaf-stellas-<n>-lesen`, `testdaf-stellas-<n>-hoeren`; в разборах `testdaf-demo-lesen`, `testdaf-mt1-leseverstehen` и т. п.

## Разборы официальных материалов

Как в AUTHORING.md §9: официальные тексты не перепечатываем, в бланке короткая суть вопроса по-русски (`q`), ответ строго из официального ключа (pdftotext, при сомнении рендер страницы), объяснение, ссылка на официальный PDF. Скачанное лежит в `scratchpad/testdaf-research/` (смотри `research/probniki-testdaf.md`). Аудио не воспроизводить.

## Проверка и запреты

- `node scripts/check-mdx.mjs <файлы>` → ✓; для пробников и тренировок с бланками ещё `python3 -I scripts/audit-mocks.py . <файлы>`.
- Не запускай build, dev, npm install, озвучку, git. Не меняй чужие файлы, компоненты, `src/data`, `src/lib`. Нужна правка общего файла — напиши в отчёте.
- Голос сайта, «Команда Stellas», без выдуманных историй и статистики, без длинного тире, без капса в заголовках.

## Отчёт

Файлы, что внутри каждого, результат проверок, что не подтвердилось и чего не написал, какие правки общих файлов нужны.
