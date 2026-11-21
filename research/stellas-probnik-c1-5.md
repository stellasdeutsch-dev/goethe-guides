# Пробник Stellas C1 №5: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-c1-5.mdx`. Создано 2026-11-21. Тексты, аудиоскрипты и задания написаны с нуля, из материалов Goethe взяты только формат и короткие инструкции.

## Факты о формате
Все цифры взяты из уже проверенных файлов, заново не перепроверялись (как в `research/stellas-probnik-c1-1.md`):
- `research/c1-modellsatz-razbor.md`, `research/goethe-c1-lesen.md`, `research/goethe-c1-hoeren.md` (MS C1 modular, 2. Auflage Februar 2024, Stand April 2026; DB C1, Stand 1.9.2025):
  - Lesen 65 мин, 4 части 8 + 7 + 8 + 7 = 30; рекомендованное время 10/20/20/15 (MS S. 8, 10, 12, 14); ~5 мин на перенос внутри 65 (DB 2.2). Teil 1 Lückentext a–d; Teil 2 MC a–c; Teil 3 10 предложений a–j на 8 пропусков, «Zwei Sätze passen nicht»; Teil 4 авторы a–c, 7 утверждений, «Zwei Aussagen passen nicht. Markieren Sie in diesem Fall 0.»
  - Hören ca. 40 мин, 4 части 6 + 9 + 8 + 7 = 30. Teil 1 подкаст-рецензия, один раз, 60 с; Teil 2 интервью, два раза, 60 с, stimmt / stimmt nicht / dazu wird nichts gesagt; Teil 3 дискуссия трёх человек, четыре отрывка по разу, по 2 задания, 30 с; Teil 4 доклад, два раза, 90 с; 3 минуты на перенос (MS S. 17, DB 2.2).
  - DB 4.1/4.2: 1 или 0 за задание, ×3,33, округление; DB 6.3: порог 60 → 18 из 30; 17 → 57.
- `research/goethe-c1-schreiben.md`, `research/schreiben-c1-teil-1.md`, `research/schreiben-c1-teil-2.md`: Schreiben 75 мин; Teil 1 форум ca. 230 слов, 50 мин, 60 баллов; Teil 2 (halb-)formelle Mitteilung ca. 120 слов, 25 мин, 40 баллов; E по Erfüllung (меньше 50 % слов или мимо темы) = 0 за задание (MS S. 42–43); PO §11.4 о заученных текстах.
- `research/goethe-c1-sprechen.md`: подготовка 20 мин на модуль (пара и одиночный), заметки можно; Teil 1 доклад ca. 5 мин + вопросы ca. 2 мин; Teil 2 дискуссия ca. 5 мин; баллы 52 (12 за вопросы) + 32 (4 Interaktion) + 16 Aussprache; Teil 2: короткий текст + 4 пункта (kommentieren, begründen, Heimatland, sich einigen).

Настройки бланков: Lesen `minutes=65, factor=3.33, maxPoints=100, pass=60`; Hören `minutes=40, factor=3.33, maxPoints=100, pass=60`. SpeakCards Teil 1 prep 1200 с, talk 300 с; Teil 2 prep 60 с (авторская минута перечитать заметки), talk 300 с. Trainer target 230/120.

Стандартные инструкции на немецком (Wählen Sie …, Zwei Sätze passen nicht, Sie hören den Text einmal/zweimal, in vier Abschnitten jeweils einmal, Gehen Sie auf alle vier Punkte ein …, Diskutieren Sie gemeinsam circa 5 Minuten, Schreiben Sie circa 230/120 Wörter) короткие, по образцу MS.

Аудио: реплики в Teil 2 и Teil 3 размечены метками с явным полом (Moderator/Moderatorin, Frau …, Herr …, фамилия гостя при полном имени в тексте). Скриптом из `scripts/gen-listen-audio.py` (регулярка LABEL) проверено, что в монологах нет ложных меток вида «Mein Tipp:». Озвучка не запускалась.

## Темы
- Lesen T1: как гекконы держатся на потолке (волоски, силы Ван-дер-Ваальса, бионика).
- Lesen T2: агрофотовольтаика над яблоневым садом (Obstbäuerin Katrin Bauer, Dr. Jonas Feldmann).
- Lesen T3: комментарий о самооптимизации «Der vermessene Mensch».
- Lesen T4: сколько риска нужно детям в игре (Scholz / Ott / Schulze).
- Hören T1: подкаст о трёх ресторанах. T2: интервью с составителем кроссвордов Jonas Reiter. T3: дискуссия «снимать или покупать жильё» (Dr. Brückmann, Mieterverein Herr Seifert). T4: доклад об ошибке планирования, почему всё длится дольше плана (Dr. Florian Weiß).
- Schreiben: форум «Mehr Kameras, mehr Sicherheit?»; письмо Frau Krüger (отмена постоянных рабочих мест).
- Sprechen T1: потолок зарплат профи-спортсменов / проверки пожилых водителей (+ доп.: реституция колониальных экспонатов, спорные памятники, курс первой помощи). T2: общая фамилия после свадьбы (+ доп.: собеседования по видео, офлайн-путь в ведомствах, деньги детям за помощь по дому).

## Реальные сведения в текстах (поданы осторожно, без цифр)
Проверка: факт о Namensrecht сверен поиском 2026-11-21. Ссылки на научные работы в этой сессии не открывались: общеизвестные исследования, поданы без цифр.
- Гекконы: щетинки с лопаточками и силы Ван-дер-Ваальса (Autumn et al., Nature 405, 2000; PNAS 2002); самоочищение лап (Hansen & Autumn, PNAS 2005); захваты по образцу геккона для космоса (NASA JPL, https://www.jpl.nasa.gov/news/gecko-gripper). Присоски не работают в вакууме.
- Агрофотовольтаика: панели над садом защищают от града и солнечных ожогов, меньше испарения, полутень подходит ягодам и яблокам хуже, чем зерновым; конструкция выше и дороже обычных парков (обзор Fraunhofer ISE, https://www.ise.fraunhofer.de/de/geschaeftsfelder/photovoltaik-kraftwerke-und-integrierte-photovoltaik/integrierte-photovoltaik/agri-photovoltaik-agri-pv.html). Хозяйство, деревня и сроки вымышлены.
- Самооптимизация: «Orthosomnia» (Baron et al., J Clin Sleep Med 2017) → «einen eigenen Begriff», без названия.
- Риск в игре: шлем при лазании может стать причиной удушения в верёвках (стандартный совет по безопасности детских площадок, напр. https://www.das-sichere-haus.de). Остальное подано как мнения вымышленных экспертов.
- Ошибка планирования: термин Kahneman & Tversky, 1979 → «Ende der Siebzigerjahre» (https://en.wikipedia.org/wiki/Planning_fallacy); исследование с дипломными работами, где многие закончили позже собственного «худшего случая», и более точные оценки посторонних (Buehler, Griffin & Ross, JPSP 67, 1994); задержки и удорожание крупных проектов и стратегическое занижение смет (Flyvbjerg). Без названий проектов и цифр.
- Жильё: рост ставок после периода дешёвых денег (2022) подан без дат: «Vor einigen Jahren … Als die Zinsen dann gestiegen sind».
- Диалог Sprechen: с 1.5.2025 ребёнку можно дать двойную фамилию из фамилий обоих родителей, не больше двух частей (Auswärtiges Amt, https://www.auswaertiges-amt.de/ke-de/2702574-2702574) → «Soweit ich weiß … seit 2025».

## Ключ Lesen
Teil 1 (пример 0 = a Zudem): 1 c verzweigen, 2 a bezeichnen, 3 d wie, 4 b Aufgrund, 5 a ohne, 6 c denen, 7 d lässt (nach), 8 b Somit.
Teil 2: 9 a, 10 c, 11 b, 12 a, 13 c, 14 b, 15 a.
Teil 3: 16 f, 17 d, 18 i, 19 a, 20 h, 21 e, 22 j, 23 b. Лишние: c, g.
Teil 4 (a Scholz, b Ott, c Schulze; пример 0 = a): 24 a, 25 b, 26 c, 27 0, 28 c, 29 b, 30 0.

## Ключ Hören
Teil 1 (a/b/c = Restaurant 1/2/3): 1 c, 2 a, 3 b, 4 b, 5 a, 6 c.
Teil 2: 7 stimmt, 8 stimmt nicht, 9 stimmt nicht, 10 stimmt, 11 nichts gesagt, 12 stimmt, 13 stimmt nicht, 14 nichts gesagt, 15 stimmt nicht.
Teil 3: 16 a, 17 c, 18 b, 19 a, 20 c, 21 b, 22 c, 23 a.
Teil 4: 24 b, 25 c, 26 b, 27 a, 28 c, 29 a, 30 c.

## Перепроверка однозначности (слепое решение)
- L1-1: «sich in … verzweigen»; verteilen in + Akk здесь не идиоматично. L1-7: «nach» в конце → nachlassen. L1-8: вывод → Somit.
- L2-9: «Der Hauptgrund … war allerdings nicht der Strom» отсекает b; L2-11: «großer Vorteil» в сухое лето отсекает c.
- L3-19/20: a (здоровье как заслуга) держится на «moralisch» и «Ruf», h на «bequem» и «Denn»; лишние c, g (g спорит с «nicht immer ist klar»).
- L4-27: Ott советует снимать шлем → 0; L4-30: Ott «unverzichtbar» → 0.
- H1-6: в ресторане 2 есть и мясное блюдо → c.
- H2-11 (премия) и H2-14 (книга): мысли нет → nichts gesagt; H2-9: «Leichte Rätsel brauchen … eindeutige Fragen» → stimmt nicht.
- H3-21: «mehr Sorgen» после роста ставок = трудности; вариант c заменён, чтобы не было двусмысленности.
- H4-28: «nicht nur an der Psychologie» отсекает b («allein»); H4-29: планирование шаг за шагом названо причиной ошибки, поэтому b неверен.

## Пересечения тем
Проверены все C1-пробники Stellas (Goethe №1–2, telc C1 №1–4, Hochschule №1–4, ÖSD C1 №1–4, ~19:30). Первая версия №5 пересекалась с параллельными (осьминоги, подводная археология, оплата практик, смех, хор, сдача квартир туристам, опыты на животных, чтение с бумаги); интервью с метеорологом заменено на кроссворды, когда в telc C1 №4 появился доклад метеоролога. Пограничное: подкаст о ресторанах (Hören T1) и мнения о плате за неявку в ресторан (telc C1 №4, Hören Teil 1): разные вопросы, оставлено.

## Замена по решению редактора (2026-11-21)
Hören Teil 4: доклад о первом впечатлении заменён на доклад об ошибке планирования, потому что в Goethe B2 №5 есть доклад «Der erste Eindruck». Перед выбором проверены все пробники Stellas B2, C1, C2 всех трёх экзаменов: тем Planungsfehlschluss, сроков и смет больших проектов нет (лекции ÖSD C2 №3–4 о принятии решений, без этой темы). Ключ Teil 4 по позициям не изменился: 24 b, 25 c, 26 b, 27 a, 28 c, 29 a, 30 c.
