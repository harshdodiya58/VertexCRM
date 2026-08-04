'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'glass' | 'stat'
  padding?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
  default: cn(
    'bg-bg-primary border border-border-subtle rounded-md',
    'shadow-elevation-1 hover:shadow-elevation-2 hover:border-border-strong',
    'transition-all duration-200'
  ),
  feature: cn(
    'bg-bg-primary border border-border-subtle rounded-lg',
    'shadow-elevation-1 hover:shadow-elevation-2',
    'hover:border-accent-primary/30',
    'transition-all duration-200 group'
  ),
  glass: cn(
    'bg-white/80 backdrop-blur-md border border-white/60 rounded-lg',
    'shadow-elevation-2',
    'transition-all duration-200'
  ),
  stat: cn(
    'bg-bg-secondary border border-border-subtle rounded-md',
    'shadow-elevation-1',
    'transition-all duration-200'
  ),
}

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(variantClasses[variant], paddingClasses[padding], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
