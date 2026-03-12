'use client';

import { useLanguage } from '@/context/LanguageContext';
import { CategorizedFeed } from '@/lib/feeds';
import FeedCard from '@/components/FeedCard';

interface CategoryPageContentProps {
  feeds: CategorizedFeed[];
  categoryId: string;
  categoryLabel: string;
}

const CATEGORY_DETAILS: Record<string, { eyebrow: string; question: string; highlights: string[] }> = {};

export default function CategoryPageContent({
  feeds,
  categoryId,
  categoryLabel,
}: CategoryPageContentProps) {
  const { t } = useLanguage();

  // Build category details from translations based on categoryId
  const categoryDetails: Record<string, { eyebrow: string; title: string; description: string; question: string; highlights: string[] }> = {
    'news-agentic': { eyebrow: t.newsEyebrow, title: t.newsAgenticTitle, description: t.newsAgenticDesc, question: t.newsQuestion, highlights: [t.newsHighlights1, t.newsHighlights2, t.newsHighlights3] },
    'use-cases': { eyebrow: t.useCasesEyebrow, title: t.useCasesTitle, description: t.useCasesDesc, question: t.useCasesQuestion, highlights: [t.useCasesHighlights1, t.useCasesHighlights2, t.useCasesHighlights3] },
    'stack-tooling': { eyebrow: t.stackEyebrow, title: t.stackTitle, description: t.stackDesc, question: t.stackQuestion, highlights: [t.stackHighlights1, t.stackHighlights2, t.stackHighlights3] },
    'bench-comparatifs': { eyebrow: t.benchEyebrow, title: t.benchTitle, description: t.benchDesc, question: t.benchQuestion, highlights: [t.benchHighlights1, t.benchHighlights2, t.benchHighlights3] },
    'security-governance': { eyebrow: t.governanceEyebrow, title: t.governanceTitle, description: t.governanceDesc, question: t.governanceQuestion, highlights: [t.governanceHighlights1, t.governanceHighlights2, t.governanceHighlights3] },
    'build-guides': { eyebrow: t.buildEyebrow, title: t.buildTitle, description: t.buildDesc, question: t.buildQuestion, highlights: [t.buildHighlights1, t.buildHighlights2, t.buildHighlights3] },
    'formation': { eyebrow: t.formationEyebrow, title: t.formationTitle, description: t.formationDesc, question: t.formationQuestion, highlights: [t.formationHighlights1, t.formationHighlights2, t.formationHighlights3] },
  };

  const detail = categoryDetails[categoryId] || {
    eyebrow: categoryLabel,
    title: categoryLabel,
    description: '',
    question: '',
    highlights: [],
  };

  return (
    <>
      <section className="mb-8 grid gap-6 rounded-[34px] border border-white/8 bg-brand-panel/78 p-6 backdrop-blur-xl dark:border-brand-glass/10 md:grid-cols-[1.05fr_0.95fr] md:p-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
            {detail.eyebrow}
          </p>
          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.05em] text-white md:text-[48px] dark:text-brand-glass">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-white/80 md:text-[16px] dark:text-brand-text/80">
            {detail.description}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[26px] border border-white/8 bg-black/18 p-5 dark:border-brand-glass/10 dark:bg-brand-glass/[0.03]">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48 dark:text-brand-text/55">
              Core question
            </p>
            <p className="mt-3 text-[18px] font-medium leading-snug text-white/90 dark:text-brand-text">
              {detail.question}
            </p>
          </div>

          <div className="rounded-[26px] border border-white/8 bg-black/18 p-5 dark:border-brand-glass/10 dark:bg-brand-glass/[0.03]">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48 dark:text-brand-text/55">
              Coverage
            </p>
            <ul className="mt-3 space-y-2">
              {detail.highlights.map((highlight) => (
                <li key={highlight} className="text-[14px] leading-relaxed text-white/78 dark:text-brand-text/78">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6">
        {feeds.map((feed) => (
          <FeedCard key={feed.source.id} feed={feed} />
        ))}

        {feeds.length === 0 && (
          <div className="rounded-[30px] border border-dashed border-white/10 px-6 py-20 text-center text-brand-text/60 dark:border-brand-glass/10 dark:text-brand-text/60">
            {t.noFeeds}
          </div>
        )}
      </div>
    </>
  );
}
