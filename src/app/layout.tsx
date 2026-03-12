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

// Technical SEO Agent: Premium keyword-optimized metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Agentic News - Média Agentic AI & Agents IA France',
    template: `%s | ${SITE.name}`,
  },
  description: 'Média francophone #1 sur les agents IA : actualités agentic AI, MCP, use cases, stack technique, benchmarks et formation. Veille IA agentique experte depuis la France.',
  keywords: [
    // Core keywords FR (High Priority)
    'agentic ai',
    'agents ia',
    'intelligence artificielle agents',
    'ia agentique',
    'agent ia',
    'intelligence artificielle',
    // MCP & Protocol (Technical)
    'mcp protocol',
    'model context protocol',
    'mcp servers',
    'anthropic mcp',
    'mcp integration',
    // SDK & Frameworks
    'agents sdk',
    'framework agents ia',
    'langchain agents',
    'auto-gen',
    'crew ai',
    'multi-agent systems',
    // Technical infrastructure
    'ai orchestration',
    'llm agents',
    'ai automation',
    'ai workflow',
    'responses api',
    'ai coding agents',
    'browser agents',
    'mcp servers list',
    'ai tooling',
    // Business & Use Cases
    'agents ia entreprise',
    'ai business automation',
    'use cases ia',
    'agents ia métier',
    'automation intelligente',
    // Governance & Security
    'agent governance',
    'gouvernance ia',
    'agent security',
    'sécurité ia',
    'ai ethics',
    'ai compliance',
    'human in the loop',
    // Learning & Formation FR
    'formation agentic ai',
    'formation agents ia',
    'cours intelligence artificielle',
    'tutoriel ia',
    'apprendre agents ia',
    'bootcamp ia',
    // Location-specific
    'agentic ai france',
    'intelligence artificielle france',
    'média ia français',
    'news ia france',
    // English keywords (for international)
    'agentic ai news',
    'ai agents',
    'autonomous agents',
    'agentic workflow',
    'llm orchestration',
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
    title: 'Agentic News - Le média Agentic AI de référence',
    description: 'Actualités, use cases, stack technique et gouvernance des agents IA. La référence francophone pour maîtriser l\'AI agentic.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Agentic News - Agentic AI Media France',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: 'Média francophone #1 sur les agents IA et l\'AI agentic',
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
