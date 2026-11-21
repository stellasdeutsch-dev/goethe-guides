# Пробник Stellas B2 №7: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-b2-7.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны Командой Stellas с нуля. Из официальных материалов взяты только формат и короткие стандартные инструкции. Люди, город Erlhausen, магазин, «Lernwerkstatt am Rosenplatz» и спортклуб вымышлены. Утверждения героев поданы как мнения, без статистики и ссылок на исследования.

## Формат и баллы
Все цифры взяты из уже проверенных research-файлов, заново не перепроверялись:
- `research/b2-modellsatz-razbor.md` и `research/goethe-b2-lesen.md`: Lesen 65 мин, 5 частей 9+6+6+6+3 = 30, рекомендованное время 18/12/12/12/6, около 5 мин на перенос. [MS S.6–16; DB §1.3]
- `research/goethe-b2-hoeren.md`: Hören около 40 мин, 4 части 10+6+6+8 = 30; проигрывания 1/2/1/2; время на чтение 90/60/90 с. [MS S.17–21]
- `research/lesen-b2-teile.md`: в Teil 2 два лишних предложения, в Teil 4 пример a и одно лишнее мнение, в Teil 5 пример § 0 и четыре лишних заголовка.
- Lesen и Hören: верные × 3,33, 18 верных = 60 = порог модуля (в AnswerSheet `factor={3.33} maxPoints={100} pass={60}`). [DB §4.1–4.2, §6.3]
- `research/goethe-b2-schreiben.md`: Schreiben 75 мин, Teil 1 форум около 150 слов за 50 мин (60 баллов), Teil 2 сообщение около 100 слов за 25 мин (40 баллов). [MS S.23–24, S.46–47]
- `research/goethe-b2-sprechen.md`: 15 мин подготовки, доклад около 4 мин, дискуссия около 5 мин; 32 + 12 / 40 / 16. [MS S.25–27, S.50]

## Темы
- Lesen: T1 форум о работе на неполную ставку (Franziska, Henning, Bilge, Wilfried); T2 статья о ходьбе босиком «Mit nackten Füßen unterwegs»; T3 газетная статья о магазине без упаковки «Nudeln aus dem Spender» (Leonore Kunz); T4 мнения «Brauchen wir noch Schulnoten?»; T5 устав спортивного клуба.
- Hören: T1 подаренный курс акварели; Mailbox репетиторской школы (смена преподавателя); совместные поездки на работу (Fahrgemeinschaft); бабушкино пианино; пятница без совещаний. T2 интервью с метеорологом Dr. Andreas Seeger. T3 дискуссия «Wohnen im Hotel Mama» (Moderator, Dr. Hannah Wiegand, Finn Pfeiffer). T4 доклад Dr. Jakob Hagedorn «Warum Zuhören so schwer ist».
- Schreiben: T1 форум «Nachbarschaft heute: Brauchen wir unsere Nachbarn noch?»; T2 сообщение арендодательнице Frau Reinholz: просьба о субаренде.
- Sprechen: T1 «Den Feierabend sinnvoll nutzen» / «Sich auf eine längere Reise vorbereiten»; T2 «Sollen ältere Autofahrer regelmäßig ihre Fahrtauglichkeit überprüfen lassen?».
- Бронь тем: `scratchpad/topics/goethe-b2.md`. Сверено с Goethe B2 №1–5, telc B2 №1–4, ÖSD B2 №1–4 и бронями других авторов этой волны. Курс гончарного дела и доклад о коллекционировании заменены, чтобы не дублировать Goethe C1 №6.

## Ключ Lesen
| Teil | Ответы |
|---|---|
| 1 (a Franziska, b Henning, c Bilge, d Wilfried; 0 = c) | 1 d, 2 a, 3 b, 4 a, 5 c, 6 b, 7 d, 8 a, 9 c |
| 2 (пример 0 в тексте) | 10 g, 11 a, 12 d, 13 h, 14 f, 15 b; лишние c, e |
| 3 | 16 b, 17 a, 18 c, 19 a, 20 c, 21 b |
| 4 (a Hildegard = пример) | 22 c, 23 b, 24 g, 25 d, 26 h, 27 e; лишнее f |
| 5 (§ 0 = a) | 28 d, 29 f, 30 c; лишние b, e, g, h |

## Ключ Hören
| Teil | Ответы |
|---|---|
| 1 | 1 Falsch, 2 a, 3 Falsch, 4 b, 5 Falsch, 6 b, 7 Richtig, 8 c, 9 Richtig, 10 a |
| 2 | 11 a, 12 b, 13 c, 14 c, 15 a, 16 b |
| 3 (a Moderator, b Wiegand, c Pfeiffer) | 17 c, 18 a, 19 b, 20 c, 21 b, 22 a |
| 4 | 23 a, 24 c, 25 b, 26 a, 27 b, 28 c, 29 c, 30 b |

## Проверка
- `node scripts/check-mdx.mjs` → ✓. `python3 scripts/answers.py` → 30 / 30 (9+6+6+6+3 и 10+6+6+8). `python3 -I scripts/audit-mocks.py` → ✓, серий из 4+ нет, все цитаты из `why` найдены, id и аудио уникальны.
- Верный вариант самый длинный: Lesen Teil 3 0 из 6, Hören 1 из 19 (Hören 16).
- Озвучка: метки говорящих проверены функциями `turns`, `gender`, `self_gender` из `scripts/gen-listen-audio.py`: у всех голосов определён пол, монологи начинаются с представления. Озвучка не запускалась.
- Слепое решение: отдельный агент решил страницу без ключа и объяснений, 60 из 60 совпали с ключом. По его замечаниям переписаны: Lesen Teil 2 (оба лишних предложения были очевидно чужими, заменены на правдоподобные с «Orthopäden … deshalb» и «Kindergarten … deshalb»), Lesen 21 (вариант b точнее передаёт «gelassen»), Lesen 30 (§ 30 противоречил сам себе «schriftlich» и «per E-Mail»), Hören 1 (Richtig угадывался по теме), Hören 10 (вариант a точнее передаёт страх мужчины). Исправлены фразы в интервью (Sonnensymbol, оценка силы шторма) и в тексте 5 (повтор «schon»). До слепого решения переставлены варианты Hören 29: ключ Teil 4 шёл кругом a b c a b.
- Ловушки, которые стоит знать: L1 (у Bilge передумал начальник, не она), L22 (Jörg тоже упоминает «Bericht»), H6 (деньги на бензин делят, но главное разговоры), H11 (метеостанцию дед подарил, но она скучала), H22 (Pfeiffer «Schön wäre es … glaube ich nicht mehr daran»).
- Неуверенность: Hören 4 (в сообщении две просьбы: зайти и перезвонить; в вариантах только первая, вторая не предложена), Lesen 28 и 29 (в параграфах есть суммы, заголовок b «Mitgliedsbeiträge» как приманка; главная тема однозначна).
