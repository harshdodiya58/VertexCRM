'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Heart, Zap, Shield, Target, Users, Sparkles } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animation-presets'

const VALUES = [
  {
    icon: Zap,
    title: 'Speed is a feature',
    description: 'We believe slow software kills businesses. Everything we build is optimized for milliseconds.',
    color: '#4F46E5', // indigo-600
  },
  {
    icon: Shield,
    title: 'Trust over everything',
    description: 'Your data is your business. We protect it with enterprise-grade security and zero-compromise policies.',
    color: '#06B6D4', // cyan-500
  },
  {
    icon: Users,
    title: 'Customer-obsessed',
    description: 'We build for the operator. Every feature starts with a real conversation with our users.',
    color: '#10B981', // emerald-500
  },
  {
    icon: Sparkles,
    title: 'Keep it simple',
    description: 'Complexity is the enemy of adoption. If it takes a manual to use, we designed it wrong.',
    color: '#F59E0B', // amber-500
  },
  {
    icon: Target,
    title: 'Results matter',
    description: 'We don’t celebrate shipping features. We celebrate when those features help you close more deals.',
    color: '#EF4444', // red-500
  },
  {
    icon: Heart,
    title: 'Empathy first',
    description: 'Running a business is hard. We strive to be the easiest, most supportive partner you work with.',
    color: '#EC4899', // pink-500
  },
]

export function CompanyValues() {
  return (
    <section className="section-padding bg-bg-secondary" id="values" aria-labelledby="values-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow="CORE VALUES"
          title="What drives us every day."
          subtitle="The principles that guide our product, our team, and how we treat our customers."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {VALUES.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-border-subtle hover:border-transparent transition-all duration-300 group hover:shadow-elevation-2"
              >
                <div 
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: `${value.color}15`, color: value.color }}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
