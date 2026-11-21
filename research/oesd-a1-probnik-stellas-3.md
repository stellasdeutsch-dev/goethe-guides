# Пробник Stellas ÖSD A1 №3: ключ и факты

Статья: `src/content/guides/oesd/probniki/oesd-a1-probnik-stellas-3.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны командой Stellas. Из материалов ÖSD взят только формат и короткие стандартные инструкции.
Бланки: `oesd-a1-stellas-3-lesen`, `oesd-a1-stellas-3-hoeren`; тренажёр `oesd-a1-stellas-3-schreiben`.

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
| 1A | 3 | «für Samstag und Sonntag» (6 = Samstag, поездка) |
| 1B | 2 | «Mathe-Nachhilfe» |
| 1C | 5 | «Kurse für junge Hunde und ihre Besitzer» (6 = собаки едут в автобусе) |
| 1D | 1 | «Über 500 Spiele», «Täglich 16 bis 24 Uhr» |
| 1E | 4 | «Tag und Nacht» (6 = «Abfahrt 5 Uhr früh», Венеция) |
| лишнее | 6 | автобусный тур: ловит A, C, E |
| 2.1 | JA | «Ab 16 Jahren» |
| 2.2 | NEIN | «7–13 Uhr» |
| 2.3 | JA | «nur 1,49 Euro statt 2,29 Euro» |
| 2.4 | NEIN | «Samstag 7–18 Uhr» |
| 2.5 | NEIN | «schon am Mittwoch» |
| 2.6 | JA | «zwischen 8 und 12 Uhr» |
| 3A | 5 | очередь за линией у окошка |
| 3B | 3 | кулёк жареных каштанов |
| 3C | 1 | фотоаппарат в красном круге (4 без круга, лишняя) |
| 3D | 2 | руки под краном |
| 3E | 6 | поднос |

Баланс JA/NEIN 3/3, серий 4+ нет.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1.1 | B (банкомат) | «der Bankomat nimmt meine Karte nicht» |
| 1.2 | D (снег) | «So viel Schnee», «deine Schaufel» |
| 1.3 | F (пикник) | «Die Wiese hier ist schön» (ловушка C: «dein Hut») |
| 1.4 | A (школьный автобус) | «der Bus kommt!», «Nach der Schule» |
| 1.5 | E (мытьё окон) | «Ich putze innen, und du putzt außen» |
| лишнее фото | C | шляпа в магазине |
| 2.1 | Montag | Samstag → «Ach nein» → Montag |
| 2.2 | 3. (Juni) | «am dritten Juni» |
| 2.3 | 16.30 | «halb fünf, also … sechzehn Uhr dreißig» |
| 2.4 | Kleistgasse | «K, L, E, I, S, T» |
| 2.5 | 0676 / 825 60 93 | «acht zwei fünf, sechs null, neun drei» |
| 3.1 | im Internet | «Im Internet. Das geht schnell» |
| 3.2 | auf dem Markt | «Auf dem Markt, am Samstag» |
| 3.3 | im Einkaufszentrum | «Im Internet? Nein …» → Einkaufszentrum |
| 3.4 | im Supermarkt | «fast alles im Supermarkt» |
| 3.5 | im Internet | «Früher … auf dem Markt» → «Jetzt bestelle ich alles im Internet» |

## Schreiben Aufgabe 1 (10 решений)
Vorname Arman · Geburtsdatum 21.06.1987 · Wohnort Wels · Beruf Koch · Beginn September · Sportart Volleyball + Tischtennis (2) · Training am Vormittag · Mitgliedschaft ein halbes Jahr · Bezahlung Überweisung.
Schreiben Aufgabe 2: образец 35 слов без напечатанного начала и подписи.

## Темы
- Lesen 1: работа официантом на выходных, репетитор по математике, школа для собак, кафе настольных игр, такси в аэропорт ночью; лишнее: автобусный тур в Венецию.
- Lesen 2: летняя подработка в парках Линца, акция и часы магазина, приход трубочиста (ключ накануне).
- Lesen 3: очередь на почте, жареные каштаны, не фотографировать в музее, мыть руки, поднос в столовой.
- Hören 1: банкомат, чистка снега, пикник, школьный автобус, мытьё окон; лишнее: шляпный магазин.
- Hören 2: просмотр квартиры (Kleistgasse).
- Hören 3: где любите делать покупки.
- Schreiben: спортклуб для взрослого; письмо подруге о новой работе.
- Sprechen: Arbeit · Einkaufen · Feste · Wetter · Lieblingsort · Kochen; фото: турагентство, магазин игрушек, магазин техники; сценка в турагентстве.

## Проверка пересечений тем
Сверено 2026-11-21 с Goethe A1 №1–5, telc A1 №1–3, Modellsatz ZA1. Заменены пересекавшиеся темы: детская одежда б/у, записка «нет воды», клубника, стадион, запись ребёнка в лагерь с плаванием, оптика, название и цена магазина «Frisch 1,99».
