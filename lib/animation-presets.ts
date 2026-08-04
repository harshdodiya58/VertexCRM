// Volume 5.2 — Easing vocabulary locked
export const EASE_ENTRANCE = 'power3.out'
export const EASE_TRANSITION = 'power2.inOut'
export const EASE_EXIT = 'power2.in'

// Durations
export const DUR_FAST = 0.3
export const DUR_MED = 0.5
export const DUR_SLOW = 0.8
export const DUR_EXTRA_SLOW = 1.0

// Stagger (max 100ms between siblings per spec)
export const STAGGER_TIGHT = 0.06
export const STAGGER_MED = 0.08
export const STAGGER_LOOSE = 0.1

// Volume 5.4 — Literal Framer Motion variants
export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: STAGGER_MED,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: DUR_MED,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const fadeInVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DUR_MED,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DUR_SLOW,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DUR_SLOW,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

// GSAP ScrollTrigger defaults
export const ST_DEFAULTS = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
}
