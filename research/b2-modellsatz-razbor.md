# Факты: разбор Goethe-Zertifikat B2 Modellsatz Erwachsene

Проверено: 2026-10-01. Статья: `src/content/guides/probniki/b2-modellsatz-razbor.mdx`.

## Источники (все проверены `curl -sIL -A "Mozilla/5.0"` → 200)

| Код | Что | URL | Проверка |
|---|---|---|---|
| [MS] | Modellsatz B2 Erwachsene, PDF, 51 стр., версия «Vs1.5_160426», ModDate 16.04.2026, «2. Auflage August 2025» | https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_erwachsene.pdf | 200, application/pdf, Last-Modified 21.04.2026 |
| [AUDIO] | Аудио к модулю Hören (один файл MP4, 37 425 239 байт, длительность 2307 с = 38:27) | https://www.goethe.de/resources/files/mp468/b2_modellsatz_erwachsene.mp4 (зеркало: https://goethemp4s.akamaized.net/resources/files/mp468/b2_modellsatz_erwachsene.mp4) | 200, video/mp4, Last-Modified 24.08.2018; длительность через ffprobe |
| [ONLINE] | Барьерная онлайн-версия того же Modellsatz (те же тексты: Minimalismus, Reisefieber, Doktor Google, digitale Nomaden, Theaterwissenschaft; Hören с Neuhaus, Gerster, Kinigard) | https://bfu.goethe.de/b2_mod_2MX6/index.php (+ lesen.php, hoeren.php, schreiben.php, sprechen.php) | 200 |
| [DB] | Durchführungsbestimmungen B2, Stand 1. September 2025 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B2.pdf | 200, Last-Modified 22.10.2025 |
| [JUG] | Второй официальный набор: Modellsatz B2 Jugendliche (другие тексты, тот же формат, задания на du), Vs1.5_170426 | https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_jugendliche.pdf | 200 |
| [JUG-AUDIO] | Аудио к Modellsatz Jugendliche (MP4, 33 766 610 байт) | https://www.goethe.de/resources/files/mp468/b2_modellsatz_jugendliche1.mp4 | 200 |

Ссылку на аудио нашёл через страницу swiss-exams (официальный партнёр Goethe в Швейцарии), сам файл лежит на goethe.de. HTML-страницы goethe.de с Übungsmaterialien отдают 403 на curl и WebFetch.

### Аудио сверено с транскриптами (Whisper base, локально, 2026-10-01)
Весь файл расшифрован, реплики совпадают с [MS] S.38–41 (Romane, Wirtschaftswoche, Praktikum, Radfahrer, Neuhaus, Gerster/Lück, Kinigard «Bis zu 23 Minuten …»). Внутри файла уже есть все паузы и 5 минут на перенос в конце. Примерные отметки времени (Whisper, ±несколько секунд):

| Отметка | Что |
|---|---|
| 00:00 | инструкция к модулю, «Dazu haben Sie nach dem Modul Hören fünf Minuten Zeit.» |
| ~00:54 | Hören Teil 1 («Sie hören jeden Text einmal.») |
| ~07:50 | Hören Teil 2 («Sie hören den Text zweimal.»), повтор с ~13:27 |
| ~17:14 | Hören Teil 3 (один раз) |
| ~22:54 | Hören Teil 4 (два раза), повтор с ~28:45 |
| ~32:51 | «Schreiben Sie jetzt Ihre Lösungen auf den Antwortbogen. Dazu haben Sie fünf Minuten Zeit.» |
| ~38:20 | «Ende des Moduls Hören» |

## Формат и баллы

| Факт | Источник | Цитата |
|---|---|---|
| Модульная сдача, макс. 100 на модуль, порог 60 | [MS] S.5 | «In der Prüfung lassen sich maximal 100 Punkte pro Modul erreichen. Die Bestehensgrenze liegt bei 60 Punkten, also 60 Prozent.» |
| Modellsatz соответствует экзамену по типам заданий, числу заданий, времени | [MS] S.5 | «entspricht in Aufgabentypen, Itemzahl, Zeitvorgaben den Originalaufgaben» |
| Lesen: 5 частей, 9 + 6 + 6 + 6 + 3 = 30 заданий, 65 минут | [MS] S.6 (Überblick), S.7 | «Insgesamt 65 Minuten» |
| Lesen рекомендованное время: Teil 1 18, Teil 2 12, Teil 3 12, Teil 4 12, Teil 5 6 минут | [MS] S.8, 10, 12, 14, 16 | «vorgeschlagene Arbeitszeit: 18 Minuten» |
| Lesen: можно начинать с любой части, оценивается только Antwortbogen | [MS] S.7 | «Sie können mit jeder Aufgabe beginnen.» |
| Hören: 4 части, Teil 1 = 5 R/F + 5 MC, Teil 2 = 6, Teil 3 = 6, Teil 4 = 8 → 30; около 40 минут | [MS] S.6, S.17 | «circa 40 Minuten» |
| Hören: Teil 1 один раз, Teil 2 два раза, Teil 3 один раз, Teil 4 два раза | [MS] S.18–21 | «Sie hören jeden Text einmal.» / «Sie hören den Text zweimal.» |
| Hören: время на чтение заданий: пример Teil 1 15 с; Teil 2 90 с; Teil 3 60 с; Teil 4 90 с | [MS] S.18–21 | «Dazu haben Sie 90 Sekunden Zeit.» |
| Hören: 5 минут на перенос ответов в конце | [MS] S.17; [DB] S.5 | «Nach dem Hören haben Sie fünf Minuten Zeit, Ihre Lösungen auf den Antwortbogen zu übertragen.» |
| Lesen: около 5 минут на перенос внутри времени модуля | [DB] S.5 | «planen die Teilnehmenden circa 5 Minuten innerhalb der Prüfungszeit ein» |
| Lesen и Hören: 30 Items, 1 или 0 баллов, ×3,33, округление; 18 → 60, 17 → 57, 30 → 100 | [DB] S.8, §4.1 и §4.2 | «Dazu werden die erreichten Messpunkte mit 3,33 multipliziert und das Ergebnis jeweils gerundet» |
| Время модулей: Lesen 65, Hören ca. 40, Schreiben 75 | [DB] S.4, §1.4 | «HÖREN ca. 40 Minuten» |
| Модуль сдан от 60 | [DB] S.10, §6.3 | «Ein Modul ist bestanden, wenn mindestens 60 Punkte bzw. 60 % erreicht sind.» |
| Schreiben: 75 минут, Teil 1 форум (50 мин, ~150 слов), Teil 2 сообщение (25 мин, ~100 слов), обращение и прощание | [MS] S.23–24 | «Schreiben Sie circa 150 Wörter.» / «Vergessen Sie nicht Anrede und Gruß.» |
| Schreiben баллы: Teil 1 = 60 (14/14/16/16), Teil 2 = 40 (10/10/10/10); E по Aufgabenerfüllung → 0 за часть | [MS] S.46–47; уже в `research/kriterii-schreiben-goethe.md` | «ist die Punktzahl für diese Aufgabe insgesamt 0 Punkte» |
| Leistungsbeispiele: два аутентичных текста учеников уровня B2, ошибки не исправлены | [MS] S.48 | «Fehler wurden nicht korrigiert.» |
| Sprechen: Teil 1 доклад ~4 минуты на выбранную тему (1 из 2), потом вопросы партнёра и экзаменатора; Teil 2 дискуссия ~5 минут; подготовка 15 минут; заметки можно | [MS] S.25–27; [DB] §1.4, §3.2, §3.3 | «Sprechen Sie circa 4 Minuten.» / «Die Teilnehmenden dürfen ihre in der Vorbereitungszeit erstellten stichpunktartigen Notizen während des Moduls SPRECHEN verwenden.» |
| Sprechen баллы: Teil 1 32 + Fragen/Antworten 12, Teil 2 40, Aussprache 16 | [MS] S.50; уже в `research/kriterii-sprechen-goethe.md` | — |

## Официальные темы Schreiben и Sprechen (пересказ, не текст)
- Schreiben Teil 1 [MS] S.24: форум о загрязнении окружающей среды; 4 пункта: мнение о пластиковой упаковке в быту; причины, почему она так распространена; другие способы упаковки; преимущества других упаковок. Введение и заключение.
- Schreiben Teil 2 [MS] S.24: ты на практике в немецкой фирме, не успеваешь, пишешь начальнику (Herr Ebert); 4 пункта: попросить понимания; описать, чем занят; показать понимание ситуации в фирме; предложение на ближайшие дни. Порядок выбираешь сам.
- Sprechen Teil 1 [MS] S.26 (лист A): Thema 1 «Finanzierung des Studiums», Thema 2 «Gesund leben»; S.30 (лист B): «Freundschaften pflegen», «Ernährung am Arbeitsplatz».
- Sprechen Teil 2 [MS] S.27, 31: дебаты «Sollen Studierende ihre Professorinnen und Professoren beurteilen?»; опорные пункты: мотивация, качество занятий, справедливость, анонимность.
- [JUG] темы докладов: лист A «Schulgeld», «Gesund leben»; лист B «Freundschaften pflegen», «Essen in der Schule». Вместе с [MS] это 6 разных тем (в статье: «разных там шесть»). Задания в [JUG] на du («Du liest …», «Äußere deine Meinung …»); Lesen 65 и Hören 40 минут, как у взрослых ([JUG] S.6).
В статье образцы ответов полностью свои.

## Пояснения к спорным пунктам
- Lesen 20: в абзаце есть и мягкие оговорки (сайты о самопомощи «mit Vorsicht gelesen», анонимный обмен опытом с плюсом и минусом), но прямая опасность названа только про обещания исцеления («Betrug», «Gefahren»). Ключ a, в объяснении так и написано.
- Lesen 17: фраза о том, что после чтения жалобы ощущаются сильнее, это пример сомнений в качестве, а не отдельная позиция. Ключ a.
- Hören 17: ведущий тоже говорит «Finanziell kann sich das schon lohnen», но как общую оценку; причиной деньги называет только Gerster. Ключ b.

## Ключ ответов Lesen ([MS] S.35, «Lesen - Lösungen», отрендерено в PNG 220 dpi и прочитано глазами)

| № | Ответ | Часть | Проверка по тексту |
|---|---|---|---|
| 1 | d | Teil 1 | Nils: Auto «in erster Linie ein Fortbewegungsmittel» |
| 2 | a | Teil 1 | Erik: только нужные вещи, против «Besitz und Leistung» |
| 3 | a | Teil 1 | Erik веган; Franzi только «versuche» |
| 4 | d | Teil 1 | Nils: Innenstadt, Flussnähe, «Blick aufs Wasser» |
| 5 | c | Teil 1 | Franzi: «gut ... zu meiner Umwelt» |
| 6 | b | Teil 1 | Katharina: Bescheidenheit для тех, кто «sich nichts leisten können» |
| 7 | a | Teil 1 | Erik: Rucksack, Zelt, «ohne Kamera und Schnickschnack» |
| 8 | b | Teil 1 | Katharina: «Gesund kann, muss Essen aber nicht sein» |
| 9 | c | Teil 1 | Franzi: Urlaub = Sterne-Hotel, Reisen = Wanderungen |
| 10 | c | Teil 2 | медленная карета → 74 часа Мюнхен–Франкфурт → «Erst als die Eisenbahn …» |
| 11 | d | Teil 2 | всё по низкой общей цене → «Damit erfand … die erste Pauschalreise» |
| 12 | f | Teil 2 | 6 дней × 10 часов → 3 дня отпуска в год |
| 13 | a | Teil 2 | «Dort» = Berlin, München; бары, клубы, культура |
| 14 | e | Teil 2 | отели и дома с квартирами → «So entstand das typische Bild» |
| 15 | g | Teil 2 | «Diese Veränderungen» (дорогие кафе) → жители злятся |
| — | b, h | Teil 2 | лишние |
| 16 | c | Teil 3 | болезни, «über die viele nicht gerne sprechen» |
| 17 | a | Teil 3 | вопрос о «Qualität des Angebots» |
| 18 | c | Teil 3 | «lückenhafte Informationen» |
| 19 | a | Teil 3 | «Patienten können Ärzte später informiert fragen» |
| 20 | a | Teil 3 | «Versprechen auf Heilung sind Betrug» |
| 21 | b | Teil 3 | запрос e-mail, телефона, Krankengeschichte |
| 22 | c | Teil 4 | Inga: «wohin man gehört» |
| 23 | g | Teil 4 | Janice: Laptop, Smartphone, Tablet |
| 24 | h | Teil 4 | Katharina: «sein eigener Chef» → Selbstdisziplin |
| 25 | e | Teil 4 | Jan: «nur ohne Familie und Verantwortung» |
| 26 | f | Teil 4 | Sarah: Mittagspause, neuer Freundeskreis |
| 27 | b | Teil 4 | Eva: Leistung sinkt ohne Gespräch mit Experten |
| — | d | Teil 4 | Steven: лишний; a = Beispiel |
| 28 | f | Teil 5 | § 28 Hochschulreife, Sprachnachweise → Zugangsvoraussetzungen |
| 29 | d | Teil 5 | § 29 6 Semester, 180 LP, Teilzeit → Studiendauer und Studienvolumen |
| 30 | e | Teil 5 | § 30 V, Ü, Tut, S, P, Lernplattform → Vermittlungsformen |

Имена в Lesen Teil 1: a Erik, b Katharina, c Franzi, d Nils. Teil 4: a Amelie, b Eva, c Inga, d Steven, e Jan, f Sarah, g Janice, h Katharina.

## Ключ ответов Hören ([MS] S.37, «Hören - Lösungen», отрендерено и прочитано глазами; сверено с транскриптами S.38–41)

| № | Ответ | Часть | Проверка по транскрипту |
|---|---|---|---|
| 1 | Richtig | Teil 1 | «Warum liest du Romane?» |
| 2 | a | Teil 1 | «märchenhaften Welt», переживает с героями; про «Nachdenken» сказано о фильмах |
| 3 | Falsch | Teil 1 | речь о картах вместо наличных, не о Zahlungsmoral |
| 4 | c | Teil 1 | монеты и купюры всё реже |
| 5 | Falsch | Teil 1 | «Ich war ja in der Anwaltskanzlei», в суд только на Termine |
| 6 | b | Teil 1 | дела полезны «für mein Seminar in Verfassungsrecht» |
| 7 | Richtig | Teil 1 | безопасность велосипедистов |
| 8 | a | Teil 1 | «doch zu unpraktisch» |
| 9 | Falsch | Teil 1 | разговор о теме Referat, не о профессоре |
| 10 | a | Teil 1 | Referat = Präsentation |
| 11 | a | Teil 2 | «über die Folgen unserer Ernährung bewusst werden» |
| 12 | c | Teil 2 | больше людей «sich Fleisch leisten können» |
| 13 | b | Teil 2 | «Die Zubereitung kennt keine Grenzen.» |
| 14 | b | Teil 2 | «schon immer weit verbreitet» |
| 15 | a | Teil 2 | экономит воду; «sehr stromintensiv» |
| 16 | a | Teil 2 | Lebensqualität der Tiere; компьютер видит, сколько молока «gerade hat» |
| 17 | b | Teil 3 | Gerster: «nicht viel Geld» |
| 18 | b | Teil 3 | Moderator спрашивает, Gerster: «Klar, Rückzugsräume sind wichtig.» |
| 19 | b | Teil 3 | Gerster: «Mitbewohner und Vertraute für Gespräche» |
| 20 | a | Teil 3 | Moderator: «neu ist aber, dass selbst ältere Leute …» |
| 21 | c | Teil 3 | Lück: помощь соседей, «Das ist schon sehr praktisch.» |
| 22 | b | Teil 3 | последний ответ Gerster: «Rentenalter» |
| 23 | a | Teil 4 | «Bis zu 23 Minuten» после Störungen |
| 24 | b | Teil 4 | «Dinge, die nicht zu der eigentlichen Aufgabe gehören» |
| 25 | c | Teil 4 | «kostet Kraft» |
| 26 | c | Teil 4 | «leidet das Ergebnis stark» |
| 27 | a | Teil 4 | Adressen, Einkaufslisten aufschreiben |
| 28 | b | Teil 4 | «das empfinde ich als Wissenschaftler als richtig» |
| 29 | a | Teil 4 | «die besten und kreativsten Ideen» |
| 30 | a | Teil 4 | «Ablenkungen … gar nicht erst entstehen zu lassen» |

Расхождение имён: в заданиях Teil 3 [MS] S.20 «Frau Lücke», в транскрипте S.40 «Frau Lück» / «Emma Lück». В статье вариант c подписан как в задании.

Все 60 ответов совпали с моим пониманием текстов и транскриптов. Расхождений с ключом нет.

## Пересчёт (для калькулятора AnswerSheet)
AnswerSheet: `factor={3.33} maxPoints={100} pass={60}`, `Math.round(ok × 3,33)`. Совпадает с таблицей [DB] S.8 во всех точках: 30 → 99,9 → 100; 18 → 59,94 → 60; 17 → 56,61 → 57; 29 → 96,57 → 97.

## Не подтверждено / осторожно
- Официальной страницы goethe.de с перечнем материалов B2 (Übungsmaterialien) не открыл: 403. Ссылки на PDF и MP4 проверены напрямую.
- Аудиофайл датирован 2018, PDF обновлён в 2026. Тексты совпадают (транскрипт PDF = аудио), поэтому используем как пару.
- Онлайн-версия пишет в Schreiben «mindestens 150/100 Wörter», PDF пишет «circa». В статье: ориентир 150/100, не меньше.
