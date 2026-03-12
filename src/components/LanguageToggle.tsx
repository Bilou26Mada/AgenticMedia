'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { useLanguage } from '@/context/LanguageContext';

type LanguageToggleProps = {
  variant?: 'default' | 'subtle';
};

export default function LanguageToggle({ variant = 'default' }: LanguageToggleProps) {
  const { locale, toggleLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={clsx(
        'whitespace-nowrap rounded-full border font-medium uppercase transition-all duration-200',
        variant === 'default' &&
          'px-3.5 py-2 text-[12px] tracking-[0.14em] border-white/10 text-white/72 hover:bg-white/6 hover:text-white dark:border-white/10 dark:text-white/72 dark:hover:bg-white/6 dark:hover:text-white',
        variant === 'subtle' &&
          'px-3 py-1.5 text-[10px] tracking-[0.2em] border-white/8 bg-white/[0.025] text-white/48 hover:border-white/14 hover:text-white/80 dark:border-white/8 dark:bg-white/[0.025] dark:text-white/48 dark:hover:border-white/14 dark:hover:text-white/80'
      )}
      aria-label="Switch language"
      title={`Switch to ${locale === 'fr' ? 'English' : 'Français'}`}
    >
      {locale === 'fr' ? (
        <span className="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 3 2">
            <rect fill="#ED2939" width="3" height="2"/>
            <rect fill="#fff" width="2" height="2"/>
            <rect fill="#0055A4" width="1" height="2"/>
          </svg>
          <span>FR</span>
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 25 15">
            <rect fill="#012169" width="25" height="15"/>
            <path d="M0,0 L25,15 M25,0 L0,15" stroke="#fff" strokeWidth="2"/>
            <path d="M0,0 L25,15 M25,0 L0,15" stroke="#C8102E" strokeWidth="1.2"/>
            <rect fill="#fff" x="10" width="5" height="15"/>
            <rect fill="#fff" y="6" width="25" height="3"/>
            <rect fill="#C8102E" x="11" width="3" height="15"/>
            <rect fill="#C8102E" y="7" width="25" height="1"/>
          </svg>
          <span>EN</span>
        </span>
      )}
    </button>
  );
}
