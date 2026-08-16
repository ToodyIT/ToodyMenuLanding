/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTACT_EMAIL?: string;
    readonly VITE_FORMSPREE_ENDPOINT?: string;
    readonly VITE_PRICE_PER_TABLE?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
