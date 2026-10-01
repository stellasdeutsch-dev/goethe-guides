# Факты: Goethe B2 Hören (статья `src/content/guides/hoeren/goethe-b2-hoeren.mdx`)

Проверено: 2026-10-01. Базовые факты из `research/b2-modellsatz-razbor.md`, перепроверены по тексту PDF и по расшифровке аудио (Whisper, локально).

## Источники (curl -sIL → 200, 2026-10-01)
- [MS] Modellsatz B2 Erwachsene, Vs1.5_160426: https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_erwachsene.pdf
- [AUDIO] Аудио к Hören, MP4, 38:27: https://www.goethe.de/resources/files/mp468/b2_modellsatz_erwachsene.mp4
- [JUG] Modellsatz B2 Jugendliche: https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_jugendliche.pdf
- [JUG-AUDIO] https://www.goethe.de/resources/files/mp468/b2_modellsatz_jugendliche1.mp4
- [DB] Durchführungsbestimmungen B2, Stand 1.9.2025: https://www.goethe.de/pro/relaunch/prf/de/Durchfuehrungsbestimmungen_B2.pdf

## Формат

| Факт | Источник | Цитата | Дата |
|---|---|---|---|
| Hören: 4 части, около 40 минут, 30 Items: T1 5 R/F + 5 MC, T2 6 MC, T3 6 Zuordnung, T4 8 MC | [MS] S.6, S.17 | «Hören circa 40 Minuten» / «Das Modul Hören hat vier Teile.» | 2026-10-01 |
| Prüfungsziele: T1 Alltagsgespräche verstehen; T2 Informationen verstehen; T3 Aussagen verstehen (Zuordnung Passagen); T4 Vorträge verstehen | [MS] S.6 | см. слева | 2026-10-01 |
| Титульный лист: сначала задания, потом текст; один ответ; 5 минут на перенос после аудио; оценивается только Antwortbogen | [MS] S.17 | «Lesen Sie jeweils zuerst die Aufgaben und hören Sie dann den Text dazu.» / «Nach dem Hören haben Sie fünf Minuten Zeit, Ihre Lösungen auf den Antwortbogen zu übertragen.» | 2026-10-01 |
| Teil 1: пять разговоров/высказываний, каждый один раз, по 2 задания; пример 15 секунд | [MS] S.18 | «Sie hören fünf Gespräche und Äußerungen. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben.» / «Lesen Sie jetzt das Beispiel. Dazu haben Sie 15 Sekunden Zeit.» | 2026-10-01 |
| Teil 2: интервью на радио с «Persönlichkeit aus der Wissenschaft», два раза, 90 секунд | [MS] S.19 | «Sie hören den Text zweimal.» / «Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.» | 2026-10-01 |
| Teil 3: разговор на радио с несколькими людьми, один раз, «Wer sagt das?», 60 секунд; варианты: Moderator + 2 гостя | [MS] S.20; [JUG] S.20 (Moderator, Frau Rodek, Clara) | «Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe: Wer sagt das?» / «Dazu haben Sie 60 Sekunden Zeit.» | 2026-10-01 |
| Teil 4: короткий доклад, два раза, 90 секунд, 8 заданий | [MS] S.21 | «Sie hören einen kurzen Vortrag.» / «Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.» | 2026-10-01 |
| То же устройство в [JUG] (du-форма) | [JUG] Hören | «Du hörst jeden Text einmal.» / «Du hörst den Text zweimal.» / «Dazu hast du 60 Sekunden Zeit.» | 2026-10-01 |
| В аудио: все инструкции и паузы внутри файла; «Am Ende jeder Pause hören Sie dieses Signal.» | [AUDIO] ~00:38 (Whisper); [DB] §1.2 | «Die Audiodatei enthält die Texte zum Modul HÖREN sowie alle Anweisungen und Informationen.» | 2026-10-01 |
| Длительность аудио 38:27 (2307 с) | [AUDIO], ffprobe; см. b2-modellsatz-razbor.md | — | 2026-10-01 |
| Перенос: около 5 минут в пределах времени | [DB] §1.3, п.2 | «Für das Übertragen ihrer Lösungen stehen den Teilnehmenden circa 5 Minuten innerhalb der Prüfungszeit zur Verfügung.» | 2026-10-01 |
| Ответы сначала в Kandidatenblätter, потом в бланк | [DB] §1.3, п.2 | «Die Teilnehmenden markieren ihre Lösungen zunächst auf den Kandidatenblättern und übertragen sie am Ende auf den Antwortbogen Hören.» | 2026-10-01 |
| 30 Items, 1/0, ×3,33 с округлением; 18 → 60, 17 → 57 | [DB] §4.2 | «Im Modul HÖREN gibt es 30 Items.» | 2026-10-01 |
| Порог 60 | [DB] §6.3 | «Ein Modul ist bestanden, wenn mindestens 60 Punkte bzw. 60 % erreicht sind.» | 2026-10-01 |
| Цифровой экзамен: аудио через наушники с платформы, без переноса | [DB] Anhang | «Die Texte zum Modul/Prüfungsteil HÖREN werden direkt durch die Testplattform über Kopfhörer ausgespielt.» / «Die Übertragung auf Antwortbögen entfällt» | 2026-10-01 |

## Наблюдения по официальным материалам (для тактики)
- Teil 1, R/F всегда про тему текста: [MS] 01 «Die Frau fragt nach …», 1 «Die Frau spricht darüber …», 3 «berichtet über …», 5 «hat ein Praktikum … gemacht», 7 «Der Mann berichtet über …», 9 «Die beiden Freunde unterhalten sich über …»; [JUG] 1, 3, 5, 7, 9 тоже «berichtet über/von», «sprechen über». В статье: «в обоих Modellsätze B2 … про тему». (Пункт 5 [MS] про место практики, тоже общая ситуация.)
- Teil 2 и Teil 4: вопросы [MS] идут по ходу текста (проверено по ключу и транскрипту в b2-modellsatz-razbor.md).
- Teil 3, ведущий как ответ: [MS] задание 20 = Moderator. «Вопрос не мнение»: [MS] 18 (ведущий спрашивает, гость утверждает; ключ = гость). В статье пример заменён своим («А это не слишком дорого?»), текст Modellsatz не пересказан.

## Собственный замер (не официальная цифра)
- Пауза перед каждым текстом Hören Teil 1 в [AUDIO]: ffmpeg silencedetect (−35 dB, ≥ 4 с) на отрезке 01:00–08:00 → тишина 15,9–16,8 с после «Lesen Sie jetzt die Aufgaben X und Y» (5 раз) и 5,6–7,5 с после каждого текста. В статье: «около 15 секунд (замер по записи Modellsatz)». В PDF для этих пауз число секунд не указано, только для примера (15 с).

## Расчёты автора
- 90 с / 6 = 15 с на вопрос (Teil 2); 60 с / 6 = 10 с (Teil 3); 90 с / 8 ≈ 11 с (Teil 4).
- Сравнение с B1 (из `research/sovety-goethe-b1-hoeren.md` / goethe-b1-facts.md): на B1 дважды Teil 1 и Teil 4, один раз Teil 2 и 3. На B2 дважды Teil 2 и Teil 4.
- Сумма вопросов в четырёх своих аудио: 3 + 4 + 6 + 5 = 18.

## Свои тексты
Все четыре аудио (новость о Tempo 30, интервью об Ehrenamt, дискуссия о Vier-Tage-Woche, доклад об Aufschieben) написаны с нуля, люди и город вымышленные, без названия города. Утверждения в них поданы как мнения героев, без цифр и ссылок на исследования.

## Не подтверждено / осторожно
- Точная длина пауз в Teil 1 на реальном экзамене официально не указана (есть только 15 с для примера).
- «Ведущий + двое гостей» в Teil 3 видно в обоих Modellsätze; гарантии, что на экзамене всегда трое, нет. В статье: «в Modellsatz» / таблица по Modellsatz.
