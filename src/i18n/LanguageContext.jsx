import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { translations } from './translations.js';

const LanguageContext = createContext(null);

const getInitialLang = () => {
    if (typeof navigator !== 'undefined' && navigator.language) {
        return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
    }
    return 'de';
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === 'de' ? 'en' : 'de';
            if (typeof document !== 'undefined') {
                document.documentElement.lang = next;
            }
            return next;
        });
    }, []);

    const value = useMemo(
        () => ({ lang, toggleLang, t: translations[lang] }),
        [lang, toggleLang]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
}
