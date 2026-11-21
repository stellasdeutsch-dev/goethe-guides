# Пробник Stellas A2 №4: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-a2-4.mdx`. Создано 2026-11-21.
Все тексты и аудиосценарии написаны Командой Stellas. Из материалов Goethe взяты только формат и короткие стандартные инструкции.

## Формат и баллы (источники)
- Lesen 30 мин, 4 части × 5 заданий: Teil 1–3 a/b/c (Teil 2 с «anderer Stock»), Teil 4 Zuordnung a–f + X. [`research/goethe-a2-lesen.md`, MS Seite 3–12]
- Hören ~30 мин: Teil 1 и 4 дважды, Teil 2 и 3 один раз; Teil 2 a–i, каждую букву один раз; Teil 4 Ja/Nein. [`research/goethe-a1-a2-lesen-hoeren.md`, MS Seite 16–19]
- 20 Items × 1,25 = 25 за Lesen и за Hören; порог общий 45/75 + 15/25 + 60. `factor={1.25}`, `maxPoints={25}`, без `pass`. [DB 4.1, 4.2, 6.3]
- Schreiben: SMS 20–30, e-mail 30–40, меньше 50 % слов → 0. [MS Seite 22, 37]
- Sprechen: 2+2, 4+4, 4+4, Aussprache 5. [MS Seite 43]

## Темы
- Lesen T1: «бабушка напрокат», союз, который сводит пожилых людей и семьи. T2: указатель в мебельном магазине. T3: e-mail Бекзата: купили фудтрак, просьба сделать фото для сайта. T4: объявления об экскурсиях на выходные.
- Hören T1: веломагазин (выбор шины), музей закрывается раньше, радио собирает осенние фото, коллега просит распечатать презентацию, транспорт после матча. T2: день уборки в доме (кто что делает). T3: запись к врачу, планы на дождливое воскресенье, портниха, этаж соседки, билет на день. T4: интервью с хозяйкой кафе-мороженого.
- Schreiben: SMS другу с просьбой одолжить машину; e-mail соседке о вечеринке.
- Sprechen: T1 Reisen/Morgen/Geschenke/Fotos, Zug/Supermarkt/Abend/Feiertag; T2 «Wie war Ihre Schulzeit?»; T3 скалодром, воскресенье, 3 часа.

## Ключ Lesen
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 b | 6 a (Büromöbel, 2. Stock) | 11 b | 16 f |
| 2 a | 7 c (Geschirr, 1. Stock) | 12 a | 17 b |
| 3 b | 8 b (Kinderland, EG) | 13 c | 18 a |
| 4 c | 9 c (Abholung, UG) | 14 b | 19 X (Kanu ab 12, сыну 10) |
| 5 a | 10 a (Restaurant, 1. Stock) | 15 a | 20 e |

Teil 4: пример = d, лишнее объявление c. Баланс Teil 1–3: a 6, b 5, c 4.

## Ключ Hören
| Teil 1 | Teil 2 | Teil 3 | Teil 4 |
|---|---|---|---|
| 1 c (позвонить) | 6 h (Familie Weiß: Blumen) | 11 a (Di 16 Uhr) | 16 Nein |
| 2 b (до 16) | 7 f (Kowalski: Müll) | 12 c (Museum) | 17 Ja |
| 3 a (с телефона) | 8 a (Studenten: Fenster) | 13 a (Hose) | 18 Ja |
| 4 c (распечатать) | 9 c (Okafor: Hof) | 14 b (5. Stock) | 19 Nein |
| 5 a (Bus 22) | 10 e (Yilmaz: Lampe) | 15 b (Tageskarte) | 20 Nein |

Teil 2: пример Frau Neumann = d (Treppe); лишние b Kuchen, g Keller, i Fahrräder. Teil 1+3: a 4, b 3, c 3. Ja 2, Nein 3.

## Образцы Schreiben (подсчёт слов скриптом)
- SMS Erik: 30 с обращением и подписью, 27 без.
- E-mail Frau Winter: 41 с обращением и подписью, 38 без.

## Sprechen Teil 3: календари
День 8–21. A занят 8–9, 9.30–11, 12–13, 15–16, с 19. B занят 10–12, 13–15, 19–20, с 20.30. Общее окно ≥3 ч только 16–19.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py` → 20 + 20.
- Слепое решение по тексту без ключа: 40/40 совпали. Lesen 3c заменён: «союзу два года» текст прямо не опровергал.
- Сверка тем с параллельными пробниками A2 (ÖSD A2 №1–3, telc A2 №2–4) показала совпадения, всё заменено с сохранением ключа:
  - Lesen T3 «мы женимся, свадьба 14 июня» = Schreiben ÖSD A2 №1 → e-mail о фудтраке.
  - Hören T4 горная хижина с канатной дорогой = Lesen ÖSD A2 №3 → интервью о кафе-мороженом.
  - Hören T1 «Friseursalon Schnittpunkt» и радиоконкурс = telc A2 №2 → веломагазин и сбор фото.
  - Hören T3 ремонт телефона = telc A2 №3 → портниха.
- Все немецкие цитаты из `why` найдены дословно в текстах и скриптах.
