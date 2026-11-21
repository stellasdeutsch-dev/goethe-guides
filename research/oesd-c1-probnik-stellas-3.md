# Пробник Stellas ÖSD C1 №3: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c1-probnik-stellas-3.mdx`. Создано 2026-11-21.
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
- Lesen Aufgabe 1: статья «Wer übernimmt den Hof?» (преемники горных хозяйств, Дефереггенталь, Лунгау)
- Lesen Aufgabe 2: пять заметок о грибах (консультации в Штирии, плиты из грибницы, дети и грибы, вёшенки на кофейной гуще в Оттакринге, правила сбора в кантоне)
- Lesen Aufgabe 3: «Warum sich manche Menschen ständig verlaufen» (чувство направления, навигаторы)
- Lesen Aufgabe 4: реклама винодельни с хойригером в Гумпольдскирхене
- Hören Aufgabe 1: радиопередача об одиночестве (психологиня из Линца)
- Hören Aufgabe 2: доклад «Wie ein Wörterbuch entsteht» (корпус, критерии новых слов, австрийский немецкий)
- Schreiben Aufgabe 1: ответ заведующей детсадом (три опоздания, 30 евро)
- Schreiben Aufgabe 2: A Referat «Stadt oder Land: Gründe für einen Umzug»; B Stellungnahme о Tempo 30 во всём городе; C Kommentar к статье о хуторах
- Sprechen: 1 звонок председательнице культурного объединения (отменить доклад); 2 фото «Allein unterwegs»; 3 Kurzreferat «Fotografieren»

## Ключ (вывод `python3 scripts/answers.py`)
```
Lesen · Aufgabe 1–3 · Пробник Stellas ÖSD C1 №3 (15)
   Aufgabe 1 · Hofnachfolge 1.1:A 1.2:B 1.3:C 1.4:B 1.5:A
   Aufgabe 2 · Überschriften 2.1:F 2.2:C 2.3:I 2.4:B 2.5:G
   Aufgabe 3 · Orientierung 3.1:D 3.2:G 3.3:A 3.4:E 3.5:C
Lesen · Aufgabe 4 · верные из 15 (15)
   Aufgabe 4 · Absatz 1 1:im
   Aufgabe 4 · Absatz 2 2:baut 3:ist 4:warum
   Aufgabe 4 · Absatz 3 5:selbst 6:die 7:den
   Aufgabe 4 · Absatz 4 8:nach 9:finden 10:um
   Aufgabe 4 · Absatz 5 11:von
   Aufgabe 4 · Absatz 6 12:Wem 13:und
   Aufgabe 4 · Absatz 7 14:zu 15:bis
Hören · Aufgabe 1 · Пробник Stellas ÖSD C1 №3 (10)
   Abschnitt 1 1:B 2:B
   Abschnitt 2 3:C 4:A 5:A
   Abschnitt 3 6:B 7:C 8:A
   Abschnitt 4 9:C 10:B
Hören · Aufgabe 2 · заметки (10)
   Die Grundlage 1:Karteikarten 2:Korpus 3:Umgebung
   Neue Wörter 4:Jahre 5:Textsorten 6:Erklärung
   Österreichisches Deutsch 7:Standarddeutsch 8:Bedeutung 9:Stuhl
   Die Zukunft 10:alte
```

Lesen Aufgabe 2: варианты A–K без J, пять заголовков лишние. Lesen Aufgabe 3: семь абзацев A–G, два лишние (указаны в `why` к заданию 3.5).

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` → ✓.
- `python3 scripts/answers.py` → 15 / 15 / 10 / 10, как в формате.
- Слепое решение каждого модуля по тексту и скрипту; каждая немецкая цитата из `why` проверена скриптом на дословное совпадение с текстом страницы (несовпадения только у грамматических образцов и синонимов-альтернатив, это не цитаты).
- Тексты `Listen` уникальны на сайте (sha1 первых 12 знаков).
