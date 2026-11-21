# Разбор бумажного TestDaF Modelltest 02: ключ и источники

Проверено 2026-11-21. Аудио не воспроизводилось.

## Источники (все © g.a.s.t. 2020, страница https://www.testdaf.de/de/teilnehmende/der-papierbasierte-testdaf/vorbereitung-auf-den-papierbasierten-testdaf/modelltests/)
Префикс: https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/Modelltest_2/
- Lesen/Modelltest_02_Einleitung.pdf, Lesen/Modelltest_02_LV_Heft.pdf (12 с.), Lesen/Modelltest_02_LV_Loesungen.pdf (1 с.)
- Hoeren/Modelltest_02_HV_Heft.pdf, Hoeren/Modelltest_02_HV_Loesungen.pdf (2 с.), Hoeren/Modelltest_02_HV_Transkription.pdf, Hoeren/Ton_MS02_HV_final.mp3 (20,0 МБ, 37:16 по ffprobe)
- Schreiben/Modelltest_02_SA_Heft.pdf (8 с.)
- Sprechen/Modelltest_02_MA_Heft.pdf (20 с.), Sprechen/MS02_MA_Tonaufnahme.mp3 (16,2 МБ, 33:25), Sprechen/Modelltest_02_MAMS_Heft.pdf, Sprechen/Modelltest_02_MA_Redestimuli.pdf
- [HT2] Hinweise und Tipps zu Modelltest 02 (86 с.): https://www.testdaf.de/fileadmin/testdaf/downloads/Modelltests_papierbasierter_TestDaF/HinweiseTipps/Hinweise-und-Tipps_zu-Modelltest_02.pdf

## Как сверял ключ
- LV: рендер LV_Loesungen с. 1 глазами + скрипт по темноте клеток. Совпали все 30.
- HV Hörtext 2: рендер HV_Loesungen с. 1 + скрипт. Совпали все 10.
- HV Hörtext 1 и 3: `pdftotext -layout` HV_Loesungen с. 1–2 + [HT2] с. 32–35, 46–51.
- Ключи MT1 и MT2 разные (файлы LV_Loesungen отличаются по md5, ответы другие).

## Факты для статьи
- Формат и время те же, что в MT1 (см. research/testdaf-modelltest-1-razbor.md). Время HV по [HT2]: 45 с / 30 с (с. 31), 85 с / 30 с (с. 39), 75 с / 60 с + 80 с (с. 45).
- HV п. 6: «Radrennen allein geht nicht. Entweder die Distanz muss genannt werden oder die Mannschaft.» [HV_Loesungen с. 1]
- В HV п. 4 в ключе только причины про билеты (дешевле, нет дешёвых билетов на пятницу). В аудио есть ещё фраза про то, что можно заранее проехать трассы; в ключе её нет. В бланке её не даём ни верным, ни неверным вариантом.
- SA: тема «Forschung oder Lehre», 60 мин, графики до 20 мин, аргументация до 40 [SA_Heft с. 3, 5]. Пункты: описать оба графика, пересказать обе позиции своими словами, своё мнение, ситуация в своей стране.
- SA графики (на глаз и по [HT2] с. 59): расходы на исследования примерно 21–22 млрд USD (2006) → чуть больше 30 (2012); на одного преподавателя 15,5 студента (2006), около 15 (2008, 2010), почти 16 (2012).
- В [HT2] с. 59 в образце описания стоит «Millionen US-Dollar», а на графике «Milliarden US-Dollar». Это опечатка в образце.
- MA: время (подготовка / ответ): 1: 30 с / 30 с; 2: 1 мин / 1 мин; 3: 1 мин / 1:30; 4: 3 мин / 2 мин; 5: 2 мин / 1:30; 6: 3 мин / 2 мин; 7: 1:30 / 1:30 [MA_Heft с. 5–17].
- MA графики (на глаз): задание 3 (2014): вечером самозанятые ок. 37 %, наёмные ок. 25 %; ночью ок. 5 % и ок. 9 %; по субботам ок. 42 % и ок. 24 %; в воскресенье и праздники ок. 22 % и ок. 14 %. Задание 6 (опрос учителей 2015): хотят использовать электронные медиа ок. 95 %, реально используют ок. 35 %.

## Ключ Leseverstehen (LV_Loesungen с. 1)
| № | Ответ | | № | Ответ | | № | Ответ |
|---|---|---|---|---|---|---|---|
| 1 | E | | 11 | B | | 21 | Text sagt dazu nichts |
| 2 | I | | 12 | A | | 22 | Nein |
| 3 | G | | 13 | B | | 23 | Nein |
| 4 | F | | 14 | A | | 24 | Ja |
| 5 | I | | 15 | C | | 25 | Nein |
| 6 | I | | 16 | A | | 26 | Ja |
| 7 | H | | 17 | A | | 27 | Text sagt dazu nichts |
| 8 | D | | 18 | A | | 28 | Ja |
| 9 | B | | 19 | B | | 29 | Text sagt dazu nichts |
| 10 | C | | 20 | C | | 30 | Ja |

## Ключ Hörverstehen
| № | Ответ | Где |
|---|---|---|
| 1 | Radrennen / (Deutsche) Hochschulmeisterschaften (im Radsport) | HV_Loesungen с. 1 |
| 2 | er arbeitet an der Hochschule / in der Hochschulverwaltung | с. 1 |
| 3 | 100 km in 2 ½ Stunden / reicht nicht zum Sieg (aber für guten Platz) | с. 1 |
| 4 | zahlt die Hälfte / keine günstigen Fahrkarten für Freitag | с. 1 |
| 5 | Sporthalle (der Universität) | с. 1 |
| 6 | Einzelrennen auf Zeit / Mannschaftsrennen / Rennen über 90 km (один пункт) | с. 1 |
| 7 | Nudeln | с. 1 |
| 8 | Helm(pflicht) / gesperrte Straßen (один пункт) | с. 1 |
| 9–18 | R, R, F, F, R, R, F, F, F, R | с. 1 (рендер + скрипт) |
| 19 | A fährt mehr Kilometer, B braucht das Auto seltener / A Auto, B Fahrrad oder zu Fuß | с. 2 |
| 20 | Wechsel zwischen sozialen Schichten / sozialer Aufstieg | с. 2 |
| 21 | kann viele Tätigkeiten vor Ort ausführen / kurze Wege | с. 2 |
| 22 | Trennung von Wohnen und Produktion / Industrie produzierte Lärm und Schmutz | с. 2 |
| 23 | два из: langweilig; zu wenig andere Menschen; leer | с. 2 |
| 24 | два из: mehr öffentliche Verkehrsmittel; weniger Autoverkehr; weniger Energieverbrauch; weniger CO2 | с. 2 |
| 25 | один из: Lebenskultur / Fahrspaß; Arbeitsplatzverlust in der Autoindustrie | с. 2 |

Неверные варианты для коротких ответов: из [HT2] «Hingegen falsch» (п. 1 «an Kompetition teilnehmen», п. 20 «Möglichkeit sozial zu wechseln»), остальные наши.
