import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ResearchHighlight from '@/components/ResearchHighlight';
import HomePageContent from '@/components/HomePageContent';
import { getFeedsByCategory } from '@/lib/feeds';
import { SITE } from '@/lib/site';

export const revalidate = 60;

// Content SEO Agent: Optimized metadata for homepage
export const metadata: Metadata = {
  title: {
    default: 'Agentic News - Média Agentic AI & Agents IA',
    template: '%s | Agentic News',
  },
  description: 'Le média francophone de référence sur les agents IA : actualités, use cases, stack technique, benchmarks et guides pour maîtriser l\'intelligence artificielle agentique.',
  keywords: [
    'agentic ai',
    'agents ia',
    'intelligence artificielle agents',
    'mcp protocol',
    'actualité ia',
    'news agentic ai',
    'framework agents ia',
    'automation ia',
    'multi-agent systems',
    'formation agentic ai',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    url: SITE.url,
    siteName: SITE.name,
    title: 'Agentic News - Le média Agentic AI de référence',
    description: 'Actualités, use cases, stack technique et gouvernance des agents IA. La référence francophone pour maîtriser l\'AI agentic.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Agentic News - Média Agentic AI',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: 'Le média francophone de référence sur les agents IA',
    images: ['/og-default.png'],
    creator: '@agenticnews',
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      'fr-FR': SITE.url,
      'en-US': `${SITE.url}/en`,
    },
  },
};

// Content SEO Agent: Structured data for homepage
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}/`,
      url: `${SITE.url}/`,
      name: 'Agentic News - Actualités Agentic AI',
      description: 'Le média francophone de référence sur les agents IA',
      isPartOf: { '@id': `${SITE.url}/#website` },
    },
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}/#collection`,
      name: 'Agentic AI News Collection',
      about: {
        '@type': 'Thing',
        name: 'Agentic AI',
      },
    },
  ],
};

export default async function Home() {
  const feeds = await getFeedsByCategory('news-agentic');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ResearchHighlight />
      <HomePageContent feeds={feeds} />
    </>
  );
}
