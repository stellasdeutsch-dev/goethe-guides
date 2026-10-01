# Разбор официального Modellsatz Start Deutsch 1 (A1)

Проверено: 2026-10-01. Статья: `src/content/guides/probniki/a1-modellsatz-razbor.mdx`.
Базовые факты по формату A1 и визе: `research/start-deutsch-1-a1-viza.md` (не дублирую, здесь только то, что нужно для разбора).

## Источники (все URL проверены `curl -sIL -A "Mozilla/5.0"` → 200)

- [MS] Goethe-Zertifikat A1: Start Deutsch 1, Modellsatz, «8. Auflage © Goethe-Institut Februar 2024» (PDF, 47 стр., ModDate 2024-05-02, Last-Modified сервера 22.10.2025):
  https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_modellsatz.pdf
- [AUDIO] Аудио к Modellsatz, модуль Hören. На странице Übungsmaterialien подписано «A1-Modellsatz Modul Hören direkt anhören (17:08 Minuten)», ссылка «Prüfungstraining 1 Hören A1 Erwachsene (MP4, 17 MB)». Длительность файла проверена в браузере: 1028,6 с = 17:08. HTTP 200, Content-Length 16 636 785:
  https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_1_hoeren_a1_erwachsene.mp4
- [VIDEO-SP] Видео «A1-Modellsatz Modul Sprechen direkt ansehen (13:36 Min.)», длительность 816,4 с = 13:36. HTTP 200:
  https://goethemp4s.akamaized.net/resources/files/mp459/goethe_zertifikat_a1_start-v1.mp4
- [UEB] Страница Übungsmaterialien Goethe-Zertifikat A1 (Goethe-Institut Deutschland). HEAD 200; GET из curl отдаёт 403 (бот-защита), в браузере открывается:
  https://www.goethe.de/ins/de/de/prf/prf/gzsd1/ueb.html
  Там же: A1-Übungssatz 01 (PDF) + «Prüfungstraining 2 Hören A1 Erwachsene» (18:59), A1-Übungssatz 02 (PDF) + «Prüfungstraining 3 Hören A1 Erwachsene» (19:04), «Barrierefreier A1-Modellsatz».
- [BFU] Barrierefreier A1-Modellsatz (тот же Modellsatz онлайн, аудио по каждому заданию отдельно): https://bfu.goethe.de/a1_sd1/ , Hören: https://bfu.goethe.de/a1_sd1/hoeren.php (200). Проверено: задания совпадают с PDF (например, 0 «Welche Zimmernummer hat Herr Schneider?», 1 «Was kostet der Pullover?»).
- [UEB-01] https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz01.pdf (200)
- [UEB-02] https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz02.pdf (200)
- [AUDIO-02] https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_2_hoeren_a1_erwachsene.mp4 (200/206)
- [AUDIO-03] https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_3_hoeren_a1_erwachsene.mp4 (200/206)
- [DB-A1] Durchführungsbestimmungen Goethe-Zertifikat A1: Start Deutsch 1, «Stand: 1. September 2025» (PDF, 16 стр.):
  https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf

## Нумерация страниц MS

В PDF нет печатной страницы 33, поэтому с конца раздела Sprechen печатный номер = номер страницы PDF + 1.

| Раздел | Стр. PDF | Печатная «Seite» |
|---|---|---|
| Hören, задания | 7–13 | 7–13 |
| Lesen, задания | 15–23 | 15–23 |
| Schreiben, задания | 24–25 | 24–25 |
| Sprechen, карточки | 27–32 | 27–32 |
| Transkriptionen | 33–36 | 34–37 |
| **Lösungen** Hören, Lesen, Schreiben | **37** | 38 (по Inhalt; на самой странице номера нет) |
| Bewertung Schreiben | 38 | 39 |
| Hinweise zur mündlichen Prüfung | 39–41 | 40–42 |
| Bewertung Sprechen | 42 | 43 |
| Antwortbogen | 43– | 44– |

Ключ Hören/Lesen на стр. 37 сделан графикой (жирные клетки), текстом не извлекается. Прочитан по рендеру страницы (pdftoppm, 110 dpi).

## Баллы (DB-A1)

- 4.1 HÖREN: «maximal 15 Punkte», «pro Lösung 1 Punkt oder 0 Punkte», баллы складываются.
- 4.2 LESEN: то же, «maximal 15 Punkte».
- 4.3.1 SCHREIBEN Teil 1: «maximal 5 Punkte», «pro Lösung 1 Punkt oder 0 Punkte».
- 4.3.2 SCHREIBEN Teil 2: «maximal 10 Punkte», «Bewertet wird die Reinschrift auf dem Antwortbogen», два оценщика, среднее, округление (до 0,49 вниз, от 0,5 вверх).
- §5 SPRECHEN: «maximal 15 Punkte …, davon 3 Punkte in Teil 1 sowie jeweils 6 Punkte in Teil 2 und 3».
- 6.1: «die in den einzelnen Prüfungsteilen erzielten Punkte mit dem Faktor 1,66 multipliziert und anschließend addiert. Das Gesamtergebnis wird auf volle Punkte gerundet.»
- 6.3: «Maximal können 100 Punkte erreicht werden, 75 Punkte im schriftlichen Teil und 25 Punkte im mündlichen Teil. Die Prüfung ist bestanden, wenn mindestens 60 Punkte (60 % der Maximalpunktzahl) erreicht und alle Prüfungsteile abgelegt wurden.» Меньше 35 письменно → Sprechen «nicht sinnvoll».
- §7: «Die Prüfung kann nur als Ganzes wiederholt werden.»
- 1.4: HÖREN «ca. 20 Minuten», LESEN «25 Minuten», SCHREIBEN «20 Minuten», «Gesamt 65 Minuten». SPRECHEN 15 минут, «Es gibt keine Vorbereitungszeit.»
- 2.2: после Hören ~5 минут на перенос в Antwortbogen; Lesen и Schreiben в любом порядке; Schreiben Teil 2 пишут прямо в Antwortbogen.
- Antwortbogen (MS стр. PDF 43): поля «Ergebnis Hören», «Ergebnis Lesen», «Ergebnis Schreiben … / 15», «Ergebnis: (Hören+Lesen+Schreiben) / 45».

### Как настроены AnswerSheet

- Порог A1 общий (60 из 100 по сумме всех четырёх частей), поэтому `pass` не ставлю.
- `factor={1.66} maxPoints={25}`: 15 верных × 1,66 = 24,9 → 25, то есть вклад модуля в итоговые 100. Компонент округляет по модулю; официально округляют только итоговую сумму (6.1). Разница максимум ±1, в статье это сказано.
- Мой расчёт по формуле 6.1: 9 из 15 в каждой из 4 частей = 36 сырых × 1,66 = 59,76 → 60 (ровно порог). 35 × 1,66 = 58,1 → 58.
- Время: Hören `minutes={20}` (DB 1.4 «ca. 20»), Lesen `minutes={25}`.

## Формат частей (MS)

- Hören Teil 1: 1–6, a/b/c, «Sie hören jeden Text zweimal.» Teil 2: 7–10, Richtig/Falsch, «Sie hören jeden Text einmal.» Teil 3: 11–15, a/b/c, «zweimal». Пример 0 в Teil 1 и Teil 2.
- Lesen Teil 1: 1–5, Richtig/Falsch, два коротких письма. Teil 2: 6–10, «Wo finden Sie Informationen? Kreuzen Sie an: a oder b.» Teil 3: 11–15, Richtig/Falsch, вывески/таблички. Пример 0 в каждой части.
- MS стр. 15: «Lesen, circa 25 Minuten», «Schreiben, circa 20 Minuten», «Wörterbücher sind nicht erlaubt.»

## Ключ ответов: Hören (MS стр. PDF 37), проверено по транскрипту (стр. PDF 33–36)

| № | Часть | Ответ | Индекс `a` | Почему (по транскрипту) |
|---|---|---|---|---|
| 1 | Teil 1 | c | 2 | цена 19,95; «30 Prozent billiger» = отвлекалка |
| 2 | Teil 1 | b | 1 | «gleich 5 Uhr» |
| 3 | Teil 1 | a | 0 | салата нет, мясо не ест, выбирает Pommes |
| 4 | Teil 1 | b | 1 | сыну 9 лет, «dritte Klasse» |
| 5 | Teil 1 | a | 0 | Rolltreppe kaputt → Aufzug за углом |
| 6 | Teil 1 | c | 2 | «Zu meinen Verwandten nach Polen» |
| 7 | Teil 2 | Falsch | 1 | реклама вина, «Besuchen Sie uns im 3. Stock» |
| 8 | Teil 2 | Falsch | 1 | встреча «um halb eins am Bus» |
| 9 | Teil 2 | Richtig | 0 | «Bitte hier nicht aussteigen» |
| 10 | Teil 2 | Richtig | 0 | рейс закрывают «in ein paar Minuten» |
| 11 | Teil 3 | a | 0 | «11 8 33» |
| 12 | Teil 3 | c | 2 | «Ich warte an der Information» |
| 13 | Teil 3 | c | 2 | ждал 20 мин, «Zehn Minuten Zeit hast du noch» |
| 14 | Teil 3 | b | 1 | суббота нет, «Am Sonntag haben wir aber Zeit» |
| 15 | Teil 3 | b | 1 | «Mein Computer hat einen Fehler» |

Расхождений ключа и транскрипта нет.

## Ключ ответов: Lesen (MS стр. PDF 37), проверено по текстам (стр. PDF 16–23)

| № | Часть | Ответ | Индекс `a` | Почему (по тексту) |
|---|---|---|---|---|
| 1 | Teil 1 | Richtig | 0 | поезд 12.36, это после 12.30 |
| 2 | Teil 1 | Falsch | 1 | на вокзале с 12.15; весь Vormittag только по телефону |
| 3 | Teil 1 | Falsch | 1 | «am kommenden Sonntag» |
| 4 | Teil 1 | Falsch | 1 | «viele Leute» |
| 5 | Teil 1 | Richtig | 0 | «draußen im Garten» |
| 6 | Teil 2 | b | 1 | Rheinschiffe; a = отель с названием «Schiff» |
| 7 | Teil 2 | a | 0 | школа в Дрездене, есть Deutsch; b = курсы для немцев за границей |
| 8 | Teil 2 | a | 0 | Deutsche Bahn + E-Mail Ticketbestellung; b = театр, концерты, автобусы |
| 9 | Teil 2 | a | 0 | Touristeninformation; b = частные Ferienwohnungen |
| 10 | Teil 2 | b | 1 | ab Wiesbaden 08.09, an Hamburg 12.40; a = обратное направление |
| 11 | Teil 3 | Richtig | 0 | Frühstückspaket за 2 евро на ресепшене |
| 12 | Teil 3 | Falsch | 1 | суббота только 8–12 |
| 13 | Teil 3 | Falsch | 1 | «Rauchen verboten» |
| 14 | Teil 3 | Richtig | 0 | «ab 20 Uhr Tanz» |
| 15 | Teil 3 | Richtig | 0 | автобусы до 23.00 и с 1.00 |

Расхождений нет.

## Schreiben (MS стр. PDF 24–25, ключ Teil 1 стр. 37, критерии Teil 2 стр. 38)

- Teil 1 (форма, 5 пропусков). Ключ: 1 → 4; 2 → 2; 3 → Seeheim; 4 → bar; 5 → «Datum (vom nächsten Sonntag) / Sonntag / nächsten Sonntag».
- Teil 2: письмо в Touristeninformation (Dresden, август), 3 пункта: зачем пишешь / попросить информацию о культурной программе / спросить про адреса отелей. «ein bis zwei Sätze» на пункт, «circa 30 Wörter», «eine Anrede und einen Gruß».
- Критерии Teil 2 (стр. 38): за пункт 3 / 1,5 / 0; «Kommunikative Gestaltung des Textes» 1 / 0,5 («untypische oder fehlende Wendungen, z. B. keine Anrede») / 0. На той же странице 4 оценённых примера (10; 6,5; 6,5; 5 баллов). В статье не цитирую, только пересказ сути: один пример с ошибками получил 10, потому что все пункты понятны.

  Проверка последнего утверждения: пример на 10 баллов («3 – 3 – 3 – 1») содержит ошибки (строчная буква в начале предложения, «einen Kulturprogramm»). Значит, на A1 мелкие ошибки не снимают баллы, если пункт понятен. В статье формулирую осторожно: «в официальном примере на 10 из 10 есть грамматические ошибки».

## Sprechen (MS стр. PDF 28–32, 39–42)

- Teil 1 «Sich vorstellen», лист со словами: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby. Потом buchstabieren и номер (Telefon-, Handy-, Haus- oder Autonummer, PLZ).
- Teil 2 «Um Informationen bitten und Informationen geben», карточки со словом. В Modellsatz 2 темы: «Essen & Trinken» (Frühstück, Lieblingsessen, Sonntag, Bier, Fleisch, Brot) и «Einkaufen» (Zeitung, Kasse, Obst, Schuhe, Buch, Stadtplan). Пример модератора: карточка «Stadtplan».
- Teil 3 «Bitten formulieren und darauf reagieren», карточки с картинками (бытовые предметы и знаки: CD, книга, бутылка, карандаш, стул, часы, яблоко, нож и вилка, стакан, «не курить», сумка, радио). Пример модератора: «Ein Glas Wasser, bitte!» Каждый тянет две карточки (стр. 41: «ziehen zwei der verdeckten Handlungskarten»).
- Bewertung Sprechen (стр. 42): «volle Punktzahl / halbe Punktzahl / 0 Punkte».
- Мои образцы диалогов в статье свои, примеры модератора (Stadtplan, Glas Wasser) не использую.

## Не подтверждено / не пишу

- Количество баллов за отдельный раунд Sprechen Teil 2/3 (как делятся 6 баллов между вопросом и ответом) в DB-A1 и MS не расписано → в статье только «6 баллов за часть».
- Влияет ли орфография на балл в Schreiben Teil 1: в DB только «1 Punkt oder 0 Punkte» → в статье совет «пиши разборчиво и как в тексте», без правила.
