import { Button } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import portrait from '../assets/portrait.jpeg';
import './Hero.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero" id="top">
            <div className="hero__bg" aria-hidden="true" />
            <div className="container hero__inner">
                <div className="hero__content">
                    <span className="eyebrow">{t.hero.eyebrow}</span>
                    <h1 className="hero__title">
                        {t.hero.title.split('\n').map((line, i) => (
                            <span key={i} className="hero__title-line">
                                {line}
                            </span>
                        ))}
                    </h1>
                    <p className="hero__subtitle">{t.hero.subtitle}</p>

                    <div className="hero__actions">
                        <Button design="Emphasized" icon="email" onClick={() => scrollTo('contact')}>
                            {t.hero.ctaPrimary}
                        </Button>
                        <Button design="Transparent" icon="slim-arrow-down" onClick={() => scrollTo('offering')}>
                            {t.hero.ctaSecondary}
                        </Button>
                    </div>

                    <dl className="hero__stats">
                        <div>
                            <dt>10+</dt>
                            <dd>Years SAP</dd>
                        </div>
                        <div>
                            <dt>S/4HANA</dt>
                            <dd>&amp; BTP</dd>
                        </div>
                        <div>
                            <dt>ABAP · CAP · UI5</dt>
                            <dd>Full stack</dd>
                        </div>
                    </dl>
                </div>

                <div className="hero__portrait">
                    <img src={portrait} alt={t.hero.portraitAlt} loading="eager" />
                </div>
            </div>
        </section>
    );
}

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
