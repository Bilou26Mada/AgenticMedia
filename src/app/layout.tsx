import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import ThemeToggle from '@/components/ThemeToggle';

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
        url: '/og-default.png', // TODO: Create a 1200x630 PNG image in /public/ folder
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
        <div className="global-bg-scene pointer-events-none fixed inset-0 -z-20" />
        <div className="global-bg-grid pointer-events-none fixed inset-0 -z-10" />

        <main className="relative mx-auto max-w-[1240px] px-4 pb-16 pt-28 md:px-6">
          <header className="mb-10 flex flex-col gap-6 border-b border-brand-glass/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[720px]">
              <span className="inline-flex rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                Agentic AI media
              </span>
              <p className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-brand-glass md:text-[36px]">
                {SITE.name}
              </p>
              <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-text/80">
                {SITE.description}
              </p>
            </div>

            <div className="flex w-full max-w-[420px] flex-col gap-3">
              <div className="flex justify-start md:justify-end">
                <ThemeToggle variant="subtle" />
              </div>
              <div className="grid gap-3 text-right text-[12px] md:grid-cols-2 md:text-left">
                <div className="rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.025] px-4 py-3">
                  <p className="font-mono uppercase tracking-[0.22em] text-brand-text/48">Radar</p>
                  <p className="mt-1 text-brand-glass/82">News, stack, bench and governance in one flow.</p>
                </div>
                <div className="rounded-2xl border border-brand-glass/10 bg-brand-glass/[0.025] px-4 py-3">
                  <p className="font-mono uppercase tracking-[0.22em] text-brand-text/48">Angle</p>
                  <p className="mt-1 text-brand-glass/82">From launch headline to operational verdict.</p>
                </div>
              </div>
            </div>
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
