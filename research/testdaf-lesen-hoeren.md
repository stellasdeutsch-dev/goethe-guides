# TestDaF Lesen и Hören: гайды и тренировки (Команда Stellas, 2026-11-21)

Статьи:
- src/content/guides/testdaf/lesen/testdaf-lesen.mdx
- src/content/guides/testdaf/lesen/testdaf-lesen-trenirovka.mdx (бланк testdaf-tr-lesen)
- src/content/guides/testdaf/hoeren/testdaf-hoeren.mdx
- src/content/guides/testdaf/hoeren/testdaf-hoeren-trenirovka.mdx (бланк testdaf-tr-hoeren)

## Откуда факты
Все цифры и правила из research/testdaf.md (разделы «Цифровой TestDaF: сводка», «Lesen», «Hören», «Оценка») и из Demo-Version (scratchpad/testdaf-research/author/demo-p4…p23, p35–36). Новых фактов не добавлено. Использовано:
- Lesen: 7 типов, 34 Items, «ca. 55 Minuten» [AUF-D]; время по типам 4/5/15/6/9/7/7 мин [DEMO с. 5–15]; инструкции «Die Zahlen beziehen sich immer auf den nachfolgenden Satz.» (с. 10), «Die Aussagen folgen nicht dem Textverlauf.» (с. 11), «Es müssen vier Aussagen zugeordnet werden.» (с. 12), «Es gibt genau drei inhaltlich falsche Sätze.» (с. 14). Typ 6 в Demo: 8 утверждений, по 2 в колонке (ключ с. 36). Typ 2: 5 абзацев, 4 Items (почему, не объяснено).
- Hören: 7 типов, 30 Items, «ca. 40 Minuten», Typ 4 и 5 видео [AUF-D]; «Sie hören jeden Text einmal.», заметки на бумаге во всех типах, инструкции зачитывают [DEMO с. 16]; Typ 1 «Ergänzen Sie beim Hören», «maximal 2 Wörter», после 20 с «um Ihre Antworten zu kontrollieren», «Üben Sie daher auch das Tippen.» (с. 17); Typ 2 и 5 «in Stichpunkten» (с. 18, 21); Typ 3 резюме появляется после аудио (с. 19); Typ 4 Herr/Frau/beide/keiner (с. 20); Typ 7 пример отличия «denn – dann» (ключ с. 39).
- Оценка: верные → 0–20, таблицы перевода нет; 0–4 unter TDN 3, 5–9 TDN 3, 10–15 TDN 4, 16–20 TDN 5 [AUS-D]. Короткие ответы оценивают эксперты, «Antworten mit derselben Bedeutung … werden auch als richtig akzeptiert» [AUS-D], [DEMO с. 37–39].
- Пробные задания +30 мин, могут дать два задания одного типа [FAQ-D], [AUF-D]. Назад нельзя, автопереход [AUF-D], [DEMO с. 3]. Словари запрещены [FAQ-D].

## Баллы в бланках
factor=1, maxPoints = число Items (34 / 30), без pass: официальной таблицы «верные → 0–20» нет (бриф TestDaF).

## Ключ: testdaf-tr-lesen (34)
| Typ | Тема | Ответы |
|---|---|---|
| 1 Lückentext | Lichtverschmutzung | 1 c, 2 b, 3 d, 4 a, 5 c |
| 2 Reihenfolge | Peer-Review | Platz 1 B, 2 D, 3 E, 4 A (5 C) |
| 3 Multiple-Choice | Totholz im Wald | 10 b, 11 c, 12 a, 13 d, 14 a, 15 c, 16 b |
| 4 Sprachhandlungen | kleine Fächer (Kommentar) | 17 d kritisiert, 18 f begrüßt, 19 g vermutet, 20 b empfiehlt |
| 5 Kategorien | Klausur / Hausarbeit | 21 Klausur, 22 passt nicht, 23 Hausarbeit, 24 Klausur, 25 beide, 26 passt nicht, 27 Hausarbeit |
| 6 Begriffspaar | Learning Analytics (Chancen / Risiken) | Chancen A, D; Risiken C, F |
| 7 Zusammenfassung + Grafik | Gründe für die Studienwahl (fiktive Uni Westhafen) | falsch: 3, 5, 8 |

## Ключ: testdaf-tr-hoeren (30)
| Typ | Тема | Ответы |
|---|---|---|
| 1 Übersicht | Forschungspraktikum Biochemie | Statistik, 15. Januar, zehn Wochen, Herrn Brückner, 450 Euro |
| 2 Begriffspaar | Psychologische Beratung (Sander / Hagenau) | mehr Beratungspersonal, Wartezeit gefährdet Prüfungen, Sprechstunde ohne Termin, viele Fälle kurz lösbar |
| 3 Zusammenfassung | Wie Tiere schlafen | falsch: 3, 5 |
| 4 Personen (Video) | Wohnheime bauen? (Kolbe / Demir) | Kolbe, beide, Demir, keiner, Demir, Kolbe |
| 5 Gliederung (Video) | Wie kommt ein Wort ins Wörterbuch? | ein Textkorpus, langfristiger Gebrauch, nur Hinweise, Umfang der Druckausgabe |
| 6 Multiple-Choice | Die Vorlesung (Geschichte) | 22 b, 23 c, 24 d, 25 a, 26 b |
| 7 Laut/Schrift | Einführung in die Bodenkunde | напечатано/звучит: zuerst/sofort, einzigen/einzelnen, Jahrtausende/Jahrhunderte, erhalten/schützen |

## Мини-практика в гайдах (Quiz, не бланк)
- testdaf-lesen: Sprachhandlungen, комментарий «Kleine Hochschule, große Wirkung?»: [1] zweifelt, [2] lobt, [3] empfiehlt, [4] prognostiziert.
- testdaf-hoeren: Übersicht «Workshop im Schreibzentrum» (204, eigenen Laptop, Donnerstag, Lernplattform); Laut/Schrift «Erstsemestertag» (zuerst/zunächst, besichtigen/besuchen).

## Проверка
- check-mdx ✓ для всех четырёх; audit-mocks ✓ (баланс, серии, цитаты, уникальность id и аудио).
- Слепое решение независимым агентом (Sonnet) по копиям без a/why: 64 из 64 совпали с ключом. По его замечаниям переписаны: Lesen 19 (vermutet/prognostiziert → «zögern deshalb wohl»), 22 (Rückmeldung), 11, 12, 14, 16 (дистракторы), Typ 6 E/G/H; Hören 5 (2 слова), 3 и 5 (убраны «ich habe gehört», «glaube ich»), 9 (второй довод отмечен в why), 15, 20, 22, 23, 26 (дистракторы), 29–30 (отличия больше не угадываются по логике), формулировка вопроса 24, «eigene Exemplare».
