import { Button } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Header.css';

export default function Header() {
    const { t, lang, toggleLang } = useLanguage();

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <a href="#top" className="brand" aria-label="Home">
                    <span className="brand__mark">SAP</span>
                    <span className="brand__text">Developer &amp; Architect</span>
                </a>

                <nav className="site-nav" aria-label="Primary">
                    <a href="#offering">{t.nav.offerings}</a>
                    <a href="#about">{t.nav.about}</a>
                    <a href="#contact">{t.nav.contact}</a>
                </nav>

                <Button
                    design="Transparent"
                    onClick={toggleLang}
                    accessibleName={t.langButtonAria}
                    className="lang-toggle"
                    icon="world"
                >
                    {t.langButton}
                </Button>
            </div>
        </header>
    );
}
