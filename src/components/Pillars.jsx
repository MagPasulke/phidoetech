import { Icon } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Pillars.css';

export default function Pillars() {
    const { t } = useLanguage();
    const { architect, translate, develop } = t.pillars;

    return (
        <section className="section pillars" id="offering">
            <div className="container">
                <span className="eyebrow">{t.nav.offerings}</span>
                <h2 className="section-heading">{t.pillars.heading}</h2>
                <p className="section-sub">{t.pillars.subheading}</p>

                <div className="pillars__grid">
                    <PillarCard data={architect} icon="org-chart" accent="accent" />
                    <PillarCard data={translate} icon="collaborate" accent="teal" />
                    <PillarCard data={develop} icon="source-code" accent="gold" />
                </div>
            </div>
        </section>
    );
}

function PillarCard({ data, icon, accent }) {
    return (
        <article className={`pillar-card pillar-card--${accent}`}>
            <div className="pillar-card__icon">
                <Icon name={icon} />
            </div>
            <span className="pillar-card__badge">{data.badge}</span>
            <h3 className="pillar-card__title">{data.title}</h3>
            <p className="pillar-card__intro">{data.intro}</p>
            <ul className="pillar-card__list">
                {data.items.map((item) => (
                    <li key={item}>
                        <Icon name="accept" className="pillar-card__check" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}
