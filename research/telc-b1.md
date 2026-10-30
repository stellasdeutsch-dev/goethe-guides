# telc Deutsch B1 (Zertifikat Deutsch) и обзор экзаменов telc: факты

Проверено: 2026-10-30. Автор файла: telc-b1.

## Источники
- [UT1] Übungstest 1 Zertifikat Deutsch / telc Deutsch B1, 14. Auflage 2021, telc gGmbH, 48 с.: https://shop.telc.net/media/catalog/product/file/2/0/20201225_5061-b00-010301_web.pdf
  - То же содержание, 13. Auflage 2020 (в ZIP и прямой PDF): https://shop.telc.net/media/catalog/product/file/telc_deutsch_b1_zd_uebungstest_1.pdf, ZIP: https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1.zip. Сравнил `pdftotext` обоих изданий: отличаются только год, номер издания и строка «Audio-CD / MP3». Задания, ключ и Hörtexte совпадают.
  - Нумерация ниже — страницы PDF (в скобках печатный номер страницы).
- [MP3] Аудио к UT1: https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_b1_zd_uebungstest_4.mp3 (HTTP 200, audio/mpeg, 9 444 364 байт, ffprobe: 24:59). Тот же файл лежит в ZIP.
- [TELC-B1] https://www.telc.net/sprachpruefungen/deutsch/zertifikat-deutsch-telc-deutsch-b1/
- [TELC-DE] https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/
- страницы экзаменов telc: …/zertifikatspruefung/deutsch/<slug>/ (см. ниже)
- [BAMF-EINB] https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html (Datum 26.10.2026)
- [BAMF-DTZ] https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html
- [StAG10] https://www.gesetze-im-internet.de/stag/__10.html
- [AufenthG2] https://www.gesetze-im-internet.de/aufenthg_2004/__2.html ; [AufenthG9] https://www.gesetze-im-internet.de/aufenthg_2004/__9.html
- [HN] Stadt Heilbronn, Staatsangehörigkeitsbehörde, Infoblatt Nachweis der Sprachkenntnisse: https://www.heilbronn.de/fileadmin/daten/stadtheilbronn/formulare/rathaus/auslaenderangelegenheiten/Infoblatt_Nachweis_der_Sprachkenntnisse.pdf
- Из research/goethe-telc-oesd-testdaf.md и research/start-deutsch-1-a1-viza.md (уже проверено): BAMF-EG (A1 для супругов), посольства KZ/UZ, RO-DT §8(2)(e), DAAD.
- Пробники и цены: research/probniki-telc.md. Все внешние ссылки в моих статьях проверены 2026-10-30 (GET, 200/206). Памятка BAMF по супругам отвечает 400 на HEAD, но 200 на GET.

## Аудио: «uebungstest_4.mp3» это Übungstest 1
- Без воспроизведения. Вырезал первые 4 минуты и последние 3 минуты (ffmpeg → WAV), прогнал через локальный whisper (base, de). Начало записи: «telc Deutsch B1. Zertifikat Deutsch. Übungstest 1. Hörverstehen, Teil 1…», дальше тексты 41–43 совпадают с Hörtexte [UT1 с. 44]. Конец: тексты 59 и 60 (ICE, Sommerschlussverkauf) совпадают с [UT1 с. 45]. Вывод: файл с «4» в имени это аудио к Übungstest 1.
- В записи перед текстами Teil 3 звучат вводные фразы ситуации («Sie sind im Kaufhaus und hören folgende Durchsage»), их нет в PDF.

## Формат [UT1 с. 7 (5)]
| Subtest | Teil | Ziel | Aufgaben | Zeit |
|---|---|---|---|---|
| 1 Leseverstehen | 1 | Globalverstehen | 5 Zuordnungsaufgaben (1–5) | 90 Min. вместе с Sprachbausteine |
| | 2 | Detailverstehen | 5 Multiple-Choice (6–10) | |
| | 3 | Selektives Verstehen | 10 Zuordnungsaufgaben (11–20) | |
| 2 Sprachbausteine | 1 | Grammatik | 10 Multiple-Choice (21–30) | |
| | 2 | Lexik | 10 Zuordnungsaufgaben (31–40) | |
| 3 Hörverstehen | 1 | Globalverstehen | 5 Richtig-Falsch (41–45) | ca. 30 Min. |
| | 2 | Detailverstehen | 10 Richtig-Falsch (46–55) | |
| | 3 | Selektives Verstehen | 5 Richtig-Falsch (56–60) | |
| 4 Schriftlicher Ausdruck | — | «Schreiben einer informellen oder halbformellen E-Mail» | «Schreibaufgabe mit 4 Leitpunkten» | 30 Min. |
| Vorbereitungszeit | | | | 20 Min. |
| 5 Mündlicher Ausdruck | 1 Einander kennenlernen, 2 Über ein Thema sprechen, 3 Gemeinsam etwas planen | | «Prüfungsgespräch mit zwei Teilnehmenden» | ca. 15 Min. |

- [TELC-B1]: письменная «keine Pause»; устная «i.d.R. 2 Teilnehmende 20 Minuten Vorbereitungszeit»; «Diese Prüfung steht als digitale, hybride und papierbasierte Prüfung zur Verfügung.»
- Детали заданий [UT1 с. 8–23]:
  - LV Teil 1: «Lesen Sie die Überschriften a–j und die Texte 1–5 … Sie können jede Überschrift nur einmal benutzen.» 10 заголовков на 5 текстов.
  - LV Teil 2: один длинный текст, a/b/c, задания 6–10.
  - LV Teil 3: ситуации 11–20, объявления a–l (12 штук), «Wenn Sie zu einer Situation keine Anzeige finden, markieren Sie ein x.»
  - SB Teil 1: письмо с пропусками 21–30, a/b/c. SB Teil 2: письмо, пропуски 31–40, слова a–o (15 слов на 10 пропусков), «Jedes Wort passt nur einmal.»
  - HV Teil 1: 5 коротких текстов, «Sie hören diese Texte nur einmal», 30 секунд на чтение заданий. Ответ PLUS (+) = richtig, MINUS (–) = falsch.
  - HV Teil 2: одно интервью, «Sie hören das Gespräch zweimal», одна минута на чтение 46–55.
  - HV Teil 3: 5 коротких текстов, «Sie hören jeden Text zweimal».
  - Schreiben: ответ на e-mail, «Schreiben Sie etwas zu allen vier Punkten». «Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, einen passenden Betreff, eine passende Anrede, Einleitung und einen passenden Schluss.» **Число слов в задании не указано.**
- Порядок [UT1 с. 31 (29)]: «Die Schriftliche Prüfung dauert 150 Minuten». Сначала 90 минут Leseverstehen + Sprachbausteine, потом лист 2 Antwortbogen собирают. Потом Hörverstehen, «Das Abspielen der Tonaufnahmen darf … nicht unterbrochen werden». Потом 30 минут Schriftlicher Ausdruck. «Hilfsmittel wie Wörterbücher, Handys oder sonstige elektronische Geräte nicht erlaubt». «Nur die Lösungen auf dem Antwortbogen S30 … werden erfasst» [с. 30 (28)]. Карандаш: «sollte ein weicher Bleistift benutzt werden» [с. 30].
- Устная [UT1 с. 32 (30)]: «ca. 15 Minuten», «grundsätzlich als Paarprüfung»; одиночный кандидат: «übernimmt eine bzw. einer der beiden Prüfenden die Rolle der bzw. des zweiten Prüfungsteilnehmenden». Два лицензированных экзаменатора. Подготовка 20 минут, заметки только на штемпелёванных листах, «Auf den Aufgabenblättern dürfen keine Notizen gemacht werden», «Während der Prüfung sollten diese nicht vom Blatt abgelesen werden». Говорить во время подготовки нельзя.
  - Teil 1 Einander kennenlernen (ca. 3 Minuten): рассказать о себе и задавать вопросы, Stichpunkte для ориентира, экзаменатор может добавить тему.
  - Teil 2 Über ein Thema sprechen (ca. 6 Minuten): разные листы с «kontroversen Meinungen», сначала пересказ друг другу, потом обмен мнениями и опытом.
  - Teil 3 Gemeinsam etwas planen (ca. 6 Minuten): организовать мероприятие, предлагать и реагировать, «was zu tun ist und wer welche Aufgabe übernimmt».
  - [с. 33 (31)]: «Nachfragen und gegenseitige Hilfestellungen werden positiv bewertet.» Интерлокутор вмешивается, если один доминирует или молчит.

## Баллы [UT1 с. 41 (39)] «Punkte und Gewichtung»
| Subtest | Задания | Макс. | Доля |
|---|---|---|---|
| Leseverstehen Teil 1 / 2 / 3 | 1–5 / 6–10 / 11–20 | 25 / 25 / 25 = 75 | 25 % |
| Sprachbausteine Teil 1 / 2 | 21–30 / 31–40 | 15 / 15 = 30 | 10 % |
| Hörverstehen Teil 1 / 2 / 3 | 41–45 / 46–55 / 56–60 | 25 / 25 / 25 = 75 | 25 % |
| Schriftlicher Ausdruck | E-Mail | 45 | 15 % |
| Teilergebnis I (письменная) | | 225 | 75 % |
| Mündlicher Ausdruck Teil 1 / 2 / 3 | | 15 / 30 / 30 = 75 | 25 % |
| Gesamt | | 300 | 100 % |
- Отсюда за один верный ответ (мой расчёт из таблицы): LV Teil 1 и 2 = 5 баллов, LV Teil 3 = 2,5; SB = 1,5; HV Teil 1 и 3 = 5, HV Teil 2 = 2,5.
- Порог [с. 42 (40)]: «sowohl in der Schriftlichen als auch in der Mündlichen Prüfung jeweils 60 % … Dies entspricht 135 Punkten in der Schriftlichen und 45 Punkten in der Mündlichen Prüfung.» Отдельного порога по субтестам в UT1 нет.
- Оценки: 270–300 sehr gut; 240–269,5 gut; 210–239,5 befriedigend; 180–209,5 ausreichend; 0–179,5 nicht bestanden.
- Пересдача [с. 42]: не сдал или не сдавал одну часть (письменную или устную) → можно пересдать её «innerhalb des Kalenderjahres, in dem die Prüfung stattgefunden hat, oder im darauffolgenden Kalenderjahr». «Wird ein Prüfungsteil wiederholt, gilt ausschließlich und unwiderruflich das Ergebnis der Wiederholungsprüfung.» Всю программу можно повторять «beliebig oft».
- Сдал → Zertifikat; не сдал → Ergebnisbogen [с. 42]. Оценка электронная, Antwortbogen сканируют.

### Schriftlicher Ausdruck [с. 38–40 (36–38)]
- Три критерия: I Aufgabenbewältigung, II Kommunikative Gestaltung, III Formale Richtigkeit. A/B/C/D = 5/3/1/0. Сумма × 3 = максимум 45.
- I: A — все 4 Leitpunkte «inhaltlich angemessen», B — три, C — два, D — один или ни одного.
- «Hat der Text mit dem Schreibanlass keine oder kaum eine Verbindung, muss bei allen Kriterien D vergeben werden» (Thema verfehlt). Situierung verfehlt → только критерий I = D.
- Leitpunkt засчитан, даже если это «nur einen, ggf. nur kurzen, Satz», или два пункта в одном предложении.
- II: A не ставят, если нет признаков e-mail, «das falsche Register gewählt wurde oder der Gebrauch schwankt», «die Leitpunkte unverbunden nebeneinander stehen», «die Sätze überwiegend mit Ich oder Wir beginnen». Признаки письма (адрес, дата) «nicht gefordert».
- III: «Primat der Verständlichkeit»; «Endungsfehler und Genusfehler [fallen] weniger ins Gewicht als Kongruenzfehler».
- Два оценщика; «Weichen die Bewertungen voneinander ab, überstimmt die zweite Bewertung die Erstbewertung». «Die telc Bewertung ist die Endbewertung.»

### Mündlicher Ausdruck [с. 36–37 (34–35)]
- 4 критерия на каждую часть: Ausdrucksfähigkeit, Aufgabenbewältigung, Formale Richtigkeit, Aussprache und Intonation.
- Teil 1: 4/3/1/0 по первым трём, 3/2/1/0 по произношению → максимум 15. Teil 2 и 3: 8/6/2/0 и 6/4/2/0 → по 30.
- Aufgabenbewältigung: «Gesprächsbeteiligung», стратегии, «Flüssigkeit der Rede». Ausdrucksfähigkeit: лексика, «Verwirklichung der Sprechabsicht».
- Экзаменаторы оценивают независимо, потом договариваются о «gemeinsame Bewertung».

## Ключ UT1 [PDF с. 43 (печ. 41) «Lösungsschlüssel»], перепроверено по текстам и Hörtexte (с. 44–45)
| № | Ответ | № | Ответ | № | Ответ | № | Ответ |
|---|---|---|---|---|---|---|---|
| 1 | i | 16 | i | 31 | h | 46 | + |
| 2 | d | 17 | k | 32 | i | 47 | + |
| 3 | b | 18 | l | 33 | a | 48 | – |
| 4 | f | 19 | x | 34 | b | 49 | – |
| 5 | h | 20 | g | 35 | o | 50 | – |
| 6 | c | 21 | a | 36 | l | 51 | + |
| 7 | c | 22 | c | 37 | m | 52 | + |
| 8 | b | 23 | a | 38 | g | 53 | – |
| 9 | a | 24 | a | 39 | e | 54 | – |
| 10 | a | 25 | a | 40 | f | 55 | + |
| 11 | b | 26 | b | 41 | + | 56 | + |
| 12 | a | 27 | a | 42 | – | 57 | – |
| 13 | d | 28 | b | 43 | – | 58 | + |
| 14 | x | 29 | b | 44 | + | 59 | – |
| 15 | e | 30 | a | 45 | – | 60 | + |
- Объявления LV Teil 3 (с. 13, смотрел рендер страницы): a тайский ресторан с едой навынос; b итальянский с садом; c страховка; d Seatop (перелёт + отель, лето в США); e Council Travel (студенты); f Kneipe; g Stammtisch (иностранная молодёжь); h Nachprüfung (латынь, англ., франц., нем.); i Nachhilfe Mathe; j City-Reisebüro (кемперы США); k курсы при Sprach-Schwierigkeiten; l Sprachbörse (DaF).

## Для какой цели какой экзамен (обзор)
- Уровни в законе [AufenthG2 §2 (9)–(12)]: «Einfache» = A1, «Hinreichende» = A2, «Ausreichende» = B1, «Gute» = B2, «beherrscht» = C1.
- Виза супруга: A1 до въезда; BAMF-EG перечисляет «„Start Deutsch 1“ des Goethe-Instituts oder der telc GmbH», ÖSD, TestDaF; решает посольство. **Казахстан:** «nur das Goethe Institut e.V. sowie die angeschlossenen Sprachlernzentren». **Узбекистан:** только Goethe Start Deutsch 1 и TestDaF, «Sprachzeugnisse anderer Aussteller sind nicht anerkennungsfähig!» (research/start-deutsch-1-a1-viza.md).
- Niederlassungserlaubnis [AufenthG9]: «er über ausreichende Kenntnisse der deutschen Sprache verfügt» (= B1); «Die Voraussetzungen des Satzes 1 Nr. 7 und 8 sind nachgewiesen, wenn ein Integrationskurs erfolgreich abgeschlossen wurde.» [BAMF-DTZ]: «Zertifikat Integrationskurs … bescheinigt ausreichende Deutschkenntnisse».
- Einbürgerung [BAMF-EINB]: «seit fünf Jahren gewöhnlicher und regelmäßiger Aufenthalt»; «ausreichende Deutschkenntnisse (Niveau B1 …)»; Einbürgerungstest 33 вопроса, 60 минут, «mindestens 17» верных, 25 Euro. [StAG10 (4)]: «wenn der Ausländer die Anforderungen einer Sprachprüfung der Stufe B 1 … erfüllt». [HN]: «das Zertifikat Deutsch (B1), Zertifikat Deutsch-Test für Zuwanderer (DTZ) mit dem Gesamtergebnis B1 oder ein gleichwertiges oder höherwertiges Sprachdiplom».
- DTZ [BAMF-DTZ]: письменная 100 минут (Hören, Lesen, короткое письмо), устная около 15 минут; сертификат «B1 oder A2»; B1/A2 = Sprechen + минимум одна из частей «Hören und Lesen» / «Schreiben» на этом уровне. «Zertifikat Integrationskurs» = DTZ B1 + Test «Leben in Deutschland».
- telc Deutsch A2·B1 [страница telc-deutsch-a2b1]: целевая группа: «Personen, die ein anerkanntes Zertifikat für ihr Visum benötigen oder ihre Sprachkenntnisse für Aufenthalt, Einbürgerung sowie Berufsanerkennung in Deutschland nachweisen müssen (Selbstzahler)»; «rechtsicherer Nachweis von Zielniveau B1»; «Sie kann NICHT als Teilprüfung abgelegt werden»; устная без подготовки.
- Учёба: telc Deutsch C1 Hochschule «Die Prüfung für den Hochschulzugang» [страница]. telc (EN, https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-c1-university/your-university-entrance/): «According to § 8 of the RO-DT … "holders of a certificate of successful completion of the telc Deutsch C1 Hochschule examination" are exempt from providing supplementary proof of linguistic ability to study», «we recommend that you obtain information from the selected higher education institutions». DAAD (https://www.daad.de/de/in-deutschland-studieren/leben-in-deutschland/deutsche-sprache/): «telc Deutsch C1 Hochschule … in der Regel von den Hochschulen anerkannt». Ссылка на PDF RO-DT из research/goethe-telc-oesd-testdaf.md 2026-10-30 отдаёт 404, поэтому в статье источник telc + DAAD.
- Работа: DTB A2/B1/B2/C1 «Abschlussprüfungen für die Spezialberufssprachkurse A2 und B1 sowie für die Basisberufssprachkurse B2 und C1», по § 45a AufenthG, разработаны «im Auftrag des Bundesministeriums für Arbeit und Soziales unter fachlicher Leitung des … BAMF»; принимают только допущенные BAMF DTB-Prüfungsstellen [страница deutsch-test-fuer-den-beruf]. Платные экзамены telc «Beruf»: A2+ Beruf, B1+ Beruf, B1·B2 Beruf, B2+ Beruf, B2·C1 Beruf, C1 Beruf.
- Pflege: telc Deutsch B1·B2 Pflege «Die Deutsch-Prüfung für Pflegekräfte», «Inhalt und Art der Texte spiegeln den beruflichen Alltag von Pflegekräften wider», письмо «Aufnahme- oder Biografieberichts», нельзя сдавать частями.
- Medizin: B2 Medizin Zugangsprüfung «für Ärzte und Ärztinnen auf dem Niveau B2»; B2·C1 Medizin; B2·C1 Medizin Fachsprachprüfung «auf dem höheren B2-Niveau und fachsprachliche … Kompetenzen auf C1-Niveau». Все три «NICHT als Teilprüfung».
- Dual-Level [TELC-DE]: «Teilnehmende erhalten ein Zertifikat entweder über das niedrigere oder das höhere GER-Niveau.»
- Школьники: A1 Junior, A2 Schule, B1 Schule. Только устная: telc Deutsch A2 Sprechen.

## Не нашёл / не утверждаем
- Официальной таблицы telc «какой экзамен для какой визы/ВНЖ» нет. Какой сертификат примут, решает ведомство: в статье везде «уточняй».
- Требуемый уровень для признания диплома медсестры по землям: официальный источник не проверял → не пишем цифру.
- Цены экзамена telc B1 в центрах: не проверяли → не пишем.
- Название «Kontaktaufnahme» для Teil 1: в UT1 часть называется «Einander kennenlernen». Используем официальное.
- Стоит ли в записи повтор текста 43 (whisper дважды выдал «Nummer 43»): не уверен, это может быть артефакт распознавания. Не пишем.
- AnswerSheet округляет баллы до целого (Math.round), у telc бывают половинки (2,5 и 1,5 за ответ). Отмечено в статье.
