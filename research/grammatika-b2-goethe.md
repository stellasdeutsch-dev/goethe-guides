# Факты: грамматика для Goethe B2 (статья `src/content/guides/grammatik/grammatika-b2-goethe.mdx`)

Проверено: 2026-10-01. Баллы и критерии из уже проверенных `research/kriterii-schreiben-goethe.md` и `research/kriterii-sprechen-goethe.md`, перепроверены по pdftotext Modellsatz B2.

## Источники (curl -sIL → 200, 2026-10-01)
- [MS] Modellsatz B2 Erwachsene, Vs1.5_160426: https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_erwachsene.pdf
- [DB] Durchführungsbestimmungen B2, Stand 1.9.2025: https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B2.pdf
- [G-WP] grammis, werden-Passiv: https://grammis.ids-mannheim.de/terminologie/290
- [G-SP] grammis, sein-Passiv: https://grammis.ids-mannheim.de/progr@mm/6724
- [G-K2] grammis, Konjunktiv II: https://grammis.ids-mannheim.de/terminologie/401
- [G-WN] grammis, Weiterführende Nebensätze: https://grammis.ids-mannheim.de/systematische-grammatik/2114
- [DWDS-je] https://www.dwds.de/wb/je
- [DUDEN-K] Duden, Rechtschreibregeln: Komma: https://www.duden.de/sprachwissen/rechtschreibregeln/komma

## Критерии и баллы

| Факт | Источник | Цитата | Дата |
|---|---|---|---|
| Schreiben B2, Strukturen: «Spektrum» и «Beherrschung (Morphologie, Syntax, Orthografie)» | [MS] S.46 | «Beherrschung (Morphologie, Syntax, Orthografie)» | 2026-10-01 |
| Schreiben Strukturen A: Spektrum «differenziert», Beherrschung «vereinzelte Fehlgriffe beeinträchtigen das Verständnis nicht»; B: «überwiegend angemessen», «mehrere Fehlgriffe beeinträchtigen das Verständnis nicht» | [MS] S.46 | см. слева | 2026-10-01 |
| Schreiben баллы Strukturen: Teil 1 16/12/8/4/0; Teil 2 10/7,5/5/2,5/0 → 26 из 100 | [MS] S.47 (Bewertungsbogen) | — | 2026-10-01 |
| Sprechen B2, Strukturen: «Spektrum, Beherrschung (Morphologie, Syntax)»; A «differenziert, vereinzelte Fehlgriffe stören nicht» | [MS] S.49 | см. слева | 2026-10-01 |
| Sprechen баллы Strukturen: Teil 1 8/6/4/2/0; Teil 2 10/7,5/5/2,5/0 → 18 из 100 | [MS] S.50; kriterii-sprechen-goethe.md | — | 2026-10-01 |
| Kohärenz Schreiben: строка «Verknüpfung von Sätzen, Satzteilen» | [MS] S.46 | «Verknüpfung von Sätzen, Satzteilen» | 2026-10-01 |
| Kohärenz Sprechen Teil 1: «Verknüpfung von Sätzen und Satzteilen» | [MS] S.49 | см. слева | 2026-10-01 |
| Sprachfunktionen Schreiben: T1 «Meinung äußern, begründen, etwas vorschlagen, Vor- und Nachteile erläutern»; T2 «erklären, beschreiben, etwas vorschlagen, höflich bitten» | [MS] S.6 | см. слева | 2026-10-01 |
| Sprechen Aufgabenerfüllung: «z. B. Alternativen beschreiben, Vor- und Nachteile nennen …» | [MS] S.49 | см. слева | 2026-10-01 |
| В Modellsatz нет списка грамматических тем (grep по pdftotext: «Passiv», «Konjunktiv», «Relativ», «Nominal» → 0 совпадений) | [MS] весь текст | — | 2026-10-01 |

## Leistungsbeispiele (для хука)
[MS] S.48: «Leistungsbeispiele Schreiben für das Niveau B2. Bei diesen Texten handelt es sich um authentische Beispiele von Deutschlernenden auf dem Niveau. Fehler wurden nicht korrigiert.» Два текста (Teil 1, Teil 2).
- Teil 1: «sowohl» в перечислении без «als auch»; конструкция «nicht nur … sondern auch» с ошибочным продолжением (werden + ausgesehen).
- Teil 2: «Sie wird diese Woche operiert lassen» (смешение Passiv и lassen).
В статье цитата только «operiert lassen» (2 слова), остальное пересказ. Оценки за эти тексты в Modellsatz не указаны, поэтому в статье только «уровень B2, ошибки не исправлены».

## Грамматические правила

| Правило | Источник | Цитата | Дата |
|---|---|---|---|
| werden-Passiv: Hilfsverb werden + Partizip II | [G-WP] | «mit dem passivbildenden Hilfsverb werden (und dem Partizip II des jeweiligen Vollverbs)» | 2026-10-01 |
| sein-Passiv (Zustandspassiv): sein + Partizip II, результат, а не процесс | [G-SP] | «Anders als das werden-Passiv liegt der Fokus nicht auf der Handlung, sondern auf dem Ergebnis.» / пример «Das Zimmer ist geputzt.» | 2026-10-01 |
| Konjunktiv II: Konjunktiv Präteritum + аналитическая форма (Hilfsverb im Konj. II + Partizip II); würde-Form как функциональный эквивалент; Irrealis, Konditionalsätze | [G-K2] | «Wenn es nach mir ginge, könnte das noch Stunden lang so weitergehen.» | 2026-10-01 |
| Weiterführende Nebensätze вводятся was или Präpositionaladverb (wobei, wofür, wozu, worüber, woran, worauf) | [G-WN] | «ein einleitendes W-Element: was, Präpositionaladverb wie wobei, wofür, wozu, worüber, woran, worauf» | 2026-10-01 |
| je + Komparativ … desto/umso + Komparativ (Gradsatz) | [DWDS-je] | «je weiter wir fuhren, desto wilder wurde die Gegend» | 2026-10-01 |
| Запятая обязательна при Infinitivgruppe с als, anstatt, außer, ohne, statt, um | [DUDEN-K] | «Die Infinitivgruppe wird durch eine der folgenden Konjunktionen eingeleitet: als, anstatt, außer, ohne, statt, um.» | 2026-10-01 |
| sowohl – als (auch), weder – noch: без запятой (как und/oder); nicht nur …, sondern auch: запятая перед sondern | [DUDEN-K] | «sowohl – als [auch] … Der Vorfall war sowohl ihm als auch seiner Frau sehr peinlich.» / «Sie hat ihn nicht nur abgewiesen, sondern auch ausgelacht.» | 2026-10-01 |

Правила wo(r)+ после alles/etwas/nichts/vieles и для людей «Präposition + der/die/das» — стандартная школьная грамматика; источник для «weiterführend» [G-WN], для «was nach alles, etwas, nichts» grammis «Relativsätze mit was» https://grammis.ids-mannheim.de/progr@mm/6869 («Alles, was Sie sagen, ist richtig»). Форма wor- перед гласной / wo- перед согласной: стандартное правило образования Präpositionaladverbien (grammis «W-Präpositionaladverb», https://grammis.ids-mannheim.de/terminologie/369).

## Примеры
Все немецкие примеры и абзац форума («Sperrung der Innenstädte») написаны с нуля. Темы Modellsatz (Plastikverpackungen, Praktikum, Ernährung) не используются. Каждая фраза проверена вручную: Passiv Perfekt с worden, порядок слов после wenn-придаточного, Ersatzinfinitiv «hätte … anfangen sollen», падежи после предлогов в Relativsätze, Genitiv после номинализации, запятые по [DUDEN-K].

## Не подтверждено / осторожно
- Официального перечня грамматики для Goethe B2 не нашёл. Старое «Prüfungsziele, Testbeschreibung B2» (https://www.goethe.de/pro/relaunch/prf/de/Pruefungsziele_Testbeschreibung_B2.pdf, 1. Auflage 2007, описывает старый формат экзамена) отсылает к «Profile deutsch (2005)». В статью не вошло, потому что документ описывает формат до 2019 года.
- «Одна-две номинализации на абзац», «три конструкции на текст» — рекомендации автора, не правила Goethe.
- Связь «Passiv/Konjunktiv поднимает баллы» не официальная формула: официально только «Spektrum differenziert» для A. Статья так и формулирует.
