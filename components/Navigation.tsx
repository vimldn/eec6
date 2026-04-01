'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_1px_0_rgba(17,17,16,0.15),0_4px_16px_rgba(17,17,16,0.06)]' : ''
        }`}
        style={{ borderBottom: '3px solid #111110' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Extra Edge Club" className="h-8 w-auto object-contain" />
            <div
              className="text-2xl leading-none tracking-wider"
              style={{ fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)' }}
            >
              Extra<span style={{ color: 'var(--brand)' }}>Edge</span> Club
            </div>
            <div
              className="hidden sm:block text-[10px] tracking-[0.25em] uppercase border-l border-rule pl-3 ml-1"
              style={{ fontFamily: 'var(--font-condensed)', color: 'var(--mid)', fontWeight: 700 }}
            >
              Since 2011
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-5 py-2 transition-colors"
                style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: servicesOpen ? '#111110' : '#888',
                }}
              >
                Services & Industries
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 bg-white" style={{ width: 480 }}
                    style={{ border: '2px solid #111110', borderTop: '3px solid var(--brand)' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                      {/* Services column */}
                      <div style={{ borderRight: '1px solid #e0d8cc' }}>
                        <div className="v1-label px-5 pt-3 pb-2" style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.2em' }}>Services</div>
                        {[
                          { href: '/localseoagency/', label: 'Local SEO', desc: 'Google Maps & local pack' },
                          { href: '/services/programmatic-seo/', label: 'Programmatic SEO', desc: 'Scale to 100s of pages' },
                          { href: '/services/seo-audit/', label: 'SEO Audit', desc: '48hr technical deep-dive' },
                          { href: '/services/technical-seo/', label: 'Technical SEO', desc: 'Core Web Vitals & schema' },
                          { href: '/services/lead-gen-architecture/', label: 'Lead-Gen Architecture', desc: 'Build ranking networks' },
                        ].map((item) => (
                          <Link key={item.href} href={item.href}
                            className="flex flex-col px-5 py-2.5 transition-colors hover:bg-[#f7f5f0]"
                            style={{ borderTop: '1px solid #f0ebe3' }}>
                            <span className="v1-label" style={{ fontSize: 11, color: '#111110', letterSpacing: '0.08em' }}>{item.label}</span>
                            <span className="v1-body" style={{ fontSize: 10, color: '#999', marginTop: 1 }}>{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                      {/* Industries column */}
                      <div>
                        <div className="v1-label px-5 pt-3 pb-2" style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.2em' }}>Industries</div>
                        {[
                          { href: '/industries/legal-seo/', label: 'Legal SEO', desc: 'Solicitors & law firms' },
                          { href: '/industries/dental-seo/', label: 'Dental SEO', desc: 'Practices & Invisalign' },
                          { href: '/industries/accountancy-seo/', label: 'Accountancy SEO', desc: 'Accountants & advisors' },
                          { href: '/industries/financial-seo/', label: 'Financial SEO', desc: 'IFAs & fintech' },
                          { href: '/industries/ecommerce-seo/', label: 'E-Commerce SEO', desc: 'Shopify & WooCommerce' },
                        ].map((item) => (
                          <Link key={item.href} href={item.href}
                            className="flex flex-col px-5 py-2.5 transition-colors hover:bg-[#f7f5f0]"
                            style={{ borderTop: '1px solid #f0ebe3' }}>
                            <span className="v1-label" style={{ fontSize: 11, color: '#111110', letterSpacing: '0.08em' }}>{item.label}</span>
                            <span className="v1-body" style={{ fontSize: 10, color: '#999', marginTop: 1 }}>{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {['Case Studies', 'Blog', 'About', 'Contact'].map((label) => {
              const href =
                label === 'Case Studies' ? '/case-studies/' :
                `/${label.toLowerCase()}/`;
              return (
                <Link
                  key={label}
                  href={href}
                  className="px-5 py-2 transition-colors hover:text-ink"
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--mid)',
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact/"
            className="hidden md:inline-flex items-center gap-2 text-white transition-colors"
            style={{
              background: 'var(--ink)',
              padding: '10px 24px',
              fontFamily: 'var(--font-condensed)',
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--brand)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ink)')}
          >
            Free SEO Audit
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-56 bg-white z-50 md:hidden"
              style={{ borderLeft: '3px solid #111110' }}
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <div className="flex justify-end p-4" style={{ borderBottom: '2px solid #111110' }}>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-4">
                {[{ href: '/localseoagency/', label: 'Local SEO' }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 transition-colors"
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontSize: 14,
                      borderBottom: '1px solid #dddddd',
                      color: '#111110',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                {['Industries', 'Case Studies', 'Blog', 'About', 'Contact'].map((label) => (
                  <Link
                    key={label}
                    href={label === 'Case Studies' ? '/case-studies/' : label === 'Industries' ? '/industries/' : `/${label.toLowerCase()}/`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 transition-colors hover:text-brand"
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontSize: 14,
                      borderBottom: '1px solid var(--rule)',
                      color: 'var(--mid)',
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
