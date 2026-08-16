import type { ExtraCopy } from '../extraCopy';
import { useEffect, useState } from 'react';

type Props = {
    extra: ExtraCopy;
};

export const StickyCta = ({ extra }: Props) => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const contact = document.getElementById('contact');
        if (!contact) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHidden(entry.isIntersecting);
            },
            { threshold: 0.2 },
        );

        observer.observe(contact);

        return () => observer.disconnect();
    }, []);

    if (hidden) {
        return null;
    }

    return (
        <div className="border-line bg-nav fixed inset-x-0 bottom-0 z-40 border-t p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
            <a
                className="flex h-12 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white"
                href="#contact"
            >
                {extra.stickyCta}
            </a>
        </div>
    );
};
