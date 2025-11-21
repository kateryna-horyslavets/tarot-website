import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'ua';
    });

    const toggleLanguage = () => {
        const newLang = language === 'ua' ? 'en' : 'ua';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
