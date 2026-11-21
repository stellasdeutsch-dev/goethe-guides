# Пробник Stellas telc A1 №5: ключ и источники

Статья: `src/content/guides/telc/probniki/telc-a1-probnik-stellas-5.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны Командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции. Аудио не генерировалось (озвучка после редактора).

## Формат и баллы (из research/telc-a1.md = telc Start Deutsch 1, Übungstest 1, 2021, с. 5, 7–21, 34)
- Hören ca. 20 мин, 15 заданий: Teil 1 (1–6, a/b/c, zweimal), Teil 2 (7–10, richtig/falsch, einmal), Teil 3 (11–15, a/b/c, zweimal). `plays` = 2/1/2.
- Lesen und Schreiben 45 мин вместе (Lesen ca. 25, Schreiben ca. 20). Lesen 15 заданий: Teil 1 (1–5, R/F, 2 текста), Teil 2 (6–10, a/b), Teil 3 (11–15, R/F).
- Schreiben: Teil 1 формуляр 5 × 1 балл; Teil 2 ca. 30 слов, 3 пункта × 3/1,5/0 + оформление 1/0,5/0, max 10.
- Sprechen 15 баллов: Teil 1 max 3, Teil 2 max 6, Teil 3 max 6. Обычно 4 участника, без подготовки.
- Всего 60; Prädikat ausreichend с 36 (шкала Übungstest). Порог общий → в AnswerSheet `factor={1}`, `maxPoints={15}`, без `pass`.
- AnswerSheet id: `telc-a1-stellas-5-hoeren`, `telc-a1-stellas-5-lesen`; Trainer id `telc-a1-stellas-5-schreiben`.

## Темы (бронь: scratchpad/topics/telc-a1.md; не пересекаются с telc A1 №1–4, Goethe A1 №1–5, ÖSD A1 №1–3)
Hören: аптека (сколько раз таблетки), утренняя пробежка, куда поставить диван, пешком до вокзала, спорт Эмиля, ужин; кормление пингвинов, кафетерий в больнице, физкультура в зале, найденный телефон в универмаге; физиотерапия переехала, ряд в кино, первый рабочий день, детский сад в лес, встреча в супермаркете о работе.
Lesen: письмо: родители приезжают из Казахстана; записка соседки: отдаёт мебель перед переездом; работы в саду, классический концерт, ателье (брюки), прокат байдарки, врач с русским языком; бассейн до 8 лет, Wi-Fi в отеле, гриль в парке, бюро находок, копицентр.
Schreiben: анкета для управляющей компании (квартира); записка коллеге на du (врач, опоздание).
Sprechen: Teil 2 «Medien», «Natur»; Teil 3 мыло, подушка, тетрадь, апельсины, перец, солнечные очки.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1 | c (dreimal) | «Nein, dreimal» |
| 2 | a (6.30) | «Also um halb sieben» |
| 3 | b (Wohnzimmer) | «Das Sofa kommt ins Wohnzimmer» |
| 4 | a (15 Minuten) | «Zu Fuß sind es nur fünfzehn Minuten» |
| 5 | c (Tennis) | «Jetzt spielt er Tennis» |
| 6 | b (Suppe) | «Dann koche ich eine Gemüsesuppe» |
| 7 | falsch | «Heute um fünfzehn Uhr»; «Um elf Uhr … leider nichts» |
| 8 | richtig | «Am Nachmittag bekommen Sie Kaffee und Kuchen im Kiosk» |
| 9 | richtig | «nicht auf dem Sportplatz, sondern in der Turnhalle» |
| 10 | falsch | «an der Kasse im dritten Stock» |
| 11 | a (Bergstraße) | «Unsere neue Praxis ist in der Bergstraße sieben» |
| 12 | c (Reihe 14) | «Wir sitzen in Reihe vierzehn» |
| 13 | b (zu Herrn Busch) | «zuerst zu mir ins Büro» (звонит Herr Busch) |
| 14 | b (Gummistiefel) | «Bitte geben Sie Ihrem Kind Gummistiefel mit» |
| 15 | c (Do 10 Uhr) | «Kommen Sie bitte am Donnerstag, auch um zehn Uhr» |

Баланс a/b/c: 3/4/4; R/F 2/2. Верный вариант самый длинный: 0 из 11.

## Ключ Lesen
1 R · 2 F · 3 F · 4 R · 5 F · 6 a · 7 a · 8 b · 9 b · 10 a · 11 R · 12 F · 13 R · 14 R · 15 F (R/F 5/5, a/b 3/2)

## Schreiben Teil 1 (форма)
1 → Busfahrer · 2 → 3 · 3 → 01.09. (1. September) · 4 → nein · 5 → nein

## Образец Teil 2
30 слов без обращения и подписи, 5 предложений.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: Hören 15, Lesen 15; `python3 -I scripts/audit-mocks.py` ✓ (id и тексты аудио уникальны по сайту, цитаты найдены).
- Пол говорящих проверен функциями `turns/gender/self_gender` из `scripts/gen-listen-audio.py` (без озвучки): все 15 записей получают верный пол. Для этого метки «Apotheker» и «Junge» заменены на «Mann» и «Sohn», имя Theo на Lars (иначе скрипт дал бы женский голос).
- Слепое решение: независимого агента запустить не удалось (лимит параллельных агентов), решал сам по слепой копии без ключа (scratchpad/telc-a1-author/blind-telc-a1-5.mdx). Расхождений с ключом нет.
- После самопроверки: убраны ответы из вступления (таблетки, ряд, сапоги), 11 переписано (было слишком похоже на №4 Aufgabe 13: перенос приёма), имена, совпавшие с другими пробниками A1, заменены, из punch убрана неподтверждённая фраза про «полбалла за bitte».
- Под вопросом: Lesen 4 (verschenken может быть незнакомо на A1, но это ключевое слово); Hören 13 (ответ «zu Herrn Busch» требует понять, что «zu mir» говорит Herr Busch).
