import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/lib/feeds';
import { SITE } from '@/lib/site';

const BUILD_DATE = new Date('2024-03-11');

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes = CATEGORIES.map((category) => ({
    url: `${SITE.url}${category.urlPath}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'hourly' as const,
    priority: category.id === 'news-agentic' ? 1.0 : 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: BUILD_DATE,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    ...categoryRoutes,
  ];
}
