# Пробник Stellas A1 №4: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-a1-4.mdx`. Создано 2026-11-21.
Все тексты, аудиосценарии и задания написаны Командой Stellas. Из материалов Goethe взят только формат и короткие стандартные инструкции.

## Формат и баллы (источники)
- Формат и баллы те же, что в `research/stellas-probnik-a1-3.md`; первоисточники: `research/a1-modellsatz-razbor.md`, `research/goethe-a1-a2-lesen-hoeren.md`, `research/goethe-a1-schreiben.md`, `research/goethe-a1-sprechen.md` (A1-DB 1.4, §2, 3.2, 4.1–4.3, §5, 6.1, 6.3; MS-A1).
- Новые утверждения в FAQ:
  - «за каждое задание 1 балл или 0, минусов нет»: A1-DB 4.1/4.2 «pro Lösung 1 Punkt oder 0 Punkte».
  - «Sprechen 15 минут, группа до четырёх, без подготовки, задание получаешь на экзамене»: A1-DB 1.4, 3.2.
- AnswerSheet: `factor={1.66} maxPoints={25}`, без `pass`. id: `stellas-a1-4-hoeren`, `stellas-a1-4-lesen`; Trainer `stellas-a1-4-schreiben`.

## Ключ Hören
| № | Ответ | Доказательство в скрипте |
|---|---|---|
| 1 | a (17,90 €) | Express 27,90 «nicht so wichtig», «Normal, bitte», «siebzehn Euro neunzig» |
| 2 | b (13.30) | «Ich mache erst um halb zwei Pause» |
| 3 | c (Bauchschmerzen) | Fieber «heute nicht mehr», Hals «ist okay», «mein Bauch tut sehr weh» |
| 4 | a (Dorf) | «seit Januar wohne ich in einem kleinen Dorf» |
| 5 | c (16.50) | «Es ist zehn vor fünf», поправка «Nein, zehn vor fünf» |
| 6 | b (erster Stock) | «Ach nein, Entschuldigung! Seit Montag sind die Lampen im ersten Stock» |
| 7 | Richtig | «heute nur neun Euro neunundneunzig, sonst vierzehn Euro» |
| 8 | Falsch | своё Parkhaus «ist jetzt leider voll», места «im Parkhaus am Bahnhof» |
| 9 | Falsch | «Zuerst kommen bitte nur Familien mit kleinen Kindern», остальные «warten» |
| 10 | Richtig | «Hier können Sie in die Linie drei umsteigen» |
| 11 | a (8 Uhr) | «Können Sie bitte schon um acht Uhr kommen?» |
| 12 | b (17.50) | «kommt erst um siebzehn Uhr fünfzig» |
| 13 | c (Pass) | «Bitte bringen Sie Ihren Pass mit» |
| 14 | a (Auto kaputt) | «ich bin nicht krank», «Arbeiten muss ich heute nicht», «mein Auto ist kaputt» |
| 15 | b (morgen Vormittag) | «Sie können den Tisch morgen Vormittag abholen» |

Распределение a/b/c: 4 / 4 / 3. R/F: 2 / 2.

## Ключ Lesen
| № | Ответ | Доказательство |
|---|---|---|
| 1 | Falsch | «ich bin wieder zu Hause!» |
| 2 | Falsch | «ich darf noch zwei Wochen nicht arbeiten» |
| 3 | Richtig | «aber am Sonntag habe ich Zeit» |
| 4 | Richtig | «nicht mehr um 16 Uhr, sondern um 16.30 Uhr» |
| 5 | Falsch | «von 19 bis 20.30 Uhr» |
| 6 | a | «Computer für Anfänger. Samstag» |
| 7 | a | «Nach Kasachstan nur 2 Cent pro Minute» |
| 8 | b | «Tischtennis für Erwachsene. Dienstag und Donnerstag, 19 bis 21 Uhr» |
| 9 | b | «online, zu Hause und wann Sie möchten» |
| 10 | a | «Ihr Auto ist in zehn Minuten sauber. Jeden Tag» |
| 11 | Falsch | «Hier bezahlen Sie nur mit Karte» |
| 12 | Richtig | «Preis: 1 Euro» |
| 13 | Richtig | «Geldautomat: 24 Stunden geöffnet» |
| 14 | Falsch | «nur für Kinder bis 12 Jahre» |
| 15 | Richtig | «Ihre Koffer können bis 18 Uhr an der Rezeption bleiben» |

R/F: 5 / 5. a/b: 3 / 2. Серий из 4+ одинаковых нет.

## Schreiben
- Teil 1 (Hotel Strandblick, Kinderclub): 1 → 9 · 2 → 305 · 3 → ja · 4 → Mittwoch und Donnerstag · 5 → 1.
- Teil 2 (письмо подруге Лее, сдала экзамен, du): образец 34 слова с обращением и подписью, 29 без них, 6 предложений.

## Темы
Hören: посылка в Польшу, обеденный перерыв в офисе, у врача (живот), переезд подруги в деревню, который час, лампы в универмаге; Durchsagen: рыба по акции, парковка универмага заполнена, посадка на рейс в Рим, пересадка на Гётеплац; автоответчик: смена в ресторане, поезд бабушки, языковая школа перед экзаменом, волейбол, мебельный магазин.
Lesen: письмо после больницы, новое время тренировок; компьютерный курс, звонки в Казахстан, настольный теннис, немецкий онлайн, автомойка; касса только по карте, туалет на вокзале, банкомат, детская площадка, чемоданы в отеле.
Schreiben: анкета детского клуба в отеле, поздравление подруге. Sprechen: Gesundheit / Wetter; карточки Tablette, Taschentuch, Briefmarke, Computer, Suppe, Jacke.

## Проверки (2026-11-21)
- `node scripts/check-mdx.mjs` → ✓. `python3 scripts/answers.py` → Hören 15, Lesen 15.
- Все цитаты «…» в `why` найдены дословно в тексте/скрипте.
- Слепое решение независимым агентом: 30 из 30 совпали с ключом. По замечаниям переписаны: Hören 7 (добавлена обычная цена), Lesen 3 (было «soll» из приглашения, потом повтор слов текста), Lesen 10 (день недели не определял ответ). Переписанные задания решены повторно вслепую: совпадение.
- Пересечения с параллельно написанными telc/ÖSD A1 убраны: Hören 8 (было закрытое вагон-ресторан), Hören 15 (был ветеринар), Lesen 8 (была ферма с животными), Lesen 10 (были фото на паспорт), Schreiben Teil 1 (был прокат велосипедов), Teil 2 (было поздравление с малышом).
