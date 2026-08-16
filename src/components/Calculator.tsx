import { PRICE_PER_TABLE } from '../config';
import type { ExtraCopy } from '../extraCopy';
import { Button, Container, Eyebrow, FadeIn, Section } from './Ui';
import { useState } from 'react';

type Props = {
    extra: ExtraCopy;
};

export const LandingCalculator = ({ extra }: Props) => {
    const [qr, setQr] = useState(8);
    const [tablets, setTablets] = useState(4);
    const totalTables = qr + tablets;
    const price = Number(PRICE_PER_TABLE);
    const hasPrice = Number.isFinite(price) && price > 0;
    const total = hasPrice && totalTables > 0 ? price * totalTables : null;

    return (
        <Section id="calculator">
            <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <FadeIn>
                    <Eyebrow>{extra.calculator.eyebrow}</Eyebrow>
                    <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                        {extra.calculator.title}
                    </h2>
                    <p className="text-muted mt-4">{extra.calculator.subtitle}</p>
                </FadeIn>
                <FadeIn delay={0.08}>
                    <div className="border-line bg-panel rounded-[1.8rem] border p-8">
                        <CountSlider
                            label={extra.calculator.qr}
                            max={40}
                            min={0}
                            value={qr}
                            onChange={setQr}
                        />
                        <CountSlider
                            label={extra.calculator.tablets}
                            max={40}
                            min={0}
                            value={tablets}
                            onChange={setTablets}
                        />
                        {total ? (
                            <p className="text-fg mt-6 text-2xl font-semibold">
                                {extra.calculator.quote}: {total.toLocaleString('cs-CZ')} Kč {extra.calculator.month}
                            </p>
                        ) : (
                            <p className="text-muted mt-6 text-sm leading-6">{extra.calculator.pending}</p>
                        )}
                        <Button className="mt-6" href="#contact">
                            {extra.calculator.cta}
                        </Button>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    );
};

const CountSlider = ({
    label,
    value,
    min,
    max,
    onChange,
}: {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
}) => (
    <div className="mt-6 first:mt-0">
        <div className="flex items-end justify-between gap-4">
            <p className="font-display text-fg text-4xl font-bold">{value}</p>
            <p className="text-muted text-sm">{label}</p>
        </div>
        <input
            className="mt-4 w-full accent-brand"
            max={max}
            min={min}
            type="range"
            value={value}
            onChange={(event) => onChange(Number(event.target.value))}
        />
        <div className="text-muted mt-2 flex justify-between text-xs">
            <span>{min}</span>
            <span>{max}</span>
        </div>
    </div>
);
