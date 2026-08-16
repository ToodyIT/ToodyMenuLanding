type IconProps = {
    className?: string;
};

const iconClass = 'h-6 w-6';

export const IconRestaurant = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
            d="M4 19h16M7 19V7.5a2.5 2.5 0 0 1 5 0V19M12 10h8M16 10v9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
        />
    </svg>
);

export const IconCafe = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
            d="M5 9h11a3 3 0 0 1 0 6H5V9Zm11 2h.8a2.2 2.2 0 1 1 0 4.4H16M8 19h8M7 5.5c.8.8.8 2 0 2.8M11 5.5c.8.8.8 2 0 2.8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
        />
    </svg>
);

export const IconHookah = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
            d="M12 3v11M9 5h6M8 21h8M12 14c-2.5 0-4 1.6-4 3.5S10.5 21 12 21s4-1.6 4-3.5S14.5 14 12 14Zm4.5-5.5c1.8.4 3.5 1.6 3.5 3.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
        />
    </svg>
);

export const IconBar = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
            d="M6 4h12l-4.5 8.2V20h3v2H7.5v-2h3v-7.8L6 4Zm2.2 2 1.6 3h4.4l1.6-3H8.2Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
        />
    </svg>
);

export const IconCheck = ({ className = 'h-4 w-4' }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 14 11">
        <path
            d="M13.2 1.6 4.8 9.9 1 6.1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
        />
    </svg>
);

export const IconQr = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
            d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 3h2v3h-2v-3Zm4-3h2v2h-2v-2Zm0 4h2v2h-2v-2ZM7 7h0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
        />
        <path d="M6 6h2v2H6V6Zm10 0h2v2h-2V6ZM6 16h2v2H6v-2Z" fill="currentColor" />
    </svg>
);

export const IconIpad = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <rect height="18" rx="2.2" stroke="currentColor" strokeWidth="1.6" width="14" x="5" y="3" />
        <path d="M11 18.5h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
);

export const IconKiosk = ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
            d="M7 4h10l1.5 5H5.5L7 4ZM6 9h12v8H6V9Zm3 8v3m6-3v3M8 21h8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
        />
    </svg>
);
