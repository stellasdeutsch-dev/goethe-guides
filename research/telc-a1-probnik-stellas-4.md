# Пробник Stellas telc A1 №4: ключ и источники

Статья: `src/content/guides/telc/probniki/telc-a1-probnik-stellas-4.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны Командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции. Аудио не генерировалось (озвучка после редактора).

## Формат и баллы (из research/telc-a1.md = telc Start Deutsch 1, Übungstest 1, 2021, с. 5, 7–21, 34)
- Hören ca. 20 мин, 15 заданий: Teil 1 (1–6, a/b/c, zweimal), Teil 2 (7–10, richtig/falsch, einmal), Teil 3 (11–15, a/b/c, zweimal). `plays` = 2/1/2.
- Lesen und Schreiben 45 мин вместе (Lesen ca. 25, Schreiben ca. 20). Lesen 15 заданий: Teil 1 (1–5, R/F, 2 текста), Teil 2 (6–10, a/b), Teil 3 (11–15, R/F).
- Schreiben: Teil 1 формуляр 5 × 1 балл; Teil 2 ca. 30 слов, 3 пункта × 3/1,5/0 + оформление 1/0,5/0, max 10.
- Sprechen 15 баллов: Teil 1 max 3, Teil 2 max 6, Teil 3 max 6. Обычно 4 участника, без подготовки.
- Всего 60; Prädikat ausreichend с 36 (шкала Übungstest). Порог общий → в AnswerSheet `factor={1}`, `maxPoints={15}`, без `pass`.
- AnswerSheet id: `telc-a1-stellas-4-hoeren`, `telc-a1-stellas-4-lesen`; Trainer id `telc-a1-stellas-4-schreiben`.

## Темы (бронь: scratchpad/topics/telc-a1.md; не пересекаются с telc A1 №1–3, Goethe A1 №1–5, ÖSD A1 №1–3)
Hören: цветочный магазин (тюльпаны), время танцевального курса, контейнер для стекла, автобус до ратуши, обед Роньи, месяц отпуска; пауза междугороднего автобуса, открытый бассейн и гроза, антракт в театре, столовая университета закрыта; химчистка, ресторан на день рождения, Bürgeramt, выезд фирмы к озеру, бронь отеля (ночи).
Lesen: письмо про садовый участок; записка о пропавшей кошке; велосипед напрокат, комната для сына-студента, покраска квартиры, хор, гараж; ресторан Ruhetag, парковка для клиентов, рынок Di/Fr, выезд из отеля, книжный закрыт по болезни.
Schreiben: годовой семейный билет в Tierpark; письмо в теннисный клуб о дочери (Sie).
Sprechen: Teil 2 «Sport», «Tagesablauf»; Teil 3 вилка, свеча, шапка, рюкзак, чай, фотоаппарат.

## Ключ Hören
| № | Ответ | Доказательство |
|---|---|---|
| 1 | b (Tulpen) | «dann nehme ich die Tulpen» |
| 2 | c (19.00) | «Nicht um halb sieben, sondern um sieben» |
| 3 | a (hinter den Supermarkt) | «Die Container für Glas stehen jetzt hinter dem Supermarkt» |
| 4 | b (Linie 13) | «Nehmen Sie die Linie dreizehn» |
| 5 | a (Nudeln) | «Super, dann esse ich Nudeln» |
| 6 | c (August) | «Wir fahren erst im August» |
| 7 | falsch | «Sie haben zwanzig Minuten Zeit» |
| 8 | falsch | «schließt heute schon um sechzehn Uhr» |
| 9 | richtig | «Im Foyer gibt es Getränke und kleine Brötchen» |
| 10 | richtig | «Warmes Essen gibt es heute in der Cafeteria» |
| 11 | c (Hose) | «Ihre Hose ist fertig» |
| 12 | a (griechisch) | «in das griechische Restaurant» |
| 13 | b (Di 10 Uhr) | «also um zehn Uhr. Der Tag bleibt gleich» |
| 14 | c (Fahrrad) | «Wir fahren mit dem Fahrrad zum See!» |
| 15 | a (zwei) | «Dann sind es nur zwei Nächte» |

Баланс a/b/c: 4/3/4; R/F 2/2. Верный вариант самый длинный: 2 из 11 (13, и 6 по одному знаку).

## Ключ Lesen
1 F · 2 R · 3 R · 4 F · 5 R · 6 b · 7 a · 8 a · 9 b · 10 a · 11 F · 12 R · 13 F · 14 F · 15 R (R/F 5/5, a/b 3/2)

## Schreiben Teil 1 (форма)
1 → Potsdam · 2 → 4 · 3 → 7 und 4 (Jahre) · 4 → für die Familie · 5 → nein

## Образец Teil 2
29 слов без обращения и подписи, 4 предложения.

## Проверка
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: Hören 15, Lesen 15; `python3 -I scripts/audit-mocks.py` ✓ (id и тексты аудио уникальны по сайту, цитаты найдены).
- Пол говорящих проверен функциями `turns/gender/self_gender` из `scripts/gen-listen-audio.py` (без озвучки): все 15 записей получают верный пол.
- Слепое решение: независимого агента запустить не удалось (лимит параллельных агентов), решал сам по слепой копии без ключа (scratchpad/telc-a1-author/blind-telc-a1-4.mdx). Расхождений с ключом нет.
- После самопроверки: убраны ответы из вступления (тюльпаны, линия 13), удлинены дистракторы в 5 и 14, в 7 Lesen слабый дистрактор «квартира на продажу» заменён на Ferienwohnung, имена, совпавшие с другими пробниками A1, заменены.
- Под вопросом: Lesen 3 (просьба «hast du … ein paar Gläser für uns?» читается как «принеси», но прямого mitbringen в тексте нет); Hören 9 (Brötchen = «etwas essen», ответ через синоним).
