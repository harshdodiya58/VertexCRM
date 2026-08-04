'use client'

import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useMotionPreference } from '@/context/MotionPreferenceContext'

export interface AnimatedNumberProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedNumber({
  value,
  duration = 1.5,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { prefersReducedMotion } = useMotionPreference()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const startTime = performance.now()
        const startValue = 0

        function update(currentTime: number) {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / (duration * 1000), 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = startValue + (value - startValue) * eased

          if (el) {
            el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`
          }

          if (progress < 1) {
            requestAnimationFrame(update)
          }
        }

        requestAnimationFrame(update)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, suffix, prefix, decimals, prefersReducedMotion])

  return (
    <span
      ref={ref}
      className={cn('font-mono tabular-nums', className)}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}0{suffix}
    </span>
  )
}
