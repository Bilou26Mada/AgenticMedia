'use client';

import { useLanguage } from '@/context/LanguageContext';
import { SummarizedPaper } from '@/lib/summarizer';

interface ResearchHighlightContentProps {
  papers: SummarizedPaper[];
}

export default function ResearchHighlightContent({ papers }: ResearchHighlightContentProps) {
  const { t } = useLanguage();

  if (!papers || papers.length === 0) return null;

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-brand-glass/10 bg-[linear-gradient(135deg,rgba(125,249,255,0.06),rgba(199,255,110,0.05),rgba(255,179,87,0.05))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-accent/10 blur-[100px]" />

      <header className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-glass/10 bg-brand-overlay/20 text-xl text-brand-glass dark:text-brand-glass">
          RS
        </span>
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-brand-glass dark:text-brand-glass">
            {t.researchTitle}
            <span className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              {t.researchBadge}
            </span>
          </h2>
          <p className="mt-0.5 max-w-[62ch] text-[13px] leading-relaxed text-brand-glass/60 dark:text-brand-text/60">
            {t.researchDesc}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {papers.map((paper, index) => (
          <a
            key={paper.id}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-2xl border border-brand-glass/10 bg-brand-overlay/10 p-4 transition-all duration-300 hover:border-brand-accent/30 hover:bg-brand-overlay/20 dark:bg-brand-glass/[0.03] dark:hover:bg-brand-glass/[0.05]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-glass/40 dark:text-brand-text/40">
              {t.publication} {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="line-clamp-2 text-[14px] font-medium leading-snug text-brand-glass/90 transition-colors group-hover:text-brand-accent dark:text-brand-text/90">
              {paper.title}
            </h3>
            {paper.authors.length > 0 && (
              <p className="font-mono text-[11px] text-brand-accent opacity-75">
                {paper.authors.join(', ')}
              </p>
            )}
            <p className="relative mt-1 line-clamp-3 border-l-2 border-brand-glass/10 pl-3 text-[13px] leading-relaxed text-brand-glass/60 transition-colors group-hover:border-brand-accent/30 dark:text-brand-text/60">
              {paper.condensedSummary}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
