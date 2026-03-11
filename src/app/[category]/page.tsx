import { Metadata } from 'next';
import { CATEGORIES, getFeedsByCategory } from '@/lib/feeds';
import Navigation from '@/components/Navigation';
import FeedCard from '@/components/FeedCard';
import { notFound } from 'next/navigation';
import { CATEGORY_DETAILS, SITE } from '@/lib/site';

export const revalidate = 300;

export async function generateMetadata(
  props: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { category } = params;
  const cat = CATEGORIES.find((entry) => entry.id === category);
  if (!cat) return {};

  const detail = CATEGORY_DETAILS[category];
  if (!detail) return {};

  const canonicalUrl = `${SITE.url}${cat.urlPath}`;

  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
    keywords: detail.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: detail.seoTitle,
      description: detail.seoDescription,
      siteName: SITE.name,
      locale: 'fr_FR',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: detail.seoTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: detail.seoTitle,
      description: detail.seoDescription,
      images: ['/og-default.png'],
    },
  };
}

export function generateStaticParams() {
  return CATEGORIES.filter((category) => category.id !== 'news-agentic').map((category) => ({
    category: category.id,
  }));
}

export default async function CategoryPage(
  props: { params: Promise<{ category: string }> }
) {
  const params = await props.params;
  const { category } = params;

  const validCategory = CATEGORIES.find((entry) => entry.id === category);
  if (!validCategory) notFound();

  const detail = CATEGORY_DETAILS[category];
  if (!detail) notFound();

  const feeds = await getFeedsByCategory(category);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: detail.title,
        item: `${SITE.url}${validCategory.urlPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />

      <section className="mb-8 grid gap-6 rounded-[34px] border border-white/8 bg-brand-panel/78 p-6 backdrop-blur-xl md:grid-cols-[1.05fr_0.95fr] md:p-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
            {detail.eyebrow}
          </p>
          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.05em] text-white md:text-[48px]">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-brand-text/80">
            {detail.description}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[26px] border border-white/8 bg-black/18 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48">
              Core question
            </p>
            <p className="mt-3 text-[18px] font-medium leading-snug text-white/90">
              {detail.question}
            </p>
          </div>

          <div className="rounded-[26px] border border-white/8 bg-black/18 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48">
              Coverage
            </p>
            <ul className="mt-3 space-y-2">
              {detail.highlights.map((highlight) => (
                <li key={highlight} className="text-[14px] leading-relaxed text-brand-text/78">
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
          <div className="rounded-[30px] border border-dashed border-white/10 px-6 py-20 text-center text-brand-text/60">
            Aucun flux disponible pour le moment.
          </div>
        )}
      </div>
    </>
  );
}
