# Пробник Stellas ÖSD A1 №1: ключ и факты

Статья: `src/content/guides/oesd/probniki/oesd-a1-probnik-stellas-1.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны командой Stellas. Из материалов ÖSD взят только формат и короткие стандартные инструкции.
Бланки: `oesd-a1-stellas-1-lesen`, `oesd-a1-stellas-1-hoeren`; тренажёр `oesd-a1-stellas-1-schreiben`.

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
| 1A | 6 | «Feiern Sie bei uns!», Geburtstagspaket (3 = Gutscheine, ловушка) |
| 1B | 4 | «Unsere Lehrlinge schneiden Ihre Haare», «Haarschnitt nur 8 Euro» |
| 1C | 2 | «Wir geben sie Familien mit wenig Geld» |
| 1D | 1 | до 22 Uhr, «Eislaufschuhe zum Leihen» (3 продаёт коньки) |
| 1E | 5 | «Warmes Wasser, drei Saunen und eine große Liegewiese» (3 = Badeanzüge) |
| лишнее | 3 | Sporthaus: ловит A, D, E |
| 2.1 | JA | «Am 24. Dezember: 10–14 Uhr» |
| 2.2 | NEIN | «gratis» |
| 2.3 | NEIN | «nur telefonisch» |
| 2.4 | JA | «um 10 Uhr», 2 часа |
| 2.5 | NEIN | «Samstag 9–12 Uhr» |
| 2.6 | JA | «bis 18 Jahre: gratis» |
| 3A | 5 | утка и хлеб в красном круге |
| 3B | 3 | кран и стакан в красном круге |
| 3C | 6 | велосипеды в стойке (1 = запрет, лишняя) |
| 3D | 2 | скамейка, кисть, краска |
| 3E | 4 | вешалка |

Баланс JA/NEIN 3/3, серий 4+ нет.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1.1 | B (переезд) | «die Stiege ist sehr eng», коробка книг |
| 1.2 | F (счёт в ресторане) | «zahlen, bitte!», «Zusammen oder getrennt?» |
| 1.3 | D (приёмная врача) | «Ihre e-card, bitte» (ловушка E: «Mein Zug hatte Verspätung») |
| 1.4 | A (ёлка) | «die Kugeln für den Christbaum» (ловушка B: «Im Karton») |
| 1.5 | C (горка) | «Ich rutsche ganz allein!» (ловушка E: «zum Bahnhof») |
| лишнее фото | E | автомат на вокзале |
| 2.1 | Donnerstag | Mittwoch отменён |
| 2.2 | 9. (Oktober) | «am neunten Oktober» |
| 2.3 | 11 (Uhr) | «um zehn» → «Nein, Entschuldigung … um elf» |
| 2.4 | Kandlgasse | «K, A, N, D, L» |
| 2.5 | 01 / 523 47 18 | «fünf zwei drei, vier sieben, eins acht» |
| 3.1 | Sommer | «Den Sommer, ganz klar» |
| 3.2 | Herbst | «Ich nicht, mir ist es dann zu heiß» → Herbst |
| 3.3 | Winter | «Also natürlich den Winter!» |
| 3.4 | Frühling | Winter «zu kalt und zu dunkel» |
| 3.5 | Herbst | «Früher war das der Winter» → «Jetzt … den Herbst» |

## Schreiben Aufgabe 1 (10 решений)
Vorname Kemal · Geburtsdatum 03.05.1998 · Wohnort Linz · Monat Jänner · Können Anfänger · Kurs Gruppenkurs · Ski leihen Ja · Abendprogramm Rodeln + Sauna (2) · Bezahlung bar.
Schreiben Aufgabe 2: образец 35 слов без напечатанного начала и подписи.

## Темы
- Lesen 1: детский праздник в игровом зале, стрижка в школе парикмахеров, сбор одежды при приходе, каток с прокатом, термы; лишнее: спортмагазин.
- Lesen 2: адвент-рынок (24 декабря), экскурсия по старому Грацу, районная библиотека (часы, билет).
- Lesen 3: не кормить уток, не питьевая вода, парковка велосипедов, свежая краска, гардероб музея.
- Hören 1: переезд, счёт в ресторане, приёмная врача (e-card), украшение ёлки, детская площадка; лишнее: билетный автомат.
- Hören 2: языковая школа, тест перед курсом (Kandlgasse).
- Hören 3: любимое время года.
- Schreiben: курс лыж в Шладминге; письмо подруге о новой квартире.
- Sprechen: Wohnort · Tagesablauf · Freunde · Musik · Kleidung · Wochenende; фото: касса кино, прокат велосипедов, магазин телефонов; сценка в кассе кино.

## Проверка пересечений тем
Сверено 2026-11-21 с: Goethe `stellas-probnik-a1-1…5`, telc `telc-a1-probnik-stellas-1…3` (research-файлы с темами), официальным Modellsatz ZA1. После появления telc A1 №1–3 и Goethe A1 №3–5 заменены пересекавшиеся темы: языковое кафе, гостиница для собак, блошиный рынок во дворе, воскресный завтрак, фото на паспорт, кулинарный курс, булочки в пекарне.
