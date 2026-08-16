import { LandingAudience } from './components/Audience';
import { LandingCalculator } from './components/Calculator';
import { LandingContact } from './components/Contact';
import { LandingFaq } from './components/Faq';
import { LandingFeatures } from './components/Features';
import { LandingFooter } from './components/Footer';
import { LandingGeo } from './components/Geo';
import { LandingHero } from './components/Hero';
import { LandingHow } from './components/How';
import { LandingLaunch } from './components/Launch';
import { LandingNav } from './components/Nav';
import { LandingNeed } from './components/Need';
import { LandingPricing } from './components/Pricing';
import { LandingProblem } from './components/Problem';
import { LandingSplit } from './components/Split';
import { StickyCta } from './components/StickyCta';
import { getLandingCopy, type LandingLocale } from './copy';
import { getExtraCopy } from './extraCopy';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useState } from 'react';

type Props = {
    locale: LandingLocale;
    onLocaleChange: (locale: LandingLocale) => void;
};

export const LandingPage = ({ locale, onLocaleChange }: Props) => {
    const copy = getLandingCopy(locale);
    const extra = getExtraCopy(locale);
    const [wantDemo, setWantDemo] = useState(false);

    return (
        <LazyMotion features={domAnimation}>
            <div className="text-fg relative min-h-screen overflow-x-hidden pt-16 sm:pt-[4.5rem]">
                <div className="relative pb-20 lg:pb-0">
                    <LandingNav copy={copy} extra={extra} locale={locale} onLocaleChange={onLocaleChange} />
                    <LandingHero copy={copy} extra={extra} onRequestDemo={() => setWantDemo(true)} />
                    <LandingPricing copy={copy} />
                    <LandingLaunch extra={extra} />
                    <LandingHow copy={copy} />
                    <LandingCalculator extra={extra} />
                    <LandingNeed extra={extra} />
                    <LandingAudience copy={copy} />
                    <LandingProblem copy={copy} />
                    <LandingFeatures copy={copy} />
                    <LandingSplit copy={copy} />
                    <LandingGeo extra={extra} />
                    <LandingFaq copy={copy} />
                    <LandingContact
                        copy={copy}
                        extra={extra}
                        wantDemo={wantDemo}
                        onWantDemoChange={setWantDemo}
                    />
                    <LandingFooter copy={copy} extra={extra} />
                </div>
                <StickyCta extra={extra} />
            </div>
        </LazyMotion>
    );
};
