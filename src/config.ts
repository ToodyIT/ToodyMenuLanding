export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'toody-it@toody-it.com';
export const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? '';
export const PRICE_PER_TABLE = import.meta.env.VITE_PRICE_PER_TABLE ?? '';
export const COMPANY_NAME = 'ToodyIT';
export const COMPANY_URL = 'https://www.toody-it.com/';

export const PEOPLE = [
    {
        name: 'Ivan Hodynčuk',
        phone: '+420 776 152 491',
        tel: '+420776152491',
        whatsapp: 'https://wa.me/420776152491',
    },
    {
        name: 'Felix Kingsley',
        phone: '+420 773 011 578',
        tel: '+420773011578',
        whatsapp: 'https://wa.me/420773011578',
    },
] as const;
