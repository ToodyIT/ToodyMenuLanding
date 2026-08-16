import type { LandingCopy } from '../copy';
import { m } from 'framer-motion';

type PhoneMockupProps = {
    copy: LandingCopy['mockup'];
};

export const PhoneMockup = ({ copy }: PhoneMockupProps) => (
    <m.div
        animate={{ y: [0, -12, 0] }}
        className="relative mx-auto block w-[280px] sm:w-[310px]"
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    >
        <div className="absolute -inset-8 rounded-[3rem] bg-brand/20 blur-3xl" />
        <div className="border-line bg-panel relative overflow-hidden rounded-[2.4rem] border p-2.5 shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
            <div className="bg-background overflow-hidden rounded-[1.9rem]">
                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                    <span className="text-muted text-[11px] tracking-wide">9:41</span>
                    <span className="h-5 w-[88px] rounded-full bg-black" />
                    <span className="text-muted text-[11px]">100%</span>
                </div>
                <div className="flex items-end justify-between px-5 pb-3">
                    <div>
                        <p className="font-display text-lg leading-none font-bold">
                            <span className="text-text">Toody</span>
                            <span className="text-brand">Menu</span>
                        </p>
                        <p className="text-muted mt-1 text-[11px]">{copy.table}</p>
                    </div>
                    <div className="bg-backgroundLess text-text rounded-full px-3 py-1 text-[11px]">{copy.cart} · 2</div>
                </div>
                <div className="px-5 pb-3">
                    <div className="border-border bg-backgroundLess text-textSubtle rounded-2xl border px-3 py-2 text-[12px]">
                        {copy.search}
                    </div>
                </div>
                <div className="flex gap-2 overflow-hidden px-5 pb-4">
                    {[copy.coals, copy.waiter, copy.payment].map((label) => (
                        <span
                            key={label}
                            className="border-border bg-backgroundLess text-text shrink-0 rounded-full border px-3 py-1.5 text-[11px]"
                        >
                            {label}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2 px-5 pb-4 text-[11px]">
                    {[copy.hits, copy.hookah, copy.kitchen, copy.drinks].map((label, index) => (
                        <span key={label} className={index === 0 ? 'font-semibold text-brand' : 'text-textSubtle'}>
                            {label}
                        </span>
                    ))}
                </div>
                <div className="space-y-3 px-5 pb-6">
                    <MockProduct action={copy.add} meta={copy.productOneMeta} title={copy.productOne} tone="green" />
                    <MockProduct action={copy.add} meta={copy.productTwoMeta} title={copy.productTwo} tone="gold" />
                </div>
            </div>
        </div>
    </m.div>
);

type MockProductProps = {
    title: string;
    meta: string;
    action: string;
    tone: 'green' | 'gold';
};

const MockProduct = ({ title, meta, action, tone }: MockProductProps) => (
    <div className="border-border bg-background flex items-center gap-3 rounded-2xl border p-2.5">
        <div
            className={
                tone === 'green'
                    ? 'h-14 w-14 shrink-0 rounded-xl bg-linear-to-br from-brand to-[#0d4d1c]'
                    : 'h-14 w-14 shrink-0 rounded-xl bg-linear-to-br from-gold to-[#5c4630]'
            }
        />
        <div className="min-w-0 flex-1">
            <p className="text-text truncate text-[13px] font-semibold">{title}</p>
            <p className="text-textSubtle text-[11px]">{meta}</p>
        </div>
        <span className="rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">{action}</span>
    </div>
);
