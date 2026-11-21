# Пробник Stellas ÖSD C1 №2: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c1-probnik-stellas-2.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны командой Stellas. Из официальных материалов ÖSD взяты только формат, пересчёт баллов и короткие стандартные инструкции. Люди, фирмы, исследования и числа в текстах придуманы, на странице это сказано в Callout.

## Формат и баллы (из research/oesd-c1.md, Durchführungsbestimmungen ZC1 10/2023, Gesamtbogen 2.0, Modellsatz LV/HV)
- Lesen 90 мин, 4 Aufgaben, 30 Items → 20 баллов, минимум 10. Aufgabe 1–3: 15 Items × 1 балл. Aufgabe 4: 15 открытых пропусков → 5 баллов по таблице 15 → 5, 14–12 → 4, 11–9 → 3, 8–6 → 2, 5–3 → 1, 2–0 → 0. [Modellsatz LV, «Lösungen und Bewertung»]
- Hören ca. 40 мин, 2 Aufgaben × 10 Items, обе звучат два раза; чтение 2 мин перед Aufgabe 1 и 90 с перед Aufgabe 2. 20 баллов, минимум 10. [Modellsatz HV, ключ стр. 3]
- Меньше 10 в Lesen или Hören = не сдан весь модуль Schriftliche Prüfung. [Modellsatz LV/HV]
- Schreiben 90 мин: Aufgabe 1 (формальный ответ по заметкам, объём не указан) и Aufgabe 2 (одна тема из трёх: Referat / Stellungnahme / Kommentar к тексту Lesen, минимум 250 слов). По 15, минимум 7 за каждый, вместе 15 из 30. Штраф TL −1…−4, меньше 170 слов = не сдано. [Auswertungsbogen Schreiben 5.0]
- Schriftliche Prüfung: максимум 70, минимум 42 и все минимумы. [Durchführungsbestimmungen 4, 6]
- Sprechen: подготовка 20 мин, ~20 мин, Einzelprüfung; Aufgabe 1 телефон (извиниться и договориться), Aufgabe 2 спор о двух фото, Aufgabe 3 Kurzreferat. 3 × 3 + 3 × 7 = 30, минимум 18. [Durchführungsbestimmungen 3; Auswertungsbogen Sprechen 4.0]
- Словарь: только одноязычный. [Durchführungsbestimmungen 1.3]

В бланках: `oesd-c1-stellas-{n}-lesen` (Aufgabe 1–3, factor 1, max 15), `-lesen-4` (верные из 15, пересчёт по таблице в тексте), `-hoeren` (Aufgabe 1, max 10), `-hoeren-2` (заметки, max 10). В Lesen Aufgabe 4 и Hören Aufgabe 2 на экзамене открытые ответы; в бланке верный вариант и два неверных, синонимы перечислены в `why`.

## Темы
- Lesen Aufgabe 1: статья «Wer zahlt für die Zeit im Kaffeehaus?» (венская кофейня, гости с ноутбуками, аренда)
- Lesen Aufgabe 2: пять заметок о воде (Зеевинкель и Дунай, фонтанчики в Линце, водопроводная вода в ресторане, плавание в Рейне в Базеле, цистерны в Унтерфранкене)
- Lesen Aufgabe 3: «Das Gedächtnis für Gesichter» (лицевая слепота и суперузнаватели)
- Lesen Aufgabe 4: реклама танцевальной школы в Граце перед сезоном балов
- Hören Aufgabe 1: радиопередача о вежливости (лингвист, Du/Sie, титулы, критика, интернет, дети)
- Hören Aufgabe 2: доклад «Die Hand denkt mit» (почерк и запоминание)
- Schreiben Aufgabe 1: ответ организаторше блошиного рынка (опоздание, мусор, «новые вещи», 50 евро)
- Schreiben Aufgabe 2: A Referat по опросу о чтении 2016/2026; B Stellungnahme о запрете шумной садовой техники; C Kommentar к статье о кофейне
- Sprechen: 1 звонок хозяину горной хижины (сократить бронь); 2 фото «Wie kaufen wir morgen ein?» (рынок или доставка); 3 Kurzreferat «Haustiere»

## Ключ (вывод `python3 scripts/answers.py`)
```
Lesen · Aufgabe 1–3 · Пробник Stellas ÖSD C1 №2 (15)
   Aufgabe 1 · Kaffeehaus 1.1:C 1.2:A 1.3:B 1.4:A 1.5:C
   Aufgabe 2 · Überschriften 2.1:D 2.2:I 2.3:B 2.4:G 2.5:E
   Aufgabe 3 · Gesichter 3.1:G 3.2:C 3.3:F 3.4:A 3.5:D
Lesen · Aufgabe 4 · верные из 15 (15)
   Aufgabe 4 · Absatz 1–2 1:damit 2:seit 3:was 4:weder 5:braucht 6:sorgt
   Aufgabe 4 · Absatz 3 7:die 8:denen 9:statt
   Aufgabe 4 · Absatz 4 10:Takt 11:bieten
   Aufgabe 4 · Absatz 5 12:rechtzeitig 13:per 14:wenn
   Aufgabe 4 · Absatz 6 15:im
Hören · Aufgabe 1 · Пробник Stellas ÖSD C1 №2 (10)
   Abschnitt 1 1:A 2:C
   Abschnitt 2 3:B 4:A 5:C
   Abschnitt 3 6:B 7:C 8:A
   Abschnitt 4 9:B 10:C
Hören · Aufgabe 2 · заметки (10)
   Die Ausgangslage 1:Glückwunschkarten 2:Lesbarkeit
   Was die Forschung zeigt 3:Zusammenhängen 4:auswählen 5:formen
   Die Einwände 6:zusammenfassen soll 7:Methode 8:Segen
   Die Empfehlungen 9:flüssig 10:merken
```

Lesen Aufgabe 2: варианты A–K без J, пять заголовков лишние. Lesen Aufgabe 3: семь абзацев A–G, два лишние (указаны в `why` к заданию 3.5).

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` → ✓.
- `python3 scripts/answers.py` → 15 / 15 / 10 / 10, как в формате.
- Слепое решение каждого модуля по тексту и скрипту; каждая немецкая цитата из `why` проверена скриптом на дословное совпадение с текстом страницы (несовпадения только у грамматических образцов и синонимов-альтернатив, это не цитаты).
- Тексты `Listen` уникальны на сайте (sha1 первых 12 знаков).
