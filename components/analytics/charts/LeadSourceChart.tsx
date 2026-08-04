'use client'

import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

const DATA = [
  { name: 'Facebook Ads', value: 35, color: '#4F46E5' },
  { name: 'IndiaMART', value: 25, color: '#7C3AED' },
  { name: '99acres', value: 20, color: '#06B6D4' },
  { name: 'Housing.com', value: 12, color: '#10B981' },
  { name: 'Others', value: 8, color: '#9CA3AF' },
]

export default function LeadSourceChart() {
  return (
    <ResponsiveContainer width="100%" height={192}>
      <PieChart>
        <Pie
          data={DATA}
          cx="50%"
          cy="45%"
          innerRadius={48}
          outerRadius={72}
          paddingAngle={3}
          dataKey="value"
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-out"
        >
          {DATA.map((entry, i) => (
            <Cell key={i} fill={entry.color} stroke="none" />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(value: number) => [`${value}%`, 'Share']}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => <span style={{ fontSize: 10, color: '#6B7280' }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
