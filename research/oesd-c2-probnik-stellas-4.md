# Пробник Stellas ÖSD C2 №4: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c2-probnik-stellas-4.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат, таблицы пересчёта и короткие стандартные инструкции.

## Формат и баллы (из research/oesd-c2.md, Modellsatz ZC2, Durchführungsbestimmungen 08/2026)
- Каждый модуль 40 баллов, порог 24 (DB 4–6, Gesamtbogen Ver. 2.0).
- Lesen 90 мин, 40 Items: A1 5 × 2, A2 5 × 2 (A–G, 2 лишних), A3 10 ошибок в строках 2, 4–20 (минус балл за каждую пометку сверх 10), A4 20 строк → 10 по таблице (ключ Modellsatz Lesen, стр. 8).
- Hören ca. 40 мин, 25 Items: A1 5 × 3 = 15 (1 раз, 90 с), A2 10 × A/B/C в трёх Abschnitte (1 раз, 2 мин), пересчёт 10→13, 9→11, 8→9, 7→7 …; A3 10 заметок (2 раза, 90 с), 10→12, 9→10, 8→9, 7→7 … (ключ Modellsatz Hören, стр. 4).
- Schreiben: A1 18 (min 10), A2 22 (min 13), минимум 250 слов (Auswertungsbogen Schreiben Ver. 4.0).
- Sprechen: 6 + 7 + 6 + 7 + 7 + 7 = 40, порог 24 (Auswertungsbogen Sprechen Ver. 3.0).

## Темы
- Lesen A1: «Lob mit Nebenwirkungen», психолог из Граца о том, как хвалить детей и взрослых.
- Lesen A2: «Ein Kino für die Kleinstadt», объединение спасает кинотеатр в Южной Штирии.
- Lesen A3: пресс-релиз музея о реставрации алтарной картины из Гайльталя.
- Lesen A4: «Bücher statt Telefon», телефонные будки как книжные шкафы.
- Hören A1: автоответчик адвентских экскурсий по Грацу.
- Hören A2: радиопередача о будущем наличных денег (экономист и владелица табачного киоска).
- Hören A3: доклад «Wie Gruppen entscheiden».
- Schreiben A1: ответ кадровику IT-фирмы от общественного сада в Зиммеринге.
- Schreiben A2: A молодёжная велосипедная мастерская в Оттакринге, B фестиваль камерной музыки в замке.
- Sprechen A1: звонок в мебельный магазин из-за порванного дивана. A2: A четырёхдневная неделя, B выбрасывание еды. A3: позиция по варианту A.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1.1 | B | 2.1 | F |
| 1.2 | A | 2.2 | C |
| 1.3 | C | 2.3 | G |
| 1.4 | A | 2.4 | B |
| 1.5 | C | 2.5 | D |

Aufgabe 2: лишние абзацы A и E.

Aufgabe 3 (строки с ошибкой → исправление): 4 worden, 5 hatten, 7 arbeitete, 9 hatte, 11 schriftlichen, 12 des, 15 einem, 16 wurden, 18 der, 20 der. Без ошибки: 2, 6, 8, 10, 13, 14, 17, 19.

Aufgabe 4: 1 den, 2 rand, 3 ein, 4 Ini-, 5 nierter, 6 men, 7 digt, 8 markt, 9 cher, 10 los (целое слово), 11 kartons, 12 stellt, 13 eimer, 14 de, 15 ben, 16 chen, 17 punkt, 18 nen, 19 er-, 20 hen.

## Ключ Hören
Aufgabe 1 (в порядке таблицы):
1. Weihnachtliche Altstadt, Zeit: 17:00 → 16:30
2. Krippen, Treffpunkt: Domplatz → Franziskanerkirche
3. Laternenführung, Guide: Schöberl → Strasser
4. Familienkarte: 40 Euro → 36 Euro
5. Hinweis: nur bei trockenem Wetter → bei jedem Wetter

Aufgabe 2: 1 C, 2 A, 3 B, 4 B, 5 C, 6 A, 7 C, 8 B, 9 A, 10 C (A 3, B 3, C 4).

Aufgabe 3: 1 wahren Wert, 2 unabhängig, 3 Anker, 4 ranghöchsten Person (Leitung), 5 gemeinsames, 6 Schweigen, 7 schriftlich, 8 Letzte, 9 wechseln (rotieren), 10 schnell.

## Проверка
- `node scripts/check-mdx.mjs` ✓ (2026-11-21).
- `python3 scripts/answers.py`: 10 / 18 / 20 / 5 / 10 / 10 заданий, как в формате.
- Слепое решение по тексту и скрипту: расхождений с ключом нет. Переписана последняя строка Lesen A4 (в придаточном не хватало глагола), удлинены четыре дистрактора в Lesen A1, чтобы верный вариант не выделялся длиной. Из `why` убраны три синонима в кавычках, которые выглядели как цитаты.
- Все цитаты в `why` сверены скриптом с текстом страницы: 0 расхождений.
- Пересечение тем: Lesen A1 заменён (было «запахи и память», пересекалось с Hören Teil 3 «Die Nase weiß mehr» в Goethe C2 №5). Ключ A1 сохранён по буквам, текст и задания новые.
