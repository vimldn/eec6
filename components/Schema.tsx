'use client';

export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Extra Edge Club Ltd",
    "alternateName": "Extra Edge Club",
    "url": "https://www.extraedgeclub.com",
    "logo": "https://www.extraedgeclub.com/logo.png",
    "image": "https://www.extraedgeclub.com/logo.png",
    "description": "UK SEO specialists since 2011. We help businesses grow through Local SEO and comprehensive SEO services. Trusted by Sixes Cricket, The Gentleman's Journal, and more.",
    "foundingDate": "2011",
    "founder": {
      "@type": "Person",
      "name": "Vim"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Extra Edge Club Ltd",
    "image": "https://www.extraedgeclub.com/logo.png",
    "description": "SEO specialists helping London businesses grow since 2011. We deliver real results, not just rankings.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "GB"
    },
    "priceRange": "$$",
    "url": "https://www.extraedgeclub.com"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Extra Edge Club Ltd",
      "url": "https://www.extraedgeclub.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "City",
        "name": "Camden"
      },
      {
        "@type": "City",
        "name": "Westminster"
      },
      {
        "@type": "City",
        "name": "Hackney"
      },
      {
        "@type": "City",
        "name": "Islington"
      },
      {
        "@type": "City",
        "name": "Shoreditch"
      },
      {
        "@type": "City",
        "name": "Kensington"
      },
      {
        "@type": "City",
        "name": "Chelsea"
      },
      {
        "@type": "City",
        "name": "Canary Wharf"
      },
      {
        "@type": "City",
        "name": "Brixton"
      },
      {
        "@type": "City",
        "name": "Fulham"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Dominate Google Maps and local pack results. Get found by customers in your area who are ready to buy.",
            "url": "https://www.extraedgeclub.com/localseoagency/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Full-scale organic search strategy to increase visibility, traffic, and conversions across London.",
            "url": "https://www.extraedgeclub.com/seo/"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Extra Edge Club",
    "url": "https://www.extraedgeclub.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.extraedgeclub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.extraedgeclub.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
