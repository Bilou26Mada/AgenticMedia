import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ResearchHighlight from '@/components/ResearchHighlight';
import HomePageContent from '@/components/HomePageContent';
import { getFeedsByCategory } from '@/lib/feeds';
import { SITE } from '@/lib/site';

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
    alternateLocale: 'en_US',
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
      <ResearchHighlight />
      <HomePageContent feeds={feeds} />
    </>
  );
}
