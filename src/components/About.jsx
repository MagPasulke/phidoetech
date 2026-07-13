import { Icon } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './About.css';

export default function About() {
    const { t } = useLanguage();

    return (
        <section className="section about" id="about">
            <div className="container about__grid">
                <div className="about__intro">
                    <span className="eyebrow">{t.about.heading}</span>
                    <h2 className="section-heading">{t.about.lead}</h2>
                    <p className="about__body">{t.about.body}</p>

                    <h3 className="about__strength-title">{t.about.strengthTitle}</h3>
                    <p className="about__body">{t.about.strength}</p>
                </div>

                <aside className="about__skills">
                    <h3 className="about__skills-title">{t.about.skillsTitle}</h3>
                    <ul>
                        {t.about.skills.map((skill) => (
                            <li key={skill}>
                                <Icon name="checklist-item" />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
}
