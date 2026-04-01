import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { getAllPostSlugs } from '@/lib/blog';
import { getAllCaseStudySlugs } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.extraedgeclub.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/case-studies/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const industryPages: MetadataRoute.Sitemap = [
    { url: `${base}/industries/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/industries/legal-seo/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/industries/financial-seo/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/industries/ecommerce-seo/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  ];


  const servicePages: MetadataRoute.Sitemap = [
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/programmatic-seo/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/seo-audit/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/technical-seo/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/services/lead-gen-architecture/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
  ];
  // Single location structure: /localseoagency/{slug}/
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${base}/localseoagency/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...locations.map((location) => ({
      url: `${base}/localseoagency/${location.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/case-studies/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...locationPages, ...blogPages, ...caseStudyPages];
}
