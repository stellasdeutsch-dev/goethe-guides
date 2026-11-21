# Пробник Stellas ÖSD C1 №4: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-c1-probnik-stellas-4.mdx`. Создано 2026-11-21.
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
- Lesen Aufgabe 1: статья «Vom Labor ins Klassenzimmer» (учителя из других профессий)
- Lesen Aufgabe 2: пять заметок о хлебе (хлебный автомат в Мюльфиртеле, старая рожь в Вальдфиртеле, курсы выпечки, цена булочки, закваска на время отпуска)
- Lesen Aufgabe 3: «Warum wir unsere Träume vergessen»
- Lesen Aufgabe 4: реклама термального курорта в Штирии
- Hören Aufgabe 1: радиопередача о зависти (психолог из Зальцбурга)
- Hören Aufgabe 2: доклад «Wenn Brücken müde werden» (старение мостов, соль, датчики, нехватка специалистов)
- Schreiben Aufgabe 1: ответ службе каршеринга (царапина, сбой приложения, 150 и 20 евро)
- Schreiben Aufgabe 2: A Referat «Wer erledigt was im Haushalt?»; B Stellungnahme о запрете каменных садов; C Kommentar к статье об учителях
- Sprechen: 1 звонок начальнице отдела (письмо не тому клиенту); 2 фото «Heiraten heute»; 3 Kurzreferat «Nachbarschaft»

## Ключ (вывод `python3 scripts/answers.py`)
```
Lesen · Aufgabe 1–3 · Пробник Stellas ÖSD C1 №4 (15)
   Aufgabe 1 · Quereinsteiger 1.1:B 1.2:A 1.3:C 1.4:B 1.5:C
   Aufgabe 2 · Überschriften 2.1:D 2.2:B 2.3:I 2.4:H 2.5:F
   Aufgabe 3 · Träume 3.1:E 3.2:A 3.3:D 3.4:G 3.5:C
Lesen · Aufgabe 4 · верные из 15 (15)
   Aufgabe 4 · Absatz 1 1:ein 2:aus 3:an
   Aufgabe 4 · Absatz 2 4:oder 5:darunter
   Aufgabe 4 · Absatz 3 6:haben 7:mit
   Aufgabe 4 · Absatz 4 8:bucht 9:auf
   Aufgabe 4 · Absatz 5 10:das 11:ohne
   Aufgabe 4 · Absatz 6 12:Dann 13:am
   Aufgabe 4 · Absatz 7 14:bis 15:zu
Hören · Aufgabe 1 · Пробник Stellas ÖSD C1 №4 (10)
   Abschnitt 1 1:C 2:B
   Abschnitt 2 3:A 4:B 5:C
   Abschnitt 3 6:A 7:C 8:B
   Abschnitt 4 9:A 10:A
Hören · Aufgabe 2 · заметки (10)
   Die Ausgangslage 1:Sechziger- und Siebzigerjahren 2:80 Jahre 3:Lastwagen
   Die Schäden 4:Salz 5:sprengt 6:sichtbar
   Die Kontrolle 7:gelöst 8:Bewegung
   Die Zukunft 9:Fachkräfte 10:austauschbar
```

Lesen Aufgabe 2: варианты A–K без J, пять заголовков лишние. Lesen Aufgabe 3: семь абзацев A–G, два лишние (указаны в `why` к заданию 3.5).

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` → ✓.
- `python3 scripts/answers.py` → 15 / 15 / 10 / 10, как в формате.
- Слепое решение каждого модуля по тексту и скрипту; каждая немецкая цитата из `why` проверена скриптом на дословное совпадение с текстом страницы (несовпадения только у грамматических образцов и синонимов-альтернатив, это не цитаты).
- Тексты `Listen` уникальны на сайте (sha1 первых 12 знаков).
