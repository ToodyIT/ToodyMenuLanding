import { LandingPage } from './LandingPage';
import { detectLandingLocale, getLandingCopy, type LandingLocale } from './copy';
import { useEffect, useState } from 'react';

const App = () => {
    const [locale, setLocale] = useState<LandingLocale>('ru');

    useEffect(() => {
        setLocale(detectLandingLocale());
    }, []);

    useEffect(() => {
        const copy = getLandingCopy(locale);
        document.documentElement.lang = locale === 'ua' ? 'uk' : locale;
        document.title = copy.seoTitle;

        const description = document.querySelector('meta[name="description"]');
        description?.setAttribute('content', copy.seoDescription);
        window.localStorage.setItem('toody-landing-locale', locale);
    }, [locale]);

    return <LandingPage locale={locale} onLocaleChange={setLocale} />;
};

export default App;
