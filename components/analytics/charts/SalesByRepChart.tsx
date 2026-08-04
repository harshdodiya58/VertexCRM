'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'

const DATA = [
  { name: 'Priya M.', deals: 14, value: 580000 },
  { name: 'Rohan S.', deals: 11, value: 460000 },
  { name: 'Anjali K.', deals: 9, value: 380000 },
  { name: 'Vikram D.', deals: 13, value: 520000 },
  { name: 'Sneha P.', deals: 7, value: 290000 },
]

const COLORS = ['#4F46E5', '#7C3AED', '#06B6D4', '#8B5CF6', '#A78BFA']

export default function SalesByRepChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={DATA} margin={{ top: 4, right: 4, left: 0, bottom: 0 }} barSize={40}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: '#9CA3AF' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: '#9CA3AF' }}
          tickFormatter={(v) => `${v}`}
        />
        <Tooltip
          cursor={{ fill: 'rgba(79,70,229,0.05)' }}
          contentStyle={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(value: any, name: any) => [
            name === 'deals' ? `${value} deals` : `₹${(value / 100000).toFixed(1)}L`,
            name === 'deals' ? 'Deals Closed' : 'Revenue',
          ]}
        />
        <Bar
          dataKey="deals"
          radius={[6, 6, 0, 0]}
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-out"
        >
          {DATA.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
