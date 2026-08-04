'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animation-presets'

const STORY_POINTS = [
  'Built by operators who understood the daily struggles of growing a business in India.',
  'Replaces 5 different tools with one seamless workflow.',
  'Designed with an obsessive focus on user experience and speed.',
  'Trusted by hundreds of fast-growing teams.',
]

export function CompanyStory() {
  return (
    <section className="section-padding bg-white" id="story" aria-labelledby="story-heading">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={itemVariants} id="story-heading" className="font-heading font-semibold text-3xl md:text-4xl text-text-primary">
              We started with a simple belief.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-body-lg text-text-secondary leading-relaxed">
              Before VertexCRM, our founders were running agencies and real estate brokerages. 
              They were drowning in disconnected spreadsheets, lost leads, and chaotic WhatsApp groups. 
              Nothing worked seamlessly together. So, they built VertexCRM.
            </motion.p>
            <motion.ul variants={itemVariants} className="flex flex-col gap-3 mt-4" role="list">
              {STORY_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-primary text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] bg-bg-secondary rounded-2xl overflow-hidden relative border border-border-subtle shadow-elevation-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 to-transparent" />
              {/* Abstract decorative element representing growth/story */}
              <div className="w-48 h-48 rounded-full border-[12px] border-accent-primary/20 blur-[2px]" />
              <div className="w-32 h-32 rounded-full border-[8px] border-accent-primary/40 absolute blur-[1px]" />
              <div className="w-16 h-16 rounded-full bg-accent-primary absolute shadow-accent-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
