'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

type ThemeMode = 'dark' | 'light';
type ThemeToggleProps = {
  variant?: 'default' | 'subtle';
};

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('agentique-theme', theme);
}

export default function ThemeToggle({ variant = 'default' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('agentique-theme');
    const currentTheme = document.documentElement.dataset.theme;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else if (currentTheme === 'light' || currentTheme === 'dark') {
      setTheme(currentTheme);
    }
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }}
      className={clsx(
        'whitespace-nowrap rounded-full border font-medium uppercase transition-all duration-200',
        variant === 'default' &&
          'px-3.5 py-2 text-[12px] tracking-[0.14em] border-white/10 text-white/72 hover:bg-white/6 hover:text-white dark:border-white/10 dark:text-white/72 dark:hover:bg-white/6 dark:hover:text-white',
        variant === 'subtle' &&
          'px-3 py-1.5 text-[10px] tracking-[0.2em] border-white/8 bg-white/[0.025] text-white/48 hover:border-white/14 hover:text-white/80 dark:border-white/8 dark:bg-white/[0.025] dark:text-white/48 dark:hover:border-white/14 dark:hover:text-white/80'
      )}
      aria-label="Basculer entre skin sombre et skin clair"
      title={theme === 'dark' ? 'Activer le skin clair' : 'Revenir au skin sombre'}
    >
      {theme === 'dark' ? 'Skin clair' : 'Skin sombre'}
    </button>
  );
}
