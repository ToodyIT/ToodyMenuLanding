import type { LandingCopy } from '../copy';
import { Container, Eyebrow, FadeIn, Section } from './Ui';

type SectionProps = {
    copy: LandingCopy;
};

export const LandingProblem = ({ copy }: SectionProps) => (
    <Section className="bg-glass">
        <Container>
            <FadeIn className="max-w-2xl">
                <Eyebrow>{copy.problem.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                    {copy.problem.title}
                </h2>
            </FadeIn>
            <div className="border-line bg-glass mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border sm:grid-cols-2">
                {copy.problem.items.map((item, index) => (
                    <FadeIn className="bg-panel p-7" delay={index * 0.05} key={item.title}>
                        <p className="mb-3 text-sm font-semibold text-brand">0{index + 1}</p>
                        <h3 className="font-display text-fg text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted mt-2 text-sm leading-6">{item.text}</p>
                    </FadeIn>
                ))}
            </div>
        </Container>
    </Section>
);
