'use client'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

const DATA = [
  { month: 'Jan', revenue: 320000 },
  { month: 'Feb', revenue: 450000 },
  { month: 'Mar', revenue: 380000 },
  { month: 'Apr', revenue: 620000 },
  { month: 'May', revenue: 540000 },
  { month: 'Jun', revenue: 780000 },
  { month: 'Jul', revenue: 690000 },
  { month: 'Aug', revenue: 920000 },
  { month: 'Sep', revenue: 840000 },
  { month: 'Oct', revenue: 1100000 },
  { month: 'Nov', revenue: 980000 },
  { month: 'Dec', revenue: 1240000 },
]

function formatRevenue(value: number) {
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`
  return `₹${(value / 1000).toFixed(0)}K`
}

export default function RevenueAreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={DATA} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: '#9CA3AF' }}
        />
        <YAxis
          tickFormatter={formatRevenue}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: '#9CA3AF' }}
          width={48}
        />
        <Tooltip
          formatter={(value: any) => [formatRevenue(value), 'Revenue']}
          contentStyle={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            fontSize: 12,
          }}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#4F46E5"
          strokeWidth={2}
          fill="url(#revenueGradient)"
          dot={false}
          activeDot={{ r: 5, fill: '#4F46E5', stroke: '#fff', strokeWidth: 2 }}
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
