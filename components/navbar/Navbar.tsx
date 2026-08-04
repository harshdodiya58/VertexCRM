'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants/nav-links'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      start: 80,
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    })
  }, { scope: navRef })

  // Trap focus in mobile menu
  useEffect(() => {
    if (!isMobileOpen) return

    const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const overlay = overlayRef.current
    if (!overlay) return

    const focusables = overlay.querySelectorAll<HTMLElement>(focusableSelectors)
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    first?.focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false)
    }

    document.addEventListener('keydown', handleTab)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleTab)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isMobileOpen])

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
          isScrolled
            ? 'top-4 w-[calc(100%-1.5rem)] max-w-5xl rounded-full bg-white shadow-elevation-2 border border-border-subtle'
            : 'top-0 w-full rounded-none bg-transparent shadow-none border-transparent'
        )}
        role="banner"
      >
        <div className={cn("w-full transition-all duration-300", isScrolled ? "px-4 md:px-8" : "container-content")}>
          <div className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "h-14 md:h-16" : "h-16 md:h-20")}>
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2 font-heading font-semibold text-xl text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 rounded-sm" aria-label="VertexCRM home">
              <Image src="/logo.png" alt="VertexCRM Logo" width={40} height={40} priority quality={100} className="w-10 h-10 object-contain mix-blend-multiply" />
              <span>Vertex<span className="gradient-text">CRM</span></span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 xl:px-4 py-2 rounded-full text-sm font-medium text-text-secondary whitespace-nowrap',
                    'hover:text-accent-primary hover:bg-accent-primary/5',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex shrink-0 items-center">
              <Button variant="dark" size="sm" className="rounded-full px-5 xl:px-6 py-2.5 whitespace-nowrap" icon={ArrowUpRight} iconPosition="right" onClick={() => { }}>
                Get Demo
              </Button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden shrink-0 items-center">
              <button
                className="p-2 rounded-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileOpen}
                aria-controls="mobile-nav"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              ref={overlayRef}
              id="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed inset-0 z-50 w-full bg-white shadow-elevation-3 md:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                <Link href="/" className="flex items-center gap-2 font-heading font-semibold text-xl" onClick={() => setIsMobileOpen(false)}>
                  <Image src="/logo.png" alt="VertexCRM Logo" width={40} height={40} priority quality={100} className="w-10 h-10 object-contain mix-blend-multiply" />
                  <span>Vertex<span className="gradient-text">CRM</span></span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="p-6 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-sm text-base font-medium text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-6 pt-6 border-t border-border-subtle flex flex-col gap-3">
                  <Button variant="outline" size="md" className="w-full" onClick={() => setIsMobileOpen(false)}>
                    Sign In
                  </Button>
                  <Button variant="primary" size="md" className="w-full" onClick={() => setIsMobileOpen(false)}>
                    Get Demo
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
