# Пробник Stellas ÖSD C2 №2: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c2-probnik-stellas-2.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат, таблицы пересчёта и короткие стандартные инструкции.

## Формат и баллы (из research/oesd-c2.md, Modellsatz ZC2, Durchführungsbestimmungen 08/2026)
- Каждый модуль 40 баллов, порог 24 (DB 4–6, Gesamtbogen Ver. 2.0).
- Lesen 90 мин, 40 Items: A1 5 × 2, A2 5 × 2 (A–G, 2 лишних), A3 10 ошибок в строках 2, 4–20 (минус балл за каждую пометку сверх 10), A4 20 строк → 10 по таблице 20–19→10 … 2–1→1 (ключ Modellsatz Lesen, стр. 8).
- Hören ca. 40 мин, 25 Items: A1 5 исправлений × 3 = 15, звучит 1 раз, 90 с чтения; A2 10 × A/B/C, 3 Abschnitte (1–3, 4–6, 7–10), 1 раз, 2 мин чтения, 10→13, 9→11, 8→9, 7→7, 6→6 … 1→1; A3 10 заметок, 2 раза, 90 с, 10→12, 9→10, 8→9, 7→7, 6→6 … (ключ Modellsatz Hören, стр. 4).
- Schreiben 90 мин: A1 18 (min 10), A2 22 (min 13), минимум 250 слов, штраф −1…−4, меньше 170 не сдана (Auswertungsbogen Schreiben Ver. 4.0).
- Sprechen: 20 мин подготовки, 15–20 мин, A1 6, A2 7, A3 6, Ausdruck 7, Verständlichkeit 7, Formale Richtigkeit 7 (Auswertungsbogen Sprechen Ver. 3.0).

## Темы
- Lesen A1: «Guter Rat ist unbeliebt», научно-популярная статья о том, почему люди плохо слушают советы (психолог из Инсбрука вымышлен).
- Lesen A2: «Wer hütet die Alm?», репортаж о пастухах на альпийских пастбищах в Пинцгау.
- Lesen A3: пресс-релиз ярмарки профессий «Zukunft Handwerk» в Вельсе.
- Lesen A4: «Der Hausbesorger kehrt zurück», заметка о возвращении дворников в венские дома.
- Hören A1: автоответчик «Lesetage am Attersee», программа литературного фестиваля.
- Hören A2: радиопередача «Der kleine Skilift» о маленьком подъёмнике в низких горах (владелец и исследовательница туризма).
- Hören A3: доклад «Straßennamen als Gedächtnis der Stadt».
- Schreiben A1: ответ учителю из Регенсбурга от секции альпийского клуба (горная хижина в Восточном Тироле).
- Schreiben A2: A сыроварня в Брегенцервальде, B инклюзивный театр в Граце.
- Sprechen A1: звонок фирме, которая бросила ремонт ванной. A2: A вторые квартиры в туристических общинах, B уход за пожилыми дома. A3: позиция по варианту A.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1.1 | B | 2.1 | B |
| 1.2 | A | 2.2 | G |
| 1.3 | C | 2.3 | D |
| 1.4 | C | 2.4 | A |
| 1.5 | B | 2.5 | E |

Aufgabe 2: лишние абзацы C и F.

Aufgabe 3 (строки с ошибкой → исправление): 2 Betriebe, 5 den, 6 der, 8 ist, 10 kennen, 11 sind, 13 junge, 16 denen, 18 der, 20 Weitere. Без ошибки: 4, 7, 9, 12, 14, 15, 17, 19.

Aufgabe 4: 1 ne, 2 der, 3 gur, 4 weise, 5 mand, 6 mert, 7 birnen, 8 iert, 9 tan, 10 sicherer (целое слово), 11 her, 12 Schä-, 13 merkt, 14 tet, 15 teren, 16 haltung, 17 Hil-, 18 gen, 19 An-, 20 stellt.

## Ключ Hören
Aufgabe 1 (в порядке таблицы):
1. Eröffnungslesung, Titel: „Das Haus am Ufer“ → „Das Haus am Hang“
2. Schreibwerkstatt, Ort: Gemeindebibliothek → Mittelschule
3. Literarische Wanderung, Zeit: 10:00 → 9:00
4. Festivalpass: 40 Euro → 35 Euro
5. Hinweis: Anmeldung für die Schreibwerkstatt → für die Wanderung

Aufgabe 2: 1 C, 2 A, 3 B, 4 C, 5 A, 6 B, 7 B, 8 A, 9 C, 10 A (A 4, B 3, C 3).

Aufgabe 3: 1 Beschreibungen, 2 ehren, 3 Gemeinderat, 4 verstorben (tot), 5 Zehntel, 6 Anrainer (Bewohner), 7 Zusatztafeln, 8 gelesen (beachtet), 9 Ereignis, 10 frühzeitig (rechtzeitig).

## Проверка
- `node scripts/check-mdx.mjs` ✓ (2026-11-21).
- `python3 scripts/answers.py`: 10 / 18 / 20 / 5 / 10 / 10 заданий, как в формате.
- Слепое решение по тексту и скрипту: расхождений с ключом нет. Изменён один дистрактор, чтобы верный вариант не был самым длинным. Исправлены 8 цитат в `why`, которые шли через перенос строки или не совпадали дословно.
- Пересечение тем: после проверки параллельных пробников заменены Lesen A1 (было «скука», пересекалось с telc C2 №2) и Hören A2 (были добровольные пожарные, пересекалось с темой «Ehrenamt in der Krise?» в Goethe C2 №4). Ключи A1 и A2 сохранены по буквам, тексты и задания новые.
- Все цитаты в `why` сверены скриптом с текстом страницы: 0 расхождений.
