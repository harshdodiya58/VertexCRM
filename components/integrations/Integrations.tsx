'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { INTEGRATIONS } from '@/constants/integrations'
import { useMotionPreference } from '@/context/MotionPreferenceContext'
import {
  Globe2, ShoppingBag, Building2, Home, Layers,
  MessageCircle, Table2, Zap, Webhook
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  Facebook: Globe2, ShoppingBag, Building2, Home, Layers,
  MessageCircle, Table: Table2, Zap, Webhook, WebhookIcon: Webhook,
}

interface IntegrationNodeProps {
  id: string
  label: string
  icon: string
  angle: number
  color: string
  tooltip: string
  isRadial: boolean
  index: number
}

function IntegrationNode({ id, label, icon, color, tooltip, isRadial, index }: IntegrationNodeProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const Icon = ICON_MAP[icon] || Zap

  return (
    <div
      className="relative flex flex-col items-center gap-2 group cursor-default"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      aria-label={`${label}: ${tooltip}`}
    >
      <div
        className="w-14 h-14 rounded-xl border-2 border-white shadow-elevation-2 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-elevation-3"
        style={{ background: `${color}15`, borderColor: `${color}30` }}
      >
        <Icon className="w-7 h-7" style={{ color }} aria-hidden="true" />
      </div>
      <span className="text-xs font-medium text-text-secondary text-center leading-tight max-w-[80px]">{label}</span>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-text-primary text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-elevation-3 pointer-events-none z-20">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-primary" aria-hidden="true" />
        </div>
      )}
    </div>
  )
}

export function Integrations() {
  const sectionRef = useRef<HTMLElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [isRadial, setIsRadial] = useState(true)
  const { prefersReducedMotion } = useMotionPreference()

  useEffect(() => {
    const checkBreakpoint = () => setIsRadial(window.innerWidth >= 768)
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  useEffect(() => {
    if (!svgRef.current || !isRadial || prefersReducedMotion) return

    const lines = svgRef.current.querySelectorAll<SVGPathElement>('.connector-line')
    lines.forEach((line) => {
      const length = line.getTotalLength()
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
    })

    const ctx = gsap.context(() => {
      gsap.to('.connector-line', {
        strokeDashoffset: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [isRadial, prefersReducedMotion])

  const CENTER = { x: 400, y: 300 }
  const RADIUS = 240 // Increased radius to prevent overlap

  const nodePositions = INTEGRATIONS.map((integration) => {
    const rad = (integration.angle * Math.PI) / 180
    return {
      ...integration,
      x: Number((CENTER.x + RADIUS * Math.cos(rad)).toFixed(3)),
      y: Number((CENTER.y + RADIUS * Math.sin(rad)).toFixed(3)),
    }
  })

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-bg-primary"
      id="integrations"
      aria-labelledby="integrations-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="INTEGRATIONS"
          title="Your leads, automatically, from everywhere."
          subtitle="Facebook Lead Ads, IndiaMART, 99acres, Housing, and more — connected in minutes, not days."
          align="center"
        />

        <div className="mt-16">
          {/* Radial layout (desktop) */}
          {isRadial ? (
            <div className="relative mx-auto" style={{ maxWidth: 800, height: 600 }}>
              {/* SVG lines */}
              <svg
                ref={svgRef}
                viewBox="0 0 800 600"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {nodePositions.map((node) => {
                  // Create a smooth S-curve
                  const cp1x = (CENTER.x + node.x) / 2
                  const cp1y = CENTER.y
                  const cp2x = (CENTER.x + node.x) / 2
                  const cp2y = node.y

                  return (
                    <path
                      key={node.id}
                      className="connector-line"
                      d={`M ${CENTER.x} ${CENTER.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${node.x} ${node.y}`}
                      stroke="url(#line-gradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  )
                })}
              </svg>

              {/* Center node */}
              <div
                className="absolute z-10 flex flex-col items-center gap-2"
                style={{
                  left: `${(CENTER.x / 800) * 100}%`,
                  top: `${(CENTER.y / 600) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="relative flex items-center justify-center w-24 h-24 group">
                  {/* Glowing auras */}
                  <div className="absolute w-24 h-24 rounded-full bg-accent-primary/20 blur-xl animate-pulse" style={{ animationDuration: '2s' }} />
                  <div className="absolute w-16 h-16 rounded-full bg-accent-primary/40 blur-md animate-ping" style={{ animationDuration: '3s' }} />
                  
                  {/* Main Logo (No Box) */}
                  <div className="relative z-10 transition-transform group-hover:scale-110 duration-300">
                    <Image src="/logo.png" alt="VertexCRM Logo" width={80} height={80} quality={100} priority className="w-20 h-20 object-contain mix-blend-multiply drop-shadow-md" />
                  </div>
                </div>
                <span className="text-base font-bold text-text-primary mt-1">VertexCRM</span>
              </div>

              {/* Integration nodes */}
              {nodePositions.map((node, i) => (
                <div
                  key={node.id}
                  className="absolute z-10"
                  style={{
                    left: `${Number(((node.x / 800) * 100).toFixed(3))}%`,
                    top: `${Number(((node.y / 600) * 100).toFixed(3))}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <IntegrationNode {...node} isRadial={true} index={i} />
                </div>
              ))}
            </div>
          ) : (
            /* Grid layout (mobile/tablet) */
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {/* Center */}
              <div className="col-span-3 sm:col-span-4 flex justify-center mb-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative flex items-center justify-center w-20 h-20">
                    {/* Glowing auras */}
                    <div className="absolute w-20 h-20 rounded-full bg-accent-primary/20 blur-xl animate-pulse" style={{ animationDuration: '2s' }} />
                    <div className="absolute w-14 h-14 rounded-full bg-accent-primary/40 blur-md animate-ping" style={{ animationDuration: '3s' }} />
                    
                    {/* Main Logo (No Box) */}
                    <div className="relative z-10">
                      <Image src="/logo.png" alt="VertexCRM Logo" width={64} height={64} quality={100} priority className="w-16 h-16 object-contain mix-blend-multiply drop-shadow-md" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-text-primary mt-1">VertexCRM</span>
                </div>
              </div>
              {INTEGRATIONS.map((integration, i) => (
                <IntegrationNode
                  key={integration.id}
                  {...integration}
                  isRadial={false}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            + Connect anything via{' '}
            <span className="text-accent-primary font-medium">Zapier</span>,{' '}
            <span className="text-accent-primary font-medium">Webhooks</span>, or our{' '}
            <span className="text-accent-primary font-medium">REST API</span>
          </p>
        </div>
      </div>
    </section>
  )
}
