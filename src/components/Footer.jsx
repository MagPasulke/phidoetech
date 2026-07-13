import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Footer.css';

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <div className="site-footer__brand">
                    <span className="brand__mark">SAP</span>
                    <span>{t.footer.role}</span>
                </div>
                <p className="site-footer__legal">
                    © {year} · {t.footer.rights}
                </p>
            </div>
        </footer>
    );
}
