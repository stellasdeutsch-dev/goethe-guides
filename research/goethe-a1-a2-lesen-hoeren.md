# Goethe A1 Lesen, A1 Hören, A2 Hören: факты для гайдов

Проверено: 2026-10-31. Статьи:
- `src/content/guides/lesen/goethe-a1-lesen.mdx`
- `src/content/guides/hoeren/goethe-a1-hoeren.mdx`
- `src/content/guides/hoeren/goethe-a2-hoeren.mdx`

Страницы A2-MS даны по печатной «Seite» (PDF-стр. = Seite + 2). Все PDF скачаны заново `curl -sL -A "Mozilla/5.0"` (HTTP 200) и прочитаны через `pdftotext -layout`. Аудио скачано (HTTP 200), длительность через `ffprobe`, паузы через `ffmpeg -af silencedetect=noise=-40dB:d=4` (без воспроизведения). Сверено с уже существующими заметками `research/a1-modellsatz-razbor.md`, `research/a2-modellsatz-razbor.md`, `research/start-deutsch-1-a1-viza.md`: расхождений нет.

## Источники

- [A1-MS] Goethe-Zertifikat A1: Start Deutsch 1, Modellsatz (PDF, 8. Auflage, Februar 2024): https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_modellsatz.pdf
- [A1-ÜS] Start Deutsch 1, Übungssatz 01 (PDF): https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz01.pdf
- [A1-DB] Durchführungsbestimmungen Goethe-Zertifikat A1: Start Deutsch 1, Stand 1. September 2025: https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf
- [A1-AUDIO] Аудио к Modellsatz A1, модуль Hören (MP4, 16 636 785 байт, 1028,6 с = 17:08): https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_1_hoeren_a1_erwachsene.mp4
- [A1-ONLINE] Barrierefreier Modellsatz A1, Hören (HTTP 200): https://bfu.goethe.de/a1_sd1/hoeren.php
- [A2-MS] Goethe-Zertifikat A2, Modellsatz Erwachsene (PDF): https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Modellsatz_Erwachsene.pdf
- [A2-ÜS] Goethe-Zertifikat A2, Übungssatz 01 Erwachsene (PDF): https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Uebungssatz_Erwachsene.pdf
- [A2-DB] Durchführungsbestimmungen Goethe-Zertifikat A2 und A2 Fit in Deutsch, Stand 1. September 2025: https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_A2.pdf
- [A2-AUDIO] Аудио к Modellsatz A2 Erwachsene, модуль Hören (MP4, 13 542 548 байт, 1355,8 с = 22:35): https://goethemp4s.akamaized.net/resources/files/mp434/pruefungstraining_1_hoeren_a2_erwachsene.mp4
- [A2-ONLINE] Barrierefreier Modellsatz A2, Hören (HTTP 200): https://bfu.goethe.de/a2_mod_2MX5/hoeren.php
- [PO] Prüfungsordnung der Goethe-Institut-Prüfungen: https://www.goethe.de/pro/relaunch/prf/de/Pruefungsordnung.pdf (не перепроверял, ссылка из соседних заметок)

## A1 (Start Deutsch 1): письменная часть целиком

| Факт | Цитата | Источник |
|---|---|---|
| Письменная часть 65 минут без перерыва | «Die schriftliche Prüfung dauert ohne Pausen insgesamt 65 Minuten» | A1-DB 1.4 |
| Hören ок. 20, Lesen 25, Schreiben 20 минут | «HÖREN ca. 20 Minuten / LESEN 25 Minuten / SCHREIBEN 20 Minuten» | A1-DB 1.4 |
| Начинают с Hören | «Die Prüfung beginnt in der Regel mit dem Prüfungsteil HÖREN.» | A1-DB §2 |
| Аудио запускает наблюдатель | «Die Audiodatei wird von der Aufsichtsperson gestartet.» | A1-DB §2 |
| После Hören ок. 5 минут на перенос в бланк | «stehen den Teilnehmenden circa 5 Minuten innerhalb der Prüfungszeit zur Verfügung» | A1-DB §2 |
| Lesen и Schreiben в любом порядке | «in der von den Teilnehmenden gewünschten Reihenfolge» | A1-DB §2 |
| На перенос Lesen/Schreiben планируешь сам ок. 5 минут | «planen die Teilnehmenden circa 5 Minuten innerhalb der Prüfungszeit ein» | A1-DB §2 |
| На обложке Lesen + Schreiben: ок. 45 минут | «Lesen / Schreiben circa 45 Minuten», «Lesen, circa 25 Minuten», «Schreiben, circa 20 Minuten» | A1-MS стр. 15 |
| Ответы сначала на листе, в конце перенос в бланк; баллы проставляют в бланке. Фразы «оценивают только бланк» в A1-DB нет, в статье пишу «перенеси, иначе ответа нет в бланке» | «markieren ihre Lösungen zunächst auf den Kandidatenblättern und übertragen sie am Ende auf den Antwortbogen» | A1-DB §2, §4 |
| Словари запрещены | «Wörterbücher sind nicht erlaubt.» | A1-MS стр. 15 |

## A1 Hören

| Факт | Цитата | Источник |
|---|---|---|
| 3 части, короткие разговоры и объявления, к каждому тексту одно задание | «Dieser Test hat drei Teile. Sie hören kurze Gespräche und Ansagen. Zu jedem Text gibt es eine Aufgabe.» | A1-MS стр. 7 |
| Сначала задание, потом текст | «Lesen Sie zuerst die Aufgabe, hören Sie dann den Text dazu.» | A1-MS стр. 7 |
| Teil 1: задания 1–6, a/b/c, каждый текст дважды | «Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.» | A1-MS, Hören Teil 1 (стр. 7–9) |
| Teil 2: задания 7–10, Richtig/Falsch, каждый текст один раз | «Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.» | A1-MS, Hören Teil 2 (стр. 10–11) |
| Teil 3: задания 11–15, a/b/c, дважды | «Sie hören jeden Text zweimal.» | A1-MS, Hören Teil 3 (стр. 12–13) |
| Пример (0) есть в Teil 1 и Teil 2 | «Beispiel» | A1-MS, Hören Teil 1 и 2 |
| Типы текстов: автоответчик, объявления, короткие разговоры; числа, время, цены | «Ansagen auf dem Anrufbeantworter, öffentliche Durchsagen sowie kurze Gespräche verstehen», «Zahlen, Mengen, Uhrzeiten und Preise nennen und verstehen» | A1-MS Vorwort |
| В Modellsatz Teil 2 = объявления (вокзал, аэропорт, магазин), Teil 3 = сообщения на автоответчике | транскрипты | A1-MS Prüferblätter (Transkriptionen) |
| Максимум 15 баллов, 1 или 0 за ответ | «Im Prüfungsteil HÖREN sind maximal 15 Punkte erreichbar … pro Lösung 1 Punkt oder 0 Punkte.» | A1-DB 4.1 |
| Длительность аудио Modellsatz 17:08 | ffprobe 1028,6 с | A1-AUDIO |
| Паузы в записи около 15–17 с (между прослушиваниями и текстами), плюс короткие ~4–5 с | silencedetect: 15,3–17,2 с и 4,1–6,3 с; паузы на 5 минут переноса в файле нет | A1-AUDIO (наш замер) |

В статье паузу формулирую как «наш замер по официальной записи: около 15 секунд», без официальной цифры.

## A1 Lesen

| Факт | Цитата | Источник |
|---|---|---|
| 3 части, короткие письма, объявления и т. п. | «Dieser Test hat drei Teile. Sie lesen kurze Briefe, Anzeigen etc.» | A1-MS стр. 15 |
| Teil 1: два текста, задания 1–5, Richtig/Falsch | «Lesen Sie die beiden Texte und die Aufgaben 1 bis 5. Kreuzen Sie an: Richtig oder Falsch.» | A1-MS, Lesen Teil 1 (стр. 16–17) |
| Teil 2: задания 6–10, где найти информацию, a или b (две веб-страницы/объявления) | «Wo finden Sie Informationen? Kreuzen Sie an: a oder b.» | A1-MS, Lesen Teil 2 (стр. 18–20) |
| Teil 3: задания 11–15, Richtig/Falsch, таблички и объявления с местом («An der Tür der Sprachschule») | «Lesen Sie die Texte und die Aufgaben 11 bis 15. Kreuzen Sie an: Richtig oder Falsch.» | A1-MS, Lesen Teil 3 (стр. 21–23) |
| Пример (0) в каждой части | «Beispiel» | A1-MS, Lesen Teil 1–3 |
| Цель: короткие сообщения, таблички, мелкие объявления | «Informationen aus schriftlichen Kurzmitteilungen, öffentlichen Hinweisschildern und Kleinanzeigen entnehmen» | A1-MS Vorwort |
| Максимум 15 баллов, 1 или 0 | «Im Prüfungsteil LESEN sind maximal 15 Punkte erreichbar … pro Lösung 1 Punkt oder 0 Punkte.» | A1-DB 4.2 |
| Формат совпадает в Übungssatz 01 | «Wo finden Sie Informationen? Kreuzen Sie an: a oder b.», «circa 25 Minuten» | A1-ÜS |

## A1: баллы и сдача

| Факт | Цитата | Источник |
|---|---|---|
| Баллы частей × 1,66, итог округляют | «mit dem Faktor 1,66 multipliziert und anschließend addiert. Das Gesamtergebnis wird auf volle Punkte gerundet.» | A1-DB 6.1 |
| Максимум 100: 75 письменная, 25 устная. Сдал = от 60 | «Maximal können 100 Punkte erreicht werden, 75 Punkte im schriftlichen Teil und 25 Punkte im mündlichen Teil. Die Prüfung ist bestanden, wenn mindestens 60 Punkte … erreicht …» | A1-DB 6.3 |
| Меньше 35 в письменной: Sprechen «не имеет смысла» | «weniger als 35 Punkte … ist eine Teilnahme am Prüfungsteil SPRECHEN nicht sinnvoll» | A1-DB 6.3 |
| Оценки 100–90 sehr gut … 69–60 ausreichend, 59–0 nicht bestanden | таблица | A1-DB 6.2 |
| Пересдать можно только целиком | «Die Prüfung kann nur als Ganzes wiederholt werden.» | A1-DB §7 (см. a1-modellsatz-razbor.md) |

Расчёты (наши, по формуле 6.1): 15 × 1,66 = 24,9 (вклад одной части почти 25); 9 × 1,66 = 14,94; 9 верных в каждой из четырёх частей = 36 × 1,66 = 59,76 → 60 (ровно порог); 35 × 1,66 = 58,1 → 58. Отдельного порога у Lesen и Hören нет. «9 из 15» подаю как ориентир, не как правило.

## A2: письменная часть целиком

| Факт | Цитата | Источник |
|---|---|---|
| Письменная часть 90 минут без перерыва: Lesen 30, Hören ок. 30, Schreiben 30 | «dauert ohne Pausen insgesamt 90 Minuten: LESEN 30 Minuten, HÖREN ca. 30 Minuten, SCHREIBEN 30 Minuten» | A2-DB 1.4 |
| Рекомендованный порядок Lesen – Hören – Schreiben, центр может поменять | «folgende Reihenfolge empfohlen: LESEN – HÖREN – SCHREIBEN. Aus organisatorischen Gründen kann die Reihenfolge … geändert werden.» | A2-DB §2 |
| Перерывов между частями нет | «Zwischen den Prüfungsteilen ist keine Pause vorgesehen.» | A2-DB §2 |
| Hören: перенос в бланк ок. 3 минут внутри времени | «stehen den Teilnehmenden circa 3 Minuten innerhalb der Prüfungszeit zur Verfügung» | A2-DB §2 п. 2 |
| Оценивают только ответы в бланке | «Bei der Bewertung werden nur auf dem Antwortbogen eingetragene Antworten berücksichtigt.» | A2-DB §4 |
| Словари и телефоны запрещены | «Wörterbücher und Mobiltelefone sind nicht erlaubt.» | A2-MS стр. 15 (обложка Hören) |

## A2 Hören

| Факт | Цитата | Источник |
|---|---|---|
| 4 части: радио, разговоры, автоответчик, объявления | «Sie hören Sendungen aus dem Radio, Gespräche, Nachrichten auf dem Anrufbeantworter und Durchsagen.» | A2-MS стр. 15 |
| Сначала задания, потом текст | «Lesen Sie zuerst die Aufgaben. Hören Sie dann den Text dazu.» | A2-MS стр. 15 |
| Teil 1: 5 коротких текстов, дважды, задания 1–5, a/b/c | «Sie hören fünf kurze Texte. Sie hören jeden Text zweimal.» | A2-MS стр. 16 |
| Teil 1 по обзору: радио, автоответчик, объявления | «Informationen im Radio, auf dem Anrufbeantworter, bei Durchsagen verstehen» | A2-MS стр. 3 (Überblick) |
| Teil 2: один разговор, один раз, задания 6–10, картинка из a–i, каждую букву один раз | «Sie hören ein Gespräch. Sie hören den Text einmal. … ein passendes Bild aus a bis i. Wählen Sie jeden Buchstaben nur einmal.» | A2-MS стр. 17 |
| Teil 2 привязан к дням недели: пример Montag, задания Dienstag–Samstag (MS); в ÜS пример Freitag, задания Samstag–Mittwoch | таблица «Tag / Lösung» | A2-MS стр. 17; A2-ÜS стр. 17 |
| 9 картинок, 1 пример + 5 заданий → 3 картинки лишние | наш подсчёт по a–i | A2-MS стр. 17 |
| Teil 3: 5 коротких разговоров, один раз, задания 11–15, a/b/c (картинки) | «Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal.» Обзор: «Mehrfachauswahl, 3-gliedrig, Bild/Text» | A2-MS стр. 18, 3 |
| Teil 4: радиоинтервью, дважды, задания 16–20, Ja/Nein | «Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.» (в обзоре на стр. 3 написано «Richtig/Falsch», в задании и бланке «Ja/Nein») | A2-MS стр. 19, 3 |
| Формат Teil 1–4 тот же в Übungssatz 01 | те же инструкции | A2-ÜS стр. 16–19 |
| 20 заданий, 1 или 0, × 1,25 = максимум 25 | «Im Prüfungsteil HÖREN gibt es 20 Items. … mit 1,25 multipliziert.» | A2-DB 4.2 |
| Длительность аудио Modellsatz 22:35 | ffprobe 1355,8 с | A2-AUDIO |
| В конце записи ~3 минуты тишины (перенос в бланк) | silencedetect: тишина 1164,3–1346,2 с = 181,8 с | A2-AUDIO (наш замер), совпадает с A2-DB «circa 3 Minuten» |
| Паузы между текстами около 15–16 с, две паузы около 25 с (перед Teil 2 и Teil 4, судя по таймингу) | silencedetect | A2-AUDIO (наш замер) |

В статье: «около 15 секунд тишины между текстами (наш замер)», «в конце около 3 минут на бланк». Про 25 с не пишу как факт про конкретную часть: привязка к частям по таймингу, а не по инструкции.

## A2: баллы и сдача

| Факт | Цитата | Источник |
|---|---|---|
| Максимум 100, сдал = от 60, из них от 45 в письменной и от 15 в устной | «mindestens 60 Punkte … Hiervon müssen mindestens 45 Punkte in der schriftlichen Prüfung und mindestens 15 Punkte in der mündlichen Prüfung erreicht werden.» | A2-DB 6.3 |
| Итог округляют | «addiert und auf volle Punkte gerundet» | A2-DB 6.1 (см. a2-modellsatz-razbor.md) |

Расчёты: 12 верных × 1,25 = 15 (треть от 45, ориентир, не порог); 20 × 1,25 = 25.

## Что не нашёл / не пишу

- Официального времени на чтение заданий перед текстами A1 и A2 в листах нет. Даю только замер пауз по аудио.
- Цены и даты экзамена в этих гайдах не упоминаются.
- Практические тексты и задания в статьях полностью свои. Из Modellsatz взяты только стандартные инструкции («Sie hören jeden Text zweimal.» и т. п.).
