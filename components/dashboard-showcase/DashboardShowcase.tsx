'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TrendingUp, Users, Activity, ArrowUp, Circle } from 'lucide-react'
import { useMotionPreference } from '@/context/MotionPreferenceContext'

gsap.registerPlugin(ScrollTrigger)

export function RevenueCard({ cardRef }: { cardRef: React.RefObject<HTMLDivElement | null> }) {
  const bars = [40, 60, 45, 75, 55, 90, 70, 85, 65, 95, 80, 100]

  return (
    <div ref={cardRef} className="bg-white rounded-xl border border-border-subtle shadow-elevation-2 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wide font-medium">Monthly Revenue</p>
          <p className="text-2xl font-mono font-bold text-text-primary mt-1">₹12.4L</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-semibold">
          <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          +28%
        </div>
      </div>
      <div className="flex items-end gap-1 h-16">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, #4F46E5, #7C3AED)`,
              opacity: i === bars.length - 1 ? 1 : 0.5 + (i / bars.length) * 0.5,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-text-muted">Jan</span>
        <span className="text-xs text-text-muted">Dec</span>
      </div>
    </div>
  )
}

export function PipelineCard({ cardRef }: { cardRef: React.RefObject<HTMLDivElement | null> }) {
  const stages = [
    { label: 'New', count: 48, color: '#6366F1' },
    { label: 'Contacted', count: 31, color: '#8B5CF6' },
    { label: 'Qualified', count: 19, color: '#A78BFA' },
    { label: 'Proposal', count: 12, color: '#06B6D4' },
    { label: 'Won', count: 8, color: '#10B981' },
  ]

  return (
    <div ref={cardRef} className="bg-white rounded-xl border border-border-subtle shadow-elevation-2 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-4 h-4 text-accent-primary" aria-hidden="true" />
        <p className="text-sm font-semibold text-text-primary">Pipeline Snapshot</p>
        <span className="ml-auto text-xs text-text-muted">This month</span>
      </div>
      <div className="space-y-2">
        {stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-3">
            <span className="text-xs text-text-muted w-20 shrink-0">{stage.label}</span>
            <div className="flex-1 h-2 bg-bg-tertiary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(stage.count / 48) * 100}%`,
                  background: stage.color,
                }}
                aria-label={`${stage.label}: ${stage.count} leads`}
              />
            </div>
            <span className="text-xs font-mono font-medium text-text-primary w-6 text-right">{stage.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ActivityFeed({ feedRef }: { feedRef: React.RefObject<HTMLDivElement | null> }) {
  const activities = [
    { icon: '🎯', text: 'New lead from IndiaMART assigned to Rohan', time: '2m ago', color: 'text-accent-primary' },
    { icon: '✅', text: 'Invoice #1042 marked as paid — ₹45,000', time: '15m ago', color: 'text-success' },
    { icon: '📅', text: 'Anjali checked in — Attendance logged', time: '1h ago', color: 'text-accent-secondary' },
    { icon: '💬', text: 'WhatsApp follow-up sent to 3 leads', time: '2h ago', color: 'text-accent-tertiary' },
    { icon: '🏆', text: 'Deal closed — Sharma Developers ₹2.8L', time: '3h ago', color: 'text-success' },
  ]

  return (
    <div ref={feedRef} className="bg-white rounded-xl border border-border-subtle shadow-elevation-2 p-5 lg:row-span-2">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-accent-primary" aria-hidden="true" />
        <p className="text-sm font-semibold text-text-primary">Live Activity</p>
        <span className="ml-auto flex items-center gap-1 text-xs text-success">
          <Circle className="w-2 h-2 fill-success" aria-hidden="true" />
          Live
        </span>
      </div>
      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-base shrink-0 leading-tight" aria-hidden="true">{item.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-text-secondary leading-snug">{item.text}</p>
              <p className="text-xs text-text-muted mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DashboardShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const revenueCardRef = useRef<HTMLDivElement>(null)
  const pipelineCardRef = useRef<HTMLDivElement>(null)
  const activityFeedRef = useRef<HTMLDivElement>(null)
  const { prefersReducedMotion } = useMotionPreference()

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([frameRef.current, revenueCardRef.current, pipelineCardRef.current, activityFeedRef.current], {
        opacity: 1, y: 0, scale: 1,
      })
      if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 0 })
      return
    }

    // Volume 5.5 — matchMedia for responsive pin
    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
        // Volume 5.3 — Literal GSAP Timeline (exact structure from spec)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=1500',
            scrub: 1,
            pin: true,
          },
        })

        tl.fromTo(
          frameRef.current,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
        )
          .to(overlayRef.current, { opacity: 0, duration: 0.4 }, '-=0.2')
          .fromTo(
            revenueCardRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '+=0.1'
          )
          .fromTo(
            pipelineCardRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.4'
          )
          .fromTo(
            activityFeedRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.4'
          )
          .to(frameRef.current, { y: -20, duration: 0.8, ease: 'power2.inOut' })
      },
      // Mobile fallback — simple IntersectionObserver fade+slide, no pin
      '(max-width: 767px)': function () {
        gsap.fromTo(
          [frameRef.current, revenueCardRef.current, pipelineCardRef.current, activityFeedRef.current],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
        if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 0 })
      },
    })
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] })

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-secondary min-h-screen flex items-center"
      id="dashboard"
      aria-labelledby="dashboard-heading"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-accent-primary/5 to-accent-tertiary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-content relative z-10 py-24 w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block">DASHBOARD SHOWCASE</span>
          <h2 id="dashboard-heading" className="font-heading font-semibold text-text-primary mb-4">
            See your whole business,{' '}
            <span className="gradient-text">in one screen.</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Real-time metrics, your sales pipeline, activity feed, and financials —
            all in a single dashboard your whole team lives in.
          </p>
        </div>

        {/* Browser frame + dashboard */}
        <div ref={frameRef} className="relative max-w-5xl mx-auto" style={{ opacity: 0, scale: 0.7 }}>
          {/* Boot overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 z-10 rounded-xl bg-bg-secondary flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-accent-primary/40 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Browser chrome */}
          <div className="bg-bg-tertiary border border-border-subtle rounded-xl overflow-hidden shadow-elevation-3">
            <div className="bg-white border-b border-border-subtle px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-danger/60" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-warning/60" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-success/60" aria-hidden="true" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-bg-secondary rounded border border-border-subtle px-4 py-1.5 text-xs text-text-muted font-mono">
                  app.vertexcrm.io/dashboard
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block" aria-hidden="true" />
                Live
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 sm:p-6 bg-bg-secondary">
              {/* Top stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Total Leads', value: '248', change: '+12%', color: '#4F46E5' },
                  { label: 'Revenue', value: '₹12.4L', change: '+28%', color: '#10B981' },
                  { label: 'Invoices', value: '34 Sent', change: '₹8.2L', color: '#06B6D4' },
                  { label: 'Employees', value: '22 Active', change: '98% attendance', color: '#7C3AED' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-lg border border-border-subtle p-4 shadow-elevation-1 min-w-0">
                    <p className="text-xs text-text-muted mb-1 truncate">{stat.label}</p>
                    <p className="text-lg font-mono font-bold truncate" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-xs text-text-muted mt-0.5 truncate">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Main content grid */}
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-4">
                  <RevenueCard cardRef={revenueCardRef} />
                  <PipelineCard cardRef={pipelineCardRef} />
                </div>
                <ActivityFeed feedRef={activityFeedRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
