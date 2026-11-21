# Пробник Stellas A2 №3: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-a2-3.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны Командой Stellas. Из материалов Goethe взяты только формат и короткие стандартные инструкции.

## Формат и баллы (источники)
- Lesen 30 мин, 4 части × 5 заданий: Teil 1–3 a/b/c, Teil 2 с вариантом «andere Ebene» (как «andere Halle» в Übungssatz), Teil 4 Zuordnung a–f + X, объявление примера занято. [`research/goethe-a2-lesen.md`, MS Seite 3–12, US Seite 8]
- Hören ~30 мин: Teil 1 два раза, Teil 2 один раз (a–i, каждую букву один раз), Teil 3 один раз, Teil 4 два раза (Ja/Nein). [`research/goethe-a1-a2-lesen-hoeren.md`, MS Seite 16–19]
- Lesen/Hören: 20 Items × 1,25 = 25. Порог только общий: 45/75 письменно, 15/25 Sprechen, 60 всего. В AnswerSheet `factor={1.25}`, `maxPoints={25}`, без `pass`. [DB 4.1, 4.2, 6.3; `research/a2-modellsatz-razbor.md`]
- Schreiben: SMS 20–30 слов, e-mail 30–40, меньше 50 % слов → E → 0 за задание. [`research/goethe-a2-schreiben.md`, MS Seite 22, 37]
- Sprechen: 2+2, 4+4, 4+4, Aussprache 5; 15 мин в паре, без подготовки. [`research/goethe-a2-sprechen.md`, MS Seite 43, DB 1.4]

## Темы
- Lesen T1: курс плавания для взрослых в Эрфурте. T2: указатель в аэропорту (Ebene 0–3). T3: e-mail Дильнозы о рождении дочки. T4: объявления о квартирах в Лейпциге.
- Hören T1: автомастерская, кинозал, городской забег, встреча перед матчем, закрытие супермаркета. T2: рождественские подарки (кому что). T3: посылка на почте, комната для совещания, путь на вокзале, курс гимнастики для спины, кто заберёт ребёнка из сада. T4: интервью с больничным клоуном.
- Schreiben: SMS другу о новой работе; e-mail начальнице о выходном дне.
- Sprechen: T1 Kinder/Auto/Computer/Kaffee, Garten/Fahrrad/Restaurant/Zeitung; T2 «Was machen Sie für Ihre Gesundheit?»; T3 вместе учиться к экзамену, пятница, 2 часа.

## Ключ Lesen
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 b | 6 c (Check-in на Ebene 2) | 11 c | 16 d |
| 2 c | 7 a (Ankunft, Ebene 1) | 12 a | 17 f |
| 3 a | 8 b (Bahnhof, Ebene 0) | 13 b | 18 a |
| 4 b | 9 c (Apotheke на Ebene 0) | 14 c | 19 X (все объявления Miete) |
| 5 a | 10 b (Besucherterrasse, Ebene 3) | 15 a | 20 b |

Teil 4: пример = e, лишнее объявление c. Баланс Teil 1–3: a 5, b 5, c 5.

## Ключ Hören
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 c (завтра с 14) | 6 f (Opa: Buch) | 11 b (12 €) | 16 Nein |
| 2 a (другой зал) | 7 c (Rita: Konzertkarten) | 12 a (Raum 210) | 17 Ja |
| 3 b (короткий забег) | 8 h (Leo: Helm) | 13 c (Gleis 11) | 18 Ja |
| 4 a (U-Bahn) | 9 e (Max: Schokolade) | 14 a (Rückengymnastik) | 19 Nein |
| 5 c (кассы 2 и 3) | 10 a (Frau Schulz: Pflanze) | 15 b (Oma) | 20 Ja |

Teil 2: пример Oma = d; лишние b Puzzle, g Handschuhe, i Kochbuch. Teil 1+3: a 4, b 3, c 3. Ja 3, Nein 2.

## Образцы Schreiben (подсчёт слов скриптом)
- SMS Max: 32 с обращением и подписью, 29 без.
- E-mail Frau Hoffmann: 41 с обращением и подписью, 38 без.

## Sprechen Teil 3: календари
A занят 7–12, 12.30–13.30, 14–15, 18–19, с 20. B занят 8–12, 12–14, 15–16, с 18. День 7–21. Общее окно ≥2 ч только 16–18.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py` → 20 + 20.
- Слепое решение по тексту без ключа: 40/40 совпали. После него переписаны: Lesen 12c (дистрактор не опровергался прямо), формулировка «auf die Welt gekommen» в Teil 3.
- Сверка тем с параллельными пробниками A2 (ÖSD A2 №1–3, telc A2 №2–4): Hören T1 №3 «день открытых дверей пожарных» совпал с ÖSD A2 №2, заменён на городской забег.
- Все немецкие цитаты из `why` найдены дословно в текстах и скриптах (скрипт-проверка).
