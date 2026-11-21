# Пробник Stellas ÖSD C2 №5: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c2-probnik-stellas-5.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат, таблицы пересчёта и короткие стандартные инструкции.

## Формат и баллы (из research/oesd-c2.md, Modellsatz ZC2, Durchführungsbestimmungen 08/2026)
- Каждый модуль 40 баллов, порог 24 (DB 4–6, Gesamtbogen Ver. 2.0).
- Lesen 90 мин, 40 Items: A1 5 × 2, A2 5 × 2 (A–G, 2 лишних), A3 10 ошибок в строках 2, 4–20 (минус балл за каждую пометку сверх 10), A4 20 строк → 10 по таблице 20–19→10 … 2–1→1 (ключ Modellsatz Lesen, стр. 8).
- Hören ca. 40 мин, 25 Items: A1 5 × 3 = 15 (1 раз, 90 с); A2 10 × A/B/C в трёх Abschnitte 1–3, 4–6, 7–10 (1 раз, 2 мин), 10→13, 9→11, 8→9, 7→7, 6→6 … 1→1; A3 10 заметок (2 раза, 90 с), 10→12, 9→10, 8→9, 7→7, 6→6 … (ключ Modellsatz Hören, стр. 4).
- Schreiben 90 мин: A1 18 (min 10), A2 22 (min 13), минимум 250 слов, штраф −1…−4, меньше 170 не сдана (Auswertungsbogen Schreiben Ver. 4.0).
- Sprechen: 20 мин подготовки, 15–20 мин; 6 + 7 + 6 + 7 + 7 + 7 = 40, порог 24 (Auswertungsbogen Sprechen Ver. 3.0).

## Темы
- Lesen A1: «Was alle wissen und keiner gesagt hat», социолог из Зальцбурга о том, как возникают и держатся слухи и почему опровержения не работают.
- Lesen A2: «Wer den Schnee liest», репортаж о службе лавинного прогноза в Инсбруке и наблюдательнице из Эцталя.
- Lesen A3: пресс-релиз службы крови Каринтии о летней донорской акции.
- Lesen A4: «Ins kalte Wasser», заметка о зимнем купании в Альте Донау.
- Hören A1: автоответчик скалодрома в Дорнбирне, курсы осенью.
- Hören A2: радиопередача о слиянии общин в Штирии (бывший бургомистр Ротенбаха и политолог из Граца).
- Hören A3: доклад «Warum wir aufschieben» (прокрастинация).
- Schreiben A1: ответ общины в Гайльтале кинокомпании из Мюнхена (съёмки, перекрытие дороги, праздник 26 октября).
- Schreiben A2: A стекольная мануфактура в Вальдфиртеле, B хор «для тех, кто не умеет петь» в Линце.
- Sprechen A1: звонок поставщику электричества из-за оценочного счёта. A2: A овертуризм в маленьком посёлке, B смартфоны в школе. A3: позиция по варианту A.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1.1 | C | 2.1 | E |
| 1.2 | A | 2.2 | B |
| 1.3 | B | 2.3 | G |
| 1.4 | A | 2.4 | A |
| 1.5 | C | 2.5 | D |

Aufgabe 2: лишние абзацы C и F.

Aufgabe 3 (строки с ошибкой → исправление): 2 gesunden, 5 restlichen, 6 seien, 9 keine, 11 Wer, 12 dessen, 14 einplanen, 17 deren, 18 verabreicht, 19 auf. Без ошибки: 4, 7, 8, 10, 13, 15, 16, 20.

Aufgabe 4: 1 ten, 2 mäßig, 3 genehm, 4 lich, 5 lem, 6 en, 7 spre-, 8 bt, 9 stritten, 10 druck, 11 den, 12 nem, 13 allein (целое слово), 14 siko, 15 lung, 16 chen, 17 det, 18 person, 19 re, 20 wärmen.

## Ключ Hören
Aufgabe 1 (в порядке таблицы):
1. Schnupperklettern, Zeit: 18:00 → 18:30
2. Grundkurs Seilklettern, Umfang: 4 → 6 Abende
3. Bouldern, Alter: 8 bis 12 → 6 bis 10
4. Leihausrüstung: 6 Euro → 8 Euro
5. Hinweis: Eltern müssen nicht anwesend sein → Begleitperson muss in der Halle bleiben

Aufgabe 2: 1 B, 2 A, 3 C, 4 C, 5 A, 6 B, 7 B, 8 C, 9 A, 10 A (A 4, B 3, C 3).

Aufgabe 3: 1 Gefühle (Emotionen), 2 ferner Zukunft (später), 3 Fremder (andere Person), 4 Ersatzhandlungen, 5 schwach, 6 verzeiht, 7 klein, 8 von anderen (von außen), 9 Umgebung, 10 Signal (Hinweis).

## Проверка
- `node scripts/check-mdx.mjs` ✓ (2026-11-21).
- `python3 scripts/answers.py`: 10 / 18 / 20 / 5 / 10 / 10 заданий, как в формате.
- `python3 -I scripts/audit-mocks.py`: ✓, серий из 4+ нет, все цитаты в `why` найдены в тексте страницы, id и аудио уникальны.
- Верный вариант самый длинный: 1 из 15 заданий A/B/C (Hören A2 №3, ничья по длине).
- Слепое решение независимым агентом по странице без `a` и `why`: 65 из 65 совпали с ключом. По его замечаниям переписаны: дистрактор Lesen 1.1 A (был угадываемый штамп), Hören A2 №9 A (убрано «nur»), в скрипте Hören A2 уточнено, кто выбирает старост, заметка Hören A3 №10 (вариант угадывался по грамматике), дистрактор Hören A3 №4, одна фраза в скрипте A3 («anfällig» без дополнения), из словариков убраны слова-ответы Hören A3 (Ersatzhandlung, verzeihen).
- Пересечение тем: до текста сняты подарки (telc C2 №6), «Schulstraße» (ÖSD C1 №6), ночной транспорт (ÖSD B2 №6), коньки в Hören A1 заменены скалодромом.
