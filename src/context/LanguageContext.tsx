'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, translations, getTranslation, Translation } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('agentic-locale') as Locale | null;
    if (stored === 'en' || stored === 'fr') {
      setLocaleState(stored);
    }
    setIsLoaded(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('agentic-locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    const newLocale: Locale = locale === 'fr' ? 'en' : 'fr';
    setLocale(newLocale);
  };

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = locale;
    }
  }, [locale, isLoaded]);

  return (
    <LanguageContext.Provider value={{ locale, t: getTranslation(locale), setLocale, toggleLocale, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
