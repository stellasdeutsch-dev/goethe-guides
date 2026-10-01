# Goethe-Zertifikat C1 Modellsatz (modular): решение и разбор

Проверено: 2026-10-01. Статья: `src/content/guides/probniki/c1-modellsatz-razbor.mdx`.

## Какой пробник актуален в 2026

- С 1.1.2024 действует **модульный** Goethe-Zertifikat C1. Старый формат шёл до конца 2023 года.
- Старый Modellsatz (10. Auflage Oktober 2014) и старый Übungssatz 03 на титуле: «Diese Prüfung wird bis zum 31.12.2023 weltweit angeboten.» Там 190 минут письменной части, общий порог 60 из 100 и минимум 45 письменно + 15 устно. В 2026 это **не** тот формат.
  - https://www.goethe.de/pro/relaunch/prf/materialien/C1/c1_modellsatz.pdf (200, но устарел)
  - https://www.goethe.de/pro/relaunch/prf/materialien/C1/c1_uebungssatz.pdf (200, но устарел)
- Актуальный: «Goethe-Zertifikat C1 (modular)», © Goethe-Institut 2023, «2. Auflage Februar 2024, Stand April 2026», 46 страниц (PDF-Metadaten: ModDate 13.05.2026; Last-Modified сервера 26.05.2026).
- Партнёр Goethe в Швейцарии: «Am 1. Januar 2024 wird das neue, modulare Goethe-Zertifikat C1 eingeführt» (https://swiss-exams.ch/de/news-blog/the-modular-goethe-zertifikat-c1-arrives-in-2024-en, из поисковой выдачи).

## Источники (curl -sIL -A "Mozilla/5.0", 2026-10-01)

| Что | URL | Статус |
|---|---|---|
| [MS] Modellsatz C1 modular, PDF | https://www.goethe.de/pro/relaunch/prf/materialien/C1_modular/c1-modular_modellsatz.pdf | 200, application/pdf |
| [MP3] Аудио Hören, 94 193 370 байт (≈94 MB), 39:14 мин | https://goethemp4s.akamaized.net/resources/files/mp310/c1-modellsatz-2023_gesamt_v3.mp3 | 200, audio/mpeg |
| [PAGE] Übungsmaterialien C1 (PDF, плеер Hören, видео Sprechen, ссылка на онлайн-версию) | https://www.goethe.de/ins/de/de/prf/prf/gzc1/u24.html | HEAD 200 (GET curl 403, в браузере открывается) |
| [BFU] Онлайн-версия того же Modellsatz (barrierefrei) | https://bfu.goethe.de/c1mod/ | 200. Те же тексты: StadtTours, Familien im Fokus, Manager-Müdigkeit, Polarsturm, Grimm, Impfpflicht |
| [DB] Durchführungsbestimmungen C1, Stand 1.9.2025 | https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_C1.pdf | 200 |
| [PO] Prüfungsordnung | https://www.goethe.de/pro/relaunch/prf/de/Pruefungsordnung.pdf | 200 |

Ссылку на MP3 и «direkt anhören (39:14 Min.)», «herunterladen (MP3, 94 MB)» взял со страницы [PAGE], открытой в браузере.

## Формат и баллы (проверено по DB и MS)

- DB 1.1: четыре модуля «einzeln oder in Kombination».
- DB 1.4: «LESEN 65 Minuten», «HÖREN ca. 40 Minuten», «SCHREIBEN 75 Minuten», «Gesamt ca. 180 Minuten». Sprechen: Paarprüfung «circa 20 Minuten», Einzelprüfung «circa 15 Minuten», Vorbereitung «20 Minuten».
- MS S. 6 (Überblick): Lesen Teil 1–4 = 8 + 7 + 8 + 7 Items, 65 Min.; Hören Teil 1–4 = 6 + 9 + 8 + 7 Items, ca. 40 Min.; Schreiben Teil 1 «ca. 230 Wörter», Teil 2 «ca. 120 Wörter», 75 Min.
- DB 4.1 (Lesen) и 4.2 (Hören): «gibt es 30 Items. Jedes Item ist ein Messpunkt. Pro Messpunkt und Lösung werden entweder 1 Punkt oder 0 Punkte vergeben. … mit 3,33 multipliziert und das Ergebnis jeweils gerundet».
- Таблица DB 4.1/4.2: 30→100, 29→97, 28→93, 27→90, 26→87, 25→83, 24→80, 23→77, 22→73, 21→70, 20→67, 19→63, 18→60, 17→57, 16→53, 15→50, 14→47, 13→43, 12→40, 11→37, 10→33, 9→30, 8→27, 7→23, 6→20, 5→17, 4→13, 3→10, 2→7, 1→3, 0→0.
- DB 6.1: «In jedem Modul können maximal 100 Punkte = 100 % erreicht werden.» DB 6.3: «Ein Modul ist bestanden, wenn mindestens 60 Punkte bzw. 60 % erreicht sind.» → порог в каждом модуле 60, для Lesen/Hören это 18 из 30.
- DB 6.2: 100–90 sehr gut; 89–80 gut; 79–70 befriedigend; 69–60 ausreichend; 59–0 nicht bestanden.
- DB §7: модули «beliebig oft abgelegt bzw. wiederholt», если позволяет центр.
- Настройки AnswerSheet: Lesen `minutes=65, factor=3.33, maxPoints=100, pass=60`; Hören `minutes=40, factor=3.33, maxPoints=100, pass=60`. Компонент считает `round(ok × 3.33)`: 18 → 59,94 → 60; 29 → 96,57 → 97. Совпадает с таблицей DB.

### Lesen
- MS S. 7: «Das Modul Lesen hat vier Teile.» «Hilfsmittel … sind nicht erlaubt.»
- Рекомендованное время (MS S. 8, 10, 12, 14): Teil 1 10 Min., Teil 2 20 Min., Teil 3 20 Min., Teil 4 15 Min.
- Перенос в бланк: DB 2.2 «Für das Übertragen ihrer Lösungen planen die Teilnehmenden circa 5 Minuten innerhalb der Prüfungszeit ein.»
- Teil 1: Lückentext, 4 варианта (a–d). Teil 2: MC a–c. Teil 3: 10 предложений a–j на 8 пропусков, «Zwei Sätze passen nicht». Teil 4: три автора a–c, 7 утверждений, «Zwei Aussagen passen nicht. Markieren Sie in diesem Fall 0.»

### Hören
- MS S. 17: «Nach dem Hören haben Sie drei Minuten Zeit, Ihre Lösungen auf den Antwortbogen zu übertragen.» DB 2.2 (немецкий текст): «circa 3 Minuten». **Расхождение:** английская колонка DB пишет «approximately five minutes». В статье даю 3 минуты (немецкий текст DB + Modellsatz).
- Teil 1 (MS S. 18): подкаст о трёх книгах, «Sie hören den Text einmal», 60 Sekunden на задания 1–6. Варианты a = Buch 1, b = Buch 2, c = Buch 3.
- Teil 2 (S. 19): радиоинтервью, «Sie hören den Text zweimal», 60 Sekunden на 7–15. Варианты a stimmt / b stimmt nicht / c dazu wird nichts gesagt.
- Teil 3 (S. 20): дискуссия, «in vier Abschnitten jeweils einmal», по 2 задания, «30 Sekunden» перед каждым отрывком.
- Teil 4 (S. 21): доклад, «zweimal», «90 Sekunden» на 24–30.

### Schreiben
- MS S. 23: два Teil, «Sie können mit jeder Aufgabe beginnen».
- MS S. 24: Teil 1 «vorgeschlagene Arbeitszeit: 50 Minuten», форум «Karriere & Beruf», тема о выборе специальности, 4 пункта, «circa 230 Wörter». Teil 2 «25 Minuten», жалоба руководительнице Frau Grimm (после переезда фирмы сидишь в комнате с шестью коллегами), 4 пункта, «circa 120 Wörter».
- MS S. 42 Bewertungskriterien: E по Aufgabenerfüllung = «weniger als 50 % der geforderten Wortanzahl oder Thema verfehlt»; «Wird das Kriterium Aufgabenerfüllung … mit E (0 Punkten) bewertet, ist die Punktzahl für diese Aufgabe insgesamt 0 Punkte.» A по Erfüllung = «alle 4 Sprachfunktionen inhaltlich und vom Umfang her angemessen».
- MS S. 43 Bewertungsbogen: Teil 1 Erfüllung 14 / Kohärenz 14 / Wortschatz 16 / Strukturen 16 = 60 (шаг 14 · 10,5 · 7 · 3,5 · 0 и 16 · 12 · 8 · 4 · 0); Teil 2 по 10 × 4 = 40 (10 · 7,5 · 5 · 2,5 · 0).
- DB 4.3: два независимых проверяющих, среднее, «Zwischenwerte sind nicht zulässig», «Bewertet wird die Reinschrift auf dem Antwortbogen Schreiben», Drittbewertung при разбросе вокруг 60.

### Sprechen
- MS S. 25: Teil 1 доклад «circa 5 Minuten» + вопросы «circa 2 Minuten», выбор Thema 1 или 2; Teil 2 дискуссия вдвоём «circa 5 Minuten»; подготовка 20 минут, одна, можно заметки, говорить свободно.
- DB §3: «Teil 1 dauert circa 7 Minuten pro PTN, Teil 2 circa 5 Minuten für beide»; DB 3.2: заметки из подготовки можно использовать.
- Темы (MS S. 26–28, пересказ): Thema 1 — можно ли школьникам пропускать уроки ради климатических демонстраций (пример; за/против; как реагировать родителям и учителям; как иначе достичь цели). Thema 2 — нужна ли гендерно-нейтральная речь (пример из другого языка; за/против; ситуация в родной или другой стране; взгляд в будущее). Teil 2 — обязательная прививка детей (подруга не хочет прививать дочь; короткий текст о прививке от кори для детсада и школы; комментарий; обоснование; ситуация в родной стране; договориться об аргументах для разговора с подругой).
- MS S. 46 Bewertungsbogen: Teil 1 Erfüllung 10, Kohärenz 10, Wortschatz 10, Strukturen 10, Fragen/Antworten 12 = 52; Teil 2 Erfüllung 8, Interaktion 4, Wortschatz 10, Strukturen 10 = 32; Aussprache (Teil 1, 2) 16. Итого 100.
- DB §5: Einleitungsgespräch не оценивается; среднее двух оценок, «bis 0,49 wird abgerundet, ab 0,5 wird aufgerundet».

## Ключ ответов

Официальные Lösungen: **Lesen — S. 31** (PDF-страница 31, бланк «30700-LoeBo MS 100-LV»), **Hören — S. 33** (PDF-страница 33, «30750-LoeBo MS 100-HV»). Отмеченные клетки считал дважды: глазами по рендеру страницы (pdftoppm 110 dpi) и скриптом, который мерит толщину рамок (жирная рамка = ответ). Оба способа совпали. Пример (0) не включён. Транскрипты: S. 34–37.

### Lesen (ключ S. 31)

| № | Ответ | Проверка по тексту (S. 8–15) |
|---|---|---|
| 1 | b erfahren | «nicht nur … Attraktionen, sondern [erfahren] auch Geschichten» |
| 2 | d mithilfe von | фото и анекдоты как средство |
| 3 | d umgekehrt | «passen sich den Wünschen der Gäste an, nicht umgekehrt» |
| 4 | b die | Relativpronomen, Nom. Pl. к Standards |
| 5 | b im | Erfahrung im Umgang mit Gruppen |
| 6 | d somit | вывод из «Von Anfang an praktiziert … sanften Tourismus» |
| 7 | a erfüllen | Ansprüche erfüllen |
| 8 | b Entsprechend | у каждого города свой шарм → соответственно уникальные программы |
| 9 | a | спорят о детском интернете: «die Internetnutzung der Sprösslinge … zu Diskussionen» |
| 10 | b | «in schlechteren Noten widerspiegelt» |
| 11 | a | эксперимент: смартфон родителей и поведение детей |
| 12 | a | «Flucht aus dem Chaos», «entspannende Tätigkeit» |
| 13 | c | «Verlust von Aufmerksamkeit seitens ihrer Eltern» |
| 14 | b | «handyfreie Zeiten und Rituale» |
| 15 | b | «sollte jede und jeder zugestimmt haben» |
| 16 | e | после пропуска «Mehr als die Hälfte von ihnen fühlt sich … gestresst» |
| 17 | i | после пропуска «Wer plant, wer konzipiert…» |
| 18 | a | Früher (мечта о карьере) → Heute (Zumutung) |
| 19 | b | дети получают всё без отдачи → не учатся, что усилия окупаются |
| 20 | c | Diese Maßnahmen (репетиторы) → «Jedoch bleibt die Frage offen» |
| 21 | g | другие приоритеты → нет баланса работы и удовольствия → «Freizeit geht … vor» |
| 22 | h | уставшие менеджеры → «Sollen doch die Jungen übernehmen» |
| 23 | j | «Da dies keine Option sein kann» |
| 24 | c | Nowak: «Kriminelle mit falschen Identitäten … an das Geld» |
| 25 | a | Brückner: «nur der bewusste Umgang damit vermag den Transfer … in Grenzen zu halten» |
| 26 | 0 | никто не говорит о потере клиентов |
| 27 | b | Janssen: «für personalisierte Vertriebsaktionen verwertet» |
| 28 | 0 | у Nowak политика «drängt Unternehmen», добровольного желания нет |
| 29 | b | Janssen: «Unterschied zwischen Intention und realem Handeln» |
| 30 | a | Brückner: «Man erhält nichts umsonst … bezahlt mit seinen Daten» |

Лишние предложения Teil 3: d и f.

### Hören (ключ S. 33)

| № | Ответ | Проверка по транскрипту (S. 34–37) |
|---|---|---|
| 1 | c (Buch 3) | El Gani: Tier- und Pflanzenwelt, «aufbauend auf empirischen Beobachtungen» |
| 2 | a (Buch 1) | «Wetterverhältnisse und Atmosphäre vergangener Jahrhunderte» |
| 3 | c (Buch 3) | «bevorstehende Gefahren», Zukunftsszenarien |
| 4 | b (Buch 2) | «Herrschaft über die Seewege … gewandelt» |
| 5 | c (Buch 3) | «Rolle der Meere für die Menschen und umgekehrt» |
| 6 | a (Buch 1) | «Freundschaft und Konkurrenz», Spannungen im Team |
| 7 | b stimmt nicht | «Die Orthografie bereitet ihnen dagegen nicht mehr Probleme als früher» |
| 8 | a stimmt | Koordination, Kreativität, Konzentration |
| 9 | b stimmt nicht | США как пример возврата к «analoge Schulen» |
| 10 | c nichts gesagt | только как писал книгу, о мечте нет |
| 11 | b stimmt nicht | каркас от руки, за ноутбук «Erst als ich ein Kapitel im Kopf vor mir sah» |
| 12 | a stimmt | «eine Fertigkeit, die heute jeder und jede beherrschen muss. Dazu gehört auch das Tippen» |
| 13 | a stimmt | «das Gehörte fast eins zu eins mit» |
| 14 | a stimmt | от руки отбираешь главное, это возможно только если понял |
| 15 | b stimmt nicht | «wird weiterhin eine Ausdrucksform unserer Kultur bleiben» |
| 16 | a | Kuhn: беречь незастроенную землю; Hoffmann: Einfamilienhäuser «ökologisch und sozial fragwürdig» |
| 17 | b | Kuhn: privater Rückzugsraum + gemeinschaftlich genutzte Flächen, «innenstadtnah» |
| 18 | c | «Großteil der Bevölkerung macht sich eher Sorgen über steigende Mieten» |
| 19 | c | «umfunktionieren»: Gewerbeeinheiten → Läden unten, Wohnungen oben |
| 20 | a | «Wenn die Bevölkerungsentwicklung so weitergeht …» |
| 21 | c | «Zeichen für ein Umdenken»; не для «breite Schichten» |
| 22 | b | «diese Arbeit wird durch kleinere Wohnstätten reduziert» |
| 23 | b | «Der Staat sollte ein Wechselmodell anbieten» |
| 24 | b | «familienorientierte Ziele für Berufstätige», Infrastruktur zur Entlastung |
| 25 | c | мужчины: «ein kleiner Rückgang gefolgt von einem stetigen Anstieg» |
| 26 | c | Lohngefälle ~15 %, «doch der Abstand verringert sich» |
| 27 | a | Frauen mit Kindern: Teilzeit, «Sonderurlaub aus familiären Gründen» |
| 28 | b | «spätestens … sieben Wochen vor der geplanten Elternzeit» |
| 29 | a | «Sie müssen für die Eltern erschwinglich sein» |
| 30 | c | более высокая рождаемость, изменить демографию |

## Факты внутри образцов Sprechen (не из пробника)

- Greta Thunberg начала школьную забастовку у парламента в Стокгольме 20 августа 2018, позже по пятницам, отсюда Fridays for Future (Uppsala University, https://www.uu.se/en/department/government/research/school-strikes-for-climate; TIME, https://time.com/5595365/global-climate-strikes-greta-thunberg/; из поисковой выдачи).
- Masernschutzgesetz действует с 1 марта 2020: детям от года для детсада/школы нужно подтверждение прививки от кори (BMG, https://www.bundesgesundheitsministerium.de/impfpflicht; RKI, https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Impfungen-A-Z/Masern/Masernschutzgesetz.html; из поисковой выдачи).
- В Австрии нет обязательной прививки детей, есть бесплатная детская программа прививок (gesundheit.gv.at, https://www.gesundheit.gv.at/leben/gesundheitsvorsorge/impfungen/kinderimpfungen.html; из поисковой выдачи).
- В казахском нет грамматического рода, «ол» = он/она/оно (Wiktionary «ол», https://en.wiktionary.org/wiki/%D0%BE%D0%BB; из поисковой выдачи).

## Не подтверждено / не использовано

- Отдельного официального Übungssatz для модульного C1 на goethe.de не нашёл: на странице Übungsmaterialien только этот Modellsatz (PDF, аудио, видео Sprechen) и онлайн-версия bfu. В статье поэтому не обещаю «второй официальный пробник».
- Точный URL видео Sprechen не извлёк (браузерная вкладка была занята), даю ссылку на страницу [PAGE], где оно встроено.
