export type Locale = 'fr' | 'en';

export interface Translation {
  // Layout
  siteName: string;
  siteDescription: string;
  tagline: string;
  angleDesc: string;

  // Navigation
  navNews: string;
  navUseCases: string;
  navStack: string;
  navBench: string;
  navGovernance: string;
  navBuild: string;
  navFormation: string;

  // Home page
  heroTitle: string;
  heroDesc: string;
  viewNews: string;
  exploreStack: string;

  // Home sections
  formatsTitle: string;
  briefsDesc: string;
  decryptagesDesc: string;
  buildGuidesDesc: string;
  toolSheetsDesc: string;

  editorialFrontsTitle: string;
  editorialFrontsDesc: string;

  // Category eyebrows
  newsEyebrow: string;
  useCasesEyebrow: string;
  stackEyebrow: string;
  benchEyebrow: string;
  governanceEyebrow: string;
  buildEyebrow: string;
  formationEyebrow: string;

  // Categories
  newsAgenticTitle: string;
  newsAgenticDesc: string;
  useCasesTitle: string;
  useCasesDesc: string;
  stackTitle: string;
  stackDesc: string;
  benchTitle: string;
  benchDesc: string;
  governanceTitle: string;
  governanceDesc: string;
  buildTitle: string;
  buildDesc: string;
  formationTitle: string;
  formationDesc: string;

  // Category highlights
  newsHighlights1: string;
  newsHighlights2: string;
  newsHighlights3: string;
  useCasesHighlights1: string;
  useCasesHighlights2: string;
  useCasesHighlights3: string;
  stackHighlights1: string;
  stackHighlights2: string;
  stackHighlights3: string;
  benchHighlights1: string;
  benchHighlights2: string;
  benchHighlights3: string;
  governanceHighlights1: string;
  governanceHighlights2: string;
  governanceHighlights3: string;
  buildHighlights1: string;
  buildHighlights2: string;
  buildHighlights3: string;
  formationHighlights1: string;
  formationHighlights2: string;
  formationHighlights3: string;

  // Category questions
  newsQuestion: string;
  useCasesQuestion: string;
  stackQuestion: string;
  benchQuestion: string;
  governanceQuestion: string;
  buildQuestion: string;
  formationQuestion: string;

  // Home questions
  question1Title: string;
  question1Text: string;
  question2Title: string;
  question2Text: string;
  question3Title: string;
  question3Text: string;
  question4Title: string;
  question4Text: string;

  // Home metrics
  signalTitle: string;
  signalValue: string;
  signalText: string;
  executionTitle: string;
  executionValue: string;
  executionText: string;
  controlTitle: string;
  controlValue: string;
  controlText: string;

  // Radar section
  radarTitle: string;
  radarDesc: string;

  // Feed card
  sourceLabel: string;
  activeToday: string;
  onWatch: string;
  majorSignal: string;
  latest24h: string;
  archives: string;
  signals: string;
  archivedArticles: string;
  today: string;
  archivesLabel: string;
  noUpdateToday: string;
  noHistory: string;
  noArchiveHistory: string;

  // Research
  researchTitle: string;
  researchBadge: string;
  researchDesc: string;
  publication: string;

  // Radar component
  radarVisionTitle: string;
  radarVisionDesc: string;
  signalLabel: string;
  stackLabel: string;
  benchLabel: string;
  controlLabel: string;
  targetedNews: string;
  viewCategory: string;
  noNewsAssociated: string;
  values: string;

  // Category pages
  backToHome: string;
  lastUpdate: string;
  noFeeds: string;

  // Theme toggle
  themeLight: string;
  themeDark: string;
  themeToggle: string;

  // Language toggle
  langFR: string;
  langEN: string;
  langToggle: string;

  // Source types
  sourceOfficial: string;
  sourceBuilder: string;
  sourceAnalysis: string;
}

export const translations: Record<Locale, Translation> = {
  fr: {
    // Layout
    siteName: 'Agentic News',
    siteDescription: 'Le media francophone qui suit ce que les agents savent reellement faire, avec quels outils, a quels couts, et avec quels risques.',
    tagline: 'Agentic AI media',
    angleDesc: 'From launch headline to operational verdict.',

    // Navigation
    navNews: 'News',
    navUseCases: 'Usage Métier',
    navStack: 'Stack Tech',
    navBench: 'Tests & Bench',
    navGovernance: 'Gouvernance',
    navBuild: 'Build Guides',
    navFormation: 'Formation',

    // Home page
    heroTitle: 'Le media francophone pense pour l agentic AI.',
    heroDesc: 'Le media francophone qui suit ce que les agents savent reellement faire, avec quels outils, a quels couts, et avec quels risques.',
    viewNews: 'Voir les news',
    exploreStack: 'Explorer la stack',

    // Home sections
    formatsTitle: 'Formats',
    briefsDesc: 'Des briefs très courts pour capter les signaux sans passer la journée dans le flux.',
    decryptagesDesc: "Le vrai impact produit, le niveau de maturité et les angles morts de chaque annonce.",
    buildGuidesDesc: "Des tutoriels concrets pour brancher un agent, poser des garde-fous et mesurer l exécution.",
    toolSheetsDesc: "Prix, cas d usage, limites et verdict opérationnel par outil ou plateforme.",

    editorialFrontsTitle: 'Les verticales qui couvrent le cycle complet.',
    editorialFrontsDesc: 'On ne s arrête pas à l annonce. Chaque rubrique couvre un moment clé : la sortie, l usage, la stack, le bench, la gouvernance.',

    // Category eyebrows
    newsEyebrow: 'En continu',
    useCasesEyebrow: 'Retour terrain',
    stackEyebrow: 'La boîte à outils',
    benchEyebrow: 'Tests & verdicts',
    governanceEyebrow: 'La couche de contrôle',
    buildEyebrow: 'Mode d emploi',
    formationEyebrow: 'Monter en niveau',

    // Categories
    newsAgenticTitle: 'News Agentic',
    newsAgenticDesc: "Le pouls de l'écosystème agent IA : sorties de modèles, protocoles MCP, SDK, IDE et agents autonomes. Ce qui compte, trié sur le volet.",
    useCasesTitle: 'Use Cases Réels',
    useCasesDesc: "Ce que les équipes déploient vraiment : engineering, support, ops, marketing, sales, finance. Sans filtre, avec les résultats et les frictions.",
    stackTitle: 'Stack & Tooling',
    stackDesc: "L infrastructure invisible qui fait tenir la promesse : serveurs MCP, mémoire, evals, tracing, orchestration, identité, sandboxing.",
    benchTitle: 'Bench & Comparatifs',
    benchDesc: "On confronte les promesses à la réalité : benchmarks, comparatifs de plateformes, coûts réels, maturité produit et agent washing détecté.",
    governanceTitle: 'Governance & Security',
    governanceDesc: "Ce qui sépare une démo d un système exploitable : permissions, audit, secrets, hallucinations, policy controls et supervision humaine.",
    buildTitle: 'Build Guides',
    buildDesc: "Des guides concrets pour construire et lancer : agent de veille, serveur MCP, workflow multi-agent, evals en production.",
    formationTitle: 'Formation & Learning',
    formationDesc: "Les ressources pour monter en compétence sans se noyer : cours, learning paths, bootcamps équipes et bases pour comprendre la stack.",

    // Category highlights
    newsHighlights1: 'Protocoles et standards',
    newsHighlights2: 'Lancements produits',
    newsHighlights3: 'Agents de dev et browser agents',
    useCasesHighlights1: 'Retour terrain par fonction',
    useCasesHighlights2: 'ROI et friction d adoption',
    useCasesHighlights3: 'Limites operationnelles',
    stackHighlights1: 'Architecture et outillage',
    stackHighlights2: 'Memory, tracing, evals',
    stackHighlights3: 'Identity et sandboxing',
    benchHighlights1: 'Comparatifs produits',
    benchHighlights2: 'Couts et maturite',
    benchHighlights3: 'Signal vs agent washing',
    governanceHighlights1: 'Permissions et policy controls',
    governanceHighlights2: 'Identity, audit, secrets',
    governanceHighlights3: 'Garde-fous en production',
    buildHighlights1: 'Guides pas a pas',
    buildHighlights2: 'Patterns de build',
    buildHighlights3: 'Evaluation avant prod',
    formationHighlights1: 'Cours et learning paths',
    formationHighlights2: 'Tutoriels pour monter en niveau',
    formationHighlights3: 'Onboarding equipe et acculturation',

    // Category questions
    newsQuestion: 'Quoi de neuf, et qu est-ce qui est vraiment exploitable ?',
    useCasesQuestion: 'A quoi cela sert dans la pratique, au-dela des demos ?',
    stackQuestion: 'Comment on branche la stack sans tomber dans le bricolage ?',
    benchQuestion: 'Qui fait quoi pour de vrai, et dans quelles conditions ?',
    governanceQuestion: 'Est-ce serieux pour une equipe, un SI ou une production ?',
    buildQuestion: 'Comment construire, tester et lancer un systeme agentique propre ?',
    formationQuestion: 'Comment former rapidement une equipe ou monter en competence sans se noyer ?',

    // Home questions
    question1Title: 'Quoi de neuf ?',
    question1Text: 'Sorties produit, standards d intégration, évolutions des SDK et plateformes agents.',
    question2Title: 'À quoi ça sert ?',
    question2Text: "Cas réels en dev, support, ops, marketing et fonctions métier à fort volume.",
    question3Title: 'Comment on le branche ?',
    question3Text: 'Stack, memory, evals, tracing, orchestration, identity, sandboxing.',
    question4Title: 'Est-ce sérieux ?',
    question4Text: 'Bench, coûts, maturité, sécurité, policy controls et human-in-the-loop.',

    // Home metrics
    signalTitle: 'Signal',
    signalValue: 'News, SDK, MCP, browser agents',
    signalText: 'Tout ce qui bouge vite et tout ce qui devient standard.',
    executionTitle: 'Execution',
    executionValue: 'Use cases, tooling, evals',
    executionText: "Ce que les équipes branchent vraiment, et le niveau de maturité observé.",
    controlTitle: 'Control',
    controlValue: 'Permissions, audit, secrets',
    controlText: "La couche gouvernance qui sépare une démo d un système exploitable.",

    // Radar section
    radarTitle: "Radar Temps Réel : Captez l'essentiel de l'écosystème IA.",
    radarDesc: 'Lecture instantanée : l expertise technologique filtrée à travers un flux RSS optimisé pour la prise de décision.',

    // Feed card
    sourceLabel: 'Source',
    activeToday: "Actif aujourd'hui",
    onWatch: 'En veille',
    majorSignal: 'Signal Majeur',
    latest24h: 'Dernières 24h',
    archives: 'Archives',
    signals: 'signal',
    archivedArticles: 'articles archivés',
    today: "Aujourd'hui",
    archivesLabel: 'Archives',
    noUpdateToday: 'Le signal majeur ci-dessus résume la mise à jour principale de cette source.',
    noHistory: 'Aucune nouvelle publication aujourd hui. La source reste sous surveillance.',
    noArchiveHistory: "L'historique se complètera automatiquement au fil des collectes.",

    // Research
    researchTitle: 'Brief de Recherche',
    researchBadge: 'Synthèses par IA locale',
    researchDesc: "Dernières publications arXiv sur les systèmes agentiques, l'usage d'outils et les évaluations, condensées par extraction.",
    publication: 'Publication',

    // Radar component
    radarVisionTitle: 'Une vision augmentée de l écosystème IA.',
    radarVisionDesc: 'Les signaux faibles sont captés en amont, puis synthétisés pour une lecture stratégique immédiate.',
    signalLabel: 'Signal',
    stackLabel: 'Stack',
    benchLabel: 'Bench',
    controlLabel: 'Control',
    targetedNews: 'Actualités ciblées',
    viewCategory: 'Voir',
    noNewsAssociated: 'Aucune news associee pour ce signal pour le moment.',
    values: 'valeurs',

    // Category pages
    backToHome: 'Retour accueil',
    lastUpdate: 'Dernière update',
    noFeeds: 'Aucun flux disponible pour le moment.',

    // Theme toggle
    themeLight: 'Skin clair',
    themeDark: 'Skin sombre',
    themeToggle: 'Basculer entre skin sombre et skin clair',

    // Language toggle
    langFR: 'FR',
    langEN: 'EN',
    langToggle: 'Changer de langue',

    // Source types
    sourceOfficial: 'Source Officielle',
    sourceBuilder: 'Build & Tech',
    sourceAnalysis: 'Analystes',
  },
  en: {
    // Layout
    siteName: 'Agentic News',
    siteDescription: 'The French-speaking media tracking what AI agents can actually do, with which tools, at what costs, and with what risks.',
    tagline: 'Agentic AI media',
    angleDesc: 'From launch headline to operational verdict.',

    // Navigation
    navNews: 'News',
    navUseCases: 'Use Cases',
    navStack: 'Tech Stack',
    navBench: 'Tests & Bench',
    navGovernance: 'Governance',
    navBuild: 'Build Guides',
    navFormation: 'Training',

    // Home page
    heroTitle: 'The leading French-speaking media for agentic AI.',
    heroDesc: 'The French-speaking media tracking what AI agents can actually do, with which tools, at what costs, and with what risks.',
    viewNews: 'View news',
    exploreStack: 'Explore stack',

    // Home sections
    formatsTitle: 'Formats',
    briefsDesc: 'Very short briefs to capture signals without spending the day in the feed.',
    decryptagesDesc: 'The real product impact, maturity level and blind spots of each announcement.',
    buildGuidesDesc: 'Concrete tutorials to connect an agent, set up safeguards and measure execution.',
    toolSheetsDesc: 'Pricing, use cases, limitations and operational verdict for each tool or platform.',

    editorialFrontsTitle: 'Verticals covering the full cycle.',
    editorialFrontsDesc: 'We do not stop at the announcement. Each section covers a key moment: the release, the usage, the stack, the bench, the governance.',

    // Category eyebrows
    newsEyebrow: 'Continuous',
    useCasesEyebrow: 'Field feedback',
    stackEyebrow: 'Toolbox',
    benchEyebrow: 'Tests & verdicts',
    governanceEyebrow: 'Control layer',
    buildEyebrow: 'How-to',
    formationEyebrow: 'Level up',

    // Categories
    newsAgenticTitle: 'Agentic News',
    newsAgenticDesc: 'The pulse of the AI agent ecosystem: model releases, MCP protocols, SDKs, IDEs and autonomous agents. What matters, handpicked.',
    useCasesTitle: 'Real Use Cases',
    useCasesDesc: 'What teams actually deploy: engineering, support, ops, marketing, sales, finance. No filter, with results and frictions.',
    stackTitle: 'Stack & Tooling',
    stackDesc: 'The invisible infrastructure that makes the promise hold: MCP servers, memory, evals, tracing, orchestration, identity, sandboxing.',
    benchTitle: 'Bench & Comparisons',
    benchDesc: 'We confront promises to reality: benchmarks, platform comparisons, real costs, product maturity and detected agent washing.',
    governanceTitle: 'Governance & Security',
    governanceDesc: 'What separates a demo from an exploitable system: permissions, audit, secrets, hallucinations, policy controls and human supervision.',
    buildTitle: 'Build Guides',
    buildDesc: 'Concrete guides to build and launch: monitoring agent, MCP server, multi-agent workflow, evals in production.',
    formationTitle: 'Training & Learning',
    formationDesc: 'Resources to build skills without drowning: courses, learning paths, team bootcamps and basics to understand the stack.',

    // Category highlights
    newsHighlights1: 'Protocols and standards',
    newsHighlights2: 'Product launches',
    newsHighlights3: 'Dev agents and browser agents',
    useCasesHighlights1: 'Field feedback by function',
    useCasesHighlights2: 'ROI and adoption friction',
    useCasesHighlights3: 'Operational limitations',
    stackHighlights1: 'Architecture and tooling',
    stackHighlights2: 'Memory, tracing, evals',
    stackHighlights3: 'Identity and sandboxing',
    benchHighlights1: 'Product comparisons',
    benchHighlights2: 'Costs and maturity',
    benchHighlights3: 'Signal vs agent washing',
    governanceHighlights1: 'Permissions and policy controls',
    governanceHighlights2: 'Identity, audit, secrets',
    governanceHighlights3: 'Production safeguards',
    buildHighlights1: 'Step-by-step guides',
    buildHighlights2: 'Build patterns',
    buildHighlights3: 'Pre-production evaluation',
    formationHighlights1: 'Courses and learning paths',
    formationHighlights2: 'Tutorials to level up',
    formationHighlights3: 'Team onboarding and culture',

    // Category questions
    newsQuestion: 'What is new, and what is actually exploitable?',
    useCasesQuestion: 'What is it for in practice, beyond demos?',
    stackQuestion: 'How do we connect the stack without falling into DIY hacking?',
    benchQuestion: 'Who does what for real, and under what conditions?',
    governanceQuestion: 'Is it serious for a team, an IS or production?',
    buildQuestion: 'How to build, test and launch a clean agentic system?',
    formationQuestion: 'How to quickly train a team or build skills without drowning?',

    // Home questions
    question1Title: 'What is new?',
    question1Text: 'Product releases, integration standards, SDK and agent platform evolutions.',
    question2Title: 'What is it for?',
    question2Text: 'Real cases in dev, support, ops, marketing and high-volume business functions.',
    question3Title: 'How do we connect it?',
    question3Text: 'Stack, memory, evals, tracing, orchestration, identity, sandboxing.',
    question4Title: 'Is it serious?',
    question4Text: 'Bench, costs, maturity, security, policy controls and human-in-the-loop.',

    // Home metrics
    signalTitle: 'Signal',
    signalValue: 'News, SDK, MCP, browser agents',
    signalText: 'Everything that moves fast and everything that becomes standard.',
    executionTitle: 'Execution',
    executionValue: 'Use cases, tooling, evals',
    executionText: 'What teams actually connect, and the observed maturity level.',
    controlTitle: 'Control',
    controlValue: 'Permissions, audit, secrets',
    controlText: 'The governance layer that separates a demo from an exploitable system.',

    // Radar section
    radarTitle: 'Real-Time Radar: Capture the essence of the AI ecosystem.',
    radarDesc: 'Instant reading: technological expertise filtered through an RSS feed optimized for decision-making.',

    // Feed card
    sourceLabel: 'Source',
    activeToday: 'Active today',
    onWatch: 'On watch',
    majorSignal: 'Major Signal',
    latest24h: 'Last 24h',
    archives: 'Archives',
    signals: 'signal',
    archivedArticles: 'archived articles',
    today: 'Today',
    archivesLabel: 'Archives',
    noUpdateToday: 'The major signal above summarizes the main update from this source.',
    noHistory: 'No new publications today. The source remains under surveillance.',
    noArchiveHistory: 'History will automatically complete as collections progress.',

    // Research
    researchTitle: 'Research Brief',
    researchBadge: 'Summaries by local AI',
    researchDesc: 'Latest arXiv publications on agentic systems, tool use and evaluations, condensed by extraction.',
    publication: 'Publication',

    // Radar component
    radarVisionTitle: 'An augmented view of the AI ecosystem.',
    radarVisionDesc: 'Weak signals are captured upstream, then synthesized for immediate strategic reading.',
    signalLabel: 'Signal',
    stackLabel: 'Stack',
    benchLabel: 'Bench',
    controlLabel: 'Control',
    targetedNews: 'Targeted news',
    viewCategory: 'View',
    noNewsAssociated: 'No news associated with this signal for the moment.',
    values: 'values',

    // Category pages
    backToHome: 'Back to home',
    lastUpdate: 'Last update',
    noFeeds: 'No feeds available at the moment.',

    // Theme toggle
    themeLight: 'Light skin',
    themeDark: 'Dark skin',
    themeToggle: 'Toggle between dark and light skin',

    // Language toggle
    langFR: 'FR',
    langEN: 'EN',
    langToggle: 'Change language',

    // Source types
    sourceOfficial: 'Official Source',
    sourceBuilder: 'Build & Tech',
    sourceAnalysis: 'Analysts',
  },
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}
