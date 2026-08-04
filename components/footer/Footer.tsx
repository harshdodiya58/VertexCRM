'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, Globe, Share2, AtSign, ExternalLink, ArrowRight } from 'lucide-react'

const FOOTER_COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Lead Management', href: '#features' },
      { label: 'HRMS', href: '#features' },
      { label: 'Invoicing', href: '#features' },
      { label: 'Analytics', href: '#analytics' },
      { label: 'Automation', href: '#automation' },
      { label: 'Integrations', href: '#integrations' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Status Page', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

const SOCIAL_LINKS = [
  { icon: Globe, label: 'Twitter', href: '#' },
  { icon: Share2, label: 'LinkedIn', href: '#' },
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: ExternalLink, label: 'GitHub', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle" role="contentinfo">
      <div className="container-content pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-heading font-semibold text-xl text-text-primary mb-4">
              <Image src="/logo.png" alt="VertexCRM Logo" width={40} height={40} priority quality={100} className="w-10 h-10 object-contain mix-blend-multiply" />
              <span>Vertex<span className="gradient-text">CRM</span></span>
            </Link>
            <p className="text-sm text-text-secondary mb-6 max-w-xs">
              One platform. Every customer. Complete growth.
              Built for growing Indian businesses.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium text-text-primary mb-3">Get product updates</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Newsletter subscription"
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-3 py-2.5 text-sm border border-border-subtle rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary/50 text-text-primary placeholder:text-text-muted min-w-0"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-sm bg-accent-primary text-white text-sm font-medium hover:bg-accent-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-text-primary mb-4">{col.heading}</h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} VertexCRM. All rights reserved. Made in India 🇮🇳
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-sm flex items-center justify-center text-text-muted hover:text-accent-primary hover:bg-accent-primary/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
