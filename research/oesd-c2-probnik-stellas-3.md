# Пробник Stellas ÖSD C2 №3: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c2-probnik-stellas-3.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат, таблицы пересчёта и короткие стандартные инструкции. Единственный реальный факт в текстах: открытие пенициллина Флемингом в 1928 году (Lesen A1), общеизвестно.

## Формат и баллы (из research/oesd-c2.md, Modellsatz ZC2, Durchführungsbestimmungen 08/2026)
- Каждый модуль 40 баллов, порог 24 (DB 4–6, Gesamtbogen Ver. 2.0).
- Lesen 90 мин, 40 Items: A1 5 × 2, A2 5 × 2 (A–G, 2 лишних), A3 10 ошибок в строках 2, 4–20 (минус балл за каждую пометку сверх 10), A4 20 строк → 10 по таблице (ключ Modellsatz Lesen, стр. 8).
- Hören ca. 40 мин, 25 Items: A1 5 × 3 = 15 (1 раз, 90 с), A2 10 × A/B/C в трёх Abschnitte (1 раз, 2 мин), пересчёт 10→13, 9→11, 8→9, 7→7 …; A3 10 заметок (2 раза, 90 с), 10→12, 9→10, 8→9, 7→7 … (ключ Modellsatz Hören, стр. 4).
- Schreiben: A1 18 (min 10), A2 22 (min 13), минимум 250 слов (Auswertungsbogen Schreiben Ver. 4.0).
- Sprechen: 6 + 7 + 6 + 7 + 7 + 7 = 40, порог 24 (Auswertungsbogen Sprechen Ver. 3.0).

## Темы
- Lesen A1: «Der vorbereitete Zufall», историк науки о «случайных» открытиях.
- Lesen A2: «Strom aus dem letzten freien Fluss», спор о ГЭС на реке в Лунгау (река и люди вымышлены).
- Lesen A3: циркуляр управляющей компании о ремонте фасада.
- Lesen A4: «Die Linse kehrt zurück», чечевица в Вайнфиртеле.
- Hören A1: инфолиния дня открытых дверей Fachhochschule.
- Hören A2: радиопередача о домах для нескольких поколений (архитектор и жилец 79 лет).
- Hören A3: доклад «Die Kunst der Entschuldigung».
- Schreiben A1: ответ турагентству из Люцерна от винодельни в Русте.
- Schreiben A2: A пасека с садом-музеем в Пёлльау, B «библиотека вещей» в Граце.
- Sprechen A1: звонок в магистрат, площадку для школьного праздника отдали забегу. A2: A школа полного дня, B бесплатный вход в музеи. A3: позиция по варианту A.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1.1 | A | 2.1 | E |
| 1.2 | C | 2.2 | C |
| 1.3 | B | 2.3 | G |
| 1.4 | B | 2.4 | A |
| 1.5 | A | 2.5 | F |

Aufgabe 2: лишние абзацы B и D.

Aufgabe 3 (строки с ошибкой → исправление): 2 beginnen, 4 der, 7 darf, 9 jeder, 12 dass, 13 finden, 15 eine, 16 monatlichen, 18 Ihnen, 19 zur. Без ошибки: 5, 6, 8, 10, 11, 14, 17, 20.

Aufgabe 4: 1 senfrucht, 2 chererbsen, 3 er (целое слово), 4 che, 5 stoff, 6 cht, 7 Pflan-, 8 pen, 9 probe, 10 nen, 11 te, 12 digte, 13 Ge-, 14 anlage, 15 den, 16 nada, 17 läden, 18 den, 19 seplan, 20 stellen.

## Ключ Hören
Aufgabe 1 (в порядке таблицы):
1. Begrüßung, Wer: Rektorin Haslinger → Vizerektor Eder
2. Laborführung, Thema: Mechatronik → Medizintechnik
3. Workshop, Zeit: 12:30 → 13:00
4. Shuttlebus: alle 30 Minuten → alle 15 Minuten
5. Mensa: 7 Euro → kostenlos

Aufgabe 2: 1 A, 2 C, 3 B, 4 C, 5 A, 6 B, 7 C, 8 A, 9 B, 10 C (A 3, B 3, C 4).

Aufgabe 3: 1 Verantwortung, 2 Wiedergutmachung, 3 Verzeihung (Vergebung), 4 beenden, 5 zuhören, 6 falls, 7 Scheinentschuldigung, 8 Rechtsabteilung (Angst vor Haftung), 9 Glaubwürdigkeit (Vertrauen), 10 erleichtert.

## Проверка
- `node scripts/check-mdx.mjs` ✓ (2026-11-21).
- `python3 scripts/answers.py`: 10 / 18 / 20 / 5 / 10 / 10 заданий, как в формате.
- Слепое решение по тексту и скрипту: расхождений с ключом нет. Исправлены одна цитата в `why` (Lesen A3, строка 8, цитата шла через перенос строки) и цена в Hören A1 (запятая в варианте ломала разбор `answers.py`).
- Все цитаты в `why` сверены скриптом с текстом страницы: 0 расхождений.
- Пересечение тем: Hören A3 заменён (было «город в жару», пересекалось с Ausschnitt «Der Hitzeplan» в Goethe C2 №3). Частичные пересечения оставлены и названы в отчёте: Lesen A1 (случайные открытия) и тема доклада «Die Rolle des Zufalls im Leben» в Goethe C2 №5; Hören A2 (дом нескольких поколений) и одно из четырёх объявлений «Anders wohnen» в Goethe C2 №3.
