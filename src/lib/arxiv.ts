import Parser from 'rss-parser';

const arxivParser = new Parser({
  customFields: {
    item: ['summary', 'au', 'author'],
  },
});

export interface ArxivPaper {
  id: string;
  title: string;
  link: string;
  published: string;
  abstract: string;
  authors: string[];
}

export async function fetchLatestAgenticPapers(): Promise<ArxivPaper[]> {
  const params = new URLSearchParams({
    search_query:
      'cat:cs.AI AND (all:"agentic" OR all:"multi-agent" OR all:"tool use" OR all:"computer use")',
    start: '0',
    max_results: '8',
    sortBy: 'submittedDate',
    sortOrder: 'descending',
  });
  const url = `https://export.arxiv.org/api/query?${params.toString()}`;

  try {
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('arXiv API timeout')), 10000)
    );
    const feed = await Promise.race([
      arxivParser.parseURL(url),
      timeoutPromise,
    ]);

    return feed.items.map((item) => {
      const cleanTitle = item.title ? item.title.replace(/\s+/g, ' ').trim() : 'Unknown source';
      const abstract = item.summary || item.contentSnippet || '';
      const cleanAbstract = abstract.replace(/\s+/g, ' ').trim();

      let authors: string[] = [];
      if (Array.isArray(item.author)) {
        authors = item.author
          .map((a) => (typeof a === 'string' ? a : a?.name))
          .filter(Boolean);
      } else if (typeof item.author === 'string') {
        authors = item.author.split(',').map((author) => author.trim());
      } else if (item.creator) {
        authors = [item.creator];
      }

      return {
        id: (item as { id?: string }).id || item.link || Date.now().toString(),
        title: cleanTitle,
        link: item.link || '',
        published: item.isoDate || new Date().toISOString(),
        abstract: cleanAbstract,
        authors: authors.slice(0, 3),
      };
    });
  } catch (error) {
    console.error('Failed to fetch arXiv papers:', error);
    return [];
  }
}
