# Пробник Stellas B2 №6: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-b2-6.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны Командой Stellas с нуля. Из официальных материалов взяты только формат и короткие стандартные инструкции. Люди, деревня Kleinmerten, фирмы и бюро находок вымышлены. Утверждения героев поданы как мнения, без статистики и ссылок на исследования.

## Формат и баллы
Все цифры взяты из уже проверенных research-файлов, заново не перепроверялись:
- `research/b2-modellsatz-razbor.md` и `research/goethe-b2-lesen.md`: Lesen 65 мин, 5 частей 9+6+6+6+3 = 30, рекомендованное время 18/12/12/12/6, около 5 мин на перенос. [MS S.6–16; DB §1.3]
- `research/goethe-b2-hoeren.md`: Hören около 40 мин, 4 части 10+6+6+8 = 30; проигрывания 1/2/1/2; время на чтение 90/60/90 с. [MS S.17–21]
- `research/lesen-b2-teile.md`: в Teil 2 два лишних предложения, в Teil 4 пример a и одно лишнее мнение, в Teil 5 пример § 0 и четыре лишних заголовка.
- Lesen и Hören: верные × 3,33, 18 верных = 60 = порог модуля (в AnswerSheet `factor={3.33} maxPoints={100} pass={60}`). [DB §4.1–4.2, §6.3]
- `research/goethe-b2-schreiben.md`: Schreiben 75 мин, Teil 1 форум около 150 слов за 50 мин (60 баллов), Teil 2 сообщение около 100 слов за 25 мин (40 баллов). [MS S.23–24, S.46–47]
- `research/goethe-b2-sprechen.md`: 15 мин подготовки, доклад около 4 мин, дискуссия около 5 мин; 32 + 12 / 40 / 16. [MS S.25–27, S.50]

## Темы
- Lesen: T1 форум о сменной работе (Henrike, Dragan, Gerd, Derya); T2 статья о хлебе на закваске «Das Brot, das Zeit braucht»; T3 газетная статья о книжном автобусе «Die Bibliothek, die vorfährt» (Imke Ohlsen); T4 мнения «Kinderfreie Zonen in Hotels und Restaurants: in Ordnung?»; T5 условия проката грузовых велосипедов.
- Hören: T1 первая налоговая декларация через приложение; Mailbox бюро находок (кошелёк без наличных); женщина научилась плавать после 39; где праздновать 70-летие мамы; Desk-Sharing в офисе. T2 интервью с вулканологом Dr. Greta Mertens. T3 дискуссия «Ein Jahr raus aus dem Job» (Moderatorin, Matthias Kober, Ida Hartl). T4 доклад Dr. Frieda Engel «Warum wir uns verlaufen».
- Schreiben: T1 форум «Online einkaufen: bequem, aber zu welchem Preis?»; T2 сообщение Herrn Wollny (Personalabteilung): отмена оплаченного семинара.
- Sprechen: T1 «Umweltfreundlich zur Arbeit kommen» / «Sich im Alltag besser konzentrieren»; T2 «Sollte Fleisch deutlich teurer werden?».
- Бронь тем: `scratchpad/topics/goethe-b2.md`. Сверено с Goethe B2 №1–5, telc B2 №1–4, ÖSD B2 №1–4 и бронями telc B2 №5–6, ÖSD B2 №5–6, Goethe C1 №6–7, telc DTZ.

## Ключ Lesen
| Teil | Ответы |
|---|---|
| 1 (a Henrike, b Dragan, c Gerd, d Derya; 0 = c) | 1 b, 2 c, 3 a, 4 c, 5 a, 6 d, 7 b, 8 d, 9 a |
| 2 (пример 0 в тексте) | 10 e, 11 d, 12 h, 13 g, 14 c, 15 a; лишние b, f |
| 3 | 16 c, 17 a, 18 c, 19 b, 20 a, 21 b |
| 4 (a Roswitha = пример) | 22 e, 23 c, 24 f, 25 h, 26 g, 27 b; лишнее d |
| 5 (§ 0 = a) | 28 d, 29 e, 30 g; лишние b, c, f, h |

## Ключ Hören
| Teil | Ответы |
|---|---|
| 1 | 1 Falsch, 2 a, 3 Falsch, 4 b, 5 Richtig, 6 a, 7 Richtig, 8 c, 9 Richtig, 10 b |
| 2 | 11 c, 12 a, 13 b, 14 b, 15 a, 16 c |
| 3 (a Moderatorin, b Kober, c Hartl) | 17 c, 18 a, 19 b, 20 b, 21 c, 22 a |
| 4 | 23 a, 24 c, 25 b, 26 b, 27 a, 28 c, 29 a, 30 b |

## Проверка
- `node scripts/check-mdx.mjs` → ✓. `python3 scripts/answers.py` → 30 / 30 (9+6+6+6+3 и 10+6+6+8). `python3 -I scripts/audit-mocks.py` → ✓, серий из 4+ нет, все цитаты из `why` найдены, id и аудио уникальны.
- Верный вариант самый длинный: Lesen Teil 3 0 из 6, Hören 1 из 19 (Hören 29).
- Озвучка: метки говорящих проверены функциями `turns`, `gender`, `self_gender` из `scripts/gen-listen-audio.py`: у всех голосов определён пол, монологи начинаются с представления. Озвучка не запускалась.
- Слепое решение: отдельный агент решил страницу без ключа и объяснений, 60 из 60 совпали с ключом. По его замечаниям переписаны: Hören 1 (размытое «geholfen»), Hören 3 и 5 (Richtig/Falsch угадывались по теме, теперь 3 про содержимое кошелька), Hören 10 (вариант b точнее передаёт «ganz froh»), Lesen 19 (вариант c был наполовину верен), Lesen Teil 5 (заголовки c и f пересекались с § 29 и § 30, заменены; переформулирована последняя фраза § 30), исправлена фраза в Lesen Teil 3 («jemandem hilft»).
- Ловушки, которые стоит знать: L5 (Derya ночью тоже не одна, но без разговоров), L7 (хор Derya не бросила), H10 (жалуется мужчина, вопрос про женщину), H18 (Kober «Viele trauen sich … nicht» о других), H22 (Kober возражает «Das sehe ich anders»).
- Неуверенность: Lesen 14 (дистрактор b тоже начинается с «Deshalb»; логически не подходит, но это самая сильная приманка), Hören 7 и 9 (Richtig по теме текста, как в Modellsatz, но решаются легко).
