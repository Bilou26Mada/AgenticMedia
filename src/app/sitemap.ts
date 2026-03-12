import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/lib/feeds';
import { SITE } from '@/lib/site';

// Technical SEO Agent: Dynamic sitemap with proper change frequencies
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages with appropriate priorities
  const staticPages = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'hourly' as const,
      priority: 1.0,
    },
  ];

  // Category pages
  const categoryPages = CATEGORIES
    .filter((cat) => cat.id !== 'news-agentic') // Homepage already included
    .map((category) => ({
      url: `${SITE.url}${category.urlPath}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...categoryPages];
}
