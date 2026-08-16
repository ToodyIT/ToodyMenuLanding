import type { ExtraCopy } from '../extraCopy';
import { Container, Eyebrow, FadeIn, Section } from './Ui';

type Props = {
    extra: ExtraCopy;
};

export const LandingNeed = ({ extra }: Props) => (
    <Section className="bg-glass" id="need">
        <Container>
            <FadeIn className="max-w-2xl">
                <Eyebrow>{extra.need.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">{extra.need.title}</h2>
                <p className="text-muted mt-4">{extra.need.subtitle}</p>
            </FadeIn>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
                {extra.need.items.map((item, index) => (
                    <FadeIn delay={index * 0.06} key={item.title}>
                        <article className="border-line bg-panel h-full rounded-[1.4rem] border p-6">
                            <p className="text-sm font-semibold text-brand">0{index + 1}</p>
                            <h3 className="font-display text-fg mt-3 text-lg font-semibold">{item.title}</h3>
                            <p className="text-muted mt-2 text-sm leading-6">{item.text}</p>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </Container>
    </Section>
);
