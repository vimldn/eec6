/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#ff6b35',
          light: '#f7c59f',
          dark: '#e55a2b',
        },
        'dark': {
          DEFAULT: '#0a0a0f',
          lighter: '#111118',
          card: '#16161f',
        },
        'text': {
          primary: '#ffffff',
          secondary: '#8a8a9a',
          muted: '#c0c0c8',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
