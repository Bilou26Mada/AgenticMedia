import { ArxivPaper } from './arxiv';

export interface SummarizedPaper extends ArxivPaper {
  condensedSummary: string;
}

const KEY_TERMS = [
  'agent',
  'agents',
  'tool',
  'workflow',
  'model',
  'evaluation',
  'memory',
  'reasoning',
  'planning',
  'multi-agent',
  'benchmark',
  'orchestration',
];

function splitSentences(text: string) {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function scoreSentence(sentence: string) {
  const normalized = sentence.toLowerCase();
  const wordCount = normalized.split(/\s+/).length;
  const keywordHits = KEY_TERMS.reduce((count, term) => {
    return count + (normalized.includes(term) ? 1 : 0);
  }, 0);

  const lengthScore = wordCount >= 10 && wordCount <= 38 ? 2 : 0;
  return keywordHits * 3 + lengthScore;
}

function summarizeAbstract(abstract: string) {
  const sentences = splitSentences(abstract);
  if (sentences.length <= 2) return abstract.trim();

  const ranked = sentences
    .map((sentence, index) => ({
      sentence,
      index,
      score: scoreSentence(sentence),
    }))
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .slice(0, 2)
    .sort((left, right) => left.index - right.index)
    .map((entry) => entry.sentence);

  return ranked.join(' ').trim() || sentences.slice(0, 2).join(' ').trim();
}

export async function summarizePapersLocally(papers: ArxivPaper[]): Promise<SummarizedPaper[]> {
  return papers.map((paper) => {
    const condensedSummary =
      paper.abstract.split(/\s+/).length < 30 ? paper.abstract : summarizeAbstract(paper.abstract);

    return {
      ...paper,
      condensedSummary,
    };
  });
}
