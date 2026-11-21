# Официальные пробники TestDaF (цифровой и бумажный)

Собрано только с официальных сайтов TestDaF-Institut / g.a.s.t.: testdaf.de и gast.de. Платные материалы издательств, на которые ссылается testdaf.de, вынесены в отдельный раздел и помечены. «Слитые» тесты не включены.

**Как проверяли (2026-11-21):**
- каждую ссылку проверяли через `curl -sL -A "Mozilla/5.0 …"`: у всех итоговый статус **200**; PDF `application/pdf`, MP3 `audio/mpeg`, MP4 `video/mp4`;
- PDF скачаны и прочитаны через `pdftotext -layout`, так проверяли, где ключ (Lösungen), транскрипты и образцы ответов;
- аудио и видео **не воспроизводились**: размер и длительность через `ffprobe` (у MP3 бумажных Modelltests длительность взята ffprobe по URL, файл не скачивался);
- копии в `/private/tmp/claude-501/-Users-shyngysnarseyit-ff/23813bd2-7a0e-4748-bf21-51aace1137b3/scratchpad/testdaf-research/` (pdf/demo, pdf/mt, pdf/docs, media/demo).

Базовые префиксы:
- Demo цифрового: `https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/…`
- Tutorials: `https://www.testdaf.de/fileadmin/testdaf/downloads/Tutorials/…`
- бумажные Modelltests: `https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/…`

Факты о формате и оценке: `research/testdaf.md`.

---

## 1. Цифровой TestDaF: Beispielaufgaben (Demo-Version)
Страница: https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf/vorbereitung-auf-den-digitalen-testdaf/beispielaufgaben-zum-digitalen-testdaf/
Цитата со страницы: «Die Beispielaufgaben als Gesamtdatei aller vier Prüfungsteile enthalten Lösungsschlüssel, Transkripte und Quellenangaben. Die Audio- und Videodateien … finden Sie separat unter dem jeweiligen Prüfungsteil.»
Это полный набор: все 23 типа заданий по одному разу (Demo с. 3: «zeigen Ihnen alle Aufgabentypen aus den vier Prüfungsteilen»). Порядок как на экзамене. Пробных (Erprobungs-) заданий нет, поэтому это не полный по времени экзамен.

### PDF
| Файл | Страниц / размер | Что внутри | Ключ | Транскрипт | Образцы ответов |
|---|---|---|---|---|---|
| [Gesamtdatei](https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF.pdf) (© 2020, изменён 08.09.2025) | 54 с., 1,6 МБ | Lesen с. 4–15, Hören с. 16–23, Schreiben с. 24–27, Sprechen с. 28–34 | да, с. 35–40 (Lesen, Hören) | Hören с. 45–50; реплики Sprechen Typ 4 и 6 с. 51 | Schreiben с. 41: «Hinweise zur Lösung» (пункты для Typ 1, обязательное содержание для Typ 2); Sprechen с. 42–44: образцы заметок по всем 7 типам. Полных образцовых текстов и монологов нет. Источники текстов с. 52–54 |
| [Lesen](https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF_Lesen.pdf) (2023) | 10 с. (по две страницы на листе), 0,5 МБ | те же 7 заданий Lesen | да, с. 9 | — | — |
| [Hören](https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF_Hoeren.pdf) (2025) | 22 с., 1,1 МБ | те же 7 заданий Hören | да, с. 12–15 | да, с. 16 и далее | — |
| [Schreiben](https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF_Schreiben.pdf) (2020) | 9 с., 1,8 МБ | 2 задания | «Hinweise zur Lösung», с. 8 | — | только пункты, без текста |
| [Sprechen](https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF_Sprechen.pdf) (2020) | 15 с., 3,5 МБ | 7 заданий | образцы заметок, с. 11–13 | реплики Typ 4 и 6, с. 14 | только заметки |
Сверка: задания и ключи в отдельных PDF совпадают с Gesamtdatei (ключи Lesen Typ 1 и 3, Hören Typ 6 одинаковые; темы текстов те же).

### Аудио и видео (200, длительность по ffprobe, не прослушивались)
| Файл | Размер | Длительность |
|---|---|---|
| Hoeren_Aufgabentyp_1_Demoversion.mp3 | 2,6 МБ | 3:38 |
| Hoeren_Aufgabentyp_2_Demoversion.mp3 | 3,1 МБ | 5:51 |
| Hoeren_Aufgabentyp_3_Demoversion.mp3 | 4,0 МБ | 6:24 |
| Hoeren_Aufgabentyp_4_Aufgabenstellung.mp3 + Hoeren_Aufgabentyp_4_Video.mp4 | 0,4 + 23,6 МБ | 0:29 + 3:25 |
| Hoeren_Aufgabentyp_5_Aufgabenstellung.mp3 + Hoeren_Aufgabentyp_5_Video.mp4 | 0,4 + 15,9 МБ | 0:29 + 3:03 |
| Hoeren_Aufgabentyp_6_Demoversion.mp3 | 3,7 МБ | 6:50 |
| Hoeren_Aufgabentyp_7_Demoversion.mp3 | 1,0 МБ | 1:32 |
| Sprechen_Aufgabentyp_1_Demoversion.mp3 | 1,2 МБ | 1:55 |
| Sprechen_Aufgabentyp_2_Demoversion.mp3 | 1,1 МБ | 3:01 |
| Sprechen_Aufgabentyp_3_Demoversion.mp3 | 2,4 МБ | 6:44 |
| Sprechen_Aufgabentyp_4_Demoversion.mp3 | 1,8 МБ | 4:55 |
| Sprechen_Aufgabentyp_5_Demoversion.mp3 | 1,9 МБ | 5:09 |
| Sprechen_Aufgabentyp_6_Demoversion.mp3 | 2,0 МБ | 5:18 |
| Sprechen_Aufgabentyp_7_Demoversion.mp3 | 1,4 МБ | 3:55 |
Файлы Sprechen по Demo с. 3 содержат время подготовки и ответа, то есть по ним можно тренироваться как на экзамене.

### Ключ Demo (для разборов, Gesamtdatei с. 35–40)
- Lesen Typ 1: 1 d; 2 b; 3 d; 4 a; 5 c. Typ 3: 1 d; 2 d; 3 c; 4 b; 5 a; 6 a; 7 d. Typ 4: 1 h; 2 e; 3 b; 4 c. Typ 2, 5, 6, 7: ответ дан текстом или отметками в таблице (с. 35–36). В текстовом слое PDF отметки Typ 5 не читаются → брать по картинке страницы 36.
- Hören Typ 6: 1 c; 2 c; 3 a; 4 a; 5 c. Typ 7: «denn – dann», «besten – ehesten», «Es – So», «Garantie – Garanten». Typ 1, 2, 5: образцы коротких ответов («Musterlösungen»). Typ 3 и 4: отметки на с. 38–39 (Typ 4 тоже по картинке страницы).

## 2. Цифровой TestDaF: Tutorials (видео по каждому типу)
Страница: https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf/vorbereitung-auf-den-digitalen-testdaf/ (блок «Tutorials zur Bearbeitung der Aufgaben im digitalen TestDaF»)
- 23 MP4: `Lesen_1…7.mp4`, `Hoeren_1…7.mp4`, `Schreiben_1…2.mp4`, `Sprechen_1…7.mp4`.
- Выборочно HEAD (200, video/mp4): Lesen_1 0,9 МБ, Lesen_7 5,0 МБ, Hoeren_1 2,8 МБ, Hoeren_7 1,5 МБ, Schreiben_1 2,4 МБ, Schreiben_2 4,8 МБ, Sprechen_1 1,0 МБ, Sprechen_7 1,5 МБ. Остальные 15 по ссылкам на странице, отдельно не проверял.
- Что внутри: объяснение, как работать с типом задания (страница: «Wie müssen Sie Kurzantworten im Prüfungsteil Hören eingeben?» и т. п.). Видео не смотрел.

## 3. Цифровой TestDaF: прочее бесплатное
| Материал | Где | Что известно | Проверено |
|---|---|---|---|
| Второй цифровой Modelltest в портале | новость 12.02.2026 на https://www.testdaf.de/de/ | «Nach Anmeldung zum digitalen TestDaF steht Ihnen im Teilnehmendenportal ab sofort ein weiterer kostenfreier Modelltest … zur Verfügung.» Только после записи на экзамен | содержание не проверено (нужен логин) |
| Vorbereitungstermine | https://www.testdaf.de/de/teilnehmende/mein-testdaf/vorbereitungstermine/ | Пробный цифровой тест в центре, «aktuell kostenfrei». В списке центров есть Sprachlernzentrum Astana (КЗ) и Andijan Development Center (УЗ). Розыгрыш 10 × 100 € для сессий 23.11.2026–28.02.2027 | страница 200; формат сессии не проверен |
| Fit für den TestDaF | https://www.testdaf.de/fit-fuer-testdaf/ | Самопроверка: «zwei Texten mit je 20 Lücken», «für jeden Text genau 5 Minuten», максимум 40 баллов, «nur eine ungefähre Einschätzung», без TDN | 200 |

## 4. Бумажный TestDaF: Modelltest 1 и 2
Страница: https://www.testdaf.de/de/teilnehmende/der-papierbasierte-testdaf/vorbereitung-auf-den-papierbasierten-testdaf/modelltests/
Оба теста © g.a.s.t. 2020. Это полные экзамены бумажного формата (LV, HV, SA, MA). Для цифрового формата они не подходят: другие типы заданий.

### Modelltest 1
| Часть | PDF (200, application/pdf) | Аудио | Ключ | Транскрипт | Образцы ответов |
|---|---|---|---|---|---|
| Einleitung | [Modelltest_01_Einleitung.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Lesen/Modelltest_01_Einleitung.pdf) 4 с. | — | — | — | — |
| Leseverstehen | [Modelltest_01_LV_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Lesen/Modelltest_01_LV_Heft.pdf) 12 с. | — | [LV_Loesungen](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Lesen/Modelltest_01_LV_Loesungen.pdf) 1 с. | — | — |
| Hörverstehen | [Modelltest_01_HV_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Hoeren/Modelltest_01_HV_Heft.pdf) 12 с. | [Ton_Modelltest01_HV_final.mp3](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Hoeren/Ton_Modelltest01_HV_final.mp3) 20,9 МБ, 37:28 | [HV_Loesungen](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Hoeren/Modelltest_01_HV_Loesungen.pdf) 2 с. | [HV_Transkription](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Hoeren/Modelltest_01_HV_Transkription.pdf) 6 с. | — |
| Schriftlicher Ausdruck | [Modelltest_01_SA_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Schreiben/Modelltest_01_SA_Heft.pdf) 8 с. (тема «Fitness und Gesundheit») | — | — | — | в Hinweise und Tipps 01 (ниже) |
| Mündlicher Ausdruck | [Modelltest_01_MA_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Sprechen/Modelltest_01_MA_Heft.pdf) 20 с. | [Modelltest01_MA_Tonaufnahme.mp3](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Sprechen/Modelltest01_MA_Tonaufnahme.mp3) 20,3 МБ, 33:05 | — | [MAMS_Heft (Masterbandmanuskript)](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_1/Sprechen/Modelltest_01_MAMS_Heft.pdf) 12 с.; [Redestimuli](https://www.testdaf.de/fileadmin/testdaf/downloads/Modellsaetze__alt_/MS01_MA_Redestimuli.pdf) 1 с. | в Hinweise und Tipps 01 (образцы заметок) |

### Modelltest 2
| Часть | PDF (200, application/pdf) | Аудио | Ключ | Транскрипт | Образцы ответов |
|---|---|---|---|---|---|
| Einleitung | [Modelltest_02_Einleitung.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Lesen/Modelltest_02_Einleitung.pdf) 4 с. | — | — | — | — |
| Leseverstehen | [Modelltest_02_LV_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Lesen/Modelltest_02_LV_Heft.pdf) 12 с. | — | [LV_Loesungen](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Lesen/Modelltest_02_LV_Loesungen.pdf) 1 с. | — | — |
| Hörverstehen | [Modelltest_02_HV_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Hoeren/Modelltest_02_HV_Heft.pdf) 12 с. | [Ton_MS02_HV_final.mp3](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Hoeren/Ton_MS02_HV_final.mp3) 20,0 МБ, 37:16 | [HV_Loesungen](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Hoeren/Modelltest_02_HV_Loesungen.pdf) 2 с. | [HV_Transkription](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Hoeren/Modelltest_02_HV_Transkription.pdf) 6 с. | — |
| Schriftlicher Ausdruck | [Modelltest_02_SA_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Schreiben/Modelltest_02_SA_Heft.pdf) 8 с. (тема «Forschung oder Lehre») | — | — | — | в Hinweise und Tipps 02 |
| Mündlicher Ausdruck | [Modelltest_02_MA_Heft.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Sprechen/Modelltest_02_MA_Heft.pdf) 20 с. | [MS02_MA_Tonaufnahme.mp3](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Sprechen/MS02_MA_Tonaufnahme.mp3) 16,2 МБ, 33:25 | — | [MAMS_Heft](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Sprechen/Modelltest_02_MAMS_Heft.pdf) 12 с.; [Redestimuli](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/Sprechen/Modelltest_02_MA_Redestimuli.pdf) 1 с. | в Hinweise und Tipps 02 |

### Hinweise und Tipps (интерактивные PDF-разборы)
| Файл | Размер | Что внутри |
|---|---|---|
| [Hinweise-und-Tipps_zu-Modelltest-01.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/HinweiseTipps/Hinweise-und-Tipps_zu-Modelltest-01.pdf) | 86 с., 1,2 МБ | Цель каждой части, структура и время, «Lösungshinweise» по заданиям LV и HV («Musterlösung» для коротких ответов); Schriftlicher Ausdruck: «Musterlösung für eine Grafikbeschreibung» (с. 58), «… für eine Argumentation» (с. 62), «… für einen Vergleich mit dem Heimatland» (с. 63); Mündlicher Ausdruck: разбор Aufgabe 2, 3, 6 с «Ihre Beispiel-Notizen» |
| [Hinweise-und-Tipps_zu-Modelltest_02.pdf](https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/HinweiseTipps/Hinweise-und-Tipps_zu-Modelltest_02.pdf) | 86 с., 1,0 МБ | Так же; найдена «Musterlösung für eine Grafikbeschreibung» (с. 59) и «Ihre Beispiel-Notizen» в MA (с. 74, 78). Образцы аргументации в MT2 отдельно не нашёл поиском |
На странице: «Das Tutorial läuft nicht als Film ab.» (навигация по оглавлению внутри PDF).

## 5. Информационные материалы (не пробники)
- Produktblatt цифрового и бумажного TestDaF для участников (06/2024, по 1 с.): https://www.gast.de/fileadmin/gast.de/GAST/4_PDF/1-Produkte/gast_Produktblatt_TestDaF-digi_fuer-TN.pdf , https://www.gast.de/fileadmin/gast.de/GAST/4_PDF/1-Produkte/gast_Produktblatt_TestDaF-pb_fuer-TN.pdf
- Брошюра на русском «Что такое ТестДаФ?» (2018, **только бумажный формат**, 12 с.): https://www.testdaf.de/fileadmin/testdaf/Teilnehmende/Informationen_in_anderen_Sprachen/TestDaF-Broschuere_russisch.pdf ; есть и на украинском. Список языков: https://www.testdaf.de/de/teilnehmende/warum-testdaf/informationen-in-ihrer-sprache/
- Prüfungsordnung 10/2020 и Regeln für den Prüfungstag (12/2025): см. research/testdaf.md.

## 6. Платные материалы, на которые ссылается testdaf.de (не официальные бесплатные)
| Материал | Издатель | Цена (на 2026-11-21) | Что внутри по описанию издателя |
|---|---|---|---|
| [Modellprüfung: Digitaler TestDaF](https://www.klett-sprachen.de/modellpruefung-digitaler-testdaf/t-1/NP00810000190), PDF + аудио, 39 с., ZIP 98,9 МБ | Ernst Klett Sprachen (автор Simone Weidinger) | 7,50 EUR | «Einen kompletten Modellsatz mit allen 23 Aufgabentypen (vom TestDaF-Institut geprüft)», видео и аудио, «Transkriptionen», «Lösungen zu allen Aufgaben». Содержание совпадает с онлайн-симуляцией из книги ниже. Проводится не за компьютером. |
| [Mit Erfolg zum digitalen TestDaF](https://www.klett-sprachen.de/mit-erfolg-zum-digitalen-testdaf/t-1/9783126768276), ISBN 978-3-12-676827-6, 215 с. | Klett | Print 22,00 EUR; BlinkLearning 25,00 EUR | «Eine komplette Modellprüfung inkl. Lösungen und Transkriptionen» + «digitale Modellprüfung als Online-Simulation im TestDaF-Format» (только у печатной книги). На testdaf.de упомянута на странице подготовки. |
| Kompass DaF B2.1 / B2.2 | Klett | не проверял | «mit Modellaufgaben aus dem digitalen TestDaF» (testdaf.de) |
| Prüfungstraining DaF. Digitaler TestDaF B2/C1, ISBN 978-3-06-123209-2 | Cornelsen | не проверял | в списке Trainingsmaterialien на testdaf.de |
| TestDaF Musterprüfung 1–5 (бумажный формат) | Hueber | не проверял | «Fünf Musterprüfungen mit Originalaufgaben des TestDaF-Instituts» (testdaf.de) |
| Курсы Deutsch-Uni Online (DUO) «Training digitaler TestDaF B2/C1» и др. | g.a.s.t. / DUO | не проверял | «Original-Modelltest» внутри курса (testdaf.de) |

## Итог для сайта
- Бесплатно и официально для **цифрового** TestDaF есть один набор: Demo-Version (все 23 типа по одному разу, ключ, транскрипты, заметки-образцы) + 23 видео-туториала + второй Modelltest в портале после записи.
- Для **бумажного** есть два полных Modelltests с ключами, транскриптами, MP3 и 86-страничными разборами с образцами текстов.
- Полных образцовых текстов Schreiben и монологов Sprechen для цифрового формата официально нет: только пункты и заметки. Свои образцы на сайте придётся писать самим.
