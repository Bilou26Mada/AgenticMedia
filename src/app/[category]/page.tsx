import { Metadata } from 'next';
import { CATEGORIES, getFeedsByCategory } from '@/lib/feeds';
import Navigation from '@/components/Navigation';
import CategoryPageContent from '@/components/CategoryPageContent';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';

export const revalidate = 300;

// Content SEO Agent: Dynamic metadata for category pages
export async function generateMetadata(
  props: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { category } = params;
  const cat = CATEGORIES.find((entry) => entry.id === category);

  if (!cat) {
    return {
      title: 'Page non trouvée',
      description: 'Cette page n\'existe pas',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${SITE.url}${cat.urlPath}`;

  // Category-specific SEO metadata
  const categoryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
    'news-agentic': {
      title: 'Actualités Agentic AI - News IA & Agents',
      description: 'Toute l\'actualité des agents IA : sorties de modèles, MCP, SDK, frameworks et outils pour l\'intelligence artificielle agentique.',
      keywords: ['news agentic ai', 'actualité ia', 'agents ia news', 'mcp protocol', 'sdk agents'],
    },
    'use-cases': {
      title: 'Use Cases Agentic AI - Cas d\'usage Entreprise',
      description: 'Découvrez comment les entreprises utilisent les agents IA : développement, support, operations, marketing et plus.',
      keywords: ['use cases ia', 'agents ia entreprise', 'cas usage agentic ai', 'automation ia'],
    },
    'stack-tooling': {
      title: 'Stack & Tooling Agentic AI - Outils & Frameworks',
      description: 'La stack technique des agents IA : MCP servers, mémoire, tracing, orchestration, evals et outils de développement.',
      keywords: ['stack agentic ai', 'mcp servers', 'framework agents', 'tooling ia', 'orchestration agents'],
    },
    'bench-comparatifs': {
      title: 'Benchmarks & Comparatifs Agents IA',
      description: 'Comparatifs et benchmarks des plateformes, frameworks et agents IA. Tests objectifs et analyses détaillées.',
      keywords: ['benchmark agents ia', 'comparatif ia', 'test agents ai', 'evaluation llm'],
    },
    'security-governance': {
      title: 'Sécurité & Gouvernance Agentic AI',
      description: 'Tout sur la sécurité, les permissions, l\'audit et la gouvernance des systèmes d\'agents IA en entreprise.',
      keywords: ['sécurité ia', 'gouvernance agents', 'audit ia', 'compliance agents'],
    },
    'build-guides': {
      title: 'Build Guides - Tutoriels Agentic AI',
      description: 'Guides pratiques pour construire des agents IA : tutoriels, patterns d\'architecture et best practices.',
      keywords: ['tutoriel agents ia', 'guide agentic ai', 'créer agent ia', 'formation ia'],
    },
    'formation': {
      title: 'Formation Agentic AI - Cours & Ressources',
      description: 'Ressources de formation sur les agents IA : cours, learning paths, bootcamps et guides d\'apprentissage.',
      keywords: ['formation agentic ai', 'cours agents ia', 'learning path ia', 'bootcamp ia'],
    },
  };

  const meta = categoryMeta[category] || {
    title: `${cat.label} | ${SITE.name}`,
    description: SITE.description,
    keywords: [],
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords, 'agentic ai', 'agents ia', SITE.name],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fr-FR': canonicalUrl,
        'en-US': `${SITE.url}/en${cat.urlPath}`,
      },
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: meta.title,
      description: meta.description,
      siteName: SITE.name,
      locale: 'fr_FR',
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: meta.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-default.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return CATEGORIES
    .filter((category) => category.id !== 'news-agentic')
    .map((category) => ({
      category: category.id,
    }));
}

// Content SEO Agent: Category page structured data
function generateCategoryJsonLd(category: string, categoryLabel: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE.url}/${category}`,
        url: `${SITE.url}/${category}`,
        name: `${categoryLabel} | ${SITE.name}`,
        isPartOf: { '@id': `${SITE.url}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: SITE.name,
            item: SITE.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: categoryLabel,
            item: `${SITE.url}/${category}`,
          },
        ],
      },
    ],
  };
}

export default async function CategoryPage(
  props: { params: Promise<{ category: string }> }
) {
  const params = await props.params;
  const { category } = params;

  const validCategory = CATEGORIES.find((entry) => entry.id === category);
  if (!validCategory) notFound();

  const feeds = await getFeedsByCategory(category);

  const jsonLd = generateCategoryJsonLd(category, validCategory.label);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
