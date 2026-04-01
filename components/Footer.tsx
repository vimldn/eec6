import Link from 'next/link';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  const topLocations = locations.slice(0, 6);

  return (
    <footer style={{ background: 'var(--ink)', borderTop: '3px solid var(--brand)' }}>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div
                className="text-3xl leading-none tracking-wider text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Extra<span style={{ color: 'var(--brand)' }}>Edge</span> Club
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: '#666', fontFamily: 'var(--font-body)' }}
            >
              SEO specialists helping UK businesses grow since 2011. Real results, not just rankings.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#555' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#555' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, color: '#444' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}/`}
                    className="text-sm transition-colors"
                    style={{ color: '#666', fontFamily: 'var(--font-body)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, color: '#444' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us',      href: '/about/' },
                { label: 'Case Studies',  href: '/case-studies/' },
                { label: 'Blog',          href: '/blog/' },
                { label: 'Contact',       href: '/contact/' },
                { label: 'Privacy Policy',href: '/privacy/' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: '#666', fontFamily: 'var(--font-body)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, color: '#444' }}
            >
              London Areas
            </h4>
            <ul className="space-y-3">
              {topLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/localseoagency/${location.slug}/`}
                    className="text-sm transition-colors"
                    style={{ color: '#666', fontFamily: 'var(--font-body)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #222' }}
        >
          <p className="text-sm" style={{ color: '#555', fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Extra Edge Club Ltd. All rights reserved. · SEO Specialists since 2011.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy/' },
              { label: 'Terms',          href: '/terms/' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs uppercase tracking-wider transition-colors"
                style={{
                  color: '#555',
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
