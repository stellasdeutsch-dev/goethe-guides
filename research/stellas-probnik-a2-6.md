# Пробник Stellas A2 №6: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-a2-6.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны Командой Stellas. Из материалов Goethe взяты только формат и короткие стандартные инструкции.

## Формат и баллы (источники)
- Lesen 30 мин, 4 части × 5 заданий: Teil 1–3 a/b/c, Teil 2 с вариантом «anderer Stock» (как в Modellsatz), Teil 4 Zuordnung a–f + X, объявление примера занято. [`research/goethe-a2-lesen.md`, MS Seite 3–12]
- Hören ~30 мин: Teil 1 два раза, Teil 2 один раз (a–i, каждую букву один раз; привязка к дням недели как в MS Seite 17), Teil 3 один раз, Teil 4 два раза (Ja/Nein). [`research/goethe-a1-a2-lesen-hoeren.md`, MS Seite 16–19]
- Lesen/Hören: 20 Items × 1,25 = 25. Порог только общий: 45/75 письменно, 15/25 Sprechen, 60 всего. В AnswerSheet `factor={1.25}`, `maxPoints={25}`, без `pass`. [DB 4.1, 4.2, 6.3; `research/a2-modellsatz-razbor.md`]
- Schreiben: SMS 20–30 слов, e-mail 30–40, меньше 50 % слов → E → 0 за задание. [`research/goethe-a2-schreiben.md`, MS Seite 22, 37]
- Sprechen: 2+2, 4+4, 4+4, Aussprache 5; 15 мин в паре, без подготовки; Teil 3 с календарями как в MS. [`research/goethe-a2-sprechen.md`, MS Seite 26–27, 43, DB 1.4]

## Темы
- Lesen T1: общий холодильник на улице в Бохуме (фудшеринг). T2: указатель городского музея (UG–3. Stock). T3: e-mail Наргизы о первом школьном дне сына. T4: жильё для отпуска (Ferienwohnung, хостел, кемпинг, ферма, отель в Альпах, дом у Балтики).
- Hören T1: автошкола (где начнётся урок), Старый мост закрыт (паром для пешеходов), фейерверк на летнем празднике перенесён, подруга отменяет пробежку и зовёт на завтрак, акция «сажаем деревья» (что получат помощники). T2: первая неделя пенсионерки по дням. T3: заказ в ресторане, день родительского собрания, размер брюк, сколько человек на ужине, откуда знакомы. T4: интервью с трубочисткой.
- Schreiben: SMS подруге, у которой вчера был день рождения; e-mail арендодателю о переносе визита мастера.
- Sprechen: T1 Geschwister/Mittagessen/Winter/Radio, Tee/Taxi/Spiele/Briefe; T2 «Wer macht bei Ihnen was im Haushalt?»; T3 вместе в зоопарк в субботу, 3 часа.

## Ключ Lesen
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 c | 6 c (Schließfächer в UG) | 11 a | 16 b |
| 2 a | 7 b (Kinderwerkstatt, 2. Stock) | 12 c | 17 a |
| 3 b | 8 a (Museumsladen, EG) | 13 b | 18 c |
| 4 b | 9 c (Geschichte der Stadt на 2. Stock) | 14 a | 19 X (f максимум 10 человек) |
| 5 a | 10 b (Museumscafé, 3. Stock) | 15 c | 20 e |

Teil 4: пример = d, лишнее объявление f. Баланс Teil 1–3: a 5, b 5, c 5.

## Ключ Hören
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 c (у больницы) | 6 b (Di: Kuchen) | 11 a (суп) | 16 Ja |
| 2 a (закрыт для всех) | 7 g (Mi: Enkel abholen) | 12 a (вторник) | 17 Nein |
| 3 b (завтра в 22) | 8 i (Do: Zahnarzt) | 13 c (42) | 18 Nein |
| 4 b (завтрак у Карлы) | 9 a (Fr: Fahrrad) | 14 b (7 человек) | 19 Ja |
| 5 c (маленькое дерево) | 10 d (Sa: Kino) | 15 a (с работы) | 20 Nein |

Teil 2: пример Montag = e (Garten); лишние c Schwimmbad, f Tanzkurs, h Bibliothek (все прозвучали как отменённые или будущие планы). Teil 1+3: a 4, b 3, c 3. Ja 2, Nein 3.

## Длина вариантов
Скрипт `scratchpad/goethe-a2-author/tools/longest.py`: верный вариант строго самый длинный: Lesen T1 0/5, T3 1/5, Hören T1 0/5, T3 0/5 (в 13 и 14 варианты-числа одинаковой длины).

## Образцы Schreiben (подсчёт слов скриптом)
- SMS Kira: 33 с обращением и подписью, 29 без.
- E-mail Herr Kuhnert: 47 с обращением и подписью, 38 без.

## Sprechen Teil 3: календари
A занят 8–11, 12–13, 17–18, с 19. B занят 9–11, 11–13, с 16.30. День 7–21. Общие свободные окна: 7–8 (1 ч) и 13–16.30. Окно ≥3 ч одно: 13–16.30, диалог приходит к 13–16.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py` → 20 + 20; `python3 -I scripts/audit-mocks.py` ✓ (все цитаты из `why` найдены, id и аудио уникальны, серий нет).
- Сверка тем: Goethe A2 №1–5, telc A2 №1–4 (и новые №5–6 по брони telc-a2), ÖSD A2 №1–3 (и №4–5 по брони oesd-a2). Из-за чужих броней заменены: вылет и турбюро, праздник лодок (вместо портового праздника взят летний праздник в парке), поезд с опозданием, фитнес-студия, Ferienpass. Имена сверены скриптом с A2 всех трёх экзаменов: Pfeiffer, Brückner, Weiß, Gruber, Ruben, Lenk, Haas заменены.

## Слепое решение
Сначала решено самим по тексту без ключа (40/40), по ходу в Teil 3 добавлено «Unser Sohn Daniyar», варианты Hören 1, 3, 4, 5, 11 выровнены по длине. Потом независимый агент решил Lesen и Hören по странице без ключа и объяснений: 40/40 совпали с ключом. По его замечаниям переписано:
- Lesen 12: вариант b «hat Daniyar seine Lehrerin noch nicht kennengelernt» можно было защитить (знакомство «danach», после пения) → «haben die Lehrerinnen gesungen».
- Lesen 14: слабый дистрактор c «bleibt nachmittags zu Hause» → «bringt der Vater ihn jeden Tag zur Schule» (письмо пишет мама: «bringe ich»).
- Lesen 15: неправдоподобный дистрактор a → «ohne ihre Kinder zum Fest kommen».
- Lesen T1: двусмысленное «Viele kommen nicht, weil …» → «Nicht alle kommen, weil …».
- Hören 1: в вопрос добавлено имя (у «seiner» не было антецедента); «an Ihrer Arbeit» → «bei Ihrer Arbeit».
- Hören 2: «dürfen darüber» → «dürfen darüber gehen».
- Hören 14: «noch ein Teller mehr» → «dann decke ich noch einen Teller mehr».
- Lesen 16: Karina → Paulina (почти совпадало с Carina из интервью).
