export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  sector: string
  avatar: string
  rating: number
  metrics: { label: string; value: string }[]
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'priya-mehta',
    quote: 'We stopped losing leads between platforms within the first week. Facebook and IndiaMART leads now flow directly into our pipeline — no more spreadsheet juggling.',
    author: 'Priya Mehta',
    role: 'Founder & CEO',
    company: 'Mehta Realty Group',
    sector: 'Real Estate',
    avatar: 'PM',
    rating: 5,
    metrics: [
      { label: 'Lead response time', value: '↓ 78%' },
      { label: 'Deals closed', value: '↑ 40%' },
    ],
  },
  {
    id: 'rohan-sharma',
    quote: 'My sales team actually adopted this one. The kanban pipeline is intuitive enough that even our most old-school rep uses it every day. That\'s rare.',
    author: 'Rohan Sharma',
    role: 'VP Sales',
    company: 'Artisan Services Pvt. Ltd.',
    sector: 'Professional Services',
    avatar: 'RS',
    rating: 5,
    metrics: [
      { label: 'Team adoption', value: '100%' },
      { label: 'Pipeline visibility', value: 'Real-time' },
    ],
  },
  {
    id: 'anjali-kapoor',
    quote: 'Finally — GST invoices and attendance in the same system as our CRM. Our finance team no longer has to chase sales for billing information.',
    author: 'Anjali Kapoor',
    role: 'Head of Finance & HR',
    company: 'Kapoor Manufacturing Co.',
    sector: 'Manufacturing',
    avatar: 'AK',
    rating: 5,
    metrics: [
      { label: 'Invoice processing time', value: '↓ 65%' },
      { label: 'HR admin hours/week', value: '↓ 12hrs' },
    ],
  },
]
