# Пробник Stellas telc A1 №1: ключ и источники

Статья: `src/content/guides/telc/probniki/telc-a1-probnik-stellas-1.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны Командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции. Аудио не генерировалось (озвучка после редактора).

## Формат и баллы (из research/telc-a1.md = telc Start Deutsch 1, Übungstest 1, 2021, с. 5, 7–21, 34)
- Hören ca. 20 мин, 15 заданий: Teil 1 (1–6, a/b/c, zweimal), Teil 2 (7–10, richtig/falsch, einmal), Teil 3 (11–15, a/b/c, zweimal). `plays` = 2/1/2.
- Lesen und Schreiben 45 мин вместе (Lesen ca. 25, Schreiben ca. 20). Lesen 15 заданий: Teil 1 (1–5, R/F, 2 текста), Teil 2 (6–10, a/b), Teil 3 (11–15, R/F).
- Schreiben: Teil 1 формуляр 5 × 1 балл; Teil 2 ca. 30 слов, 3 пункта × 3/1,5/0 + оформление 1/0,5/0, max 10.
- Sprechen 15 баллов: Teil 1 max 3, Teil 2 max 6, Teil 3 max 6. Обычно 4 участника, без подготовки.
- Всего 60; Prädikat ausreichend с 36 (шкала Übungstest). Порог общий → в AnswerSheet `factor={1}`, `maxPoints={15}`, без `pass`.
- AnswerSheet id: `telc-a1-stellas-1-hoeren`, `telc-a1-stellas-1-lesen`; Trainer id `telc-a1-stellas-1-schreiben`.

## Темы (не пересекаются с Goethe A1 №1–2, telc UT1, №2 и №3)
Hören: булочки в пекарне, начало матча, подарок отцу, ключи под газетой, такси на Gartenstraße 18, на работу на метро; библиотека (детская программа), теплоход (бар), кемпинг (праздник в дождь), парковка (фары); оптика (очки), музыкальная школа (цена урока), встреча перед велопрогулкой, мама и собака, родительское собрание.
Lesen: письмо про блошиный рынок во дворе; записка домоуправителя (нет воды); языковое кафе, гостиница для собак, доставка цветов, прачечная, пансион в горах; остановка перенесена, обеденное меню, велосипеды в подвал, детский футбол 6–10, киоск.
Schreiben: читательский билет в библиотеку; письмо арендодателю о сломанном отоплении (Sie).
Sprechen: Teil 2 «Arbeit», «Reisen»; Teil 3 зонт, билет, очки, соль, газета, масло.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1 | a (4) | «Dann nur vier Brötchen, bitte» |
| 2 | c (19.45) | «Nein, es beginnt um Viertel vor acht» |
| 3 | c (Hemd) | «das Hemd hier ist schön … Das nehme ich» |
| 4 | a (auf dem Tisch) | «Sie liegen auf dem Tisch» |
| 5 | b (Gartenstraße 18) | «Nein, achtzehn. Eins, acht» |
| 6 | c (U-Bahn) | «Dann nehme ich die U-Bahn» |
| 7 | falsch | «Das Kinderprogramm ist im zweiten Stock» |
| 8 | richtig | «Getränke bekommen Sie aber noch an der Bar» |
| 9 | falsch | «Dann feiern wir im Restaurant» |
| 10 | richtig | «Bitte gehen Sie schnell zu Ihrem Auto» |
| 11 | b (ab Donnerstag) | «Ab Donnerstag können Sie sie abholen» |
| 12 | b (22 Euro) | «Sie kostet zweiundzwanzig Euro» |
| 13 | a (am Bahnhof) | «Wir treffen uns um zehn am Bahnhof» |
| 14 | c (Hund) | «Aber geh bitte mit dem Hund in den Park» |
| 15 | b (19.30) | «… eine halbe Stunde später, um halb acht» |

Баланс a/b/c: 3/4/4; R/F 2/2.

## Ключ Lesen
1 R · 2 F · 3 F · 4 R · 5 F · 6 a · 7 b · 8 b · 9 a · 10 b · 11 R · 12 F · 13 R · 14 F · 15 R (R/F 5/5, a/b 2/3)

## Schreiben Teil 1 (форма)
1 → Bremen · 2 → 03.07.1990 · 3 → Kirgistan · 4 → für Erwachsene · 5 → E-Mail

## Образец Teil 2
30 слов без обращения и подписи, 5 предложений.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: Hören 15, Lesen 15.
- Слепое решение по тексту и скриптам (2026-11-21): расхождений с ключом нет. Все немецкие цитаты из `why` найдены в тексте страницы скриптом.
- Под вопросом: 12 (дистрактор 20 Euro слабый), 10 (водитель = покупатель выводится из «Information für unsere Kunden»).
