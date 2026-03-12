import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ResearchHighlight from '@/components/ResearchHighlight';
import HomePageContent from '@/components/HomePageContent';
import { getFeedsByCategory } from '@/lib/feeds';
import { SITE } from '@/lib/site';

export const revalidate = 60;

// Content SEO Agent: Premium keyword-optimized metadata
export const metadata: Metadata = {
  title: {
    default: 'Agentic News - Actualités Agents IA & Agentic AI France',
    template: '%s | Agentic News',
  },
  description: 'Média francophone #1 sur les agents IA : actualités agentic AI, MCP, use cases entreprise, stack technique, benchmarks et formation. Veille IA agentique quotidienne.',
  keywords: [
    // Core keywords - High volume
    'agentic ai',
    'agents ia',
    'intelligence artificielle agents',
    'ia agentique',
    'agent ia',
    // News & Actualité
    'actualité ia',
    'news agentic ai',
    'veille intelligence artificielle',
    'news ia france',
    // MCP & Protocol
    'mcp protocol',
    'model context protocol',
    'mcp servers',
    'mcp anthropic',
    // Technical keywords
    'agents sdk',
    'framework agents ia',
    'multi-agent systems',
    'llm agents',
    'ai orchestration',
    'ai automation',
    // Use cases & Business
    'agents ia entreprise',
    'automation ia',
    'ai workflow',
    'agents ia métier',
    // Governance & Security
    'gouvernance ia',
    'agent governance',
    'sécurité agents ia',
    'ai security',
    // Learning & Formation
    'formation agentic ai',
    'cours agents ia',
    'tutoriel ia',
    'apprendre agentic ai',
    // French-specific
    'agentic ai france',
    'intelligence artificielle france',
    'média ia français',
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
    title: 'Agentic News - Le média Agentic AI de référence en France',
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
      <HomePageContent feeds={feeds} />
      <ResearchHighlight />
    </>
  );
}
