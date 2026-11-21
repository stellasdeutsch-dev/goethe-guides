# Пробник Stellas ÖSD A2 №2: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-a2-probnik-stellas-2.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции.

## Формат и баллы
Как в пробнике №1: см. `research/oesd-a2-probnik-stellas-1.md` (раздел «Формат и баллы» и проверка официальных PDF 2026-11-21), основа `research/oesd-a2.md`.

Кратко: Lesen 30 мин, 5 × 3 + 5 × 2 = 25, минимум 5. Hören ок. 15 мин, 10 + 10 + 10 = 30, минимум 6 (задание 1 по таблице 10/7/4/1/0 и штраф за 5+ крестиков, задание 2 по 2 балла, задание 3 по строкам 2/1/0). Schreiben 30 мин, circa 50 Wörter, 15, минимум 3. Sprechen 10 + ок. 10 мин, 20, минимум 10. Письменный модуль от 35 из 70.

Бланки: `oesd-a2-stellas-2-lesen-teil1` (factor 3, max 15), `-lesen-teil2` (factor 2, max 10), `-hoeren-teil1` (8 клеток), `-hoeren-teil2` (factor 2, max 10), `-hoeren-teil3` (25 клеток).

## Темы
- Lesen A1: Kinderuni в Граце; новая площадка в Лейпциге; опрос о сне подростков в Берне; обмен одеждой в Вельсе; новые питьевые фонтанчики в Вене.
- Lesen A2: пенсионерка 71 года учится в университете Граца.
- Hören A1: день открытых дверей у добровольных пожарных (радио + голосовое от друга).
- Hören A2: оптика, готовые очки.
- Hören A3: опрос «Was essen Sie zum Frühstück?».
- Schreiben: подруга Надя летит в Алматы и спрашивает совета.
- Sprechen: темы Wohnung, Freunde, Kleidung, Filme und Serien, Handy und Internet, Ich kann gut …; планирование интернационального кулинарного вечера курса.
- Проверено на пересечения, как в №1. Первоначальные темы «соседка просит кормить кошку» (письмо) и «танцевальный курс» (Hören A2) заменены: они есть в черновике telc A2 №2.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1 | I | 1 | C |
| 2 | K | 2 | A |
| 3 | B | 3 | B |
| 4 | E | 4 | C |
| 5 | G | 5 | A |

Неиспользованные заголовки: A, C, D, F, H. Пример Aufgabe 2: B.

## Ключ Hören
Aufgabe 1 (Tag der offenen Tür bei der Feuerwehr): отмечены Führung durch das Haus, Eintritt frei, Beginn 13 Uhr, Kinder löschen ein Feuer. Не отмечены: Beginn 10 Uhr, Erste-Hilfe-Kurs, Fahrt im Feuerwehrauto, Eintritt 3 Euro.

Aufgabe 2 (Optiker): abholen ab Donnerstag · noch bezahlen 170 Euro · mitbringen alte Brille · Samstag bis 13 Uhr · Telefon 0316 / 52 38 17.

Aufgabe 3 (Brot oder Semmel · Müsli · Eier · Obst · Joghurt):
| Строка | Ключ |
|---|---|
| 1. Sprecherin (Frau Wallner) | Obst, Joghurt |
| 2. Sprecher (Herr Kaya) | Brot oder Semmel, Müsli, Eier |
| 3. Sprecherin (Lena) | Müsli |
| 4. Sprecher (Herr Brandner) | Brot oder Semmel, Obst |
| 5. Sprecherin (Frau Ivanova) | Brot oder Semmel, Joghurt |

## Баланс ключа Lesen Aufgabe 2 по трём пробникам
№1 B C A C A · №2 C A B C A · №3 B C B A B → A 5, B 5, C 5.

## Проверка 2026-11-21
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: 5 + 5 Lesen, 8 + 5 + 25 Hören.
- Все цитаты «…» из `why` найдены дословно в текстах и скриптах страницы.
- Слепое решение по выписке без ключа: совпадение 48/48.
- Образец письма: 68 слов без напечатанного начала.
