import { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES, getFeedsByCategory } from '@/lib/feeds';
import Navigation from '@/components/Navigation';
import FeedCard from '@/components/FeedCard';
import ResearchHighlight from '@/components/ResearchHighlight';
import {
  CATEGORY_DETAILS,
  EDITORIAL_FORMATS,
  HOME_METRICS,
  HOME_QUESTIONS,
  SITE,
} from '@/lib/site';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Agentic AI news, stack and build guides',
  description: SITE.description,
  keywords: ['agentic ai', 'mcp', 'agents sdk', 'build guides', 'agent governance', 'browser agents', 'formation agentic ai'],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: 'website',
    url: SITE.url,
    title: `${SITE.name} | Media agentic AI`,
    description: SITE.description,
    siteName: SITE.name,
    locale: 'fr_FR',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: `${SITE.name} - Agentic AI media` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Agentic AI`,
    description: SITE.description,
    images: ['/og-default.png'],
  },
};

export default async function Home() {
  const feeds = await getFeedsByCategory('news-agentic');

  return (
    <>
      <Navigation />

      <div className="flex flex-col gap-8">
        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[34px] border border-brand-glass/10 bg-brand-panel/82 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
            <div className="flex flex-wrap gap-2">
              {HOME_METRICS.map((metric) => (
                <Link
                  key={metric.title}
                  href={metric.href}
                  className="rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-glass/60 transition-colors hover:border-brand-glass/18 hover:bg-brand-glass/[0.06] hover:text-brand-glass"
                >
                  {metric.title}
                </Link>
              ))}
            </div>

            <h1 className="mt-6 max-w-[14ch] text-[44px] font-semibold leading-[0.92] tracking-[-0.06em] text-brand-glass md:text-[68px]">
              Le media francophone pense pour l agentic AI.
            </h1>

            <p className="mt-5 max-w-[64ch] text-[16px] leading-relaxed text-brand-text/82 md:text-[18px]">
              {SITE.description}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {HOME_METRICS.map((metric) => (
                <Link
                  key={metric.title}
                  href={metric.href}
                  className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent/24 hover:bg-brand-glass/[0.05]"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
                    {metric.title}
                  </p>
                  <p className="mt-2 text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-text/68">
                    {metric.text}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#live-radar"
                className="rounded-full border border-brand-accent/25 bg-brand-accent/10 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-accent transition-colors hover:bg-brand-accent/16"
              >
                Voir les news
              </a>
              <Link
                href="/stack-tooling"
                className="rounded-full border border-brand-glass/10 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-glass/78 transition-colors hover:border-brand-glass/20 hover:text-brand-glass"
              >
                Explorer la stack
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[30px] border border-brand-glass/10 bg-brand-panel/82 p-6 backdrop-blur-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent-2">
                Formats
              </p>
              <div className="mt-4 grid gap-3">
                {EDITORIAL_FORMATS.map((format) => (
                  <Link
                    key={format.title}
                    href={format.href}
                    className="group rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.02] p-4 transition-colors hover:border-brand-accent-2/24 hover:bg-brand-glass/[0.05]"
                  >
                    <p className="text-[15px] font-medium text-brand-glass/90 transition-colors group-hover:text-brand-accent-2">
                       {format.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-brand-text/72">{format.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {HOME_QUESTIONS.map((question) => (
            <Link key={question.title} href={question.href} className="group rounded-[26px] border border-brand-glass/10 bg-brand-panel/70 p-5 backdrop-blur-xl transition-colors hover:border-brand-accent/30 hover:bg-brand-glass/[0.04]">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent transition-colors group-hover:text-brand-accent-2">
                {question.title}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76">
                {question.text}
              </p>
            </Link>
          ))}
        </section>

        <section className="rounded-[34px] border border-brand-glass/10 bg-brand-panel/70 p-6 backdrop-blur-xl md:p-7">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
                Editorial fronts
              </p>
              <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.05em] text-brand-glass">
                Les verticales qui couvrent le cycle complet.
              </h2>
            </div>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-brand-text/74">
              Le site ne se limite pas a l annonce. Chaque rubrique suit un moment different de la vie d un systeme agentique, de la sortie produit a la gouvernance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CATEGORIES.map((category) => {
              const detail = CATEGORY_DETAILS[category.id];

              return (
                <Link
                  key={category.id}
                  href={category.urlPath}
                  className="group rounded-[26px] border border-brand-glass/10 bg-brand-overlay/16 p-5 transition-colors hover:border-brand-accent/30 hover:bg-brand-overlay/22"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-accent/90">
                    {detail.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.04em] text-brand-glass transition-colors group-hover:text-brand-accent">
                    {detail.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-text/76">
                    {detail.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {detail.highlights.map((highlight) => (
                      <li key={highlight} className="text-[13px] text-brand-glass/72">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </section>

        <ResearchHighlight />

        <section id="live-radar" className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
                Live feeds
              </p>
              <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.05em] text-brand-glass">
                Radar live sur les signaux qui lancent la conversation.
              </h2>
            </div>
            <p className="max-w-[48ch] text-[14px] leading-relaxed text-brand-text/74">
              Ici, la lecture reste immediate: un flux RSS ultra-rapide, organise pour une veille agentic AI claire et exploitable.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {feeds.map((feed) => (
              <FeedCard key={feed.source.id} feed={feed} />
            ))}

            {feeds.length === 0 && (
              <div className="rounded-[30px] border border-dashed border-brand-glass/10 px-6 py-16 text-center text-brand-text/60">
                Aucun flux disponible pour le moment.
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
