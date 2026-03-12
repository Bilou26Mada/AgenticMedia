import { fetchLatestAgenticPapers } from '@/lib/arxiv';
import { summarizePapersLocally } from '@/lib/summarizer';
import ResearchHighlightContent from '@/components/ResearchHighlightContent';

export default async function ResearchHighlight() {
  try {
    const rawPapers = await fetchLatestAgenticPapers();
    if (!rawPapers || rawPapers.length === 0) return null;

    const summarized = await summarizePapersLocally(rawPapers);

    return <ResearchHighlightContent papers={summarized} />;
  } catch (error) {
    console.error('Failed to fetch or summarize research papers:', error);
    return null;
  }
}
