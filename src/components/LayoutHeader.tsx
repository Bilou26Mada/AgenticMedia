'use client';

import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Clock from './Clock';

export default function LayoutHeader() {
  const { t } = useLanguage();

  return (
    <header className="mb-10 flex flex-col gap-6 border-b border-brand-glass/10 pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[720px]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
            {t.tagline}
          </span>
          <Clock />
        </div>
        <p className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-brand-glass md:text-[36px] dark:text-brand-glass">
          {t.siteName}
        </p>
        <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-text/80 dark:text-brand-text/80">
          {t.siteDescription}
        </p>
      </div>

      <div className="flex w-full max-w-[420px] flex-col gap-3">
        <div className="flex justify-start gap-2 md:justify-end">
          <LanguageToggle variant="subtle" />
          <ThemeToggle variant="subtle" />
        </div>
        <div className="grid gap-3 text-right text-[12px] md:grid-cols-2 md:text-left">
          <div className="rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.025] px-4 py-3">
            <p className="font-mono uppercase tracking-[0.22em] text-brand-text/48 dark:text-brand-text/48">Radar</p>
            <p className="mt-1 text-brand-glass/82 dark:text-brand-text/82">{t.radarDesc}</p>
          </div>
          <div className="rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.025] px-4 py-3">
            <p className="font-mono uppercase tracking-[0.22em] text-brand-text/48 dark:text-brand-text/48">Angle</p>
            <p className="mt-1 text-brand-glass/82 dark:text-brand-text/82">{t.angleDesc}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
