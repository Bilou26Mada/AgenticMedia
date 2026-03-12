import { Metadata } from 'next';
import { CATEGORIES, getFeedsByCategory } from '@/lib/feeds';
import Navigation from '@/components/Navigation';
import CategoryPageContent from '@/components/CategoryPageContent';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';

export const revalidate = 300;

// Content SEO Agent: Premium dynamic metadata for category pages
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

  // Content SEO Agent: Premium category-specific metadata with long-tail keywords
  const categoryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
    'news-agentic': {
      title: 'Actualités Agentic AI - News IA, MCP & Agents France',
      description: 'Veille quotidienne sur les agents IA : sorties de modèles, MCP, SDK, frameworks. Toute l\'actualité agentic AI en français depuis la France.',
      keywords: [
        'news agentic ai',
        'actualité agents ia',
        'news ia france',
        'mcp protocol news',
        'agents sdk news',
        'sorties modèles ia',
        'anthropic claude news',
        'openai agents news',
        'google ai news',
        'veille intelligence artificielle',
      ],
    },
    'use-cases': {
      title: 'Use Cases Agents IA - Cas d\'Usage Entreprise & ROI',
      description: 'Découvrez comment les entreprises utilisent les agents IA : développement, support client, operations, marketing. Retours terrain et ROI mesuré.',
      keywords: [
        'use cases ia',
        'cas usage agents ia',
        'agents ia entreprise',
        'roi intelligence artificielle',
        'automation ia métier',
        'agents ia support client',
        'ai coding agents',
        'agents ia operations',
        'marketing automation ia',
        'agents ia finance',
      ],
    },
    'stack-tooling': {
      title: 'Stack & Tooling Agentic AI - MCP, Orchestration & Outils',
      description: 'La stack technique des agents IA : serveurs MCP, mémoire, tracing, orchestration, evals. Comparatifs d\'outils et guides d\'implémentation.',
      keywords: [
        'stack agentic ai',
        'mcp servers',
        'orchestration agents ia',
        'framework agents',
        'langchain',
        'auto-gen microsoft',
        'crew ai',
        'ai tracing',
        'ai evals',
        'memory agents ia',
        'ai observability',
        'tooling ia',
      ],
    },
    'bench-comparatifs': {
      title: 'Benchmarks & Comparatifs Agents IA - Tests & Verdicts',
      description: 'Comparatifs objectifs des plateformes et frameworks d\'agents IA. Benchmarks, tests de performance et analyse coût/performance.',
      keywords: [
        'benchmark agents ia',
        'comparatif ia',
        'test agents ai',
        'évaluation llm',
        'comparatif framework ia',
        'performance agents ia',
        'coût agents ia',
        'maturité ia',
        'agent washing',
        'verdict ia',
      ],
    },
    'security-governance': {
      title: 'Sécurité & Gouvernance Agents IA - Compliance & Audit',
      description: 'Tout sur la sécurité, permissions, audit et gouvernance des systèmes d\'agents IA. Policy controls, secrets management et supervision humaine.',
      keywords: [
        'sécurité ia',
        'gouvernance agents',
        'audit intelligence artificielle',
        'compliance ia',
        'agent security',
        'permissions agents ia',
        'policy controls ia',
        'human in the loop',
        'secrets management ia',
        'ai ethics',
        'ai risk management',
      ],
    },
    'build-guides': {
      title: 'Build Guides - Tutoriels & Guides Pratiques Agentic AI',
      description: 'Guides pas-à-pas pour construire des agents IA : tutoriels MCP, workflows multi-agents, evals en production. Code et best practices.',
      keywords: [
        'tutoriel agents ia',
        'guide agentic ai',
        'créer agent ia',
        'formation ia pratique',
        'mcp tutorial',
        'workflow multi-agents',
        'agents ia production',
        'code agents ia',
        'best practices ia',
        'implémentation agents',
      ],
    },
    'formation': {
      title: 'Formation Agentic AI - Cours, Bootcamps & Ressources IA',
      description: 'Ressources complètes pour se former aux agents IA : cours en ligne, learning paths, bootcamps, certifications. Montez en compétence sur l\'AI agentic.',
      keywords: [
        'formation agentic ai',
        'cours agents ia',
        'learning path ia',
        'bootcamp intelligence artificielle',
        'certification ia',
        'apprendre agents ia',
        'formation continue ia',
        'école ia france',
        'mooc agents ia',
        'ressources pédagogiques ia',
      ],
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
    keywords: [...meta.keywords, 'agentic ai', 'agents ia', 'intelligence artificielle', SITE.name],
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
