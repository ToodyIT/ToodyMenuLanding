import { COMPANY_NAME, COMPANY_URL, CONTACT_EMAIL, FORMSPREE_ENDPOINT, PEOPLE } from '../config';
import type { LandingCopy } from '../copy';
import type { ExtraCopy } from '../extraCopy';
import { Button, Container, Eyebrow, FadeIn, Section } from './Ui';
import { type FormEvent, useState } from 'react';

type SectionProps = {
    copy: LandingCopy;
    extra: ExtraCopy;
    wantDemo: boolean;
    onWantDemoChange: (value: boolean) => void;
};

type FormState = 'idle' | 'sending' | 'success' | 'error';

const fieldClass =
    'w-full rounded-2xl border border-line bg-glass px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted focus:border-brand/60';

export const LandingContact = ({ copy, extra, wantDemo, onWantDemoChange }: SectionProps) => {
    const [state, setState] = useState<FormState>('idle');

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const payload = {
            name: String(data.get('name') ?? ''),
            email: String(data.get('email') ?? ''),
            phone: String(data.get('phone') ?? ''),
            venue: String(data.get('venue') ?? ''),
            message: String(data.get('message') ?? ''),
            demo: wantDemo ? copy.contact.demo : '',
        };

        setState('sending');

        try {
            if (FORMSPREE_ENDPOINT) {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    throw new Error('formspree');
                }
            } else {
                const body = [
                    payload.name,
                    payload.email,
                    payload.phone,
                    payload.venue,
                    payload.demo,
                    '',
                    payload.message,
                ].join('\n');
                window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('ToodyMenu')}&body=${encodeURIComponent(body)}`;
            }

            form.reset();
            onWantDemoChange(false);
            setState('success');
        } catch {
            setState('error');
        }
    };

    return (
        <Section id="contact">
            <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <FadeIn>
                    <Eyebrow>{copy.contact.eyebrow}</Eyebrow>
                    <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
                        {copy.contact.title}
                    </h2>
                    <p className="text-muted mt-4 max-w-md">{copy.contact.subtitle}</p>
                    <p className="text-fg mt-6 text-sm font-semibold">{extra.people.title}</p>
                    <div className="mt-3 space-y-4">
                        {PEOPLE.map((person) => (
                            <div key={person.tel}>
                                <p className="text-fg text-sm">{person.name}</p>
                                <a className="text-brand hover:text-fg" href={`tel:${person.tel}`}>
                                    {person.phone}
                                </a>
                                <div className="text-muted mt-1 flex gap-3 text-xs">
                                    <a className="hover:text-fg" href={`tel:${person.tel}`}>
                                        {extra.people.call}
                                    </a>
                                    <a className="hover:text-fg" href={person.whatsapp} rel="noreferrer" target="_blank">
                                        {extra.people.whatsapp}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a className="text-muted hover:text-fg mt-6 inline-block text-sm" href={`mailto:${CONTACT_EMAIL}`}>
                        {CONTACT_EMAIL}
                    </a>
                    <p className="text-muted mt-4 text-sm">
                        {extra.company.productOf}{' '}
                        <a
                            className="text-fg hover:text-brand font-semibold"
                            href={COMPANY_URL}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {COMPANY_NAME}
                        </a>
                    </p>
                </FadeIn>
                <FadeIn delay={0.08}>
                    <form className="border-line bg-panel rounded-[1.8rem] border p-6 sm:p-8" onSubmit={onSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="text-muted flex flex-col gap-2 text-xs tracking-wide uppercase">
                                {copy.contact.name}
                                <input autoComplete="name" className={fieldClass} name="name" required type="text" />
                            </label>
                            <label className="text-muted flex flex-col gap-2 text-xs tracking-wide uppercase">
                                {copy.contact.email}
                                <input autoComplete="email" className={fieldClass} name="email" required type="email" />
                            </label>
                            <label className="text-muted flex flex-col gap-2 text-xs tracking-wide uppercase">
                                {copy.contact.phone}
                                <input autoComplete="tel" className={fieldClass} name="phone" type="tel" />
                            </label>
                            <label className="text-muted flex flex-col gap-2 text-xs tracking-wide uppercase">
                                {copy.contact.venue}
                                <input className={fieldClass} name="venue" type="text" />
                            </label>
                        </div>
                        <label className="text-muted mt-4 flex flex-col gap-2 text-xs tracking-wide uppercase">
                            {copy.contact.message}
                            <textarea
                                className={`${fieldClass} min-h-32 resize-y`}
                                name="message"
                                placeholder={copy.contact.messagePlaceholder}
                                required
                            />
                        </label>
                        <label className="text-muted mt-4 flex items-start gap-3 text-sm">
                            <input
                                checked={wantDemo}
                                className="mt-1 accent-brand"
                                name="demo"
                                type="checkbox"
                                onChange={(event) => onWantDemoChange(event.target.checked)}
                            />
                            {copy.contact.demo}
                        </label>
                        <Button className="mt-6 w-full" disabled={state === 'sending'} type="submit">
                            {copy.contact.submit}
                        </Button>
                        {state === 'success' && <p className="mt-4 text-sm text-brand">{copy.contact.success}</p>}
                        {state === 'error' && <p className="mt-4 text-sm text-red-400">{copy.contact.error}</p>}
                    </form>
                </FadeIn>
            </Container>
        </Section>
    );
};
