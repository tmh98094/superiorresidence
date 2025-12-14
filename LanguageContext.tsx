import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKey } from './translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Get language from URL path
const getLanguageFromPath = (): Language => {
    const path = window.location.pathname;
    if (path.startsWith('/zh') || path.startsWith('/cn')) {
        return 'cn';
    }
    return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(getLanguageFromPath);

    // Apply language class to body for CSS targeting
    useEffect(() => {
        document.body.classList.remove('lang-en', 'lang-cn');
        document.body.classList.add(`lang-${language}`);
    }, [language]);

    const setLanguage = (lang: Language) => {
        // Navigate to the new language URL with full page refresh
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        // Remove existing language prefix
        let basePath = currentPath.replace(/^\/(en|zh|cn)/, '');
        if (!basePath.startsWith('/')) basePath = '/' + basePath;
        if (basePath === '/') basePath = '';
        
        // Build new URL
        const newPath = lang === 'cn' ? `/zh${basePath}` : basePath || '/';
        
        // Full page navigation (refresh)
        window.location.href = newPath + currentHash;
    };

    const t = (key: TranslationKey): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
