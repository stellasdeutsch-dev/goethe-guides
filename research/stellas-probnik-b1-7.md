# Пробник Stellas B1 №7: ключ и источники

Статья: `src/content/guides/probniki/stellas-probnik-b1-7.mdx`. Создано 2026-11-21.
Все тексты, скрипты аудио и задания написаны командой Stellas. Из официальных материалов взяты только формат и короткие стандартные инструкции.

## Формат и баллы (из research/goethe-b1-facts.md)
- Lesen 65 мин, 5 частей, 30 заданий (6/6/7/7/4), время 10/20/10/15/10. [MS p.6–15]
- Hören ~40 мин, 4 части, 30 заданий (10/5/7/8). Teil 1 и 4 два раза, Teil 2 и 3 один раз. [MS p.6, 16–21]
- Lesen/Hören: верные × 3,33, порог 60 = 18 из 30. [DB §4.1–4.2, §6.1]
- Schreiben 60 мин: 20/25/15 мин, ~80/~80/~40 слов, 40/40/20 баллов. Erfüllung E (меньше 50 % слов или мимо темы) → 0 за часть. [MS p.24, p.42; ÜS p.44]
- Sprechen: 15 мин подготовки, ~15 мин в паре, 28 + 40 + 16 + 16. [DB §3, §5; ÜS p.48]
- id бланков: `stellas-b1-7-lesen`, `stellas-b1-7-hoeren`; тренажёры `stellas-b1-7-s1`…`-s3`.

## Ключ (вывод scripts/answers.py)
```
Lesen · Пробник Stellas B1 №7 (30)
   Teil 1 1:Richtig 2:Falsch 3:Falsch 4:Richtig 5:Falsch 6:Richtig
   Teil 2 7:b 8:a 9:c 10:b 11:c 12:a
   Teil 3 13:i 14:g 15:c 16:j 17:0 18:a 19:e
   Teil 4 20:Nein 21:Ja 22:Ja 23:Nein 24:Ja 25:Nein 26:Nein
   Teil 5 27:b 28:a 29:c 30:c
Hören · Пробник Stellas B1 №7 (30)
   Teil 1 1:Falsch 2:b 3:Richtig 4:c 5:Falsch 6:a 7:Richtig 8:c 9:Richtig 10:b
   Teil 2 11:a 12:b 13:b 14:a 15:c
   Teil 3 16:Falsch 17:Richtig 18:Falsch 19:Falsch 20:Richtig 21:Falsch 22:Richtig
   Teil 4 23:b · Sommer 24:a · Moderatorin 25:c · Lindholm 26:c · Lindholm 27:b · Sommer 28:b · Sommer 29:c · Lindholm 30:a · Moderatorin
```

## Темы
Lesen: пенсионерка в 63 переезжает в WG (блог Гизелы); «Plauderkasse», медленная касса для разговоров в супермаркете; Repair-Café в подвале ратуши; знакомые организуют праздники (Teil 3, ответ 0: живая музыка); обязательный шлем для велосипедистов (Teil 4); условия школы рисования (Teil 5).
Hören: мейлбокс сестры о поездке к бабушке; радио: день открытых садов; объявление на катке; автоответчик мебельного о доставке дивана; радио: средневековый рынок в замке; экскурсия по шоколадной фабрике (Teil 2); права на мотоцикл в 50, разговор у зубного врача (Teil 3); дискуссия «Brauchen Kinder noch eine Schreibschrift?» (Teil 4).
Schreiben: escape room с коллегами (письмо Svenja); короткий сон на работе (гостевая книга, мнение Torsten); отказ от йога-семинара (Frau Petzold).
Sprechen: вместе заниматься спортом; презентации «Ein Leben lang bei derselben Firma arbeiten» / «Braucht jedes Kind ein eigenes Zimmer?».

## Проверка (2026-11-21)
- `node scripts/check-mdx.mjs` ✓; `python3 scripts/answers.py`: 30 + 30 заданий, по частям 6/6/7/7/4 и 10/5/7/8.
- `python3 -I scripts/audit-mocks.py` ✓: id и тексты аудио уникальны по сайту, серий из 4+ нет, все немецкие цитаты из why найдены в текстах и скриптах, длинного тире нет.
- Верный вариант самый длинный: не больше 2 из 10 заданий a/b/c в каждом модуле.
- Слепое решение: независимый агент решил страницу без ключа и объяснений, 60 из 60 совпали с ключом. По его замечаниям переписаны формулировки (см. отчёт), ключ не менялся.
- Пол голосов проверен функциями scripts/gen-listen-audio.py: в диалогах разные голоса, у монологов с именем говорящего пол совпадает.
- Темы сверены с Goethe B1 №1–6, telc B1 №1–4, ÖSD B1 №1–4, DTZ №1–4 и бронями scratchpad/topics/ (бронь goethe-b1.md).
