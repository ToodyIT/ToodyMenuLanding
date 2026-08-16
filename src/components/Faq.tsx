import type { LandingCopy } from '../copy';
import { Container, Eyebrow, FadeIn, Section } from './Ui';
import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';

type SectionProps = {
    copy: LandingCopy;
};

export const LandingFaq = ({ copy }: SectionProps) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <Section className="bg-glass" id="faq">
            <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <FadeIn>
                    <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
                    <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                        {copy.faq.title}
                    </h2>
                </FadeIn>
                <div className="space-y-3">
                    {copy.faq.items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <FadeIn delay={index * 0.03} key={item.question}>
                                <div className="border-line bg-panel rounded-[1.3rem] border">
                                    <button
                                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    >
                                        <span className="font-display text-fg text-base font-semibold">
                                            {item.question}
                                        </span>
                                        <span className="text-xl text-brand">{isOpen ? '–' : '+'}</span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <m.div
                                                animate={{ height: 'auto', opacity: 1 }}
                                                className="overflow-hidden"
                                                exit={{ height: 0, opacity: 0 }}
                                                initial={{ height: 0, opacity: 0 }}
                                            >
                                                <p className="text-muted px-5 pb-5 text-sm leading-6">
                                                    {item.answer}
                                                </p>
                                            </m.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};
