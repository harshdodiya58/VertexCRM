'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/constants/testimonials'

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="relative p-5 rounded-xl border border-border-subtle bg-white shadow-elevation-1 h-full flex flex-col">
      {/* Stars + sector badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" aria-hidden="true" />
          ))}
        </div>
        <span className="text-[11px] font-medium text-accent-primary bg-accent-primary/8 px-2.5 py-1 rounded-full shrink-0">
          {testimonial.sector}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-text-primary leading-relaxed mb-3">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {testimonial.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-0.5">
            <span className="text-base font-mono font-bold text-accent-primary">{metric.value}</span>
            <span className="text-[11px] text-text-muted leading-tight">{metric.label}</span>
          </div>
        ))}
      </div>

      {/* Author */}
      <div className="mt-auto flex items-center gap-2.5 pt-3 border-t border-border-subtle">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-text-primary leading-snug">{testimonial.author}</p>
          <p className="text-xs text-text-muted leading-snug">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      className="section-padding bg-bg-primary"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="Real businesses. Real results."
          subtitle="Don't take our word for it — hear from the founders and operators who run their businesses on VertexCRM."
          align="center"
        />

        <div className="mt-10">
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
