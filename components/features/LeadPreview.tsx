'use client'

const COLUMNS = [
  { label: 'Hot', count: 4, color: '#F59E0B', bg: '#FEF3C7' },
  { label: 'Cold', count: 6, color: '#06B6D4', bg: '#CFFAFE' },
  { label: 'Won', count: 3, color: '#10B981', bg: '#D1FAE5' },
  { label: 'Lost', count: 2, color: '#EF4444', bg: '#FEE2E2' },
]

const LEAD_NAMES = ['Rajesh S.', 'Priya M.', 'Amit K.', 'Sunita P.', 'Vikram R.']

export function LeadPreview() {
  return (
    <div className="flex gap-2 h-full w-full">
      {COLUMNS.map((col, ci) => (
        <div key={col.label} className="flex-1 min-w-0 flex flex-col gap-1.5">
          <div
            className="flex items-center justify-between px-2 py-1 rounded text-xs font-semibold"
            style={{ background: col.bg, color: col.color }}
          >
            <span>{col.label}</span>
            <span>{col.count}</span>
          </div>
          {LEAD_NAMES.slice(0, ci === 0 ? 2 : ci === 1 ? 3 : ci === 2 ? 2 : 1).map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="bg-white border border-border-subtle rounded px-2 py-1.5 text-xs text-text-secondary truncate shadow-elevation-1"
            >
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
