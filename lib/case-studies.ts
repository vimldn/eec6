export interface CaseStudy {
  slug: string;
  client: string;
  type: 'National Brand' | 'Local Business';
  industry: string;
  location: string;
  services: string[];
  summary: string;
  heroStat: { value: string; label: string };
  results: { value: string; label: string }[];
  challenge: string;
  strategy: { title: string; description: string }[];
  outcome: string;
  quote?: { text: string; attribution: string; role: string };
  timeframe: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sixes-cricket',
    client: 'Sixes Cricket',
    type: 'National Brand',
    industry: 'Entertainment & Hospitality',
    location: 'UK — Multiple Locations',
    services: ['SEO', 'Local SEO', 'Content Strategy'],
    summary: 'Sixes Cricket needed organic visibility for a new entertainment concept launching across multiple UK cities, competing against established entertainment venues with years of domain authority.',
    heroStat: { value: '312%', label: 'increase in organic traffic' },
    results: [
      { value: '312%', label: 'Organic traffic increase' },
      { value: '#1', label: 'Rankings for primary venue terms' },
      { value: '8', label: 'Cities in top 3 Local Pack' },
      { value: '6mo', label: 'To first significant ranking gains' },
    ],
    challenge: `Sixes Cricket launched into a highly competitive entertainment market where every city had established venues with years of accumulated SEO strength. As a new concept — interactive cricket dining, something Google's algorithm had no prior reference points for — they faced the dual challenge of building category authority from scratch while simultaneously targeting high-competition local terms in each city. Standard venue SEO playbooks didn't apply.`,
    strategy: [
      {
        title: 'Category Definition',
        description: 'Before targeting keywords, we worked to help Google understand the category itself. We created content that positioned interactive cricket dining as a distinct experience type, giving Google the semantic context to understand what Sixes Cricket was and how to classify it.',
      },
      {
        title: 'Multi-Location Architecture',
        description: 'We built a scalable location page architecture that gave each venue its own authoritative page optimised for city-specific entertainment terms, while maintaining a coherent site structure that built central domain authority.',
      },
      {
        title: 'Google Business Profile Rollout',
        description: 'Each location received a fully optimised GBP with precise category selection, comprehensive services and attributes, and a systematic photo and post strategy from opening week.',
      },
      {
        title: 'Event and Experience Content',
        description: 'We developed a content strategy around the experience occasions Sixes serves — corporate events, group bookings, birthday experiences — targeting the high-intent queries that convert to bookings rather than just brand-awareness terms.',
      },
    ],
    outcome: `Within six months of launch, Sixes Cricket venues were ranking on page 1 for their primary venue terms in every city. The multi-location Local SEO strategy delivered Local Pack presence across all eight UK venues, and organic traffic became a meaningful driver of booking enquiries, reducing the brand's reliance on paid social and influencer campaigns for event fills.`,
    quote: {
      text: 'Extra Edge Club understood immediately that we weren\'t just another restaurant or bar. They built a strategy that treated us as the new category we actually are, and the results reflect that thinking.',
      attribution: 'Sixes Cricket',
      role: 'Marketing Team',
    },
    timeframe: '2022 — Ongoing',
  },
  {
    slug: 'the-gentlemans-journal',
    client: "The Gentleman's Journal",
    type: 'National Brand',
    industry: 'Media & Publishing',
    location: 'London, UK',
    services: ['SEO', 'Content Strategy', 'Technical SEO'],
    summary: "The Gentleman's Journal needed to compete against established luxury lifestyle publications with significantly larger teams and budgets, while maintaining the editorial quality that defines their brand.",
    heroStat: { value: '450%', label: 'increase in organic sessions' },
    results: [
      { value: '450%', label: 'Organic session growth' },
      { value: '38', label: 'Featured snippets won' },
      { value: '2.4x', label: 'Domain authority increase' },
      { value: '67%', label: 'Increase in new user acquisition via organic' },
    ],
    challenge: `GJ operates in a media category where Condé Nast, Hearst, and Future Publishing dominate organic search with enormous content teams and decades of accumulated authority. Competing head-on was not viable. The strategy needed to identify and dominate the specific territory where GJ's editorial voice and genuine expertise created a sustainable competitive moat.`,
    strategy: [
      {
        title: 'Content Gap Analysis',
        description: 'We mapped GJ\'s existing content against competitor coverage to identify high-value topics where GJ could credibly lead the conversation — particularly in British heritage, tailoring, watchmaking, and niche luxury lifestyle categories underserved by larger competitors.',
      },
      {
        title: 'Internal Linking Architecture',
        description: 'GJ had an enormous content archive with poor internal linking. We restructured the internal link strategy to build topical authority clusters around GJ\'s core categories, channelling authority from high-performing older content to target pages.',
      },
      {
        title: 'Technical SEO Overhaul',
        description: 'A full technical audit identified crawl inefficiencies, duplicate content issues from tag and category pages, and Core Web Vitals failures on mobile. Resolving these released ranking potential that was already being held back.',
      },
      {
        title: 'Featured Snippet Targeting',
        description: 'We identified informational queries within GJ\'s topic territory where featured snippets were available, reformatted and enriched target articles to claim those positions, and used them as traffic drivers to deeper editorial content.',
      },
    ],
    outcome: `Over 18 months, GJ grew organic sessions by 450%. Featured snippet wins brought high-intent traffic to articles that previously relied entirely on social distribution. The brand established clear search leadership in British heritage lifestyle content, creating a sustainable organic channel that has reduced dependence on newsletter and social traffic.`,
    quote: {
      text: "They understand the intersection of quality editorial content and search strategy in a way that's rare. They've never once suggested we dilute our voice to chase a keyword.",
      attribution: "The Gentleman's Journal",
      role: 'Digital Editor',
    },
    timeframe: '2021 — Ongoing',
  },
  {
    slug: 'tidy-money',
    client: 'Tidy Money',
    type: 'Local Business',
    industry: 'Financial Services',
    location: 'Manchester',
    services: ['Local SEO', 'Google Business Profile'],
    summary: 'Tidy Money, a Manchester-based financial services firm, was invisible in local search despite years of trading and a strong client retention rate. Competitors with weaker services were capturing all local search demand.',
    heroStat: { value: '3x', label: 'increase in organic enquiries' },
    results: [
      { value: 'Top 3', label: 'Local Pack for primary terms' },
      { value: '3x', label: 'Monthly enquiry volume' },
      { value: '4.8★', label: 'Google rating (from 3.2★)' },
      { value: '94', label: 'New reviews in 12 months' },
    ],
    challenge: `Tidy Money had strong word-of-mouth but no systematic approach to online visibility. Their Google Business Profile was incomplete, their website had no location-specific content, and they had accumulated only 11 reviews over five years despite serving hundreds of clients. Competitors with lesser services dominated the Local Pack entirely because they had invested in Local SEO and Tidy Money had not.`,
    strategy: [
      {
        title: 'Google Business Profile Rebuild',
        description: 'We audited and rebuilt the GBP from scratch — correct primary and secondary categories for financial services, a rewritten description targeting local intent keywords, 85 new photos added over three months, and a structured Google Posts schedule.',
      },
      {
        title: 'Review Generation System',
        description: 'We implemented a post-meeting review request process that converted satisfied clients into reviewers at a consistent rate. Within 90 days, Tidy Money had moved from 11 reviews to 47, with a star rating improvement from 3.2 to 4.6.',
      },
      {
        title: 'Location Content Strategy',
        description: "We created Manchester-specific service pages addressing the financial planning needs of the city's specific business and residential demographic, including content targeting Manchester-based small business owners and contractors.",
      },
      {
        title: 'Citation Cleanup',
        description: 'A full citation audit revealed 23 inconsistencies across directories, including two conflicting phone numbers from a previous office move. We corrected all inconsistencies and built 40 new consistent citations on authoritative platforms.',
      },
    ],
    outcome: `Within eight months, Tidy Money held a top 3 Local Pack position for their primary service terms in Manchester. Monthly enquiry volume tripled, with organic search becoming their primary new client acquisition channel. The review generation system remains active and continues to build their online reputation.`,
    quote: {
      text: "We went from barely ranking to dominating local search in Manchester. The team's expertise and hands-on approach made all the difference. Our enquiries have tripled.",
      attribution: 'Tidy Money',
      role: 'Financial Services, Manchester',
    },
    timeframe: '2023 — 2024',
  },
  {
    slug: 'makwana-solicitors',
    client: 'Makwana Solicitors',
    type: 'Local Business',
    industry: 'Legal Services',
    location: 'London',
    services: ['Local SEO', 'SEO', 'Content Strategy'],
    summary: 'Makwana Solicitors needed to build online visibility in a highly competitive London legal market, particularly for criminal defence and motoring law — categories where national firms dominate paid search and strong regional firms have established organic positions.',
    heroStat: { value: '150%', label: 'increase in organic leads' },
    results: [
      { value: '150%', label: 'Organic lead increase' },
      { value: 'Page 1', label: 'Rankings for 12 practice area terms' },
      { value: '41', label: 'New Google reviews in 6 months' },
      { value: '2.8x', label: 'GBP profile views increase' },
    ],
    challenge: `Criminal defence and motoring law are among the most competitive legal search categories in London. National firms dominate paid search with high CPCs. Regional firms have invested in SEO for years. Makwana needed to find the specific territory where their genuine expertise — fare evasion defence, blue badge misuse, regulatory driving offences — gave them a credible authority position unavailable to generalist competitors.`,
    strategy: [
      {
        title: 'Niche Authority Building',
        description: "We identified Makwana's specific areas of genuine expertise and built authoritative, technically detailed content around those niches. Fare evasion defence, blue badge misuse, and specific driving offence categories where Makwana's track record was demonstrable gave us a foundation for credible E-E-A-T content.",
      },
      {
        title: 'Practice Area Page Depth',
        description: 'Existing practice area pages were thin and generic. We rebuilt each one with genuine procedural depth — what happens at each stage of the process, typical outcomes by case type, what to do immediately after charge — content that demonstrates expert knowledge and addresses the specific anxieties of someone facing a criminal or motoring charge.',
      },
      {
        title: 'Local Visibility',
        description: 'We optimised the GBP for the specific London courts and areas Makwana serves, created local content referencing specific court procedures and local context, and built a structured review acquisition process leveraging satisfied client outcomes.',
      },
      {
        title: 'Schema and Technical',
        description: 'Added LegalService schema with precise practice area classifications, attorney schema for named solicitors with bar registration references, and FAQ schema targeting common queries around criminal and motoring charges.',
      },
    ],
    outcome: `Makwana Solicitors achieved page 1 rankings for 12 of their target practice area terms within ten months. Organic leads — tracked through form submissions with UTM attribution — increased 150% year-over-year. The firm's GBP became a meaningful new client source in its own right.`,
    timeframe: '2023 — Ongoing',
  },
  {
    slug: 'firestar-toys',
    client: 'FireStar Toys',
    type: 'National Brand',
    industry: 'E-commerce & Retail',
    location: 'UK — National',
    services: ['SEO', 'Technical SEO', 'Content Strategy'],
    summary: 'FireStar Toys, a specialist LEGO-compatible brick retailer, needed to compete in a market dominated by LEGO itself and major retailers with enormous marketing budgets.',
    heroStat: { value: '280%', label: 'increase in organic revenue' },
    results: [
      { value: '280%', label: 'Organic revenue growth' },
      { value: 'Top 3', label: 'Rankings for primary product categories' },
      { value: '184%', label: 'Increase in organic sessions' },
      { value: '22%', label: 'Improvement in conversion rate from organic' },
    ],
    challenge: `FireStar Toys operates in a niche where the category leader (LEGO) has a domain authority that makes direct competition on head terms essentially impossible. Major retailers (Amazon, Smyths, Argos) absorb the remaining high-volume terms. The strategy needed to find the territory where a specialist retailer's depth of knowledge and product range created a genuine competitive advantage.`,
    strategy: [
      {
        title: 'Long-Tail Category Architecture',
        description: 'We built a comprehensive category page structure targeting the specific product types, themes, and compatibility queries that specialists search for but generalist retailers ignore. "LEGO-compatible space sets," "custom minifigure accessories," and hundreds of similar terms added up to significant qualified traffic.',
      },
      {
        title: 'Product Page SEO at Scale',
        description: 'Individual product pages were thin and unconverted. We implemented a structured approach to product page optimisation — unique descriptions, specification tables, compatibility information, and user-generated content integration — across thousands of SKUs.',
      },
      {
        title: 'Buyer Guide Content',
        description: 'We created comprehensive buyer guides targeting the informational queries that specialty toy shoppers use before making purchasing decisions. These drove qualified traffic and built internal links to relevant category pages.',
      },
      {
        title: 'Technical Performance',
        description: 'An e-commerce site with thousands of product pages faces significant technical SEO challenges — faceted navigation, duplicate content, crawl budget management, and page speed at scale. We resolved all primary technical issues and implemented ongoing monitoring.',
      },
    ],
    outcome: `FireStar Toys achieved 280% organic revenue growth over two years. Top 3 rankings across their primary product category terms drove a sustained increase in qualified traffic that converted at a significantly higher rate than their previous paid channels. The long-tail content strategy continues to compound as new product lines are added.`,
    timeframe: '2022 — 2024',
  },
  {
    slug: 'total-shred',
    client: 'Total Shred',
    type: 'Local Business',
    industry: 'Document Destruction',
    location: 'UK — Multiple Service Areas',
    services: ['Local SEO'],
    summary: 'Total Shred needed to dominate local search for document shredding services across multiple UK cities, competing against large national providers with established digital presence.',
    heroStat: { value: '200%', label: 'increase in quote requests' },
    results: [
      { value: '200%', label: 'Quote request increase' },
      { value: '15+', label: 'Cities with Local Pack presence' },
      { value: 'Top 3', label: 'Local rankings in primary markets' },
      { value: '67%', label: 'Reduction in cost per lead vs paid' },
    ],
    challenge: `Document destruction is a high-intent, local-first search category — businesses need a compliant shredding service in their area, and they need it from a provider they can trust with sensitive materials. Total Shred had a great service but no systematic local search presence. National competitors with marketing teams and larger budgets dominated the Local Pack in every city Total Shred served.`,
    strategy: [
      {
        title: 'Multi-Location GBP Strategy',
        description: 'We created and fully optimised Google Business Profiles for each of Total Shred\'s primary service locations, with location-specific categories, service descriptions, and photo content relevant to each area.',
      },
      {
        title: 'Service Area Page Architecture',
        description: 'We built dedicated, content-rich service area pages for every city Total Shred operates in. Each page addressed the specific compliance requirements, typical customer types, and local context relevant to businesses in that area.',
      },
      {
        title: 'Trust and Compliance Content',
        description: 'Document destruction is a compliance-driven purchase. We built content around data protection legislation, BS EN 15713 certification, and GDPR compliance that positioned Total Shred as the authoritative, trustworthy choice for businesses with legal data destruction obligations.',
      },
      {
        title: 'Citation Building at Scale',
        description: 'We built consistent, accurate citations across 80+ directories for each service location, ensuring NAP consistency across the entire digital footprint and establishing strong local prominence signals in each market.',
      },
    ],
    outcome: `Total Shred achieved Local Pack presence in 15+ cities within twelve months. Quote request volume grew 200% with organic search replacing paid advertising as the primary lead generation channel. The cost per lead from organic significantly undercut their previous PPC spend, improving overall marketing ROI.`,
    timeframe: '2023 — 2024',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
