# Goethe A2: разбор официального пробника (Modellsatz Erwachsene)

Проверено: 2026-10-01. Все URL проверены `curl -sIL -A "Mozilla/5.0"` → 200.

## Источники
- [MS] Goethe-Zertifikat A2, Modellsatz Erwachsene (PDF, 48 стр., версия на полях «Vs5.1_050525», © Goethe-Institut 2016): https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Modellsatz_Erwachsene.pdf → 200, application/pdf
- [AUDIO] Hören к Modellsatz Erwachsene, MP4: https://goethemp4s.akamaized.net/resources/files/mp434/pruefungstraining_1_hoeren_a2_erwachsene.mp4 → 200, video/mp4, 13 542 548 байт, длительность 1355,8 с = 22:35 (ffprobe). Совпадает с подписью на страницах goethe.de «A2-Modellsatz Erwachsene Modul Hören … 22:35» (видно в выдаче поиска; HTML-страницы goethe.de отдают 403). Аудио целиком не скачивали, проверены заголовки и длительность.
- [ONLINE] Онлайн-версия того же Modellsatz (barrierefrei): https://bfu.goethe.de/a2_mod_2MX5/ → 200. Страница Hören (https://bfu.goethe.de/a2_mod_2MX5/hoeren.php) содержит те же тексты (Olympia-Halle, Sabine, Hotel Leopold), страница Lesen (lesen.php) те же тексты (Stefan Berger, Kaufhaus Alexa, Gülcan, Teufelsmoor). Аудио там по частям (A2_Mod_T1_V1.mp4 …).
- [DB] Durchführungsbestimmungen Goethe-Zertifikat A2 und A2 Fit in Deutsch, Stand 1. September 2025: https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_A2.pdf → 200
- [US] Goethe-Zertifikat A2, Übungssatz Erwachsene (для плана подготовки): https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Uebungssatz_Erwachsene.pdf → 200
- [US-AUDIO] «Prüfungstraining 2 Hören A2 Erwachsene», MP3: https://goethemp4s.akamaized.net/resources/files/mp38/pruefungstraining_2_hoeren_a2_erwachsene.mp3 → 200, audio/mpeg, 34 801 844 байт, 1450 с = 24:10. На страницах goethe.de идёт как второй Hören-тренинг A2 Erwachsene (35 MB). Что это именно аудио к Übungssatz — по парности в списке материалов, сам файл не прослушан. В статье называем его по официальному названию «Prüfungstraining 2».

Нумерация: «PDF-стр.» = страница файла; «Seite» = напечатанный номер. PDF-стр. = Seite + 2.

## Формат и баллы (A2 не модульный)
- MS Seite 2 (PDF-стр. 4), Vorwort: «In der Prüfung lassen sich maximal 100 Punkte erreichen.» «In jedem Prüfungsteil gibt es maximal 25 Punkte. In den Prüfungsteilen Lesen, Hören und Schreiben wird das Ergebnis von 20 Messpunkten deshalb mit 1,25 multipliziert.» «Für die schriftlichen Teile Lesen, Hören und Schreiben wird die Stufe A2 bestätigt, wenn mindestens 45 von 75 möglichen Punkten erreicht werden. Für den Teil Sprechen müssen mindestens 15 von 25 Punkten erreicht sein.»
- DB 4.1: «Im Prüfungsteil LESEN gibt es 20 Items. Jedes Item ist ein Messpunkt. Pro Messpunkt und Lösung werden entweder 1 Punkt oder 0 Punkte vergeben.» «Die Messpunkte werden auf 25 Ergebnispunkte umgerechnet. Dazu werden sie mit 1,25 multipliziert.»
- DB 4.2: HÖREN — то же самое: 20 Items, ×1,25 → 25.
- DB 4.3: SCHREIBEN — «maximal 20 Messpunkte erreichbar, die auf volle Punkte gerundet und mit dem Faktor 1,25 zu maximal 25 Ergebnispunkten multipliziert werden.» Две независимые оценки, среднее. Drittbewertung, если среднее ниже «Bestehensgrenze von 12 Messpunkten» и оценки по разные стороны границы.
- DB §5: SPRECHEN max. 25 Ergebnispunkte; «Das Einführungsgespräch wird nicht bewertet.»
- DB 6.1: «die in den einzelnen Prüfungsteilen erreichten Ergebnispunkte addiert und auf volle Punkte gerundet.» → округляется итог.
- DB 6.2: 100–90 sehr gut, 89–80 gut, 79–70 befriedigend, 69–60 ausreichend, 59–0 nicht bestanden.
- DB 6.3: «Die Prüfung ist bestanden, wenn insgesamt mindestens 60 Punkte … erzielt und alle Prüfungsteile abgelegt wurden. Hiervon müssen mindestens 45 Punkte in der schriftlichen Prüfung und mindestens 15 Punkte in der mündlichen Prüfung erreicht werden.»
- DB §7: частичная пересдача только в виде исключения (вся письменная или устная часть), «Ein Anspruch auf Teilwiederholung … besteht nicht.»

**Вывод для AnswerSheet:** Lesen и Hören: 20 заданий, factor 1.25, maxPoints 25. Отдельного порога у Lesen или Hören НЕТ (порог 45 на сумму Lesen + Hören + Schreiben). `pass` не ставим. В тексте: ориентир 15 из 25 на часть = 12 верных из 20 (это среднее для 45/75, а не официальный порог части). Компонент округляет баллы части (Math.round), Goethe округляет только итог (DB 6.1) — в тексте оговорено.

## Время (DB 1.4, MS Seite 3)
- DB 1.4: «Die schriftliche Prüfung dauert ohne Pausen insgesamt 90 Minuten: LESEN 30 Minuten, HÖREN ca. 30 Minuten, SCHREIBEN 30 Minuten». «Die Paarprüfung dauert insgesamt 15 Minuten, die Einzelprüfung 10 Minuten. Es gibt keine Vorbereitungszeit.»
- DB 2.2: на перенос ответов в Antwortbogen «circa 3 Minuten innerhalb der Prüfungszeit» (Lesen и Hören).
- DB §2: рекомендуемый порядок LESEN – HÖREN – SCHREIBEN, «Zwischen den Prüfungsteilen ist keine Pause vorgesehen.»
- DB §3: Einführung ca. 1 Minute; «Teil 1 dauert circa 3 Minuten, Teil 2 circa 3 Minuten pro Teilnehmenden und Teil 3 circa 5 Minuten.»
- MS Seite 3 (PDF-стр. 5), Überblick: Lesen 4 Teile × 5 Items (Teil 1–3 Mehrfachauswahl 3-gliedrig, Teil 4 Zuordnen), Hören Teil 1 MC, Teil 2 Zuordnen Bild/Text, Teil 3 MC Bild/Text, Teil 4 (в обзоре «Richtig/Falsch», в самом задании и в Antwortbogen «Ja/Nein»). Schreiben 2 Teile, 30 Minuten. Sprechen 3 Teile, «15 Minuten pro 2 Teilnehmende».
- Hören, сколько раз звучит (MS Seite 16–19): Teil 1 «Sie hören jeden Text zweimal», Teil 2 «Sie hören den Text einmal», Teil 3 «Sie hören jeden Text einmal», Teil 4 «Sie hören den Text zweimal».
- Lesen Teil 4 (MS Seite 12): «Für eine Aufgabe gibt es keine Lösung. Markieren Sie so X.» «Die Anzeige aus dem Beispiel können Sie nicht mehr wählen.» (пример = d)
- Hören Teil 2 (MS Seite 17): «Wählen Sie jeden Buchstaben nur einmal.» (пример Montag = f)

## Schreiben (MS Seite 22, PDF-стр. 24; критерии Seite 37–38)
- Teil 1: SMS подруге, 3 пункта (извиниться за опоздание, почему, новое место и время). «Schreiben Sie 20–30 Wörter.»
- Teil 2: E-Mail начальнику (приглашение на день рождения), 3 пункта (поблагодарить и сказать, что придёшь; сообщить, что приведёшь кого-то; спросить дорогу). «Schreiben Sie 30–40 Wörter.»
- Bewertungskriterien Schreiben (Seite 37): Aufgabenerfüllung (Sprachfunktion + Register) и Sprache (Spektrum + Beherrschung). E по Aufgabenerfüllung: «Textumfang weniger als 50 % (10 Wörter in Teil 1; 15 Wörter in Teil 2) der geforderten Wortanzahl oder Thema verfehlt». «Wird das Kriterium „Aufgabenerfüllung“ mit E (0 Punkten) bewertet, ist die Punktzahl für diese Aufgabe insgesamt 0 Punkte.»
- Bewertungsbogen Schreiben (Seite 38): на каждый Teil Aufgabenerfüllung 5 / 3,5 / 2 / 0,5 / 0 и Sprache 5 / 3,5 / 2 / 0,5 / 0. Итого 20.

## Sprechen (MS Seite 24–27, 41–43)
- Teil 1: 4 карточки «Fragen zur Person» (Geburtstag?, Wohnort?, Beruf?, Hobby?), задаёшь 4 вопроса, партнёр отвечает, потом наоборот. Seite 41: участники смотрят на карточки «ca. 20 Sekunden».
- Teil 2: карточка «von sich erzählen». A: «Was machen Sie mit Ihrem Geld?» (Kleidung, Lebensmittel/Miete, Sparen, Reisen). B: «Was machen Sie oft am Wochenende?» (Sport, jemanden besuchen, mit wem, wo). Seite 41: после рассказа экзаменатор задаёт «ein bis zwei Zusatzfragen».
- Teil 3: «Ihr Freund Patrick hat Geburtstag. Sie möchten ein Geschenk für ihn kaufen. Finden Sie einen Termin.» У каждого свой календарь на субботу. Календари в статье не воспроизводим, образец диалога со своими делами.
- Bewertungsbogen Sprechen (Seite 43): Teil 1 Aufgabenerfüllung 2 + Sprache 2; Teil 2 4 + 4; Teil 3 4 + 4; Aussprache 5 (на всю часть). Итого 25. E по Aufgabenerfüllung → 0 за эту часть (Seite 42).

## Ключ: полная таблица (Lösungen, MS PDF-стр. 34 = «Lösungen zu Lesen und Hören» Seite 32)
Ключ графический (жирные клеточки), прочитан по рендеру страницы 300 dpi. Каждый ответ перепроверен по тексту (Lesen, PDF-стр. 8–15) или транскрипту (Hören, PDF-стр. 35–38) и картинкам (Hören Teil 2–3, PDF-стр. 19–20).

### Lesen
| № | Ответ | Стр. ключа | Проверка |
|---|---|---|---|
| 1 | c | PDF 34 | столиков мало, надо звонить и бронировать |
| 2 | c | PDF 34 | второй ресторан открывать не хочет |
| 3 | c | PDF 34 | после учёбы двухлетняя пауза, ездил по миру |
| 4 | a | PDF 34 | большинство знает по телешоу |
| 5 | a | PDF 34 | весь текст про путь в профессии |
| 6 | c | PDF 34 | цветы = Blumenladen в EG (варианты: 1. Stock, 4. Stock) |
| 7 | b | PDF 34 | Fotoservice в UG |
| 8 | c | PDF 34 | Café на 4. Stock (варианты: 2. Stock, UG) |
| 9 | b | PDF 34 | Schuhwerkstatt в EG |
| 10 | a | PDF 34 | Sportkleidung на 3. Stock |
| 11 | c | PDF 34 | многое устроено иначе, ещё привыкает |
| 12 | a | PDF 34 | студенты показали университет; город сама |
| 13 | c | PDF 34 | по пятницам готовит один из них |
| 14 | b | PDF 34 | хочет как можно больше немецкого |
| 15 | c | PDF 34 | Соня может ночевать у Марио |
| 16 | f | PDF 34 | залы на 150 человек, свадьбы |
| 17 | c | PDF 34 | ресторан за ратушей, меню, тихо |
| 18 | x | PDF 34 | вина домой никто не продаёт/не привозит |
| 19 | b | PDF 34 | доставка еды на любой праздник |
| 20 | a | PDF 34 | кафе с тортами и детской площадкой |

### Hören
| № | Ответ | Стр. ключа | Проверка |
|---|---|---|---|
| 1 | b | PDF 34 | свободно в Parkhaus am Einkaufszentrum |
| 2 | b | PDF 34 | забрать костюм из химчистки |
| 3 | c | PDF 34 | встреча в Hotel Leopold, не в офисе |
| 4 | b | PDF 34 | в воскресенье дождь и на севере, и на юге |
| 5 | a | PDF 34 | назвать имя певца |
| 6 (Di) | b | PDF 34 | театр (танцы отменены); картинка b = театр |
| 7 (Mi) | g | PDF 34 | велопрогулка (бассейн отклонён); g = велосипеды |
| 8 (Do) | h | PDF 34 | готовят у друзей (мороженое отменили); h = кухня |
| 9 (Fr) | d | PDF 34 | концерт у ратуши; d = сцена под открытым небом |
| 10 (Sa) | e | PDF 34 | прогулка на корабле по Эльбе; e = корабль |
| 11 | c | PDF 34 | курица; c = курица (a рыба, b гамбургер) |
| 12 | a | PDF 34 | куртка с буквами; a = куртка с «NY» |
| 13 | b | PDF 34 | не хватает фото; b = фото |
| 14 | b | PDF 34 | отопление; b = батарея (лифт и лампу починили) |
| 15 | b | PDF 34 | сразу в Sportraum; b = спортзал |
| 16 | Nein | PDF 34 | сразу понравилось |
| 17 | Ja | PDF 34 | братья брали с собой и давали советы |
| 18 | Ja | PDF 34 | учитель физкультуры сказал, в какой клуб |
| 19 | Nein | PDF 34 | только надеется сыграть международный матч |
| 20 | Nein | PDF 34 | учиться спорту хочет позже |

Примеры (Lesen 0 = c в Teil 1, b в Teil 2, d в Teil 4; Hören Teil 2 Montag = f; Hören Teil 4 Beispiel) в бланк не включены.

## Не подтверждено / оговорки
- Аудиофайл Modellsatz проверен по длительности (22:35) и подписи на goethe.de из поисковой выдачи; содержимое аудио не прослушано целиком. Тексты онлайн-версии (bfu) совпадают с PDF.
- Что MP3 «Prüfungstraining 2 Hören A2 Erwachsene» относится именно к Übungssatz — не проверено прослушиванием, в статье называем его официальным названием.
- Порога отдельно для Lesen или Hören у A2 нет; «12 из 20» в статье подан как ориентир (45/75 поровну на три части), не как правило.
