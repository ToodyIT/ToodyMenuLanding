import type { LandingCopy } from '../copy';
import type { ExtraCopy } from '../extraCopy';
import { PhoneMockup } from './PhoneMockup';
import { Button, Container, FadeIn } from './Ui';

type HeroProps = {
    copy: LandingCopy;
    extra: ExtraCopy;
    onRequestDemo: () => void;
};

export const LandingHero = ({ copy, extra, onRequestDemo }: HeroProps) => (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24" id="top">
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
                <FadeIn>
                    <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-brand uppercase">
                        {copy.hero.eyebrow}
                    </p>
                    <h1 className="font-display text-fg max-w-[16ch] text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
                        {copy.hero.titleBefore}{' '}
                        <span className="bg-linear-to-r from-[#7dff8d] via-brand to-gold bg-clip-text text-transparent">
                            {copy.hero.titleAccent}
                        </span>{' '}
                        {copy.hero.titleAfter}
                    </h1>
                    <p className="text-muted mt-6 max-w-xl text-base leading-7 sm:text-lg">{copy.hero.subtitle}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button href="#contact">{copy.hero.primaryCta}</Button>
                        <Button href="#contact" variant="ghost" onClick={onRequestDemo}>
                            {extra.demoCta}
                        </Button>
                        <Button href="#pricing" variant="ghost">
                            {copy.hero.secondaryCta}
                        </Button>
                    </div>
                </FadeIn>
                <FadeIn className="mt-12 grid max-w-lg grid-cols-3 gap-4" delay={0.15}>
                    {copy.hero.stats.map((stat) => (
                        <div className="border-line border-t pt-4" key={stat.label}>
                            <p className="font-display text-fg text-2xl font-bold sm:text-3xl">{stat.value}</p>
                            <p className="text-muted mt-1 text-xs leading-4">{stat.label}</p>
                        </div>
                    ))}
                </FadeIn>
            </div>
            <FadeIn delay={0.12}>
                <PhoneMockup copy={copy.mockup} />
            </FadeIn>
        </Container>
    </section>
);
