'use client'

import dynamic from 'next/dynamic'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { SectionHeading } from '@/components/ui/SectionHeading'

// Dynamically import charts for performance
const RevenueAreaChart = dynamic(() => import('./charts/RevenueAreaChart'), {
  ssr: false,
  loading: () => <div className="h-48 bg-bg-tertiary rounded-lg animate-pulse" aria-busy="true" aria-label="Loading chart" />,
})

const SalesByRepChart = dynamic(() => import('./charts/SalesByRepChart'), {
  ssr: false,
  loading: () => <div className="h-48 bg-bg-tertiary rounded-lg animate-pulse" aria-busy="true" aria-label="Loading chart" />,
})

const LeadSourceChart = dynamic(() => import('./charts/LeadSourceChart'), {
  ssr: false,
  loading: () => <div className="h-48 bg-bg-tertiary rounded-lg animate-pulse" aria-busy="true" aria-label="Loading chart" />,
})

const KPI_STATS = [
  { label: 'Leads Converted', value: 73, suffix: '%', prefix: '' },
  { label: 'Avg Deal Size', value: 4.2, suffix: 'L', prefix: '₹' },
  { label: 'Revenue Growth', value: 28, suffix: '%', prefix: '+' },
  { label: 'Active Users', value: 1200, suffix: '+', prefix: '' },
]

export function Analytics() {
  return (
    <section className="section-padding bg-bg-primary" id="analytics" aria-labelledby="analytics-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow="ANALYTICS"
          title="Know what's working. In real numbers."
          subtitle="VertexCRM turns your business data into clear insights — so you can double down on what works and cut what doesn't."
          align="center"
        />

        {/* KPI Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 mb-5">
          {KPI_STATS.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-bg-secondary border border-border-subtle">
              <div className="text-4xl font-heading font-bold text-accent-primary mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={1.5}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Revenue trend — takes 2 cols */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-border-subtle shadow-elevation-1 p-6 min-w-0">
            <h3 className="text-base font-semibold text-text-primary mb-1">Revenue Trend</h3>
            <p className="text-xs text-text-muted mb-4">Last 12 months</p>
            <div className="h-[240px] w-full mt-2">
              <RevenueAreaChart />
            </div>
          </div>

          {/* Lead source donut */}
          <div className="bg-white rounded-xl border border-border-subtle shadow-elevation-1 p-6 min-w-0">
            <h3 className="text-base font-semibold text-text-primary mb-1">Lead Sources</h3>
            <p className="text-xs text-text-muted mb-4">This quarter</p>
            <div className="h-[240px] w-full mt-2">
              <LeadSourceChart />
            </div>
          </div>

          {/* Sales by rep — full width */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-border-subtle shadow-elevation-1 p-6 min-w-0">
            <h3 className="text-base font-semibold text-text-primary mb-1">Sales by Rep</h3>
            <p className="text-xs text-text-muted mb-4">Deals closed this month</p>
            <div className="h-[240px] w-full mt-2">
              <SalesByRepChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
