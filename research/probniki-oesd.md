# ÖSD: официальные пробники (Modellsätze) по всем экзаменам

Проверено: 2026-10-30. Задача ставилась на дату 2026-10-24, но HTTP-проверка и чтение файлов сделаны 30.10.2026.
Источники: только osd.at (страницы экзаменов `portfolio-item/*` и https://osd.at/downloads/) и официальный шоп ÖSD на TestSAM (https://testsam.at/home-oesd, издатель «Testsam GmbH», автор Dr. Manuela Glaboniat).

## Как проверял
- HTTP: `curl -sIL -A "Mozilla/5.0" <url>` для всех 110 ссылок на Modellsatz, модули и Auswertungsbögen со страниц экзаменов и из Downloads. Все 110 заканчиваются на **200**, тип `application/pdf` (74) или `application/zip` (36). Ссылки вида `www.osd.at/...` отдают 301 на `osd.at/...` и потом 200.
- Состав ZIP: читал оглавление ZIP через HTTP Range (центральный каталог) в памяти, на диск не сохранял.
- Ключи и транскрипты: прогнал PDF из каждого полного Modellsatz через `pdftotext`. Искал разделы «Modellsatz – Lösungen und Bewertung», «Lesen/Hören – Lösungen», а также «Transkript», «Hörtext». Страницу ключа ZB1 Lesen отрендерил в PNG и прочитал глазами: это заполненный Antwortbogen.
- Цены: со страниц товаров testsam.at/product/N (страницы отдаются сервером, без JS), цены с 10 % MwSt.
- Аудио: **отдельных MP3-ссылок на osd.at нет**. MP3 лежат только внутри ZIP (полный Modellsatz и отдельный `*_HV.zip`).

## Общая картина
- На каждый действующий ÖSD-экзамен есть **бесплатный официальный Modellsatz**: ZIP с полным PDF и MP3, плюс отдельные PDF по модулям Lesen, Schreiben и Sprechen и ZIP Hören.
- **Ключ есть во всех бесплатных Modellsätze**: раздел «Modellsatz – Lösungen und Bewertung» в конце PDF (ответы Lesen и Hören, у ZB1 это заполненный Antwortbogen картинкой; плюс правила оценки Schreiben и Sprechen).
- **Транскриптов Hören в бесплатных Modellsätze нет** ни у одного экзамена. Транскрипты есть только в платных «Übungsmaterialien» TestSAM, это прямо сказано в описании каждого товара.
- Образцов текстов Schreiben (Musterlösungen) в бесплатных PDF нет. Есть только критерии (Auswertungsbogen) и бесплатный «Test-Training digital» (https://test-training-digital.osd.at/): онлайн-Modellsatz, ключи Lesen/Hören, примеры для сравнения в Schreiben, нужна регистрация (имя + e-mail), только для ПК.
- Устаревших форматов на osd.at сейчас не выложено: на всех страницах один набор 2026 года. Даты в именах MP3 (2017, у KID A2 2022, у PMB 2023–2025) показывают, когда записан Modellsatz, но формат при этом действующий: о смене формата на страницах ничего не сказано, кроме «seit 1.1.2024 auch digital».
- Только один Modellsatz на экзамен. Дополнительные Übungssätze есть **только платно**.

## ÖSD KID A1 (Kompetenz in Deutsch A1, Jugendliche 10–14 лет)

Страница: https://osd.at/portfolio-item/osd-kid-a1/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «KID A1 Modellsatz HP», 10 стр. + 3 MP3 (A1–A3)) | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID_A1_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 27.09.2017 (по имени файла), PDF перевёрстан 2026 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A1-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID_A1_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/KID_A1_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A1-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A1-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/KID-A1-AW_s_WEB_Ver.3.0_02_10_26.pdf<br>https://osd.at/wp-content/uploads/2026/10/KID-A1-AW_m_WEB_Ver.3.0_18_09_26.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | KID A1 Modellsatzbroschüre €9,90; KID A1 Übungsmaterialien (МС + 3 Übungssätze, транскрипты) €19,80 | https://testsam.at/product/2?shopType=OESD<br>https://testsam.at/product/18?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD KID A2 (Jugendliche 10–14 лет)

Страница: https://osd.at/portfolio-item/osd-kid-a2/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «KID A2 Modellsatz HP», 12 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A2_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 12.01.2022 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A2-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A2_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/KID-A2_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A2-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/KID-A2-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/KID-A2-AW_s_WEB_Ver.3.0_18_09_26.pdf<br>https://osd.at/wp-content/uploads/2026/10/KID-A2-AW_m_WEB_Ver.3.0_18_09_26.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | KID A2 Modellsatzbroschüre €9,90; KID A2 Übungsmaterialien (МС + 3 Übungssätze) €14,98; Klett «ÖSD Zertifikat A2 / KID A2» (8 Modellprüfungen, издатель Klett) €9,90 | https://testsam.at/product/4?shopType=OESD<br>https://testsam.at/product/21?shopType=OESD<br>https://testsam.at/product/35?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

На странице KID A2 кнопка «Zum Shop» ведёт на product/18 (это KID A1). Правильный товар KID A2: product/21.


## ÖSD Zertifikat A1 (ZA1, от 14 лет)

Страница: https://osd.at/portfolio-item/osd-zertifikat-a1-za1/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZA1 Modellsatz HP», 16 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA1_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 06.09.2017 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA1-Modellsatz-Homepage-LV-1.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA1_Hoeren_MS_Subtest.zip | https://osd.at/wp-content/uploads/2026/08/ZA1_Hoeren_MS_Subtest.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA1-Modellsatz-Homepage-SA-1.pdf | — | да (для формуляра Aufgabe 1) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA1-Modellsatz-Homepage-MA-1.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA1-AW_s_WEB_Ver.6.0_28_07_26.pdf<br>https://www.osd.at/wp-content/uploads/2025/04/ZA1-AW_MA_Ver.4.0_25_04_24.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 (301→osd.at) |
| Платно (TestSAM, официальный издатель ÖSD) | ZA1 Modellsatzbroschüre €9,90; ZA1 Übungsmaterialien Band 1 (МС + 3 Übungssätze) €14,98; ZA1 Band 2 (+3 новых Übungssätze) €14,98; Arena ÖSD A1 (сторонний учебник в шопе ÖSD) €31,98 | https://testsam.at/product/1?shopType=OESD<br>https://testsam.at/product/16?shopType=OESD<br>https://testsam.at/product/17?shopType=OESD<br>https://testsam.at/product/30?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD Zertifikat A1 / Österreich (ZA1/Ö, вариант для мигрантов в Австрии)

Страница: https://osd.at/downloads/#a1  
Формат: текущий (отдельной страницы экзамена нет, только в Downloads)

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZA1 Ö Modellsatz HP», 16 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZA1-Oe-Modellsatz-HP.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | аудио 15.09.2017; тексты отличаются от обычного ZA1 | 200, 2026-10-30 |

Вариант для Zuwander:innen упомянут в описании товара product/1 («ÖSD Zertifikat A1 / Österreich»). Отдельных PDF по модулям нет.


## ÖSD Zertifikat A2 (ZA2, от 14 лет)

Страница: https://osd.at/portfolio-item/osd-zertifikat-a2-za2/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZA2 Modellsatz HP», 12 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA2_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA2-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZA2_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZA2_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://www.osd.at/wp-content/uploads/2021/06/ZA2-Modellsatz-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 (301→osd.at) |
| Модуль Sprechen | бесплатно | https://www.osd.at/wp-content/uploads/2021/06/ZA2-Modellsatz-MA-1.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 (301→osd.at) |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/ZA2-AW_s_Ver.4.0_17_09_26_WEB.pdf<br>https://osd.at/wp-content/uploads/2026/10/ZA2-AW_m_Ver.4.0_17_09_26_WEB.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZA2 Modellsatzbroschüre €9,90; ZA2 Übungsmaterialien Band 1 (МС + 3 Übungssätze) €14,98; ZA2 Band 2 (+3 новых Übungssätze) €19,80 | https://testsam.at/product/3?shopType=OESD<br>https://testsam.at/product/19?shopType=OESD<br>https://testsam.at/product/20?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

Schreiben/Sprechen на странице ZA2 лежат старыми файлами 2021 г., но это тот же Modellsatz, что и в ZIP 2026 (E-Mail от Michael, «Ausflug Deutschkurs»).


## ÖSD Zertifikat A2 / Österreich (ZA2/Ö)

Страница: https://osd.at/downloads/#a2  
Формат: текущий (только в Downloads)

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZA2 Ö Modellsatz HP», 12 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZA2-Oe-MS-HP-gesamt.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | аудио 11.10.2017; тексты с австрийской тематикой | 200, 2026-10-30 |

## ÖSD Zertifikat Deutsch Österreich B1 (ZDÖ B1, мигранты от 16 лет)

Страница: https://osd.at/portfolio-item/osd-zertifikat-deutsch-osterreich-b1-zdo-b1/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZDÖ B1 Modellsatz HP», 21 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 29.08.2017 | 200, 2026-10-30 |
| Модуль Lesen + Sprachbausteine | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://www.osd.at/wp-content/uploads/2024/08/ZDO_B1_MS_Sprechen-1.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 (301→osd.at) |
| Auswertungsbogen (критерии оценки) | бесплатно | https://www.osd.at/wp-content/uploads/2025/09/ZDO-B1-AW_s_Ver.4.0_WEB_13_08_25.pdf<br>https://osd.at/wp-content/uploads/2026/09/ZDOe-B1-AW_m_Ver.3.0_21_07_26.pdf | — | — | — | текущий | 200, 2026-10-30 (301→osd.at)<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZDÖ B1 Modellsatzbroschüre €9,90; ZDÖ B1 Übungsmaterialien (МС + 3 Übungssätze) €14,98 | https://testsam.at/product/14?shopType=OESD<br>https://testsam.at/product/29?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

Происходит из «B1 Zertifikat Deutsch» (GI, telc, Uni Freiburg, ÖSD). Это ближайший ÖSD-аналог формата DTÖ/интеграционного B1, но это не DTÖ.


## ÖSD Zertifikat Deutsch Österreich B1 / Jugendliche (ZDÖ B1/J, от 12 лет)

Страница: https://osd.at/portfolio-item/osd-zertifikat-deutsch-osterreich-b1-jugendliche-zdo-b1-j/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZDÖ B1 J Modellsatz HP», 21 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1_Jugendliche_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 18.09.2017 | 200, 2026-10-30 |
| Модуль Lesen + Sprachbausteine | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-J-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1_Jugendliche_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1_Jugendliche_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-J-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZDOe-B1-J-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Старые дубли модулей (ссылки на странице) | бесплатно | https://www.osd.at/wp-content/uploads/2019/04/zdoe_b1-j_ms_schreiben.pdf<br>https://www.osd.at/wp-content/uploads/2024/08/ZDO_B1_J_MS_Sprechen.pdf | — | нет | — | старые файлы, тот же формат | 200, 2026-10-30 (301→osd.at)<br>200, 2026-10-30 (301→osd.at) |
| Платно (TestSAM, официальный издатель ÖSD) | ZDÖ B1 J Modellsatzbroschüre €9,90 | https://testsam.at/product/15?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD Zertifikat B1 (ZB1, от 16 лет; совместно с Goethe-Institut и Uni Freiburg)

Страница: https://osd.at/portfolio-item/osd-zertifikat-b1-zb1/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZB1 Modellsatz HP», 23 стр. + 4 MP3 (HV 1–4)) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий (формат Goethe-/ÖSD-Zertifikat B1) | 200, 2026-10-30 |
| Тот же ZIP, дубль со страницы Downloads | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1_Modellsatz-1.zip | внутри | да | нет | идентичное содержимое | 200, 2026-10-30 |
| Модуль Lesen (ключ = заполненный Antwortbogen, картинкой) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 4 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/09/ZB1_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Kriterien Schreiben/Sprechen | бесплатно | https://www.osd.at/wp-content/uploads/2018/10/zb1_kriterien_schreiben.pdf<br>https://www.osd.at/wp-content/uploads/2018/10/zb1_kriterien_sprechen.pdf | — | — | — | текущий | 200, 2026-10-30 (301→osd.at)<br>200, 2026-10-30 (301→osd.at) |
| Платно (TestSAM, официальный издатель ÖSD) | ZB1 Modellsatzbroschüre €9,90; ZB1 Übungsmaterialien Band 1 (МС Erw. + МС Jug. + Übungssatz Erw. + Übungssatz Jug., транскрипты) €19,80 | https://testsam.at/product/5?shopType=OESD<br>https://testsam.at/product/22?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

**Совпадение с Goethe:** Lesen в ÖSD-версии содержит те же задания, что Goethe «B1 Modellsatz Erwachsene» (блог Susanne, Feldheim, Hausordnung и т. д.), и ключ Lesen 1–30 совпадает полностью с ключом из research/b1-modellsatz-razbor.md. Отличаются вёрстка/брендинг (логотипы GI + Uni Freiburg + ÖSD) и форма аудио (4 MP3 вместо одного MP4 у Goethe). Hören и Schreiben/Sprechen построчно не сверял. Платный ZB1 Band 1 по составу (Modellsatz + Übungssatz для взрослых и подростков) соответствует бесплатным Modellsatz/Übungssatz Goethe.


## ÖSD Zertifikat B1 / Jugendliche (ZB1/J, от 12 лет)

Страница: https://osd.at/portfolio-item/osd-zertifikat-b1-jugendliche-zb1-j/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZB1 J Modellsatz HP», 23 стр. + 1 MP3 (весь Hören, 110124)) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-J_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий | 200, 2026-10-30 |
| Тот же ZIP, дубль со страницы Downloads | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-J_Modellsatz-1.zip | внутри | да | нет | идентичное содержимое | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-J-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 1 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-J_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/09/ZB1-J_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-J-Modellsatz-Homepage-SA-1.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/09/ZB1-J-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZB1 J Modellsatzbroschüre €9,90; ZB1 Band 1 (включает Jugendliche) €19,80 | https://testsam.at/product/6?shopType=OESD<br>https://testsam.at/product/22?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

Lesen совпадает с Goethe «B1 Modellsatz Jugendliche» (блог Anna, тот же Teil 2) — сверены первые задания.


## ÖSD Zertifikat B2 (ZB2)

Страница: https://osd.at/portfolio-item/osd-zertifikat-b2-zb2/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZB2 Modellsatz HP», 24 стр. + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 27.09.2017 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-Modellsatz-HV.zip | https://osd.at/wp-content/uploads/2026/08/ZB2-Modellsatz-HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/ZB2-AW_s_Ver.7.0_WEB_11_09_26.pdf<br>https://osd.at/wp-content/uploads/2026/10/ZB2-AW_m_Ver.4.0_WEB_11_09_26.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZB2 Modellsatzbroschüre €9,90; ZB2 Übungsmaterialien Band 1 (МС + 3 Übungssätze) €19,80; ZB2 Band 2 (МС + 3 Übungssätze) €14,98 | https://testsam.at/product/7?shopType=OESD<br>https://testsam.at/product/23?shopType=OESD<br>https://testsam.at/product/24?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

Внимание к именам файлов: ZB2-Modellsatz.zip (дефис) = взрослые; ZB2_Modellsatz.zip (подчёркивание) = Jugendliche.


## ÖSD Zertifikat B2 / Jugendliche (ZB2/J)

Страница: https://osd.at/portfolio-item/osd-zertifikat-b2-jugendliche-zb2-j/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZB2 J Modellsatz HP», 24 стр. + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-J-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2_Jugendliche_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZB2_Jugendliche_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-J-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-J-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/ZB2-AW_s_Ver.7.0_WEB_11_09_26.pdf<br>https://osd.at/wp-content/uploads/2026/10/ZB2-AW_m_Ver.4.0_WEB_11_09_26.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZB2 J Modellsatzbroschüre €9,90; ZB2 Jugendliche Übungsmaterialien (МС + 3 Übungssätze) €14,98; Arena ÖSD B2/J (сторонний) €29,90 | https://testsam.at/product/8?shopType=OESD<br>https://testsam.at/product/25?shopType=OESD<br>https://testsam.at/product/34?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD Zertifikat B2 / Pflege und medizinische Berufe (ZB2/PMB)

Страница: https://osd.at/portfolio-item/osd-zertifikat-b2-pflege-und-medizinische-berufe-zb2-pmb/  
Формат: текущий (новый экзамен, аудио 12.2023–01.2024)

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZB2 PMB Modellsatz HP», 23 стр. + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2_PMB_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-PMB-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2_PMB_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZB2_PMB_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-PMB-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZB2-PMB-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://www.osd.at/wp-content/uploads/2025/02/ZB2-PMB-AW_s_Ver.2.0_WEB_20_02_25.pdf<br>https://www.osd.at/wp-content/uploads/2025/02/ZB2-PMB-AW_m_Ver.2.0_WEB_20_02_25.pdf | — | — | — | текущий | 200, 2026-10-30 (301→osd.at)<br>200, 2026-10-30 (301→osd.at) |
| Платно (TestSAM, официальный издатель ÖSD) | ZB2 PMB Modellsatzbroschüre €9,90; Sprachkurs Pflege B1–B2 Band 1 (учебник, не пробник) €24,75; Band 2 €24,75 | https://testsam.at/product/9?shopType=OESD<br>https://testsam.at/product/31?shopType=OESD<br>https://testsam.at/product/32?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

Übungsmaterialien (сборника пробников) для ZB2/PMB в шопе нет, только курс «Sprachkurs Deutsch: Pflege».


## ÖSD Zertifikat C1 (ZC1)

Страница: https://osd.at/portfolio-item/osd-zertifikat-c1-zc1/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZC1 Modellsatz HP», 24 стр. + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 04–05.12.2017 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZC1_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/ZC1-AW_s_Ver.5.0_WEB_11_09_26.pdf<br>https://osd.at/wp-content/uploads/2026/10/ZC1-AW_m_Ver.4.0_WEB_11_09_26.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZC1 Modellsatzbroschüre €9,90; ZC1 Übungsmaterialien Band 1 (МС + 3 Übungssätze) €19,80; ZC1 Band 2 (МС Erw.+Jug., по 2 Übungssätze) €18,57 | https://testsam.at/product/10?shopType=OESD<br>https://testsam.at/product/26?shopType=OESD<br>https://testsam.at/product/27?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD Zertifikat C1 / Jugendliche (ZC1/J)

Страница: https://osd.at/portfolio-item/osd-zertifikat-c1-jugendliche-zc1-j/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZC1 J Modellsatz HP», 24 стр. + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1_Jugendliche_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 04.12.2017 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-J-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 2 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1_Jugendliche_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZC1_Jugendliche_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-J-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-J-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/ZC1-AW_s_Ver.5.0_WEB_11_09_26.pdf<br>https://osd.at/wp-content/uploads/2026/10/ZC1-AW_m_Ver.4.0_WEB_11_09_26.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |
| Платно (TestSAM, официальный издатель ÖSD) | ZC1 J Modellsatzbroschüre €9,90; ZC1 Band 2 (включает Jugendliche) €18,57 | https://testsam.at/product/11?shopType=OESD<br>https://testsam.at/product/27?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD Zertifikat C1 / Pflege und medizinische Berufe (ZC1/PMB)

Страница: https://osd.at/portfolio-item/osd-zertifikat-c1-pflege-und-medizinische-berufe-zc1-pmb/  
Формат: текущий (новый экзамен, аудио 06–07.2025)

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZC1 PMB Modellsatz HP», 24 стр. + MP3 в двух версиях (оригинал + converted) и вложенный ZIP) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1_PMB_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-PMB-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + MP3 (оригинал + converted)) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1_PMB_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZC1_PMB_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-PMB-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC1-PMB-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://osd.at/wp-content/uploads/2026/10/ZC1-PMB-AW_s_Ver.2.0_17_09_26_WEB.pdf<br>https://osd.at/wp-content/uploads/2026/10/ZC1-PMB-AW_m_Ver.2.0_17_09_26_WEB.pdf | — | — | — | текущий | 200, 2026-10-30<br>200, 2026-10-30 |

Платных материалов (брошюра или Übungsmaterialien) в шопе нет, на странице нет и кнопки «Zum Shop».


## ÖSD Zertifikat C2 (ZC2)

Страница: https://osd.at/portfolio-item/osd-zertifikat-c2-zc2/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZC2 Modellsatz HP», 21 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий; аудио 05–08.2017 | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZC2_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://www.osd.at/wp-content/uploads/2025/09/ZC2-AW-Schreiben_Ver.4.0_27_05_25.pdf<br>https://www.osd.at/wp-content/uploads/2025/09/ZC2-AW-Sprechen_WEB_Ver.3.0_24_09_25.pdf | — | — | — | текущий | 200, 2026-10-30 (301→osd.at)<br>200, 2026-10-30 (301→osd.at) |
| Платно (TestSAM, официальный издатель ÖSD) | ZC2 Modellsatzbroschüre €9,90; ZC2 и ZC2/WD Übungsmaterialien (2 МС + по 2 Übungssätze на каждый экзамен; по блогу ÖSD 2022 типы заданий одинаковые) €24,75 | https://testsam.at/product/12?shopType=OESD<br>https://testsam.at/product/28?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## ÖSD Zertifikat C2 / Wirtschaftssprache Deutsch (ZC2/WD)

Страница: https://osd.at/portfolio-item/osd-zertifikat-c2-wirtschaftssprache-deutsch-zc2-wd/  
Формат: текущий

| Материал | Бесплатно/цена | PDF | Аудио | Ключ | Транскрипт | Формат действует | Проверено (HTTP/дата) |
|---|---|---|---|---|---|---|---|
| Полный Modellsatz (ZIP: PDF «ZC2 WD Modellsatz HP», 18 стр. + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2_WD_Modellsatz.zip | в том же ZIP | да, «Lösungen und Bewertung» (Lesen/Hören; критерии Schreiben/Sprechen) | нет | текущий | 200, 2026-10-30 |
| Модуль Lesen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2-WD-Modellsatz-Homepage-LV.pdf | — | да (ключ в конце PDF) | — | текущий | 200, 2026-10-30 |
| Модуль Hören (ZIP: PDF с заданиями и ключом + 3 MP3) | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2_WD_Modellsatz_HV.zip | https://osd.at/wp-content/uploads/2026/08/ZC2_WD_Modellsatz_HV.zip (MP3 внутри ZIP, отдельных MP3-ссылок нет) | да | нет | текущий | 200, 2026-10-30 |
| Модуль Schreiben | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2-WD-Modellsatz-Homepage-SA.pdf | — | нет (только задание; критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Модуль Sprechen | бесплатно | https://osd.at/wp-content/uploads/2026/08/ZC2-WD-Modellsatz-Homepage-MA.pdf | — | нет (критерии в Auswertungsbogen) | — | текущий | 200, 2026-10-30 |
| Auswertungsbogen (критерии оценки) | бесплатно | https://www.osd.at/wp-content/uploads/2025/09/ZC2-WD-AW_s_WEB_Ver.4.0_24_09_25.pdf<br>https://www.osd.at/wp-content/uploads/2025/09/ZC2-WD-AW_m_WEB_Ver.2.0_24_09_25.pdf | — | — | — | текущий | 200, 2026-10-30 (301→osd.at)<br>200, 2026-10-30 (301→osd.at) |
| Платно (TestSAM, официальный издатель ÖSD) | ZC2 WD Modellsatzbroschüre €9,90; ZC2 и ZC2/WD Übungsmaterialien €24,75 | https://testsam.at/product/13?shopType=OESD<br>https://testsam.at/product/28?shopType=OESD | код на скачивание (в Übungsmaterialien) | да | да (только в Übungsmaterialien) | текущий | страница товара 200, 2026-10-30 (цена с сайта) |

## Другие официальные ресурсы ÖSD
| Материал | Бесплатно/цена | Ссылка | Примечание | Проверено |
|---|---|---|---|---|
| Downloads (все Modellsatz-ZIP и Durchführungsbestimmungen на одной странице) | бесплатно | https://osd.at/downloads/ | Есть ZA1/Ö и ZA2/Ö, которых нет на страницах экзаменов | 200, 2026-10-30 |
| Test-Training digital (онлайн-Modellsatz) | бесплатно, регистрация | https://test-training-digital.osd.at/ | Lesen/Hören с ключом, Schreiben с примерами; только ПК | 200, 2026-10-30 |
| Einstufungstest | бесплатно | https://einstufungstest.osd.at/ | тест на уровень, не пробник | 200, 2026-10-30 |
| Probeprüfung | по запросу | https://osd.at/probepruefung/ | «derzeit nur eingeschränkt verfügbar», только по почте supervisor.probepruefung@osd.at | 200, 2026-10-30 |
| Prüfungsordnung ab 01.08.2026 | бесплатно | https://osd.at/wp-content/uploads/2026/08/OSD-Prufungsordnung_gueltig-ab-01.08.2026.pdf | правила, не пробник | ссылка со всех страниц |

## Не нашёл / платно / неясно
- **Транскрипты Hören бесплатно не найдены** ни для одного экзамена. Они есть только в платных Übungsmaterialien TestSAM (€14,98–24,75, книга или e-book, аудио по коду).
- **Дополнительные пробники (Übungssätze) только платно**: ZA1 Band 1/2, ZA2 Band 1/2, KID A1, KID A2, ZDÖ B1, ZB1 Band 1, ZB2 Band 1/2, ZB2/J, ZC1 Band 1/2, ZC2 + ZC2/WD (цены в таблицах). Бумажные «Modellsatzbroschüren» (€9,90) содержат тот же Modellsatz, что и бесплатный ZIP.
- **Нет Übungsmaterialien**: ZDÖ B1/J, ZB1/J отдельно (Jugendliche входят в ZB1 Band 1), ZB2/PMB (есть только курс «Sprachkurs Deutsch: Pflege» €24,75), ZC1/PMB (в шопе ничего), ZA1/Ö и ZA2/Ö.
- **DTÖ (Deutsch-Test für Österreich) и Integrationsprüfung ÖIF**: это экзамены ÖIF, на osd.at материалов нет. Задачей разрешены только источники ÖSD, поэтому сайт ÖIF не смотрел. Ближайшие ÖSD-экзамены для Австрии: ZA1/Ö, ZA2/Ö и ZDÖ B1 (пробники выше).
- **ÖSD Integrationsprüfung A2/B1 (IP A2/IP B1)**: на osd.at остался только блог-пост 2018 г. (https://osd.at/integrationspruefung-oesterreich-2/). Его ссылки на страницы экзаменов отдают **404**. В шопе ещё продаются «Integrationsprüfung A2/B1 Modellsatzbroschüre» 2018 г. (product/37, /39, по €9,90) и «Fragenkatalog» (product/36, /38, по €9,90). **Вероятно, устарело или экзамен больше не проводится ÖSD**, не подтверждено. Бесплатного Modellsatz нет.
- **Старые экзамены ÖSD** (Grundstufe Deutsch 1/2, KID 1/2, Mittelstufe Deutsch, Oberstufe Deutsch, Wirtschaftssprache Deutsch C1 и др.): на osd.at нет ни страниц, ни материалов, не искал дальше.
- **Совпадение ZB1 с Goethe**: Lesen проверен полностью (тексты и ключ 1–30 те же, что в Goethe «B1 Modellsatz Erwachsene»). ZB1/J Lesen совпадает с Goethe «Modellsatz Jugendliche» по первым заданиям. Hören, Schreiben и Sprechen построчно не сверял, но экзамен совместный (ÖSD + GI + Uni Freiburg), и логотипы всех трёх стоят на титуле.
- **Мелкие огрехи на сайте**: кнопка шопа у KID A2 ведёт на товар KID A1 (product/18 вместо /21). ZB2 и ZB2/J отличаются в именах ZIP только дефисом и подчёркиванием (`ZB2-Modellsatz.zip` = взрослые, `ZB2_Modellsatz.zip` = Jugendliche). У ZB1 и ZB1/J по два одинаковых ZIP (`*_Modellsatz.zip` и `*_Modellsatz-1.zip`). В ZC1/PMB MP3 лежат в двух вариантах плюс вложенный ZIP (около 100 МБ).
- **Размер скачивания**: полные ZIP весят от 12 МБ (ZB2/PMB) до 102 МБ (ZC1/PMB), C1 около 72–75 МБ.
