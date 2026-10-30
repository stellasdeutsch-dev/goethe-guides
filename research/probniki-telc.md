# Официальные пробники telc Deutsch (Übungstest / Modelltest)

Собрано только с официальных источников telc gGmbH: страницы экзаменов на telc.net, telc Shop (shop.telc.net), страница бесплатных материалов telc (telc.net → Lehrmaterialien → kostenlose Downloads). Неофициальные сайты и «слитые» тесты не включены.

**Как проверяли (2026-10-24 и повторно 2026-10-30):**
- каждую бесплатную ссылку проверяли через `curl -sIL -A "Mozilla/5.0"`: везде итоговый статус **200**, у ZIP тип `application/zip`, у PDF `application/pdf`, у MP3 `audio/mpeg`;
- содержимое каждого ZIP смотрели по оглавлению архива (range-запросы), PDF из архивов достали и прогнали через `pdftotext`. Так проверяли, есть ли в них Lösungsschlüssel (ключ) и Hörtexte/Sprechermanuskript (транскрипт);
- аудио **не прослушивалось**: проверены только наличие файла, его размер и HTTP-ответ;
- цены взяты из telc Shop на 2026-10-30, в евро, как они указаны в магазине.

**Обозначения:**
- **ZIP telc.net** — кнопка «Übungstest herunterladen» на странице экзамена. В архиве PDF и MP3.
- **Shop, бесплатно** — у Version 1 в telc Shop есть кнопка «Kostenloser Download» (PDF), а MP3 к Version 1 стоит 0,00 €. Печатный Heft той же версии продаётся отдельно.
- **Leseprobe (BiB)** — бесплатный фрагмент на 6–9 страниц у платных версий. Это не полный тест.
- У всех полных официальных Übungstest telc (Version 1) внутри PDF есть **Lösungsschlüssel** и **Hörtexte** (у B2·C1 Medizin транскрипт называется «Sprechermanuskript»), а также Antwortbogen и критерии оценки письма и устной части.

Базовые префиксы ссылок:
- ZIP: `https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/…`
- файлы магазина: `https://shop.telc.net/media/catalog/product/file/…`

---

## 1. Start Deutsch 1 / telc Deutsch A1
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/start-deutsch-1-/-telc-deutsch-a1/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (он же Modelltest), издание 2017, 44 с. | Бесплатно | [ZIP 18,1 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a1.zip) (PDF внутри) | MP3 в ZIP (16,2 МБ) | да (с. 36) | да (с. 37) | 200, zip · 2026-10-30 |
| Übungstest 1, издание 2021 (Shop), 44 с. | Бесплатно (печатный Heft 11,00 €) | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20210103_5070-b00-010106_web_1.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a1_uebungstest_1.mp3) (0,00 €) | да | да | 200, pdf / audio/mpeg · 2026-10-30 |
| Übungstest Version 2 | Платно: Heft 11,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-2-start-deutsch-1-telc-deutsch-a1.html) | [MP3 Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/telc-start-deutsch-1-ubungstest-version-2-mp3-audio-datei.html) | да (по описанию Shop) | — | страница Shop 200 |

## 2. telc Deutsch A1 für Zuwanderer (Start Deutsch 1 для мигрантов)
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a1-fuer-zuwanderer/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2021, 36 с. | Бесплатно (Heft 11,00 €) | [ZIP 9,2 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/Deutsch_A1_Zuwanderer.zip) · тот же [PDF в Shop](https://shop.telc.net/media/catalog/product/file/2/0/20201225_5069-b00-010104_web.pdf) | MP3 в ZIP (13,9 МБ) · [MP3 Shop](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a1_zuwanderer_uebungstest_1.mp3) | да (с. 31) | да (с. 32) | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 11,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/integration/ubungstests/telc-deutsch-a1-fur-zuwanderer-ubungstest-version-2-heft.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 11,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/integration/ubungstests/mock-examination-3-telc-deutsch-a1-fur-zuwanderer.html) | MP3 13,50 € | да | — | Shop 200 |

## 3. telc Deutsch A1 Junior
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a1-junior/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2015, 36 с. | Бесплатно | [ZIP 14,8 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a1_junior.zip) | MP3 в ZIP (7,2 МБ) | да (с. 31) | да (с. 30) | 200, zip · 2026-10-30 |
| Übungstest 1, издание 2021 (Shop) | Бесплатно (Heft 11,00 €) | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20201217_5003-b00-010101_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a1_junior.mp3) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 11,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/telc-deutsch-a1-junior-ubungstest-2.html) | MP3 13,50 € | да | — | Shop 200 |

## 4. Start Deutsch 2 / telc Deutsch A2
Страница: https://www.telc.net/sprachpruefungen/deutsch/start-deutsch-2-telc-deutsch-a2/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (Modelltest), издание 2024 (5090-B00-010107), 48 с. | Бесплатно (Heft 11,50 €) | [ZIP 23,1 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a2_01.zip) · [PDF напрямую](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a2_uebungstest_1-1_20241212_5090-b00-010107.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a2_modelltest_1.mp3) (17,7 МБ, есть и в ZIP) | да (с. 42) | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/ubungstest-2-start-deutsch-2-telc-deutsch-a2.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/start-deutsch-2-ubungstest-3.html) | MP3 13,50 € | да | — | Shop 200 |

## 5. telc Deutsch A2 Schule
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2-schule/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2014, 36 с. | Бесплатно | [ZIP 35,4 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a2_schule.zip) | 3 MP3 в ZIP | да (с. 31) | да | 200, zip · 2026-10-30 |
| Übungstest 1, издание 2021 (Shop) | Бесплатно (Heft 11,50 €) | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20201222_5004-b00-010201_web.pdf) | [MP3 целиком](https://shop.telc.net/media/catalog/product/file/5/0/5004-mp3-010101_kompl..mp3) (22 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/telc-deutsch-a2-schule-ubungstest-version-2-heft.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-3-deutsch-a2-schule.html) | MP3 13,50 € | да | — | Shop 200 |

## 6. telc Deutsch A2+ Beruf
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2-beruf/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (Modelltest), 56 с. | Бесплатно (Heft 11,50 €) | [ZIP 18,2 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_a2_beruf.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20210103_5033-b00-010103_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a2_beruf_modelltest_1.mp3) (21,3 МБ) | да (с. 47) | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/catalog/product/view/id/514/s/mock-examination-telc-deutsch-a2-beruf/category/60/) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/mock-examination-3-telc-deutsch-a2-beruf.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Handbuch A2+ Beruf (PDF)](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_A2_Beruf_Handbuch.pdf).

## 7. telc Deutsch A2·B1
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2b1/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2023 (5060-B00-010102), 52 с. | Бесплатно (Heft 12,00 €) | [ZIP 37,6 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_Deutsch_A2_B1.zip) · [PDF Shop](https://shop.telc.net/media/catalog/product/file/2/0/20240321_5060-b00-010102_web_1_.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_a2.b1_1060_u_t_complete_1.mp3) (35,8 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: Heft 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/telc-deutsch-a2-b1-ubungstest-version-2.html) | [MP3 Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/telc-deutsch-a2-b1-ubungstest-version-2-mp3-audio-datei.html) | да | — | Shop 200 |
| Übungstest telc Deutsch A2·B1 из учебника «Auf jeden Fall! B1.2» (telc Verlag), 18 с. | Бесплатно | [PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Auf_jeden_Fall/Uebungstests/Auf_jeden_Fall_B1.2_UEbungstest_telc_Deutsch_A2-B1.pdf) | [ZIP Track 128](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Auf_jeden_Fall/Audios/Auf_jeden_Fall_B1_2_Track_128_Uebungstest_telc_Deutsch_A2_B1.zip) | нет в PDF (только Antwortbogen) | нет | 200 · 2026-10-30 |

## 8. Deutsch-Test für Zuwanderer (DTZ, A2–B1)
Отдельной страницы с ZIP на telc.net нет. Бесплатная Version 1 лежит в telc Shop: https://shop.telc.net/de_DE/integration/ubungstests/ubungstest-1-deutsch-test-fur-zuwanderer.html

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest Version 1, издание 2021 (barrierefrei), 44 с. | Бесплатно («Kostenloser Download»; печатный Heft 12,00 €) | [PDF](https://shop.telc.net/media/catalog/product/file/5/0/5010-b00-020101_barrierefrei_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/d/e/deutsch-test-fuer-zuwanderer_uebungstest_1.mp3) (11,5 МБ, 0,00 €) | да | да | 200, pdf / audio/mpeg · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/integration/ubungstests/ubungstest-2-deutsch-test-fur-zuwanderer.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/integration/ubungstests/ubungstest-3-deutsch-test-fur-zuwanderer.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 4 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/catalog/product/view/id/908/s/ubungstest-4-deutsch-test-fur-zuwanderer/) | MP3 13,50 € | да | — | Shop 200 |
| DTZ Übungsheft A2–B1 | Платно: 10,00 € | [Shop](https://shop.telc.net/de_DE/ubungsheft-deutsch-test-fur-zuwanderer.html) | — | ? | ? | Shop 200 |
| Prüfungstraining DTZ (книга для подготовки, не тест) | Платно: 18,50 € / E-Book 9,90 € | [Shop](https://shop.telc.net/de_DE/prufungstraining-deutsch-test-fur-zuwanderer.html) | аудио бесплатно на странице Downloads | — | — | Shop 200 |
| Übungstest DTZ из учебника «Auf jeden Fall! B1.2», 15 с. | Бесплатно | [PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Auf_jeden_Fall/Uebungstests/Auf_jeden_Fall_B1.2_UEbungstest_DTZ.pdf) | [ZIP Track 127](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Auf_jeden_Fall/Audios/Auf_jeden_Fall_B1_2_Track_127_Uebungstest_Deutsch_Test_fuer_Zuwanderer.zip) | нет в PDF | нет | 200 · 2026-10-30 |

## 9. Zertifikat Deutsch / telc Deutsch B1
Страница: https://www.telc.net/sprachpruefungen/deutsch/zertifikat-deutsch-telc-deutsch-b1/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2020, 48 с. | Бесплатно | [ZIP 10,3 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1.zip) · [PDF напрямую](https://shop.telc.net/media/catalog/product/file/telc_deutsch_b1_zd_uebungstest_1.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_b1_zd_uebungstest_4.mp3) (9,4 МБ; см. примечание) | да | да | 200 · 2026-10-30 |
| Übungstest 1, издание 2021 (Shop), 48 с. | Бесплатно (Heft 12,00 €) | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20201225_5061-b00-010301_web.pdf) | тот же MP3 (0,00 €) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/mock-examination-2-zertifikat-deutsch-b1.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-3-zertifikat-deutsch-b1.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 4 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-4-zertifikat-deutsch-b1.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 5 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-5-zertifikat-deutsch-b1.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 6 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-6-zertifikat-deutsch-b1.html) | MP3 13,50 € | да | — | Shop 200 |

Примечание: и в ZIP, и в Shop аудио к Version 1 называется `…_uebungstest_4.mp3`. telc сам выдаёт этот файл как аудио к Version 1. Совпадает ли запись с Hörtexte в PDF, без прослушивания проверить нельзя.

## 10. telc Deutsch B1 Schule (Zertifikat Deutsch für Jugendliche)
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b1-schule/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (= Modelltest ZD für Jugendliche), издание 2014, 48 с. | Бесплатно | [ZIP 26,9 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1_schule.zip) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_b1-schule_uebungstest_1.mp3) (27,2 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest 1, издание 2021 (Shop) | Бесплатно (Heft 12,00 €) | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20201223_5001_b00-010103_web_1.pdf) | тот же MP3 | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/ubungstest-2-zertifikat-deutsch-b1-fur-jugendliche.html) | MP3 13,50 € | да | — | Shop 200 |

## 11. telc Deutsch B1+ Beruf
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b1-beruf/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (Modelltest), 48 с. | Бесплатно (Heft 12,00 €) | [ZIP 30,7 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1_beruf.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201224_5034-b00-010103_web_1.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_b1plus_beruf_modelltest_1.mp3) (26,6 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/mock-examination-2-telc-deutsch-b1-beruf.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Handbuch B1+ Beruf](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B1_plus_Beruf_Handbuch.pdf).

## 12. telc Deutsch B1·B2 Beruf
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b1b2-beruf/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2017, 64 с. | Бесплатно | [ZIP 18,3 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1-b2_beruf.zip) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_b1-b2_beruf_uebungstest_1.mp3) (16,3 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest 1, издание 2021, 64 с. | Бесплатно | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20201225_5066-b00-010102_web_6.pdf) (в Shop по ошибке привязан к странице B2·C1 Beruf) | тот же MP3 | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/ubungstest-2-telc-deutsch-b1-b2-beruf.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Tipps zur Prüfungsvorbereitung](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B1_B2_Beruf_Tipps_zur_Pruefungsvorbereitung.pdf).

## 13. telc Deutsch B1·B2 Pflege
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b1b2-pflege/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (Modelltest), издание 2014, 56 с. | Бесплатно (Heft 12,50 €) | [ZIP 19,4 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1-b2_pflege.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20210103_5036-b00-010202_web_2.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/d/e/deutsch_pflege_mp3.mp3) (24,4 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/mock-examination-2-telc-deutsch-b1-b2-pflege.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Tipps zur Prüfungsvorbereitung Pflege](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_b1_b2_pflege_tipps_zur_Pruefungsvorbereitung.pdf).

## 14. telc Deutsch B2
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b2/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2019, 56 с. | Бесплатно (Heft 12,50 €) | [ZIP 16,3 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201223_5023-b00-010201_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/d/e/deutschb2_uebungstest1.mp3) (17,7 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-2-telc-deutsch-b2.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/mock-examination-3-telc-deutsch-b2.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Handbuch B2](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B2_Handbuch.pdf), [Tipps B2](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B2_tipps_zur_Pruefungsvorbereitung.pdf).

## 15. telc Deutsch B2+ Beruf
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b2-beruf/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, 60 с. | Бесплатно (Heft 12,50 €) | [ZIP 20,0 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2_beruf.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201225_5035-b00-010203_web_2.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutschb2plus_beruf_uebungstest_1.mp3) (19,1 МБ) | да (с. 53) | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/ubungstest-2-telc-deutsch-b2-beruf.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/mock-examination-3-telc-deutsch-b2-beruf.html) | MP3 13,50 € | да | — | Shop 200 |

## 16. telc Deutsch B2 Medizin Zugangsprüfung
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b2-medizin-zugangspruefung/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2015, 56 с. | Бесплатно | [ZIP 15,3 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2_medizin_zugangspruefung.zip) | MP3 в ZIP (12,1 МБ) | да | да | 200, zip · 2026-10-30 |

## 17. telc Deutsch B2·C1 Beruf
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b2c1-beruf/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2020, 60 с. | Бесплатно (печатный Heft 13,00 €) | [ZIP 28,1 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2-c1_beruf.zip) | MP3 в ZIP (27,3 МБ) | да | да | 200, zip · 2026-10-30 |

## 18. telc Deutsch B2·C1 Medizin
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b2c1-medizin/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2015, 68 с. | Бесплатно (Heft 13,00 €) | [ZIP 35,8 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutshc_b2-c1_medizin_01.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201225_5037-b00-010103_web_1.pdf) | 4 MP3 в ZIP · [MP3 целиком](https://shop.telc.net/media/catalog/product/file/5/0/5037-mp3-010101_komplett_1.mp3) (27,8 МБ) | да (с. 63) | да, «Sprechermanuskript» (с. 60) | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/ubungstest-2-telc-deutsch-b2-c1-medizin.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Tipps B2·C1 Medizin](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B2-C1_Medizin_tipps_zur_Pruefungsvorbereitung.pdf).

## 19. telc Deutsch B2·C1 Medizin Fachsprachprüfung
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b2c1-medizin-fachsprachpruefung/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2020, 56 с. | Бесплатно (Heft 13,00 €) | [ZIP 22,2 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2-c1_medizin_fachsprachpruefung_01.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201225_s01-5040-b00-010201_web_1.pdf) | 3 MP3 в ZIP · [MP3 Shop](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_b2-c1-medizin-fachsprachpruefung_uebungstest1.mp3) | да | да | 200 · 2026-10-30 |

## 20. telc Deutsch C1
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c1/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1 (формат 2016), 64 с. | Бесплатно (Heft 13,00 €) | [ZIP 22,4 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_c1.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201224_5029-b00-010101_web_1.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_c1_uebungstest_1_format_2016.mp3) (24,4 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-2-telc-deutsch-c1.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-3-telc-deutsch-c1.html) | MP3 13,50 € | да | — | Shop 200 |

## 21. telc Deutsch C1 Beruf
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c1-beruf/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2021, 64 с. | Бесплатно (Heft 13,00 €) | [ZIP 14,2 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_c1_beruf.zip) · [PDF Shop](https://shop.telc.net/media/catalog/product/file/2/0/20201225-5038-b00-010101_web_1.pdf) | MP3 только в ZIP (18,2 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/ubungstest-2-deutsch-c1-beruf.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Handbuch C1 Beruf](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c1_beruf_Handbuch.pdf), [Tipps C1 Beruf](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c1_beruf_tipps_zur_Pruefungsvorbereitung.pdf).

## 22. telc Deutsch C1 Hochschule
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c1-hochschule/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2018, 64 с. | Бесплатно (Heft 13,00 €) | [ZIP 30,5 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_c1_hochschule.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20201224_5032-b00-010301_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/t/e/telc_deutsch_c1_hochschule_uebungstest_1.mp3) (38,9 МБ) | да | да | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/hochschule/ubungstests/mock-examination-2-deutsch-c1-hochschule.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 3 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/hochschule/ubungstests/ubungstest-3-deutsch-c1-hochschule.html) | MP3 13,50 € | да | — | Shop 200 |
| Übungstest Version 4 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/hochschule/ubungstests/mock-examination-4-deutsch-c1-hochschule.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Handbuch C1 Hochschule](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c1_hochschule_Handbuch.pdf), [Tipps](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c1_hochschule_tipps_zur_pruefungsvorbereitung.pdf). Аудио к тесту из книги «Prüfungstraining C1 Hochschule» (Track 22–24) бесплатно: [ZIP](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Pruefungstraining_C1_Hochschule/Audios/Pruefungstraining_C1_Hochschule_Track_22-24_UET.zip), но сам тест есть только в платной книге.

## 23. telc Deutsch C2
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c2/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, 60 с. | Бесплатно (Heft 13,50 €) | [ZIP 8,3 МБ](https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_c2.zip) · [PDF Shop 2021](https://shop.telc.net/media/catalog/product/file/2/0/20210102_5002-b00-010101_jc_web.pdf) | MP3 в ZIP (29,2 МБ) · [MP3 Shop](https://shop.telc.net/media/catalog/product/file/5/0/5002-mp3-010101.mp3) (8,3 МБ) | да (с. 50) | да, «Hörtext» (с. 53) | 200 · 2026-10-30 |
| Übungstest Version 2 | Платно: 13,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/allgemeinsprache/ubungstests/mock-examination-2-telc-deutsch-c2.html) | MP3 13,50 € | да | — | Shop 200 |

Дополнительно бесплатно: [Handbuch C2](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c2_Handbuch.pdf), [Tipps C2](https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_c2_tipps_zur_pruefungsvorbereitung.pdf).

## 24. telc Deutsch-Test A2 Sprechen (только устная часть)
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/deutsch-test-a2-sprechen/

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| Übungstest 1, издание 2024 (barrierefrei), 24 с. | Бесплатно (печатный 11,50 €) | [PDF](https://shop.telc.net/media/catalog/product/file/2/0/20240208_5005-b00-010101_barrierefrei_web_1.pdf) | не требуется (экзамен только устный) | не требуется (есть критерии оценки) | — | 200, pdf · 2026-10-30 |

## 25. Deutsch-Test für den Beruf (DTB A2 / B1 / B2 / C1, BAMF, проводит telc)
Страница: https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/deutsch-test-fuer-den-beruf/ (на самой странице ссылок на тесты нет, бесплатная Version 1 лежит в telc Shop: https://shop.telc.net/de_DE/beruf/ubungstests.html)

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Проверено (HTTP/дата 2026-10-24) |
|---|---|---|---|---|---|---|
| DTB A2, Übungstest 1, издание 2022, 48 с. | Бесплатно (печатный 7,50 €) | [PDF](https://shop.telc.net/media/catalog/product/file/1/0/10000052_20220704_5013-b00-010102_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/5/0/5013-mp3-010102_gesamt.mp3) (32,0 МБ) | да | да | 200 · 2026-10-30 |
| DTB B1, Übungstest 1, издание 2022, 48 с. | Бесплатно (печатный 7,50 €) | [PDF](https://shop.telc.net/media/catalog/product/file/1/0/10000053_20220706_5014-b00-010102_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/5/0/5014-mp3-010102_gesamt.mp3) (33,3 МБ) | да | да | 200 · 2026-10-30 |
| DTB B2, Übungstest 1, издание 2022, 56 с. | Бесплатно (печатный 8,50 €) | [PDF](https://shop.telc.net/media/catalog/product/file/1/0/1011431_20220708_5015-b00-010102_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/5/0/5015-mp3-010102_gesamt.mp3) (38,7 МБ) | да | да | 200 · 2026-10-30 |
| DTB C1, Übungstest 1, издание 2022, 56 с. | Бесплатно (печатный 8,50 €) | [PDF](https://shop.telc.net/media/catalog/product/file/1/0/1011430_22020524_5016-b00-010102_web.pdf) | [MP3](https://shop.telc.net/media/catalog/product/file/5/0/5016-mp3-010102_gesamt.mp3) (38,5 МБ) | да | да | 200 · 2026-10-30 |
| DTB A2, Übungstest 2 | Платно: 11,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/deutsch-test-fur-den-beruf-a2-ubungstest-version-2.html) | MP3 13,50 € | да | — | Shop 200 |
| DTB B1, Übungstest 2 | Платно: 12,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/deutsch-test-fur-den-beruf-b1-ubungstest-version-2.html) | MP3 13,50 € | да | — | Shop 200 |
| DTB B2, Übungstest 2 | Платно: 12,50 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/deutsch-test-fur-den-beruf-b2-ubungstest-version-2.html) | MP3 13,50 € | да | — | Shop 200 |
| DTB C1, Übungstest 2 | Платно: 13,00 € + MP3 13,50 € | [Shop](https://shop.telc.net/de_DE/beruf/ubungstests/deutsch-test-fur-den-beruf-c1-ubungstest-version-2.html) | MP3 13,50 € | да | — | Shop 200 |
| DTB B2, тест из учебника «Einfach besser! 400» (telc Verlag), 19 с. | Бесплатно | [PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_400_Uebungstest_Deutsch_Test_fuer_den_Beruf_B2.pdf) | [ZIP Track 6–10](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_400_Uebungstest_DTB_B2_Track_006-010.zip) | [Lösungen PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_400_Loesungen_Uebungstest_DTB_B2.pdf) | [Hörtexte PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_400_Hoertexte_Uebungstest_DTB_B2.pdf) | 200 · 2026-10-30 |
| DTB B2, тест из учебника «Einfach besser! 500» (telc Verlag), 19 с. | Бесплатно | [PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_500_Uebungstest_Deutsch_Test_fuer_den_Beruf_B2.pdf) | [ZIP Track 7–11](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_500_Uebungstest_DTB_B2_Track_007_011.zip) | [Lösungen PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_500_Loesungen_Uebungstest_Deutsch_Test_fuer_den_Beruf_B2.pdf) | [Hörtexte PDF](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Zwischentests_Uebungstests/Einfach_besser_500_Hoertexte_Uebungstest_Deutsch_Test_fuer_den_Beruf_B2.pdf) | 200 · 2026-10-30 |

---

## Не нашёл / платно / неясно

- **DTZ (Deutsch-Test für Zuwanderer).** На telc.net нет ни отдельной страницы экзамена, ни ZIP: URL вида `…/deutsch/deutsch-test-fuer-zuwanderer/` отдают 404. Бесплатный полный тест (Version 1, PDF + MP3, с ключом и Hörtexte) есть только в telc Shop, по кнопке «Kostenloser Download». Version 2–4 платные: 12,00 € + 13,50 €. Сводка поиска по сети утверждала, что бесплатен только аудиофайл. Это неверно: PDF Version 1 отдаётся с HTTP 200.
- **telc Deutsch A2·B1 Schule / Jugendliche.** Такого отдельного экзамена у telc сейчас нет. Есть telc Deutsch A2 Schule (п. 5), telc Deutsch B1 Schule = Zertifikat Deutsch für Jugendliche (п. 10) и общий telc Deutsch A2·B1 (п. 7).
- **«Start Deutsch 1 Zuwanderer»** — это telc Deutsch A1 für Zuwanderer (п. 2).
- **Только одна версия существует** (вторую не продают даже платно): B2·C1 Beruf, B2·C1 Medizin Fachsprachprüfung, B2 Medizin Zugangsprüfung (последнего в Shop нет совсем, есть только бесплатный ZIP), Deutsch-Test A2 Sprechen.
- **Всё платное:** все Version 2 и выше, у каждого экзамена: Heft 11–13,50 € плюс MP3 13,50 €. У них бесплатны только Leseprobe на 6–9 страниц (файлы `…BiB.pdf` / `…bib.pdf`). Это не полный тест. Полная таблица цен — в разделах выше.
- **BAMF, Prüfungshandbuch DTB** (на него ссылается страница telc DTB): на странице только Handbuch, Modelltests там нет.
- **Мелкие ошибки в Shop:**
  - на странице «B2·C1 Beruf Übungstest 1, Heft» кнопка бесплатной загрузки отдаёт PDF от **B1·B2 Beruf**. Настоящий B2·C1 Beruf есть только в ZIP на telc.net;
  - у C1 Beruf и B2·C1 Beruf нет бесплатного MP3 в Shop, аудио есть только в ZIP;
  - две ссылки Leseprobe отдают 404: `5035B00030101BiB_1.pdf` и `5090B00020105BiB.pdf`;
  - на страницах MP3 платных версий (Version 2+) кнопка загрузки ведёт на аудио Version 1. Это пример, а не платное аудио.
- **telc Deutsch B1, аудио Version 1.** Файл называется `telc_deutsch_b1_zd_uebungstest_4.mp3`, хотя выдаётся к Übungstest 1. Совпадение с Hörtexte не проверено, потому что аудио не прослушивали.
- **Тесты из учебников telc Verlag** (Auf jeden Fall! B1.2: DTZ и A2·B1). PDF и аудио бесплатны, но ключа в PDF нет (есть только Antwortbogen). Ключ, видимо, в Lehrerhandbuch (платно), это не проверено. «Einfach besser! B1» (DTB B1): бесплатны только [Lösungen + Hörtexte](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_B1/Loesungen_Hoertexte/Einfach_besser_B1_Loesungen_Hoertexte_Uebungstest.pdf) и Antwortbogen, а сам тест есть только в книге. «Auf jeden Fall! B1.2», Track 126 (тест ZD/telc B1): бесплатно только аудио, сам тест — в книге.
- **Fachsprache-тесты telc** (B1 Einzelhandel, B1 Lager und Logistik, B2 Elektrotechnik/Mechatronik, B2 Frühpädagogik, B2 Hotel und Gastronomie). На странице бесплатных материалов лежат только аудио «UET1» в ZIP, все отдают 200, 20–25 МБ ([пример](https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Uebungstests_Fachsprache/Audios/Deutsch_B1_Einzelhandel_UET1.zip)). PDF самих тестов в открытом доступе не нашёл, вероятно, они в платных пособиях «Fach.Sprache». Неясно.
- **telc Deutsch A1 (обычный) / A2 / B1 / B2 / C1 в цифровом формате (digitelc).** Отдельных цифровых пробников не искал. Бумажные Übungstest подходят по формату заданий.
- **Hueber, Klett и другие издательства.** На официальных страницах экзаменов telc ссылок на них нет. Не включал.
- **Страница бесплатных материалов telc** (откуда взяты учебные тесты): https://www.telc.net/en/teaching-materials/free-downloads/ (200).
