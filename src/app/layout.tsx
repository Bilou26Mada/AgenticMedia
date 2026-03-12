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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'agentic ai',
    'agents ia',
    'mcp',
    'agents sdk',
    'responses api',
    'ai coding agents',
    'agent governance',
    'agent security',
    'multi-agent systems',
    'agentic ai media',
    'formation agentic ai',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: `${SITE.name} - media agentic AI`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };

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
