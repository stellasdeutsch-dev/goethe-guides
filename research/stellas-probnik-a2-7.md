# Пробник Stellas A2 №7: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-a2-7.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны Командой Stellas. Из материалов Goethe взяты только формат и короткие стандартные инструкции.

## Формат и баллы (источники)
- Lesen 30 мин, 4 части × 5 заданий: Teil 1–3 a/b/c, Teil 2 с вариантом «anderes Deck» (по образцу «anderer Stock» в MS и «andere Halle» в Übungssatz), Teil 4 Zuordnung a–f + X, объявление примера занято. [`research/goethe-a2-lesen.md`, MS Seite 3–12, US Seite 8]
- Hören ~30 мин: Teil 1 два раза, Teil 2 один раз (a–i, каждую букву один раз), Teil 3 один раз, Teil 4 два раза (Ja/Nein). [`research/goethe-a1-a2-lesen-hoeren.md`, MS Seite 16–19]
- Lesen/Hören: 20 Items × 1,25 = 25. Порог только общий: 45/75 письменно, 15/25 Sprechen, 60 всего. В AnswerSheet `factor={1.25}`, `maxPoints={25}`, без `pass`. [DB 4.1, 4.2, 6.3; `research/a2-modellsatz-razbor.md`]
- Schreiben: SMS 20–30 слов, e-mail 30–40, меньше 50 % слов → E → 0 за задание. [`research/goethe-a2-schreiben.md`, MS Seite 22, 37]
- Sprechen: 2+2, 4+4, 4+4, Aussprache 5; 15 мин в паре, без подготовки; Teil 3 планирование по подсказкам, как в Übungssatz. [`research/goethe-a2-sprechen.md`, US Seite 26–27, MS Seite 43, DB 1.4]

## Темы
- Lesen T1: молочный автомат на ферме под Любеком. T2: план палуб речного теплохода (Deck 1–4). T3: e-mail Гульшат о школьнике по обмену из Бразилии. T4: врачи и практики (зубной, детский, глазной, физиотерапия, домашний врач, ветеринар).
- Hören T1: техник по отоплению переносит визит, трамвай ночью по выходным, замена певицы и деньги за билеты, внук и сюрприз для бабушки, потерявшийся ребёнок в строительном магазине. T2: какие животные у соседей по дому. T3: прокат велосипеда, фрукты на рынке, дата отъезда в отпуск, поломка ноутбука, что Ида делала на выходных. T4: интервью с флористом.
- Schreiben: SMS соседке из супермаркета; e-mail заведующей детским садом.
- Sprechen: T1 Sonntag/Obst/Theater/Schuhe, Berge/Party/Uhr/Kuchen; T2 «Was machen Sie gern in der Natur?»; T3 вместе продать вещи на блошином рынке.

## Ключ Lesen
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 b | 6 b (Pool, Deck 4) | 11 a | 16 e |
| 2 a | 7 c (Arzt на Deck 2) | 12 c | 17 d |
| 3 c | 8 a (Kabinen 101–130, Deck 1) | 13 b | 18 a |
| 4 a | 9 c (Bibliothek со Spiele на Deck 3) | 14 c | 19 f |
| 5 b | 10 b (Shop с Sonnencreme, Deck 2) | 15 a | 20 X (c: 3. Stock без лифта) |

Teil 4: пример = b, лишнее объявление c. Баланс Teil 1–3: a 5, b 5, c 5.

## Ключ Hören
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 c (вторник утром) | 6 c (Albers: Vogel) | 11 b (один день) | 16 Ja |
| 2 a (только выходные) | 7 e (Kaminski: Hase) | 12 a (черешня) | 17 Nein |
| 3 c (деньги назад) | 8 d (Studenten: Fische) | 13 c (12 июля) | 18 Nein |
| 4 b (15.30) | 9 h (Grimm: Pferd) | 14 a (кабель) | 19 Ja |
| 5 a (на информации) | 10 g (Mats: Hamster) | 15 b (красила комнату) | 20 Ja |

Teil 2: пример Frau Wendt = a (Katze); лишние b Hund (чужой, мечта детей), f Schildkröte (отдали), i Meerschweinchen (хотел, не получил). Teil 1+3: a 4, b 3, c 3. Ja 3, Nein 2.

## Длина вариантов
Скрипт `scratchpad/goethe-a2-author/tools/longest.py`: верный вариант строго самый длинный: Lesen T1 1/5, T3 1/5, Hören T1 1/5 (время «um 15.30 Uhr»), T3 0/5.

## Образцы Schreiben (подсчёт слов скриптом)
- SMS Jule: 30 с обращением и подписью, 25 без.
- E-mail Frau Graf: 44 с обращением и подписью, 35 без.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py` → 20 + 20; `python3 -I scripts/audit-mocks.py` ✓.
- Сверка тем: Goethe A2 №1–5, telc A2 №1–4 (+ брони №5–6), ÖSD A2 №1–3 (+ брони №4–5). Имена сверены скриптом с A2 всех трёх экзаменов: Okafor, Pohl, Novak, Oskar, Böhm, Sonnenblume, Elbtal, Florian, Greta, Simon, Jens, Leon, Aigul, Bekova, Fuchs, Lorenzen, Sander заменены.
- Пересечение, о котором стоит знать: ÖSD A2 №5 (бронь oesd-a2) Lesen A2 про фермера с ламами. У нас другая тема (молочный автомат), но место действия тоже ферма.

## Слепое решение
Независимый агент решил Lesen и Hören по странице без ключа и объяснений: 40/40 совпали с ключом, двух верных ответов не нашёл. По его замечаниям переписано:
- Lesen 13: расплывчатый верный вариант «ist Lucas jetzt in einem Verein» → «spielt Lucas mit Ruslan zusammen».
- Lesen 20: «im Gips» (выше A2) → «Sie hatte einen Unfall».
- Lesen T3: «dabei ist es erst November» (B1) → «es ist doch erst November».
- Lesen T4 c: «Termine nur am Telefon» → «per Telefon».
- Hören 11: «Fahrrad leihen» → «mieten»; в конец добавлена реплика с «drei Stunden», чтобы ответ не был последним словом.
- Hören 13: в конец добавлена реплика про соседей и третье июля, по той же причине.
- Hören 14: «Tasten sind etwas schwer» → «gehen etwas schwer».
- Hören 15: вариант «Wohnung gestrichen» → «ein Zimmer gestrichen» (в записи Wohnzimmer).
- Hören T4: «Wie kam das?» → «Wie haben Sie den Laden bekommen?».
