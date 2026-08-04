'use client'

import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'success' | 'warning' | 'accent' | 'danger'
  children: React.ReactNode
}

const toneClasses: Record<NonNullable<BadgeProps['tone']>, string> = {
  neutral: 'bg-bg-tertiary text-text-secondary border-border-subtle',
  success: 'bg-success/10 text-success border-success/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  accent: 'bg-accent-primary/10 text-accent-primary border-accent-primary/20',
  danger: 'bg-danger/10 text-danger border-danger/20',
}

export function Badge({ tone = 'neutral', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border',
        'tracking-wide uppercase',
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
