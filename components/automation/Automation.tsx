'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  UserPlus, UserCheck, MessageCircle, ClipboardList,
  Clock, FileText, CheckCircle2
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useMotionPreference } from '@/context/MotionPreferenceContext'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { icon: UserPlus, label: 'Lead Comes In', description: 'Auto-captured from all sources', color: '#4F46E5' },
  { icon: UserCheck, label: 'Auto-Assigned', description: 'Routed to the right rep instantly', color: '#6D28D9' },
  { icon: MessageCircle, label: 'WhatsApp Sent', description: 'Personalised intro message fired', color: '#25D366' },
  { icon: ClipboardList, label: 'Task Created', description: 'Follow-up task added to calendar', color: '#7C3AED' },
  { icon: Clock, label: 'Reminder Scheduled', description: '24h auto-reminder if no response', color: '#06B6D4' },
  { icon: FileText, label: 'Invoice Generated', description: 'GST invoice drafted on deal close', color: '#0891B2' },
  { icon: CheckCircle2, label: 'Done', description: 'Lead → Customer, zero manual work', color: '#10B981' },
]

export function Automation() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const { prefersReducedMotion } = useMotionPreference()

  useGSAP(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Fill line animation synced to scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      )

      // Icons transition muted → accent as line passes
      const stepEls = stepsRef.current?.querySelectorAll('.automation-step') ?? []
      stepEls.forEach((step, i) => {
        const icon = step.querySelector('.step-icon')
        const label = step.querySelector('.step-label')

        gsap.fromTo(
          [icon, label],
          { opacity: 0.35, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)
  }, { dependencies: [prefersReducedMotion] })

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-bg-secondary"
      id="automation"
      aria-labelledby="automation-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="AUTOMATION"
          title="Set it up once. It runs itself."
          subtitle="VertexCRM's automation engine handles every step of the lead-to-invoice journey — no manual triggers, no missed follow-ups."
          align="center"
        />

        <div className="mt-10 max-w-lg mx-auto lg:max-w-none">
          <div ref={stepsRef} className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-7 top-7 bottom-7 w-0.5 bg-border-subtle lg:hidden"
              aria-hidden="true"
            />
            <div
              ref={lineRef}
              className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-accent-primary via-accent-tertiary to-success lg:hidden"
              style={{ transformOrigin: 'top center', transform: 'scaleY(0)' }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-0">
              {STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.label} className="automation-step flex items-start gap-4 lg:flex-col lg:items-center lg:flex-1 lg:gap-3 lg:px-2">
                    {/* Icon */}
                    <div
                      className="step-icon relative z-10 w-14 h-14 rounded-xl border-2 border-white shadow-elevation-2 flex items-center justify-center shrink-0"
                      style={{ background: `${step.color}15`, borderColor: `${step.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} aria-hidden="true" />
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-border-subtle flex items-center justify-center text-xs font-bold text-text-muted"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </div>
                    </div>

                    {/* Connector (desktop horizontal) */}
                    {i < STEPS.length - 1 && (
                      <div className="hidden lg:flex items-center flex-1 absolute" style={{ left: `calc(${(i + 0.5) / STEPS.length * 100}%)`, top: 28 }}>
                        <div className="h-0.5 w-full bg-gradient-to-r from-border-subtle to-border-subtle" aria-hidden="true" />
                      </div>
                    )}

                    {/* Label */}
                    <div className="step-label flex flex-col gap-0.5 lg:text-center min-w-0 flex-1">
                      <p className="text-sm font-semibold text-text-primary truncate">{step.label}</p>
                      <p className="text-xs text-text-muted">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Desktop horizontal line */}
            <div className="hidden lg:block absolute top-7 left-7 right-7 h-0.5 bg-border-subtle -z-10" aria-hidden="true" />
            <div
              className="hidden lg:block absolute top-7 left-7 right-7 h-0.5 bg-gradient-to-r from-accent-primary via-accent-tertiary to-success -z-10"
              style={{ width: '0%', transition: 'width 2s ease' }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-text-muted text-sm mt-5">
          Workflows are fully customizable — build your own automation in minutes, no code required.
        </p>
      </div>
    </section>
  )
}
