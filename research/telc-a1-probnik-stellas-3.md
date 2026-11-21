# Пробник Stellas telc A1 №3: ключ и источники

Статья: `src/content/guides/telc/probniki/telc-a1-probnik-stellas-3.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны Командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции. Аудио не генерировалось.

## Формат и баллы
Как в `research/telc-a1-probnik-stellas-1.md` (источник: research/telc-a1.md, telc Start Deutsch 1 Übungstest 1, 2021). FAQ про сдачу частями: telc.net (страница экзамена) «Sie kann NICHT als Teilprüfung abgelegt werden»; Prüfungsregularien Anhang 1: «Die Anrechnung von Teilergebnissen ist nicht möglich für Prüfungen auf dem Niveau A1» (оба уже в research/telc-a1.md). AnswerSheet `telc-a1-stellas-3-hoeren`, `telc-a1-stellas-3-lesen`, `factor={1}`, `maxPoints={15}`, без `pass`. Trainer `telc-a1-stellas-3-schreiben`.

## Темы
Hören: клубника на рынке, подъём перед рейсом, животное для Лены, погода в горах, автобус до больницы, что изучает Лина; пересадка в Майнце, детское рисование в универмаге, сауна в отеле, фото в цирке; ветеринар (когда забрать собаку), код от ящика с ключом, театральные билеты, кулинарный курс (нож), сколько пробудет бабушка.
Lesen: письмо о рождении дочери; записка соседу про чужой велосипед; продать телефон, ферма с животными, книга в подарок, хостел в Берлине, новая лампа; яйца на ферме, тихая зона в поезде, купаться запрещено, велосипеды в отеле, магазин на заправке.
Schreiben: запись ребёнка на курс плавания; открытка из отпуска другу (du).
Sprechen: Teil 2 «Schule und Lernen», «Tiere»; Teil 3 ложка, полотенце, фото, мяч, молоко, плед.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1 | b (7 Euro) | «zwei Kilo kosten nur sieben Euro» |
| 2 | a (4.30) | «Wir stehen um halb fünf auf» |
| 3 | c (Fisch) | «Aber ein Fisch, das geht» |
| 4 | b (Sonne) | «morgen scheint dort die Sonne» |
| 5 | c (Linie 21) | «Zum Krankenhaus fährt die einundzwanzig» |
| 6 | b (Musik) | «Ich studiere Musik» |
| 7 | richtig | «Fahrgäste nach Frankfurt steigen bitte in Mainz um» |
| 8 | falsch | «Die Eltern können in dieser Zeit in Ruhe einkaufen» |
| 9 | richtig | «Die Sauna ist aber wie immer bis zweiundzwanzig Uhr offen» |
| 10 | falsch | «Und bitte machen Sie keine Fotos» |
| 11 | a (morgen früh) | «Morgen früh, ab acht Uhr, können Sie ihn abholen» |
| 12 | c (7419) | «vierundsiebzig, neunzehn» |
| 13 | a (Samstag) | «Die Karten sind für Samstag» |
| 14 | b (Messer) | «Bitte bringen Sie ein gutes Messer mit» |
| 15 | a (drei Tage) | «Sie bleibt nur drei Tage» |

Баланс a/b/c: 4/4/3; R/F 2/2.

## Ключ Lesen
1 R · 2 F · 3 R · 4 F · 5 R · 6 b · 7 a · 8 b · 9 a · 10 a · 11 R · 12 F · 13 R · 14 F · 15 F (R/F 5/5, a/b 3/2)

## Schreiben Teil 1 (форма)
1 → 7 · 2 → Nürnberg · 3 → noch nicht schwimmen · 4 → Freitag · 5 → 0157 33 81 26

## Образец Teil 2
36 слов без обращения и подписи, 5 предложений.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: Hören 15, Lesen 15.
- Слепое решение (2026-11-21): расхождений нет. Цитаты из `why` найдены в тексте скриптом.
- Под вопросом: Lesen 13 (baden = schwimmen, синоним уровня A1–A2), Lesen 11 (расчёт цены за штуку, 30 Cent).
