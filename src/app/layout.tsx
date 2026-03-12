import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import { LanguageProvider } from '@/context/LanguageContext';
import LayoutHeader from '@/components/LayoutHeader';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
});

// Technical SEO Agent: Enhanced metadata for elite SEO
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Agentic AI Media & News`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Le media francophone de référence sur les agents IA : actualités, use cases, stack technique, benchmarks, gouvernance et guides pratiques pour maîtriser l\'AI agentic.',
  keywords: [
    // Core keywords FR
    'agentic ai',
    'agents ia',
    'intelligence artificielle agents',
    'mcp protocol',
    'model context protocol',
    'agents sdk',
    'multi-agent systems',
    'ai automation',
    'agent governance',
    'agent security',
    // English keywords
    'agentic ai news',
    'ai agents',
    'autonomous agents',
    'ai orchestration',
    'llm agents',
    'ai workflow automation',
    // Technical keywords
    'responses api',
    'ai coding agents',
    'browser agents',
    'mcp servers',
    'ai tooling',
    'formation agentic ai',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'en_GB'],
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} - Le média Agentic AI de référence`,
    description: 'Actualités, use cases, stack technique et gouvernance des agents IA. La référence francophone pour maîtriser l\'AI agentic.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: `${SITE.name} - Agentic AI Media & News`,
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
  verification: {
    google: 'your-google-search-console-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Technical SEO Agent: Enhanced Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
        width: 600,
        height: 60,
      },
      sameAs: [
        'https://twitter.com/agenticnews',
        'https://linkedin.com/company/agenticnews',
        'https://github.com/agenticnews',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: 'Le média francophone de référence sur les agents IA',
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: ['fr-FR', 'en-US'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE.url}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'NewsMediaOrganization',
      '@id': `${SITE.url}/#newsmedia`,
      name: SITE.name,
      url: SITE.url,
      motto: 'Agentic AI Media',
      description: 'Le média francophone qui suit ce que les agents IA savent réellement faire',
      sameAs: [
        'https://twitter.com/agenticnews',
        'https://linkedin.com/company/agenticnews',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}/#webpage`,
      url: SITE.url,
      name: SITE.name,
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: {
        '@type': 'Thing',
        name: 'Agentic AI',
        description: 'Intelligence Artificielle Agentique',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem('agentique-theme');
                  if (storedTheme === 'light' || storedTheme === 'dark') {
                    document.documentElement.dataset.theme = storedTheme;
                  }
                } catch (error) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Technical SEO Agent: Additional meta tags */}
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#05070a" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SITE.name} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-text">
        <LanguageProvider>
          <div className="global-bg-scene pointer-events-none fixed inset-0 -z-20" />
          <div className="global-bg-grid pointer-events-none fixed inset-0 -z-10" />

          <main className="relative mx-auto max-w-[1240px] px-4 pb-16 pt-28 md:px-6">
            <LayoutHeader />
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
