import { LANDING_LOCALES, type LandingCopy, type LandingLocale } from '../copy';
import type { ExtraCopy } from '../extraCopy';
import { ThemeToggle } from './ThemeToggle';
import { Button, Container, Logo } from './Ui';
import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';

type NavProps = {
    copy: LandingCopy;
    extra: ExtraCopy;
    locale: LandingLocale;
    onLocaleChange: (locale: LandingLocale) => void;
};

const navLinks = (copy: LandingCopy) => [
    { href: '#pricing', label: copy.nav.pricing },
    { href: '#launch', label: copy.nav.how },
    { href: '#features', label: copy.nav.features },
    { href: '#faq', label: copy.nav.faq },
];

export const LandingNav = ({ copy, extra, locale, onLocaleChange }: NavProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-line bg-nav fixed inset-x-0 top-0 z-40 border-b backdrop-blur-xl">
            <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
                <a className="shrink-0" href="#top">
                    <Logo className="text-xl sm:text-2xl" />
                </a>
                <nav className="text-muted hidden items-center gap-7 text-sm lg:flex">
                    {navLinks(copy).map((link) => (
                        <a className="hover:text-fg transition-colors" href={link.href} key={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden items-center gap-3 lg:flex">
                    <ThemeToggle compact darkLabel={extra.themeDark} lightLabel={extra.themeLight} />
                    <LocaleSwitch locale={locale} onChange={onLocaleChange} />
                    <Button href="#contact">{copy.nav.cta}</Button>
                </div>
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle compact darkLabel={extra.themeDark} lightLabel={extra.themeLight} />
                    <button
                        aria-label="Menu"
                        className="border-line flex h-10 w-10 items-center justify-center rounded-full border"
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span className="flex flex-col gap-1.5">
                            <span
                                className={`bg-fg block h-px w-4 transition ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`}
                            />
                            <span
                                className={`bg-fg block h-px w-4 transition ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                            />
                        </span>
                    </button>
                </div>
            </Container>
            <AnimatePresence>
                {isMenuOpen && (
                    <m.div
                        animate={{ opacity: 1, height: 'auto' }}
                        className="border-line bg-nav overflow-hidden border-t lg:hidden"
                        exit={{ opacity: 0, height: 0 }}
                        initial={{ opacity: 0, height: 0 }}
                    >
                        <div className="flex flex-col gap-4 px-5 py-5">
                            {navLinks(copy).map((link) => (
                                <a
                                    className="text-fg/80"
                                    href={link.href}
                                    key={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <LocaleSwitch locale={locale} onChange={onLocaleChange} />
                            <ThemeToggle
                                darkLabel={extra.themeDark}
                                lightLabel={extra.themeLight}
                                themeLabel={extra.theme}
                            />
                            <Button href="#contact" onClick={() => setIsMenuOpen(false)}>
                                {copy.nav.cta}
                            </Button>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const LocaleSwitch = ({
    locale,
    onChange,
}: {
    locale: LandingLocale;
    onChange: (locale: LandingLocale) => void;
}) => (
    <div className="border-line bg-glass flex items-center gap-1 rounded-full border p-1">
        {LANDING_LOCALES.map((item) => (
            <button
                className={
                    locale === item.id
                        ? 'rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white'
                        : 'text-muted hover:text-fg rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide'
                }
                key={item.id}
                type="button"
                onClick={() => onChange(item.id)}
            >
                {item.label}
            </button>
        ))}
    </div>
);
