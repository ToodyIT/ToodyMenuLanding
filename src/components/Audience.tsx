import type { LandingCopy } from '../copy';
import { IconBar, IconCafe, IconHookah, IconRestaurant } from './Icons';
import { Container, Eyebrow, FadeIn, Section } from './Ui';

type SectionProps = {
    copy: LandingCopy;
};

const audienceIcons = [IconRestaurant, IconCafe, IconHookah, IconBar];

export const LandingAudience = ({ copy }: SectionProps) => (
    <Section id="audience">
        <Container>
            <FadeIn className="max-w-2xl">
                <Eyebrow>{copy.audience.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                    {copy.audience.title}
                </h2>
                <p className="text-muted mt-4">{copy.audience.subtitle}</p>
            </FadeIn>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {copy.audience.items.map((item, index) => {
                    const Icon = audienceIcons[index] ?? IconRestaurant;

                    return (
                        <FadeIn delay={index * 0.06} key={item.title}>
                            <article className="border-line bg-glass h-full rounded-[1.6rem] border p-6 transition-colors hover:border-brand/30">
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                                    <Icon />
                                </div>
                                <h3 className="font-display text-fg text-xl font-semibold">{item.title}</h3>
                                <p className="text-muted mt-2 text-sm leading-6">{item.text}</p>
                            </article>
                        </FadeIn>
                    );
                })}
            </div>
        </Container>
    </Section>
);
