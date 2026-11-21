# Пробник Stellas ÖSD A1 №4: ключ и факты

Статья: `src/content/guides/oesd/probniki/oesd-a1-probnik-stellas-4.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны командой Stellas. Из материалов ÖSD взят только формат и короткие стандартные инструкции.
Бланки: `oesd-a1-stellas-4-lesen`, `oesd-a1-stellas-4-hoeren`; тренажёр `oesd-a1-stellas-4-schreiben`.

## Формат и баллы (откуда)

Все цифры формата и баллов взяты из `research/oesd-a1.md` (DFB ZA1 10/2023, Gesamtbogen 3.0, Auswertungsbögen, ключ Modellsatz) и `research/probniki-oesd.md`. Пробелы закрыты по официальным PDF Modellsatz ZA1 (osd.at), проверено 2026-11-21:

- Lesen: https://osd.at/wp-content/uploads/2026/08/ZA1-Modellsatz-Homepage-LV-1.pdf
- Hören (ZIP, PDF внутри): https://osd.at/wp-content/uploads/2026/08/ZA1_Hoeren_MS_Subtest.zip
- Schreiben: https://osd.at/wp-content/uploads/2026/08/ZA1-Modellsatz-Homepage-SA-1.pdf
- Sprechen: https://osd.at/wp-content/uploads/2026/08/ZA1-Modellsatz-Homepage-MA-1.pdf

| Факт | Источник / цитата |
|---|---|
| Lesen 25 мин, Hören ca. 10, Schreiben 20, письменный модуль ca. 55 мин без паузы | research/oesd-a1.md (DFB 1.4) |
| Lesen 16 Items / 30 баллов; Hören 15 Items / 30 баллов | DFB: «Im Subtest LESEN gibt es 16 Items … 30 Punkte», «Im Subtest HÖREN gibt es 15 Items … 30 Punkte» |
| Lesen A1: 5 ситуаций A–E, 6 объявлений, одно лишнее | LV-PDF: «Achtung: Eine Anzeige ist zu viel.» |
| Lesen A2: 3 объявления, по 2 вопроса JA/NEIN (вопросы в форме «Kann man …?») | LV-PDF: «Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.» |
| Lesen A3: 5 текстов A–E, 6 картинок, одна лишняя | LV-PDF: «Achtung: Ein Bild ist zu viel.» |
| Баллы Lesen: A1 и A3 по 2 за верный; A2 таблица 6→10, 5→8, 4→6, 3→4, 2→2, 1–0→0 | research/oesd-a1.md (ключ Modellsatz) |
| Hören A1: 5 текстов к 6 фото, один раз, одно фото лишнее, 30 с на фото | HV-PDF: «Sie hören jeden Text ein Mal.», «Achtung: Ein Bild ist zu viel.», «Sie haben 30 Sekunden Zeit.» |
| Hören A1: баллы только за верно подписанные фото | HV-PDF: «Für das richtige Erkennen des Bildes ohne Text gibt es keine Punkte.» |
| Hören A2: сообщение, Notizen (Was = пример; день, дата, время, улица по буквам, телефон), два раза, 30 с на чтение | HV-PDF: «Sie hören den Text zwei Mal.», «Lesen Sie Aufgabe 2 gut durch. Sie haben 30 Sekunden Zeit.» |
| Hören A2: орфография не считается, буквы и телефон только полностью верно | HV-PDF: «Grammatik- und Orthografiefehler werden nicht berücksichtigt. Buchstabierte Angaben und die Telefonnummer müssen … komplett richtig sein» |
| Hören A3: 5 человек, один раз, один ответ на человека, 10 с на чтение | HV-PDF: «Pro Person gibt es nur eine Antwort. Sie hören die Texte ein Mal.», «Sie haben 10 Sekunden Zeit.» |
| Hören: 2 балла за верный ответ во всех трёх заданиях | HV-PDF: таблицы 5→10 … 1→2 |
| Schreiben A1: формуляр за друга, 10 решений → 5 баллов (10→5, 9–8→4, 7–6→3, 5–4→2, 3–2→1, 1–0→0) | SA-PDF, research/oesd-a1.md |
| Schreiben A2: ответ на e-mail, ca. 30 слов, 3 вопроса, грусс; обращение и первая строка напечатаны | SA-PDF: «Schreiben Sie circa 30 Wörter. Beantworten Sie alle Fragen … Schreiben Sie am Ende einen Gruß.» |
| Schreiben A2: L 4, F 4, K 1, T 1; A и TL 0/−1/−2; меньше 15 слов = 0 | research/oesd-a1.md (Auswertungsbogen 6.0) |
| Минимумы: Lesen 6, Hören 6, Schreiben 4; письменный 38/75; устный 12/25 | research/oesd-a1.md (Gesamtbogen, DFB 6.3) |
| Оценки: письм. 75–66 / 65–56 / 55–38; устн. 25–22 / 21–19 / 18–12 | research/oesd-a1.md (DFB 6.2) |
| Sprechen: 10 мин подготовки, ca. 10 мин; A1 4 темы из 6, A2 1 фото из 3 по 4 вопросам, A3 ролевая игра по выбранному фото; 4+4+4+5+4+4 = 25 | MA-PDF, research/oesd-a1.md |
| Заметки с подготовки разрешены (stichwortartig) | DFB: «stichwortartigen Notizen während des Moduls Mündliche Prüfung verwenden» |

## Как устроены бланки (решения автора)

- `AnswerSheet` Lesen: `factor={2} maxPoints={30} pass={6}`. Таблицу задания 2 одним коэффициентом не выразить, поэтому на странице Callout: если не все 16 верны и в задании 2 есть хотя бы один верный ответ, из итога бланка вычесть 2. Так же сделано в `oesd-a1-modellsatz-razbor.mdx`.
- `AnswerSheet` Hören: 15 заданий, `factor={2} maxPoints={30} pass={6}` (линейно, как в ключе).
- Hören A1 в бланке развёрнут как в разборе Modellsatz: к каждому тексту выбирается буква фото (в оригинале номер текста пишут под фото). Смысл тот же, 5 баллуемых ответов.
- Hören A2 на экзамене это записи от руки. На странице Notizen с пропусками, кандидат пишет на листке, а в бланке выбирает свою запись из 3 вариантов (как в `oesd-c1-probnik-stellas-1.mdx` и `telc-a2-probnik-stellas-1.mdx`). Нет своего варианта = оставить пустым.
- Фото и картинки (Hören A1, Lesen A3, Sprechen A2) описаны по-русски, чтобы не давать немецкие слова-подсказки.


Дата: 2026-11-21.

## Ключ Lesen
| № | Ответ | Доказательство |
|---|---|---|
| 1A | 3 | «Wir reparieren gemeinsam mit Ihnen», «Mitmachen ist gratis» (5 = «Kaffee und Kuchen») |
| 1B | 5 | «Sie können es noch nicht? Wir zeigen es Ihnen!» (4 = Wolle продают) |
| 1C | 1 | «Reitstunden für Kinder von 7 bis 14 Jahren» |
| 1D | 6 | «Diese Schwammerl kann man essen, diese nicht» (4 = Schwammerl продают) |
| 1E | 2 | «Dann gieße ich Ihre Pflanzen und hole Ihre Post aus dem Briefkasten» |
| лишнее | 4 | фермерский рынок: ловит B и D |
| 2.1 | JA | «Ab 17 Uhr: Tee und Lebkuchen», шествие с 18 |
| 2.2 | NEIN | «Für Kinder unter 6 Jahren ist der Krampuslauf zu laut und zu wild!» |
| 2.3 | NEIN | «alle Personen von 18 bis 70 Jahren» |
| 2.4 | JA | «Bitte vergessen Sie Ihren Ausweis nicht!» |
| 2.5 | JA | «so oft Sie möchten» |
| 2.6 | NEIN | «nur von Mai bis September» |
| 3A | 4 | нога на газоне в красном круге |
| 3B | 6 | строительная каска |
| 3C | 2 | выключатель и лампочка |
| 3D | 1 | коровы за воротами («Tor immer schließen»; 3 = корова на дороге, лишняя) |
| 3E | 5 | подставка для зонтов |

Баланс JA/NEIN 3/3 (JA NEIN NEIN JA JA NEIN), серий 4+ нет.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1.1 | D (Würstelstand) | «Eine Käsekrainer, bitte» (ловушка F: «beim Riesenrad») |
| 1.2 | A (сборка полки) | «die Schraube Nummer vier», «das Regal» |
| 1.3 | F (фото у Riesenrad) | «ein Foto von uns machen», «Das Riesenrad soll auch auf dem Foto sein» |
| 1.4 | B (рыбалка) | «wann kommt denn endlich ein Fisch?» |
| 1.5 | E (чемодан) | «jetzt geht der Koffer nicht mehr zu!» (ловушка C: «mit dem Auto los») |
| лишнее фото | C | замена колеса |
| 2.1 | Mittwoch | Dienstag был в старом плане |
| 2.2 | 18. (Februar) | «Nicht am achten, am achtzehnten» |
| 2.3 | 19 (или 7) Uhr | «um sieben, also um neunzehn Uhr» (ловушка: halb sieben = кофе) |
| 2.4 | Zollergasse | «Z, O, L, L, E, R»; собрание в офисе, не в доме |
| 2.5 | 0676 / 309 25 80 | «drei null neun, zwei fünf, acht null» |
| 3.1 | Tee | «Aber am liebsten trinke ich Tee» |
| 3.2 | Wasser | «darum trinke ich am liebsten Wasser» |
| 3.3 | Saft | «Ich trinke am liebsten Apfelsaft» |
| 3.4 | Wasser | официант варит кофе, сам «trinke lieber Wasser» |
| 3.5 | Kaffee | «am liebsten habe ich meinen Kaffee mit viel Milch» |

## Schreiben Aufgabe 1 (10 решений)
Vorname Nilufar · Geburtsdatum 14.08.1995 · Wohnort Hall in Tirol · Kurstag Samstag · Uhrzeit Nachmittag · Töpfern schon einmal gemacht · Das möchte ich machen Tassen + Vasen (2) · Ton kaufen Ja · Bezahlung Überweisung.
Schreiben Aufgabe 2: образец 35 слов без напечатанного начала, прощания и подписи.

## Темы
- Lesen 1: Reparaturcafé, Stricktreff, конюшня (уроки верховой езды), прогулка за грибами с лесничим, студентка присматривает за квартирой; лишнее: фермерский рынок.
- Lesen 2: Krampuslauf, донорская акция в школе, выходной билет вымышленной Seenlandbahn.
- Lesen 3: газон, каска на стройке, выключить свет, ворота пастбища, подставка для зонтов.
- Hören 1: Würstelstand, сборка полки, фото туристов у Riesenrad, рыбалка, сборы чемодана; лишнее: замена колеса.
- Hören 2: Hausverwaltung, собрание жильцов (Zollergasse).
- Hören 3: что вы больше всего любите пить.
- Schreiben: курс керамики в VHS Innsbruck; письмо другу о поездке в Hallstatt.
- Sprechen: Fernsehen · Farben · Lieblingstag · Bücher · Frühstück · Fahrrad; фото: кондитерская, билетная касса, канцтовары; сценка в кондитерской.

## Проверка пересечений тем
Бронь: `scratchpad/topics/oesd-a1.md`. Сверено 2026-11-21 с ÖSD A1 №1–3, Goethe A1 №1–5, telc A1 №1–3, ÖSD A2 №1–3, Modellsatz ZA1 и бронями telc-a1 (№4–5), oesd-a2 (№4–5), telc-a2 (№5–6), записанными раньше. Заменены до текста: ателье (укоротить брюки), хор, собеседование, Meldeservice (похоже на Bürgeramt), театральная группа, сапожник, бюро переводов, Wiener Ferienspiel, тема Sport, магазин Trafik.

## Проверки
- `node scripts/check-mdx.mjs` → ✓. `python3 scripts/answers.py` → Lesen 16, Hören 15.
- `python3 -I scripts/audit-mocks.py` → ✓ (все цитаты из why найдены, серий нет, id и тексты аудио уникальны на сайте).
- Слепое решение независимым агентом не получилось (лимит параллельных агентов). Решено автором заново по выжимке без ключа (`scratchpad/oesd-a1-author/blind-4.md`): 31 из 31 совпали. По итогам переписан 1A: в объявлении 3 убрано слово Kaffeemaschine, чтобы ответ не находился по совпадению слова.
- Озвучка не запускалась.
