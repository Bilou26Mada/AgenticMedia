import type { CategoryId } from './feeds';

export const SITE = {
  name: 'Agentique',
  url: 'https://agentique.media',
  shortDescription: 'Le media francophone de reference sur les agents IA, leur stack, leurs usages reels et leur gouvernance.',
  description:
    'Le media francophone qui suit ce que les agents savent reellement faire, avec quels outils, a quels couts, et avec quels risques.',
};

export interface CategoryDetail {
  eyebrow: string;
  title: string;
  label: string;
  description: string;
  question: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  highlights: string[];
}

export const CATEGORY_DETAILS: Record<string, CategoryDetail> = {
  'news-agentic': {
    eyebrow: 'Live brief',
    title: 'News Agentic',
    label: 'News',
    description:
      'Sorties produit, modeles, protocoles, SDK, IDE agents, browser agents, voice agents et computer use.',
    question: 'Quoi de neuf, et qu est-ce qui est vraiment exploitable ?',
    seoTitle: 'News Agentic AI | Actualites agents IA, MCP, SDK et tooling',
    seoDescription:
      'Toute l actualite agentic AI en francais : sorties produits, protocoles MCP, SDK, agents IDE, browser agents et orchestration.',
    keywords: ['agentic ai', 'actualites agents ia', 'mcp', 'agents sdk', 'responses api', 'computer use'],
    highlights: ['Protocoles et standards', 'Lancements produits', 'Agents de dev et browser agents'],
  },
  'use-cases': {
    eyebrow: 'Field notes',
    title: 'Use Cases Reels',
    label: 'Use Cases',
    description:
      'Cas d usage concrets en software engineering, support client, ops, marketing, sales, finance et research ops.',
    question: 'A quoi cela sert dans la pratique, au-dela des demos ?',
    seoTitle: 'Use Cases Agentic AI | Cas reels, ROI et workflows agents',
    seoDescription:
      'Use cases agentic AI : developpement logiciel, support, operations, marketing et finance. Ce qui marche, a quel cout et avec quelles limites.',
    keywords: ['use cases agentic ai', 'roi agents ia', 'ai coding agents', 'support client agents', 'operations ai'],
    highlights: ['Retour terrain par fonction', 'ROI et friction d adoption', 'Limites operationnelles'],
  },
  'stack-tooling': {
    eyebrow: 'Builder stack',
    title: 'Stack & Tooling',
    label: 'Stack',
    description:
      'MCP servers, frameworks, memory, evals, tracing, orchestration, identity, sandboxing et observability.',
    question: 'Comment on branche la stack sans tomber dans le bricolage ?',
    seoTitle: 'Stack Agentic AI | MCP, orchestration, memory, evals et tracing',
    seoDescription:
      'La stack agentic AI en clair : MCP, frameworks, memory, evals, tracing, orchestration, identity et sandboxing.',
    keywords: ['stack agentic ai', 'mcp servers', 'agent orchestration', 'ai evals', 'agent observability'],
    highlights: ['Architecture et outillage', 'Memory, tracing, evals', 'Identity et sandboxing'],
  },
  'bench-comparatifs': {
    eyebrow: 'Reality check',
    title: 'Bench & Comparatifs',
    label: 'Bench',
    description:
      'Benchmarks, comparatifs de plateformes, maturite produit, limites, couts et ecarts entre promesse marketing et execution.',
    question: 'Qui fait quoi pour de vrai, et dans quelles conditions ?',
    seoTitle: 'Bench Agentic AI | Comparatifs, maturite, couts et execution',
    seoDescription:
      'Bench et comparatifs agentic AI : plateformes, frameworks, agents IDE, browser agents, couts, maturite et limites reellement observees.',
    keywords: ['bench agentic ai', 'comparatif agents ia', 'mono agent vs multi agent', 'agent ide', 'browser agent'],
    highlights: ['Comparatifs produits', 'Couts et maturite', 'Signal vs agent washing'],
  },
  'security-governance': {
    eyebrow: 'Control layer',
    title: 'Governance & Security',
    label: 'Governance',
    description:
      'Permissions, audit, secret management, tool-use hallucinations, policy controls, identity et human-in-the-loop.',
    question: 'Est-ce serieux pour une equipe, un SI ou une production ?',
    seoTitle: 'Securite Agentic AI | Gouvernance, permissions, audit et controle',
    seoDescription:
      'La couche de controle des agents IA : securite, permissions, identity, audit, secrets, gouvernance et supervision humaine.',
    keywords: ['agent security', 'ai agent governance', 'permissions agents ia', 'agent identity', 'human in the loop'],
    highlights: ['Permissions et policy controls', 'Identity, audit, secrets', 'Garde-fous en production'],
  },
  'build-guides': {
    eyebrow: 'Ship it',
    title: 'Build Guides',
    label: 'Build',
    description:
      'Tutoriels concrets pour lancer un agent de veille, brancher MCP, tracer un workflow multi-agent et evaluer un agent en prod.',
    question: 'Comment construire, tester et lancer un systeme agentique propre ?',
    seoTitle: 'Build Guides Agentic AI | Tutoriels MCP, evals et workflows agents',
    seoDescription:
      'Guides agentic AI en francais : lancer un agent de veille, connecter MCP, tracer des workflows multi-agents et evaluer en production.',
    keywords: ['tutoriel agentic ai', 'guide mcp', 'workflow multi agent', 'evaluer un agent', 'agent en production'],
    highlights: ['Guides pas a pas', 'Patterns de build', 'Evaluation avant prod'],
  },
  formation: {
    eyebrow: 'Learning loop',
    title: 'Formation & Learning',
    label: 'Formation',
    description:
      'Cours, tutoriels, learning paths, bootcamps teams et ressources pour monter en competence sur les agents IA, MCP et les workflows multi-agents.',
    question: 'Comment former rapidement une equipe ou monter en competence sans se noyer dans le bruit ?',
    seoTitle: 'Formation Agentic AI | Tutoriels, cours et learning paths sur les agents IA',
    seoDescription:
      'Ressources de formation agentic AI : cours, tutoriels, learning paths, onboarding d equipe et bonnes bases pour comprendre la stack et les usages.',
    keywords: ['formation agentic ai', 'cours agents ia', 'learning path llm', 'formation mcp', 'tutoriel agents ia'],
    highlights: ['Cours et learning paths', 'Tutoriels pour monter en niveau', 'Onboarding equipe et acculturation'],
  },
};

export const HOME_METRICS = [
  {
    title: 'Signal',
    value: 'News, SDK, MCP, browser agents',
    text: 'Tout ce qui bouge vite et tout ce qui devient standard.',
    href: '#live-radar',
  },
  {
    title: 'Execution',
    value: 'Use cases, tooling, evals',
    text: 'Ce que les equipes branchent vraiment, et le niveau de maturite observe.',
    href: '/use-cases',
  },
  {
    title: 'Control',
    value: 'Permissions, audit, secrets',
    text: 'La couche gouvernance qui separe une demo d un systeme exploitable.',
    href: '/security-governance',
  },
];

export const HOME_QUESTIONS = [
  {
    title: 'Quoi de neuf ?',
    text: 'Sorties produit, standards d integration, evolutions des SDK et plateformes agents.',
    href: '/',
  },
  {
    title: 'A quoi ca sert ?',
    text: 'Cas reels en dev, support, ops, marketing et fonctions metier a fort volume.',
    href: '/use-cases',
  },
  {
    title: 'Comment on le branche ?',
    text: 'Stack, memory, evals, tracing, orchestration, identity, sandboxing.',
    href: '/stack-tooling',
  },
  {
    title: 'Est-ce serieux ?',
    text: 'Bench, couts, maturite, securite, policy controls et human-in-the-loop.',
    href: '/security-governance',
  },
];

export const EDITORIAL_FORMATS = [
  {
    title: 'Briefs',
    text: 'Des brives tres courtes pour capter les signaux sans passer la journee dans le flux.',
    href: '/',
  },
  {
    title: 'Decryptages',
    text: 'Le vrai impact produit, le niveau de maturite et les angles morts de chaque annonce.',
    href: '/bench-comparatifs',
  },
  {
    title: 'Build guides',
    text: 'Des tutoriels concrets pour brancher un agent, poser des garde-fous et mesurer l execution.',
    href: '/build-guides',
  },
  {
    title: 'Tool sheets',
    text: 'Prix, cas d usage, limites et verdict operationnel par outil ou plateforme.',
    href: '/stack-tooling',
  },
];

export const RADAR_AXES = [
  {
    title: 'Type',
    values: ['Framework', 'Protocol', 'Model', 'IDE', 'Browser', 'Infra', 'Security'],
  },
  {
    title: 'Usage',
    values: ['Dev', 'Support', 'Ops', 'Marketing', 'Research', 'Enterprise'],
  },
  {
    title: 'Maturite',
    values: ['Experimental', 'Beta', 'Production'],
  },
  {
    title: 'Verdict',
    values: ['Hype', 'Promising', 'Solid'],
  },
];

export interface RadarBlip {
  id: string;
  label: string;
  note: string;
  x: string;
  y: string;
  tone: 'cyan' | 'lime' | 'warm';
  categoryId: CategoryId;
  keywords: string[];
}

export interface RadarStory {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  sourceName: string;
  sourceBadge: string;
  categoryId: CategoryId;
  categoryLabel: string;
  categoryUrl: string;
}

export interface RadarBlipWithStories extends RadarBlip {
  categoryLabel: string;
  categoryUrl: string;
  stories: RadarStory[];
}

export const RADAR_BLIPS: RadarBlip[] = [
  {
    id: '01',
    label: 'Protocol layer',
    note: 'MCP / tool use / response loops',
    x: '26%',
    y: '28%',
    tone: 'cyan',
    categoryId: 'news-agentic',
    keywords: ['mcp', 'protocol', 'response', 'tool', 'computer use', 'model context'],
  },
  {
    id: '02',
    label: 'Builder stack',
    note: 'Memory / tracing / orchestration',
    x: '70%',
    y: '24%',
    tone: 'lime',
    categoryId: 'stack-tooling',
    keywords: ['memory', 'tracing', 'trace', 'orchestration', 'framework', 'tooling', 'observability'],
  },
  {
    id: '03',
    label: 'Execution',
    note: 'Dev / support / ops agents',
    x: '74%',
    y: '58%',
    tone: 'cyan',
    categoryId: 'use-cases',
    keywords: ['developer', 'coding', 'support', 'ops', 'workflow', 'customer', 'sales', 'copilot'],
  },
  {
    id: '04',
    label: 'Control',
    note: 'Identity / secrets / audit',
    x: '46%',
    y: '77%',
    tone: 'warm',
    categoryId: 'security-governance',
    keywords: ['security', 'audit', 'identity', 'secret', 'policy', 'governance', 'permissions'],
  },
  {
    id: '05',
    label: 'Reality check',
    note: 'Bench / cost / maturity',
    x: '18%',
    y: '66%',
    tone: 'lime',
    categoryId: 'bench-comparatifs',
    keywords: ['benchmark', 'compare', 'comparison', 'cost', 'eval', 'maturity', 'performance'],
  },
] as const;
