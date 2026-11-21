# Пробник Stellas ÖSD C2 №6: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c2-probnik-stellas-6.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат, таблицы пересчёта и короткие стандартные инструкции.

## Формат и баллы (из research/oesd-c2.md, Modellsatz ZC2, Durchführungsbestimmungen 08/2026)
- Каждый модуль 40 баллов, порог 24 (DB 4–6, Gesamtbogen Ver. 2.0).
- Lesen 90 мин, 40 Items: A1 5 × 2, A2 5 × 2 (A–G, 2 лишних), A3 10 ошибок в строках 2, 4–20 (минус балл за каждую пометку сверх 10), A4 20 строк → 10 по таблице (ключ Modellsatz Lesen, стр. 8).
- Hören ca. 40 мин, 25 Items: A1 5 × 3 = 15 (1 раз, 90 с), A2 10 × A/B/C в трёх Abschnitte (1 раз, 2 мин), 10→13, 9→11, 8→9, 7→7 …; A3 10 заметок (2 раза, 90 с), 10→12, 9→10, 8→9, 7→7 … (ключ Modellsatz Hören, стр. 4).
- Schreiben: A1 18 (min 10), A2 22 (min 13), минимум 250 слов (Auswertungsbogen Schreiben Ver. 4.0).
- Sprechen: 6 + 7 + 6 + 7 + 7 + 7 = 40, порог 24 (Auswertungsbogen Sprechen Ver. 3.0).

## Темы
- Lesen A1: «Die Kosten des Umschaltens», психолог труда из Граца о многозадачности, «остатке внимания» и самопрерываниях.
- Lesen A2: «Neun Kinder, eine Klasse», репортаж о малокомплектной начальной школе в Восточном Тироле.
- Lesen A3: пресс-релиз альпийского парка животных: птенец бородача и вольер сурков.
- Lesen A4: «Vorspielen für die Straße», уличные музыканты в Вене сдают прослушивание.
- Hören A1: автоответчик Volkshochschule Salzburg: тесты на уровень и начало курсов.
- Hören A2: радиопередача о лесных дорогах и маунтинбайкерах (владелица леса из Понгау и представитель велоклуба).
- Hören A3: доклад «Was ist Heimat?» (история слова, как возникает Heimat, Heimat сегодня).
- Schreiben A1: ответ приюта для животных в Иннфиртеле IT-фирме из Линца, которая хочет устроить социальный день.
- Schreiben A2: A ущелье Steinbachklamm с деревянной тропой в Эннстале, B районная газета подростков в Граце.
- Sprechen A1: звонок туроператору: рядом с отелем стройка, бассейн закрыт. A2: A застройка земли (Bodenversiegelung), B отменить ли чаевые. A3: позиция по варианту A.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1.1 | B | 2.1 | C |
| 1.2 | C | 2.2 | F |
| 1.3 | A | 2.3 | A |
| 1.4 | C | 2.4 | G |
| 1.5 | B | 2.5 | B |

Aufgabe 2: лишние абзацы D и E.

Aufgabe 3 (строки с ошибкой → исправление): 4 denn, 6 leben, 7 vor, 10 die, 11 das, 13 einer, 15 zusammengefasst, 16 Geheges, 18 Jahren, 20 Sie. Без ошибки: 2, 5, 8, 9, 12, 14, 17, 19.

Aufgabe 4: 1 te, 2 tigt, 3 ben, 4 meln, 5 gt, 6 ten, 7 ren, 8 bst, 9 men, 10 der-, 11 de, 12 nen, 13 den, 14 tern, 15 glied, 16 hat (целое слово), 17 chen, 18 ler, 19 oper, 20 sten.

## Ключ Hören
Aufgabe 1 (в порядке таблицы):
1. Einstufungstest Italienisch und Spanisch, Tag: Dienstag, 3. Februar → Donnerstag, 5. Februar
2. Einstufungstest Deutsch als Zweitsprache, Ort: Raum 5 → Bibliothek (Erdgeschoß)
3. Kursbeginn: 16. Februar → 23. Februar
4. Abendkurs, Preis: 168 Euro → 186 Euro
5. Hinweis: kann sich nicht mehr anmelden → Test online nachholen, dann anmelden

Aufgabe 2: 1 C, 2 A, 3 B, 4 A, 5 C, 6 C, 7 B, 8 A, 9 B, 10 C (A 3, B 3, C 4).

Aufgabe 3: 1 belastet (missbraucht), 2 Unterstützung (Versorgung, Hilfe), 3 Beziehung, 4 Wiederholung, 5 gebraucht, 6 fort (weg), 7 mehrere Heimaten, 8 Abstammung (Herkunft), 9 verändert, 10 tut.

## Проверка
- `node scripts/check-mdx.mjs` ✓ (2026-11-21).
- `python3 scripts/answers.py`: 10 / 18 / 20 / 5 / 10 / 10 заданий, как в формате.
- `python3 -I scripts/audit-mocks.py`: ✓, серий из 4+ нет, все цитаты в `why` найдены, id и аудио уникальны.
- Верный вариант самый длинный: 0 из 15 заданий A/B/C.
- Слепое решение независимым агентом по странице без `a` и `why`: 73 из 73 совпали с ключом. По его замечаниям: в Lesen A3 строка 6 заменён дистрактор «lebten» (был защитим из-за nachdem + Plusquamperfekt) на «lebe»; в скрипт Hören A1 добавлен пример «Zimmer 14» (раньше пример не звучал); заменены слабые дистракторы Hören A1 №3 и №5, Hören A3 №2 и №9; переписан стем Hören A2 №1 (двусмысленное «sie»); из словариков убраны слова-ответы (belastet, Abstammung, belangen, Einschulung); в Lesen A2 уточнён конец (11 детей больше порога в 10).
- Пересечение тем: до текста сняты коллекционирование (ÖSD C1 №6, Goethe B2 №7), детский спорт (telc C2 №5), босиком (Goethe B2 №7); после текста ламы в Schreiben A2 заменены ущельем (ÖSD A2 №5, бронь раньше).
