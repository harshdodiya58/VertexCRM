export interface Integration {
  id: string
  label: string
  icon: string
  angle: number
  distance: number
  tooltip: string
  color: string
}

export const INTEGRATIONS: Integration[] = [
  {
    id: 'facebook',
    label: 'Facebook Lead Ads',
    icon: 'Facebook',
    angle: 0,
    distance: 200,
    tooltip: 'Capture leads from Facebook ads instantly',
    color: '#1877F2',
  },
  {
    id: 'indiaMart',
    label: 'IndiaMART',
    icon: 'ShoppingBag',
    angle: 40,
    distance: 200,
    tooltip: 'Sync B2B buyer enquiries from IndiaMART',
    color: '#1B6CA8',
  },
  {
    id: '99acres',
    label: '99acres',
    icon: 'Building2',
    angle: 80,
    distance: 200,
    tooltip: 'Import real estate leads from 99acres',
    color: '#E63B2E',
  },
  {
    id: 'housing',
    label: 'Housing.com',
    icon: 'Home',
    angle: 120,
    distance: 200,
    tooltip: 'Connect Housing.com property enquiries',
    color: '#00A6A6',
  },
  {
    id: 'magicbricks',
    label: 'MagicBricks',
    icon: 'Layers',
    angle: 160,
    distance: 200,
    tooltip: 'Pull leads from MagicBricks listings',
    color: '#E8451E',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'MessageCircle',
    angle: 200,
    distance: 200,
    tooltip: 'Send follow-ups and invoices via WhatsApp',
    color: '#25D366',
  },
  {
    id: 'google-sheets',
    label: 'Google Sheets',
    icon: 'Table',
    angle: 240,
    distance: 200,
    tooltip: 'Export data to Google Sheets any time',
    color: '#0F9D58',
  },
  {
    id: 'zapier',
    label: 'Zapier',
    icon: 'Zap',
    angle: 280,
    distance: 200,
    tooltip: 'Connect 5,000+ apps via Zapier',
    color: '#FF4A00',
  },
  {
    id: 'webhook',
    label: 'Webhooks',
    icon: 'Webhook',
    angle: 320,
    distance: 200,
    tooltip: 'Build custom integrations with webhooks',
    color: '#6366F1',
  },
]
