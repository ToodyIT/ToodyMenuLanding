import type { LandingCopy } from '../copy';
import { Container, Eyebrow, FadeIn, Section } from './Ui';

type SectionProps = {
    copy: LandingCopy;
};

export const LandingFeatures = ({ copy }: SectionProps) => (
    <Section className="bg-glass" id="features">
        <Container>
            <FadeIn className="max-w-2xl">
                <Eyebrow>{copy.features.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                    {copy.features.title}
                </h2>
                <p className="text-muted mt-4">{copy.features.subtitle}</p>
            </FadeIn>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {copy.features.items.map((item, index) => (
                    <FadeIn delay={(index % 3) * 0.05} key={item.title}>
                        <article className="border-line bg-panel h-full rounded-[1.4rem] border p-6 transition-colors hover:border-brand/30">
                            <h3 className="font-display text-fg text-lg font-semibold">{item.title}</h3>
                            <p className="text-muted mt-2 text-sm leading-6">{item.text}</p>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </Container>
    </Section>
);
