# Goethe B1 Übungssatz Erwachsene: ключи, проверка, аудио

Проверено: 2026-10-01. Статья: `src/content/guides/probniki/b1-uebungssatz-razbor.mdx`.

## Источники
- [ÜS] PDF: https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Erwachsene.pdf
  - Скачан `curl -sL -A "Mozilla/5.0"`, 49 страниц, 2 867 085 байт. pdfinfo: Title «Übungssatz GI ZB1_16_10_17.indd», CreationDate 13.11.2017, ModDate 04.09.2025.
  - Подпись на последней странице (p.49): «ÜS_01 Oktober 2017».
  - Номера страниц ниже = номер страницы PDF = «Seite N» в правом нижнем углу.
- [AUDIO] MP4 (только звук, AAC): https://goethemp4s.akamaized.net/resources/files/mp468/b1_uebungssatz_erwachsene.mp4
  - HEAD: HTTP 200, Content-Type video/mp4, Content-Length 38 107 022 (≈38 МБ), Last-Modified 24.08.2018.
  - ffprobe: duration=2353.968 s (39:14), один поток codec_name=aac, codec_type=audio.
  - Ссылку на этот файл как «B1 Übungssatz Modul Hören Audio (mp4)» даёт партнёр Goethe в Швейцарии: https://goethe-pruefungen.swiss-exams.ch/de/exams-and-certifications/goethe/preparation/b1-adults . Поисковый сниппет страниц Übungsmaterialien goethe.de: «Modul Hören … 39:13 … MP4 (38 MB)».
  - Страница Übungsmaterialien Goethe-Institut Deutschland (https://www.goethe.de/ins/de/de/prf/prf/gzb1/ueb.html) скриптам отдаёт 403, глазами не проверена.
  - Тот же CDN отдаёт аудио Modellsatz: https://goethemp4s.akamaized.net/resources/files/mp468/b1_modellsatz_erwachsene-v11.mp4 (200, 36 252 539 байт).
- [DB] Durchführungsbestimmungen B1, Stand 1.9.2025: https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B1.pdf (×3,33, порог 60, см. research/goethe-b1-facts.md).
- [PO] Prüfungsordnung §1.4: «In diesen Modell- und Übungssätzen … sind Aufbau, Inhalt und Bewertung verbindlich beschrieben.»

## Второй Übungssatz
- «Übungssatz 02» для B1 Erwachsene на goethe.de НЕ найден (2026-10-01). Пробовал в /pro/relaunch/prf/materialien/B1/: B1_Uebungssatz_02_Erwachsene.pdf, B1_Uebungssatz_Erwachsene_02.pdf, b1_uebungssatz_02.pdf, b1_uebungssatz02.pdf, B1_Uebungssatz02_Erwachsene.pdf, b1_uebungssatz_02_erwachsene.pdf, B1_Uebungssatz_2_Erwachsene.pdf → все 404. На CDN b1_uebungssatz_erwachsene_02.mp4 и b1_uebungssatz_02_erwachsene.mp4 → 404. Поиск находит «Übungssatz 02» только для A1 (Fit 1, SD1).
- Есть официальный Übungssatz для подростков: https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Jugendliche.pdf (200, application/pdf, 49 стр., подпись «ÜS j_02 Januar 2018», задания на du: «Lies den Text…»). Аудио: https://goethemp4s.akamaized.net/resources/files/mp468/b1_uebungssatz_jugendliche.mp4 (200, 25 629 382 байт, ffprobe 2381.6 s). В статье упомянут как дополнительный материал, не разбирается.

## Структура PDF (оглавление p.3)
- Kandidatenblätter: Lesen p.7–15, Hören p.17–21, Schreiben p.23–24, Sprechen p.25–28.
- Prüferblätter с p.29: Lesen Antwortbogen p.30, **Lösungen Lesen p.31**; Hören Antwortbogen p.32, **Lösungen Hören p.33**; Umrechnungstabelle p.34; Transkriptionen p.35–38; Schreiben Antwortbogen p.39–42, Bewertungskriterien p.43, Bewertungsbogen p.44, Leistungsbeispiele p.45; Sprechen Hinweise p.46, Bewertungskriterien p.47, Bewertungsbogen p.48.
- Ключи на p.31 и p.33 даны графически (жирная рамка у верного поля). Страницы отрендерены pdftoppm (110 и 200 dpi), прочитаны глазами по частям.

## Факты формата из ÜS
- Lesen 65 Minuten, 5 частей (p.7). «Sie können mit jeder Aufgabe beginnen.» «Vergessen Sie bitte nicht, Ihre Lösungen innerhalb der Prüfungszeit auf den Antwortbogen zu schreiben.» Словари и телефоны нельзя: «Hilfsmittel wie z. B. Wörterbücher oder Mobiltelefone sind nicht erlaubt.» (p.7, то же на p.17, 23, 25) Время по частям: Teil 1 10 мин (p.8), Teil 2 20 (p.10), Teil 3 10 (p.12), Teil 4 15 (p.14), Teil 5 10 (p.15).
- Lesen Teil 3: «Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.» Beispiel 0 → j (p.12).
- Hören 40 Minuten (p.17). «Vergessen Sie bitte nicht, Ihre Lösungen auf den Antwortbogen zu übertragen. Dazu haben Sie nach dem Hörverstehen fünf Minuten Zeit.» (p.17)
- Hören Teil 1: «Sie hören jeden Text zweimal.» (p.18). Teil 2: «Sie hören den Text einmal.» 60 Sekunden на чтение (p.19). Teil 3: «Sie hören das Gespräch einmal.» 60 Sekunden (p.20). Teil 4: «Sie hören die Diskussion zweimal.» 60 Sekunden (p.21). Teil 4: a = Moderator, b = Wolfgang Meyer, c = Angelika Steffens (p.21).
- Umrechnungstabelle (p.34): 30→100, 29→97, 28→93, 27→90, 26→87, 25→83, 24→80, 23→77, 22→73, 21→70, 20→67, 19→63, **18→60**, 17→57, 16→53, 15→50, 14→47, 13→43, 12→40 … 1→3, 0→0. Совпадает с Math.round(n × 3,33).
- Schreiben 60 Minuten, «Sie können mit jeder Aufgabe beginnen.» (p.23).
  - Aufgabe 1 (20 мин, circa 80 Wörter): учил немецкий онлайн, пишешь другу/подруге: как учил, плюсы обучения с компьютером, предложить встречу (p.24).
  - Aufgabe 2 (25 мин, circa 80 Wörter): ТВ-дискуссия «Feste Arbeitszeiten», в гостевой книге мнение Jessica (фиксированный график удобен, но с двумя маленькими детьми хотела бы гибкости). Написать своё мнение (p.24).
  - Aufgabe 3 (15 мин, circa 40 Wörter): записался на курс «Erfolgreich präsentieren», на первое занятие прийти не можешь; письмо руководителю курса Herrn Weber, вежливо извиниться и объяснить причину; «Vergessen Sie nicht die Anrede und den Gruß am Schluss.» (p.24)
  - Баллы: Teil 1 и 2 по 4 критерия × 10/7,5/5/2,5/0; Teil 3 Erfüllung/Kohärenz 4/3/2/1/0, Wortschatz/Strukturen 6/4,5/3/1,5/0 (p.44).
  - Правило нуля (Modellsatz p.42, критерии Schreiben): Erfüllung E = «Textumfang weniger als 50 % der geforderten Wortanzahl oder Thema verfehlt»; для Aufgabe 2 и 3 в колонке E «Wie Aufgabe 1»; «Wird das Kriterium „Erfüllung“ mit E (0 Punkten) bewertet, ist die Punktzahl für diese Aufgabe insgesamt 0 Punkte.» → в статье: меньше 40 слов в Teil 1/2 и меньше 20 в Teil 3 = 0 за часть.
  - Leistungsbeispiele (p.45): «Bei diesen Texten handelt es sich um authentische Beispiele von Deutschlernenden auf dem Niveau. Fehler wurden nicht korrigiert.» Баллы к ним не указаны.
- Sprechen (p.25): «15 Min. für zwei Teilnehmende»; Teil 1 «circa 3 Minuten», Teil 2 «circa 3 Minuten», Teil 3 «circa 2 Minuten»; «Ihre Vorbereitungszeit beträgt 15 Minuten. Sie bereiten sich allein vor.»; заметки можно, «In der Prüfung sollen Sie frei sprechen.»
  - Teil 1 (p.26): выиграли вместе в конкурсе недельный языковой курс на двоих в Кёльне, спланировать поездку: Wann? Wie hinkommen? (Flug, Bahn, …) Wo wohnen? (Hotel, bei Familien, …) Was mitnehmen?
  - Teil 2 (p.27–28): Thema 1 «Hochzeit – großes Fest oder private Feier?», Thema 2 «Ohne Auto leben» («Ich brauch kein eigenes Auto!»). 5 слайдов: тема и структура → своя ситуация/опыт → ситуация на родине с примерами → плюсы, минусы, мнение, примеры → завершение и благодарность.
  - Teil 3 (p.28): отзыв о презентации партнёра + вопрос; отвечать на отзыв и вопросы партнёра и экзаменатора.
  - Hinweise (p.46): экзаменатор перед Teil 2 напоминает про вступление и концовку и просит не читать всё с заметок; второй экзаменатор тоже задаёт вопрос.
  - Баллы Sprechen 28 + 40 + 16 + Aussprache 16 (p.48, см. research/kriterii-sprechen-goethe.md).

## Ключ Lesen (p.31), сверено с текстами p.8–15

| № | Teil | Ответ | Проверка по тексту |
|---|---|---|---|
| 1 | 1 | Falsch | Маркус живёт в Studenten-WG, друзья «an der Uni» → студент, не Lehre |
| 2 | 1 | Falsch | Бросила курить Каролина («vor zwei Monaten endlich geschafft»), не Маркус |
| 3 | 1 | Richtig | Сидеть «höchst ungesund, eben vergleichbar mit Rauchen» |
| 4 | 1 | Falsch | Раз в неделю катается на велосипеде с племянниками, «Das hält mich fit» |
| 5 | 1 | Richtig | «muss man es ihnen leichter machen», советы «Geh doch joggen» не работают |
| 6 | 1 | Falsch | Искала лифт, ехала в лифте; лестница в Konjunktiv II «wäre … gewesen» |
| 7 | 2 | b | Город с этой осени сводит студентов и хозяев: новый сервис |
| 8 | 2 | a | Хозяева одни в большой квартире, «über Gesellschaft freuen», помощь по дому |
| 9 | 2 | b | «dann helfe ich» при спорах; другие города уже предлагают (не «geplant») |
| 10 | 2 | c | Исследование: когда люди довольнее всего (с возрастом) |
| 11 | 2 | b | 30–40-летним важны «die Karriere und die Gründung einer Familie» |
| 12 | 2 | b | «wieder Zeit für ihre Interessen»; фитнес/молодость не главное |
| 13 | 3 | a | Heckener Racing: Verkauf und Werkstatt, «technisch interessierten Jugendlichen» |
| 14 | 3 | i | Stadtbibliothek: ca. 4 Std./Tag, freie Zeiteinteilung (утром курс) |
| 15 | 3 | c | Xpress Kurierdienst: Fahrradkuriere, «morgens ab 5 Uhr» |
| 16 | 3 | 0 | Kinderkrippe (e) только ausgebildete Erzieher, 12 месяцев |
| 17 | 3 | b | EFH Fahrradfachmarkt: Lager/Transport, «täglich 14–18 Uhr» |
| 18 | 3 | f | Buchhandlung Salzburg: «ganztags arbeiten», belesen |
| 19 | 3 | d | Hotel Bergblick: Aushilfe Küche, Sommersaison (h: Jahresstelle + Berufserfahrung) |
| 20 | 4 | Nein | Fabian: на автобанах лимит «verkehrspolitische Fehlentscheidung» |
| 21 | 4 | Nein | Christian: без лимита экономит час |
| 22 | 4 | Ja | Sophie: свобода «ein ziemlich schwaches Argument», 200 км/ч опасно для всех |
| 23 | 4 | Ja | Patrick: в Швейцарии 120, в Германии больше пробок, обгоны стрессуют |
| 24 | 4 | Ja | Stefan: на 120 спокойно, без потери времени, «keine Freiheit genommen» |
| 25 | 4 | Nein | Carola: «ideologischer Unsinn» |
| 26 | 4 | Nein | Severin: кто хочет, всё равно гонит; немцы из-за этого хорошо водят |
| 27 | 5 | b | «immer ein Handtuch mit sich zu führen»; 7 € = выдача на время, в сауне обязательно |
| 28 | 5 | c | Ersatzausweis 5 € при потере; Mo–Sa 6–24, So 9–22 |
| 29 | 5 | b | В залах только обувь, не ношенная на улице; в душе Badeschuhe |
| 30 | 5 | a | «Mitgebrachte Speisen und Getränke» в лаунже/у стойки; Handy aus, Rauchverbot auch Terrassen |

Beispiel 0 (Teil 1: Richtig, Teil 2 Beispiel, Teil 3: j, Teil 4 Mariella: Nein по смыслу) в бланк не включён.

## Ключ Hören (p.33), сверено с транскриптами p.35–38

| № | Teil | Ответ | Проверка по транскрипту |
|---|---|---|---|
| 1 | 1 | Falsch | Техник посмотрел, ремонт > 150 €, советуют купить новый |
| 2 | 1 | b | «Sagen Sie bitte bald telefonisch Bescheid» |
| 3 | 1 | Falsch | Дождь только вечером, предлагают выехать раньше |
| 4 | 1 | c | По пути Gaststätte, еду не брать (a: напитки Ева берёт себе; b: встреча у Sportplatz) |
| 5 | 1 | Richtig | Радио оплачивает счёт, «Der Zufall entscheidet» |
| 6 | 1 | c | Номер счёта звучит в программе; сумма «egal wie hoch»; заявка через сайт |
| 7 | 1 | Richtig | Встречу во вторник отменяют, мастер болен, позвонит позже |
| 8 | 1 | a | Переплата, «Wir überweisen Ihnen den Betrag»; повышение аренды только в следующем году |
| 9 | 1 | Falsch | Объявление про Citypass (билет + скидочная карта), не реклама достопримечательностей |
| 10 | 1 | a | Ticket для всего ÖPNV «in München und Umgebung»; на аттракционы «weniger bezahlen» |
| 11 | 2 | c | Gesundheitsfrühstück готовят сами по группам; обед/ужин готовит кухня |
| 12 | 2 | b | Frühsport 6:30, «keine Pflicht»; завтрак 7:30; газон/подвал бассейна |
| 13 | 2 | b | Radtour в среду, запись на ужине во вторник; теннис в тот же день до обеда |
| 14 | 2 | c | По вечерам можно плавать в Hallenbad до 22 ч; магазин приходит сам |
| 15 | 2 | a | «traumhaftes Buffet»; Tanzsportgruppe выступает; сертификат от 10 тренировок |
| 16 | 3 | Falsch | Работала подруга Фабиана, он с ней в кино |
| 17 | 3 | Richtig | «ganz schön müde und erschöpft» |
| 18 | 3 | Falsch | Жили в домике друзей сестры, пансион рядом |
| 19 | 3 | Richtig | Забыла ботинки, купила в спортивном магазине на месте |
| 20 | 3 | Falsch | Прогноз плохой, но дождевики не понадобились |
| 21 | 3 | Richtig | «den falschen Weg genommen», дорогу показали другие туристы |
| 22 | 3 | Richtig | Кузина «hat schon alles geplant» |
| 23 | 4 | c | Steffens: Fremdsprachen «im beruflichen Leben sehr gefragt» |
| 24 | 4 | a | Moderator: «Wenn man seine eigene Sprache nicht kann, …» |
| 25 | 4 | b | Meyer: «Schwierig wird es erst bei Erwachsenen» |
| 26 | 4 | c | Steffens: у сына много домашки, второй язык = ещё подготовка |
| 27 | 4 | b | Meyer: идеально для детей родителей из разных стран |
| 28 | 4 | b | Meyer: с англичанином только по-английски, смешивают, т.к. родители понимают |
| 29 | 4 | c | Steffens: в отпуске дети «auch ohne Worte» понимают друг друга |
| 30 | 4 | b | Meyer: «Lieder auf Englisch lernen und kurze Filme sehen» |

Расхождений между ключом и текстами нет. Самое неочевидное: Hören 24 (утверждение формулирует модератор, а не Steffens/Meyer).

## Образцы в статье
- Объём образцов (подсчёт по пробелам, как в компоненте Anatomy): Aufgabe 1 = 81 слово, Aufgabe 2 = 84, Aufgabe 3 = 45, презентация Sprechen Teil 2 = 221.
- Schreiben 1–3, Sprechen Teil 1–3: наши тексты на официальные темы ÜS. Официальные Leistungsbeispiele (p.45) не цитируются.
- Детали в образце презентации (кузен, «почти 300 гостей», две свадьбы в Казахстане) это речь условного кандидата, не факт сайта и не история Шынгыса.

## Не подтверждено
- Страница goethe.de, где лежит ссылка на MP4 (403 для скриптов). Сам файл на CDN Goethe проверен.
- Есть ли онлайн-версия именно Übungssatz (у Modellsatz есть bfu.goethe.de/b1_mod/…). Пробовал bfu.goethe.de/b1_ueb/, /b1_ueb/hoeren.php, /b1_uebungssatz/hoeren.php → 404.
