# Пробник Stellas ÖSD B2 №2: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-b2-probnik-stellas-2.mdx`. Создано 2026-11-21.
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
- Lesen A1: «Bezahlt wird in die Kassa des Vertrauens», сельские лавки самообслуживания (Мюльфиртель).
- Lesen A2: T1 бесплатные курсы плавания для школьников Вены; T2 Trafik вместо почты; T3 коровы с GPS на тирольских альмах; T4 роботы-газонокосилки и ежи (Форарльберг); T5 новые правила Krampusläufe (Зальцбург, Тироль).
- Lesen A3: «Im Schlaf nach Venedig», возвращение ночных поездов.
- Lesen A4: письмо музея друзьям музея, открытие выставки «Kindheit im Grätzl».
- Hören A1: радиопередача «Pflege zu Hause»: кто ухаживает, круглосуточные сиделки, дети-опекуны, разгрузка родственников.
- Hören A2: три мобильных тарифа (Funkwelle Mini, Alpennetz Smart, Talkfix Plus), Servicepauschale.
- Schreiben A1: жалоба фирме по переездам (Übersiedlung). A2: A «Werbung für Kinder», B «Rauchverbot im Gastgarten?».
- Sprechen: A1 поезд, тема «Filme und Serien»; A2 картинки «Jeder für sich?», «Tauschen statt kaufen», «Urlaub auf Balkonien»; A3 «Groß oder klein heiraten?».

## Ключ сбалансирован
- Lesen A1: A1 B2 C2. A2: F, A, G, D, K. A3: позиции 0/1/2 = 6/7/7. A4: 3/4/3. Hören A1: 5 R / 5 F, серий длиннее трёх нет.

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` ✓, `python3 scripts/answers.py`: 10 + 20 + 10 + 10 + 30 заданий, как в формате.
- Слепое решение по тексту и скрипту: переписаны A3 № 1 (вариант «elle» засчитали бы на экзамене, заменён на «ellen») и порядок вариантов A4 (был периодичный, угадывался). После правки расхождений с ключом нет.
- Все немецкие цитаты из `why` к Lesen A1/A2 и Hören найдены дословно в тексте или скрипте (проверено скриптом). В A3/A4 цитаты это восстановленные слова, их в тексте с пропусками по определению нет.
- После появления параллельных пробников заменены темы, которые пересеклись: T3 (солнечные панели → GPS для коров, пересечение с telc B2 №3) и T5 (Сильвестр без фейерверка → Krampusläufe, пересечение с Goethe B2 №4).

## Ключ

### Lesen · Aufgabe 1 и 2 · Пробник Stellas ÖSD B2 №2 (`oesd-b2-stellas-2-lesen`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 1 · Hofladen | Что верно о Хаслауэр | A |
| 2 | Aufgabe 1 · Hofladen | Чем важна прямая продажа | C |
| 3 | Aufgabe 1 · Hofladen | Камеры в лавках | B |
| 4 | Aufgabe 1 · Hofladen | Зачем едут покупатели | C |
| 5 | Aufgabe 1 · Hofladen | Проверки пищевого надзора | B |
| T1 | Aufgabe 2 · Überschriften | Text 1: дети и плавание | F |
| T2 | Aufgabe 2 · Überschriften | Text 2: Trafik и почта | A |
| T3 | Aufgabe 2 · Überschriften | Text 3: коровы с GPS | G |
| T4 | Aufgabe 2 · Überschriften | Text 4: ежи и роботы | D |
| T5 | Aufgabe 2 · Überschriften | Text 5: шествия Крампусов | K |

### Lesen · Aufgabe 3 · верные из 20 (`oesd-b2-stellas-2-lesen-3`, 20 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 3 · Zeilen 1–10 | galten lange als Auslaufmod… | ell |
| 2 | Aufgabe 3 · Zeilen 1–10 | wollten viele Bah… | nen |
| 3 | Aufgabe 3 · Zeilen 1–10 | Heute sind di… Schlafwagen | e |
| 4 | Aufgabe 3 · Zeilen 1–10 | an vielen Wochenend… | en |
| 5 | Aufgabe 3 · Zeilen 1–10 | Besonders gefragt si… | nd |
| 6 | Aufgabe 3 · Zeilen 1–10 | Verbindungen von Wien na… | ch |
| 7 | Aufgabe 3 · Zeilen 1–10 | Für vie… Reisende | le |
| 8 | Aufgabe 3 · Zeilen 1–10 | eine Alternat… | ive |
| 9 | Aufgabe 3 · Zeilen 1–10 | weil er weniger CO₂ verursa… | cht |
| 10 | Aufgabe 3 · Zeilen 1–10 | dass sie am Ab… | end |
| 11 | Aufgabe 3 · Zeilen 11–20 | ausgeruht i… Zentrum | m |
| 12 | Aufgabe 3 · Zeilen 11–20 | Zentrum der Stadt ankom… | men |
| 13 | Aufgabe 3 · Zeilen 11–20 | auch Schatt… seiten | en- |
| 14 | Aufgabe 3 · Zeilen 11–20 | zu wenige Wag… | en |
| 15 | Aufgabe 3 · Zeilen 11–20 | oft schon Mon… im Voraus | ate |
| 16 | Aufgabe 3 · Zeilen 11–20 | sind die Tickets … vergriff… | en |
| 17 | Aufgabe 3 · Zeilen 11–20 | klagen Fahrgäste üb… | er |
| 18 | Aufgabe 3 · Zeilen 11–20 | kaputte Klimaanla… | gen |
| 19 | Aufgabe 3 · Zeilen 11–20 | Die Bahn hat neue Züge bestel… | lt |
| 20 | Aufgabe 3 · Zeilen 11–20 | ab dem nächsten Jahr fahr… sollen | en |

### Lesen · Aufgabe 4 (`oesd-b2-stellas-2-lesen-4`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Aufgabe 4 · Brief | findet … Freitag, dem 14. März statt | am |
| 2 | Aufgabe 4 · Brief | Schulhefte … der Zeit zwischen 1950 und 1980 | aus |
| 3 | Aufgabe 4 · Brief | … möchten wir uns herzlich bedanken | Dafür |
| 4 | Aufgabe 4 · Brief | … wir Sie zu einem kleinen Buffet ein | laden |
| 5 | Aufgabe 4 · Brief | Damit wir besser planen … | können |
| 6 | Aufgabe 4 · Brief | telefonisch oder … E-Mail | per |
| 7 | Aufgabe 4 · Brief | Für Mitglieder ist der Eintritt … | frei |
| 8 | Aufgabe 4 · Brief | an einer der Führungen …, … jeden Sonntag beginnen | die |
| 9 | Aufgabe 4 · Brief | bringen Sie … gern mit | sie |
| 10 | Aufgabe 4 · Brief | Sie bald bei uns … begrüßen | zu |

### Hören · Aufgabe 1 (`oesd-b2-stellas-2-hoeren`, 10 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Abschnitt 1 | Большинство живёт в доме престарелых | F |
| 2 | Abschnitt 1 | Ухаживают в основном женщины | R |
| 3 | Abschnitt 1 | Многие не считают свою помощь уходом | R |
| 4 | Abschnitt 2 | Сиделки живут у подопечного | R |
| 5 | Abschnitt 2 | Сиделка остаётся на несколько месяцев подряд | F |
| 6 | Abschnitt 2 | Никаких минусов | F |
| 7 | Abschnitt 3 | Дети тоже ухаживают | R |
| 8 | Abschnitt 3 | Дети открыто рассказывают в школе | F |
| 9 | Abschnitt 4 | Роботы заменят персонал | F |
| 10 | Abschnitt 4 | Нужно больше разгрузки для родственников | R |

### Hören · Aufgabe 2 · точных клеток из 30 (`oesd-b2-stellas-2-hoeren-2`, 30 заданий)

| № | Часть | Задание | Ответ |
|---|---|---|---|
| 1 | Kreuze · 2 Messpunkte | Zeile 1 · Funkwelle Mini: Vertrag | ohne Bindung |
| 2 | Kreuze · 2 Messpunkte | Zeile 1 · Alpennetz Smart: Vertrag | оба |
| 3 | Kreuze · 2 Messpunkte | Zeile 1 · Talkfix Plus: Vertrag | mit Bindung |
| 4 | Zahlen · 1 Messpunkt | Zeile 2 · Funkwelle Mini: Euro pro Monat | 9 Euro 90 |
| 5 | Zahlen · 1 Messpunkt | Zeile 2 · Alpennetz Smart: Euro pro Monat | 14 Euro 90 |
| 6 | Zahlen · 1 Messpunkt | Zeile 2 · Talkfix Plus: Euro pro Monat | 22 Euro 90 |
| 7 | Zahlen · 1 Messpunkt | Zeile 3 · Funkwelle Mini: GB | 10 |
| 8 | Zahlen · 1 Messpunkt | Zeile 3 · Alpennetz Smart: GB | 40 |
| 9 | Zahlen · 1 Messpunkt | Zeile 3 · Talkfix Plus: GB | 100 |
| 10 | Kreuze · 2 Messpunkte | Zeile 4 · Funkwelle Mini: Netz | 4G |
| 11 | Kreuze · 2 Messpunkte | Zeile 4 · Alpennetz Smart: Netz | 4G |
| 12 | Kreuze · 2 Messpunkte | Zeile 4 · Talkfix Plus: Netz | оба |
| 13 | Zahlen · 1 Messpunkt | Zeile 5 · Funkwelle Mini: Servicepauschale | 15 |
| 14 | Zahlen · 1 Messpunkt | Zeile 5 · Alpennetz Smart: Servicepauschale | 25 |
| 15 | Zahlen · 1 Messpunkt | Zeile 5 · Talkfix Plus: Servicepauschale | keine |
| 16 | Kreuze · 2 Messpunkte | Zeile 6 · Funkwelle Mini: Roaming | EU |
| 17 | Kreuze · 2 Messpunkte | Zeile 6 · Alpennetz Smart: Roaming | оба |
| 18 | Kreuze · 2 Messpunkte | Zeile 6 · Talkfix Plus: Roaming | оба |
| 19 | Kreuze · 2 Messpunkte | Zeile 7 · Funkwelle Mini: unbegrenzt | ничего |
| 20 | Kreuze · 2 Messpunkte | Zeile 7 · Alpennetz Smart: unbegrenzt | Telefonieren |
| 21 | Kreuze · 2 Messpunkte | Zeile 7 · Talkfix Plus: unbegrenzt | оба |
| 22 | Zahlen · 1 Messpunkt | Zeile 8 · Funkwelle Mini: Aktivierung | 20 |
| 23 | Zahlen · 1 Messpunkt | Zeile 8 · Alpennetz Smart: Aktivierung | 10 |
| 24 | Zahlen · 1 Messpunkt | Zeile 8 · Talkfix Plus: Aktivierung | 25 |
| 25 | Kreuze · 2 Messpunkte | Zeile 9 · Funkwelle Mini: zusätzlich | Zweitkarte |
| 26 | Kreuze · 2 Messpunkte | Zeile 9 · Alpennetz Smart: zusätzlich | ничего |
| 27 | Kreuze · 2 Messpunkte | Zeile 9 · Talkfix Plus: zusätzlich | Musik-Streaming |
| 28 | Zahlen · 1 Messpunkt | Zeile 10 · Funkwelle Mini: Rabatt | keiner |
| 29 | Zahlen · 1 Messpunkt | Zeile 10 · Alpennetz Smart: Rabatt | 15 % |
| 30 | Zahlen · 1 Messpunkt | Zeile 10 · Talkfix Plus: Rabatt | 10 % |
