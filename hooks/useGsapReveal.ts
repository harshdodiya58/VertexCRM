'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMotionPreference } from '@/context/MotionPreferenceContext'
import { EASE_ENTRANCE } from '@/lib/animation-presets'

gsap.registerPlugin(ScrollTrigger)

interface UseGsapRevealOptions {
  y?: number
  x?: number
  opacity?: number
  scale?: number
  duration?: number
  delay?: number
  stagger?: number
  start?: string
  ease?: string
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null)
  const { prefersReducedMotion } = useMotionPreference()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1 })
      return
    }

    const {
      y = 32,
      x = 0,
      opacity = 0,
      scale = 1,
      duration = 0.7,
      delay = 0,
      stagger = 0,
      start = 'top 85%',
      ease = EASE_ENTRANCE,
    } = options

    const targets = stagger > 0 ? el.children : el

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, x, opacity, scale },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [prefersReducedMotion, options])

  return ref
}
