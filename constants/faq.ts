export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'lead-sources',
    question: 'Can VertexCRM connect to my existing lead sources?',
    answer: 'Yes — VertexCRM integrates natively with Facebook Lead Ads, IndiaMART, 99acres, Housing.com, MagicBricks, and WhatsApp. Leads flow in automatically the moment a prospect submits a form or enquiry, with zero manual data entry. We also support Zapier and webhooks for custom integrations with virtually any other tool.',
  },
  {
    id: 'setup-fee',
    question: 'Is there a setup fee?',
    answer: 'No setup fees on Starter or Professional plans. You can start a free trial with full access — no credit card required. Enterprise plans include white-glove onboarding and data migration support, which is scoped per project.',
  },
  {
    id: 'data-migration',
    question: 'Can I migrate my existing data from spreadsheets or another CRM?',
    answer: 'Absolutely. VertexCRM supports CSV import for leads, contacts, and companies. Our onboarding team (available for Professional and above) will help you map your fields and validate the data before going live. Enterprise customers get a fully managed migration with a dedicated data engineer.',
  },
  {
    id: 'small-teams',
    question: 'Does it work for teams under 10 people?',
    answer: 'The Starter plan is specifically designed for teams of 1–5. Many of our customers started as solo founders managing everything themselves and scaled into the Professional plan as they grew. There\'s no minimum team size — VertexCRM grows with you.',
  },
  {
    id: 'gst-invoicing',
    question: 'Is the invoicing module GST-compliant?',
    answer: 'Yes. VertexCRM\'s invoicing module is built for Indian businesses — it generates GSTIN-compliant invoices with CGST/SGST/IGST breakdowns, supports multiple tax slabs, and produces e-invoices in the format required under GST regulations. You can also track HSN/SAC codes per line item.',
  },
  {
    id: 'mobile',
    question: 'Is there a mobile app?',
    answer: 'Yes — VertexCRM has native iOS and Android apps. Field sales teams can update lead status, log calls, and create invoices on the go. The mobile app syncs in real time with the web dashboard so nothing gets lost.',
  },
  {
    id: 'data-security',
    question: 'How secure is our business data?',
    answer: 'VertexCRM is hosted on AWS with 256-bit AES encryption at rest and TLS 1.3 in transit. We\'re SOC 2 Type II compliant and perform daily encrypted backups with 30-day retention. Enterprise customers can opt for dedicated instances and custom data residency requirements.',
  },
  {
    id: 'cancel',
    question: 'Can I cancel anytime?',
    answer: 'Yes — both monthly and annual plans can be cancelled at any time from your account settings. Monthly plans stop at the end of the billing period. Annual plans include a 30-day money-back guarantee if you\'re not satisfied within the first month.',
  },
]
