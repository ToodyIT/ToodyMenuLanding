import { useTheme, type Theme } from '../theme';
import type { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
    lightLabel: string;
    darkLabel: string;
    themeLabel?: string;
    compact?: boolean;
    className?: string;
};

export const ThemeToggle = ({ lightLabel, darkLabel, themeLabel, compact = false, className }: Props) => {
    const { theme, setTheme } = useTheme();

    if (compact) {
        return (
            <button
                aria-label={theme === 'light' ? darkLabel : lightLabel}
                className="border-line bg-glass text-fg flex size-10 items-center justify-center rounded-full border"
                type="button"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme === 'light' ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
            </button>
        );
    }

    return (
        <div className={twJoin("border-line border-t pt-4", className)}>
            {themeLabel && (
                <p className="text-muted mb-2 text-xs tracking-wide uppercase">{themeLabel}</p>
            )}
            <div className="bg-backgroundLess border-border grid grid-cols-2 gap-1 rounded-xl border p-1">
                <ThemeOption
                    active={theme === 'light'}
                    label={lightLabel}
                    value="light"
                    onPick={setTheme}
                >
                    <SunIcon className="size-4 shrink-0" />
                </ThemeOption>
                <ThemeOption
                    active={theme === 'dark'}
                    label={darkLabel}
                    value="dark"
                    onPick={setTheme}
                >
                    <MoonIcon className="size-4 shrink-0" />
                </ThemeOption>
            </div>
        </div>
    );
};

const ThemeOption = ({
    active,
    label,
    value,
    onPick,
    children,
}: {
    active: boolean;
    label: string;
    value: Theme;
    onPick: (theme: Theme) => void;
    children: ReactNode;
}) => (
    <button
        aria-pressed={active}
        className={twJoin(
            'flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition',
            active ? 'bg-background text-text shadow-sm' : 'text-textSubtle hover:text-text',
        )}
        type="button"
        onClick={() => onPick(value)}
    >
        {children}
        <span>{label}</span>
    </button>
);

const SunIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            strokeLinecap="round"
        />
    </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
