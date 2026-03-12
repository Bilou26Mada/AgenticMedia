import { Metadata } from 'next';
import { CATEGORIES, getFeedsByCategory } from '@/lib/feeds';
import Navigation from '@/components/Navigation';
import CategoryPageContent from '@/components/CategoryPageContent';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';

export const revalidate = 300;

export async function generateMetadata(
  props: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { category } = params;
  const cat = CATEGORIES.find((entry) => entry.id === category);
  if (!cat) return {};

  const canonicalUrl = `${SITE.url}${cat.urlPath}`;

  return {
    title: `${cat.label} | ${SITE.name}`,
    description: SITE.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: `${cat.label} | ${SITE.name}`,
      description: SITE.description,
      siteName: SITE.name,
      locale: 'fr_FR',
      alternateLocale: 'en_US',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: `${cat.label} | ${SITE.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cat.label} | ${SITE.name}`,
      description: SITE.description,
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

  const feeds = await getFeedsByCategory(category);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: validCategory.label,
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
      <CategoryPageContent
        feeds={feeds}
        categoryId={category}
        categoryLabel={validCategory.label}
      />
    </>
  );
}
