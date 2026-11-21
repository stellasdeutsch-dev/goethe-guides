# Пробник Stellas C1 №3: ключ и факты

Статья: `src/content/guides/probniki/stellas-probnik-c1-3.mdx`. Создано 2026-11-21. Тексты, аудиоскрипты и задания написаны с нуля, из материалов Goethe взяты только формат и короткие инструкции.

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
- Lesen T1: почему лёд скользкий (теория давления, жидкоподобный поверхностный слой, трение).
- Lesen T2: собаки в офисе (агентство Tobias Hennig, психолог Dr. Carolin Wiese).
- Lesen T3: комментарий о непунктуальности «Fünf Minuten sind kein Naturgesetz».
- Lesen T4: мясо из пробирки (Lassen / Ebner / Kranz).
- Hören T1: подкаст о трёх спектаклях. T2: интервью с диалектологом Prof. Katharina Wolff. T3: дискуссия о пустых церквях (Pfarrerin Lindemann, Architekt Kowalczyk). T4: доклад о действии цвета (Dr. Paul Engelhardt).
- Schreiben: форум «Werbefreie Städte?»; письмо Frau Brandl (курс VHS переводят в онлайн).
- Sprechen T1: Олимпийские игры / безусловный базовый доход (+ доп.: Tempolimit, Frauenquote, переработка детских книг). T2: ДНК-тест для частных лиц (+ доп.: рассрочка через приложения, бесплатные туалеты, рестораны без детей).

Люди, город Lindenau-агентство, театры, клуб, церкви вымышлены.

## Реальные сведения в текстах (поданы осторожно, без цифр)
Проверка: правовые факты (LAG Düsseldorf, GenDG § 7, закон Франции 2024, реформа Namensrecht 2025) сверены поиском 2026-11-21. Ссылки на научные статьи и Wikipedia в этой сессии не открывались: это общеизвестные исследования, в текстах они поданы без цифр и через персонажей («Studien deuten darauf hin», «in einer Studie»).

- Лёд: теория плавления от давления не объясняет скольжение (нужное давление недостижимо, лёд скользкий и при сильном морозе); принята модель тонкого жидкоподобного слоя на поверхности; трение и нагрев при скольжении. Обзор: Rosenberg, «Why is ice slippery?», Physics Today 58(12), 2005, https://pubs.aip.org/physicstoday/article/58/12/50/ ; Faraday предложил поверхностный слой в 1850-е → «seit dem 19. Jahrhundert».
- Собаки в офисе: права на собаку нет, решает работодатель (Direktionsrecht), разрешение можно отозвать при наличии sachlicher Grund. LAG Düsseldorf 24.03.2014, 9 Sa 1207/13: https://www.hensche.de/Hausverbot_fuer_Buerohund_Kaya_bestaetigt_LAG_Duesseldorf_9Sa1207-13.html ; https://www.haufe.de/personal/arbeitsrecht/recht-des-arbeitgebers-keinen-hund-mit-ins-buero-bringen_76_197484.html. Ответственность владельца животного: § 833 BGB (https://www.gesetze-im-internet.de/bgb/__833.html), в тексте «in der Regel».
- Мясо из пробирки: общеизвестные положения (биореактор, высокая цена, энергозатраты), поданы как мнения вымышленных экспертов.
- Цвет: красный обложки и результаты тестов (Elliot et al., JEP: General 2007); крупные повторения эффекта не нашли (напр. Gnambs, Psychonomic Bulletin & Review 2020, метаанализ) → «Neuere Versuche … konnten den Effekt nicht bestätigen». Розовый «Baker-Miller pink», 1979, тюремные камеры, надёжного эффекта нет (Wikipedia «Baker-Miller Pink» https://en.wikipedia.org/wiki/Baker-Miller_Pink) → «in den Siebzigerjahren». Голубой/синий в русском и скорость различения (Winawer et al., PNAS 2007, https://www.pnas.org/doi/10.1073/pnas.0701644104). Белый как траурный цвет в части Азии, красное свадебное платье в Китае/Индии: общеизвестно.
- Диалог Sprechen: § 7 GenDG, Arztvorbehalt для генетических исследований (https://www.gesetze-im-internet.de/gendg/__7.html), подано «Soweit ich weiß … eigentlich nur Ärztinnen und Ärzte veranlassen». Казахская традиция «жеті ата» (знать предков до седьмого колена): https://en.wikipedia.org/wiki/Zheti_Ata (подано от лица персонажа).
- Мнения о диалектах (Regiolekte, восприятие компетентности/симпатии, диалект в чатах) поданы как слова вымышленной исследовательницы, без цифр.

## Ключ Lesen
Teil 1 (пример 0 = a obwohl): 1 c steht, 2 a zutreffen, 3 d denen, 4 b halten, 5 a der, 6 d allerdings, 7 c Demnach, 8 b dagegen.
Teil 2: 9 b, 10 a, 11 c, 12 a, 13 c, 14 b, 15 a.
Teil 3 (пример 0 отдельно): 16 d, 17 f, 18 a, 19 i, 20 e, 21 j, 22 b, 23 g. Лишние: c, h.
Teil 4 (a Lassen, b Ebner, c Kranz; пример 0 = a): 24 c, 25 a, 26 b, 27 0, 28 a, 29 b, 30 0.

## Ключ Hören
Teil 1 (a/b/c = Inszenierung 1/2/3): 1 a, 2 c, 3 b, 4 b, 5 a, 6 c. Задания не по порядку записи.
Teil 2: 7 stimmt nicht, 8 stimmt, 9 stimmt, 10 nichts gesagt, 11 stimmt nicht, 12 stimmt, 13 nichts gesagt, 14 stimmt nicht, 15 stimmt.
Teil 3: 16 b, 17 c, 18 a, 19 c, 20 b, 21 a, 22 c, 23 b.
Teil 4: 24 b, 25 c, 26 a, 27 c, 28 b, 29 a, 30 c.

## Перепроверка однозначности (слепое решение)
- L1-1: после «in manchen Schulbüchern» только stehen; L1-5: verdanken + Dativ, Schicht f → der; L1-3: Temperaturen pl. + bei → denen.
- L2-11: «Ob der Hund die Ursache ist …» → вопрос причины, вариант b опровергнут («weniger Stress»). L2-13: отзыв разрешения есть в тексте, ответственность у владельца, не у фирмы.
- L3-20: e против h: «Wer so handelt» с h указывало бы на хозяев, несвязно; L3-18: a держится на «dagegen» к «Kleinigkeit»; c и h лишние.
- L4-27: обе стороны (a, b) прямо отрицают скорую дешевизну → 0; L4-30: Kranz называет довод «unnatürlich» и отвергает → 0.
- H2-10 (зарплаты) и H2-13 (диалект как школьный предмет): мысли в интервью нет → nichts gesagt; H2-14: совет «Nur Mut» противоположен → stimmt nicht.
- H3-19: пасторша принимает квартиры и библиотеку без богослужений → b неверен, верен c.
- H4-24: эффект красного не подтвердился в новых опытах; H4-26: «überall» опровергнуто (траур в Азии белый).
- Переписано после слепого решения: пример 0 в L1 (sodass заменён на indem, иначе два возможных варианта); L2-14 вариант c расширен; формулировки цитат в why L1-1, L1-2.

## Пересечения тем
Проверены все C1-пробники Stellas: Goethe №1–2, telc C1 №1–4, telc C1 Hochschule №1–4, ÖSD C1 №1–4 (состояние на 2026-11-21, ~19:30). Первая версия №3 пересекалась с параллельно написанными пробниками (зевота, секонд-хенд, скука, воскресная торговля, психология подарков, донорство органов) и была переписана. Совпадения слов (Kirche, Dialekt, Farbe, Hund) в чужих файлах только случайные, не темы.
