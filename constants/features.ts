export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  preview: 'lead' | 'hr' | 'invoice'
  bulletPoints: string[]
}

export const FEATURES: Feature[] = [
  {
    id: 'lead-management',
    title: 'Lead Management',
    description: 'Capture leads the moment they come in, track every stage, and never lose a follow-up again.',
    icon: 'Users',
    preview: 'lead',
    bulletPoints: [
      'Auto-capture from Facebook, IndiaMART, 99acres',
      'Visual kanban pipeline: Hot → Cold → Won → Lost',
      'Automated follow-up reminders and tasks',
      'Full lead history and activity log',
    ],
  },
  {
    id: 'hrms',
    title: 'HRMS',
    description: 'Attendance, leave, and payroll — one place your HR team doesn\'t have to fight with.',
    icon: 'CalendarCheck',
    preview: 'hr',
    bulletPoints: [
      'One-click attendance marking and reports',
      'Leave management with approval workflows',
      'Payroll processing with salary slips',
      'Employee directory and onboarding',
    ],
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    description: 'GST-ready invoices, sent and tracked without leaving VertexCRM.',
    icon: 'FileText',
    preview: 'invoice',
    bulletPoints: [
      'GST-compliant invoice generation in seconds',
      'Track paid, unpaid, and overdue invoices',
      'Send via WhatsApp or email directly',
      'Recurring invoices and payment reminders',
    ],
  },
]
