# Пробник Stellas ÖSD A1 №5: ключ и факты

Статья: `src/content/guides/oesd/probniki/oesd-a1-probnik-stellas-5.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны командой Stellas. Из материалов ÖSD взят только формат и короткие стандартные инструкции.
Бланки: `oesd-a1-stellas-5-lesen`, `oesd-a1-stellas-5-hoeren`; тренажёр `oesd-a1-stellas-5-schreiben`.

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
| 1A | 2 | «Aus Ihrem Obst machen wir frischen Saft» (5 = «verkaufen wir auch Äpfel») |
| 1B | 5 | «Trockenes Holz für Ihren Ofen» (1 = мебель из дерева) |
| 1C | 3 | «Spielabend jeden Dienstag», «Gäste sind herzlich willkommen» |
| 1D | 4 | «Ich fahre jeden Freitag», «nur 15 Euro für das Benzin» (1 = «auch nach Wien», доставка) |
| 1E | 6 | «Kinder ab 4 Jahren lernen bei uns Rad fahren, ganz ohne Stützräder» |
| лишнее | 1 | столярная мастерская: ловит B и D |
| 2.1 | JA | «Kinder mit Kostüm bekommen einen Krapfen gratis!» |
| 2.2 | JA | закрыто «von 12 bis 18 Uhr», в 11 ещё можно |
| 2.3 | NEIN | «Keine Elektrogeräte!» |
| 2.4 | JA | «für Pensionistinnen und Pensionisten 10 Euro» |
| 2.5 | NEIN | «Nur kalte Speisen» |
| 2.6 | NEIN | «Montag geschlossen» |
| 3A | 5 | знак с бегущими детьми |
| 3B | 1 | тележки в ряд |
| 3C | 4 | сиденье со значком (6 = пожилой на зебре, лишняя) |
| 3D | 2 | бумажка в урну |
| 3E | 3 | телефон у розетки |

Баланс JA/NEIN 3/3 (JA JA NEIN JA NEIN NEIN), серий 4+ нет.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1.1 | E (глажка) | «das Bügeleisen ist sehr heiß!» (ловушка: разговор с шефом завтра) |
| 1.2 | C (воздушный змей) | «wie hoch der Drachen fliegt!» (ловушка F: «die vielen Blätter auf der Wiese») |
| 1.3 | A (сказка на ночь) | «Es war einmal ein kleiner Bär» |
| 1.4 | D (кроссворд) | «Eine Stadt in Österreich mit fünf Buchstaben?» |
| 1.5 | B (заказ пиццы) | «Ich möchte zwei Pizzen bestellen, bitte» |
| лишнее фото | F | сгребание листьев |
| 2.1 | Dienstag | запись с понедельника по среду, «Ihr Termin ist am Dienstag» |
| 2.2 | 13. (Jänner) | «am dreizehnten Jänner. Ich wiederhole, am dreizehnten» |
| 2.3 | 8.15 Uhr | «um Viertel nach acht, also um acht Uhr fünfzehn» |
| 2.4 | Rögergasse | «R, O Umlaut, G, E, R» |
| 2.5 | 01 / 427 16 90 | «vier zwei sieben, eins sechs, neun null» |
| 3.1 | Handy | «mit einer App auf dem Handy» (ловушка: музыка) |
| 3.2 | Bücher | «am liebsten mit Büchern» |
| 3.3 | Lieder | «am liebsten mit Liedern» |
| 3.4 | Gespräche | «Meine Frau lernt mit Büchern. Ich nicht», «Ich spreche lieber» |
| 3.5 | Handy | «am liebsten lerne ich mit dem Handy» (ловушка: тексты на курсе) |

## Schreiben Aufgabe 1 (10 решений)
Vorname Daniyar · Wohnort Dornbirn · Telefon 0664 / 25 81 930 · Datum Samstag, 18. Juli · Karten Erwachsene 2 · Karten Kinder 1 · Platz Mitte · Extras Sitzkissen + Programmheft (2) · Bezahlung bar an der Kassa.
Schreiben Aufgabe 2: образец 33 слова без напечатанного начала, прощания и подписи.

## Темы
- Lesen 1: Mosterei, дрова для печи, шахматный клуб, попутчик до Вены, курс езды на велосипеде для детей; лишнее: столярная мастерская.
- Lesen 2: Faschingsumzug, вывоз крупного мусора (Sperrmüll), Heuriger.
- Lesen 3: играют дети (медленно), вернуть тележку, место для пожилых, Mistkübel, зарядка телефона.
- Hören 1: глажка, воздушный змей, сказка на ночь, кроссворд с дедушкой, заказ пиццы; лишнее: сгребание листьев.
- Hören 2: Schuleinschreibung в Volksschule (Rögergasse).
- Hören 3: как вы больше всего любите учить новые слова.
- Schreiben: заказ билетов на Seebühne Bregenz; письмо подруге о новой машине.
- Sprechen: Hobbys · Nachbarn · Verkehrsmittel · Obst und Gemüse · Schlafen · Spiele; фото: Drogerie, Stadtinformation, часовой магазин; сценка в Drogerie.

## Проверка пересечений тем
Бронь: `scratchpad/topics/oesd-a1.md`. Сверено 2026-11-21 с ÖSD A1 №1–4, Goethe A1 №1–5, telc A1 №1–3, ÖSD A2 №1–3, Modellsatz ZA1 и бронями telc-a1 (№4–5), oesd-a2 (№4–5), telc-a2 (№5–6), записанными раньше. Заменены до текста: маляры (покрасить комнату), ремонт телевизоров, садовый центр, автомат для бутылок, табличка про кошку, общественный сад, тема Natur, визит подруги в Вену.

## Проверки
- `node scripts/check-mdx.mjs` → ✓. `python3 scripts/answers.py` → Lesen 16, Hören 15.
- `python3 -I scripts/audit-mocks.py` → ✓ (все цитаты из why найдены, серий нет, id и тексты аудио уникальны на сайте).
- Слепое решение независимым агентом не получилось (лимит параллельных агентов). Решено автором заново по выжимке без ключа (`scratchpad/oesd-a1-author/blind-5.md`): 31 из 31 совпали. По итогам переписан 2.5: «Kalte Speisen» → «Nur kalte Speisen», иначе NEIN выводился только из отсутствия информации. В Hören 1.3 «Dann wird geschlafen» заменено на «Dann musst du schlafen» (пассив выше A1).
- Озвучка не запускалась.
