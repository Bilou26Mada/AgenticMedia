import Parser from 'rss-parser';

export interface FeedSource {
  id: string;
  name: string;
  url: string;
  homeUrl: string;
  badge: string;
  category: string;
  focus: string;
  sourceType: 'official' | 'builder' | 'analysis';
  lang?: 'en' | 'fr';
  fetchMode?: 'rss' | 'html';
  filterKeywords?: string[];
  filterLinkIncludes?: string[];
}

export const LANG_LABEL: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
};

export const SOURCE_TYPE_LABEL: Record<FeedSource['sourceType'], string> = {
  official: 'Official',
  builder: 'Builder',
  analysis: 'Analysis',
};

export interface FeedItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
}

export interface CategorizedFeed {
  source: FeedSource;
  today: FeedItem[];
  previous: FeedItem[];
  hasUpdates: boolean;
}

export const CATEGORIES = [
  { id: 'news-agentic', label: 'News', urlPath: '/' },
  { id: 'use-cases', label: 'Use Cases', urlPath: '/use-cases' },
  { id: 'stack-tooling', label: 'Stack', urlPath: '/stack-tooling' },
  { id: 'bench-comparatifs', label: 'Bench', urlPath: '/bench-comparatifs' },
  { id: 'security-governance', label: 'Governance', urlPath: '/security-governance' },
  { id: 'build-guides', label: 'Build', urlPath: '/build-guides' },
  { id: 'formation', label: 'Formation', urlPath: '/formation' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const FEED_SOURCES: FeedSource[] = [
  {
    id: 'news-openai',
    name: 'OpenAI News',
    url: 'https://openai.com/news/rss.xml',
    homeUrl: 'https://openai.com/news',
    badge: 'OA',
    category: 'news-agentic',
    focus: 'Model launches, Responses API updates and operator-facing product releases.',
    sourceType: 'official',
    lang: 'en',
  },
  {
    id: 'news-google-ai',
    name: 'Google AI Blog',
    url: 'https://blog.google/rss/',
    homeUrl: 'https://blog.google/technology/ai/',
    badge: 'GO',
    category: 'news-agentic',
    focus: 'Gemini, AI Mode, developer tools, robotics and Google AI product rollouts.',
    sourceType: 'official',
    lang: 'en',
    fetchMode: 'rss',
    filterKeywords: ['ai', 'gemini', 'robotics', 'developer', 'deepmind', 'model', 'agentic', 'agents'],
    filterLinkIncludes: ['/ai/', '/deepmind', '/gemini', '/google-ai-updates', '/developers'],
  },
  {
    id: 'news-anthropic',
    name: 'Anthropic Newsroom',
    url: 'https://www.anthropic.com/news',
    homeUrl: 'https://www.anthropic.com/news',
    badge: 'AN',
    category: 'news-agentic',
    focus: 'Claude launches, computer use, policy notes and official Anthropic announcements.',
    sourceType: 'official',
    lang: 'en',
    fetchMode: 'html',
  },
  {
    id: 'news-langchain',
    name: 'LangChain Blog',
    url: 'https://blog.langchain.dev/rss/',
    homeUrl: 'https://blog.langchain.dev/',
    badge: 'LC',
    category: 'news-agentic',
    focus: 'Agent frameworks, orchestration, memory and tracing.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'news-venturebeat',
    name: 'VentureBeat AI',
    url: 'https://venturebeat.com/category/ai/feed/',
    homeUrl: 'https://venturebeat.com/ai/',
    badge: 'VB',
    category: 'news-agentic',
    focus: 'Fast market coverage across launches, enterprise moves and product bets.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'usecases-zapier',
    name: 'Zapier Blog',
    url: 'https://zapier.com/blog/feeds/latest/',
    homeUrl: 'https://zapier.com/blog/',
    badge: 'ZA',
    category: 'use-cases',
    focus: 'Automation patterns, ops handoffs and practical AI workflows.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'usecases-microsoft',
    name: 'Microsoft AI',
    url: 'https://blogs.microsoft.com/ai/feed/',
    homeUrl: 'https://blogs.microsoft.com/ai/',
    badge: 'MS',
    category: 'use-cases',
    focus: 'Enterprise use cases, copilots, workplace deployment and operations.',
    sourceType: 'official',
    lang: 'en',
  },
  {
    id: 'usecases-n8n',
    name: 'n8n Blog',
    url: 'https://blog.n8n.io/rss/',
    homeUrl: 'https://blog.n8n.io/',
    badge: 'N8',
    category: 'use-cases',
    focus: 'Workflow automation, agent pipelines and multi-step execution.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'stack-github',
    name: 'GitHub Blog',
    url: 'https://github.blog/feed/',
    homeUrl: 'https://github.blog/',
    badge: 'GH',
    category: 'stack-tooling',
    focus: 'Developer tooling, Copilot, platform primitives and secure shipping.',
    sourceType: 'official',
    lang: 'en',
  },
  {
    id: 'stack-huggingface',
    name: 'Hugging Face',
    url: 'https://huggingface.co/blog/feed.xml',
    homeUrl: 'https://huggingface.co/blog',
    badge: 'HF',
    category: 'stack-tooling',
    focus: 'Open tooling, model serving, evals and infra for agent builders.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'stack-langchain',
    name: 'LangChain Build',
    url: 'https://blog.langchain.dev/rss/',
    homeUrl: 'https://blog.langchain.dev/',
    badge: 'LC',
    category: 'stack-tooling',
    focus: 'Agent engineering patterns, orchestration and runtime updates.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'bench-kdnuggets',
    name: 'KDnuggets',
    url: 'https://www.kdnuggets.com/feed',
    homeUrl: 'https://www.kdnuggets.com/',
    badge: 'KD',
    category: 'bench-comparatifs',
    focus: 'Comparisons, tutorials and practical evaluation writeups.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'bench-analyticsvidhya',
    name: 'Analytics Vidhya',
    url: 'https://www.analyticsvidhya.com/feed/',
    homeUrl: 'https://www.analyticsvidhya.com/blog/',
    badge: 'AV',
    category: 'bench-comparatifs',
    focus: 'Benchmark-style explainers, implementation tests and model comparisons.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'bench-pragmatic',
    name: 'The Pragmatic Engineer',
    url: 'https://blog.pragmaticengineer.com/rss/',
    homeUrl: 'https://blog.pragmaticengineer.com/',
    badge: 'PE',
    category: 'bench-comparatifs',
    focus: 'Reality checks on product maturity, costs and enterprise fit.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'gov-schneier',
    name: 'Schneier on Security',
    url: 'https://www.schneier.com/feed/atom/',
    homeUrl: 'https://www.schneier.com/',
    badge: 'BS',
    category: 'security-governance',
    focus: 'Cryptography, security engineering, policy, and AI risk analysis.',
    sourceType: 'analysis',
    lang: 'en',
    filterKeywords: ['ai', 'artificial intelligence', 'machine learning', 'algorithm', 'model', 'data'],
  },
  {
    id: 'gov-ainow',
    name: 'AI Now Institute',
    url: 'https://ainowinstitute.org/category/news/feed',
    homeUrl: 'https://ainowinstitute.org/',
    badge: 'AI',
    category: 'security-governance',
    focus: 'Policy research, social implications, regulation, and governance of AI systems.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'gov-microsoft',
    name: 'Microsoft AI',
    url: 'https://blogs.microsoft.com/ai/feed/',
    homeUrl: 'https://blogs.microsoft.com/ai/',
    badge: 'MS',
    category: 'security-governance',
    focus: 'Governance frameworks, enterprise deployment controls and responsible AI.',
    sourceType: 'official',
    lang: 'en',
  },
  {
    id: 'gov-github',
    name: 'GitHub Blog',
    url: 'https://github.blog/feed/',
    homeUrl: 'https://github.blog/',
    badge: 'GH',
    category: 'security-governance',
    focus: 'Identity, policy controls, developer security and auditability.',
    sourceType: 'official',
    lang: 'en',
  },
  {
    id: 'build-openai',
    name: 'OpenAI Developers',
    url: 'https://openai.com/news/rss.xml',
    homeUrl: 'https://platform.openai.com/docs/overview',
    badge: 'OA',
    category: 'build-guides',
    focus: 'Agent building primitives, Responses API and production guides.',
    sourceType: 'official',
    lang: 'en',
  },
  {
    id: 'build-n8n',
    name: 'n8n Build',
    url: 'https://blog.n8n.io/rss/',
    homeUrl: 'https://blog.n8n.io/',
    badge: 'N8',
    category: 'build-guides',
    focus: 'Workflow recipes, agent chaining and automation tutorials.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'build-analyticsvidhya',
    name: 'Analytics Vidhya',
    url: 'https://www.analyticsvidhya.com/feed/',
    homeUrl: 'https://www.analyticsvidhya.com/blog/',
    badge: 'AV',
    category: 'build-guides',
    focus: 'Hands-on code, tutorials and implementation breakdowns.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'formation-huggingface',
    name: 'Hugging Face Learn',
    url: 'https://huggingface.co/blog/feed.xml',
    homeUrl: 'https://huggingface.co/blog',
    badge: 'HF',
    category: 'formation',
    focus: 'Hands-on tutorials, open-source courses and practical learning material for agent builders.',
    sourceType: 'builder',
    lang: 'en',
  },
  {
    id: 'formation-analyticsvidhya',
    name: 'Analytics Vidhya Learn',
    url: 'https://www.analyticsvidhya.com/feed/',
    homeUrl: 'https://www.analyticsvidhya.com/blog/',
    badge: 'AV',
    category: 'formation',
    focus: 'Structured explainers, learning paths and implementation walkthroughs around agents and LLM systems.',
    sourceType: 'analysis',
    lang: 'en',
  },
  {
    id: 'formation-microsoft',
    name: 'Microsoft Learn AI',
    url: 'https://blogs.microsoft.com/ai/feed/',
    homeUrl: 'https://blogs.microsoft.com/ai/',
    badge: 'MS',
    category: 'formation',
    focus: 'Enterprise learning material, AI adoption guidance and educational rollouts for teams.',
    sourceType: 'official',
    lang: 'en',
  },
];

const parser = new Parser({
  customFields: {
    item: ['description'],
  },
});

const FEED_DAY_TIMEZONE = 'Europe/Paris';
const FEED_DAY_FORMATTER = new Intl.DateTimeFormat('en-CA', {
  timeZone: FEED_DAY_TIMEZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function cleanText(input?: string): string | undefined {
  if (!input) return undefined;

  const noHtml = input.replace(/<[^>]+>/g, ' ');
  const normalized = noHtml.replace(/\s+/g, ' ').trim();
  return normalized || undefined;
}

function parseFeedDate(input?: string): Date | null {
  if (!input) return null;

  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return null;

  return parsed;
}

function toIsoDate(input?: string): string | null {
  const parsed = parseFeedDate(input);
  if (!parsed) return null;
  return parsed.toISOString();
}

function getDayKey(date: Date): string {
  return FEED_DAY_FORMATTER.format(date);
}

function compareItemsByDateDesc(left: FeedItem, right: FeedItem): number {
  const leftDate = parseFeedDate(left.pubDate);
  const rightDate = parseFeedDate(right.pubDate);

  if (leftDate && rightDate) {
    return rightDate.getTime() - leftDate.getTime();
  }

  if (leftDate) return -1;
  if (rightDate) return 1;

  return left.title.localeCompare(right.title);
}

function isRelevantItem(source: FeedSource, item: FeedItem) {
  if (!source.filterKeywords?.length && !source.filterLinkIncludes?.length) return true;

  const haystack = `${item.title} ${item.contentSnippet ?? ''}`.toLowerCase();
  const link = item.link.toLowerCase();

  const keywordMatch = source.filterKeywords?.some((keyword) => haystack.includes(keyword.toLowerCase())) ?? false;
  const linkMatch = source.filterLinkIncludes?.some((part) => link.includes(part.toLowerCase())) ?? false;

  return keywordMatch || linkMatch;
}

function normalizeRssItem(source: FeedSource, item: Parser.Item): FeedItem | null {
  const rawGuid = (item as { guid?: string | { _: string } }).guid;
  const guidLink =
    rawGuid && typeof rawGuid === 'object' && typeof rawGuid._ === 'string'
      ? rawGuid._
      : typeof rawGuid === 'string'
        ? rawGuid
        : '';

  const resolvedLink =
    typeof item.link === 'string' && item.link.trim()
      ? item.link.trim()
      : guidLink?.trim();

  if (!item.title?.trim() || !resolvedLink) return null;

  const pubDate = toIsoDate(item.isoDate ?? item.pubDate);
  const description = cleanText(
    typeof item.contentSnippet === 'string'
      ? item.contentSnippet
      : (item as { description?: string }).description
  );

  return {
    id: resolvedLink,
    title: typeof item.title === 'string' ? item.title.replace(/\s+/g, ' ').trim() : String(item.title),
    link: resolvedLink,
    pubDate: pubDate ?? '',
    contentSnippet: description,
  };
}

function normalizeDate(input?: string) {
  return toIsoDate(input) ?? '';
}

async function fetchRssItems(source: FeedSource): Promise<FeedItem[]> {
  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`RSS timeout for ${source.name}`)), 15000)
  );
  const feed = await Promise.race([
    parser.parseURL(source.url),
    timeoutPromise,
  ]);

  return feed.items
    .map((item) => normalizeRssItem(source, item))
    .filter((item): item is FeedItem => Boolean(item))
    .filter((item) => isRelevantItem(source, item))
    .slice(0, 10);
}

function stripTags(input: string) {
  // Remove full tags
  let cleaned = input.replace(/<[^>]+>/g, ' ');
  // Remove partial tag start at the beginning (e.g., 'class="foo">')
  cleaned = cleaned.replace(/^[^<]*>/, ' ');
  // Remove partial tag end at the completion (e.g., '<div class="bar')
  cleaned = cleaned.replace(/<[^>]*$/, ' ');

  return cleaned
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const VALID_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function extractDateFromWindow(windowText: string): string | undefined {
  const match = windowText.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}\b/i);
  if (!match) return undefined;
  const date = new Date(match[0]);
  return isNaN(date.getTime()) ? undefined : match[0];
}

async function fetchAnthropicNewsroom(source: FeedSource): Promise<FeedItem[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  const response = await fetch(source.url, {
    signal: controller.signal,
    next: { revalidate: 300 },
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  });
  clearTimeout(timeout);

  if (!response.ok) {
    throw new Error(`Anthropic newsroom request failed with ${response.status}`);
  }

  const html = await response.text();
  const regex = /href="(\/news\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  const seen = new Set<string>();
  const items: FeedItem[] = [];

  let matchResult;
  let matchCount = 0;
  const MAX_MATCHES = 50;

  while ((matchResult = regex.exec(html)) !== null && matchCount < MAX_MATCHES) {
    matchCount++;
    const path = matchResult[1];
    const title = stripTags(matchResult[2]);

    if (!path || !title || title.length < 18) continue;
    if (seen.has(path)) continue;
    if (/^(news|see more|research|announcements|product|policy)$/i.test(title)) continue;

    const windowText = html.slice(Math.max(0, matchResult.index! - 200), Math.min(html.length, matchResult.index! + 300));
    const dateText = extractDateFromWindow(stripTags(windowText));
    const snippet = stripTags(windowText).replace(title, '').slice(0, 180).trim();
    const link = `https://www.anthropic.com${path}`;

    seen.add(path);
    items.push({
      id: link,
      title,
      link,
      pubDate: normalizeDate(dateText),
      contentSnippet: cleanText(snippet),
    });

    if (items.length >= 10) break;
  }

  return items;
}

async function fetchItems(source: FeedSource): Promise<FeedItem[]> {
  if (source.fetchMode === 'html') {
    if (source.id === 'news-anthropic') {
      return fetchAnthropicNewsroom(source);
    }
  }

  return fetchRssItems(source);
}

export async function getFeed(source: FeedSource): Promise<CategorizedFeed> {
  try {
    const items = await fetchItems(source);
    const todayKey = getDayKey(new Date());

    const todayItems: FeedItem[] = [];
    const previousItems: FeedItem[] = [];

    for (const item of items) {
      const pubDate = parseFeedDate(item.pubDate);

      if (pubDate && getDayKey(pubDate) === todayKey) {
        todayItems.push(item);
      } else {
        previousItems.push(item);
      }
    }

    todayItems.sort(compareItemsByDateDesc);
    previousItems.sort(compareItemsByDateDesc);

    return {
      source,
      today: todayItems,
      previous: previousItems,
      hasUpdates: todayItems.length > 0,
    };
  } catch (error) {
    console.error(`Error fetching feed from ${source.name}:`, error);
    return {
      source,
      today: [],
      previous: [],
      hasUpdates: false,
    };
  }
}

export async function getFeedsByCategory(categoryId: string): Promise<CategorizedFeed[]> {
  const sources = FEED_SOURCES.filter((source) => source.category === categoryId);
  const feeds = await Promise.all(sources.map((source) => getFeed(source)));

  return feeds.sort((left, right) => Number(right.hasUpdates) - Number(left.hasUpdates));
}
