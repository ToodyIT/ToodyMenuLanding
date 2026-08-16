import type { LandingCopy } from '../copy';
import { IconCheck, IconIpad, IconKiosk, IconQr } from './Icons';
import { Container, Eyebrow, FadeIn, Section } from './Ui';
import { twJoin } from 'tailwind-merge';

type SectionProps = {
    copy: LandingCopy;
};

const planIcons = {
    qr: IconQr,
    ipad: IconIpad,
    kiosk: IconKiosk,
};

export const LandingPricing = ({ copy }: SectionProps) => (
    <Section id="pricing">
        <Container>
            <FadeIn className="mx-auto max-w-3xl text-center">
                <Eyebrow>{copy.pricing.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                    {copy.pricing.title}
                </h2>
                <p className="text-muted mt-4">{copy.pricing.subtitle}</p>
            </FadeIn>
            <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
                {copy.pricing.plans.map((plan, index) => {
                    const Icon = planIcons[plan.id];
                    const isFeatured = plan.id === 'ipad';
                    const isSoon = plan.id === 'kiosk';

                    return (
                        <FadeIn delay={index * 0.08} key={plan.id}>
                            <article
                                className={twJoin(
                                    'relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border p-6 sm:p-8',
                                    isFeatured &&
                                        'border-brand/40 bg-linear-to-br from-brand/16 to-panel shadow-[0_24px_80px_rgba(26,176,48,0.16)] lg:-translate-y-3',
                                    !isFeatured && !isSoon && 'border-line bg-panel',
                                    isSoon && 'border-line bg-glass border-dashed opacity-80',
                                )}
                            >
                                {isFeatured && (
                                    <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
                                )}
                                <div className="relative flex items-center justify-between gap-3">
                                    <span
                                        className={twJoin(
                                            'inline-flex rounded-full px-3 py-1 text-xs font-semibold',
                                            isFeatured ? 'bg-brand text-white' : 'bg-glass text-muted',
                                        )}
                                    >
                                        {isSoon ? copy.pricing.soonLabel : plan.badge}
                                    </span>
                                    <span className={isFeatured ? 'text-brand' : 'text-muted'}>
                                        <Icon />
                                    </span>
                                </div>
                                <h3 className="font-display text-fg relative mt-5 text-2xl font-bold">{plan.name}</h3>
                                <p className="relative mt-2 text-sm font-medium text-brand">{plan.tagline}</p>
                                <p className="text-muted relative mt-3 text-sm leading-6">{plan.description}</p>
                                <ul className="relative mt-6 flex-1 space-y-3">
                                    {plan.included.map((item) => (
                                        <li className="text-fg/80 flex items-start gap-3 text-sm" key={item}>
                                            <span className="mt-0.5 text-brand">
                                                <IconCheck />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    className={twJoin(
                                        'relative mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition',
                                        isSoon
                                            ? 'border-line bg-glass text-fg/80 hover:bg-glass border'
                                            : 'bg-brand text-white hover:bg-[#22c43a]',
                                    )}
                                    href="#contact"
                                >
                                    {isSoon ? copy.pricing.waitCta : copy.pricing.cta}
                                </a>
                            </article>
                        </FadeIn>
                    );
                })}
            </div>
            <FadeIn className="text-muted mx-auto mt-10 max-w-2xl text-center text-sm leading-6">
                {copy.pricing.note}
            </FadeIn>
        </Container>
    </Section>
);
