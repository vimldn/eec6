export interface Client {
  name: string;
  type: 'national' | 'local';
  industry?: string;
  location?: string;
  testimonial?: string;
}

export const clients: Client[] = [
  {
    name: 'Sixes Cricket',
    type: 'national',
    industry: 'Entertainment & Hospitality',
    testimonial: 'Extra Edge Club helped us build our organic presence from the ground up. Their strategic approach to SEO has been instrumental in our growth.'
  },
  {
    name: "The Gentleman's Journal",
    type: 'national',
    industry: 'Media & Publishing',
    testimonial: 'Working with Extra Edge Club has transformed our search visibility. They understand content and how to make it rank.'
  },
  {
    name: 'FireStar Toys',
    type: 'national',
    industry: 'E-commerce & Retail',
    testimonial: 'The team at Extra Edge Club delivered exceptional results for our e-commerce SEO. Traffic and sales have grown significantly.'
  },
  {
    name: 'Tidy Money',
    type: 'local',
    industry: 'Financial Services',
    location: 'Manchester',
    testimonial: 'Extra Edge Club transformed our online presence. We went from barely ranking to dominating local search in Manchester. Our enquiries have tripled.'
  },
  {
    name: 'Makwana Solicitors',
    type: 'local',
    industry: 'Legal Services',
    location: 'London',
    testimonial: 'Professional, knowledgeable, and results-driven. Extra Edge Club has been a fantastic partner for our firm\'s digital growth.'
  },
  {
    name: 'Total Shred',
    type: 'local',
    industry: 'Document Destruction',
    location: 'UK-wide',
    testimonial: 'The local SEO strategy Extra Edge Club implemented has driven a significant increase in qualified leads across all our service areas.'
  }
];

export const featuredTestimonial = {
  quote: "Extra Edge Club transformed our online presence. We went from barely ranking to dominating local search in Manchester. The team's expertise and hands-on approach made all the difference. Our enquiries have tripled.",
  client: 'Tidy Money',
  industry: 'Financial Services',
  location: 'Manchester',
  initials: 'TM'
};
