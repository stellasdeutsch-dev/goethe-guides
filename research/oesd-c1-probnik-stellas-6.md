# Пробник Stellas ÖSD C1 №6: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c1-probnik-stellas-6.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны командой Stellas. Из официальных материалов ÖSD взяты только формат, пересчёт баллов и короткие стандартные инструкции. Люди, фирмы, исследования и числа в текстах придуманы, на странице это сказано в Callout.

## Формат и баллы (из research/oesd-c1.md, Durchführungsbestimmungen ZC1 10/2023, Gesamtbogen 2.0, Modellsatz LV/HV)
- Lesen 90 мин, 4 Aufgaben, 30 Items → 20 баллов, минимум 10. Aufgabe 1–3: 15 Items × 1 балл. Aufgabe 4: 15 открытых пропусков → 5 баллов по таблице 15 → 5, 14–12 → 4, 11–9 → 3, 8–6 → 2, 5–3 → 1, 2–0 → 0. [Modellsatz LV, «Lösungen und Bewertung»]
- Hören ca. 40 мин, 2 Aufgaben × 10 Items, обе звучат два раза; чтение 2 мин перед Aufgabe 1 и 90 с перед Aufgabe 2. 20 баллов, минимум 10. [Modellsatz HV, ключ стр. 3]
- Меньше 10 в Lesen или Hören = не сдан весь модуль Schriftliche Prüfung. [Modellsatz LV/HV]
- Schreiben 90 мин: Aufgabe 1 (формальный ответ по заметкам, объём не указан) и Aufgabe 2 (одна тема из трёх: Referat / Stellungnahme / Kommentar к тексту Lesen, минимум 250 слов). По 15, минимум 7 за каждый, вместе 15 из 30. Штраф TL −1…−4, меньше 170 слов = не сдано. [Auswertungsbogen Schreiben 5.0]
- Schriftliche Prüfung: максимум 70, минимум 42 и все минимумы. [Durchführungsbestimmungen 4, 6]
- Sprechen: подготовка 20 мин, ~20 мин, Einzelprüfung; Aufgabe 1 телефон (извиниться и договориться), Aufgabe 2 спор о двух фото, Aufgabe 3 Kurzreferat. 3 × 3 + 3 × 7 = 30, минимум 18. [Durchführungsbestimmungen 3; Auswertungsbogen Sprechen 4.0]
- Словарь: только одноязычный. [Durchführungsbestimmungen 1.3]

В бланках: `oesd-c1-stellas-6-lesen` (Aufgabe 1–3, factor 1, max 15), `-lesen-4` (верные из 15, пересчёт по таблице в тексте), `-hoeren` (Aufgabe 1, max 10), `-hoeren-2` (заметки, max 10). В Lesen Aufgabe 4 и Hören Aufgabe 2 на экзамене открытые ответы; в бланке верный вариант и два неверных, синонимы перечислены в `why`.

## Темы
- Lesen Aufgabe 1: статья «Die letzte Ordination im Tal» (сельский врач в Лафанттале ищет преемника, центры первичной помощи)
- Lesen Aufgabe 2: пять заметок о болотах (засыпанные канавы в Ляйташе, земля без торфа, измерения CO2 в Оберштайермарке, находка в болоте под Цюрихом, мостки в Мостфиртеле)
- Lesen Aufgabe 3: «Wozu ist Ekel gut?» (отвращение: защита, научение, культура, мораль)
- Lesen Aufgabe 4: реклама пароходства на Вольфгангзе
- Hören Aufgabe 1: радиопередача о любопытстве (психолог развития из Граца)
- Hören Aufgabe 2: доклад «Untertitel oder Synchronisation?» (переводчица фильмов)
- Schreiben Aufgabe 1: ответ гостинице в Филлахе (запах дыма, мини-бар, полотенце, 209 евро)
- Schreiben Aufgabe 2: A Referat «Wie kommt Ihr Kind in die Volksschule?» 1996/2026; B Stellungnahme о запрете частного фейерверка на Новый год; C Kommentar к статье о сельском враче
- Sprechen: 1 звонок завхозу (потерян общий ключ); 2 фото «Neun Wochen Sommerferien» (лагерь на озере или дедушка в саду); 3 Kurzreferat «Gemeinsam essen»

## Ключ (вывод `python3 scripts/answers.py`)
```
Lesen · Aufgabe 1–3 · Пробник Stellas ÖSD C1 №6 (15)
   Aufgabe 1 · Landarzt 1.1:B 1.2:C 1.3:A 1.4:C 1.5:A
   Aufgabe 2 · Überschriften 2.1:C 2.2:A 2.3:G 2.4:I 2.5:E
   Aufgabe 3 · Ekel 3.1:D 3.2:G 3.3:A 3.4:F 3.5:C
Lesen · Aufgabe 4 · верные из 15 (15)
   Aufgabe 4 · Absatz 1 1:unterwegs 2:deren 3:als
   Aufgabe 4 · Absatz 2 4:auf 5:servieren 6:aussteigen 7:wie
   Aufgabe 4 · Absatz 3 8:vorbereitet 9:mit 10:Wer
   Aufgabe 4 · Absatz 4 11:sticht 12:fällt 13:ohne
   Aufgabe 4 · Absatz 5 14:vorher 15:freuen
Hören · Aufgabe 1 · Пробник Stellas ÖSD C1 №6 (10)
   Abschnitt 1 1:B 2:A
   Abschnitt 2 3:C 4:B 5:B
   Abschnitt 3 6:C 7:A 8:A
   Abschnitt 4 9:C 10:B
Hören · Aufgabe 2 · заметки (10)
   Die Ausgangslage 1:synchronisiert 2:Lesen
   Wie Untertitel entstehen 3:Zeichen 4:kürzen 5:Dialekt
   Die Synchronisation 6:Lippenbewegungen 7:Bild 8:Stimme
   Die Zukunft 9:korrigieren 10:Original
```

Lesen Aufgabe 2: варианты A–K без J, пять заголовков лишние. Lesen Aufgabe 3: семь абзацев A–G, два лишние (указаны в `why` к заданию 3.5).

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` → ✓.
- `python3 scripts/answers.py` → 15 / 15 / 10 / 10, как в формате.
- `python3 -I scripts/audit-mocks.py`: id бланков и тексты Listen уникальны на сайте, серий из 4+ одинаковых ответов нет, длинного тире нет. Оставшиеся «цитата не найдена» относятся только к синонимам и грамматическим образцам в `why` (Aufgabe 4, заметки), это не цитаты из текста.
- Верный вариант самый длинный: Lesen Aufgabe 1 в 1 из 5, Hören Aufgabe 1 в 3 из 10.
- Длина записей: Hören Aufgabe 1 около 880 слов, доклад Hören Aufgabe 2 около 571 слов (№1: 907 и 557).
- Слепое решение независимым агентом по тексту без ключа и разборов: совпадение с ключом 50 из 50. Его замечания (двусмысленные формулировки, подсказки в `q`, слишком очевидные дистракторы, логические нестыковки в тексте) исправлены, см. отчёт.
