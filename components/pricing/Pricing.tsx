'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PRICING_TIERS } from '@/constants/pricing'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({})

  const toggleTier = (id: string) => {
    setExpandedTiers(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const VISIBLE_FEATURES = 5

  return (

    <section className="section-padding bg-bg-secondary" id="pricing" aria-labelledby="pricing-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow="PRICING"
          title="Simple pricing. No surprises."
          subtitle="Start free, scale as you grow. All plans include a 14-day free trial — no credit card required."
          align="center"
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8" role="group" aria-label="Billing frequency">
          <button
            onClick={() => setIsAnnual(false)}
            className={cn(
              'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 rounded',
              !isAnnual ? 'text-text-primary' : 'text-text-muted'
            )}
            aria-pressed={!isAnnual}
          >
            Monthly
          </button>

          <button
            onClick={() => setIsAnnual((v) => !v)}
            className={cn(
              'relative w-[44px] h-[24px] min-w-[44px] min-h-[24px] shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 box-border p-[4px] flex items-center',
              isAnnual ? 'bg-accent-primary justify-end' : 'bg-border-strong justify-start'
            )}
            aria-pressed={isAnnual}
            aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-[16px] h-[16px] bg-white rounded-full shadow-sm"
            />
          </button>

          <button
            onClick={() => setIsAnnual(true)}
            className={cn(
              'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 rounded flex items-center gap-2',
              isAnnual ? 'text-text-primary' : 'text-text-muted'
            )}
            aria-pressed={isAnnual}
          >
            Annual
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-success/10 text-success">
              Save 20%
            </span>
          </button>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                'relative flex flex-col rounded-xl border bg-white p-8 transition-all duration-300',
                tier.popular
                  ? 'border-accent-primary shadow-accent-glow-lg scale-[1.02]'
                  : 'border-border-subtle shadow-elevation-1 hover:shadow-elevation-2 hover:border-border-strong'
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-2">
                  <Badge tone="accent">{tier.badge}</Badge>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {tier.popular && (
                    <div className="w-6 h-6 rounded-sm bg-accent-primary/10 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-accent-primary" aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="font-heading font-semibold text-xl text-text-primary">{tier.name}</h3>
                </div>
                <p className="text-sm text-text-secondary">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <AnimatePresence mode="wait">
                  {tier.monthlyPrice ? (
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-4xl font-mono font-bold text-text-primary">
                        ₹{(isAnnual ? tier.annualPrice : tier.monthlyPrice)?.toLocaleString('en-IN')}
                      </span>
                      <span className="text-text-muted text-sm ml-1">/month</span>
                      {isAnnual && (
                        <p className="text-xs text-success mt-1">
                          Billed annually — ₹{((tier.annualPrice ?? 0) * 12).toLocaleString('en-IN')}/yr
                        </p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl font-heading font-bold text-text-primary">Custom</span>
                      <p className="text-sm text-text-muted mt-1">Tailored to your needs</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 flex-1 mb-8">
                <ul className="flex flex-col gap-3" role="list">
                  {(expandedTiers[tier.id] ? tier.features : tier.features.slice(0, VISIBLE_FEATURES)).map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                      <Check
                        className="w-4 h-4 text-success shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {tier.features.length > VISIBLE_FEATURES && (
                  <button
                    onClick={() => toggleTier(tier.id)}
                    className="text-sm font-medium text-accent-primary hover:text-accent-secondary self-start mt-2 focus-visible:outline-none focus-visible:underline"
                  >
                    {expandedTiers[tier.id] ? 'Show less' : `See all features (+${tier.features.length - VISIBLE_FEATURES})`}
                  </button>
                )}
              </div>

              {/* CTA */}
              <Button
                variant={tier.ctaVariant}
                size="md"
                className="w-full mt-auto"
              >
                {tier.ctaLabel}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          All prices in INR. GST applicable. Enterprise plans billed quarterly or annually.
        </p>
      </div>
    </section>
  )
}
