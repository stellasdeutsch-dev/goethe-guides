# Разбор Demo-Version цифрового TestDaF: ключ и источники

Проверено 2026-11-21. Аудио и видео не воспроизводились.

## Источники
- [DEMO] Gesamtdatei «Beispielaufgaben aus der Demo-Version des digitalen TestDaF», 54 с., © g.a.s.t. 2020, PDF изменён 08.09.2025: https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF.pdf
- [DEMO-L] отдельный PDF Lesen (ключ на с. 9): https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF_Lesen.pdf
- [DEMO-H] отдельный PDF Hören (ключ на с. 12–15, транскрипты с. 16 и далее): https://www.testdaf.de/fileadmin/testdaf/downloads/Demo_Version_digitaler_TestDaF/Beispielaufgaben_Demo-Version_digitaler_TestDaF_Hoeren.pdf
- [BSP] страница с аудио и видео: https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf/vorbereitung-auf-den-digitalen-testdaf/beispielaufgaben-zum-digitalen-testdaf/
- Формат, время, баллы: research/testdaf.md

## Как сверял ключ
1. Буквенные ответы: `pdftotext -layout` по [DEMO] с. 35 и 40, повтор по [DEMO-L] с. 9 и [DEMO-H] с. 15. Совпали.
2. Отметки (кружки, выделенные предложения): рендер страниц [DEMO] 36, 38, 39 (pdftoppm) и повторно рендер [DEMO-H] с. 13, 14 и [DEMO-L] с. 9. Для Lesen Typ 5 ещё текстовый слой [DEMO-L]: закрашенный кружок там читается как «b», пустой как «Y». Совпали.

## Факты для статьи
- Demo показывает все 23 типа заданий, порядок как на экзамене: «zeigen Ihnen alle Aufgabentypen aus den vier Prüfungsteilen» [DEMO с. 3].
- Вернуться нельзя, время задаётся, переход автоматический [DEMO с. 3].
- В Hören «Sie hören jeden Text einmal» [DEMO с. 16].
- Время Lesen по Demo: 4 + 5 + 15 + 6 + 9 + 7 + 7 = 53 мин (на сайте «ca. 55 Minuten»).
- Items: Lesen 5 + 4 + 7 + 4 + 7 + 4 + 3 = 34; Hören 5 + 4 + 2 + 6 + 4 + 5 + 4 = 30 [DEMO с. 4, 16].
- Короткие ответы: «Antworten mit derselben Bedeutung, die verständlich sind, werden auch als richtig akzeptiert» [DEMO с. 37–39].
- Hören Typ 1: «maximal 2 Wörter» на поле [DEMO с. 17].
- Schreiben: Typ 1 «mindestens 200 Wörter», 30 мин; Typ 2 «ca. 100–150 Wörter», 30 мин, «Das Abschreiben von Textpassagen ist nicht erlaubt» [DEMO с. 25–26]. Пункты-подсказки с. 41.
- Sprechen: таймеры по иконкам с. 29–34 (см. research/testdaf.md). Образцы заметок с. 42–44. Реплики Typ 4 и 6 с. 51.
- Lesen Typ 2: 5 абзацев при 4 Items, почему так, Demo не объясняет. В бланке 4 строки: позиции 2–5.
- Таблицы «верные ответы → 0–20» нет (research/testdaf.md). В бланке maxPoints = числу заданий, factor 1, без pass.

## Ключ Lesen (34)
| Typ | № | Ответ | Где в ключе |
|---|---|---|---|
| 1 Lückentext | 1 | d (festgestellt) | [DEMO] с. 35 |
| 1 | 2 | b (furchteinflößende) | с. 35 |
| 1 | 3 | d (wandten … an) | с. 35 |
| 1 | 4 | a (Auswirkungen) | с. 35 |
| 1 | 5 | c (präsentiert) | с. 35 |
| 2 Textabschnitte | порядок | [3] → [1] → [5] → [4] → [2] | с. 35 |
| 2 | поз. 2 | [1] | с. 35 |
| 2 | поз. 3 | [5] | с. 35 |
| 2 | поз. 4 | [4] | с. 35 |
| 2 | поз. 5 | [2] | с. 35 |
| 3 Multiple-Choice | 1–7 | d, d, c, b, a, a, d | с. 35 |
| 4 Sprachhandlungen | 1–4 | h (zweifelt), e (prognostiziert), b (begrüßt), c (empfiehlt) | с. 35 |
| 5 Kategorien | 1 | Stadt | с. 36 (рендер) |
| 5 | 2 | passt nicht | с. 36 |
| 5 | 3 | Stadt | с. 36 |
| 5 | 4 | beide | с. 36 |
| 5 | 5 | Land | с. 36 |
| 5 | 6 | Stadt | с. 36 |
| 5 | 7 | Land | с. 36 |
| 6 Begriffspaar | Branche | «Wettbewerb → preiswerte Angebote», «verträglichere Formen» | с. 36 |
| 6 | Folgen | «lokale Wirtschaft behindert», «Preise steigen für Einheimische» | с. 36 |
| 7 Fehler | неверные | предложения 2, 6, 7 из 9 | с. 36 (рендер) |

Буквы для Typ 6 в статье наши (A–H по порядку на с. 13: слева сверху вниз A, C, E, G; справа B, D, F, H). Ответ: Branche A и H, Folgen D и E.

## Ключ Hören (30)
| Typ | № | Ответ | Где |
|---|---|---|---|
| 1 Übersicht | 1 (Anmeldung nur für) | (die) Workshops | [DEMO] с. 37 |
| 1 | 2 (Di vormittags, Karriere im …) | öffentlichen Dienst | с. 37 |
| 1 | 3 (Mi, bitte mitbringen) | USB-Stick | с. 37 |
| 1 | 4 (Mi, wo: Gebäude C, …) | Raum 5 | с. 37 |
| 1 | 5 (Di nachmittags, … zum Thema Energieversorgung) | Vortrag | с. 37 |
| 2 Begriffspaar | Jansson Forderung | Schulnoten abschaffen / durch Gespräche, Berichte ersetzen | с. 38 |
| 2 | Jansson Argument | subjektiv, nicht vergleichbar, demotivierend | с. 38 |
| 2 | Kruse Forderung | Noten nicht allein, mit Kommentaren kombinieren | с. 38 |
| 2 | Kruse Argument | leicht verständlich, motivierend, zeigt Verbesserung/Verschlechterung | с. 38 |
| 3 Fehler | неверные | предложения 1 и 5 из 8 | с. 38 (рендер) |
| 4 Personen | 1–6 | beide, keiner, Frau Kottmeier, Herr Ebert, Frau Kottmeier, beide | с. 39 (рендер) |
| 5 Gliederung | 1 | besonders aktiv bei der Betrachtung von Gesichtern | с. 39 |
| 5 | 2 | eine Zelle erkennt ein ganzes Gesicht | с. 39 |
| 5 | 3 | jede Gesichtszelle erkennt nur einen Teil/Aspekt | с. 39 |
| 5 | 4 | berechnen, wie das Gesicht aussah, das der Affe sah | с. 39 |
| 6 Multiple-Choice | 1–5 | c, c, a, a, c | с. 40 |
| 7 Laut/Schrift | 1–4 | denn (слышно dann), besten (ehesten), Es (So), Garantie (Garanten) | с. 40 |

## Короткие ответы в бланке
Для коротких ответов (Hören Typ 1, 2, 5) и Typ 7 в бланке три варианта: один по смыслу из официального ключа, два неверных (наши, из соседних мест аудио). Человек сначала пишет свой ответ на бумаге, потом выбирает ближайший вариант. Так требует бриф.

## Графики (для образцов, значения на глаз по рендеру)
- Schreiben Typ 2 [DEMO с. 27]: урожай без пчёл относительно 100 %: яблоко около 40 %, груша около 12 %, вишня около 40 %, фасоль около 62 %, морковь около 5 % (в ключе с. 41: «etwa 95% weniger Möhren»).
- Sprechen Typ 4 [DEMO с. 31, ключ с. 43]: «Mehrheit (über 60 %) würde kein selbstfahrendes Auto kaufen, knapp 1/3 … wenn nicht teurer».
