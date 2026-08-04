export interface PricingTier {
  id: string
  name: string
  badge?: string
  monthlyPrice: number | null
  annualPrice: number | null
  description: string
  ctaLabel: string
  ctaVariant: 'primary' | 'outline'
  popular: boolean
  features: string[]
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 2999,
    annualPrice: 2399,
    description: 'Perfect for small teams just getting started with lead management.',
    ctaLabel: 'Start Free Trial',
    ctaVariant: 'outline',
    popular: false,
    features: [
      'Up to 5 users',
      'Lead Management (up to 500 leads/month)',
      'Basic pipeline view',
      '2 lead source integrations',
      'Basic invoicing (20 invoices/month)',
      'Email support',
      'Mobile app access',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Most Popular',
    monthlyPrice: 6999,
    annualPrice: 5599,
    description: 'The complete VertexCRM experience for growing businesses.',
    ctaLabel: 'Start Free Trial',
    ctaVariant: 'primary',
    popular: true,
    features: [
      'Up to 25 users',
      'Unlimited leads',
      'Full kanban + list pipeline views',
      'All integrations (Facebook, IndiaMART, 99acres, Housing, MagicBricks, WhatsApp)',
      'Complete HRMS (attendance, leave, payroll)',
      'Unlimited GST invoicing',
      'Analytics & reporting dashboard',
      'Automation workflows',
      'Priority support (4hr response)',
      'Custom fields & tags',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solution for large teams with advanced needs.',
    ctaLabel: 'Contact Sales',
    ctaVariant: 'outline',
    popular: false,
    features: [
      'Unlimited users',
      'Everything in Professional',
      'Custom integrations & API access',
      'Dedicated account manager',
      'SSO / SAML authentication',
      'Custom workflows & automations',
      'SLA guarantee (99.9% uptime)',
      'White-label options',
      'On-premise deployment option',
      'Priority onboarding & training',
    ],
  },
]
