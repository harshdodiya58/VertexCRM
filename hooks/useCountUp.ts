'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotionPreference } from '@/context/MotionPreferenceContext'

interface UseCountUpOptions {
  duration?: number
  start?: number
  decimals?: number
}

export function useCountUp(
  end: number,
  options: UseCountUpOptions = {}
) {
  const { duration = 1.5, start = 0, decimals = 0 } = options
  const [value, setValue] = useState(start)
  const ref = useRef<HTMLElement>(null)
  const { prefersReducedMotion } = useMotionPreference()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const startTime = performance.now()
        const diff = end - start

        function update(currentTime: number) {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / (duration * 1000), 1)
          // ease out
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = start + diff * eased
          setValue(parseFloat(current.toFixed(decimals)))

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
  }, [end, start, duration, decimals, prefersReducedMotion])

  return { value, ref }
}
