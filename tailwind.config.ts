import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Volume 2.2 Color Tokens
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F7F8FA',
        'bg-tertiary': '#EEF0F4',
        'border-subtle': '#E5E7EB',
        'border-strong': '#D1D5DB',
        'text-primary': '#0B0F19',
        'text-secondary': '#4B5563',
        'text-muted': '#9CA3AF',
        'accent-primary': '#4F46E5',
        'accent-secondary': '#06B6D4',
        'accent-tertiary': '#7C3AED',
        'success': '#10B981',
        'warning': '#F59E0B',
        'danger': '#EF4444',
      },
      fontFamily: {
        heading: ['var(--font-geist-sans)', 'General Sans', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Geist Mono', 'monospace'],
      },
      fontSize: {
        // Volume 2.3 Typography
        'h1-desktop': ['64px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1-mobile': ['38px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2-desktop': ['44px', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h2-mobile': ['30px', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3-desktop': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3-mobile': ['22px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['15px', { lineHeight: '1.6' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
      },
      spacing: {
        // Volume 2.4 8px Spacing System
        '1': '4px',
        '2': '8px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '96px',
        '9': '128px',
      },
      borderRadius: {
        // Volume 2.5 Border Radius Tokens
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'full': '999px',
      },
      boxShadow: {
        // Volume 2.5 Elevation Tokens
        'elevation-1': '0 1px 2px rgba(16,24,40,.06), 0 1px 3px rgba(16,24,40,.04)',
        'elevation-2': '0 4px 12px rgba(16,24,40,.08), 0 2px 4px rgba(16,24,40,.04)',
        'elevation-3': '0 12px 32px rgba(16,24,40,.12), 0 4px 8px rgba(16,24,40,.06)',
        'accent-glow': '0 8px 24px rgba(79,70,229,.18)',
        'accent-glow-lg': '0 12px 40px rgba(79,70,229,.24)',
      },
      backgroundImage: {
        // Signature gradient from Volume 2.2
        'signature': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)',
        'signature-subtle': 'linear-gradient(135deg, rgba(79,70,229,.05) 0%, rgba(124,58,237,.05) 50%, rgba(6,182,212,.05) 100%)',
        'signature-reverse': 'linear-gradient(315deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)',
      },
      maxWidth: {
        'content': '1280px',
        'bleed': '1440px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-delayed-2': 'float 6s ease-in-out infinite 4s',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
