import Link from 'next/link';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  const topLocations = locations.slice(0, 6);

  return (
    <footer className="bg-dark-lighter border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-light rounded-md flex items-center justify-center font-bold text-dark">
                E
              </div>
              <span className="font-bold">Extra Edge Club Ltd</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              SEO specialists helping London businesses grow since 2011. We deliver real results, not just rankings.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} className="text-white hover:text-brand transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about/" className="text-white hover:text-brand transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies/" className="text-white hover:text-brand transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-white hover:text-brand transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="text-white hover:text-brand transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-secondary mb-4">London Areas</h4>
            <ul className="space-y-3">
              {topLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={`/localseoagency/${location.slug}/`} className="text-white hover:text-brand transition-colors text-sm">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Extra Edge Club Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="text-xs text-text-secondary hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-xs text-text-secondary hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
