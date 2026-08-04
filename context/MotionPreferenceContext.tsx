'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface MotionPreferenceContextValue {
  prefersReducedMotion: boolean
}

const MotionPreferenceContext = createContext<MotionPreferenceContextValue>({
  prefersReducedMotion: false,
})

export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <MotionPreferenceContext.Provider value={{ prefersReducedMotion }}>
      {children}
    </MotionPreferenceContext.Provider>
  )
}

export function useMotionPreference() {
  return useContext(MotionPreferenceContext)
}
