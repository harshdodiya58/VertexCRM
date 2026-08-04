'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/constants/testimonials'

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: typeof TESTIMONIALS[0]
  isActive: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [4, -4])
  const rotateY = useTransform(x, [-100, 100], [-4, 4])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX: isActive ? rotateX : 0, rotateY: isActive ? rotateY : 0, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative p-8 rounded-xl border bg-white transition-all duration-300 h-full flex flex-col
        ${isActive
          ? 'border-accent-primary/30 shadow-elevation-3 shadow-accent-glow'
          : 'border-border-subtle shadow-elevation-1 opacity-50 scale-95'
        }
      `}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-warning text-warning" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-text-primary font-medium text-lg leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Metrics */}
      <div className="flex gap-4 mb-6">
        {testimonial.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-0.5">
            <span className="text-lg font-mono font-bold text-accent-primary">{metric.value}</span>
            <span className="text-xs text-text-muted">{metric.label}</span>
          </div>
        ))}
      </div>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border-subtle">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{testimonial.author}</p>
          <p className="text-xs text-text-muted">{testimonial.role} · {testimonial.company}</p>
        </div>
        <span className="ml-auto text-xs font-medium text-accent-primary bg-accent-primary/8 px-3 py-1 rounded-full">
          {testimonial.sector}
        </span>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(next, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, next])

  return (
    <section
      className="section-padding bg-bg-primary"
      id="testimonials"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="Real businesses. Real results."
          subtitle="Don't take our word for it — hear from the founders and operators who run their businesses on VertexCRM."
          align="center"
        />

        <div className="mt-16">
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveIndex(i)}
                  className="cursor-pointer h-full"
                >
                  <TestimonialCard testimonial={t} isActive={i === activeIndex} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8" role="group" aria-label="Testimonial navigation">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" aria-label="Testimonial indicators">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 ${i === activeIndex
                      ? 'w-6 h-2.5 bg-accent-primary'
                      : 'w-2.5 h-2.5 bg-border-strong hover:bg-text-muted'
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-pressed={i === activeIndex}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
