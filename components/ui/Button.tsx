'use client'

import { forwardRef } from 'react'
import { type LucideIcon, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  loading?: boolean
  children: React.ReactNode
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: cn(
    'bg-gradient-to-br from-accent-primary via-accent-tertiary to-accent-secondary',
    'text-white font-semibold',
    'shadow-accent-glow hover:shadow-accent-glow-lg',
    'hover:scale-[1.02] active:scale-[0.98]',
    'transition-all duration-200'
  ),
  secondary: cn(
    'bg-bg-secondary text-text-primary border border-border-subtle',
    'hover:bg-bg-tertiary hover:border-border-strong',
    'transition-all duration-200'
  ),
  ghost: cn(
    'bg-transparent text-accent-primary',
    'hover:bg-accent-primary/8',
    'transition-all duration-200'
  ),
  outline: cn(
    'bg-transparent text-text-primary border border-border-strong',
    'hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5',
    'transition-all duration-200'
  ),
  dark: cn(
    'bg-[#0A101D] text-white',
    'hover:bg-black',
    'transition-all duration-200'
  ),
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm rounded-sm gap-1.5',
  md: 'px-6 py-3 text-base rounded-sm gap-2',
  lg: 'px-8 py-4 text-lg rounded-sm gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium select-none whitespace-nowrap',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />
        )}
        <span>{children}</span>
        {!loading && Icon && iconPosition === 'right' && (
          <Icon className="w-4 h-4 shrink-0" />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
