import type { LandingLocale } from './copy';

export type ExtraCopy = {
    stickyCta: string;
    launch: {
        eyebrow: string;
        title: string;
        subtitle: string;
        note: string;
        steps: Array<{ title: string; text: string }>;
    };
    calculator: {
        eyebrow: string;
        title: string;
        subtitle: string;
        qr: string;
        tablets: string;
        pending: string;
        quote: string;
        month: string;
        cta: string;
    };
    need: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: Array<{ title: string; text: string }>;
    };
    geo: {
        eyebrow: string;
        title: string;
        text: string;
    };
    people: {
        title: string;
        call: string;
        whatsapp: string;
    };
    company: {
        productOf: string;
    };
    demoCta: string;
    theme: string;
    themeLight: string;
    themeDark: string;
};

const extra: Record<LandingLocale, ExtraCopy> = {
    ru: {
        stickyCta: 'Оставить заявку',
        launch: {
            eyebrow: 'Подключение',
            title: 'От заявки до первого заказа — 3–5 дней',
            subtitle:
                'Мы приезжаем или созваниваемся, ставим QR или iPad, переносим ваше меню в цифровую версию — и зал уже принимает заказы.',
            note: 'Срок зависит от формата: QR обычно быстрее, планшеты на столы занимают ближе к пяти дням.',
            steps: [
                { title: 'Заявка', text: 'Пишете нам: город, сколько столов, QR или iPad.' },
                { title: 'Приезжаем или созваниваемся', text: 'Смотрим зал, столы и как удобнее запускать.' },
                { title: 'Ставим QR или iPad', text: 'Коды на столы или планшеты с уже открытым меню. Админ-планшет — в комплекте.' },
                { title: 'Ваше меню в цифре', text: 'Переносим позиции, цены и фото в электронное меню.' },
                { title: 'Зал принимает заказы', text: 'Гости заказывают, команда видит это в Telegram и на админ-планшете.' },
            ],
        },
        calculator: {
            eyebrow: 'Расчёт',
            title: 'Цена зависит от количества столов',
            subtitle:
                'Отдельно укажите столы с QR и столы с планшетами — можно только одно или оба формата сразу. Цену пришлём в предложении.',
            qr: 'столов с QR',
            tablets: 'столов с iPad',
            pending: 'Цену ещё считаем. Оставьте заявку — пришлём цифру под ваши QR и планшеты.',
            quote: 'Ориентир в месяц',
            month: '/ мес.',
            cta: 'Получить расчёт на эти столы',
        },
        need: {
            eyebrow: 'Что нужно от вас',
            title: 'С вашей стороны — только контент меню',
            subtitle: 'Пришлите фото блюд, текущее меню и Telegram зала. Технику, коды и запуск делаем мы.',
            items: [
                { title: 'Фото всех продуктов', text: 'Как они выглядят у вас в заведении. Чем лучше кадр, тем живее меню.' },
                { title: 'Текущее меню', text: 'То, чем сейчас пользуетесь: буклет, PDF, Excel — в любом виде.' },
                { title: 'Telegram сотрудников', text: 'Аккаунты всех, кто работает в зале. Их добавим в канал заказов.' },
            ],
        },
        geo: {
            eyebrow: 'Где работаем',
            title: 'Из Праги — по всей Европе',
            text: 'Базируемся в Праге, запускаем проекты по всей Чехии и работаем с заведениями в других странах Европы.',
        },
        people: {
            title: 'Написать сейчас',
            call: 'Позвонить',
            whatsapp: 'WhatsApp',
        },
        company: {
            productOf: 'ToodyMenu — продукт компании',
        },
        demoCta: 'Получить демо-версию',
        theme: 'Тема',
        themeLight: 'Светлая',
        themeDark: 'Тёмная',
    },
    ua: {
        stickyCta: 'Залишити заявку',
        launch: {
            eyebrow: 'Підключення',
            title: 'Від заявки до першого замовлення — 3–5 днів',
            subtitle:
                'Приїжджаємо або телефонуємо, ставимо QR або iPad, переносимо ваше меню в цифрову версію — і зала вже приймає замовлення.',
            note: 'Термін залежить від формату: QR зазвичай швидше, планшети на столи ближче до п’яти днів.',
            steps: [
                { title: 'Заявка', text: 'Пишете нам: місто, скільки столів, QR чи iPad.' },
                { title: 'Приїжджаємо або телефонуємо', text: 'Дивимось залу, столи і як зручніше запускати.' },
                { title: 'Ставимо QR або iPad', text: 'Коди на столи або планшети з уже відкритим меню. Адмін-планшет — у комплекті.' },
                { title: 'Ваше меню в цифрі', text: 'Переносимо позиції, ціни і фото в електронне меню.' },
                { title: 'Зала приймає замовлення', text: 'Гості замовляють, команда бачить це в Telegram і на адмін-планшеті.' },
            ],
        },
        calculator: {
            eyebrow: 'Розрахунок',
            title: 'Ціна залежить від кількості столів',
            subtitle:
                'Окремо вкажіть столи з QR і столи з планшетами — можна лише один формат або обидва разом. Ціну надішлемо в пропозиції.',
            qr: 'столів з QR',
            tablets: 'столів з iPad',
            pending: 'Ціну ще рахуємо. Залиште заявку — надішлемо цифру під ваші QR і планшети.',
            quote: 'Орієнтир на місяць',
            month: '/ міс.',
            cta: 'Отримати розрахунок на ці столи',
        },
        need: {
            eyebrow: 'Що потрібно від вас',
            title: 'З вашого боку — лише контент меню',
            subtitle: 'Надішліть фото страв, поточне меню і Telegram зали. Техніку, коди і запуск робимо ми.',
            items: [
                { title: 'Фото всіх продуктів', text: 'Як вони виглядають у вас у закладі.' },
                { title: 'Поточне меню', text: 'Буклет, PDF, Excel — у будь-якому вигляді.' },
                { title: 'Telegram співробітників', text: 'Акаунти всіх, хто працює в залі. Додамо в канал замовлень.' },
            ],
        },
        geo: {
            eyebrow: 'Де працюємо',
            title: 'З Праги — по всій Європі',
            text: 'Базуємося в Празі, запускаємо проєкти по всій Чехії і працюємо із закладами в інших країнах Європи.',
        },
        people: {
            title: 'Написати зараз',
            call: 'Зателефонувати',
            whatsapp: 'WhatsApp',
        },
        company: {
            productOf: 'ToodyMenu — продукт компанії',
        },
        demoCta: 'Отримати демо-версію',
        theme: 'Тема',
        themeLight: 'Світла',
        themeDark: 'Темна',
    },
    cs: {
        stickyCta: 'Nechat poptávku',
        launch: {
            eyebrow: 'Zapojení',
            title: 'Od poptávky k první objednávce — 3–5 dní',
            subtitle:
                'Přijedeme nebo si zavoláme, nainstalujeme QR nebo iPad, převedeme vaše menu do digitální verze — a sál už přijímá objednávky.',
            note: 'Termín závisí na formátu: QR je obvykle rychlejší, tablety na stoly spíš k pěti dnům.',
            steps: [
                { title: 'Poptávka', text: 'Napište město, počet stolů, QR nebo iPad.' },
                { title: 'Přijedeme nebo si zavoláme', text: 'Projdeme sál, stoly a jak to spustit.' },
                { title: 'Dáme QR nebo iPad', text: 'Kódy na stoly, nebo tablety s otevřeným menu. Admin tablet je v sadě.' },
                { title: 'Vaše menu v digitálu', text: 'Převedeme položky, ceny a fotky do elektronického menu.' },
                { title: 'Sál přijímá objednávky', text: 'Hosté objednávají, tým to vidí v Telegramu i na admin tabletu.' },
            ],
        },
        calculator: {
            eyebrow: 'Kalkulace',
            title: 'Cena závisí na počtu stolů',
            subtitle:
                'Zvlášť zadejte stoly s QR a stoly s tablety — může to být jen jeden formát, nebo oba najednou. Cenu pošleme v nabídce.',
            qr: 'stolů s QR',
            tablets: 'stolů s iPadem',
            pending: 'Cenu ještě počítáme. Nechte poptávku — pošleme číslo podle QR i tabletů.',
            quote: 'Orientačně za měsíc',
            month: '/ měs.',
            cta: 'Spočítat těchto stolů',
        },
        need: {
            eyebrow: 'Co od vás potřebujeme',
            title: 'Od vás stačí obsah menu',
            subtitle: 'Pošlete fotky jídel, současné menu a Telegram sálu. Techniku, kódy i spuštění bereme na sebe.',
            items: [
                { title: 'Fotky všech produktů', text: 'Jak vypadají u vás v provozu.' },
                { title: 'Současné menu', text: 'Leták, PDF, Excel — v jakékoli podobě.' },
                { title: 'Telegram zaměstnanců', text: 'Účty všech, kdo pracují v sále. Přidáme je do kanálu objednávek.' },
            ],
        },
        geo: {
            eyebrow: 'Kde pracujeme',
            title: 'Z Prahy — po celé Evropě',
            text: 'Sídlíme v Praze, spouštíme projekty po celém Česku a pracujeme s provozy v dalších zemích Evropy.',
        },
        people: {
            title: 'Napsat teď',
            call: 'Zavolat',
            whatsapp: 'WhatsApp',
        },
        company: {
            productOf: 'ToodyMenu je produkt společnosti',
        },
        demoCta: 'Získat demo verzi',
        theme: 'Motiv',
        themeLight: 'Světlý',
        themeDark: 'Tmavý',
    },
    en: {
        stickyCta: 'Leave a request',
        launch: {
            eyebrow: 'Setup',
            title: 'From request to first order — 3–5 days',
            subtitle:
                'We visit or hop on a call, install QR or iPads, put your menu into the digital version — and the floor starts taking orders.',
            note: 'Timing depends on the format: QR is usually faster, tablets on tables closer to five days.',
            steps: [
                { title: 'Request', text: 'Tell us the city, table count, QR or iPad.' },
                { title: 'We visit or call', text: 'We look at the room, the tables and the best way to launch.' },
                { title: 'QR or iPads go in', text: 'Codes on tables, or tablets with the menu already open. Admin tablet included.' },
                { title: 'Your menu, digital', text: 'We move items, prices and photos into the electronic menu.' },
                { title: 'The floor takes orders', text: 'Guests order, the team sees it in Telegram and on the admin tablet.' },
            ],
        },
        calculator: {
            eyebrow: 'Quote',
            title: 'Price depends on the number of tables',
            subtitle:
                'Set QR tables and iPad tables separately — one format or both. We will send the price in a proposal.',
            qr: 'tables with QR',
            tablets: 'tables with iPad',
            pending: 'The price is still being set. Leave a request — we will quote for your QR and tablet counts.',
            quote: 'Monthly estimate',
            month: '/ mo',
            cta: 'Get a quote for these tables',
        },
        need: {
            eyebrow: 'What we need from you',
            title: 'From you, just the menu content',
            subtitle: 'Send dish photos, your current menu and the floor Telegram. Hardware, codes and launch are on us.',
            items: [
                { title: 'Photos of every product', text: 'How they look in your venue.' },
                { title: 'Your current menu', text: 'Booklet, PDF, spreadsheet — any format.' },
                { title: 'Staff Telegram accounts', text: 'Everyone who works the floor. We add them to the order channel.' },
            ],
        },
        geo: {
            eyebrow: 'Where we work',
            title: 'From Prague — across Europe',
            text: 'We are based in Prague, we launch projects across Czechia and work with venues in other European countries.',
        },
        people: {
            title: 'Message now',
            call: 'Call',
            whatsapp: 'WhatsApp',
        },
        company: {
            productOf: 'ToodyMenu is a product of',
        },
        demoCta: 'Get a demo version',
        theme: 'Theme',
        themeLight: 'Light',
        themeDark: 'Dark',
    },
};

export const getExtraCopy = (locale: LandingLocale): ExtraCopy => extra[locale];
