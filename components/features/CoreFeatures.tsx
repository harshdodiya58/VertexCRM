'use client'

import { motion } from 'framer-motion'
import { Users, CalendarCheck, FileText, CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { containerVariants, itemVariants } from '@/lib/animation-presets'
import { FEATURES } from '@/constants/features'
import { LeadPreview } from './LeadPreview'
import { HRPreview } from './HRPreview'
import { InvoicePreview } from './InvoicePreview'

const ICON_MAP: Record<string, React.ElementType> = {
  Users,
  CalendarCheck,
  FileText,
}

const PREVIEW_MAP = {
  lead: LeadPreview,
  hr: HRPreview,
  invoice: InvoicePreview,
}

export function CoreFeatures() {
  return (
    <section className="section-padding bg-bg-primary" id="features" aria-labelledby="features-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow="EVERYTHING YOUR BUSINESS RUNS ON"
          title="One platform. Three core pillars."
          subtitle="Lead management, HRMS, and invoicing — deeply integrated so data flows where it needs to, without anyone lifting a finger."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-6 mt-16"
        >
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon]
            const Preview = PREVIEW_MAP[feature.preview]

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group flex flex-col rounded-xl border border-border-subtle bg-white hover:border-accent-primary/30 hover:shadow-elevation-2 transition-all duration-300 overflow-hidden"
              >
                {/* Preview area */}
                <div className="relative h-48 bg-bg-secondary border-b border-border-subtle overflow-hidden p-4">
                  <Preview />
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-accent-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-text-primary">{feature.title}</h3>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>

                  <ul className="flex flex-col gap-2 mt-auto" role="list">
                    {feature.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
