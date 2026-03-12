import { FeedItem as FeedItemType } from '@/lib/feeds';
import { clsx } from 'clsx';

function formatFeedDate(input: string) {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return 'Live';

  const month = new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(date);
  const day = date.getDate().toString();

  return { month, day };
}

export default function FeedItem({
  item,
  variant = 'default',
}: {
  item: FeedItemType;
  variant?: 'default' | 'featured' | 'compact';
}) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  const dateInfo = formatFeedDate(item.pubDate);
  const isLive = dateInfo === 'Live';

  return (
    <li
      className={clsx(
        'group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.015] transition-colors hover:border-brand-accent/35 hover:bg-brand-glass/[0.03]',
        isFeatured ? 'p-5 md:p-6' : isCompact ? 'p-3.5' : 'p-4'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            'font-medium leading-relaxed text-brand-glass/88 transition-colors group-hover:text-brand-accent dark:text-brand-glass/88',
            isFeatured ? 'text-[18px] md:text-[20px]' : isCompact ? 'text-[14px]' : 'text-[15px]'
          )}
        >
          {item.title}
        </a>

        <div
          className={clsx(
            'mt-0.5 flex flex-col items-center justify-center shrink-0 rounded-full border border-brand-glass/10 text-brand-glass/45 dark:text-brand-glass/45',
            isFeatured ? 'h-10 w-10' : 'h-9 w-9'
          )}
        >
          {isLive ? (
            <span className="text-[9px] font-bold uppercase tracking-[0.1em] leading-none">
              Live
            </span>
          ) : (
            <>
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] leading-none">
                {dateInfo.month}
              </span>
              <span className="mt-0.5 text-[11px] font-bold leading-none">
                {dateInfo.day}
              </span>
            </>
          )}
        </div>
      </div>

      {item.contentSnippet && (
        <p
          className={clsx(
            'mt-2 leading-relaxed text-brand-text/72 dark:text-brand-text/72',
            isFeatured ? 'line-clamp-3 text-[14px]' : isCompact ? 'line-clamp-2 text-[12.5px]' : 'line-clamp-2 text-[13px]'
          )}
        >
          {item.contentSnippet}
        </p>
      )}
    </li>
  );
}
