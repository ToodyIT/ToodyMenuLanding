import { COMPANY_NAME, COMPANY_URL, CONTACT_EMAIL, PEOPLE } from '../config';
import type { LandingCopy } from '../copy';
import type { ExtraCopy } from '../extraCopy';
import { Container, Logo } from './Ui';

type FooterProps = {
    copy: LandingCopy;
    extra: ExtraCopy;
};

export const LandingFooter = ({ copy, extra }: FooterProps) => (
    <footer className="border-line border-t py-10">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <Logo />
                <p className="text-muted mt-3 max-w-md text-sm">{copy.footer.tagline}</p>
                <p className="text-muted mt-2 max-w-md text-sm">
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
                <p className="text-muted mt-2 max-w-md text-sm">{extra.geo.text}</p>
            </div>
            <div className="text-muted flex flex-col items-start gap-2 text-sm sm:items-end">
                {PEOPLE.map((person) => (
                    <a className="hover:text-fg" href={`tel:${person.tel}`} key={person.tel}>
                        {person.name} · {person.phone}
                    </a>
                ))}
                <a className="hover:text-fg" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                </a>
                <a className="hover:text-fg" href={COMPANY_URL} rel="noreferrer" target="_blank">
                    {COMPANY_URL.replace(/\/$/, '').replace('https://www.', '')}
                </a>
                <p>
                    © {new Date().getFullYear()} {copy.footer.rights}
                </p>
            </div>
        </Container>
    </footer>
);
