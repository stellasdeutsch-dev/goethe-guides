# Официальные пробники Goethe A1–C2: где скачать и как готовиться

Статья: `src/content/guides/probniki/goethe-modellsatz-skachat.mdx`
Проверено: 2026-10-01.

## Как проверяли

- **PDF и аудио**: `curl -sIL -A "Mozilla/5.0 …"` → код ответа + Content-Type. Все PDF скачаны целиком, `pdfinfo` (число страниц) и `pdftotext` (титульный лист, год). Аудио: `ffprobe` (длительность, кодек). Файлы `.mp4` содержат только звук (`aac,audio`).
- **HTML-страницы goethe.de** (`/de/spr/prf/ueb/*.html`): `curl` → 403, WebFetch → 403. Поэтому открыты в браузере (Browser pane, Chromium) 2026-10-01, ссылки собраны JS-скриптом (`document.querySelectorAll('a')` и `<source>`). Старый адрес `https://www.goethe.de/de/spr/kup/prf/prf/gzb1/ueb.html` в браузере редиректит на `https://www.goethe.de/de/spr/prf/ueb/pb1.html`.
- **bfu.goethe.de** (онлайн-версии): `curl` → 200 text/html, заголовок страницы проверен.
- Таблица ниже: только то, что есть на официальных страницах Prüfungstraining и отдаёт 200.

## Официальные страницы Prüfungstraining (браузер, 2026-10-01)

| Страница | Что на ней |
|---|---|
| https://www.goethe.de/de/spr/prf/ueb.html | Обзор: Prüfungstraining A1, A2, B1, B2, C1, C2 + барьерфри + Goethe-Test PRO |
| https://www.goethe.de/de/spr/prf/ueb/pa1.html | A1 Erwachsene (3 набора) + A1 Kinder und Jugendliche (Fit in Deutsch 1, 2 набора) |
| https://www.goethe.de/de/spr/prf/ueb/pa2.html | A2 Erwachsene (2) + A2 Jugendliche (2) |
| https://www.goethe.de/de/spr/prf/ueb/pb1.html | B1 Erwachsene (2) + B1 Jugendliche (2) |
| https://www.goethe.de/de/spr/prf/ueb/pb2.html | B2 Erwachsene (1) + B2 Jugendliche (1) |
| https://www.goethe.de/de/spr/prf/ueb/pc1.html | C1 (1) |
| https://www.goethe.de/de/spr/prf/ueb/pc2.html | C2 (2) + Literaturliste |
| https://www.goethe.de/de/spr/prf/ueb/bpf.html | Все онлайн-версии (barrierefrei). C1 и C2 «Für Erwachsene», A1–B2 «Für Erwachsene und Jugendliche» |

Названия на сайте теперь «Prüfungstraining 1/2/3». Внутри PDF на обложке старые названия: Modellsatz, Übungssatz 01/02.

Инструкция на странице (pb1.html, такая же на pc2.html), коротко: открыть PDF «Prüfungstraining», в разделе «Kandidatenblätter» задания, распечатать, «Stellen Sie die Uhr entsprechend der Zeitvorgabe», аудио для Hören, Sprechen с партнёром, «Vergleichen Sie Ihre Ergebnisse mit den Lösungen, die Sie im PDF finden.» Про онлайн-версию: «Das System zeigt Ihnen an, ob die Antworten falsch oder richtig sind.»

## Материалы для взрослых (Erwachsene)

| Уровень | Набор (сайт → обложка PDF) | URL | Статус | Проверка |
|---|---|---|---|---|
| A1 SD1 | PT1 → Modellsatz, 8. Auflage, © Februar 2024 | https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_modellsatz.pdf | 200 application/pdf | 47 стр. |
| A1 | PT1 Hören | https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_1_hoeren_a1_erwachsene.mp4 | 200 video/mp4, 16 636 785 B | ffprobe 1029 s (~17 мин), aac |
| A1 | PT2 → Übungssatz 01, 6. überarb. Aufl. Februar 2024 | https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz01.pdf | 200 application/pdf | 47 стр. |
| A1 | PT2 Hören | https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_2_hoeren_a1_erwachsene.mp4 | 200 video/mp4, 18 487 769 B | 1140 s |
| A1 | PT3 → Übungssatz 02, Februar 2024 | https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_uebungssatz02.pdf | 200 application/pdf | 47 стр. |
| A1 | PT3 Hören | https://goethemp4s.akamaized.net/resources/files/mp430/pruefungstraining_3_hoeren_a1_erwachsene.mp4 | 200 video/mp4, 18 505 065 B | 1144 s |
| A1 | Онлайн (Modellsatz) | https://bfu.goethe.de/a1_sd1/ | 200 text/html | «Goethe-Zertifikat A1 Modellsatz» |
| A2 | PT1 → Modellsatz Erwachsene, © 2016 | https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Modellsatz_Erwachsene.pdf | 200 application/pdf | 48 стр. |
| A2 | PT1 Hören | https://goethemp4s.akamaized.net/resources/files/mp434/pruefungstraining_1_hoeren_a2_erwachsene.mp4 | 200 video/mp4, 13 542 548 B | 1356 s (~23 мин) |
| A2 | PT2 → Übungssatz 01, © 2020, 1. Aufl. Januar 2021 | https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Uebungssatz_Erwachsene.pdf | 200 application/pdf | 48 стр. (на сайте подписан «5 KB», файл реальный, 8,8 МБ) |
| A2 | PT2 Hören | https://goethemp4s.akamaized.net/resources/files/mp38/pruefungstraining_2_hoeren_a2_erwachsene.mp3 | 200 audio/mpeg, 34 801 844 B | 1450 s |
| A2 | Онлайн (Modellsatz) | https://bfu.goethe.de/a2_mod_2MX5/ | 200 text/html | «Goethe-Zertifikat A2, Modellsatz: barrierefrei online üben» |
| B1 | PT1 → Modellsatz Erwachsene (Goethe/ÖSD) | https://www.goethe.de/pro/relaunch/prf/materialien/B1/b1_modellsatz_erwachsene.pdf | 200 application/pdf | 52 стр. |
| B1 | PT1 Hören | https://goethemp4s.akamaized.net/resources/files/mp468/pruefungstraining_1_hoeren_b1_erwachsene.mp4 | 200 video/mp4, 36 252 539 B | 2242 s (~37 мин), aac |
| B1 | PT2 → Übungssatz Erwachsene, © 2016 | https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Erwachsene.pdf | 200 application/pdf | 49 стр. |
| B1 | PT2 Hören | https://goethemp4s.akamaized.net/resources/files/mp468/pruefungstraining_2_hoeren_b1_erwachsene.mp4 | 200 video/mp4, 38 107 022 B | 2354 s |
| B1 | Онлайн (Modellsatz) | https://bfu.goethe.de/b1_mod/index.php | 200 text/html | «Goethe-Zertifikat B1, Modellsatz: barrierefrei online üben» |
| B2 | PT1 → Modellsatz Erwachsene, © 2025, Vs1.5_160426 | https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_erwachsene.pdf | 200 application/pdf | 51 стр. |
| B2 | PT1 Hören | https://goethemp4s.akamaized.net/resources/files/mp477/b2_modellsatz_rahmen_erwachsene.mp4 | 200 video/mp4, 37 679 651 B | 2292 s (~38 мин) |
| B2 | Онлайн (Modellsatz) | https://bfu.goethe.de/b2_mod_2MX6/index.php | 200 text/html | «Goethe-Zertifikat B2 Modellsatz» |
| C1 | PT1 → Modellsatz (C1 modular), © 2023, 2. Aufl. Feb. 2024, Stand April 2026 | https://www.goethe.de/pro/relaunch/prf/materialien/C1_modular/c1-modular_modellsatz.pdf | 200 application/pdf | 46 стр. |
| C1 | PT1 Hören | https://goethemp4s.akamaized.net/resources/files/mp310/pruefungstraining_1_hoeren_c1.mp3 | 200 audio/mpeg, 94 193 370 B | 2355 s (~39 мин) |
| C1 | Онлайн (Modellsatz) | https://bfu.goethe.de/c1mod/ | 200 text/html | «Goethe-Zertifikat C1, Modellsatz: barrierefrei online üben» |
| C2 | PT1 → Modellsatz, «Aktualisiert: März 2026» | https://www.goethe.de/pro/relaunch/prf/materialien/C2/c2_modellsatz.pdf | 200 application/pdf | 59 стр. |
| C2 | PT1 Hören | https://goethemp4s.akamaized.net/resources/files/mp472/pruefungstraining_1_hoeren_c2.mp3 | 200 audio/mpeg, 28 559 255 B | 2255 s |
| C2 | PT2 → Übungssatz 01, «Aktualisiert: März 2026» | https://www.goethe.de/pro/relaunch/prf/materialien/C2/c2-uebungssatz.pdf | 200 application/pdf | 62 стр. (на сайте ссылка http://, редиректит на https) |
| C2 | PT2 Hören | https://goethemp4s.akamaized.net/resources/files/mp472/pruefungstraining_2_hoeren_c2.mp3 | 200 audio/mpeg, 23 810 123 B | 2249 s |
| C2 | Онлайн (Modellsatz) | https://bfu.goethe.de/c2_mod/lesen.php | 200 text/html | «GOETHE-ZERTIFIKAT C2 - Modellsatz > Lesen» |

Итого наборов для взрослых: A1 3, A2 2, B1 2, B2 1, C1 1, C2 2.

## Версии для подростков (Jugendliche), все 200

- A1 Fit in Deutsch 1 (другой экзамен, свои Durchführungsbestimmungen): https://www.goethe.de/pro/relaunch/prf/materialien/A1_fit/fit1_uebungssatz_01.pdf (52 стр., на сайте подписан «2 KB», файл 5,6 МБ), https://www.goethe.de/pro/relaunch/prf/materialien/A1_fit/fit1_uebungssatz_02.pdf; аудио …/mp430/pruefungstraining_1_hoeren_a1_jugendliche.mp4, …/mp430/pruefungstraining_2_hoeren_a1_jugendliche.mp4.
- A2 Fit in Deutsch: https://www.goethe.de/pro/relaunch/prf/materialien/A2_fit/A2_Modellsatz_Jugendliche.pdf, https://www.goethe.de/pro/relaunch/prf/materialien/A2_fit/A2_Uebungssatz_Jugendliche.pdf; аудио …/mp468/pruefungstraining_1_hoeren_a2_jugendliche.mp4, …/mp310/pruefungstraining_2_hoeren_a2_jugendliche.mp3.
- B1 Jugendliche: https://www.goethe.de/pro/relaunch/prf/materialien/B1/b1_modellsatz_jugend.pdf, https://www.goethe.de/pro/relaunch/prf/materialien/B1/B1_Uebungssatz_Jugendliche.pdf; аудио …/mp468/pruefungstraining_1_hoeren_b1_jugendliche.mp4, …/mp310/pruefungstraining_2_hoeren_b1_jugendliche.mp3.
- B2 Jugendliche: https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_jugendliche.pdf (на сайте «6 KB», файл 8 МБ, 51 стр.); аудио …/mp310/pruefungstraining_1_hoeren_b2_jugendliche.mp3.
- C1, C2: только для взрослых (bpf.html: «C1 Für Erwachsene», «C2 Für Erwachsene»).

Можно ли взрослому решать подростковую версию как лишний пробник:
- A2: DB-A2 (Stand 1.9.2025), с. 2: «Die Prüfungen GOETHE-ZERTIFIKAT A2 und GOETHE-ZERTIFIKAT A2 FIT IN DEUTSCH haben das gleiche Format, die folgenden Paragrafen gelten gleichermaßen für beide Prüfungen.» → да, формат тот же.
- B1, B2: одни DB «für Erwachsene und Jugendliche» (DB-B1, DB-B2 §1.1: «Die Prüfung GOETHE-ZERTIFIKAT B2 für Erwachsene und Jugendliche besteht aus vier Modulen…»). Обложки PDF: «DEUTSCHPRÜFUNG FÜR JUGENDLICHE UND ERWACHSENE». → формат тот же, темы подростковые.
- A1: Fit in Deutsch 1 это отдельный экзамен (отдельные Prüfungsziele/Testbeschreibung A1 Fit1). Для Start Deutsch 1 как пробник НЕ советуем.

## Старые PDF, которые всплывают в поиске (НЕ рекомендуем)

- https://www.goethe.de/pro/relaunch/prf/materialien/C1/c1_uebungssatz.pdf → 200, обложка: «ÜBUNGSSATZ 03 … Diese Prüfung wird bis zum 31.12.2023 weltweit angeboten.» © 2012.
- https://www.goethe.de/pro/relaunch/prf/materialien/C1/c1_modellsatz.pdf → 200, обложка: «Diese Prüfung wird bis zum 31.12.2023 weltweit angeboten.» © 2007, Auflage 2014.
- На pc1.html их нет, там только C1_modular. В статье ссылки на них не даём, только предупреждение.
- Не найдено (404): …/B2/b2_uebungssatz_erwachsene.pdf, …/B2/B2_Uebungssatz_Erwachsene.pdf, …/C1_modular/c1-modular_uebungssatz.pdf.

## Что внутри PDF

`pdftotext` + grep по каждому набору для взрослых: во всех есть «Kandidatenblätter», «Antwortbogen», «Lösungen», «Transkription(en)», «Prüferblätter». Пример B1 Modellsatz: в оглавлении Antwortbogen на с. 30, 32, 38.

## Prüfungsordnung (PO), Stand 1. September 2025

URL: https://www.goethe.de/pro/relaunch/prf/de/Pruefungsordnung.pdf (200 application/pdf, 21 стр.)

- §1.4 (с. 3): «Das Goethe-Institut publiziert zu jeder Prüfung einen Modellsatz sowie einen oder mehrere Übungssätze, die für alle Prüfungsinteressierten im Internet einsehbar und zugänglich sind. Gültig ist jeweils die zuletzt veröffentlichte Fassung. In diesen Modell- und Übungssätzen zu den einzelnen Prüfungen sind Aufbau, Inhalt und Bewertung verbindlich beschrieben.» Формулировка из брифа подтверждена: «Aufbau, Inhalt und Bewertung verbindlich beschrieben».
- §1.3: «Prüfungsaufbau, Inhalt und Bewertung sind im Print-, Digital- und Online-Format identisch.»
- §7 (с. 8): «Die Prüfungsmaterialien … werden ausschließlich in der Prüfung … verwendet».
- §11.4 (с. 10): исключение при подозрении, что нет «Eigenleistung», в т. ч. если «auswendig gelernte Prüfungsantworten und/oder Mustertexte verwendet werden».
- §11.5 (с. 11): исключение при обоснованном подозрении, что участник «Prüfungsmaterial zu entwenden oder Dritten zugänglich machen. Es genügt hier bereits der begründete Verdacht eines Versuchs.»
- §11.11 (с. 11): после исключения центр «kann … eine Prüfungssperre verhängen».
- §11.12 (с. 11): если основание для исключения выяснилось после экзамена, центр вправе «die Prüfung als nicht bestanden zu bewerten und das ggf. ausgestellte Zertifikat zurückzufordern».
- §20 (с. 17), Einsichtnahme: «Die Prüfungsaufgaben und Musterlösungen werden nicht gezeigt.» «Es besteht kein Anspruch auf Übersendung der Prüfungsunterlagen.»
- §22 (с. 17): «Alle Prüfungsunterlagen sind vertraulich. Sie unterliegen der Geheimhaltungspflicht und werden unter Verschluss gehalten.»
- §23 (с. 18): «Alle Prüfungsmaterialien sind urheberrechtlich geschützt und werden nur in der Prüfung verwendet. Eine darüberhinausgehende Nutzung, insbesondere die Vervielfältigung und Verbreitung sowie öffentliche Zugänglichmachung dieser Materialien ist nicht gestattet. Verstöße werden urheberrechtlich verfolgt.»

Как используем в статье: «реальные варианты конфиденциальны (§22), их не показывают даже на просмотре своей работы (§20)»; распространение запрещено (§23); заученные ответы и шаблонные тексты прямо названы признаком отсутствия своей работы (§11.4) → исключение, после экзамена возможен «не сдан» и отзыв сертификата (§11.12), Prüfungssperre (§11.11). Про «покупку/скачивание утечки» отдельного пункта в PO нет → в статье формулируем как риск, а не как «запрещено скачивать».

## Время по уровням (Durchführungsbestimmungen, все Stand 1. September 2025, все 200 application/pdf)

| Уровень | DB URL | 1.4: письменная часть | Sprechen |
|---|---|---|---|
| A1 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf | «ohne Pausen insgesamt 65 Minuten»: HÖREN ca. 20, LESEN 25, SCHREIBEN 20 | группа до 4, 15 мин, «keine Vorbereitungszeit» |
| A2 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_A2.pdf | «ohne Pausen insgesamt 90 Minuten»: LESEN 30, HÖREN ca. 30, SCHREIBEN 30 | пара 15, одиночно 10, без подготовки |
| B1 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B1.pdf | ca. 165: LESEN 65, HÖREN ca. 40, SCHREIBEN 60 | пара ca. 15, одиночно ca. 10, подготовка 15 |
| B2 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B2.pdf | ca. 180: LESEN 65, HÖREN ca. 40, SCHREIBEN 75 | пара ca. 15, одиночно ca. 10, подготовка 15 |
| C1 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_C1.pdf | ca. 180: LESEN 65, HÖREN ca. 40, SCHREIBEN 75 | пара ca. 20, одиночно ca. 15, подготовка 20 |
| C2 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_C2_neu.pdf | ca. 195: LESEN 80, HÖREN ca. 35, SCHREIBEN 80 | только одиночно, ca. 15, подготовка 15 |

Порядок и паузы:
- A1: «folgende Reihenfolge empfohlen: HÖREN – LESEN – SCHREIBEN»; «Zwischen den Prüfungsteilen ist keine Pause vorgesehen.»
- A2: «empfohlen: LESEN – HÖREN – SCHREIBEN»; «Zwischen den Prüfungsteilen ist keine Pause vorgesehen.»
- B1, B2, C1, C2: «folgende Reihenfolge empfohlen: LESEN – HÖREN – SCHREIBEN»; «Zwischen jedem dieser Module ist eine Pause von mindestens 15 Minuten vorzusehen.» Порядок «kann … vom jeweiligen Prüfungszentrum geändert werden».

Перенос ответов (§2, всё «innerhalb der Prüfungszeit»):
- A1: Hören «circa 5 Minuten», Lesen+Schreiben «circa 5 Minuten».
- A2: Lesen «circa 3 Minuten», Hören «circa 3 Minuten».
- B1, B2: Lesen «circa 5 Minuten», Hören «circa 5 Minuten».
- C1: Lesen «circa 5 Minuten», Hören «circa 3 Minuten».
- C2: Lesen «ca. 5 Minuten», Hören «3 Minuten».
- Schreiben B1–C2: текст пишут сразу на Antwortbogen; с черновиком «planen sie für das Übertragen … ausreichend Zeit innerhalb der Prüfungszeit ein».

Аудио:
- DB-A1, DB-B1, DB-B2, DB-C1, DB-C2 (с. 3): «Die Audiodatei enthält die Texte zum Modul HÖREN sowie alle Anweisungen und Informationen.» DB-A2: «… sowie alle Anweisungen, Pausen und Übertragungszeiten.» Аудиофайл запускает Aufsichtsperson (DB §2).
- Повторы внутри файла: первые 5 минут A1 PT1 расшифрованы локально (whisper base, de): после «Sie hören jeden Text zweimal» каждый диалог Teil 1 звучит в файле два раза подряд. Длительность файлов почти равна времени модуля (B1 ~37 мин при «ca. 40»). → дома включаешь файл один раз и не останавливаешь.

Сколько раз звучит (инструкции в Modellsatz, страницы PDF):
- A1 SD1 MS: Teil 1 zweimal (с. 8), Teil 2 einmal (с. 11), Teil 3 zweimal (с. 12).
- A2 MS: Teil 1 zweimal (с. 18), Teil 2 einmal (с. 19), Teil 3 einmal (с. 20), Teil 4 zweimal (с. 21).
- B1 MS: Teil 1 zweimal (с. 18), Teil 2 einmal (с. 19), Teil 3 einmal (с. 20), Teil 4 zweimal (см. research/goethe-b1-facts.md).
- B2 MS: Teil 1 einmal (с. 18), Teil 2 zweimal (с. 19), Teil 3 einmal (с. 20), Teil 4 zweimal (с. 21).
- C1 MS: Teil 1 einmal (с. 18), Teil 2 zweimal (с. 19), Teil 3 «in vier Abschnitten jeweils einmal» (с. 20), Teil 4 zweimal (с. 21).
- C2 MS: Teil 1 einmal (с. 16), Teil 2 einmal (с. 18), Teil 3 zweimal (с. 19).
→ в статье: «на каждом уровне есть части, которые звучат один раз».

## Баллы (для PointsCalc)
- B1 Lesen/Hören: 30 заданий, × 3,33, порог 60 = 18 верных (research/goethe-b1-facts.md, DB-B1 §4.1–4.2). Калькулятор в статье подписан как B1.

## Наши страницы
- Разборы (пишутся параллельно, ссылки относительные): ../../probniki/a1-modellsatz-razbor/, a2-modellsatz-razbor, b1-modellsatz-razbor, b1-uebungssatz-razbor, b2-modellsatz-razbor, c1-modellsatz-razbor. Для C2 разбора нет.
- Тематические гайды: slugs из research/AUTHORING.md, все B1.

## Не подтверждено / не пишем
- Отдельного Übungssatz для B2 (взрослые) и для нового C1 нет на официальных страницах; угаданные URL дают 404.
- Сколько стоят/где продаются «утечки», насколько они распространены: не пишем, статистики нет.
- Что скачивание утечки само по себе нарушает PO: прямого пункта нет. Пишем только про §11.4/11.5/11.12/§22/§23.
- План на 4 недели и «финальный пробник за 3–5 дней» это наша рекомендация, а не правило Goethe.
