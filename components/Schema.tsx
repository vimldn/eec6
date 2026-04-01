// ─────────────────────────────────────────────────────────────
// TODO before going live:
//   1. Replace STREET_ADDRESS with your actual street address
//   2. Replace POSTAL_CODE with your actual postcode (e.g. W1A 1AA)
//   3. Replace TELEPHONE with your real number (e.g. +442012345678)
//      Use E.164 format for the telephone field.
// ─────────────────────────────────────────────────────────────

export default function Schema() {
  const siteUrl = 'https://www.extraedgeclub.com';
  const entityId = `${siteUrl}/#organization`;

  // ── Organisation — the canonical entity node Google anchors to ──
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': entityId,
    name: 'Extra Edge Club Ltd',
    alternateName: 'Extra Edge Club',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 200,
      height: 60,
    },
    image: `${siteUrl}/logo.png`,
    description:
      "UK SEO specialists since 2011. We help businesses grow through Local SEO and comprehensive SEO services. Trusted by Sixes Cricket, The Gentleman's Journal, and more.",
    foundingDate: '2011',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'STREET_ADDRESS',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      postalCode: 'POSTAL_CODE',
      addressCountry: 'GB',
    },
    telephone: 'TELEPHONE',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    sameAs: [
      // Add verified profiles once confirmed:
      // 'https://www.linkedin.com/company/extra-edge-club',
      // 'https://twitter.com/extraedgeclub',
    ],
  };

  // ── WebSite — no SearchAction (no search functionality on site) ──
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Extra Edge Club',
    url: siteUrl,
    publisher: { '@id': entityId },
  };

  // ── ProfessionalService — full NAP for local trust signals ──
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#localbusiness`,
    name: 'Extra Edge Club Ltd',
    image: `${siteUrl}/logo.png`,
    description:
      'SEO specialists helping UK businesses grow since 2011. We deliver real results, not just rankings.',
    url: siteUrl,
    telephone: 'TELEPHONE',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'STREET_ADDRESS',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      postalCode: 'POSTAL_CODE',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278,
    },
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    parentOrganization: { '@id': entityId },
  };

  const schemas = [websiteSchema, organizationSchema, localBusinessSchema];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
