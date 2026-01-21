import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://extraedgeclub.com';
  
  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/case-studies/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  // Service index pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Location pages for each service (22 total: 11 locations x 2 services)
  const locationPages = services.flatMap((service) =>
    locations.map((location) => ({
      url: `${baseUrl}/${service.slug}/${location.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...servicePages, ...locationPages];
}
