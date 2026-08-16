export type LandingLocale = 'en' | 'cs' | 'ru' | 'ua';

export type LandingCopy = {
    seoTitle: string;
    seoDescription: string;
    nav: {
        features: string;
        how: string;
        audience: string;
        pricing: string;
        faq: string;
        cta: string;
        tabletLogin: string;
    };
    hero: {
        eyebrow: string;
        titleBefore: string;
        titleAccent: string;
        titleAfter: string;
        subtitle: string;
        primaryCta: string;
        secondaryCta: string;
        stats: Array<{ value: string; label: string }>;
    };
    audience: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: Array<{ title: string; text: string }>;
    };
    problem: {
        eyebrow: string;
        title: string;
        items: Array<{ title: string; text: string }>;
    };
    how: {
        eyebrow: string;
        title: string;
        subtitle: string;
        steps: Array<{ title: string; text: string }>;
    };
    features: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: Array<{ title: string; text: string }>;
    };
    split: {
        guestTitle: string;
        guestText: string;
        guestItems: string[];
        staffTitle: string;
        staffText: string;
        staffItems: string[];
    };
    pricing: {
        eyebrow: string;
        title: string;
        subtitle: string;
        note: string;
        soonLabel: string;
        cta: string;
        waitCta: string;
        plans: Array<{
            id: 'qr' | 'ipad' | 'kiosk';
            name: string;
            badge: string;
            tagline: string;
            description: string;
            included: string[];
        }>;
    };
    faq: {
        eyebrow: string;
        title: string;
        items: Array<{ question: string; answer: string }>;
    };
    contact: {
        eyebrow: string;
        title: string;
        subtitle: string;
        name: string;
        email: string;
        phone: string;
        venue: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
        success: string;
        error: string;
        demo: string;
    };
    footer: {
        tagline: string;
        rights: string;
    };
    mockup: {
        table: string;
        search: string;
        coals: string;
        waiter: string;
        payment: string;
        hits: string;
        hookah: string;
        kitchen: string;
        drinks: string;
        productOne: string;
        productOneMeta: string;
        productTwo: string;
        productTwoMeta: string;
        add: string;
        cart: string;
    };
};

const ru: LandingCopy = {
    seoTitle: 'ToodyMenu — цифровое меню для ресторанов, кафе и кальянных',
    seoDescription:
        'Цифровое меню по подписке: QR на столах или iPad, которые мы ставим сами. Заказы в Telegram и на админ-планшет. Ничего покупать не нужно.',
    nav: {
        features: 'Возможности',
        how: 'Как это работает',
        audience: 'Для кого',
        pricing: 'Варианты',
        faq: 'FAQ',
        cta: 'Оставить заявку',
        tabletLogin: 'Вход для планшета',
    },
    hero: {
        eyebrow: 'Цифровое меню по подписке',
        titleBefore: 'Меню, которое',
        titleAccent: 'продаёт и обслуживает',
        titleAfter: 'за вас',
        subtitle:
            'ToodyMenu — цифровое меню по подписке для ресторанов, кафе, баров и кальянных. Два формата уже работают: QR на столах или iPad, которые мы ставим сами. Третий — стойка на входе для кофе с собой — сейчас в разработке. Ничего покупать не нужно, только ежемесячная оплата.',
        primaryCta: 'Подключить заведение',
        secondaryCta: 'Смотреть варианты',
        stats: [
            { value: 'QR', label: 'заказ со своего телефона' },
            { value: 'iPad', label: 'мы ставим на столы' },
            { value: '0', label: 'покупок техники' },
        ],
    },
    audience: {
        eyebrow: 'Для кого',
        title: 'Одно решение под разные форматы',
        subtitle: 'Система уже заточена под зал, а не под интернет-магазин. Ставите на стол — и гости начинают заказывать.',
        items: [
            {
                title: 'Ресторан',
                text: 'Полноценный заказ со стола, дозаказ в тот же счёт, заметки к блюдам и понятные статусы для кухни и зала.',
            },
            {
                title: 'Кафе',
                text: 'Гость не ждёт, пока освободится стойка. Для кофе с собой готовим третий формат — стойка с планшетом на входе.',
            },
            {
                title: 'Кальянная',
                text: 'Конструктор кальяна, вызов кальянщика, угли и статусы «ждём угли / ждём кальянщика» — без крика через зал.',
            },
            {
                title: 'Бар',
                text: 'Happy hours, рекомендации, вызов персонала и оплата с экрана. Меню меняется за минуту, а не за типографию.',
            },
        ],
    },
    problem: {
        eyebrow: 'Знакомо?',
        title: 'Бумага, ожидание и потерянные заказы дорого стоят',
        items: [
            {
                title: 'Меню устаревает быстрее печати',
                text: 'Новая позиция, другая цена, закончился продукт — а на столе всё ещё вчерашний буклет.',
            },
            {
                title: 'Гости ждут официанта, чтобы просто выбрать',
                text: 'В час пик персонал не успевает принять заказ. Стол молчит, средний чек падает.',
            },
            {
                title: 'Сервис через крик',
                text: 'Угли, кальянщик, счёт, официант — гости машут рукой. Зал шумит, персонал путается.',
            },
            {
                title: 'Нет картины по столу',
                text: 'Кто ещё выбирает, кто ждёт блюдо, кто просит оплату — в голове официанта, а не в системе.',
            },
        ],
    },
    how: {
        eyebrow: 'Запуск',
        title: 'Как это выглядит в зале',
        subtitle: 'Гость не регистрируется и не качает приложение. Открыл меню с QR или с iPad — и уже заказывает.',
        steps: [
            {
                title: 'Стол открывает меню',
                text: 'QR на столе — гость заходит со своего телефона. Или на столе уже стоит наш iPad с меню.',
            },
            {
                title: 'Язык и заставка',
                text: 'Гость видит ваш экран приветствия, выбирает язык и попадает в меню на своём языке.',
            },
            {
                title: 'Заказ со стола',
                text: 'Блюда, кальяны, напитки, пожелания. Можно дозаказать в тот же открытый счёт.',
            },
            {
                title: 'Команда сразу видит',
                text: 'Заказ приходит в Telegram-канал всех сотрудников и на админ-планшет: меню, настройки и заказы в одном месте.',
            },
            {
                title: 'Сессия закрыта',
                text: 'Закрыли стол в админке — следующим гостям снова чистое меню, без чужого заказа.',
            },
        ],
    },
    features: {
        eyebrow: 'Возможности',
        title: 'Не просто PDF на экране, а рабочий зал',
        subtitle: 'Всё, что уже есть в ToodyMenu и чем вы пользуетесь каждый вечер.',
        items: [
            {
                title: 'QR на своём телефоне',
                text: 'На столе QR-код. Гость сканирует, открывает меню и заказывает. Ничего скачивать не нужно.',
            },
            {
                title: 'iPad на столе — мы ставим сами',
                text: 'На каждом столе уже открыто меню. Гость не ищет камеру и не сканирует код. Заведение выглядит солиднее.',
            },
            {
                title: 'Сессии стола',
                text: 'Один активный заказ на стол. Гости за столом заказывают в общий счёт, пока сессия открыта.',
            },
            {
                title: 'Дозаказ без нового чека',
                text: 'Ещё один кальян или десерт добавляется в тот же заказ, а не создаёт путаницу на кухне.',
            },
            {
                title: 'Вызов персонала с экрана',
                text: 'Угли, официант, оплата, кальянщик — одна кнопка. Статус стола меняется автоматически.',
            },
            {
                title: 'Happy hours',
                text: 'Акции по времени включаются сами. Цена в меню меняется, когда начинается счастливый час.',
            },
            {
                title: '4 языка из коробки',
                text: 'Чешский, русский, украинский, английский. Гость выбирает язык один раз — и остаётся в нём.',
            },
            {
                title: 'Telegram-канал команды',
                text: 'Каждый заказ приходит в общий канал, где все сотрудники. Никто не стоит у монитора и не пропускает стол.',
            },
            {
                title: 'Живые статусы заказа',
                text: 'В ожидании углей, доставки, кальянщика, официанта, оплаты или пока гость ещё выбирает.',
            },
            {
                title: 'Заметки к блюдам и к заказу',
                text: '«Без лука», «крепче», «счёт раздельно» — персонал видит это сразу, не переспрашивая.',
            },
            {
                title: 'Допродажи на iPad',
                text: 'На планшете всплывает предложение дозаказать — система анализирует текущий заказ и подбирает следующий. На QR этого нет: телефон гости закрывают.',
            },
            {
                title: 'Админ-планшет в комплекте',
                text: 'Один планшет заведению: меняете меню и настройки электронного меню, и туда же приходят заказы, как в Telegram.',
            },
        ],
    },
    split: {
        guestTitle: 'Гостю спокойно',
        guestText: 'Красивое меню, понятные кнопки, свой язык. Можно не ловить взгляд официанта.',
        guestItems: [
            'Заставка заведения и выбор языка',
            'Светлая и тёмная тема',
            'QR на своём телефоне или iPad на столе',
            'Поиск по меню и дозаказ в тот же счёт',
            'Вызов углей, персонала и оплаты',
        ],
        staffTitle: 'Персоналу ясно',
        staffText: 'Не нужно запоминать, кто чего хотел. Стол говорит сам через статусы.',
        staffItems: [
            'Заказы с номером стола',
            'Открытая сессия и дозаказ',
            'Заказы в Telegram-канале всей команды',
            'Админ-планшет: меню, настройки и заказы',
            'Закрытие стола в один клик',
        ],
    },
    pricing: {
        eyebrow: 'Варианты',
        title: 'Два формата сейчас, третий — в разработке',
        subtitle:
            'Один сервис, разный зал. QR — если гости заказывают со своих телефонов. iPad — если хотите экраны на столах и допродажи. Стойка на входе — для кофе с собой, её ещё собираем.',
        note: 'Ничего покупать не нужно. Платите только ежемесячную подписку — QR, iPad, админ-планшет и запуск берём на себя.',
        soonLabel: 'В разработке',
        cta: 'Хочу этот вариант',
        waitCta: 'Написать, когда появится',
        plans: [
            {
                id: 'qr',
                name: 'QR на столах',
                badge: 'Старт',
                tagline: 'Гость заказывает со своего телефона',
                description:
                    'На каждом столе QR-код. Гость сканирует, открывает меню и сразу делает заказ. Заведению ничего не нужно ставить на стол, кроме таблички с кодом.',
                included: [
                    'QR-код на каждый стол',
                    'Заказ с телефона гостя, без приложения',
                    'Заказы в Telegram-канал всех сотрудников',
                    'Один админ-планшет: меню, настройки и те же заказы',
                    'Мы предоставляем всё для запуска',
                ],
            },
            {
                id: 'ipad',
                name: 'iPad на столах',
                badge: 'Солидный зал',
                tagline: 'Меню уже открыто, техника — наша',
                description:
                    'На каждый стол ставим iPad с уже открытым меню. Гость заказывает с экрана. Система анализирует, что уже в заказе, и предлагает подходящий дозаказ.',
                included: [
                    'iPad на каждый стол — предоставляем мы',
                    'Меню уже открыто, гость не сканирует код',
                    'Всплывающие предложения дозаказать то, что предлагает система',
                    'Солидный вид зала',
                    'Заказы в Telegram-канал и на админ-планшет',
                    'Ничего покупать не нужно, только подписка',
                ],
            },
            {
                id: 'kiosk',
                name: 'Стойка на входе',
                badge: 'Takeaway',
                tagline: 'Заказал и пошёл ждать выдачи',
                description:
                    'У входа в кафе стоит стойка с планшетом. Гость заказывает кофе или еду с собой и идёт ждать. Формат для takeaway — сейчас в разработке.',
                included: [
                    'Стойка с планшетом на входе',
                    'Заказ с собой: кофе, выпечка, takeaway',
                    'Гость заказал и ждёт выдачи',
                    'Тот же Telegram и админка, когда формат выйдет',
                ],
            },
        ],
    },
    faq: {
        eyebrow: 'FAQ',
        title: 'Вопросы, которые обычно задают владельцы',
        items: [
            {
                question: 'Это приложение, которое гости должны скачать?',
                answer: 'Нет. Это сайт-меню в браузере. В варианте QR гость сканирует код своим телефоном. В варианте iPad меню уже открыто на планшете на столе.',
            },
            {
                question: 'Нужно ли покупать планшеты и технику?',
                answer: 'Нет. Вы платите только ежемесячную подписку. QR, iPad на столы, админ-планшет и запуск предоставляем мы.',
            },
            {
                question: 'Чем iPad лучше QR?',
                answer: 'На iPad всплывают предложения дозаказать: система анализирует, что уже в заказе, и предлагает следующий. Плюс планшеты на столах выглядят солиднее, чем бумажный QR. С телефона гости чаще закрывают меню и не видят допродажу.',
            },
            {
                question: 'Как персонал узнаёт о заказе?',
                answer: 'Заказ приходит в Telegram-канал, где все сотрудники. Параллельно тот же заказ виден на одном админ-планшете — там же меняете меню и настройки.',
            },
            {
                question: 'Подойдёт ли кальянной, а не только ресторану?',
                answer: 'Да. Есть конструктор кальяна, вызов кальянщика, кнопка углей и отдельные статусы под этот сервис. Ресторанные сценарии при этом тоже работают.',
            },
            {
                question: 'Что такое стойка на входе?',
                answer: 'Третий формат, сейчас в разработке. У входа стоит планшет: гость заказывает кофе или еду с собой и идёт ждать выдачи. Для кафе с takeaway.',
            },
            {
                question: 'Можно ли менять меню самим?',
                answer: 'Да. На админ-планшете вы меняете позиции, цены, фото, наличие и настройки электронного меню. Печатать новое меню не нужно.',
            },
            {
                question: 'Сколько стоит и как подключиться?',
                answer: 'Только ежемесячная подписка, без покупки техники. Оставьте заявку и напишите, какой вариант смотрите: QR, iPad или стойку, когда она выйдет.',
            },
        ],
    },
    contact: {
        eyebrow: 'Связь',
        title: 'Расскажите про заведение — ответим с предложением',
        subtitle: 'Напишите город, формат, сколько столов и какой вариант смотрите: QR, iPad или стойку на входе.',
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        venue: 'Заведение',
        message: 'Сообщение',
        messagePlaceholder: 'Город, тип заведения, столы, вариант: QR / iPad / стойка',
        submit: 'Отправить заявку',
        success: 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
        error: 'Не удалось отправить. Напишите нам на toody-it@toody-it.com',
        demo: 'Хочу получить ссылку на демо-версию',
    },
    footer: {
        tagline: 'Цифровое меню для заведений, которые хотят быстрее обслуживать и больше продавать.',
        rights: 'ToodyIT. Все права защищены.',
    },
    mockup: {
        table: 'Стол 7',
        search: 'Поиск',
        coals: 'Угли',
        waiter: 'Официант',
        payment: 'Оплата',
        hits: 'Хиты',
        hookah: 'Кальяны',
        kitchen: 'Кухня',
        drinks: 'Напитки',
        productOne: 'Авторский сет',
        productOneMeta: 'Happy hour',
        productTwo: 'Классический кальян',
        productTwoMeta: 'Собрать самому',
        add: 'В заказ',
        cart: 'Заказ',
    },
};

const ua: LandingCopy = {
    seoTitle: 'ToodyMenu — цифрове меню для ресторанів, кафе та кальянних',
    seoDescription:
        'Цифрове меню за підпискою: QR на столах або iPad, які ставимо ми. Замовлення в Telegram і на адмін-планшет. Нічого купувати не потрібно.',
    nav: {
        features: 'Можливості',
        how: 'Як це працює',
        audience: 'Для кого',
        pricing: 'Варіанти',
        faq: 'FAQ',
        cta: 'Залишити заявку',
        tabletLogin: 'Вхід для планшета',
    },
    hero: {
        eyebrow: 'Цифрове меню за підпискою',
        titleBefore: 'Меню, яке',
        titleAccent: 'продає і обслуговує',
        titleAfter: 'за вас',
        subtitle:
            'ToodyMenu — цифрове меню за підпискою для ресторанів, кафе, барів і кальянних. Два формати вже працюють: QR на столах або iPad, які ставимо ми. Третій — стійка на вході для кави з собою — зараз у розробці. Нічого купувати не потрібно, лише щомісячна оплата.',
        primaryCta: 'Підключити заклад',
        secondaryCta: 'Дивитися варіанти',
        stats: [
            { value: 'QR', label: 'замовлення зі свого телефона' },
            { value: 'iPad', label: 'ми ставимо на столи' },
            { value: '0', label: 'покупок техніки' },
        ],
    },
    audience: {
        eyebrow: 'Для кого',
        title: 'Одне рішення для різних форматів',
        subtitle: 'Система зроблена під залу, а не під інтернет-магазин. Ставите на стіл — і гості починають замовляти.',
        items: [
            {
                title: 'Ресторан',
                text: 'Повноцінне замовлення зі столу, дозамовлення в той самий рахунок і зрозумілі статуси для кухні та зали.',
            },
            {
                title: 'Кафе',
                text: 'Гість не чекає, поки звільниться стійка. Для кави з собою готуємо третій формат — стійка з планшетом на вході.',
            },
            {
                title: 'Кальянна',
                text: 'Конструктор кальяна, виклик кальянника, вугілля та статуси сервісу — без крику через залу.',
            },
            {
                title: 'Бар',
                text: 'Happy hours, рекомендації, виклик персоналу й оплата з екрана. Меню змінюється за хвилину.',
            },
        ],
    },
    problem: {
        eyebrow: 'Знайомо?',
        title: 'Папір, очікування і втрачені замовлення коштують дорого',
        items: [
            {
                title: 'Меню старіє швидше за друк',
                text: 'Нова позиція, інша ціна, закінчився продукт — а на столі досі вчорашній буклет.',
            },
            {
                title: 'Гості чекають офіціанта, щоб просто обрати',
                text: 'У пік персонал не встигає прийняти замовлення. Середній чек падає.',
            },
            {
                title: 'Сервіс через крик',
                text: 'Вугілля, кальянник, рахунок, офіціант — гості махають рукою. Зала шумить.',
            },
            {
                title: 'Немає картини по столу',
                text: 'Хто ще обирає, хто чекає страву, хто просить оплату — лише в голові офіціанта.',
            },
        ],
    },
    how: {
        eyebrow: 'Запуск',
        title: 'Як це виглядає в залі',
        subtitle: 'Гість не реєструється і не завантажує додаток. Відкрив меню з QR або з iPad — і вже замовляє.',
        steps: [
            {
                title: 'Стіл відкриває меню',
                text: 'QR на столі — гість заходить зі свого телефона. Або на столі вже стоїть наш iPad з меню.',
            },
            {
                title: 'Мова і заставка',
                text: 'Гість бачить ваш екран вітання, обирає мову і потрапляє в меню своєю мовою.',
            },
            {
                title: 'Замовлення зі столу',
                text: 'Страви, кальяни, напої, побажання. Можна дозамовити в той самий відкритий рахунок.',
            },
            {
                title: 'Команда одразу бачить',
                text: 'Замовлення приходить у Telegram-канал усіх співробітників і на адмін-планшет: меню, налаштування і замовлення в одному місці.',
            },
            {
                title: 'Сесію закрито',
                text: 'Закрили стіл в адмінці — наступним гостям знову чисте меню, без чужого замовлення.',
            },
        ],
    },
    features: {
        eyebrow: 'Можливості',
        title: 'Не просто PDF на екрані, а робоча зала',
        subtitle: 'Усе, що вже є в ToodyMenu і чим ви користуєтесь щовечора.',
        items: [
            {
                title: 'QR на своєму телефоні',
                text: 'На столі QR-код. Гість сканує, відкриває меню і замовляє. Нічого завантажувати не потрібно.',
            },
            {
                title: 'iPad на столі — ставимо ми',
                text: 'На кожному столі вже відкрите меню. Гість не шукає камеру і не сканує код. Заклад виглядає солідніше.',
            },
            {
                title: 'Сесії столу',
                text: 'Одне активне замовлення на стіл. Гості за столом замовляють у спільний рахунок.',
            },
            {
                title: 'Дозамовлення без нового чека',
                text: 'Ще один кальян або десерт додається в те саме замовлення.',
            },
            {
                title: 'Виклик персоналу з екрана',
                text: 'Вугілля, офіціант, оплата, кальянник — одна кнопка. Статус змінюється сам.',
            },
            {
                title: 'Happy hours',
                text: 'Акції за часом вмикаються самі. Ціна в меню змінюється, коли починається щаслива година.',
            },
            {
                title: '4 мови одразу',
                text: 'Чеська, російська, українська, англійська. Гість обирає мову один раз.',
            },
            {
                title: 'Telegram-канал команди',
                text: 'Кожне замовлення приходить у спільний канал, де всі співробітники. Ніхто не стоїть біля монітора.',
            },
            {
                title: 'Живі статуси замовлення',
                text: 'Очікування вугілля, доставки, кальянника, офіціанта, оплати або вибору.',
            },
            {
                title: 'Нотатки до страв і до замовлення',
                text: '«Без цибулі», «міцніше» — персонал бачить це одразу.',
            },
            {
                title: 'Допродажі на iPad',
                text: 'На планшеті з’являється пропозиція дозамовити — система аналізує поточне замовлення і підбирає наступне. На QR цього немає: телефон гості закривають.',
            },
            {
                title: 'Адмін-планшет у комплекті',
                text: 'Один планшет закладу: змінюєте меню й налаштування електронного меню, і туди ж приходять замовлення, як у Telegram.',
            },
        ],
    },
    split: {
        guestTitle: 'Гостю спокійно',
        guestText: 'Гарне меню, зрозумілі кнопки, своя мова. Не треба ловити погляд офіціанта.',
        guestItems: [
            'Заставка закладу і вибір мови',
            'Світла і темна тема',
            'QR на своєму телефоні або iPad на столі',
            'Пошук по меню і дозамовлення в той самий рахунок',
            'Виклик вугілля, персоналу та оплати',
        ],
        staffTitle: 'Персоналу ясно',
        staffText: 'Не треба запам’ятовувати, хто чого хотів. Стіл говорить через статуси.',
        staffItems: [
            'Замовлення з номером столу',
            'Відкрита сесія і дозамовлення',
            'Замовлення в Telegram-каналі всієї команди',
            'Адмін-планшет: меню, налаштування і замовлення',
            'Закриття столу в один клік',
        ],
    },
    pricing: {
        eyebrow: 'Варіанти',
        title: 'Два формати зараз, третій — у розробці',
        subtitle:
            'Один сервіс, різна зала. QR — якщо гості замовляють зі своїх телефонів. iPad — якщо потрібні екрани на столах і допродажі. Стійка на вході — для кави з собою, її ще збираємо.',
        note: 'Нічого купувати не потрібно. Платите лише щомісячну підписку — QR, iPad, адмін-планшет і запуск беремо на себе.',
        soonLabel: 'У розробці',
        cta: 'Хочу цей варіант',
        waitCta: 'Написати, коли з’явиться',
        plans: [
            {
                id: 'qr',
                name: 'QR на столах',
                badge: 'Старт',
                tagline: 'Гість замовляє зі свого телефона',
                description:
                    'На кожному столі QR-код. Гість сканує, відкриває меню і одразу робить замовлення. Закладу не потрібно ставити на стіл нічого, крім таблички з кодом.',
                included: [
                    'QR-код на кожен стіл',
                    'Замовлення з телефона гостя, без додатка',
                    'Замовлення в Telegram-канал усіх співробітників',
                    'Один адмін-планшет: меню, налаштування і ті самі замовлення',
                    'Ми надаємо все для запуску',
                ],
            },
            {
                id: 'ipad',
                name: 'iPad на столах',
                badge: 'Солідна зала',
                tagline: 'Меню вже відкрите, техніка — наша',
                description:
                    'На кожен стіл ставимо iPad із уже відкритим меню. Гість замовляє з екрана. Система аналізує, що вже в замовленні, і пропонує відповідний дозаказ.',
                included: [
                    'iPad на кожен стіл — надаємо ми',
                    'Меню вже відкрите, гість не сканує код',
                    'Спливаючі пропозиції дозамовити те, що пропонує система',
                    'Солідний вигляд зали',
                    'Замовлення в Telegram-канал і на адмін-планшет',
                    'Нічого купувати не потрібно, лише підписка',
                ],
            },
            {
                id: 'kiosk',
                name: 'Стійка на вході',
                badge: 'Takeaway',
                tagline: 'Замовив і пішов чекати видачі',
                description:
                    'Біля входу в кафе стоїть стійка з планшетом. Гість замовляє каву або їжу з собою і йде чекати. Формат для takeaway — зараз у розробці.',
                included: [
                    'Стійка з планшетом на вході',
                    'Замовлення з собою: кава, випічка, takeaway',
                    'Гість замовив і чекає видачі',
                    'Той самий Telegram і адмінка, коли формат вийде',
                ],
            },
        ],
    },
    faq: {
        eyebrow: 'FAQ',
        title: 'Питання, які зазвичай ставлять власники',
        items: [
            {
                question: 'Це додаток, який гості мають завантажити?',
                answer: 'Ні. Це сайт-меню в браузері. У варіанті QR гість сканує код своїм телефоном. У варіанті iPad меню вже відкрите на планшеті на столі.',
            },
            {
                question: 'Чи потрібно купувати планшети й техніку?',
                answer: 'Ні. Ви платите лише щомісячну підписку. QR, iPad на столи, адмін-планшет і запуск надаємо ми.',
            },
            {
                question: 'Чим iPad кращий за QR?',
                answer: 'На iPad з’являються пропозиції дозамовити: система аналізує, що вже в замовленні, і пропонує наступне. Плюс планшети на столах виглядають солідніше, ніж паперовий QR. З телефона гості частіше закривають меню і не бачать допродаж.',
            },
            {
                question: 'Як персонал дізнається про замовлення?',
                answer: 'Замовлення приходить у Telegram-канал, де всі співробітники. Паралельно те саме замовлення видно на одному адмін-планшеті — там само змінюєте меню й налаштування.',
            },
            {
                question: 'Чи підійде кальянній, а не лише ресторану?',
                answer: 'Так. Є конструктор кальяна, виклик кальянника, кнопка вугілля та окремі статуси сервісу.',
            },
            {
                question: 'Що таке стійка на вході?',
                answer: 'Третій формат, зараз у розробці. Біля входу стоїть планшет: гість замовляє каву або їжу з собою і йде чекати видачі. Для кафе з takeaway.',
            },
            {
                question: 'Чи можна змінювати меню самостійно?',
                answer: 'Так. На адмін-планшеті ви змінюєте позиції, ціни, фото, наявність і налаштування електронного меню.',
            },
            {
                question: 'Скільки коштує і як підключитися?',
                answer: 'Лише щомісячна підписка, без купівлі техніки. Залиште заявку і напишіть, який варіант дивитесь: QR, iPad чи стійку, коли вона вийде.',
            },
        ],
    },
    contact: {
        eyebrow: 'Зв’язок',
        title: 'Розкажіть про заклад — відповімо з пропозицією',
        subtitle: 'Напишіть місто, формат, скільки столів і який варіант дивитесь: QR, iPad чи стійку на вході.',
        name: 'Ім’я',
        email: 'Email',
        phone: 'Телефон',
        venue: 'Заклад',
        message: 'Повідомлення',
        messagePlaceholder: 'Місто, тип закладу, столи, варіант: QR / iPad / стійка',
        submit: 'Надіслати заявку',
        success: 'Заявку надіслано. Ми зв’яжемося з вами найближчим часом.',
        error: 'Не вдалося надіслати. Напишіть на toody-it@toody-it.com',
        demo: 'Хочу отримати посилання на демо-версію',
    },
    footer: {
        tagline: 'Цифрове меню для закладів, які хочуть швидше обслуговувати і більше продавати.',
        rights: 'ToodyIT. Усі права захищено.',
    },
    mockup: {
        table: 'Стіл 7',
        search: 'Пошук',
        coals: 'Вугілля',
        waiter: 'Офіціант',
        payment: 'Оплата',
        hits: 'Хіти',
        hookah: 'Кальяни',
        kitchen: 'Кухня',
        drinks: 'Напої',
        productOne: 'Авторський сет',
        productOneMeta: 'Happy hour',
        productTwo: 'Класичний кальян',
        productTwoMeta: 'Зібрати самому',
        add: 'В замовлення',
        cart: 'Замовлення',
    },
};

const cs: LandingCopy = {
    seoTitle: 'ToodyMenu — digitální menu pro restaurace, kavárny a hookah bary',
    seoDescription:
        'Digitální menu na předplatné: QR na stolech, nebo iPady, které stavíme my. Objednávky do Telegramu i na admin tablet. Nic nekupujete.',
    nav: {
        features: 'Funkce',
        how: 'Jak to funguje',
        audience: 'Pro koho',
        pricing: 'Varianty',
        faq: 'FAQ',
        cta: 'Nechat poptávku',
        tabletLogin: 'Přihlášení tabletu',
    },
    hero: {
        eyebrow: 'Digitální menu na předplatné',
        titleBefore: 'Menu, které',
        titleAccent: 'prodává a obsluhuje',
        titleAfter: 'za vás',
        subtitle:
            'ToodyMenu je digitální menu na předplatné pro restaurace, kavárny, bary a hookah. Dva formáty už běží: QR na stolech, nebo iPady, které stavíme my. Třetí — stojan u vstupu na kávu s sebou — se teprve připravuje. Nic nekupujete, platíte jen měsíčně.',
        primaryCta: 'Připojit provozovnu',
        secondaryCta: 'Prohlédnout varianty',
        stats: [
            { value: 'QR', label: 'objednávka z vlastního telefonu' },
            { value: 'iPad', label: 'stavíme na stoly my' },
            { value: '0', label: 'nákupů techniky' },
        ],
    },
    audience: {
        eyebrow: 'Pro koho',
        title: 'Jedno řešení pro různé provozy',
        subtitle: 'Systém je postavený pro sál, ne pro e-shop. Položíte tablet na stůl a hosté začnou objednávat.',
        items: [
            {
                title: 'Restaurace',
                text: 'Kompletní objednávka od stolu, doladění do stejného účtu a srozumitelné stavy pro kuchyni i sál.',
            },
            {
                title: 'Kavárna',
                text: 'Host nečeká, až se uvolní pult. Pro kávu s sebou připravujeme třetí formát — stojan s tabletem u vstupu.',
            },
            {
                title: 'Hookah bar',
                text: 'Konfigurátor vodní dýmky, přivolání hookaře, uhlíky a servisní stavy — bez volání přes sál.',
            },
            {
                title: 'Bar',
                text: 'Happy hours, doporučení, přivolání personálu a platba z obrazovky. Menu změníte za minutu.',
            },
        ],
    },
    problem: {
        eyebrow: 'Znáte to?',
        title: 'Papír, čekání a ztracené objednávky něco stojí',
        items: [
            {
                title: 'Menu zestárne dřív, než ho vytisknete',
                text: 'Nová položka, jiná cena, došla surovina — a na stole je pořád včerejší leták.',
            },
            {
                title: 'Hosté čekají na obsluhu, jen aby si vybrali',
                text: 'Ve špičce personál nestíhá přijmout objednávku. Průměrný účet klesá.',
            },
            {
                title: 'Servis křikem přes sál',
                text: 'Uhlíky, hookař, účet, obsluha — hosté mávají. Sál je hlučný, personál se plete.',
            },
            {
                title: 'Chybí přehled o stole',
                text: 'Kdo ještě vybírá, kdo čeká jídlo, kdo chce platit — je to v hlavě číšníka, ne v systému.',
            },
        ],
    },
    how: {
        eyebrow: 'Spuštění',
        title: 'Jak to vypadá v sále',
        subtitle: 'Host se neregistruje a nestahuje aplikaci. Otevře menu z QR nebo z iPadu a hned objednává.',
        steps: [
            {
                title: 'Stůl otevře menu',
                text: 'QR na stole — host vejde z vlastního telefonu. Nebo na stole už stojí náš iPad s menu.',
            },
            {
                title: 'Jazyk a úvodní obrazovka',
                text: 'Host uvidí vaši uvítací grafiku, vybere jazyk a vstoupí do menu ve svém jazyce.',
            },
            {
                title: 'Objednávka od stolu',
                text: 'Jídlo, dýmky, drinky, poznámky. Další položky jdou do stejného otevřeného účtu.',
            },
            {
                title: 'Tým to vidí hned',
                text: 'Objednávka přijde do Telegram kanálu všech zaměstnanců i na admin tablet: menu, nastavení a objednávky na jednom místě.',
            },
            {
                title: 'Relace uzavřena',
                text: 'Zavřete stůl v administraci — další hosté znovu vidí čisté menu, bez cizí objednávky.',
            },
        ],
    },
    features: {
        eyebrow: 'Funkce',
        title: 'Není to PDF na displeji, je to provoz',
        subtitle: 'To, co ToodyMenu už umí a čím se v sále opravdu pracuje.',
        items: [
            {
                title: 'QR na vlastním telefonu',
                text: 'Na stole je QR kód. Host naskenuje, otevře menu a objedná. Nic stahovat nemusí.',
            },
            {
                title: 'iPad na stole — stavíme my',
                text: 'Na každém stole je menu už otevřené. Host nehledá kameru a neskenuje kód. Provozovna působí solidněji.',
            },
            {
                title: 'Relace stolu',
                text: 'Jedna aktivní objednávka na stůl. Hosté u stolu objednávají do společného účtu.',
            },
            {
                title: 'Další položky bez nového účtu',
                text: 'Další dýmka nebo dezert se přidá do stejné objednávky.',
            },
            {
                title: 'Přivolání personálu z obrazovky',
                text: 'Uhlíky, obsluha, platba, hookař — jedno tlačítko. Stav stolu se změní sám.',
            },
            {
                title: 'Happy hours',
                text: 'Časové akce se zapnou samy. Cena v menu se změní, když happy hour začne.',
            },
            {
                title: '4 jazyky hned',
                text: 'Čeština, ruština, ukrajinština, angličtina. Host vybere jazyk jednou.',
            },
            {
                title: 'Telegram kanál týmu',
                text: 'Každá objednávka přijde do společného kanálu, kde jsou všichni zaměstnanci. Nikdo nestojí u monitoru.',
            },
            {
                title: 'Živé stavy objednávky',
                text: 'Čeká se na uhlíky, doručení, hookaře, obsluhu, platbu, nebo host ještě vybírá.',
            },
            {
                title: 'Poznámky k položkám i k objednávce',
                text: '„Bez cibule“, „silnější“ — personál to vidí hned.',
            },
            {
                title: 'Dokoupání na iPadu',
                text: 'Na tabletu vyskočí nabídka další položky — systém analyzuje aktuální objednávku a navrhne další. U QR to není: telefon hosté zavírají.',
            },
            {
                title: 'Admin tablet v sadě',
                text: 'Jeden tablet pro provozovnu: měníte menu a nastavení elektronického menu a sem chodí stejné objednávky jako do Telegramu.',
            },
        ],
    },
    split: {
        guestTitle: 'Pro hosta klid',
        guestText: 'Hezké menu, jasná tlačítka, vlastní jazyk. Nemusí chytat pohled obsluhy.',
        guestItems: [
            'Úvodní obrazovka a výběr jazyka',
            'Světlý a tmavý režim',
            'QR na vlastním telefonu nebo iPad na stole',
            'Hledání v menu a další položky do stejného účtu',
            'Přivolání uhlíků, personálu a platby',
        ],
        staffTitle: 'Pro personál přehled',
        staffText: 'Nemusí si pamatovat, kdo co chtěl. Stůl mluví přes stavy.',
        staffItems: [
            'Objednávky s číslem stolu',
            'Otevřená relace a doladění',
            'Objednávky v Telegram kanálu celého týmu',
            'Admin tablet: menu, nastavení a objednávky',
            'Zavření stolu jedním klikem',
        ],
    },
    pricing: {
        eyebrow: 'Varianty',
        title: 'Dva formáty teď, třetí se připravuje',
        subtitle:
            'Jedna služba, jiný sál. QR — když hosté objednávají z vlastních telefonů. iPad — když chcete obrazovky na stolech a dokoupání. Stojan u vstupu — na kávu s sebou, ten ještě stavíme.',
        note: 'Nic nekupujete. Platíte jen měsíční předplatné — QR, iPady, admin tablet i spuštění bereme na sebe.',
        soonLabel: 'Připravujeme',
        cta: 'Chci tuto variantu',
        waitCta: 'Napsat, až to bude',
        plans: [
            {
                id: 'qr',
                name: 'QR na stolech',
                badge: 'Start',
                tagline: 'Host objednává z vlastního telefonu',
                description:
                    'Na každém stole je QR kód. Host naskenuje, otevře menu a hned objedná. Provozovna na stůl dává jen cedulku s kódem.',
                included: [
                    'QR kód na každý stůl',
                    'Objednávka z telefonu hosta, bez aplikace',
                    'Objednávky do Telegram kanálu všech zaměstnanců',
                    'Jeden admin tablet: menu, nastavení a stejné objednávky',
                    'Všechno ke spuštění dodáme my',
                ],
            },
            {
                id: 'ipad',
                name: 'iPad na stolech',
                badge: 'Solidní sál',
                tagline: 'Menu je už otevřené, techniku dáváme my',
                description:
                    'Na každý stůl postavíme iPad s už otevřeným menu. Host objednává z obrazovky. Systém analyzuje, co už je v objednávce, a nabídne vhodný další nákup.',
                included: [
                    'iPad na každý stůl — dodáváme my',
                    'Menu je otevřené, host neskenuje kód',
                    'Vyskakovací nabídky dokoupit to, co navrhne systém',
                    'Solidnější vzhled sálu',
                    'Objednávky do Telegramu i na admin tablet',
                    'Nic nekupujete, jen předplatné',
                ],
            },
            {
                id: 'kiosk',
                name: 'Stojan u vstupu',
                badge: 'Takeaway',
                tagline: 'Objednal a jde čekat na výdej',
                description:
                    'U vstupu do kavárny stojí stojan s tabletem. Host objedná kávu nebo jídlo s sebou a jde čekat. Formát pro takeaway — právě se připravuje.',
                included: [
                    'Stojan s tabletem u vstupu',
                    'Objednávka s sebou: káva, pečivo, takeaway',
                    'Host objednal a čeká na výdej',
                    'Stejný Telegram a administrace, až formát vyjde',
                ],
            },
        ],
    },
    faq: {
        eyebrow: 'FAQ',
        title: 'Otázky, které se majitelé ptají nejčastěji',
        items: [
            {
                question: 'Musí si hosté stahovat aplikaci?',
                answer: 'Ne. Je to webové menu v prohlížeči. U QR host naskenuje kód vlastním telefonem. U iPadu je menu už otevřené na tabletu na stole.',
            },
            {
                question: 'Musíme kupovat tablety a techniku?',
                answer: 'Ne. Platíte jen měsíční předplatné. QR, iPady na stoly, admin tablet i spuštění dodáváme my.',
            },
            {
                question: 'Čím je iPad lepší než QR?',
                answer: 'Na iPadu vyskočí nabídka dokoupit: systém analyzuje, co už je v objednávce, a navrhne další. Tablety na stolech navíc působí solidněji než papírový QR. Z telefonu hosté menu častěji zavřou a dokoupení nevidí.',
            },
            {
                question: 'Jak se personál dozví o objednávce?',
                answer: 'Objednávka přijde do Telegram kanálu, kde jsou všichni zaměstnanci. Stejná objednávka je vidět na jednom admin tabletu — tam také měníte menu a nastavení.',
            },
            {
                question: 'Hodí se to i pro hookah bar, nejen restauraci?',
                answer: 'Ano. Máte konfigurátor dýmky, přivolání hookaře, tlačítko uhlíků a servisní stavy.',
            },
            {
                question: 'Co je stojan u vstupu?',
                answer: 'Třetí formát, právě se připravuje. U vstupu je tablet: host objedná kávu nebo jídlo s sebou a jde čekat na výdej. Pro kavárny s takeaway.',
            },
            {
                question: 'Můžeme si menu měnit sami?',
                answer: 'Ano. Na admin tabletu měníte položky, ceny, fotky, dostupnost i nastavení elektronického menu.',
            },
            {
                question: 'Kolik to stojí a jak se připojit?',
                answer: 'Jen měsíční předplatné, bez nákupu techniky. Nechte poptávku a napište, kterou variantu řešíte: QR, iPad, nebo stojan, až vyjde.',
            },
        ],
    },
    contact: {
        eyebrow: 'Kontakt',
        title: 'Napište o provozu — ozveme se s nabídkou',
        subtitle: 'Napište město, formát, počet stolů a kterou variantu řešíte: QR, iPad, nebo stojan u vstupu.',
        name: 'Jméno',
        email: 'Email',
        phone: 'Telefon',
        venue: 'Provoz',
        message: 'Zpráva',
        messagePlaceholder: 'Město, typ provozu, stoly, varianta: QR / iPad / stojan',
        submit: 'Odeslat poptávku',
        success: 'Poptávka odeslána. Brzy se ozveme.',
        error: 'Odeslání se nepovedlo. Napište na toody-it@toody-it.com',
        demo: 'Chci odkaz na demo verzi',
    },
    footer: {
        tagline: 'Digitální menu pro provozy, které chtějí obsluhovat rychleji a prodávat víc.',
        rights: 'ToodyIT. Všechna práva vyhrazena.',
    },
    mockup: {
        table: 'Stůl 7',
        search: 'Hledat',
        coals: 'Uhlí',
        waiter: 'Obsluha',
        payment: 'Platba',
        hits: 'Hity',
        hookah: 'Dýmky',
        kitchen: 'Kuchyně',
        drinks: 'Nápoje',
        productOne: 'Autorský set',
        productOneMeta: 'Happy hour',
        productTwo: 'Klasická dýmka',
        productTwoMeta: 'Sestavit sám',
        add: 'Do objednávky',
        cart: 'Objednávka',
    },
};

const en: LandingCopy = {
    seoTitle: 'ToodyMenu — digital menu for restaurants, cafes and hookah bars',
    seoDescription:
        'A subscription menu: QR on tables, or iPads we place ourselves. Orders in Telegram and on an admin tablet. You buy nothing.',
    nav: {
        features: 'Features',
        how: 'How it works',
        audience: 'Who it is for',
        pricing: 'Plans',
        faq: 'FAQ',
        cta: 'Request a demo',
        tabletLogin: 'Tablet login',
    },
    hero: {
        eyebrow: 'Digital menu, monthly subscription',
        titleBefore: 'A menu that',
        titleAccent: 'sells and serves',
        titleAfter: 'for you',
        subtitle:
            'ToodyMenu is a subscription menu for restaurants, cafes, bars and hookah lounges. Two formats are live: QR on tables, or iPads that we place ourselves. A third — a stand at the door for coffee to go — is in development. You buy nothing. You only pay monthly.',
        primaryCta: 'Connect your venue',
        secondaryCta: 'See the plans',
        stats: [
            { value: 'QR', label: 'order from a guest phone' },
            { value: 'iPad', label: 'we put them on tables' },
            { value: '0', label: 'hardware to buy' },
        ],
    },
    audience: {
        eyebrow: 'Who it is for',
        title: 'One system for different venues',
        subtitle: 'This is not an online shop. It is a floor tool. Put it on the table and guests start ordering.',
        items: [
            {
                title: 'Restaurant',
                text: 'Full table ordering, add-ons on the same bill, notes on dishes, and clear statuses for kitchen and floor.',
            },
            {
                title: 'Cafe',
                text: 'Guests do not wait for the counter to free up. For coffee to go we are building a third format — a tablet stand at the entrance.',
            },
            {
                title: 'Hookah lounge',
                text: 'A hookah builder, specialist call, coals button and service statuses — no shouting across the room.',
            },
            {
                title: 'Bar',
                text: 'Happy hours, recommendations, staff call and payment from the screen. Change the menu in a minute.',
            },
        ],
    },
    problem: {
        eyebrow: 'Sound familiar?',
        title: 'Paper, waiting and lost orders cost real money',
        items: [
            {
                title: 'Menus go stale faster than print',
                text: 'A new dish, a new price, an item that ran out — and the table still has yesterday’s booklet.',
            },
            {
                title: 'Guests wait just to choose',
                text: 'At peak hours staff cannot take orders fast enough. The average check drops.',
            },
            {
                title: 'Service by shouting',
                text: 'Coals, hookah specialist, the bill, a waiter — guests wave across the room.',
            },
            {
                title: 'No picture of the table',
                text: 'Who is still choosing, who is waiting, who wants to pay lives in a waiter’s head, not in the system.',
            },
        ],
    },
    how: {
        eyebrow: 'Launch',
        title: 'How it looks on the floor',
        subtitle: 'Guests do not register and do not download an app. They open the menu from a QR or an iPad and order.',
        steps: [
            {
                title: 'The table opens the menu',
                text: 'A QR on the table — the guest walks in from their own phone. Or our iPad is already on the table with the menu open.',
            },
            {
                title: 'Language and welcome screen',
                text: 'Guests see your venue splash, pick a language and enter the menu in that language.',
            },
            {
                title: 'Order from the table',
                text: 'Food, hookah, drinks, notes. Extra items go to the same open bill.',
            },
            {
                title: 'The team sees it at once',
                text: 'The order lands in a Telegram channel for all staff and on the admin tablet: menu, settings and orders in one place.',
            },
            {
                title: 'Session closed',
                text: 'Close the table in admin — the next guests get a clean menu, without someone else’s order.',
            },
        ],
    },
    features: {
        eyebrow: 'Features',
        title: 'Not a PDF on a screen. A working floor.',
        subtitle: 'What ToodyMenu already does every night.',
        items: [
            {
                title: 'QR on a guest phone',
                text: 'A QR code sits on the table. The guest scans, opens the menu and orders. Nothing to download.',
            },
            {
                title: 'iPad on the table — we place it',
                text: 'The menu is already open on every table. Guests do not hunt for a camera or scan a code. The room looks more premium.',
            },
            {
                title: 'Table sessions',
                text: 'One active order per table. Everyone at the table orders onto the same bill.',
            },
            {
                title: 'Add to the same check',
                text: 'Another hookah or dessert joins the same order instead of creating kitchen chaos.',
            },
            {
                title: 'Staff call from the screen',
                text: 'Coals, waiter, payment, hookah specialist — one tap. Table status changes automatically.',
            },
            {
                title: 'Happy hours',
                text: 'Timed offers switch on by themselves. The price in the menu changes when the hour starts.',
            },
            {
                title: '4 languages included',
                text: 'Czech, Russian, Ukrainian, English. Guests pick a language once and stay in it.',
            },
            {
                title: 'A Telegram channel for the team',
                text: 'Every order lands in a shared channel where all staff sit. Nobody has to stare at a monitor.',
            },
            {
                title: 'Live order statuses',
                text: 'Waiting for coals, delivery, a hookah specialist, a waiter, payment — or still browsing.',
            },
            {
                title: 'Notes on dishes and on the order',
                text: '“No onion”, “stronger” — staff see it immediately.',
            },
            {
                title: 'Upsells on iPad',
                text: 'The tablet pops up an add-on — the system analyses the current order and suggests the next one. QR does not do this: people close the phone.',
            },
            {
                title: 'An admin tablet included',
                text: 'One tablet for the venue: change the menu and electronic-menu settings, and see the same orders that go to Telegram.',
            },
        ],
    },
    split: {
        guestTitle: 'Calm for the guest',
        guestText: 'A beautiful menu, clear buttons, their language. No need to catch a waiter’s eye.',
        guestItems: [
            'Venue splash and language pick',
            'Light and dark theme',
            'QR on their phone or an iPad on the table',
            'Search and add-ons on the same bill',
            'Coals, staff and payment calls',
        ],
        staffTitle: 'Clarity for staff',
        staffText: 'Nobody has to remember who wanted what. The table speaks through statuses.',
        staffItems: [
            'Orders with a table number',
            'Open session and add-ons',
            'Orders in a Telegram channel for the whole team',
            'Admin tablet: menu, settings and orders',
            'Close the table in one click',
        ],
    },
    pricing: {
        eyebrow: 'Plans',
        title: 'Two formats live, a third in development',
        subtitle:
            'One service, different floors. QR if guests order from their phones. iPad if you want screens on tables and upsells. A stand at the door for coffee to go — we are still building that.',
        note: 'You buy nothing. You only pay a monthly subscription — we provide the QR, iPads, admin tablet and the launch.',
        soonLabel: 'In development',
        cta: 'I want this plan',
        waitCta: 'Tell me when it ships',
        plans: [
            {
                id: 'qr',
                name: 'QR on tables',
                badge: 'Start',
                tagline: 'Guests order from their own phone',
                description:
                    'Every table has a QR code. The guest scans, opens the menu and orders right away. The venue only needs a code on the table.',
                included: [
                    'A QR code on every table',
                    'Order from the guest phone, no app',
                    'Orders in a Telegram channel for all staff',
                    'One admin tablet: menu, settings and the same orders',
                    'We provide everything to go live',
                ],
            },
            {
                id: 'ipad',
                name: 'iPad on tables',
                badge: 'Premium floor',
                tagline: 'Menu already open, hardware is ours',
                description:
                    'We put an iPad with the menu already open on every table. Guests order from the screen. The system analyses what is already in the order and suggests a matching add-on.',
                included: [
                    'An iPad on every table — we provide it',
                    'The menu is already open, no scanning',
                    'Pop-up add-ons for what the system suggests next',
                    'A more premium look for the room',
                    'Orders in Telegram and on the admin tablet',
                    'Nothing to buy, only the subscription',
                ],
            },
            {
                id: 'kiosk',
                name: 'Stand at the door',
                badge: 'Takeaway',
                tagline: 'Order, then wait for pickup',
                description:
                    'A tablet stand at the cafe entrance. Guests order coffee or food to go and wait for pickup. Built for takeaway — currently in development.',
                included: [
                    'A tablet stand at the entrance',
                    'To-go orders: coffee, pastry, takeaway',
                    'The guest orders and waits for pickup',
                    'The same Telegram and admin when this format ships',
                ],
            },
        ],
    },
    faq: {
        eyebrow: 'FAQ',
        title: 'What owners usually ask',
        items: [
            {
                question: 'Do guests have to download an app?',
                answer: 'No. It is a web menu in the browser. With QR the guest scans a code on their phone. With iPad the menu is already open on the tablet on the table.',
            },
            {
                question: 'Do we have to buy tablets and hardware?',
                answer: 'No. You only pay a monthly subscription. We provide the QR, table iPads, the admin tablet and the launch.',
            },
            {
                question: 'Why is iPad better than QR?',
                answer: 'On iPad, add-on suggestions pop up: the system analyses what is already in the order and offers the next item. Tablets on tables also look more premium than a paper QR. On a phone, guests often close the menu and never see the upsell.',
            },
            {
                question: 'How does staff learn about a new order?',
                answer: 'The order goes to a Telegram channel where all staff sit. The same order shows on one admin tablet — that is also where you change the menu and settings.',
            },
            {
                question: 'Does it work for a hookah lounge, not only a restaurant?',
                answer: 'Yes. There is a hookah builder, specialist call, coals button and service statuses.',
            },
            {
                question: 'What is the stand at the door?',
                answer: 'The third format, still in development. A tablet at the entrance: the guest orders coffee or food to go and waits for pickup. For cafes with takeaway.',
            },
            {
                question: 'Can we change the menu ourselves?',
                answer: 'Yes. On the admin tablet you change items, prices, photos, availability and electronic-menu settings.',
            },
            {
                question: 'How much does it cost and how do we start?',
                answer: 'Monthly subscription only, no hardware to buy. Leave a request and tell us which plan you are looking at: QR, iPad, or the stand when it ships.',
            },
        ],
    },
    contact: {
        eyebrow: 'Contact',
        title: 'Tell us about the venue — we will send a proposal',
        subtitle: 'Share the city, format, table count and which plan you want: QR, iPad, or the stand at the door.',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        venue: 'Venue',
        message: 'Message',
        messagePlaceholder: 'City, venue type, tables, plan: QR / iPad / stand',
        submit: 'Send request',
        success: 'Request sent. We will get back to you shortly.',
        error: 'Could not send. Email us at toody-it@toody-it.com',
        demo: 'I want a link to the demo version',
    },
    footer: {
        tagline: 'A digital menu for venues that want to serve faster and sell more.',
        rights: 'ToodyIT. All rights reserved.',
    },
    mockup: {
        table: 'Table 7',
        search: 'Search',
        coals: 'Coals',
        waiter: 'Waiter',
        payment: 'Payment',
        hits: 'Hits',
        hookah: 'Hookah',
        kitchen: 'Kitchen',
        drinks: 'Drinks',
        productOne: 'Signature set',
        productOneMeta: 'Happy hour',
        productTwo: 'Classic hookah',
        productTwoMeta: 'Build your own',
        add: 'Add',
        cart: 'Order',
    },
};

const landingCopyByLocale: Record<LandingLocale, LandingCopy> = { ru, ua, cs, en };

export const LANDING_LOCALES: Array<{ id: LandingLocale; label: string }> = [
    { id: 'ru', label: 'RU' },
    { id: 'ua', label: 'UA' },
    { id: 'cs', label: 'CZ' },
    { id: 'en', label: 'EN' },
];

export const detectLandingLocale = (): LandingLocale => {
    if (typeof window === 'undefined') {
        return 'ru';
    }

    const saved = window.localStorage.getItem('toody-landing-locale');

    if (saved === 'ru' || saved === 'ua' || saved === 'cs' || saved === 'en') {
        return saved;
    }

    const language = window.navigator.language.toLowerCase();

    if (language.startsWith('uk') || language.startsWith('ua')) {
        return 'ua';
    }

    if (language.startsWith('cs')) {
        return 'cs';
    }

    if (language.startsWith('en')) {
        return 'en';
    }

    return 'ru';
};

export const getLandingCopy = (locale: string): LandingCopy => {
    if (locale === 'ru' || locale === 'ua' || locale === 'cs' || locale === 'en') {
        return landingCopyByLocale[locale];
    }

    return landingCopyByLocale.ru;
};
