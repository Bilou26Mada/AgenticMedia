'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CATEGORIES } from '@/lib/feeds';
import FeedCard from '@/components/FeedCard';
import { CategorizedFeed } from '@/lib/feeds';

interface HomePageContentProps {
  feeds: CategorizedFeed[];
}

export default function HomePageContent({ feeds }: HomePageContentProps) {
  const { t } = useLanguage();

  // Build category details from translations
  const categoryDetails = {
    'news-agentic': { eyebrow: t.newsEyebrow, title: t.newsAgenticTitle, description: t.newsAgenticDesc, highlights: [t.newsHighlights1, t.newsHighlights2, t.newsHighlights3] },
    'use-cases': { eyebrow: t.useCasesEyebrow, title: t.useCasesTitle, description: t.useCasesDesc, highlights: [t.useCasesHighlights1, t.useCasesHighlights2, t.useCasesHighlights3] },
    'stack-tooling': { eyebrow: t.stackEyebrow, title: t.stackTitle, description: t.stackDesc, highlights: [t.stackHighlights1, t.stackHighlights2, t.stackHighlights3] },
    'bench-comparatifs': { eyebrow: t.benchEyebrow, title: t.benchTitle, description: t.benchDesc, highlights: [t.benchHighlights1, t.benchHighlights2, t.benchHighlights3] },
    'security-governance': { eyebrow: t.governanceEyebrow, title: t.governanceTitle, description: t.governanceDesc, highlights: [t.governanceHighlights1, t.governanceHighlights2, t.governanceHighlights3] },
    'build-guides': { eyebrow: t.buildEyebrow, title: t.buildTitle, description: t.buildDesc, highlights: [t.buildHighlights1, t.buildHighlights2, t.buildHighlights3] },
    'formation': { eyebrow: t.formationEyebrow, title: t.formationTitle, description: t.formationDesc, highlights: [t.formationHighlights1, t.formationHighlights2, t.formationHighlights3] },
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[34px] border border-brand-glass/10 bg-brand-panel/82 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
            <div className="flex flex-wrap gap-2">
              <Link
                href="#live-radar"
                className="rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-glass/60 transition-colors hover:border-brand-glass/18 hover:bg-brand-glass/[0.06] hover:text-brand-glass dark:text-brand-glass/60 dark:hover:text-brand-glass"
              >
                {t.signalTitle}
              </Link>
              <Link
                href="/use-cases"
                className="rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-glass/60 transition-colors hover:border-brand-glass/18 hover:bg-brand-glass/[0.06] hover:text-brand-glass dark:text-brand-glass/60 dark:hover:text-brand-glass"
              >
                {t.executionTitle}
              </Link>
              <Link
                href="/security-governance"
                className="rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-glass/60 transition-colors hover:border-brand-glass/18 hover:bg-brand-glass/[0.06] hover:text-brand-glass dark:text-brand-glass/60 dark:hover:text-brand-glass"
              >
                {t.controlTitle}
              </Link>
            </div>

            <h1 className="mt-6 max-w-[14ch] text-[44px] font-semibold leading-[0.92] tracking-[-0.06em] text-brand-glass md:text-[68px] dark:text-brand-glass">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-[64ch] text-[16px] leading-relaxed text-brand-text/82 md:text-[18px] dark:text-brand-text/82">
              {t.heroDesc}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <Link
                href="#live-radar"
                className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent/24 hover:bg-brand-glass/[0.05] dark:hover:text-brand-accent"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
                  {t.signalTitle}
                </p>
                <p className="mt-2 text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent dark:text-brand-glass/90">
                  {t.signalValue}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-text/68 dark:text-brand-text/68">
                  {t.signalText}
                </p>
              </Link>
              <Link
                href="/use-cases"
                className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent/24 hover:bg-brand-glass/[0.05] dark:hover:text-brand-accent"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
                  {t.executionTitle}
                </p>
                <p className="mt-2 text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent dark:text-brand-glass/90">
                  {t.executionValue}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-text/68 dark:text-brand-text/68">
                  {t.executionText}
                </p>
              </Link>
              <Link
                href="/security-governance"
                className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent/24 hover:bg-brand-glass/[0.05] dark:hover:text-brand-accent"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
                  {t.controlTitle}
                </p>
                <p className="mt-2 text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent dark:text-brand-glass/90">
                  {t.controlValue}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-text/68 dark:text-brand-text/68">
                  {t.controlText}
                </p>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#live-radar"
                className="rounded-full border border-brand-accent/25 bg-brand-accent/10 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-accent transition-colors hover:bg-brand-accent/16"
              >
                {t.viewNews}
              </a>
              <Link
                href="/stack-tooling"
                className="rounded-full border border-brand-glass/10 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-glass/78 transition-colors hover:border-brand-glass/20 hover:text-brand-glass dark:text-brand-glass/78 dark:hover:text-brand-glass"
              >
                {t.exploreStack}
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[30px] border border-brand-glass/10 bg-brand-panel/82 p-6 backdrop-blur-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent-2">
                {t.formatsTitle}
              </p>
              <div className="mt-4 grid gap-3">
                <Link
                  href="#live-radar"
                  className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent-2/24 hover:bg-brand-glass/[0.05]"
                >
                  <p className="text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent-2 dark:text-brand-glass/90">
                    Briefs
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-text/72 dark:text-brand-text/72">{t.briefsDesc}</p>
                </Link>
                <Link
                  href="/bench-comparatifs"
                  className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent-2/24 hover:bg-brand-glass/[0.05]"
                >
                  <p className="text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent-2 dark:text-brand-glass/90">
                    Decryptages
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-text/72 dark:text-brand-text/72">{t.decryptagesDesc}</p>
                </Link>
                <Link
                  href="/build-guides"
                  className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent-2/24 hover:bg-brand-glass/[0.05]"
                >
                  <p className="text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent-2 dark:text-brand-glass/90">
                    Build guides
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-text/72 dark:text-brand-text/72">{t.buildGuidesDesc}</p>
                </Link>
                <Link
                  href="/stack-tooling"
                  className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent-2/24 hover:bg-brand-glass/[0.05]"
                >
                  <p className="text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent-2 dark:text-brand-glass/90">
                    Tool sheets
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-text/72 dark:text-brand-text/72">{t.toolSheetsDesc}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/" className="group rounded-[26px] border border-brand-glass/10 bg-brand-panel/70 p-5 backdrop-blur-xl transition-colors hover:border-brand-accent/30 hover:bg-brand-glass/[0.04]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent transition-colors group-hover:text-brand-accent-2">
              {t.question1Title}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76 dark:text-brand-text/76">
              {t.question1Text}
            </p>
          </Link>
          <Link href="/use-cases" className="group rounded-[26px] border border-brand-glass/10 bg-brand-panel/70 p-5 backdrop-blur-xl transition-colors hover:border-brand-accent/30 hover:bg-brand-glass/[0.04]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent transition-colors group-hover:text-brand-accent-2">
              {t.question2Title}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76 dark:text-brand-text/76">
              {t.question2Text}
            </p>
          </Link>
          <Link href="/stack-tooling" className="group rounded-[26px] border border-brand-glass/10 bg-brand-panel/70 p-5 backdrop-blur-xl transition-colors hover:border-brand-accent/30 hover:bg-brand-glass/[0.04]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent transition-colors group-hover:text-brand-accent-2">
              {t.question3Title}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76 dark:text-brand-text/76">
              {t.question3Text}
            </p>
          </Link>
          <Link href="/security-governance" className="group rounded-[26px] border border-brand-glass/10 bg-brand-panel/70 p-5 backdrop-blur-xl transition-colors hover:border-brand-accent/30 hover:bg-brand-glass/[0.04]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent transition-colors group-hover:text-brand-accent-2">
              {t.question4Title}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76 dark:text-brand-text/76">
              {t.question4Text}
            </p>
          </Link>
        </section>

        <section className="rounded-[34px] border border-brand-glass/10 bg-brand-panel/70 p-6 backdrop-blur-xl md:p-7">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
                Editorial fronts
              </p>
              <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.05em] text-brand-glass dark:text-brand-glass">
                {t.editorialFrontsTitle}
              </h2>
            </div>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-brand-text/74 dark:text-brand-text/74">
              {t.editorialFrontsDesc}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CATEGORIES.map((category) => {
              const detail = categoryDetails[category.id];

              return (
                <Link
                  key={category.id}
                  href={category.urlPath}
                  className="group rounded-[26px] border border-brand-glass/10 bg-brand-overlay/16 p-5 transition-colors hover:border-brand-accent/30 hover:bg-brand-overlay/22"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-accent/90">
                    {detail.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.04em] text-brand-glass transition-colors group-hover:text-brand-accent dark:text-brand-glass">
                    {detail.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76 dark:text-brand-text/76">
                    {detail.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {detail.highlights.map((highlight) => (
                      <li key={highlight} className="text-[13px] text-brand-glass/72 dark:text-brand-glass/72">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="live-radar" className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
                Live feeds
              </p>
              <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.05em] text-brand-glass dark:text-brand-glass">
                {t.radarTitle}
              </h2>
            </div>
            <p className="max-w-[48ch] text-[14px] leading-relaxed text-brand-text/74 dark:text-brand-text/74">
              {t.radarDesc}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {feeds.map((feed) => (
              <FeedCard key={feed.source.id} feed={feed} />
            ))}

            {feeds.length === 0 && (
              <div className="rounded-[30px] border border-dashed border-brand-glass/10 px-6 py-16 text-center text-brand-text/60 dark:text-brand-text/60">
                {t.noFeeds}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
