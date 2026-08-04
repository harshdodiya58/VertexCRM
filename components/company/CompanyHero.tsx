'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-presets'

export function CompanyHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-accent-tertiary rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container-content relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 eyebrow justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" aria-hidden="true" />
              OUR STORY
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-semibold text-text-primary leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight"
          >
            Building the foundation for{' '}
            <span className="gradient-text">India's growth.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-body-base sm:text-body-lg text-text-secondary leading-relaxed">
            We believe that every business deserves software that works as hard as they do. 
            VertexCRM was built to replace chaos with clarity, giving teams the tools they need to succeed.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
