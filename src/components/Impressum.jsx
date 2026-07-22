import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Impressum.css';

const NAME = 'Philipp Dölker';
const STREET = 'Oberer Höhenweg 40';
const CITY = '72250 Freudenstadt'
const EMAIL = 'pd@philippdoelker.de';
const PHONE = '+49 176 30792194';
const PHONE_HREF = '+4917630792194';

export default function Impressum() {
    const { t } = useLanguage();

    return (
        <main className="impressum-page">
            <div className="container impressum__inner">
                <a className="impressum__back" href="#top">
                    ← {t.impressum.back}
                </a>
                <span className="eyebrow">{t.impressum.eyebrow}</span>
                <h1 className="section-heading impressum__heading">{t.impressum.heading}</h1>

                <dl className="impressum__list">
                    <div className="impressum__row">
                        <dt>{t.impressum.providerLabel}</dt>
                        <dd>
                            {NAME}
                            <br />
                            {STREET}
                            <br />
                            {CITY}
                        </dd>
                    </div>
                    <div className="impressum__row">
                        <dt>{t.impressum.contactLabel}</dt>
                        <dd>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            <br />
                            <a href={`tel:${PHONE_HREF}`}>{PHONE}</a>
                        </dd>
                    </div>
                </dl>
            </div>
        </main>
    );
}
