'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, TrendingUp, CheckCircle, Bell } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { containerVariants, itemVariants, fadeInVariants } from '@/lib/animation-presets'

function FloatingLeadCard() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -top-4 -left-8 z-10 bg-white rounded-lg shadow-elevation-3 border border-border-subtle p-4 w-56"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-blue-600">FB</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-text-primary">New Lead</p>
          <p className="text-xs text-text-muted">Facebook Ads · Just now</p>
          <p className="text-sm font-medium text-text-primary mt-1">Rajesh Sharma</p>
          <p className="text-xs text-text-secondary">3BHK in Andheri West</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">
          <span className="w-1.5 h-1.5 rounded-full bg-warning inline-block" />
          New
        </span>
        <span className="text-xs text-text-muted">Auto-assigned to Priya</span>
      </div>
    </motion.div>
  )
}

function FloatingInvoiceCard() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      className="absolute bottom-16 -right-4 z-10 bg-white rounded-lg shadow-elevation-3 border border-border-subtle p-4 w-52"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">Invoice #1042</span>
        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-success/10 text-success">
          <CheckCircle className="w-3 h-3" />
          Paid
        </span>
      </div>
      <p className="text-xl font-mono font-semibold text-text-primary">₹45,000</p>
      <p className="text-xs text-text-muted mt-1">Kapoor Realty Pvt. Ltd.</p>
      <div className="mt-2 h-1 bg-bg-tertiary rounded-full">
        <div className="h-full w-full bg-success rounded-full" />
      </div>
    </motion.div>
  )
}

function FloatingToastCard() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      className="absolute top-1/2 -right-12 z-10 bg-white rounded-lg shadow-elevation-3 border border-border-subtle p-3 w-48"
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-accent-primary/10 flex items-center justify-center shrink-0">
          <Bell className="w-3.5 h-3.5 text-accent-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-text-primary">3 tasks due today</p>
          <p className="text-xs text-text-muted">Follow up with leads</p>
        </div>
      </div>
    </motion.div>
  )
}

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Floating cards */}
      <FloatingLeadCard />
      <FloatingInvoiceCard />
      <FloatingToastCard />

      {/* Main dashboard preview */}
      <div className="relative bg-bg-secondary rounded-xl border border-border-subtle shadow-elevation-3 overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-bg-tertiary border-b border-border-subtle px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-danger/60" />
            <div className="w-3 h-3 rounded-full bg-warning/60" />
            <div className="w-3 h-3 rounded-full bg-success/60" />
          </div>
          <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-text-muted border border-border-subtle">
            app.vertexcrm.io/dashboard
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Active Leads', value: '248', change: '+12%', color: 'text-accent-primary' },
              { label: 'Revenue', value: '₹4.2L', change: '+28%', color: 'text-success' },
              { label: 'Invoices', value: '34', change: '+5%', color: 'text-accent-secondary' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-md p-3 border border-border-subtle">
                <p className="text-xs text-text-muted">{stat.label}</p>
                <p className={`text-base font-mono font-semibold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-success">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white rounded-md p-3 border border-border-subtle h-24 flex items-end gap-1">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-accent-primary to-accent-tertiary opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* Pipeline mini */}
          <div className="bg-white rounded-md p-3 border border-border-subtle">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {['Hot (12)', 'Cold (8)', 'Won (5)', 'Lost (3)'].map((col, i) => (
                <div key={col} className="flex-1">
                  <div className={`text-xs font-medium mb-1.5 ${i === 0 ? 'text-warning' :
                    i === 1 ? 'text-accent-secondary' :
                      i === 2 ? 'text-success' : 'text-danger'
                    }`}>{col}</div>
                  <div className="space-y-1">
                    {[1, 2].map((j) => (
                      <div key={j} className="h-5 bg-bg-secondary rounded border border-border-subtle" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-br from-accent-primary to-accent-tertiary rounded-full scale-75" />
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-tertiary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4F46E5" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container-content relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 min-w-0 w-full"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" aria-hidden="true" />
                THE 360° CRM FOR GROWING BUSINESSES
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="font-heading font-semibold text-text-primary leading-tight"
            >
              Manage Leads.{' '}
              <span className="gradient-text">Run HR.</span>{' '}
              Create Invoices.{' '}
              <span className="block mt-1">Everything.</span>
              <span className="block text-text-secondary font-normal" style={{ fontSize: '0.75em' }}>
                Inside One Platform.
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p variants={itemVariants} className="text-body-lg text-text-secondary max-w-lg">
              VertexCRM replaces the spreadsheets, disconnected tools, and missed follow-ups
              with one system your whole team actually uses.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" icon={Play} iconPosition="left">
                Watch Demo
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['PM', 'RS', 'AK', 'VD'].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        background: ['#4F46E5', '#7C3AED', '#06B6D4', '#10B981'][i],
                        zIndex: 4 - i
                      }}
                      aria-label={`User ${initials}`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning text-sm" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted">1,200+ businesses trust VertexCRM</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-text-muted">
                <TrendingUp className="w-4 h-4 text-success" aria-hidden="true" />
                <span>No credit card required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="show"
            className="relative lg:pl-8 min-w-0 w-full mt-12 lg:mt-0"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
