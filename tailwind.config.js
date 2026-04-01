/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── V1 Concrete palette ───────────────────────────────────────
      colors: {
        // Surface tokens — mapped from old dark names so all existing
        // bg-dark / bg-dark-* classes automatically flip to light theme
        dark:        '#f7f5f0',   // was #0a0a0f  → warm concrete
        'dark-lighter': '#ffffff', // was #111118  → white sections
        'dark-card':    '#ffffff', // was #16161f  → white cards
        // Text tokens
        'text-primary':   '#111110',
        'text-secondary': '#888888',
        'text-muted':     '#555555',
        // Brand
        brand:        '#e85d26',
        'brand-light': '#f0a07a',
        'brand-dark':  '#c94d1a',
        // V1-specific
        ink:    '#111110',
        mid:    '#888888',
        rule:   '#e0d8cc',
        cream:  '#f7f5f0',
      },
      fontFamily: {
        // Loaded via next/font/google in layout.tsx
        display:   ['var(--font-display)',   'sans-serif'], // Bebas Neue
        condensed: ['var(--font-condensed)', 'sans-serif'], // Barlow Condensed
        body:      ['var(--font-body)',      'sans-serif'], // Barlow
      },
    },
  },
  plugins: [],
};
