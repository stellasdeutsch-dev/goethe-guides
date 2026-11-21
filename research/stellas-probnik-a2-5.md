# Пробник Stellas A2 №5: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-a2-5.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны Командой Stellas. Из материалов Goethe взяты только формат и короткие стандартные инструкции.

## Формат и баллы (источники)
- Lesen 30 мин, 4 части × 5 заданий: Teil 1–3 a/b/c (Teil 2 с «anderer Stock»), Teil 4 Zuordnung a–f + X. [`research/goethe-a2-lesen.md`, MS Seite 3–12]
- Hören ~30 мин: Teil 1 и 4 дважды, Teil 2 и 3 один раз; Teil 2 a–i, каждую букву один раз; Teil 4 Ja/Nein. [`research/goethe-a1-a2-lesen-hoeren.md`, MS Seite 16–19]
- 20 Items × 1,25 = 25 за Lesen и за Hören; порог общий 45/75 + 15/25 + 60. `factor={1.25}`, `maxPoints={25}`, без `pass`. [DB 4.1, 4.2, 6.3]
- Schreiben: SMS 20–30, e-mail 30–40, меньше 50 % слов → 0. [MS Seite 22, 37]
- Sprechen: 2+2, 4+4, 4+4, Aussprache 5. Teil 3 здесь без календарей, планирование по подсказкам: так устроен Teil 3 в Übungssatz 01 Erwachsene (US Seite 26–27, «Sie planen eine Party. Was wollen Sie organisieren?»). [`research/goethe-a2-sprechen.md`]

## Темы
- Lesen T1: школа в Киле, где телефоны лежат в шкафу до конца уроков. T2: указатель в народном университете (VHS). T3: e-mail Кристины о велопоездке по Дунаю. T4: объявления о подержанных вещах.
- Hören T1: отель (приезд после 22), аптека, бистро в поезде закрыто, концерт в парке или в зале, вечеринка у родителей. T2: меню на неделю (что в какой день). T3: дорога к музею, выбор сумки, встреча перед театром, осмотр квартиры, планы коллеги на неделю. T4: интервью с молодым пекарем.
- Schreiben: SMS соседу по квартире о потерянном ключе; e-mail тренеру сына.
- Sprechen: T1 Lieblingsort/Getränke/Kindheit/Computerspiele, Bus/Markt/Ferien/Nachbarn; T2 «Was machen Sie mit Ihren Freunden?»; T3 сюрприз для соседки на 80-летие (без календарей).

## Ключ Lesen
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 b | 6 a (Kasse, EG) | 11 b | 16 b |
| 2 c | 7 c (Bewerbungstraining, 2. Stock) | 12 a | 17 c |
| 3 a | 8 b (Einstufungstests, 3. Stock) | 13 b | 18 X (детский велосипед 4–6 лет) |
| 4 c | 9 a (Lehrküche, 1. Stock) | 14 a | 19 d |
| 5 b | 10 c (Gitarre, 4. Stock) | 15 c | 20 a |

Teil 4: пример = f, лишнее объявление e. Баланс Teil 1–3: a 5, b 5, c 5.

## Ключ Hören
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 a (позвонить заранее) | 6 d (Di: Suppe) | 11 a (Taxi) | 16 Nein |
| 2 c (завтра с 8) | 7 g (Mi: Salat) | 12 b (braune) | 17 Nein |
| 3 b (к месту) | 8 i (Do: Reis mit Gemüse) | 13 c (halb 8) | 18 Ja |
| 4 a (5 €) | 9 a (Fr: Fisch) | 14 a (Bad) | 19 Nein |
| 5 b (сад родителей) | 10 b (Sa: Pfannkuchen) | 15 c (Englischkurs) | 20 Ja |

Teil 2: пример Montag = f (Nudeln); лишние c Hähnchen, e Kartoffeln, h Pizza. Teil 1+3: a 4, b 3, c 3. Ja 2, Nein 3.

## Образцы Schreiben (подсчёт слов скриптом)
- SMS Paul: 31 с обращением и подписью, 28 без.
- E-mail Herr Scholz: 39 с обращением и подписью, 36 без.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py` → 20 + 20.
- Слепое решение по тексту без ключа: 40/40 совпали. После него переписан Lesen 3 (b и c были «нет в тексте», стали прямо опровергаемыми) и фраза про тесто в Hören T4.
- Сверка тем с параллельными пробниками A2 (ÖSD A2 №1–3, telc A2 №2–4): короткие клипы «аптека» (telc A2 №4, ночное дежурство) и «пекарня» (telc A2 №3, заказ торта) пересекаются по месту, но не по ситуации. Оставлены, отмечены в отчёте.
- Все немецкие цитаты из `why` найдены дословно в текстах и скриптах.
