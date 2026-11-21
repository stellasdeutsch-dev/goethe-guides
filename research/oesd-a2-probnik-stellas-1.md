# Пробник Stellas ÖSD A2 №1: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-a2-probnik-stellas-1.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции.

## Формат и баллы
Основа: `research/oesd-a2.md` (DFB ZA2 10/2023, ключ Modellsatz), `research/probniki-oesd.md`, разбор `src/content/guides/oesd/probniki/oesd-a2-modellsatz-razbor.mdx`.

| Что | Значение | Источник |
|---|---|---|
| Lesen | 30 мин, Aufgabe 1: 10 заголовков A–K (без J) к 5 текстам, 3 балла за верный (макс. 15); Aufgabe 2: статья, пример + 5 вопросов A/B/C, 2 балла (макс. 10); всего 25, минимум 5 | research/oesd-a2.md; LV-PDF стр. 1–5 |
| Hören | ок. 15 мин, 30 баллов, минимум 6 | research/oesd-a2.md |
| Hören Aufgabe 1 | 2 текста одного содержания, 8 пунктов, 4 верных, звучат один раз; 4→10, 3→7, 2→4, 1→1, 0→0; 5 крестиков −3, больше 5 → 0 | HV-PDF стр. 1–2 |
| Hören Aufgabe 2 | сообщение, 5 записей, звучит два раза; 2 балла за запись; орфография и грамматика не учитываются; телефон только полностью верный | HV-PDF стр. 1–2 |
| Hören Aufgabe 3 | интервью, 5 человек × 5 колонок, несколько ответов, звучит один раз; строка 2/1/0, «alles oder nichts angekreuzt» → 0; ошибкой считается и лишний, и пропущенный крестик | HV-PDF стр. 1–2 |
| 30 секунд на чтение перед каждым Hören-заданием | «Sie haben 30 Sekunden Zeit» | HV-PDF стр. 1 |
| Schreiben | 30 мин, E-Mail другу, circa 50 Wörter, 4 вопроса, Gruß; начало ответа напечатано; макс. 15, минимум 3; TL от 40 слов без штрафа, меньше 26 → 0 | SA-PDF стр. 1–2; research/oesd-a2.md (Auswertungsbogen) |
| Sprechen | 10 мин подготовки, ок. 10 мин; пара или индивидуально; Aufgabe 1 «Sich vorstellen» 5 тем из 6; Aufgabe 2 «Gemeinsam eine Aufgabe lösen»; 3 + 3 + 5 + 4 + 5 = 20, минимум 10 | MA-PDF стр. 1–2; research/oesd-a2.md |
| Письменный модуль | ок. 75 мин без паузы; сдан от 35 из 70 при всех трёх минимумах; словарь нельзя | DFB 1.3, 1.4, 6.3 (research/oesd-a2.md) |

### Что проверено в официальных PDF 2026-11-21 (дополнение к research/oesd-a2.md)
Файлы скачаны с osd.at и прочитаны через `pdftotext` в папке сессии, на сайт не попадают.
- LV: https://osd.at/wp-content/uploads/2026/08/ZA2-Modellsatz-Homepage-LV.pdf. Инструкция Aufgabe 1: «Lesen Sie die 10 Überschriften … Pro Text gibt es nur eine richtige Lösung.» Под каждым текстом пометка источника: «[aus einer österreichischen Zeitung]», «[aus einer deutschen Zeitung]», «[aus einer Schweizer Zeitung]». Aufgabe 2: «Lesen Sie zuerst den Text … (A oder B oder C) … (siehe Beispiel)». Ключ стр. 5: «Jede Lösung wird gesondert bewertet, d. h., korrekte Lösungen werden auch dann als richtig gewertet, wenn eine Lösung (Buchstabe) mehr als einmal verwendet wurde.» Таблицы 5→15 … 1→3 и 5→10 … 1→2.
- HV (ZIP): https://osd.at/wp-content/uploads/2026/08/ZA2_Modellsatz_HV.zip. Инструкции заданий 1–3 и правила оценки, см. таблицу выше. Цитата к Aufgabe 3: «Jedes Kästchen in einer Zeile, das nicht mit dem Lösungsschlüssel übereinstimmt, gilt als falsch. Das betrifft sowohl angekreuzte als auch leer gelassene Kästchen.»
- Длительность официальных MP3 (ffprobe, без прослушивания): Aufgabe 1 155 с, Aufgabe 2 202 с, Aufgabe 3 265 с (вместе с инструкциями, паузами и повтором). По ним выбрана длина наших скриптов.
- SA: https://osd.at/wp-content/uploads/2021/06/ZA2-Modellsatz-SA.pdf. «Schreiben Sie circa 50 Wörter. Beantworten Sie alle Fragen … Schreiben Sie einen Gruß am Ende.» На Blatt 2 напечатано начало ответа.
- MA: https://osd.at/wp-content/uploads/2021/06/ZA2-Modellsatz-MA-1.pdf. Названия заданий «Sich vorstellen» и «Gemeinsam eine Aufgabe lösen», «Wählen Sie 5 Themen aus», «Bereiten Sie sich … vor, Sie haben 10 Minuten Zeit».

### Как бланки считают баллы
- Lesen: два бланка. `lesen-teil1` factor 3, max 15; `lesen-teil2` factor 2, max 10. Баллы точные, порог 5 из суммы объяснён в тексте (`pass` не ставится: порог на весь Lesen).
- Hören Aufgabe 1: 8 клеток ja/nein (factor 1, max 8), перевод в баллы ÖSD таблицей под бланком.
- Hören Aufgabe 2: 5 записей, выбор того, что записал на листке (3 варианта + «другое»), factor 2, max 10: точные баллы ÖSD.
- Hören Aufgabe 3: 25 клеток ja/nein (factor 1, max 25), перевод по строкам таблицей под бланком.
- Число клеток совпадает с листом ÖSD: 8 в задании 1, 5 записей в задании 2, 5 × 5 в задании 3. В бланках идут серии одинаковых «nein» внутри строк: так устроена таблица ÖSD (у человека 1–3 крестика из 5).

## Темы
- Lesen A1: ночные автобусы в Граце; бесплатный музей во Фрайбурге; опрос о кофейнях Вены; новый скалодром в Инсбруке; советы врачей зимой (Швейцария).
- Lesen A2: водитель обуса в Зальцбурге поёт для пассажиров.
- Hören A1: рождественская ярмарка в Штайре (радио + голосовое от подруги).
- Hören A2: бюро находок на вокзале Линца, забытый рюкзак.
- Hören A3: опрос «Wie kommen Sie zur Arbeit oder in die Schule?».
- Schreiben: друг Штефан приглашает на свадьбу в Мельке.
- Sprechen: темы Heimatstadt, Arbeit oder Schule, Lieblingsessen, Sport, Feiertage, Am Wochenende; планирование вечера настольных игр.
- Проверено на пересечения: Goethe A2 №1–2, telc A2 №1–3, DTZ №1–2, Modellsatz ZA2, гайды ÖSD A2 (lesen, hoeren, schreiben, sprechen). Каток и блошиный рынок заменены, потому что они есть в черновиках telc A2 №2–3.

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1 | F | 1 | B |
| 2 | I | 2 | C |
| 3 | H | 3 | A |
| 4 | B | 4 | C |
| 5 | D | 5 | A |

Неиспользованные заголовки: A, C, E, G, K. Пример Aufgabe 2: B.

## Ключ Hören
Aufgabe 1 (Der Adventmarkt im Schlosspark): отмечены Kinderchor, Kekse backen, geöffnet ab 11 Uhr, Punsch für Kinder. Не отмечены: Kutschenfahrten, Christbäume, geöffnet ab 15 Uhr, Krampuslauf.

Aufgabe 2 (Fundbüro): abholen ab Mittwoch · mitbringen Ausweis (Reisepass/Führerschein) · kostet 4 Euro · Mo–Fr bis 17 Uhr · Telefon 0732 / 86 15 40.

Aufgabe 3 (Auto · Bus · Straßenbahn · Fahrrad · zu Fuß):
| Строка | Ключ |
|---|---|
| 1. Sprecherin (Frau Lindner) | Straßenbahn, zu Fuß |
| 2. Sprecher (Herr Gruber) | Auto, Fahrrad |
| 3. Sprecherin (Mia) | zu Fuß |
| 4. Sprecher (Herr Wimmer) | Bus, Fahrrad |
| 5. Sprecherin (Frau Berger) | Bus, Straßenbahn |

## Проверка 2026-11-21
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: 5 + 5 Lesen, 8 + 5 + 25 Hören.
- Все цитаты «…» из `why` найдены дословно в текстах и скриптах страницы (скрипт сверки).
- Слепое решение по выписке без ключа: совпадение 48/48. До него переписан вариант C в Lesen A2 №1 (верный ответ был самым длинным).
- Образец письма: 61 слово без напечатанного начала.
