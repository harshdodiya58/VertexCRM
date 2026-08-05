'use client'

import { motion } from 'framer-motion'
import {
  Brain, Zap, Cloud, Users, Shield, TrendingUp, HeadphonesIcon
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { containerVariants, itemVariants } from '@/lib/animation-presets'

const FEATURES = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Automation',
    description: 'Smart lead scoring, automated follow-ups, and workflow suggestions powered by AI.',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    height: 'min-h-[160px]',
    accent: '#4F46E5',
  },
  {
    id: 'setup',
    icon: Zap,
    title: 'Fast Setup',
    description: 'Go live in under 30 minutes. Import your data, connect integrations, done.',
    span: 'col-span-1',
    height: 'min-h-[160px]',
    accent: '#F59E0B',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud-Based',
    description: 'Access from anywhere — browser, iOS, Android. No installs, no maintenance.',
    span: 'col-span-1',
    height: 'min-h-[140px]',
    accent: '#06B6D4',
  },
  {
    id: 'users',
    icon: Users,
    title: 'Unlimited Users',
    description: 'No per-seat pricing drama. Add your whole team on Professional.',
    span: 'col-span-1',
    height: 'min-h-[140px]',
    accent: '#10B981',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant. AES-256 encryption. Daily backups.',
    span: 'col-span-1',
    height: 'min-h-[140px]',
    accent: '#EF4444',
  },
  {
    id: 'scalable',
    icon: TrendingUp,
    title: 'Scalable',
    description: 'Starter to Enterprise without migrating platforms. Grows with you.',
    span: 'col-span-1 lg:col-span-2',
    height: 'min-h-[140px]',
    accent: '#7C3AED',
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'WhatsApp, email, and phone support. Real humans, not bots.',
    span: 'col-span-1',
    height: 'min-h-[140px]',
    accent: '#F59E0B',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-bg-secondary" id="why-us" aria-labelledby="why-us-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow="WHY VERTEXCRM"
          title="Built for how growing businesses actually work"
          subtitle="Not another generic CRM retrofitted for Indian SMBs — VertexCRM was designed from day one for the way your team actually operates."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 auto-rows-auto"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={`
                  group relative p-6 rounded-xl bg-white border border-border-subtle
                  hover:border-transparent transition-all duration-300 cursor-default
                  ${feature.span} ${feature.height}
                  flex flex-col gap-3 overflow-hidden
                `}
                whileHover={{
                  borderColor: `${feature.accent}40`,
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `${feature.accent}20` }}
                  aria-hidden="true"
                />

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${feature.accent}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.accent }} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-text-primary mb-2 text-xl">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
