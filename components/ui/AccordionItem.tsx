'use client'

import { useRef, useEffect, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'
import { useMotionPreference } from '@/context/MotionPreferenceContext'

export interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const id = useId()
  const panelId = `accordion-panel-${id}`
  const buttonId = `accordion-btn-${id}`
  const { prefersReducedMotion } = useMotionPreference()

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (prefersReducedMotion) {
      el.style.height = isOpen ? 'auto' : '0px'
      el.style.overflow = isOpen ? 'visible' : 'hidden'
      return
    }

    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.fromTo(
          el,
          { height: 0, overflow: 'hidden' },
          {
            height: 'auto',
            duration: 0.45,
            ease: 'power3.out',
            onComplete: () => {
              el.style.overflow = 'visible'
            },
          }
        )
      } else {
        el.style.overflow = 'hidden'
        gsap.to(el, {
          height: 0,
          duration: 0.35,
          ease: 'power2.inOut',
        })
      }
    })

    return () => ctx.revert()
  }, [isOpen, prefersReducedMotion])

  return (
    <div
      className={cn(
        'border border-border-subtle rounded-md bg-bg-primary',
        'transition-colors duration-200',
        isOpen && 'border-accent-primary/30 shadow-elevation-1',
        className
      )}
    >
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-4 p-4',
          'text-left font-semibold text-text-primary font-heading',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-inset',
          'rounded-md transition-colors duration-200',
          'hover:text-accent-primary'
        )}
      >
        <span className="text-base">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 shrink-0 text-text-muted transition-transform duration-300',
            isOpen && 'rotate-180 text-accent-primary'
          )}
          aria-hidden="true"
        />
      </button>

      <div
        ref={contentRef}
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{ height: 0, overflow: 'hidden' }}
      >
        <div className="px-4 pb-4">
          <p className="text-text-secondary leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}
