'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Users, FileX, BarChart3, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { containerVariants, itemVariants } from '@/lib/animation-presets'

const PAIN_POINTS = [
  {
    id: 'scattered-leads',
    icon: AlertTriangle,
    iconColor: 'text-warning',
    iconBg: 'bg-warning/10',
    text: 'Leads scattered across Facebook, IndiaMART, and spreadsheets — half of them never followed up',
    stat: '67% of leads go cold within 24 hours',
  },
  {
    id: 'hr-chaos',
    icon: Users,
    iconColor: 'text-danger',
    iconBg: 'bg-danger/10',
    text: 'HR running on a separate tool nobody updates — attendance tracked in Excel, payroll done manually each month',
    stat: '8+ hours of HR admin work per week',
  },
  {
    id: 'invoice-manual',
    icon: FileX,
    iconColor: 'text-accent-tertiary',
    iconBg: 'bg-accent-tertiary/10',
    text: 'Invoices created manually in Word or Tally, tracked nowhere — clients chasing you, not the other way around',
    stat: '30% of invoices paid late',
  },
  {
    id: 'no-visibility',
    icon: BarChart3,
    iconColor: 'text-accent-secondary',
    iconBg: 'bg-accent-secondary/10',
    text: 'No single view of what\'s actually happening in the business — decisions made on gut feel, not data',
    stat: 'Only 12% of SMBs have real-time reporting',
  },
]

export function Problem() {
  return (
    <section className="section-padding bg-bg-primary" id="problem" aria-labelledby="problem-heading">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow mb-4 block">THE PROBLEM</span>
            <h2 id="problem-heading" className="font-heading font-semibold text-text-primary mb-6">
              Sound familiar?
            </h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Every growing business hits the same wall — too many disconnected tools,
              too much manual work, and too many leads slipping through the cracks.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-bg-secondary border border-border-subtle">
              <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-accent-primary" aria-hidden="true" />
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">VertexCRM is built for this.</span>{' '}
                One login to replace all of it.
              </p>
            </div>
          </div>

          {/* Right: pain point cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {PAIN_POINTS.map((point) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.id}
                  variants={itemVariants}
                  className="group p-6 rounded-lg border border-border-subtle bg-white hover:border-accent-primary/20 hover:shadow-elevation-2 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${point.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-5 h-5 ${point.iconColor}`} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium mb-2">{point.text}</p>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wide border-t border-border-subtle pt-2 mt-2">
                        📊 {point.stat}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
