// Готовые детали для писем B1: кубики идей, банки историй и сборка письма целиком.
export type Pair = [string, string];
export interface IdeaSet {
  title: string;
  cap: string;
  note: string;
  dice: Record<string, Pair[]>;
  bankTitle: string;
  bank: [string, string[]][];
  /** Порядок сборки письма: начало, категории кубиков по очереди, конец. */
  build: { start: string[]; order: string[]; end: string[]; joinStart?: string };
}

export const IDEAS: Record<'brief' | 'forum' | 'formell', IdeaSet> = {
  brief: {
    title: 'Кубики идей',
    cap: 'нет фантазии? бросай',
    note: 'Экзаменатор не проверяет, правда это или нет. Бери деталь и пиши дальше.',
    dice: {
      'Почему не можешь': [
        ['Ich habe an dem Tag leider einen Arzttermin.', 'У меня в этот день запись к врачу.'],
        ['Mein Sohn ist krank, ich muss bei ihm bleiben.', 'Сын болеет, мне нужно остаться с ним.'],
        ['Ich muss an dem Wochenende arbeiten.', 'Мне нужно работать в эти выходные.'],
        ['Meine Eltern kommen genau dann zu Besuch.', 'Как раз тогда приезжают родители.'],
        ['Mein Auto ist gerade in der Werkstatt.', 'Моя машина сейчас в ремонте.'],
        ['Ich habe am Samstag meine Deutschprüfung.', 'В субботу у меня экзамен по немецкому.'],
        ['Wir ziehen gerade um und haben viel zu tun.', 'Мы сейчас переезжаем, дел очень много.'],
        ['Ich bin an dem Tag schon auf eine Hochzeit eingeladen.', 'В этот день я уже приглашена на свадьбу.'],
      ],
      'Как прошло': [
        ['Das Wetter war schlecht, aber wir hatten viel Spaß.', 'Погода была плохая, но было весело.'],
        ['Das Essen war super und die Leute waren sehr nett.', 'Еда была супер, люди очень милые.'],
        ['Am Anfang war es schwer, aber dann hat es gut geklappt.', 'Сначала было трудно, потом всё получилось.'],
        ['Am besten hat mir das Konzert am Abend gefallen.', 'Больше всего понравился вечерний концерт.'],
        ['Wir haben viel gelacht und lange getanzt.', 'Мы много смеялись и долго танцевали.'],
        ['Es war sehr voll, aber die Stimmung war toll.', 'Было очень много людей, но атмосфера супер.'],
        ['Ich habe viele neue Leute kennengelernt.', 'Я познакомилась со многими новыми людьми.'],
        ['Das Hotel war klein, aber sehr sauber.', 'Отель был маленький, но очень чистый.'],
      ],
      'Предложи': [
        ['Wie wäre es mit nächstem Samstag?', 'Как насчёт следующей субботы?'],
        ['Wir könnten uns im Café am Bahnhof treffen.', 'Можем встретиться в кафе у вокзала.'],
        ['Hast du Lust, am Sonntag spazieren zu gehen?', 'Хочешь погулять в воскресенье?'],
        ['Ich kann dir gern beim Umzug helfen.', 'Я с радостью помогу тебе с переездом.'],
        ['Wollen wir zusammen kochen?', 'Давай приготовим что-нибудь вместе?'],
        ['Sollen wir zusammen ins Kino gehen?', 'Сходим вместе в кино?'],
        ['Ruf mich einfach an, dann planen wir alles.', 'Просто позвони, и всё спланируем.'],
        ['Ich bringe einen Kuchen mit, okay?', 'Я принесу пирог, хорошо?'],
      ],
      'Опиши': [
        ['Die Wohnung ist klein, aber sehr hell.', 'Квартира маленькая, но очень светлая.'],
        ['Meine Kollegen sind freundlich und hilfsbereit.', 'Коллеги дружелюбные и всегда помогают.'],
        ['Die Stadt ist ruhig, es gibt viele Parks.', 'Город тихий, много парков.'],
        ['Der Kurs ist zweimal pro Woche am Abend.', 'Курс два раза в неделю вечером.'],
        ['Das Geschenk war ein Buch über Berlin.', 'Подарком была книга о Берлине.'],
        ['Mein neuer Job ist in einem Büro in der Stadtmitte.', 'Моя новая работа в офисе в центре.'],
        ['Die Nachbarn sind sehr nett und ruhig.', 'Соседи очень милые и тихие.'],
        ['Von meinem Balkon sehe ich den Fluss.', 'С балкона мне видно реку.'],
      ],
      'Чувство': [
        ['Ich habe mich sehr über deine Einladung gefreut.', 'Я очень обрадовалась твоему приглашению.'],
        ['Es tut mir wirklich leid.', 'Мне правда очень жаль.'],
        ['Ich war total überrascht.', 'Я была очень удивлена.'],
        ['Ich freue mich schon sehr darauf.', 'Я уже очень этого жду.'],
        ['Das war ein toller Tag für mich.', 'Это был отличный день для меня.'],
        ['Ich bin ein bisschen nervös, aber auch neugierig.', 'Немного нервничаю, но мне любопытно.'],
        ['Ich vermisse dich sehr.', 'Я очень по тебе скучаю.'],
        ['Vielen Dank für deine Hilfe!', 'Большое спасибо за помощь!'],
      ],
    },
    bankTitle: 'Банк историй: 10 заготовок на любое письмо',
    bank: [
      ['Заболел ребёнок', ['Mein Sohn war die ganze Woche krank.', 'Ich musste zu Hause bleiben.', 'Jetzt geht es ihm zum Glück besser.']],
      ['Сломалась машина', ['Leider ist mein Auto kaputt gegangen.', 'Ich musste es in die Werkstatt bringen.', 'Deshalb fahre ich gerade mit dem Bus.']],
      ['Приехали родители', ['Meine Eltern haben mich zwei Wochen besucht.', 'Wir haben zusammen die Stadt angeschaut.', 'Deshalb hatte ich kaum Zeit.']],
      ['Новая работа', ['Ich habe vor einem Monat eine neue Stelle angefangen.', 'Die Arbeit ist interessant, aber anstrengend.', 'Am Wochenende bin ich oft müde.']],
      ['Переезд', ['Wir sind letzten Monat umgezogen.', 'Es gab viel zu tun: Kisten packen, Möbel aufbauen.', 'Jetzt fühlen wir uns dort sehr wohl.']],
      ['Курс и экзамен', ['Ich mache gerade einen Deutschkurs am Abend.', 'Bald habe ich die B1-Prüfung.', 'Deshalb lerne ich jeden Tag.']],
      ['Отпуск', ['Ich war zwei Wochen mit meiner Familie am Meer.', 'Wir sind jeden Tag geschwommen.', 'Das Wetter war fast immer sonnig.']],
      ['День рождения', ['Am Samstag habe ich meinen Geburtstag gefeiert.', 'Es sind viele Freunde gekommen.', 'Wir haben bis Mitternacht getanzt.']],
      ['Соседка', ['Meine Nachbarin ist eine sehr nette ältere Frau.', 'Ich helfe ihr manchmal beim Einkaufen.', 'Gestern hat sie mir einen Kuchen gebacken.']],
      ['Спорт', ['Seit Januar gehe ich zweimal pro Woche schwimmen.', 'Am Anfang war es anstrengend.', 'Jetzt fühle ich mich viel fitter.']],
    ],
    build: {
      start: ['Liebe Anna,', 'vielen Dank für deine Nachricht!'],
      order: ['Как прошло', 'Опиши', 'Почему не можешь', 'Предложи', 'Чувство'],
      end: ['Schreib mir bald!', 'Viele Grüße', 'Marina'],
    },
  },
  forum: {
    title: 'Кубики аргументов',
    cap: 'мнение за 10 секунд',
    note: 'Аргументы общие, подходят к большинству тем. Добавь одно слово из своего задания, и пост готов.',
    dice: {
      'Моё мнение': [
        ['Ich finde dieses Thema sehr wichtig.', 'Я считаю эту тему очень важной.'],
        ['Meiner Meinung nach hat das Vor- und Nachteile.', 'На мой взгляд, тут есть плюсы и минусы.'],
        ['Ich sehe das ein bisschen anders.', 'Я вижу это немного иначе.'],
        ['Da stimme ich voll zu.', 'Тут я полностью согласна.'],
        ['Für mich ist das eine schwierige Frage.', 'Для меня это сложный вопрос.'],
        ['Ich bin da ganz anderer Meinung.', 'Я с этим совсем не согласна.'],
      ],
      'Аргумент за': [
        ['Ein großer Vorteil ist, dass man Zeit spart.', 'Большой плюс: экономишь время.'],
        ['Das ist gut für die Umwelt.', 'Это хорошо для окружающей среды.'],
        ['So lernt man neue Leute kennen.', 'Так знакомишься с новыми людьми.'],
        ['Das spart viel Geld.', 'Это экономит много денег.'],
        ['Kinder werden dadurch selbstständiger.', 'Дети от этого становятся самостоятельнее.'],
        ['Man bleibt flexibel.', 'Остаёшься гибкой.'],
      ],
      'Аргумент против': [
        ['Ein Nachteil ist, dass es teuer ist.', 'Минус: это дорого.'],
        ['Viele Menschen haben dafür keine Zeit.', 'У многих нет на это времени.'],
        ['Das kann auch gefährlich sein.', 'Это может быть и опасно.'],
        ['Man fühlt sich schnell allein.', 'Быстро начинаешь чувствовать себя одиноко.'],
        ['Ältere Menschen kommen damit oft nicht zurecht.', 'Пожилые люди часто с этим не справляются.'],
        ['Auf Dauer macht das Stress.', 'В долгосрочной перспективе это стресс.'],
      ],
      'Пример': [
        ['Zum Beispiel arbeite ich zweimal pro Woche von zu Hause.', 'Например, я работаю из дома два раза в неделю.'],
        ['In meinem Heimatland ist das ganz anders.', 'В моей стране это совсем по-другому.'],
        ['Meine Schwester hat damit gute Erfahrungen gemacht.', 'У моей сестры с этим хороший опыт.'],
        ['In unserem Kurs haben wir oft darüber gesprochen.', 'У нас на курсе часто об этом говорили.'],
        ['Ich habe das selbst einmal ausprobiert.', 'Я сама однажды это пробовала.'],
        ['Mein Nachbar macht das jeden Tag.', 'Мой сосед делает это каждый день.'],
      ],
      'Вывод': [
        ['Insgesamt finde ich das eine gute Idee.', 'В целом я считаю это хорошей идеей.'],
        ['Deshalb bin ich dagegen.', 'Поэтому я против.'],
        ['Am Ende muss jeder selbst entscheiden.', 'В итоге каждый решает сам.'],
        ['Man sollte einen Mittelweg finden.', 'Нужно найти золотую середину.'],
        ['Für mich überwiegen die Vorteile.', 'Для меня плюсы перевешивают.'],
        ['Für mich überwiegen die Nachteile.', 'Для меня минусы перевешивают.'],
      ],
    },
    bankTitle: 'Частые темы форума: аргумент за и против',
    bank: [
      ['Работа из дома', ['Pro: Man spart den Weg zur Arbeit.', 'Contra: Man hat weniger Kontakt zu Kollegen.']],
      ['Телефон для детей', ['Pro: Eltern können ihre Kinder immer erreichen.', 'Contra: Kinder sitzen zu viel vor dem Bildschirm.']],
      ['Покупки онлайн', ['Pro: Man kann rund um die Uhr bestellen.', 'Contra: Kleine Geschäfte in der Stadt schließen.']],
      ['Жизнь в деревне', ['Pro: Die Luft ist sauber und es ist ruhig.', 'Contra: Man braucht fast immer ein Auto.']],
      ['Домашние животные', ['Pro: Ein Hund ist ein treuer Freund.', 'Contra: Ein Tier kostet viel Zeit und Geld.']],
      ['Вегетарианство', ['Pro: Vegetarisch essen ist gesund und gut für das Klima.', 'Contra: Viele Menschen wollen nicht auf Fleisch verzichten.']],
    ],
    build: {
      start: ['Ich möchte gern etwas zu diesem Thema sagen.'],
      order: ['Моё мнение', 'Аргумент за', 'Аргумент против', 'Пример', 'Вывод'],
      end: [],
      joinStart: ' ',
    },
  },
  formell: {
    title: 'Кубики для письма на Sie',
    cap: 'официально, но без паники',
    note: 'Каждая фраза уже на Sie. Обращение и прощание в собранном письме тоже готовы.',
    dice: {
      'Причина': [
        ['Leider bin ich krank.', 'К сожалению, я болею.'],
        ['Mein Kind ist krank, deshalb muss ich zu Hause bleiben.', 'Ребёнок болен, поэтому мне нужно остаться дома.'],
        ['Ich habe an diesem Tag einen wichtigen Termin beim Amt.', 'В этот день у меня важная встреча в ведомстве.'],
        ['Mein Zug hatte eine große Verspätung.', 'Мой поезд сильно опоздал.'],
        ['Ich muss an diesem Tag länger arbeiten.', 'В этот день мне нужно работать дольше.'],
      ],
      'Извинение': [
        ['Es tut mir sehr leid, dass ich nicht kommen kann.', 'Мне очень жаль, что не смогу прийти.'],
        ['Bitte entschuldigen Sie die späte Nachricht.', 'Извините за позднее сообщение.'],
        ['Ich bitte um Ihr Verständnis.', 'Прошу вашего понимания.'],
        ['Entschuldigen Sie bitte, dass ich so spät antworte.', 'Извините, что так поздно отвечаю.'],
      ],
      'Просьба': [
        ['Könnten Sie mir bitte einen neuen Termin geben?', 'Не могли бы вы дать мне новый срок?'],
        ['Könnten Sie mir die Unterlagen per E-Mail schicken?', 'Не могли бы вы прислать документы по email?'],
        ['Ich möchte Sie bitten, mich kurz anzurufen.', 'Хочу попросить вас коротко мне перезвонить.'],
        ['Wäre es möglich, den Termin zu verschieben?', 'Можно ли перенести встречу?'],
      ],
      'Предложение': [
        ['Ich könnte am Montag oder Dienstag kommen.', 'Я могу прийти в понедельник или вторник.'],
        ['Passt Ihnen nächste Woche am Vormittag?', 'Вам подходит следующая неделя до обеда?'],
        ['Ich komme gern auch etwas früher.', 'Могу прийти и чуть раньше.'],
        ['Die Aufgaben kann ich zu Hause nachholen.', 'Задания я могу наверстать дома.'],
      ],
      'Концовка': [
        ['Vielen Dank im Voraus.', 'Заранее спасибо.'],
        ['Ich freue mich auf Ihre Antwort.', 'Жду вашего ответа.'],
        ['Vielen Dank für Ihr Verständnis.', 'Спасибо за понимание.'],
      ],
    },
    bankTitle: 'Кому пишут на экзамене: готовое начало',
    bank: [
      ['Преподавательнице курса', ['Sehr geehrte Frau Weber,', 'leider kann ich morgen nicht zum Kurs kommen.']],
      ['Арендодателю', ['Sehr geehrter Herr Schmidt,', 'in meiner Wohnung ist die Heizung kaputt.']],
      ['В клинику', ['Sehr geehrte Damen und Herren,', 'ich muss meinen Termin am Freitag leider absagen.']],
      ['Начальнику', ['Sehr geehrter Herr Braun,', 'ich bin leider krank und kann heute nicht arbeiten.']],
    ],
    build: {
      start: ['Sehr geehrte Frau Weber,'],
      order: ['Извинение', 'Причина', 'Предложение', 'Просьба', 'Концовка'],
      end: ['Mit freundlichen Grüßen', 'Marina Petrova'],
    },
  },
};
