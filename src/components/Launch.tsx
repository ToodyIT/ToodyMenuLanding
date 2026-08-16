import type { ExtraCopy } from '../extraCopy';
import { Container, Eyebrow, FadeIn, Section } from './Ui';

type Props = {
    extra: ExtraCopy;
};

export const LandingLaunch = ({ extra }: Props) => (
    <Section className="bg-glass" id="launch">
        <Container>
            <FadeIn className="max-w-2xl">
                <Eyebrow>{extra.launch.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                    {extra.launch.title}
                </h2>
                <p className="text-muted mt-4">{extra.launch.subtitle}</p>
            </FadeIn>
            <ol className="mt-12 grid gap-4 lg:grid-cols-5">
                {extra.launch.steps.map((step, index) => (
                    <FadeIn delay={index * 0.05} key={step.title}>
                        <li className="border-line bg-glass h-full rounded-[1.4rem] border p-5">
                            <span className="font-display text-2xl font-bold text-brand">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display text-fg mt-4 text-base font-semibold">{step.title}</h3>
                            <p className="text-muted mt-2 text-sm leading-6">{step.text}</p>
                        </li>
                    </FadeIn>
                ))}
            </ol>
            <p className="text-muted mt-8 text-sm">{extra.launch.note}</p>
        </Container>
    </Section>
);
