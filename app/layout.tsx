import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MotionPreferenceProvider } from '@/context/MotionPreferenceContext'
import { LenisProvider } from '@/components/providers/LenisProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VertexCRM — 360° CRM for Lead Management, HRMS & Invoicing',
  description:
    'VertexCRM is a complete business operations platform — capture leads from Facebook, IndiaMART, 99acres, run HR, and send GST invoices, all in one place. Built for Indian SMBs.',
  keywords: [
    '360 CRM',
    'lead management software',
    'HRMS software India',
    'invoicing software',
    'IndiaMART CRM integration',
    'Facebook lead ads CRM',
    'sales pipeline',
    'CRM for real estate',
  ],
  authors: [{ name: 'Harsh Dodiya' }],
  creator: 'VertexCRM',
  publisher: 'VertexCRM',
  metadataBase: new URL('https://vertexcrm.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vertexcrm.vercel.app',
    title: 'VertexCRM — One Platform. Every Customer. Complete Growth.',
    description:
      'Manage leads, run HR, and create invoices — all inside one platform. Built for growing Indian businesses.',
    siteName: 'VertexCRM',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VertexCRM — 360° Business Operations Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VertexCRM — One Platform. Every Customer. Complete Growth.',
    description: 'Lead management, HRMS, and invoicing in one powerful CRM built for Indian businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'VertexCRM',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, iOS, Android',
              description:
                'A 360° business operations CRM for Indian SMBs — lead management, HRMS, invoicing, and integrations in one platform.',
              offers: {
                '@type': 'Offer',
                price: '2999',
                priceCurrency: 'INR',
                priceValidUntil: '2025-12-31',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1200',
              },
              url: 'https://vertexcrm.vercel.app',
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <MotionPreferenceProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </MotionPreferenceProvider>
      </body>
    </html>
  )
}
