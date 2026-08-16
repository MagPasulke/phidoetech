import { Icon } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Stations.css';

// Reihenfolge = Reihenfolge der Stationen: Bosch, cbs, Porsche, Freiberuflich.
const ACCENTS = ['accent', 'teal', 'gold', 'accent'];
const META_ICONS = ['education'];

export default function Stations() {
    const { t } = useLanguage();

    return (
        <section className="section stations" id="career">
            <div className="container">
                <span className="eyebrow">{t.career.eyebrow}</span>
                <h2 className="section-heading">{t.career.heading}</h2>

                <ol className="stations__grid">
                    {t.career.stations.map((station, index) => (
                        <StationCard
                            key={station.company}
                            data={station}
                            accent={ACCENTS[index]}
                        />
                    ))}
                </ol>

                <ul className="stations__meta">
                    {t.career.meta.map((text, index) => (
                        <li key={text}>
                            <Icon
                                name={META_ICONS[index]}
                                className="stations__meta-icon"
                            />
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function StationCard({ data, accent }) {
    const current = Boolean(data.now);

    return (
        <li
            className={`station station--${accent}${current ? ' station--current' : ''}`}
        >
            <span className="station__rail">
                <span className="station__dot" />
            </span>

            <article className="station-card">
                {current && <span className="station-card__now">{data.now}</span>}
                <span className="station-card__period">{data.period}</span>
                <h3 className="station-card__company">{data.company}</h3>
                <p className="station-card__role">{data.role}</p>
                <ul className="station-card__list">
                    {data.items.map((item) => (
                        <li key={item}>
                            <Icon name="accept" className="station-card__check" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </li>
    );
}
