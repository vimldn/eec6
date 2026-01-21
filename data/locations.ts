export interface Location {
  slug: string;
  name: string;
  image: string;
  population: string;
  businesses: string;
  avgRent: string;
  keyIndustries: string[];
  description: string;
  businessLandscape: string;
  whyLocalSeo: string;
  landmarks: string[];
  searchVolume: string;
}

export const locations: Location[] = [
  {
    slug: 'london',
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1170&auto=format&fit=crop',
    population: '8.8 million',
    businesses: '1.1 million+',
    avgRent: '£2,500/month',
    keyIndustries: ['Financial Services', 'Technology', 'Creative Industries', 'Professional Services', 'Hospitality'],
    description: 'London is the economic powerhouse of the United Kingdom and one of the world\'s leading global cities. As the capital, it serves as the hub for finance, technology, creative industries, and tourism, attracting millions of visitors and generating billions in economic activity annually.',
    businessLandscape: 'With over 1.1 million registered businesses, London represents the most competitive and lucrative market in the UK. From the towering financial institutions of the City to the creative startups of Shoreditch, and from Michelin-starred restaurants in Mayfair to independent boutiques in Notting Hill, the diversity of London\'s business ecosystem is unparalleled. The city accounts for nearly a quarter of the UK\'s total GDP, making visibility here absolutely critical for business success.',
    whyLocalSeo: 'In a city of nearly 9 million people, standing out in local search results can be the difference between thriving and merely surviving. Londoners conduct millions of "near me" searches daily, looking for everything from emergency plumbers to fine dining. With 46% of all Google searches having local intent, and 78% of local mobile searches resulting in offline purchases, local SEO isn\'t optional in London—it\'s essential for any business wanting to capture their share of this enormous market.',
    landmarks: ['Big Ben', 'Tower Bridge', 'Buckingham Palace', 'The Shard', 'London Eye'],
    searchVolume: '450,000+ monthly local searches'
  },
  {
    slug: 'camden',
    name: 'Camden',
    image: 'https://images.unsplash.com/photo-1675450727416-b3fcf05a2fde?q=80&w=1170&auto=format&fit=crop',
    population: '270,000',
    businesses: '21,000+',
    avgRent: '£2,200/month',
    keyIndustries: ['Retail', 'Hospitality', 'Music & Entertainment', 'Creative Arts', 'Tourism'],
    description: 'Camden is one of London\'s most vibrant and eclectic boroughs, famous worldwide for Camden Market, its alternative culture, and thriving music scene. The area attracts over 28 million visitors annually to its markets alone, making it one of the most visited destinations in London.',
    businessLandscape: 'Camden\'s business landscape is as diverse as its culture. The famous Camden Market hosts over 1,000 unique shops, stalls, and food vendors, while Camden High Street buzzes with independent retailers, vintage shops, and international restaurants. The area is also home to a growing number of tech startups and creative agencies, drawn by the vibrant atmosphere and excellent transport links. From iconic music venues like the Roundhouse to boutique hotels and wellness studios, Camden offers opportunities across virtually every sector.',
    whyLocalSeo: 'With 28 million annual visitors to Camden Market and a resident population of 270,000, the competition for local visibility is intense. Tourists searching for "best food in Camden" or "vintage shops near Camden Lock" represent immediate purchasing opportunities. Meanwhile, local residents consistently search for services from dentists to dry cleaners. A strong local SEO presence ensures your business captures both the tourist trade and loyal local customers, making the difference between being discovered or being invisible among thousands of competitors.',
    landmarks: ['Camden Market', 'Camden Lock', 'The Roundhouse', 'Regent\'s Canal', 'Primrose Hill'],
    searchVolume: '85,000+ monthly local searches'
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    image: 'https://images.unsplash.com/photo-1711525346100-01021eba790c?q=80&w=1090&auto=format&fit=crop',
    population: '260,000',
    businesses: '55,000+',
    avgRent: '£3,500/month',
    keyIndustries: ['Government', 'Professional Services', 'Luxury Retail', 'Hospitality', 'Tourism'],
    description: 'Westminster is the political heart of the United Kingdom, home to the Houses of Parliament, Buckingham Palace, and some of the world\'s most prestigious addresses. This historic borough combines governmental importance with luxury retail, world-class hotels, and Michelin-starred dining.',
    businessLandscape: 'Westminster hosts an extraordinary concentration of high-value businesses. The West End contains more theatres than Broadway, while Oxford Street remains Europe\'s busiest shopping destination with over 500 million annual visitors. Mayfair and St James\'s house the headquarters of hedge funds, private equity firms, and luxury brands. Bond Street alone generates more revenue per square foot than almost any other retail location globally. From five-star hotels to bespoke tailors, Westminster businesses cater to the most discerning clientele.',
    whyLocalSeo: 'Operating in Westminster means competing in one of the world\'s premium markets. When affluent tourists search for "best restaurants near Westminster" or business executives look for "corporate lawyers Mayfair," your visibility directly impacts revenue. The stakes are higher here—a single client from a Westminster search could be worth thousands of pounds. Local SEO in Westminster isn\'t just about volume; it\'s about capturing high-intent, high-value searches from a global audience with significant spending power.',
    landmarks: ['Houses of Parliament', 'Westminster Abbey', 'Buckingham Palace', 'Big Ben', 'Trafalgar Square'],
    searchVolume: '120,000+ monthly local searches'
  },
  {
    slug: 'hackney',
    name: 'Hackney',
    image: 'https://images.unsplash.com/photo-1606489375444-c194a57b370c?q=80&w=1331&auto=format&fit=crop',
    population: '280,000',
    businesses: '18,000+',
    avgRent: '£1,900/month',
    keyIndustries: ['Technology', 'Creative Industries', 'Food & Beverage', 'Fashion', 'Arts & Culture'],
    description: 'Hackney has transformed from a working-class borough into one of London\'s most dynamic and creative areas. Now a hotbed for startups, independent restaurants, and artistic ventures, Hackney represents the cutting edge of London\'s cultural and entrepreneurial scene.',
    businessLandscape: 'Hackney\'s business ecosystem reflects its creative spirit. Broadway Market and London Fields attract foodies and artisan producers, while Mare Street and Dalston host independent boutiques and galleries. The borough has become a magnet for tech startups, with co-working spaces and incubators sprouting throughout. Fashion designers, photographers, and digital agencies call Hackney home, attracted by relatively affordable rents and a community that values innovation and authenticity. The food scene alone features everything from Michelin-recommended restaurants to legendary street food.',
    whyLocalSeo: 'Hackney\'s audience is digitally sophisticated and relies heavily on search to discover new businesses. When residents search for "best brunch Hackney" or "co-working space London Fields," they expect to find authentic, local recommendations. The borough\'s population has grown by 20% in the past decade, bringing young professionals who make purchasing decisions based on online visibility. For Hackney businesses, local SEO is crucial for connecting with this tech-savvy, experience-driven demographic that values discovering the next hidden gem.',
    landmarks: ['Broadway Market', 'London Fields', 'Victoria Park', 'Hackney Empire', 'Mare Street'],
    searchVolume: '65,000+ monthly local searches'
  },
  {
    slug: 'islington',
    name: 'Islington',
    image: 'https://images.unsplash.com/photo-1658175701845-da364b0a8ed5?q=80&w=739&auto=format&fit=crop',
    population: '240,000',
    businesses: '16,000+',
    avgRent: '£2,100/month',
    keyIndustries: ['Professional Services', 'Hospitality', 'Retail', 'Healthcare', 'Creative Industries'],
    description: 'Islington is one of London\'s most desirable inner-city boroughs, known for its Georgian townhouses, vibrant Upper Street, and mix of affluent professionals and creative types. The area seamlessly blends historic charm with contemporary sophistication.',
    businessLandscape: 'Upper Street forms the commercial spine of Islington, stretching over a mile with restaurants, bars, boutiques, and antique shops. The area attracts a well-heeled clientele—Islington residents have some of the highest average incomes in London. Angel and Highbury & Islington serve as major transport hubs, bringing foot traffic to local businesses. The borough also hosts significant business centres, medical practices along Harley Street\'s northern extension, and a thriving theatre scene anchored by the Almeida and Sadler\'s Wells.',
    whyLocalSeo: 'Islington\'s affluent, educated population conducts extensive online research before making purchasing decisions. They search for "best Italian restaurant Islington," "private dentist Angel," or "interior designer Upper Street" with clear intent to buy quality. This demographic expects businesses to have strong online presence—poor visibility signals poor quality. Local SEO in Islington connects you with customers who have high lifetime value and are willing to pay premium prices for services and products that meet their standards.',
    landmarks: ['Upper Street', 'Angel Station', 'Camden Passage', 'Sadler\'s Wells', 'Emirates Stadium'],
    searchVolume: '55,000+ monthly local searches'
  },
  {
    slug: 'shoreditch',
    name: 'Shoreditch',
    image: 'https://images.unsplash.com/photo-1681567474172-348bfb7083b6?q=80&w=1090&auto=format&fit=crop',
    population: '15,000 (residents), 50,000+ (daily workers)',
    businesses: '8,000+',
    avgRent: '£2,400/month',
    keyIndustries: ['Technology', 'Creative & Digital', 'Hospitality', 'Fashion', 'Media'],
    description: 'Shoreditch is London\'s undisputed tech and creative hub. Once an industrial area, it\'s now home to "Silicon Roundabout," countless creative agencies, and some of the city\'s most innovative restaurants and nightlife venues. The area pulses with entrepreneurial energy.',
    businessLandscape: 'Shoreditch punches far above its weight in economic impact. The area around Old Street roundabout—dubbed Silicon Roundabout—hosts thousands of tech startups, scale-ups, and major tech companies\' UK headquarters. Creative agencies, production companies, and digital studios fill the converted warehouses. The hospitality scene is equally innovative, with rooftop bars, experimental restaurants, and members\' clubs catering to the creative crowd. Box Park Shoreditch pioneered the container mall concept, hosting pop-up retail and food vendors.',
    whyLocalSeo: 'Shoreditch\'s business community lives online. When a startup founder searches for "best coffee shop to work from Shoreditch" or a creative director looks for "photography studio hire Old Street," they\'re making decisions that could lead to long-term business relationships. The area\'s workers and visitors are early adopters who influence broader trends. Capturing local search traffic in Shoreditch means reaching tastemakers and decision-makers with significant budgets and networks that extend far beyond the neighbourhood.',
    landmarks: ['Old Street Roundabout', 'Box Park', 'Brick Lane', 'Shoreditch High Street', 'Hoxton Square'],
    searchVolume: '75,000+ monthly local searches'
  },
  {
    slug: 'kensington',
    name: 'Kensington',
    image: 'https://images.unsplash.com/photo-1568340334214-0ae2b14db2d7?q=80&w=1074&auto=format&fit=crop',
    population: '156,000',
    businesses: '12,000+',
    avgRent: '£3,200/month',
    keyIndustries: ['Luxury Retail', 'Professional Services', 'Education', 'Healthcare', 'Hospitality'],
    description: 'Kensington is one of London\'s most prestigious and affluent areas, home to world-famous museums, royal palaces, and some of the most expensive real estate on Earth. The borough combines cultural richness with understated luxury and old-money elegance.',
    businessLandscape: 'Kensington\'s business community caters to an exceptionally affluent clientele. High Street Kensington offers upscale retail, while the side streets house boutique galleries, antique dealers, and bespoke service providers. The area around South Kensington stations benefits from museum visitors—the V&A, Natural History Museum, and Science Museum collectively attract over 15 million visitors annually. Private healthcare, premium education services, and luxury property management thrive here, serving residents and international clients who expect the absolute best.',
    whyLocalSeo: 'Kensington clients conduct thorough research and have exacting standards. When they search for "private GP Kensington" or "bespoke curtains South Kensington," they\'re looking for quality and are willing to pay premium prices. International residents and visitors also search in English, expanding your potential market. The high average transaction value in Kensington means that ranking for local searches delivers exceptional ROI—a single new client from a local search could represent significant revenue for years to come.',
    landmarks: ['Kensington Palace', 'Natural History Museum', 'V&A Museum', 'Royal Albert Hall', 'High Street Kensington'],
    searchVolume: '48,000+ monthly local searches'
  },
  {
    slug: 'chelsea',
    name: 'Chelsea',
    image: 'https://images.unsplash.com/photo-1654363137022-6851ec30c949?q=80&w=687&auto=format&fit=crop',
    population: '80,000',
    businesses: '6,500+',
    avgRent: '£3,800/month',
    keyIndustries: ['Luxury Retail', 'Art & Antiques', 'Hospitality', 'Interior Design', 'Professional Services'],
    description: 'Chelsea epitomizes refined London living. This elegant neighbourhood along the Thames is famous for the King\'s Road, world-class art galleries, and a lifestyle that blends tradition with contemporary sophistication. Chelsea remains one of London\'s most desirable addresses.',
    businessLandscape: 'Chelsea\'s King\'s Road has been a fashion and lifestyle destination since the Swinging Sixties. Today, it hosts a curated mix of designer boutiques, upscale home furnishing stores, and acclaimed restaurants. The area around Sloane Square caters to the "Sloane Ranger" set with luxury brands and traditional British retailers. Chelsea also boasts a thriving art market, with galleries concentrated around the Saatchi Gallery. The annual Chelsea Flower Show brings global attention to the area, while Chelsea FC attracts a different but equally passionate crowd.',
    whyLocalSeo: 'Chelsea\'s residents and visitors expect exclusivity and quality. When someone searches for "florist Chelsea" or "personal trainer King\'s Road," they\'re typically looking for premium services and products. The area\'s international character means searches come from global audiences researching before they visit or relocate. Local SEO in Chelsea positions your business to capture these high-value prospects at the exact moment they\'re looking to spend. In an area where reputation is everything, search visibility serves as a crucial trust signal.',
    landmarks: ['King\'s Road', 'Sloane Square', 'Saatchi Gallery', 'Chelsea Physic Garden', 'Stamford Bridge'],
    searchVolume: '42,000+ monthly local searches'
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    image: 'https://images.unsplash.com/photo-1587413407133-0541ff878793?q=80&w=1170&auto=format&fit=crop',
    population: '16,000 (residents), 120,000+ (daily workers)',
    businesses: '1,500+ (major tenants)',
    avgRent: '£2,800/month',
    keyIndustries: ['Financial Services', 'Professional Services', 'Technology', 'Media', 'Hospitality'],
    description: 'Canary Wharf is London\'s second major financial district, a gleaming cluster of skyscrapers on the old West India Docks. Home to major banks, law firms, and media companies, it represents modern London\'s ambition and has evolved into a self-contained business city.',
    businessLandscape: 'Canary Wharf hosts the European headquarters of major global banks including HSBC, Barclays, and JP Morgan. The estate contains over 16 million square feet of office space, occupied by financial services firms, law firms, professional services companies, and increasingly, tech companies. The development includes extensive retail across five shopping malls, restaurants ranging from quick-service to fine dining, and a growing residential community. The area operates almost as a separate city, with its own infrastructure, security, and estate management.',
    whyLocalSeo: 'The 120,000+ professionals working in Canary Wharf represent a concentrated market with significant spending power. They search for "lunch delivery Canary Wharf," "gym near One Canada Square," or "dry cleaner E14" daily. The time-poor nature of this workforce means they rely heavily on quick local searches to solve immediate needs. Businesses that capture these searches benefit from repeat customers—once someone finds their go-to lunch spot or barber, they tend to stick with it. Local SEO here means accessing a captive audience of affluent professionals.',
    landmarks: ['One Canada Square', 'Crossrail Place', 'Jubilee Park', 'Museum of London Docklands', 'Canada Place'],
    searchVolume: '38,000+ monthly local searches'
  },
  {
    slug: 'brixton',
    name: 'Brixton',
    image: 'https://images.unsplash.com/photo-1674891683510-fa1c094803db?q=80&w=1332&auto=format&fit=crop',
    population: '89,000',
    businesses: '4,500+',
    avgRent: '£1,700/month',
    keyIndustries: ['Food & Beverage', 'Retail', 'Music & Entertainment', 'Creative Industries', 'Community Services'],
    description: 'Brixton is one of South London\'s most vibrant and culturally rich neighbourhoods. Famous for its Afro-Caribbean heritage, legendary music scene, and dynamic markets, Brixton has evolved into a diverse community that celebrates its history while embracing new creative and culinary ventures.',
    businessLandscape: 'Brixton Village and Market Row have transformed from traditional markets into foodie destinations featuring cuisines from around the world. Electric Avenue—yes, the one from the song—bustles with independent traders and market stalls. The area\'s music heritage lives on through venues like the O2 Academy Brixton, drawing concert-goers who fuel the local hospitality economy. Pop Brixton, a community project built from shipping containers, hosts startups, restaurants, and events. The neighbourhood supports a thriving independent business scene, from barbershops to boutiques.',
    whyLocalSeo: 'Brixton\'s community values authenticity and local businesses. When residents search for "Caribbean restaurant Brixton" or visitors look for "bars near Brixton Academy," they want to find genuine local establishments, not chains. The area\'s growing reputation as a dining and nightlife destination brings new audiences searching for recommendations. Local SEO connects your business with both loyal locals and curious visitors, establishing your place in a neighbourhood where word-of-mouth matters but discovery increasingly starts online.',
    landmarks: ['Brixton Village', 'Electric Avenue', 'O2 Academy Brixton', 'Pop Brixton', 'Brockwell Park'],
    searchVolume: '52,000+ monthly local searches'
  },
  {
    slug: 'fulham',
    name: 'Fulham',
    image: 'https://images.unsplash.com/photo-1517394834181-95ed159986c7?q=80&w=1174&auto=format&fit=crop',
    population: '180,000',
    businesses: '8,000+',
    avgRent: '£2,100/month',
    keyIndustries: ['Hospitality', 'Retail', 'Professional Services', 'Health & Fitness', 'Property'],
    description: 'Fulham is a sought-after residential area in southwest London, popular with young professionals and families drawn to its village-like atmosphere, riverside walks, and excellent amenities. The area offers a more relaxed pace while remaining well-connected to central London.',
    businessLandscape: 'Fulham\'s commercial centres along Fulham Road, Wandsworth Bridge Road, and Fulham Broadway cater to an affluent, family-oriented demographic. The area excels in premium casual dining, fitness studios, children\'s services, and home improvement. Parsons Green and its surroundings host gastropubs, boutique fitness classes, and independent shops that serve local families. The riverside at Putney Bridge attracts rowing clubs, waterside dining, and weekend walkers. Two football grounds—Craven Cottage and Stamford Bridge nearby—bring match-day trade.',
    whyLocalSeo: 'Fulham residents are typically time-poor professionals who rely on local search to manage their busy lives. They search for "best brunch Parsons Green," "children\'s swimming lessons Fulham," or "emergency plumber SW6" with intent to act quickly. The family demographic means searches often relate to children\'s activities, schools, and family-friendly venues. Building strong local search visibility in Fulham means becoming part of the community\'s essential services—the trusted businesses that residents return to repeatedly and recommend to neighbours.',
    landmarks: ['Craven Cottage', 'Bishops Park', 'Parsons Green', 'Fulham Palace', 'Putney Bridge'],
    searchVolume: '45,000+ monthly local searches'
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(location => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map(location => location.slug);
}
