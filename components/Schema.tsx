import { locations } from '@/data/locations';

export default function Schema() {
  const siteUrl = 'https://www.extraedgeclub.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Extra Edge Club Ltd',
    alternateName: 'Extra Edge Club',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description:
      "UK SEO specialists since 2011. We help businesses grow through Local SEO and comprehensive SEO services. Trusted by Sixes Cricket, The Gentleman's Journal, and more.",
    foundingDate: '2011',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Extra Edge Club',
    alternateName: 'Extra Edge Club | SEO Agency UK | Since 2011',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Extra Edge Club Ltd',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Extra Edge Club Ltd',
    image: `${siteUrl}/logo.png`,
    description:
      'SEO specialists helping UK businesses grow since 2011. We deliver real results, not just rankings.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      addressCountry: 'GB',
    },
    priceRange: '$$',
    url: siteUrl,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SEO Services',
    provider: {
      '@type': 'Organization',
      name: 'Extra Edge Club Ltd',
      url: siteUrl,
    },
    areaServed: locations.map((l) => ({
      '@type': 'Place',
      name: l.name,
    })),
  };

  const schemas = [websiteSchema, organizationSchema, localBusinessSchema, serviceSchema];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
