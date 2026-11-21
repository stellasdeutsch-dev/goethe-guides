# Пробник Stellas ÖSD B2 №3: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-b2-probnik-stellas-3.mdx`. Создано 2026-11-21.
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
- Lesen A1: «Wenn die Wiese zum Parkplatz wird», застройка и запечатывание почвы (Oststeiermark, Мюльфиртель).
- Lesen A2: T1 дешёвые билеты для молодёжи на классическом фестивале в Зальцбурге; T2 запрет геокешинга в нацпарке; T3 рекорд аистов в Русте; T4 юмор в команде (опрос в Каринтии и Штирии); T5 град и тыквенное масло (Südsteiermark).
- Lesen A3: «Ein Glas Wasser, bitte», плата за водопроводную воду в венских заведениях.
- Lesen A4: письмо городской библиотеки: новые часы, автомат выдачи.
- Hören A1: радиопередача «Natur im Fokus» о пчёлах: дикие и медоносные, ульи на крышах Вены, клещ варроа, что может каждый.
- Hören A2: три скалодрома в Зальцбурге (Kletterwerk Nord, Boulderbox, Halle am Fluss).
- Schreiben A1: жалоба детскому лагерю на Аттерзее. A2: A «Homeoffice», B «Künstliche Intelligenz in der Schule».
- Sprechen: A1 поезд, тема «Freundschaft»; A2 картинки «Wer räumt hier auf?», «Drei Generationen, ein Tisch», «Schneller geht’s nicht?»; A3 «Weihnachten zu Hause oder auf Reisen?».

## Ключ сбалансирован
- Lesen A1: A1 B2 C2. A2: H, C, F, E, K. A3: 7/7/6. A4: 3/4/3. Hören A1: 5 R / 5 F.

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` ✓, `python3 scripts/answers.py`: 10 + 20 + 10 + 10 + 30 заданий.
- Слепое решение: переписан A1 № 1 (вариант C не опровергался текстом прямо, заменён). После правки расхождений нет.
- Цитаты из `why` к Lesen A1/A2 и Hören найдены дословно (скрипт). В A3/A4 цитаты это восстановленные слова.
- Заменены темы, пересёкшиеся с параллельными пробниками: Lesen A3 (поздний старт уроков → вода в ресторанах, telc B2 №3), Hören A2 (автошколы → скалодромы, Goethe B2 №4), T2 (молодёжный совет → геокешинг, Goethe B2 №3 «выборы с 16»), Schreiben A2 (татуировки и мясо → Homeoffice и KI, Goethe B2 №4 и №5).

## Ключ

### Lesen · Aufgabe 1 и 2 · Пробник Stellas ÖSD B2 №3 (`oesd-b2-stellas-3-lesen`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 1 · Bodenverbrauch | Позиция бургомистра в начале | B |
| 2 | Aufgabe 1 · Bodenverbrauch | Что думает Штайндль | A |
| 3 | Aufgabe 1 · Bodenverbrauch | Почему трудно остановить застройку | B |
| 4 | Aufgabe 1 · Bodenverbrauch | Община в Мюльфиртеле | C |
| 5 | Aufgabe 1 · Bodenverbrauch | Что Грубер говорит сейчас | C |
| T1 | Aufgabe 2 · Überschriften | Text 1: фестиваль в Зальцбурге | H |
| T2 | Aufgabe 2 · Überschriften | Text 2: геокешинг в нацпарке | C |
| T3 | Aufgabe 2 · Überschriften | Text 3: аисты в Русте | F |
| T4 | Aufgabe 2 · Überschriften | Text 4: юмор в команде | E |
| T5 | Aufgabe 2 · Überschriften | Text 5: град и тыквы | K |

### Lesen · Aufgabe 3 · верные из 20 (`oesd-b2-stellas-3-lesen-3`, 20 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 3 · Zeilen 1–10 | ein Gl… Leitungswasser bestellt | as |
| 2 | Aufgabe 3 · Zeilen 1–10 | bekommt dafür immer öf… | ter |
| 3 | Aufgabe 3 · Zeilen 1–10 | kostet in vie… Gasthäusern | len |
| 4 | Aufgabe 3 · Zeilen 1–10 | zwischen einem und drei Eu… | ro |
| 5 | Aufgabe 3 · Zeilen 1–10 | begründen das mit den Kos… | ten |
| 6 | Aufgabe 3 · Zeilen 1–10 | Gläser, Spülmaschine und Perso… | nal |
| 7 | Aufgabe 3 · Zeilen 1–10 | Viele Gäste ärgern sich trotz… | dem |
| 8 | Aufgabe 3 · Zeilen 1–10 | nicht auf d… Karte steht | er |
| 9 | Aufgabe 3 · Zeilen 1–10 | Konsumentenschützer ra… | ten |
| 10 | Aufgabe 3 · Zeilen 1–10 | vor der Bestellung nachzufra… | gen |
| 11 | Aufgabe 3 · Zeilen 11–20 | Einige Lokale gehen ein… anderen Weg | en |
| 12 | Aufgabe 3 · Zeilen 11–20 | Sie schenken Wasser grat… | is |
| 13 | Aufgabe 3 · Zeilen 11–20 | dass die Gäste daf… länger bleiben | ür |
| 14 | Aufgabe 3 · Zeilen 11–20 | länger bleiben und mehr es… | sen |
| 15 | Aufgabe 3 · Zeilen 11–20 | Ein Wirt aus dem sieb… Bezirk | ten |
| 16 | Aufgabe 3 · Zeilen 11–20 | Bezirk ist überzeu… | gt |
| 17 | Aufgabe 3 · Zeilen 11–20 | Wer sich willkommen füh… | lt |
| 18 | Aufgabe 3 · Zeilen 11–20 | kommt wie… | der |
| 19 | Aufgabe 3 · Zeilen 11–20 | bestellt dann meistens auch et… zu trinken | was |
| 20 | Aufgabe 3 · Zeilen 11–20 | verdient das Lokal so so… mehr | gar |

### Lesen · Aufgabe 4 (`oesd-b2-stellas-3-lesen-4`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 4 · Brief | ab 1. Februar ändern … die Öffnungszeiten | sich |
| 2 | Aufgabe 4 · Brief | auch am Samstag geöffnet, … bleibt die Bücherei am Montag geschlossen | dafür |
| 3 | Aufgabe 4 · Brief | Diese Änderung … auf eine Umfrage zurück | geht |
| 4 | Aufgabe 4 · Brief | Bücher und Filme an einem Automaten … und zurückgeben | ausleihen / entlehnen |
| 5 | Aufgabe 4 · Brief | mehr Zeit, Sie … beraten | zu |
| 6 | Aufgabe 4 · Brief | Wer Hilfe braucht, … sie am Schalter | bekommt |
| 7 | Aufgabe 4 · Brief | Für alle, … den Automaten kennenlernen möchten | die |
| 8 | Aufgabe 4 · Brief | Bitte melden Sie sich … in der Bücherei … | an |
| 9 | Aufgabe 4 · Brief | Sie brauchen also … neue Karte zu beantragen | keine |
| 10 | Aufgabe 4 · Brief | sind gespannt … Ihre Rückmeldungen | auf |

### Hören · Aufgabe 1 (`oesd-b2-stellas-3-hoeren`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Abschnitt 1 | Медоносных пчёл стало меньше | F |
| 2 | Abschnitt 1 | Под угрозой прежде всего дикие пчёлы | R |
| 3 | Abschnitt 1 | Медоносные пчёлы легко заменят диких | F |
| 4 | Abschnitt 2 | В городе корм долго | R |
| 5 | Abschnitt 2 | Городской мёд хуже | F |
| 6 | Abschnitt 2 | Много ульев вредит диким пчёлам | R |
| 7 | Abschnitt 3 | Мягкие зимы усиливают проблему клеща | R |
| 8 | Abschnitt 3 | Клеща можно уничтожить навсегда | F |
| 9 | Abschnitt 4 | Косить газон как можно чаще | F |
| 10 | Abschnitt 4 | Многие дикие пчёлы живут в земле | R |

### Hören · Aufgabe 2 · точных клеток из 30 (`oesd-b2-stellas-3-hoeren-2`, 30 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Kreuze · 2 Messpunkte | Zeile 1 · Kletterwerk Nord: Klettern | оба |
| 2 | Kreuze · 2 Messpunkte | Zeile 1 · Boulderbox: Klettern | Bouldern |
| 3 | Kreuze · 2 Messpunkte | Zeile 1 · Halle am Fluss: Klettern | mit Seil |
| 4 | Zahlen · 1 Messpunkt | Zeile 2 · Kletterwerk Nord: Tageseintritt | 16 |
| 5 | Zahlen · 1 Messpunkt | Zeile 2 · Boulderbox: Tageseintritt | 12 |
| 6 | Zahlen · 1 Messpunkt | Zeile 2 · Halle am Fluss: Tageseintritt | 14 |
| 7 | Kreuze · 2 Messpunkte | Zeile 3 · Kletterwerk Nord: Anfänger | Gruppenkurs |
| 8 | Kreuze · 2 Messpunkte | Zeile 3 · Boulderbox: Anfänger | оба |
| 9 | Kreuze · 2 Messpunkte | Zeile 3 · Halle am Fluss: Anfänger | Einzelstunde |
| 10 | Zahlen · 1 Messpunkt | Zeile 4 · Kletterwerk Nord: Ermäßigung | 20 % |
| 11 | Zahlen · 1 Messpunkt | Zeile 4 · Boulderbox: Ermäßigung | 10 % |
| 12 | Zahlen · 1 Messpunkt | Zeile 4 · Halle am Fluss: Ermäßigung | keine |
| 13 | Zahlen · 1 Messpunkt | Zeile 5 · Kletterwerk Nord: Zehnerblock | 140 |
| 14 | Zahlen · 1 Messpunkt | Zeile 5 · Boulderbox: Zehnerblock | 100 |
| 15 | Zahlen · 1 Messpunkt | Zeile 5 · Halle am Fluss: Zehnerblock | 125 |
| 16 | Kreuze · 2 Messpunkte | Zeile 6 · Kletterwerk Nord: Leihausrüstung | Schuhe |
| 17 | Kreuze · 2 Messpunkte | Zeile 6 · Boulderbox: Leihausrüstung | ничего |
| 18 | Kreuze · 2 Messpunkte | Zeile 6 · Halle am Fluss: Leihausrüstung | оба |
| 19 | Kreuze · 2 Messpunkte | Zeile 7 · Kletterwerk Nord: außerdem | Café + Kinderbereich |
| 20 | Kreuze · 2 Messpunkte | Zeile 7 · Boulderbox: außerdem | Café |
| 21 | Kreuze · 2 Messpunkte | Zeile 7 · Halle am Fluss: außerdem | все три |
| 22 | Zahlen · 1 Messpunkt | Zeile 8 · Kletterwerk Nord: Parkplätze | 80 |
| 23 | Zahlen · 1 Messpunkt | Zeile 8 · Boulderbox: Parkplätze | keine |
| 24 | Zahlen · 1 Messpunkt | Zeile 8 · Halle am Fluss: Parkplätze | 40 |
| 25 | Kreuze · 2 Messpunkte | Zeile 9 · Kletterwerk Nord: Bezahlung | оба |
| 26 | Kreuze · 2 Messpunkte | Zeile 9 · Boulderbox: Bezahlung | Karte |
| 27 | Kreuze · 2 Messpunkte | Zeile 9 · Halle am Fluss: Bezahlung | bar |
| 28 | Zahlen · 1 Messpunkt | Zeile 10 · Kletterwerk Nord: bis | 23:00 |
| 29 | Zahlen · 1 Messpunkt | Zeile 10 · Boulderbox: bis | 22:30 |
| 30 | Zahlen · 1 Messpunkt | Zeile 10 · Halle am Fluss: bis | 21:00 |
