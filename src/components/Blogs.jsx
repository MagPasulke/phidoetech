import { useMemo, useState } from 'react';
import { Icon } from '@ui5/webcomponents-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { blogPosts } from '../i18n/translations.js';
import './Blogs.css';

const ALL = '__all__';

export default function Blogs() {
    const { t } = useLanguage();
    const [active, setActive] = useState(ALL);

    const tags = useMemo(() => {
        const seen = [];
        blogPosts.forEach((post) => {
            post.tags.forEach((tag) => {
                if (!seen.includes(tag)) seen.push(tag);
            });
        });
        return seen;
    }, []);

    const visible =
        active === ALL
            ? blogPosts
            : blogPosts.filter((post) => post.tags.includes(active));

    return (
        <section className="section blogs" id="blogs">
            <div className="container">
                <span className="eyebrow">{t.blogs.eyebrow}</span>
                <h2 className="section-heading">{t.blogs.heading}</h2>
                <p className="section-sub">{t.blogs.subheading}</p>

                <div
                    className="blogs__filter"
                    role="toolbar"
                    aria-label={t.blogs.filterLabel}
                >
                    <button
                        type="button"
                        className={`blogs__chip${active === ALL ? ' blogs__chip--active' : ''}`}
                        aria-pressed={active === ALL}
                        onClick={() => setActive(ALL)}
                    >
                        {t.blogs.filterAll}
                    </button>
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            className={`blogs__chip${active === tag ? ' blogs__chip--active' : ''}`}
                            aria-pressed={active === tag}
                            onClick={() => setActive(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="blogs__grid">
                    {visible.map((post) => (
                        <BlogCard key={post.url + post.title} post={post} cta={t.blogs.readCta} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BlogCard({ post, cta }) {
    return (
        <a
            className="blog-card"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <ul className="blog-card__tags">
                {post.tags.map((tag) => (
                    <li key={tag} className="blog-card__tag">
                        {tag}
                    </li>
                ))}
            </ul>
            <h3 className="blog-card__title">{post.title}</h3>
            <span className="blog-card__cta">
                {cta}
                <Icon name="slim-arrow-right" className="blog-card__arrow" />
            </span>
        </a>
    );
}
