# Пробник Stellas telc A1 №2: ключ и источники

Статья: `src/content/guides/telc/probniki/telc-a1-probnik-stellas-2.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны Командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции. Аудио не генерировалось.

## Формат и баллы
Как в `research/telc-a1-probnik-stellas-1.md` (источник: research/telc-a1.md, telc Start Deutsch 1 Übungstest 1, 2021). Словарь запрещён (UT1 с. 13). AnswerSheet `telc-a1-stellas-2-hoeren`, `telc-a1-stellas-2-lesen`, `factor={1}`, `maxPoints={15}`, без `pass`. Trainer `telc-a1-stellas-2-schreiben`.

## Темы
Hören: билет до Кёльна (только туда), столик на 20:30, выходной у Яна, утреннее плавание, кабинет 351, отпуск с сестрой; поезд без бистро, скидка на пальто, йога в саду, пекарня вечером; автошкола (новое время), этаж квартиры, Бен и велосипед, свадьба (фото), школа (головная боль).
Lesen: письмо бабушке о первом рабочем дне; записка о сломанном принтере; детская одежда, воскресный завтрак, уборка квартиры, фото на паспорт, зал на 30 гостей; камеры хранения, фитнес в воскресенье, завтрак в отеле, возврат с чеком, автомат с картой.
Schreiben: бронь отеля во Фрайбурге; отказ подруге от дня рождения (du).
Sprechen: Teil 2 «Kleidung», «Gesundheit»; Teil 3 марка, счёт, словарь, велосипед, тарелка, нож.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1 | a (23 Euro) | «Nein, nur hin» / «Das macht dreiundzwanzig Euro» |
| 2 | b (20.30) | «Ja, um halb neun geht es» |
| 3 | c (Mittwoch) | «Aber am Mittwoch habe ich frei» |
| 4 | a (schwimmt) | «Aber ich schwimme jeden Morgen eine halbe Stunde» |
| 5 | b (351) | «Sie ist jetzt in Zimmer dreihunderteinundfünfzig» |
| 6 | a (Schwester) | «Ich fahre mit meiner Schwester nach Spanien» |
| 7 | falsch | «Der Intercity hat heute leider kein Bistro» |
| 8 | richtig | «im dritten Stock alle Jacken und Mäntel dreißig Prozent billiger» |
| 9 | richtig | «wir machen Yoga im Garten» |
| 10 | falsch | «Kuchen gibt es heute leider nicht mehr» |
| 11 | b (10.00) | «Können Sie um zehn Uhr kommen?» |
| 12 | c (vierter Stock) | «Die Wohnung ist im vierten Stock» |
| 13 | a (Fahrrad) | «Fahren wir lieber Fahrrad?» |
| 14 | c (Fotos) | «Kannst du die Fotos machen?» |
| 15 | b (Kopfschmerzen) | «Ihr Sohn David hat starke Kopfschmerzen» |

Баланс a/b/c: 4/4/3; R/F 2/2.

## Ключ Lesen
1 R · 2 F · 3 F · 4 R · 5 R · 6 b · 7 b · 8 a · 9 a · 10 b · 11 R · 12 F · 13 R · 14 F · 15 F (R/F 5/5, a/b 2/3)

## Schreiben Teil 1 (форма)
1 → 12.09. · 2 → 2 (Nächte) · 3 → 3 (Personen) · 4 → ja · 5 → nein

## Образец Teil 2
33 слова без обращения и подписи, 6 предложений.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: Hören 15, Lesen 15.
- Слепое решение (2026-11-21): расхождений нет. Цитаты из `why` найдены в тексте скриптом.
- Под вопросом: 11 (новое время предложено вопросом, не подтверждено; другого допустимого времени нет), 11 Lesen (формулировка про Schließfach «Koffer kann einen Tag bleiben»).
