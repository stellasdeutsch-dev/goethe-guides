# Пробник Stellas ÖSD C1 №5: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c1-probnik-stellas-5.mdx`. Создано 2026-11-21.
Все тексты, аудиоскрипты и задания написаны командой Stellas. Из официальных материалов ÖSD взяты только формат, пересчёт баллов и короткие стандартные инструкции. Люди, фирмы, исследования и числа в текстах придуманы, на странице это сказано в Callout.

## Формат и баллы (из research/oesd-c1.md, Durchführungsbestimmungen ZC1 10/2023, Gesamtbogen 2.0, Modellsatz LV/HV)
- Lesen 90 мин, 4 Aufgaben, 30 Items → 20 баллов, минимум 10. Aufgabe 1–3: 15 Items × 1 балл. Aufgabe 4: 15 открытых пропусков → 5 баллов по таблице 15 → 5, 14–12 → 4, 11–9 → 3, 8–6 → 2, 5–3 → 1, 2–0 → 0. [Modellsatz LV, «Lösungen und Bewertung»]
- Hören ca. 40 мин, 2 Aufgaben × 10 Items, обе звучат два раза; чтение 2 мин перед Aufgabe 1 и 90 с перед Aufgabe 2. 20 баллов, минимум 10. [Modellsatz HV, ключ стр. 3]
- Меньше 10 в Lesen или Hören = не сдан весь модуль Schriftliche Prüfung. [Modellsatz LV/HV]
- Schreiben 90 мин: Aufgabe 1 (формальный ответ по заметкам, объём не указан) и Aufgabe 2 (одна тема из трёх: Referat / Stellungnahme / Kommentar к тексту Lesen, минимум 250 слов). По 15, минимум 7 за каждый, вместе 15 из 30. Штраф TL −1…−4, меньше 170 слов = не сдано. [Auswertungsbogen Schreiben 5.0]
- Schriftliche Prüfung: максимум 70, минимум 42 и все минимумы. [Durchführungsbestimmungen 4, 6]
- Sprechen: подготовка 20 мин, ~20 мин, Einzelprüfung; Aufgabe 1 телефон (извиниться и договориться), Aufgabe 2 спор о двух фото, Aufgabe 3 Kurzreferat. 3 × 3 + 3 × 7 = 30, минимум 18. [Durchführungsbestimmungen 3; Auswertungsbogen Sprechen 4.0]
- Словарь: только одноязычный. [Durchführungsbestimmungen 1.3]

В бланках: `oesd-c1-stellas-5-lesen` (Aufgabe 1–3, factor 1, max 15), `-lesen-4` (верные из 15, пересчёт по таблице в тексте), `-hoeren` (Aufgabe 1, max 10), `-hoeren-2` (заметки, max 10). В Lesen Aufgabe 4 и Hören Aufgabe 2 на экзамене открытые ответы; в бланке верный вариант и два неверных, синонимы перечислены в `why`.

## Темы
- Lesen Aufgabe 1: статья «Wenn die Sirene heult und keiner kommt» (добровольная пожарная команда в Иннфиртеле, днём нет людей)
- Lesen Aufgabe 2: пять заметок о мороженом (цена шарика в Вене, мороженое из сенного молока в Циллертале, семьи мороженщиков из Валь-ди-Дзольдо, вафельная ложка в Люцерне, грацкий салон зимой)
- Lesen Aufgabe 3: «Warum uns manche Lieder nicht loslassen» (навязчивые мелодии, дневниковое исследование)
- Lesen Aufgabe 4: реклама суконной валяльни (Lodenwalke) в Эннстале
- Hören Aufgabe 1: радиопередача о неловкости и стыде за других (психолог из Клагенфурта)
- Hören Aufgabe 2: доклад «Der Biber kehrt zurück» (бобры в Нижней Австрии, конфликты и решения)
- Schreiben Aufgabe 1: ответ фитнес-клубу в Граце (карта использована другим, расторжение, 79 евро)
- Schreiben Aufgabe 2: A Referat о продолжительности сна по возрастам; B Stellungnahme о закрытии летних кафе в 22 часа на Вёртерзе; C Kommentar к статье о пожарных
- Sprechen: 1 звонок соседке снизу (протекла стиральная машина); 2 фото «Fit bleiben, aber wie?» (футбольная команда или бегун с часами); 3 Kurzreferat «Aufräumen und Ausmisten»

## Ключ (вывод `python3 scripts/answers.py`)
```
Lesen · Aufgabe 1–3 · Пробник Stellas ÖSD C1 №5 (15)
   Aufgabe 1 · Feuerwehr 1.1:A 1.2:C 1.3:B 1.4:C 1.5:A
   Aufgabe 2 · Überschriften 2.1:F 2.2:H 2.3:K 2.4:C 2.5:A
   Aufgabe 3 · Ohrwürmer 3.1:E 3.2:B 3.3:G 3.4:A 3.5:D
Lesen · Aufgabe 4 · верные из 15 (15)
   Aufgabe 4 · Absatz 1–2 1:wird 2:dessen 3:weil 4:bis 5:fast 6:anhaben
   Aufgabe 4 · Absatz 3 7:stellen 8:verbringen 9:unbedenklich
   Aufgabe 4 · Absatz 4 10:für 11:wenn
   Aufgabe 4 · Absatz 5 12:vorbei 13:etwa 14:ab 15:unter
Hören · Aufgabe 1 · Пробник Stellas ÖSD C1 №5 (10)
   Abschnitt 1 1:A 2:C
   Abschnitt 2 3:B 4:C 5:A
   Abschnitt 3 6:B 7:A 8:C
   Abschnitt 4 9:B 10:A
Hören · Aufgabe 2 · заметки (10)
   Die Geschichte 1:Fleisch 2:Flüssen
   Was der Biber bewirkt 3:Wasservögel 4:trockenen
   Die Konflikte 5:Feldern 6:Baue 7:Obstbäume
   Die Lösungen 8:Drahtgitter 9:niedrig 10:Landwirtschaft
```

Lesen Aufgabe 2: варианты A–K без J, пять заголовков лишние. Lesen Aufgabe 3: семь абзацев A–G, два лишние (указаны в `why` к заданию 3.5).

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` → ✓.
- `python3 scripts/answers.py` → 15 / 15 / 10 / 10, как в формате.
- `python3 -I scripts/audit-mocks.py`: id бланков и тексты Listen уникальны на сайте, серий из 4+ одинаковых ответов нет, длинного тире нет. Оставшиеся «цитата не найдена» относятся только к синонимам и грамматическим образцам в `why` (Aufgabe 4, заметки), это не цитаты из текста.
- Верный вариант самый длинный: Lesen Aufgabe 1 в 1 из 5, Hören Aufgabe 1 в 2 из 10.
- Длина записей: Hören Aufgabe 1 около 920 слов, доклад Hören Aufgabe 2 около 585 слов (№1: 907 и 557).
- Слепое решение независимым агентом по тексту без ключа и разборов: совпадение с ключом 50 из 50. Его замечания (двусмысленные формулировки, подсказки в `q`, слишком очевидные дистракторы, логические нестыковки в тексте) исправлены, см. отчёт.
