# Пробник Stellas ÖSD A2 №5: ключ и источники

Статья: `src/content/guides/oesd/probniki/oesd-a2-probnik-stellas-5.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции.

## Формат и баллы
Тот же, что в `research/oesd-a2-probnik-stellas-4.md` (таблица «Формат и баллы»), основа `research/oesd-a2.md` и проверка PDF в `research/oesd-a2-probnik-stellas-1.md`. Новых цифр нет.

### Бланки
- `oesd-a2-stellas-5-lesen-teil1` factor 3, max 15; `oesd-a2-stellas-5-lesen-teil2` factor 2, max 10. `pass` не ставится: порог 5 на весь Lesen.
- `oesd-a2-stellas-5-hoeren-teil1` 8 клеток (factor 1, max 8) + таблица перевода ÖSD.
- `oesd-a2-stellas-5-hoeren-teil2` 5 записей, factor 2, max 10.
- `oesd-a2-stellas-5-hoeren-teil3` 25 клеток (factor 1, max 25) + таблица перевода по строкам.

## Темы
- Lesen A1: длинная ночь покупок в Линце; опрос «отпуск дома» (Цюрих); новая велодорожка в Вахау Кремс–Мельк; советы, как спать в жару (Кёльн); день профессий для будущих учеников (Lehre) в Вельсе.
- Lesen A2: фермер в Каринтии водит туристов в походы с ламами.
- Hören A1: рынок растений в ботаническом саду Инсбрука (радио + голосовое от Томаса).
- Hören A2: родительский комитет начальной школы, пирог для школьного праздника.
- Hören A3: опрос «Was machen Sie in der Mittagspause?».
- Schreiben: друг Флориан зовёт в поход на Шнееберг.
- Sprechen: темы Mein Name, Sommer oder Winter, Tanzen, Pünktlichkeit, Süßigkeiten, Ich ärgere mich über …; планирование выходных в Зальцбурге вдвоём.
- Бронь: `scratchpad/topics/oesd-a2.md`. Сверено так же, как №4. До текста заменены: пасека (бронь telc A2 №6), физиотерапия (бронь telc A1 №5, Goethe A2 №7), опрос о домашних животных (бронь Goethe A2 №7), Sperrmüll и Fasching (бронь ÖSD A1 №5), магазин без упаковки (бронь Goethe B2).

## Ключ Lesen
| Aufgabe 1 | Ответ | Aufgabe 2 | Ответ |
|---|---|---|---|
| 1 | C | 1 | C |
| 2 | H | 2 | A |
| 3 | K | 3 | C |
| 4 | E | 4 | B |
| 5 | B | 5 | A |

Неиспользованные заголовки: A, D, F, G, I. Пример Aufgabe 2: B.
Верный вариант не самый длинный ни в одном вопросе Aufgabe 2.

## Ключ Hören
Aufgabe 1 (Der Pflanzenmarkt im Botanischen Garten): отмечены Pflanzen tauschen, Führungen, geöffnet bis 17 Uhr, Kräuter kaufen. Не отмечены: Café im Garten, nur am Samstag, Hunde erlaubt, Glashäuser gratis.

Aufgabe 2 (Kuchen für das Schulfest): Schulfest am Freitag · Kuchen bis 13.30 Uhr · in den Turnsaal · ein Stück 1 Euro 50 · Telefon 0664 / 53 18 27.

Aufgabe 3 (колонки: Kantine · Sport · Spazieren · Lesen · Telefonieren):
| Строка | Ключ |
|---|---|
| 1. Sprecher (Herr Fuchs) | Kantine, Lesen |
| 2. Sprecherin (Frau Ebner) | Spazieren, Telefonieren |
| 3. Sprecher (Herr Bauer) | Sport |
| 4. Sprecherin (Frau Wolf) | Kantine, Spazieren |
| 5. Sprecher (Elias) | Sport, Telefonieren |

Порядок колонок подобран так, чтобы в бланке не было серий длиннее трёх одинаковых ответов.

## Проверка 2026-11-21
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: 5 + 5 Lesen, 8 + 5 + 25 Hören.
- `python3 -I scripts/audit-mocks.py`: ✓, все цитаты из `why` найдены, id и аудио уникальны.
- Слепое решение независимым агентом: 48/48 совпадений. По его замечаниям: часы рынка в радио сформулированы как часы рынка («Der Markt ist von neun bis siebzehn Uhr geöffnet»), звонок маме явно в перерыв («in der Pause rufe ich …»), «(Tag)» заменено на «(Wochentag)», вариант B в Lesen 2 №3 заменён на правдоподобную ловушку («wenn sie Angst haben»), «haben … offen» заменено на «sind … geöffnet». Варианты цены в Hören 2 записаны без запятых («1 Euro 50»), иначе скрипты разбора делили их на части.
- Образец письма: 51 слово без напечатанного начала.
