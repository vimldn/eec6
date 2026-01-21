export interface Service {
  slug: string;
  name: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'localseoagency',
    name: 'Local SEO',
    title: 'Local SEO Agency',
    shortDesc: 'Dominate Google Maps and local pack results. Get found by customers in your area who are ready to buy.',
    longDesc: 'Local SEO is about being visible when nearby customers search for your products or services. We optimise your Google Business Profile, build local citations, generate reviews, and create location-specific content to ensure you appear in the local pack and map results.',
    icon: '📍',
    benefits: [
      'Appear in Google\'s Local 3-Pack',
      'More calls from Google Maps',
      'Higher quality local leads',
      'Dominate your service area',
      'Build local trust and authority'
    ]
  },
  {
    slug: 'seo',
    name: 'SEO',
    title: 'SEO Agency',
    shortDesc: 'Full-scale organic search strategy to increase visibility, traffic, and conversions across London.',
    longDesc: 'Our comprehensive SEO service covers everything you need to rank higher and drive more organic traffic. From technical SEO and on-page optimisation to content strategy and link building, we take a holistic approach to sustainable organic growth.',
    icon: '🚀',
    benefits: [
      'Sustainable organic traffic growth',
      'Lower cost per acquisition over time',
      'Build authority in your industry',
      'Outrank competitors',
      'Compound returns on investment'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
