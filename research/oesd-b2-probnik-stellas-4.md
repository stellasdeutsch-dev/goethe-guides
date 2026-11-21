# Пробник Stellas ÖSD B2 №4: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-b2-probnik-stellas-4.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны командой Stellas. Из официальных материалов ÖSD взяты только формат, число заданий, таблицы пересчёта и короткие стандартные инструкции.

## Формат и баллы (из research/oesd-b2.md: DB ZB2 Stand 10/2023, Gesamtbogen Vers. 5.0, ключ Modellsatz печ. стр. 20–23, Auswertungsbogen Schreiben 7.0 и Sprechen 4.0)
- Lesen 90 мин, 4 Aufgaben, 40 Items, 20 баллов, минимум 10. A1 5 × A/B/C (1 = 1 балл), A2 5 текстов и 10 заголовков A–K без J (1 = 1 балл), A3 20 строк с обрезанным краем до 3 букв (20–18 → 5, 17–15 → 4, 14–11 → 3, 10–7 → 2, 6–4 → 1, 3–0 → 0), A4 письмо, 10 пропусков по одному слову (10–9 → 5, 8–7 → 4, 6–5 → 3, 4–3 → 2, 2–1 → 1, 0 → 0).
- Hören ca. 30 мин, 40 Items, 20 баллов, минимум 10. A1 радиопередача в 4 Abschnitten, 3/3/2/2 R/F, звучит zwei Mal, все R или все F = 0 за Aufgabe. A2 разговор, таблица 3 × 10 = 30 Items, звучит ein Mal, Messpunkte max 45 (Zahl 1 MP, Kreuze 2 MP / 1 MP при ≥ 50 % верных клеток), пересчёт 45–43 → 10 … 3–0 → 0. Перед каждой Aufgabe 90 секунд на чтение.
- Schreiben 90 мин, 2 текста ca. 120 слов, 15 + 15 = 30, минимум 15. A1 Beschwerde (A, K 3, T 2, L 5, F 5), A2 Meinungsäußerung, выбор A/B, 4 пункта (TL, A, K 2, T 3, L 5, F 5). n. b. или 0 по критерию = 0 за текст.
- Schriftliche Prüfung 70, минимум 42 и все минимумы частей. Меньше 10 в Lesen или Hören = модуль не сдан.
- Sprechen: подготовка 15 мин, Einführung ca. 1 мин без оценки, Aufgabe 1 знакомство в поезде на тему, Aufgabe 2 картинка из трёх, Aufgabe 3 спор в роли. 3 × 3 балла + 3 × 7 (Ausdruck, Aussprache/Flüssigkeit, Formale Richtigkeit) = 30, минимум 18.
- Бланки на странице: `-lesen` (A1 + A2, factor 1, max 10), `-lesen-3` (20 Items, верные из 20, пересчёт по таблице в тексте), `-lesen-4` (factor 0,5, max 5; Math.round(n × 0,5) совпадает с официальной таблицей), `-hoeren` (factor 1, max 10), `-hoeren-2` (точные клетки из 30, Messpunkte по таблице в тексте). Так же устроен пробник №1 и разбор Modellsatz.
- В A3, A4 и Hören A2 на экзамене ответ пишут сами. На сайте выбор: верный ответ плюс два-три неверных (грамматически или по смыслу). Где ключ ÖSD принял бы другой вариант, это сказано в `why`.

## Темы
- Lesen A1: «Das Dirndl kommt aus dem Schrank», мода на национальный костюм.
- Lesen A2: T1 слоты для автобусов в Гальштате; T2 жара и фиакры в Вене (правило 35 °C и требование снизить до 30 °C); T3 поля для разлива паводка в Махланде; T4 очереди в музыкальные школы Нижней Австрии; T5 Tagesmütter вместо яслей в Obersteiermark.
- Lesen A3: «Ärger auf dem Gehsteig», электросамокаты в городах.
- Lesen A4: письмо секции альпклуба, выходные в горной хижине.
- Hören A1: радиопередача «Menschen und Beziehungen» о знакомствах в интернете.
- Hören A2: три студенческих общежития в Инсбруке (Heim am Inn, Haus Bergblick, Campus Wilten).
- Schreiben A1: жалоба фирме по мойке окон. A2: A «Zeitumstellung abschaffen?», B «Prominente als Vorbilder».
- Sprechen: A1 поезд Линц – Зальцбург, тема «Natur und Umwelt»; A2 картинки «Wenn der Strom ausfällt», «Ist das noch Sport?», «Mittagspause am Schreibtisch»; A3 «Pauschalreise oder selbst organisiert?».

## Ключ сбалансирован
- Lesen A1: A2 B2 C1. A2: K, B, G, H, E. A3: 7/6/7. A4: 3/4/3. Hören A1: 5 R / 5 F.

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` ✓, `python3 scripts/answers.py`: 10 + 20 + 10 + 10 + 30 заданий.
- Слепое решение: расхождений с ключом нет. Исправлена одна цитата в `why` (регистр «Erstaunlich»).
- Цитаты из `why` к Lesen A1/A2 и Hören найдены дословно (скрипт). В A3/A4 цитаты это восстановленные слова.
- Заменены темы, пересёкшиеся с параллельными пробниками до написания: шум (Goethe B2 №5), работа после пенсии (Goethe B2 №4), зоопарки (Goethe B2 №5), карманные деньги (Goethe B2 №3); диалог Sprechen A1 переведён с хижин на велопоездку (хижины уже в Lesen A4).
- Реалия T2: правило «фиакры не работают от 35 °C» в Вене подаётся как действующее «seit einigen Jahren»; требование снизить порог придумано для задания.

## Ключ

### Lesen · Aufgabe 1 и 2 · Пробник Stellas ÖSD B2 №4 (`oesd-b2-stellas-4-lesen`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 1 · Tracht | Что делает Терезия Лайтнер | C |
| 2 | Aufgabe 1 · Tracht | Что считает Брандер | A |
| 3 | Aufgabe 1 · Tracht | Что больше всего злит Пихлера | B |
| 4 | Aufgabe 1 · Tracht | Молодёжь и история костюма | B |
| 5 | Aufgabe 1 · Tracht | Карточка к каждому платью | A |
| T1 | Aufgabe 2 · Überschriften | Text 1: Гальштат | K |
| T2 | Aufgabe 2 · Überschriften | Text 2: фиакры и жара | B |
| T3 | Aufgabe 2 · Überschriften | Text 3: Махланд и паводок | G |
| T4 | Aufgabe 2 · Überschriften | Text 4: музыкальные школы | H |
| T5 | Aufgabe 2 · Überschriften | Text 5: няни вместо яслей | E |

### Lesen · Aufgabe 3 · верные из 20 (`oesd-b2-stellas-4-lesen-3`, 20 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 3 · Zeilen 1–10 | In vielen … Städten kann m… | an |
| 2 | Aufgabe 3 · Zeilen 1–10 | E-Scooter per App ausleih… | en |
| 3 | Aufgabe 3 · Zeilen 1–10 | Besonders junge Menschen nutzen si… | e |
| 4 | Aufgabe 3 · Zeilen 1–10 | gern für kurze We… | ge |
| 5 | Aufgabe 3 · Zeilen 1–10 | Doch die Roller sorgen auch f… Ärger | ür |
| 6 | Aufgabe 3 · Zeilen 1–10 | Viele Fahrer stellen s… … ab | ie |
| 7 | Aufgabe 3 · Zeilen 1–10 | mitten auf dem Gehste… | ig |
| 8 | Aufgabe 3 · Zeilen 1–10 | für ältere und blin… Menschen | de |
| 9 | Aufgabe 3 · Zeilen 1–10 | wo sie … zur Gefahr wer… | den |
| 10 | Aufgabe 3 · Zeilen 1–10 | Wien hat deshalb feste Abstellfläch… | en |
| 11 | Aufgabe 3 · Zeilen 11–20 | Wer den Roller woand… | ers |
| 12 | Aufgabe 3 · Zeilen 11–20 | muss eine Stra… zahlen | fe |
| 13 | Aufgabe 3 · Zeilen 11–20 | die Zahl der Unfäl… | le |
| 14 | Aufgabe 3 · Zeilen 11–20 | Ärzte raten dring… | end |
| 15 | Aufgabe 3 · Zeilen 11–20 | zu einem Hel… | m |
| 16 | Aufgabe 3 · Zeilen 11–20 | doch kaum jemand trägt ei… | nen |
| 17 | Aufgabe 3 · Zeilen 11–20 | Ob die E-Scooter dem Klima nütz… | en |
| 18 | Aufgabe 3 · Zeilen 11–20 | denn oft erset… sie | zen |
| 19 | Aufgabe 3 · Zeilen 11–20 | sondern den Fuß… | weg |
| 20 | Aufgabe 3 · Zeilen 11–20 | Eine Studie soll das … prü… | fen |

### Lesen · Aufgabe 4 (`oesd-b2-stellas-4-lesen-4`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 4 · Brief | laden wir Sie … unserem Hüttenwochenende ein | zu |
| 2 | Aufgabe 4 · Brief | vom Parkplatz … etwa zwei Stunden erreichbar | in |
| 3 | Aufgabe 4 · Brief | Das Programm ist … alle Altersgruppen geeignet | für |
| 4 | Aufgabe 4 · Brief | eine leichte Wanderung … eine anspruchsvolle Gipfeltour | und |
| 5 | Aufgabe 4 · Brief | Kinder … zwölf Jahren zahlen die Hälfte | unter |
| 6 | Aufgabe 4 · Brief | überweisen Sie den Betrag erst, … Sie eine Bestätigung erhalten haben | nachdem / wenn |
| 7 | Aufgabe 4 · Brief | empfehlen wir Ihnen, … möglichst bald anzumelden | sich |
| 8 | Aufgabe 4 · Brief | Ohne … dürfen Sie nicht übernachten | ihn |
| 9 | Aufgabe 4 · Brief | wenden Sie sich bitte … unsere Hüttenreferentin | an |
| 10 | Aufgabe 4 · Brief | ein schönes Wochenende in den Bergen zu … | verbringen |

### Hören · Aufgabe 1 (`oesd-b2-stellas-4-hoeren`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Abschnitt 1 | Большинство пар знакомятся онлайн | F |
| 2 | Abschnitt 1 | Особенно распространено до сорока | R |
| 3 | Abschnitt 1 | Большой выбор усложняет решение | R |
| 4 | Abschnitt 2 | Ищут дальше в надежде на лучшего | R |
| 5 | Abschnitt 2 | Чаще всего врут о профессии | F |
| 6 | Abschnitt 2 | Совет: подольше переписываться | F |
| 7 | Abschnitt 3 | Быстрее всего растёт группа 60+ | R |
| 8 | Abschnitt 3 | Пожилым фото важнее | F |
| 9 | Abschnitt 4 | Молодые снова ходят на встречи для одиноких | R |
| 10 | Abschnitt 4 | Партнёр точно соответствует идеалу | F |

### Hören · Aufgabe 2 · точных клеток из 30 (`oesd-b2-stellas-4-hoeren-2`, 30 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Kreuze · 2 Messpunkte | Zeile 1 · Heim am Inn: Zimmer | оба |
| 2 | Kreuze · 2 Messpunkte | Zeile 1 · Haus Bergblick: Zimmer | Einzelzimmer |
| 3 | Kreuze · 2 Messpunkte | Zeile 1 · Campus Wilten: Zimmer | Doppelzimmer |
| 4 | Zahlen · 1 Messpunkt | Zeile 2 · Heim am Inn: Miete | 420 |
| 5 | Zahlen · 1 Messpunkt | Zeile 2 · Haus Bergblick: Miete | 485 |
| 6 | Zahlen · 1 Messpunkt | Zeile 2 · Campus Wilten: Miete | 360 |
| 7 | Zahlen · 1 Messpunkt | Zeile 3 · Heim am Inn: Kaution | 2 |
| 8 | Zahlen · 1 Messpunkt | Zeile 3 · Haus Bergblick: Kaution | 3 |
| 9 | Zahlen · 1 Messpunkt | Zeile 3 · Campus Wilten: Kaution | 1 |
| 10 | Kreuze · 2 Messpunkte | Zeile 4 · Heim am Inn: Räume | Küche |
| 11 | Kreuze · 2 Messpunkte | Zeile 4 · Haus Bergblick: Räume | оба |
| 12 | Kreuze · 2 Messpunkte | Zeile 4 · Campus Wilten: Räume | Lernraum |
| 13 | Kreuze · 2 Messpunkte | Zeile 5 · Heim am Inn: Bewerbung | Bestätigung + Foto |
| 14 | Kreuze · 2 Messpunkte | Zeile 5 · Haus Bergblick: Bewerbung | Studienbestätigung |
| 15 | Kreuze · 2 Messpunkte | Zeile 5 · Campus Wilten: Bewerbung | все три |
| 16 | Zahlen · 1 Messpunkt | Zeile 6 · Heim am Inn: Mindestdauer | 10 |
| 17 | Zahlen · 1 Messpunkt | Zeile 6 · Haus Bergblick: Mindestdauer | 12 |
| 18 | Zahlen · 1 Messpunkt | Zeile 6 · Campus Wilten: Mindestdauer | 6 |
| 19 | Kreuze · 2 Messpunkte | Zeile 7 · Heim am Inn: inbegriffen | Internet |
| 20 | Kreuze · 2 Messpunkte | Zeile 7 · Haus Bergblick: inbegriffen | оба |
| 21 | Kreuze · 2 Messpunkte | Zeile 7 · Campus Wilten: inbegriffen | ничего |
| 22 | Zahlen · 1 Messpunkt | Zeile 8 · Heim am Inn: Minuten | 15 |
| 23 | Zahlen · 1 Messpunkt | Zeile 8 · Haus Bergblick: Minuten | 25 |
| 24 | Zahlen · 1 Messpunkt | Zeile 8 · Campus Wilten: Minuten | 10 |
| 25 | Kreuze · 2 Messpunkte | Zeile 9 · Heim am Inn: außerdem | оба |
| 26 | Kreuze · 2 Messpunkte | Zeile 9 · Haus Bergblick: außerdem | Fahrradkeller |
| 27 | Kreuze · 2 Messpunkte | Zeile 9 · Campus Wilten: außerdem | Fitnessraum |
| 28 | Zahlen · 1 Messpunkt | Zeile 10 · Heim am Inn: Büro | 16:00 |
| 29 | Zahlen · 1 Messpunkt | Zeile 10 · Haus Bergblick: Büro | 14:00 |
| 30 | Zahlen · 1 Messpunkt | Zeile 10 · Campus Wilten: Büro | 12:00 |
