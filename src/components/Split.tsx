import type { LandingCopy } from '../copy';
import { IconCheck } from './Icons';
import { Container, FadeIn, Section } from './Ui';

type SectionProps = {
    copy: LandingCopy;
};

export const LandingSplit = ({ copy }: SectionProps) => (
    <Section>
        <Container className="grid gap-4 lg:grid-cols-2">
            <FadeIn>
                <article className="border-line from-glass h-full rounded-[1.8rem] border bg-linear-to-br to-transparent p-8">
                    <h2 className="font-display text-fg text-3xl font-bold">{copy.split.guestTitle}</h2>
                    <p className="text-muted mt-3">{copy.split.guestText}</p>
                    <ul className="mt-6 space-y-3">
                        {copy.split.guestItems.map((item) => (
                            <li className="text-fg/80 flex items-start gap-3 text-sm" key={item}>
                                <span className="mt-0.5 text-brand">
                                    <IconCheck />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </article>
            </FadeIn>
            <FadeIn delay={0.08}>
                <article className="h-full rounded-[1.8rem] border border-brand/20 bg-linear-to-br from-brand/12 to-transparent p-8">
                    <h2 className="font-display text-fg text-3xl font-bold">{copy.split.staffTitle}</h2>
                    <p className="text-muted mt-3">{copy.split.staffText}</p>
                    <ul className="mt-6 space-y-3">
                        {copy.split.staffItems.map((item) => (
                            <li className="text-fg/80 flex items-start gap-3 text-sm" key={item}>
                                <span className="mt-0.5 text-brand">
                                    <IconCheck />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </article>
            </FadeIn>
        </Container>
    </Section>
);
