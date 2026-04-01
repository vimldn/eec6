import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { getAllPostSlugs } from '@/lib/blog';
import { getAllCaseStudySlugs } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.extraedgeclub.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/case-studies/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = services.flatMap((service) =>
    locations.map((location) => ({
      url: `${baseUrl}/${service.slug}/${location.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages, ...caseStudyPages];
}
