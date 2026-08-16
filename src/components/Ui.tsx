import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

export const landingEase = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => (
    <m.div
        className={className}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.7, delay, ease: landingEase }}
        viewport={{ once: true, amount: 0.18 }}
        whileInView={{ opacity: 1, y: 0 }}
    >
        {children}
    </m.div>
);

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
    <div className={twJoin('mx-auto w-full max-w-[1180px] px-5 sm:px-8', className)}>{children}</div>
);

type SectionProps = {
    children: ReactNode;
    id?: string;
    className?: string;
};

export const Section = ({ children, id, className }: SectionProps) => (
    <section className={twJoin('relative py-20 sm:py-28', className)} id={id}>
        {children}
    </section>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
    <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-brand uppercase">{children}</p>
);

export const Logo = ({ className }: { className?: string }) => (
    <span
        aria-label="ToodyMenu"
        className={twJoin(
            'font-display inline-flex items-baseline text-2xl leading-none font-bold tracking-tight',
            className,
        )}
    >
        <span className="text-fg">Toody</span>
        <span className="text-brand">Menu</span>
    </span>
);

type ButtonProps = {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'ghost';
    type?: 'button' | 'submit';
    className?: string;
    disabled?: boolean;
};

export const Button = ({
    children,
    href,
    onClick,
    variant = 'primary',
    type = 'button',
    className,
    disabled,
}: ButtonProps) => {
    const classes = twJoin(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300',
        variant === 'primary' &&
            'bg-brand text-white shadow-[0_12px_40px_rgba(26,176,48,0.28)] hover:-translate-y-0.5 hover:bg-[#22c43a] disabled:translate-y-0 disabled:opacity-60',
        variant === 'ghost' &&
            'border-line bg-glass text-fg hover:border-line hover:bg-glass border backdrop-blur-sm',
        className,
    );

    if (href) {
        return (
            <a className={classes} href={href} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};
