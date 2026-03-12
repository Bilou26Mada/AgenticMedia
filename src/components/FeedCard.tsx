'use client';

import { CategorizedFeed, LANG_LABEL, SOURCE_TYPE_LABEL } from '@/lib/feeds';
import FeedItem from './FeedItem';
import { useLanguage } from '@/context/LanguageContext';

export default function FeedCard({ feed }: { feed: CategorizedFeed }) {
  const { t } = useLanguage();

  const leadItem = feed.today[0] ?? feed.previous[0];
  const queueItems = feed.today.length > 0 ? feed.today.slice(1, 4) : [];
  const archiveItems = feed.today.length > 0 ? feed.previous.slice(0, 6) : feed.previous.slice(1, 7);

  const sourceTypeLabels: Record<string, string> = {
    'official': t.sourceOfficial,
    'builder': t.sourceBuilder,
    'analysis': t.sourceAnalysis,
  };

  return (
    <section className="overflow-hidden rounded-[30px] border border-brand-glass/10 bg-brand-panel/80 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <a
            href={feed.source.homeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-4 py-2 text-sm font-semibold text-brand-glass transition-colors hover:border-brand-accent/35 hover:text-brand-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(125,249,255,0.2),rgba(199,255,110,0.18))] text-[11px] tracking-[0.2em] text-brand-glass/90 dark:text-brand-glass/90">
              {feed.source.badge}
            </span>
            <span>{feed.source.name}</span>
          </a>

          <div>
            <p className="text-[13px] uppercase tracking-[0.22em] text-brand-text/55 dark:text-brand-text/55">
              {t.sourceLabel} : {sourceTypeLabels[feed.source.sourceType]}
            </p>
            <p className="mt-1 max-w-[52ch] text-[14px] leading-relaxed text-brand-text/80 dark:text-brand-text/80">
              {feed.source.focus}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-brand-glass/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-glass/55 dark:text-brand-glass/55">
            {LANG_LABEL[feed.source.lang ?? 'en']}
          </span>
          <span className="rounded-full border border-brand-accent/20 bg-brand-accent/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {feed.hasUpdates ? t.activeToday : t.onWatch}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {leadItem && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-glass/72 dark:text-brand-glass/72">
                {feed.today.length > 0 ? t.majorSignal : t.latest24h}
              </h3>
              <span className="text-[11px] text-brand-text/55 dark:text-brand-text/55">
                {feed.today.length > 0 ? t.today : t.archivesLabel}
              </span>
            </div>

            <ul>
              <FeedItem item={leadItem} variant="featured" />
            </ul>
          </div>
        )}

        <div className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-glass/72 dark:text-brand-glass/72">
                {t.latest24h}
              </h3>
              <span className="text-[11px] text-brand-text/55 dark:text-brand-text/55">
                {feed.today.length} {t.signals}{feed.today.length > 1 ? 's' : ''}
              </span>
            </div>

            {queueItems.length > 0 ? (
              <ul className="grid gap-3">
                {queueItems.map((item) => (
                  <FeedItem key={item.id} item={item} variant="compact" />
                ))}
              </ul>
            ) : (
              <div className="rounded-2xl border border-dashed border-brand-glass/10 px-4 py-5 text-sm text-brand-text/60 dark:text-brand-text/60">
                {feed.today.length > 0
                  ? t.noUpdateToday
                  : t.noHistory}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-glass/72 dark:text-brand-glass/72">
                {t.archives}
              </h3>
              <span className="text-[11px] text-brand-text/55 dark:text-brand-text/55">
                {feed.previous.length} {t.archivedArticles}
              </span>
            </div>

            {archiveItems.length > 0 ? (
              <ul className="grid gap-3 md:grid-cols-2">
                {archiveItems.map((item) => (
                  <FeedItem key={item.id} item={item} variant="compact" />
                ))}
              </ul>
            ) : (
              <div className="rounded-2xl border border-dashed border-brand-glass/10 px-4 py-5 text-sm text-brand-text/60 dark:text-brand-text/60">
                {t.noArchiveHistory}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
