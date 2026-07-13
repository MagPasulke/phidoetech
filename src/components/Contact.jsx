import { Button } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Contact.css';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section className="section contact" id="contact">
            <div className="container contact__inner">
                <span className="eyebrow contact__eyebrow">{t.nav.contact}</span>
                <h2 className="contact__heading">{t.contact.heading}</h2>
                <p className="contact__body">{t.contact.body}</p>
                <div className="contact__actions">
                    <Button
                        design="Emphasized"
                        icon="email"
                        onClick={() => (window.location.href = 'mailto:kontakt@example.com')}
                    >
                        {t.contact.cta}
                    </Button>
                    <Button
                        design="Default"
                        icon="internet-browser"
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/philipp-d%C3%B6lker-9665a4377/',
                                '_blank',
                                'noopener'
                            )
                        }
                    >
                        {t.contact.linkedin}
                    </Button>
                </div>
            </div>
        </section>
    );
}
