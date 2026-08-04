'use client'

const EMPLOYEES = [
  { name: 'Priya M.', status: 'Present', color: '#10B981' },
  { name: 'Rohan S.', status: 'Present', color: '#10B981' },
  { name: 'Anjali K.', status: 'Leave', color: '#F59E0B' },
  { name: 'Vikram D.', status: 'Present', color: '#10B981' },
  { name: 'Sneha P.', status: 'WFH', color: '#06B6D4' },
]

const CALENDAR_DAYS = Array.from({ length: 28 }, (_, i) => i + 1)

export function HRPreview() {
  return (
    <div className="flex flex-col gap-3 h-full w-full">
      {/* Mini calendar */}
      <div className="grid grid-cols-7 gap-0.5">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={`${d}-${i}`} className="text-center text-xs text-text-muted font-medium">{d}</div>
        ))}
        {CALENDAR_DAYS.slice(0, 14).map((day) => (
          <div
            key={day}
            className={`text-center text-xs py-0.5 rounded ${
              day === 15 ? 'bg-accent-primary text-white font-semibold' :
              [3, 7, 12].includes(day) ? 'bg-success/20 text-success' :
              [9].includes(day) ? 'bg-warning/20 text-warning' :
              'text-text-secondary'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Employee list */}
      <div className="flex flex-col gap-1 flex-1 overflow-hidden">
        {EMPLOYEES.slice(0, 3).map((emp) => (
          <div key={emp.name} className="flex items-center justify-between bg-white rounded px-2 py-1 border border-border-subtle">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-xs font-bold text-accent-primary">
                {emp.name[0]}
              </div>
              <span className="text-xs text-text-secondary">{emp.name}</span>
            </div>
            <span className="text-xs font-medium" style={{ color: emp.color }}>{emp.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
