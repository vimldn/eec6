# Extra Edge Club - SEO Agency Website

A Next.js 14 website for Extra Edge Club Ltd, an SEO agency serving London businesses since 2011.

## Features

- **Homepage** with 3D interactive orbiting rings, animated counters, and scroll animations
- **2 Service Pages**: Local SEO, SEO
- **22 Location Pages**: 11 London areas × 2 services
- **Static Pages**: About, Contact, Case Studies, Privacy Policy
- **Fully Responsive** dark theme design
- **SEO Optimised** with dynamic metadata
- **Interactive Elements**: Back-to-top button, animated counters, scroll reveals

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js (3D Orbiting Rings)
- Framer Motion (Animations)
- Static Export (for easy hosting)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## URL Structure

### Service Pages
- `/localseoagency/` - Local SEO service index (grid of all areas)
- `/seo/` - SEO service index (grid of all areas)

### Location Pages (22 total)
- `/localseoagency/london/`
- `/localseoagency/camden/`
- `/localseoagency/westminster/`
- `/localseoagency/hackney/`
- `/localseoagency/islington/`
- `/localseoagency/shoreditch/`
- `/localseoagency/kensington/`
- `/localseoagency/chelsea/`
- `/localseoagency/canary-wharf/`
- `/localseoagency/brixton/`
- `/localseoagency/fulham/`

Same structure for `/seo/[location]/`

### Other Pages
- `/about/`
- `/contact/`
- `/case-studies/`
- `/privacy/`

## London Areas Covered

1. London (Central)
2. Camden
3. Westminster
4. Hackney
5. Islington
6. Shoreditch
7. Kensington
8. Chelsea
9. Canary Wharf
10. Brixton
11. Fulham

## Deployment

This site exports as static HTML. Deploy to Vercel, Netlify, or any static host.

## License

Copyright 2025 Extra Edge Club Ltd. All rights reserved.

### Other Pages
- `/about/`
- `/contact/`
- `/case-studies/`
- `/privacy/`

## Adding City Images

Add city images to `/public/images/cities/` with the following naming convention:
- `london.jpg`
- `manchester.jpg`
- `birmingham.jpg`
- etc.

## Deployment

This site exports as static HTML. Deploy to Vercel, Netlify, or any static host.

## License

Copyright 2025 Extra Edge Club Ltd. All rights reserved.
