# ToodyMenu landing

Отдельный маркетинговый сайт для [toodymenu.com](https://toodymenu.com). Это не часть системы меню: продукт живёт в другом репозитории, а этот проект — визитка для владельцев ресторанов, кафе, баров и кальянных.

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:5173`.

Когда появится цена за стол, добавьте в `.env`:

```
VITE_PRICE_PER_TABLE=990
```

Калькулятор начнёт показывать месячную сумму.

```bash
npm run build
npm run preview
```

## Деплой на toodymenu.com

Удобнее всего Vercel или Netlify: собирается обычный статический Vite-сайт.

1. Купите домен `toodymenu.com`.
2. Подключите этот репозиторий к Vercel/Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Привяжите домен `toodymenu.com`.

## Заявки с формы

По умолчанию форма открывает письмо на `toody-it@toody-it.com`.

Чтобы заявки уходили без почтового клиента, создайте форму на [Formspree](https://formspree.io) и добавьте в `.env`:

```
VITE_CONTACT_EMAIL=toody-it@toody-it.com
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

## Языки

RU / UA / CZ / EN. Выбор сохраняется в браузере.
