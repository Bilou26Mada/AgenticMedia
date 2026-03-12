'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

export default function Clock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());
  const { locale } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-text/40">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-text/20 animate-pulse" />
        --:--
      </div>
    );
  }

  const dateLocale = locale === 'fr' ? fr : enUS;
  
  // Format based on locale: 
  // FR: jeudi 12 mars, 17:04
  // EN: Thursday, Mar 12, 17:04
  const formattedDate = format(time, locale === 'fr' ? "eeee d MMMM, HH:mm" : "eeee, MMM d, HH:mm", {
    locale: dateLocale,
  });

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-text/60 dark:text-brand-text/40">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span>{formattedDate}</span>
    </div>
  );
}
