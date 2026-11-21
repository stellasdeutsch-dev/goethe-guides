# Пробник Stellas ÖSD B2 №6: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-b2-probnik-stellas-6.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны командой Stellas. Из официальных материалов ÖSD взяты только формат, число заданий, таблицы пересчёта и короткие стандартные инструкции.

## Формат и баллы (из research/oesd-b2.md: DB ZB2 Stand 10/2023, Gesamtbogen Vers. 5.0, ключ Modellsatz печ. стр. 20–23, Auswertungsbogen Schreiben 7.0 и Sprechen 4.0)
- Lesen 90 мин, 4 Aufgaben, 40 Items, 20 баллов, минимум 10. A1 5 × A/B/C (1 = 1 балл), A2 5 текстов и 10 заголовков A–K без J (1 = 1 балл), A3 20 строк с обрезанным краем до 3 букв (20–18 → 5, 17–15 → 4, 14–11 → 3, 10–7 → 2, 6–4 → 1, 3–0 → 0), A4 письмо, 10 пропусков по одному слову (10–9 → 5, 8–7 → 4, 6–5 → 3, 4–3 → 2, 2–1 → 1, 0 → 0).
- Hören ca. 30 мин, 40 Items, 20 баллов, минимум 10. A1 радиопередача в 4 Abschnitten, 3/3/2/2 R/F, звучит zwei Mal, все R или все F = 0 за Aufgabe. A2 разговор, таблица 3 × 10 = 30 Items, звучит ein Mal, Messpunkte max 45 (Zahl 1 MP, Kreuze 2 MP / 1 MP при ≥ 50 % верных клеток), пересчёт 45–43 → 10 … 3–0 → 0. Перед каждой Aufgabe 90 секунд на чтение.
- Schreiben 90 мин, 2 текста ca. 120 слов, 15 + 15 = 30, минимум 15. A1 Beschwerde, A2 Meinungsäußerung, выбор A/B, 4 пункта. n. b. или 0 по критерию = 0 за текст.
- Schriftliche Prüfung 70, минимум 42 и все минимумы частей. Меньше 10 в Lesen или Hören = модуль не сдан.
- Sprechen: подготовка 15 мин, Einführung ca. 1 мин без оценки, Aufgabe 1 знакомство в поезде на тему, Aufgabe 2 картинка из трёх, Aufgabe 3 спор в роли. 3 × 3 балла + 3 × 7 = 30, минимум 18.
- Бланки как в пробниках №1–5: `-lesen` (A1 + A2, factor 1, max 10), `-lesen-3` (верные из 20, пересчёт по таблице в тексте), `-lesen-4` (factor 0,5, max 5), `-hoeren` (factor 1, max 10), `-hoeren-2` (точные клетки из 30, Messpunkte по таблице в тексте).

## Темы
- Lesen A1: «Der Weg zur Kassa ist kein Zufall», как супермаркет направляет покупателя (исследователь торговли, защитница потребителей, заведующая филиалом в Вельсе).
- Lesen A2: T1 пожарные Верхней Австрии и пожары от аккумуляторов; T2 ночной трамвай в Граце по выходным; T3 тенты на тирольском леднике; T4 бесплатный солнцезащитный крем в бассейнах Зальцбурга; T5 зонты напрокат на остановках в Берне.
- Lesen A3: «Papa geht in Karenz», отцы в отпуске по уходу за ребёнком.
- Lesen A4: письмо отеля в Гмундене: подтверждение брони.
- Hören A1: радиопередача «Geld und Leben» о долгах у молодёжи (консультант по долгам из Линца): мелкие суммы, покупка с оплатой позже, рассрочка, бесплатная консультация, финансовая грамотность в школе и дома.
- Hören A2: три квартиры для отпуска у Нойзидлер-Зе (Schilfrand, Kellergasse 7, Steppenhof).
- Schreiben A1: жалоба на аренду зала для праздника (Partyraum Gewölbe, Зальцбург). A2: A «Nebenjob neben der Schule?», B «Englisch schon im Kindergarten?».
- Sprechen: A1 поезд Зальцбург – Вена, тема «Technik im Alltag»; A2 картинки «Einmal volltanken, bitte?», «Selbst gebaut?», «Regen? Egal!»; A3 «Selbstständig oder angestellt?».
- Бронь тем: scratchpad/topics/oesd-b2.md. Сверено с ÖSD B2 №1–5, Goethe B2 №1–5, telc B2 №1–4, ÖSD B1 №1–4, ÖSD C1 №1–4, гайдами oesd-b2-lesen/hoeren/schreiben/sprechen(-temy) и бронями других авторов на 21:40.

## Ключ сбалансирован
- Lesen A1: A2 B1 C2 (B A C C A); верный вариант самый длинный в 0 из 5. A2: D, F, K, B, H.
- A3: позиции 0/1/2 = 7/6/7, самый длинный верный в 3 из 20. A4: 4/3/3, самый длинный верный в 2 из 10.
- Hören A1: 5 R / 5 F (R F F R R F R F F R), серий длиннее двух нет. Hören A2: самый длинный верный в 3 из 30.

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` ✓. `python3 scripts/answers.py`: 10 + 20 + 10 + 10 + 30 заданий, как в формате.
- `python3 -I scripts/audit-mocks.py`: id и тексты аудио уникальны по сайту, серий из 4+ нет, длинного тире нет. Все немецкие цитаты из `why` к Lesen A1/A2 и Hören найдены дословно. «Не найдены» только цитаты A3/A4: это восстановленные слова, в тексте с пропусками их по определению нет.
- Слепое решение независимым агентом (Sonnet, страница без `a` и `why`): 79 из 80 совпали с ключом. Расхождение в A3 № 17 («nd» вместо «um»): «kümmern sich … und Haushalt» грамматически невозможно, это ошибка решающего, задание оставлено.
- По замечаниям агента переписаны: A4 № 5 (в письмо добавлено, что гость сам просил о парковке, иначе «Wie gewünscht» без опоры) и фраза в Lesen A2 T2 (неуклюжее «nicht mehr lange auf ein Taxi warten»).
- Неуверенно: A4 № 10 («auf/über Ihren Besuch»): «über» грамматически возможно, но визит впереди и стоит «schon», ключ «auf» однозначен по смыслу.

## Ключ

### Lesen · Aufgabe 1 и 2 · Пробник Stellas ÖSD B2 №6 (`oesd-b2-stellas-6-lesen`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 1 · Supermarkt | Зачем фрукты у входа | B |
| 2 | Aufgabe 1 · Supermarkt | Что говорит исследователь о музыке | A |
| 3 | Aufgabe 1 · Supermarkt | Хаметнер о семейных кассах | C |
| 4 | Aufgabe 1 · Supermarkt | Совет по ценам | C |
| 5 | Aufgabe 1 · Supermarkt | Позиция заведующей | A |
| T1 | Aufgabe 2 · Überschriften | Text 1: пожарные и аккумуляторы | D |
| T2 | Aufgabe 2 · Überschriften | Text 2: ночь в Граце | F |
| T3 | Aufgabe 2 · Überschriften | Text 3: ледник под тентом | K |
| T4 | Aufgabe 2 · Überschriften | Text 4: крем в бассейне | B |
| T5 | Aufgabe 2 · Überschriften | Text 5: зонты в Берне | H |

### Lesen · Aufgabe 3 · верные из 20 (`oesd-b2-stellas-6-lesen-3`, 20 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 3 · Zeilen 1–10 | bleiben nach d… Geburt | er |
| 2 | Aufgabe 3 · Zeilen 1–10 | V… zwanzig Jahren | or |
| 3 | Aufgabe 3 · Zeilen 1–10 | eine echte Ausnah… | me |
| 4 | Aufgabe 3 · Zeilen 1–10 | ein deutlich größer… Teil | er |
| 5 | Aufgabe 3 · Zeilen 1–10 | allerdings mei… nur für kurze Zeit | st |
| 6 | Aufgabe 3 · Zeilen 1–10 | nur für kurze Ze… | it |
| 7 | Aufgabe 3 · Zeilen 1–10 | zwei bis drei Monate, währ… die Mütter | end |
| 8 | Aufgabe 3 · Zeilen 1–10 | ein Jahr oder län… | ger |
| 9 | Aufgabe 3 · Zeilen 1–10 | Eine neue Stud… | ie |
| 10 | Aufgabe 3 · Zeilen 1–10 | hat untersucht, war… das so ist | um |
| 11 | Aufgabe 3 · Zeilen 11–20 | Viele Männer haben An… | gst |
| 12 | Aufgabe 3 · Zeilen 11–20 | Nachteile zu bekom… | men |
| 13 | Aufgabe 3 · Zeilen 11–20 | auf i… höheres Gehalt | hr |
| 14 | Aufgabe 3 · Zeilen 11–20 | nicht verzichten ka… | nn |
| 15 | Aufgabe 3 · Zeilen 11–20 | sehen aber auch ei… positive Entwicklung | ne |
| 16 | Aufgabe 3 · Zeilen 11–20 | Väter, die in Kar… waren | enz |
| 17 | Aufgabe 3 · Zeilen 11–20 | kümmern sich später mehr u… Haushalt | m |
| 18 | Aufgabe 3 · Zeilen 11–20 | Auch die Fir… merken das | men |
| 19 | Aufgabe 3 · Zeilen 11–20 | Einige werben bereits da…, dass | mit |
| 20 | Aufgabe 3 · Zeilen 11–20 | bei ihnen selbstverständl… ist | ich |

### Lesen · Aufgabe 4 (`oesd-b2-stellas-6-lesen-4`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 4 · Brief | ein Doppelzimmer … die Zeit vom 12. bis 15. August | für |
| 2 | Aufgabe 4 · Brief | das Frühstück ist im Preis … | inbegriffen |
| 3 | Aufgabe 4 · Brief | steht Ihnen … Verfügung | zur |
| 4 | Aufgabe 4 · Brief | Ihr Gepäck an der Rezeption … | abgeben |
| 5 | Aufgabe 4 · Brief | … gewünscht, haben wir … reserviert | Wie |
| 6 | Aufgabe 4 · Brief | Fahrzeuge, … Höhe zwei Meter nicht überschreitet | deren |
| 7 | Aufgabe 4 · Brief | Eine Stornierung ist … sieben Tage vor der Anreise kostenlos | bis |
| 8 | Aufgabe 4 · Brief | täglich … 7 bis 21 Uhr geöffnet | von |
| 9 | Aufgabe 4 · Brief | Fahrräder, … denen Sie … entlangfahren können | mit |
| 10 | Aufgabe 4 · Brief | Wir freuen uns schon … Ihren Besuch | auf |

### Hören · Aufgabe 1 (`oesd-b2-stellas-6-hoeren`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Abschnitt 1 | В основном много мелких сумм | R |
| 2 | Abschnitt 1 | Молодёжь легкомысленнее родителей | F |
| 3 | Abschnitt 1 | Раньше тратить было проще | F |
| 4 | Abschnitt 2 | При оплате позже теряют обзор | R |
| 5 | Abschnitt 2 | Долг может вырасти втрое | R |
| 6 | Abschnitt 2 | Никогда не брать рассрочку | F |
| 7 | Abschnitt 3 | Долго молчат о долгах | R |
| 8 | Abschnitt 3 | Консультация платная | F |
| 9 | Abschnitt 4 | В школе о деньгах говорят достаточно | F |
| 10 | Abschnitt 4 | Пример родителей важнее уроков | R |

### Hören · Aufgabe 2 · точных клеток из 30 (`oesd-b2-stellas-6-hoeren-2`, 30 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Kreuze · 2 Messpunkte | Zeile 1 · Schilfrand: Lage | am See |
| 2 | Kreuze · 2 Messpunkte | Zeile 1 · Kellergasse 7: Lage | im Zentrum |
| 3 | Kreuze · 2 Messpunkte | Zeile 1 · Steppenhof: Lage | ничего |
| 10 | Kreuze · 2 Messpunkte | Zeile 4 · Schilfrand: Ausstattung | Terrasse + Spüler |
| 11 | Kreuze · 2 Messpunkte | Zeile 4 · Kellergasse 7: Ausstattung | Geschirrspüler |
| 12 | Kreuze · 2 Messpunkte | Zeile 4 · Steppenhof: Ausstattung | все три |
| 16 | Kreuze · 2 Messpunkte | Zeile 6 · Schilfrand: Bezahlung | Überweisung |
| 17 | Kreuze · 2 Messpunkte | Zeile 6 · Kellergasse 7: Bezahlung | оба |
| 18 | Kreuze · 2 Messpunkte | Zeile 6 · Steppenhof: Bezahlung | Karte |
| 19 | Kreuze · 2 Messpunkte | Zeile 7 · Schilfrand: für Kinder | Kinderbett |
| 20 | Kreuze · 2 Messpunkte | Zeile 7 · Kellergasse 7: für Kinder | ничего |
| 21 | Kreuze · 2 Messpunkte | Zeile 7 · Steppenhof: für Kinder | оба |
| 25 | Kreuze · 2 Messpunkte | Zeile 9 · Schilfrand: zusätzlich | Leihräder |
| 26 | Kreuze · 2 Messpunkte | Zeile 9 · Kellergasse 7: zusätzlich | оба |
| 27 | Kreuze · 2 Messpunkte | Zeile 9 · Steppenhof: zusätzlich | Frühstück |
| 4 | Zahlen · 1 Messpunkt | Zeile 2 · Schilfrand: pro Nacht | 110 |
| 5 | Zahlen · 1 Messpunkt | Zeile 2 · Kellergasse 7: pro Nacht | 95 |
| 6 | Zahlen · 1 Messpunkt | Zeile 2 · Steppenhof: pro Nacht | 135 |
| 7 | Zahlen · 1 Messpunkt | Zeile 3 · Schilfrand: Mindestaufenthalt | 3 |
| 8 | Zahlen · 1 Messpunkt | Zeile 3 · Kellergasse 7: Mindestaufenthalt | 2 |
| 9 | Zahlen · 1 Messpunkt | Zeile 3 · Steppenhof: Mindestaufenthalt | 4 |
| 13 | Zahlen · 1 Messpunkt | Zeile 5 · Schilfrand: Endreinigung | 40 |
| 14 | Zahlen · 1 Messpunkt | Zeile 5 · Kellergasse 7: Endreinigung | 0 (im Preis) |
| 15 | Zahlen · 1 Messpunkt | Zeile 5 · Steppenhof: Endreinigung | 60 |
| 22 | Zahlen · 1 Messpunkt | Zeile 8 · Schilfrand: Strandbad zu Fuß | 2 |
| 23 | Zahlen · 1 Messpunkt | Zeile 8 · Kellergasse 7: Strandbad zu Fuß | 15 |
| 24 | Zahlen · 1 Messpunkt | Zeile 8 · Steppenhof: Strandbad zu Fuß | 25 |
| 28 | Zahlen · 1 Messpunkt | Zeile 10 · Schilfrand: Anreise ab | 15:00 |
| 29 | Zahlen · 1 Messpunkt | Zeile 10 · Kellergasse 7: Anreise ab | 14:00 |
| 30 | Zahlen · 1 Messpunkt | Zeile 10 · Steppenhof: Anreise ab | 16:00 |
