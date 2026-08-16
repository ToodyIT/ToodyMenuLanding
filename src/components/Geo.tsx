import type { ExtraCopy } from '../extraCopy';
import { Container, Eyebrow, FadeIn, Section } from './Ui';

type Props = {
    extra: ExtraCopy;
};

export const LandingGeo = ({ extra }: Props) => (
    <Section>
        <Container>
            <FadeIn className="overflow-hidden rounded-[1.8rem] border border-brand/20 bg-linear-to-br from-brand/12 to-transparent p-8 sm:p-12">
                <Eyebrow>{extra.geo.eyebrow}</Eyebrow>
                <h2 className="font-display text-fg max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                    {extra.geo.title}
                </h2>
                <p className="text-muted mt-4 max-w-2xl">{extra.geo.text}</p>
            </FadeIn>
        </Container>
    </Section>
);
