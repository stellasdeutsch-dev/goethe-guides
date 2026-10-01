# Goethe C2 Hören: формат и стратегия

Статья: `src/content/guides/hoeren/goethe-c2-hoeren.mdx`
Проверено: 2026-10-01.

## Источники (curl → 200 application/pdf, `pdftotext`)

| Сокращение | Документ | URL | Версия |
|---|---|---|---|
| DB-C2 | Durchführungsbestimmungen Goethe-Zertifikat C2: GDS | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_C2_neu.pdf | «Stand: 1. September 2025» |
| MS-C2 | Modellsatz C2 | https://www.goethe.de/pro/relaunch/prf/materialien/C2/c2_modellsatz.pdf | «Aktualisiert: März 2026», 59 стр. |
| ÜS-C2 | Übungssatz 01 C2 | https://www.goethe.de/pro/relaunch/prf/materialien/C2/c2-uebungssatz.pdf | «Aktualisiert: März 2026», 62 стр. |
| HB-C2 | Prüfungsziele. Testbeschreibung C2 | https://www.goethe.de/pro/relaunch/prf/de/Pruefungsziele_Testbeschreibung_C2.pdf | Vers_09_170314 (2014) |
| Audio PT1 | Modellsatz Hören MP3 | https://goethemp4s.akamaized.net/resources/files/mp472/pruefungstraining_1_hoeren_c2.mp3 | 200 audio/mpeg, 2255 s (данные из research/goethe-modellsatz-skachat.md, ffprobe) |

`Durchfuehrungsbestimmungen_C2.pdf` → 404; актуальный файл `Durchfuehrungsbestimmungen_C2_neu.pdf` (200).

## Факты

### Модуль
- Время: DB-C2 §1.4: «HÖREN ca. 35 Minuten». MS-C2 с. 15: «Hören circa 35 Minuten», «Das Modul besteht aus drei Teilen.»
- 30 заданий: HB-C2 5.2 (с. 25): «Das Modul Hören gliedert sich in drei Teile und umfasst insgesamt 30 Items.» Бланк MS-C2 с. 35: 1–15, 16–20, 21–30.
- Типы: HB-C2 5.2: «Ja/Nein, Zuordnung, Multiple-Choice (dreigliedrig)».
- Объём: HB-C2 5.2: «Die Gesamtlänge der Texte beträgt circa 2.500 Wörter.» «Texte für Aufgabe 1 sind vorwiegend monologisch; für Aufgabe 2 und 3 sind sie dialogisch angelegt».
- Аудио: DB-C2 §1.2 (с. 3): «Die Audiodatei enthält die Texte zum Modul HÖREN sowie alle Anweisungen und Informationen.» DB-C2 §2.2 п. 2: «Die Audiodatei wird von der Aufsichtsperson gestartet.»
- Перенос: DB-C2 §2.2 п. 2 (немецкий текст): «Für das Übertragen ihrer Lösungen stehen den Teilnehmenden 3 Minuten zur Verfügung.» MS-C2 с. 15: «Am Ende haben Sie drei Minuten Zeit, um Ihre Lösungen auf den Antwortbogen zu übertragen.» **Расхождение:** английская колонка DB пишет «approximately five minutes». DB §8: «Im Falle von sprachlichen Unstimmigkeiten … ist die deutsche Fassung maßgeblich.» → пишем 3 минуты.
- Ручка: MS-C2 с. 15: «Schreiben Sie bitte deutlich und verwenden Sie keinen Bleistift.» Без словаря/телефона: там же.
- Ответы сначала на листе с заданиями: MS-C2 с. 15: «Markieren Sie Ihre Lösungen zuerst auf dem Aufgabenblatt.»
- Цифровой экзамен в центре: DB-C2 Anhang: «Die Texte zum Modul/Prüfungsteil HÖREN werden direkt durch die Testplattform über Kopfhörer ausgespielt.» Онлайн-экзамен: «über den Lautsprecher». Бланк не нужен.
- Длина официального аудио PT1: 2255 s ≈ 37,5 мин (research/goethe-modellsatz-skachat.md). В статье: «около 38 минут».

### По частям

| Teil | MS-C2 (стр.) | HB-C2 (с. 26–27) | Баллы (бланк MS-C2 с. 35) |
|---|---|---|---|
| 1 | с. 16: «Teil 1 Dauer: circa 12 Minuten». «Sie hören fünf Ausschnitte aus Radiosendungen zu verschiedenen Themen. Zu jedem Ausschnitt gibt es drei Aufgaben. Entscheiden Sie, ob die Aussagen mit dem Textinhalt übereinstimmen oder nicht. … Sie hören die Texte einmal.» Колонки «Ja / Nein». | «fünf Texte von je 1 Minute bis 1,5 Minuten Dauer … Kurzmeldungen, Auszüge aus Radioberichten oder -sendungen … vorwiegend monologisch … in authentischem Tempo … relativ hohen Informationsgehalt». «Die Teilnehmenden lesen die Aussagen vor dem Hören». «Die Texte werden nur einmal gehört. Die Aufgaben folgen in der Anordnung dem Textverlauf.» Arbeitszeit «ca. 10 Minuten». | «Punkte Teil 1 (max. 15): x2 = 30». HB: «mit zwei multipliziert». |
| 2 | с. 18: «Teil 2 Dauer: circa 5 Minuten». Разговор двух людей; «Entscheiden Sie, ob die Meinungsäußerung nur von einem Sprecher stammt oder ob beide Sprecher in ihrer Meinung übereinstimmen. Es gibt nur eine richtige Lösung. Sie hören das Gespräch einmal.» Колонки «Person 1 / Person 2 / beide», в примере под Person 1/2 стоят имена. | «Gespräch zwischen zwei Muttersprachlern, in dem Meinungen ausgetauscht werden … circa vier Minuten». «Der Text wird einmal gehört. Vor dem Hören lesen die Teilnehmenden sechs Aussagen (inkl. Beispiel).» Цель: «Standpunkte und Meinungen zu verstehen, auch wenn sie nur implizit geäußert werden.» «Die Items folgen in der Anordnung dem Textverlauf.» | «Punkte Teil 2 (max. 5): x4 = 20» |
| 3 | с. 19: «Teil 3 Dauer: circa 18 Minuten». Интервью с экспертом. «Kreuzen Sie bei den Aufgaben 21–30 die richtige Lösung an a, b oder c. Es gibt nur eine richtige Lösung. Sie hören das Gespräch zweimal.» | «Interview mit einem Experten von circa sieben Minuten Dauer … passagenweise monologisch … fachspezifisches Thema, das allgemein und für Laien dargestellt wird. Neben Informationen kommen auch Meinungen zum Ausdruck.» «Der Text wird zweimal gehört. Vor dem Hören lesen die Teilnehmenden elf Multiple-Choice-Items (inkl. Beispiel). Nachdem der Text einmal als Ganzes abgespielt wurde, hören sie den Text noch einmal ganz.» Arbeitszeit «ca. 20 Minuten». | «Punkte Teil 3 (max. 10): x5 = 50». HB: «Dieser Teil wird höher gewichtet …, da er den längsten Hörtext enthält, der zudem eine hohe Informationsdichte aufweist.» |

Расхождение по времени частей: HB-C2 (2014) Teil 1 «ca. 10», Teil 3 «ca. 20»; MS-C2 (март 2026) Teil 1 «circa 12», Teil 2 «circa 5», Teil 3 «circa 18». В статье берём MS-C2 (новее).

ÜS-C2 тот же формат: Teil 1 «circa 12 Minuten», «Sie hören die Texte einmal»; Teil 2 «circa 5 Minuten», «Sie hören das Gespräch einmal»; Teil 3 «circa 18 Minuten», «Aufgaben 21–30», «Sie hören das Gespräch zweimal»; бланк x2, x4, x5.

- Порядок и пауза: DB-C2 §2: «folgende Reihenfolge empfohlen: LESEN – HÖREN – SCHREIBEN»; «Zwischen jedem dieser Module ist eine Pause von mindestens 15 Minuten vorzusehen.» Порядок может менять центр.
- Наборов C2 для взрослых на goethe.de два (Prüfungstraining 1 = Modellsatz, 2 = Übungssatz 01): research/goethe-modellsatz-skachat.md.

### Баллы и порог
- DB-C2 §4.2: «Im Modul HÖREN sind insgesamt maximal 100 Punkte erreichbar. … pro Lösung 1 Punkt oder 0 Punkte. Die erzielten Punkte aus den Teilen 1, 2 und 3 werden addiert». Множители в бланке: 15×2 + 5×4 + 10×5 = 30 + 20 + 50 = 100.
- Порог DB-C2 §6.3: 60 Punkte. Предикаты §6.2 как в Lesen.
- Два независимых проверяющих: DB-C2 §4.

### Расчёт (наша арифметика)
- Без Teil 3 максимум 30 + 20 = 50 → модуль не сдать. Нужно минимум 2 верных в Teil 3 (50 + 10 = 60).
- Минимум верных для 60: 10×5 + 2×4 + 1×2 = 60 → **13 верных** (12 максимум 10×5 + 2×4 = 58).
- 22 верных в любой комбинации ≥ 60 (худший случай 15×2 + 5×4 + 2×5 = 60). 21 верный можно провалить (15×2 + 5×4 + 1×5 = 55).
- → «от 13 до 22 верных».

### Время на чтение заданий
- HB-C2: задания читают до прослушивания («lesen die Aussagen vor dem Hören»). Длину пауз в секундах ни MS-C2, ни DB-C2 не печатают (паузы и инструкции внутри аудиофайла). Секунды в статье НЕ указываем.

## Свои тексты для <Listen> (выдуманы, не из Modellsatz/Übungssatz)
1. Радио: городские деревья, «Stadtförsterin Miriam Albers». 3 × Ja/Nein. plays=1.
2. Радио: музей с бесплатным входом, «Museumsdirektor Jonas Fiedler». 3 × Ja/Nein. plays=1.
3. Разговор Lena / Paul: бумага или экран. 5 утверждений Lena / Paul / beide. plays=1.
4. Интервью: исследовательница памяти «Dr. Ruth Hansen», про забывание. 4 × a/b/c. plays=2.
Имена и учреждения выдуманы, цифр-статистики нет.

## Наши советы (не правила Goethe)
- Тренировка на радио (Deutschlandfunk, SWR, ORF Ö1 названы как примеры общественного радио), «две буквы на полях» в Teil 2, «?» в первом проходе Teil 3, тренировать Teil 1–2 с одним прослушиванием.

## Не подтверждено / не пишем
- Сколько секунд пауза перед каждым отрывком и между двумя прослушиваниями Teil 3.
- Входят ли 3 минуты переноса в «ca. 35 Minuten»: не сказано. Пишем «около 35 минут» и отдельно «3 минуты на перенос».
