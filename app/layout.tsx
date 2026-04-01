import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Schema from '@/components/Schema';
import './globals.css';

export const metadata: Metadata = {
  // www is the canonical origin — every relative URL and og:url resolves against this
  metadataBase: new URL('https://www.extraedgeclub.com'),
  applicationName: 'Extra Edge Club',
  title: {
    default: 'Extra Edge Club | SEO Agency UK | Since 2011',
    template: '%s | Extra Edge Club',
  },
  description:
    "UK SEO specialists since 2011. We help businesses grow through Local SEO and comprehensive SEO services. Trusted by Sixes Cricket, The Gentleman's Journal, and more.",
  keywords: ['SEO agency UK', 'local SEO', 'digital marketing', 'search engine optimisation'],
  authors: [{ name: 'Extra Edge Club Ltd' }],
  alternates: {
    canonical: 'https://www.extraedgeclub.com',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.extraedgeclub.com',
    siteName: 'Extra Edge Club',
    images: ['/logo.png'],
  },
  verification: {
    google: 'JUJUgKhz4l3wDbUsS5QQmRbhymeh_h5dIKMwmlsLGBQ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Schema />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WDHLP2MX1P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDHLP2MX1P');
          `}
        </Script>
      </head>
      <body className="bg-dark text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
