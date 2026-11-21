# Пробник Stellas ÖSD A2 №3: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-a2-probnik-stellas-3.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции.

## Формат и баллы
Как в пробнике №1: см. `research/oesd-a2-probnik-stellas-1.md` (раздел «Формат и баллы» и проверка официальных PDF 2026-11-21), основа `research/oesd-a2.md`.

Бланки: `oesd-a2-stellas-3-lesen-teil1` (factor 3, max 15), `-lesen-teil2` (factor 2, max 10), `-hoeren-teil1` (8 клеток), `-hoeren-teil2` (factor 2, max 10), `-hoeren-teil3` (25 клеток).

FAQ «Можно ли оставить строку пустой»: правило «Wenn in einer Zeile alles oder nichts angekreuzt ist: 0 Punkte» из HV-PDF Modellsatz ZA2, стр. 2. Ссылка на Test-Training digital и ZA2/Ö Modellsatz: из `research/probniki-oesd.md` и разбора Modellsatz ZA2.

## Темы
- Lesen A1: бесплатные курсы первой помощи в Филлахе; городской забег в Линце, перекрытые улицы; опрос о чтении подростков в Гамбурге; советы горной спасательной службы осенью; бесплатный интернет в трамваях Базеля.
- Lesen A2: молодая пара держит летом хижину на альме в Циллертале.
- Hören A1: летнее кино под открытым небом в Граце (радио + голосовое от друга).
- Hören A2: ветеринарная клиника, кошку можно забрать.
- Hören A3: опрос «Welches Instrument spielen Sie?».
- Schreiben: подруга Ева занимается йогой и зовёт с собой.
- Sprechen: темы Mein Morgen, Einkaufen, Urlaub, Kochen, Wetter, Ich möchte einmal …; планирование дня катания на санках.
- Проверено на пересечения, как в №1. Первоначальные темы «новый крытый бассейн» (Hören A1) и «бронь в пансионе» (Hören A2) заменены: бассейн и отель есть в черновике telc A2 №2.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1 | A | 1 | B |
| 2 | G | 2 | C |
| 3 | E | 3 | B |
| 4 | C | 4 | A |
| 5 | D | 5 | B |

Неиспользованные заголовки: B, F, H, I, K. Пример Aufgabe 2: B.

## Ключ Hören
Aufgabe 1 (Kino unter Sternen im Burggarten): отмечены Filme auf Englisch, Decken, bei Regen im Saal, Beginn 21.30 Uhr. Не отмечены: Popcorn, Beginn 20 Uhr, Hunde erlaubt, eigenes Essen mitbringen.

Aufgabe 2 (Tierarzt): heute abholen ab 16 Uhr · mitbringen Transportbox · Tabletten 2 mal am Tag · kostet 135 Euro · Telefon 0662 / 43 70 19.

Aufgabe 3 (Klavier · Gitarre · Geige · Flöte · Schlagzeug):
| Строка | Ключ |
|---|---|
| 1. Sprecherin (Frau Steiner) | Klavier, Gitarre |
| 2. Sprecher (Herr Aigner) | Schlagzeug |
| 3. Sprecherin (Sophie) | Geige, Flöte |
| 4. Sprecher (Herr Hofer) | Klavier, Gitarre, Geige |
| 5. Sprecherin (Frau Lechner) | Flöte |

## Проверка 2026-11-21
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: 5 + 5 Lesen, 8 + 5 + 25 Hören.
- Все цитаты «…» из `why` найдены дословно в текстах и скриптах страницы.
- Слепое решение по выписке без ключа: совпадение 48/48.
- Образец письма: 55 слов без напечатанного начала.
- Неуверенное: строка 1 и 3 Aufgabe 3. «lerne ich Gitarre» и «lerne Geige» засчитаны как «играет сейчас». Это наше решение, в материалах ÖSD прямого правила на этот случай нет.
