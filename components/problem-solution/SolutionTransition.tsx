'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { useMotionPreference } from '@/context/MotionPreferenceContext'

gsap.registerPlugin(ScrollTrigger)

export function SolutionTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const { prefersReducedMotion } = useMotionPreference()

  useEffect(() => {
    const path = pathRef.current
    if (!path || prefersReducedMotion) return

    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 1.5,
        },
      })
    })

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-bg-secondary overflow-hidden"
      aria-label="Solution transition"
    >
      {/* SVG connector */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1280 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-30"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 0 100 C 200 20, 400 180, 640 100 S 1080 20, 1280 100"
            stroke="url(#solution-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="solution-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-content relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow mb-4 block">THE SOLUTION</span>
          <h2 className="font-heading font-semibold text-text-primary mb-4">
            One platform.{' '}
            <span className="gradient-text">Every workflow.</span>{' '}
            Zero switching.
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            VertexCRM unifies lead management, HRMS, and invoicing into a single
            intelligent platform — so your whole team works from one source of truth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
