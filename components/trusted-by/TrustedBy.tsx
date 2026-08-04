'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

import { SiMeta, SiGoogle, SiWhatsapp, SiZapier } from 'react-icons/si'
import { FaShoppingCart, FaHome, FaBuilding, FaCity } from 'react-icons/fa'

const LOGOS = [
  { name: 'Meta', icon: SiMeta, color: '#1877F2', bg: '#EFF6FF' },
  { name: 'Google', icon: SiGoogle, color: '#4285F4', bg: '#EFF6FF' },
  { name: 'IndiaMART', icon: FaShoppingCart, color: '#1B6CA8', bg: '#EFF6FF' },
  { name: 'Housing.com', icon: FaHome, color: '#00A6A6', bg: '#F0FDFA' },
  { name: '99acres', icon: FaBuilding, color: '#E63B2E', bg: '#FEF2F2' },
  { name: 'MagicBricks', icon: FaCity, color: '#E8451E', bg: '#FEF2F2' },
  { name: 'WhatsApp', icon: SiWhatsapp, color: '#25D366', bg: '#F0FDF4' },
  { name: 'Zapier', icon: SiZapier, color: '#FF4A00', bg: '#FFF7ED' },
]

// Duplicate for seamless loop
const MARQUEE_ITEMS = [...LOGOS, ...LOGOS]

function LogoItem({ name, icon: Icon, color, bg }: typeof LOGOS[0]) {
  return (
    <motion.div
      className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full border border-border-subtle bg-white cursor-default shrink-0 shadow-sm hover:shadow-md transition-shadow"
      style={{ minWidth: '180px' }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ background: bg, color }}
        aria-hidden="true"
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  )
}

export function TrustedBy() {
  return (
    <section className="py-16 bg-bg-secondary border-y border-border-subtle overflow-hidden" aria-label="Integrations and trusted partners">
      <div className="container-content mb-8">
        <SectionHeading
          eyebrow="CONNECTS WITH THE TOOLS YOU ALREADY USE"
          title=""
          align="center"
          className="gap-0"
        />
        <p className="text-center text-text-muted text-sm mt-2">
          Native integrations with the platforms Indian businesses run on
        </p>
      </div>

      {/* Marquee */}
      <div
        className="relative py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-[marquee-reverse_40s_linear_infinite]">
          {MARQUEE_ITEMS.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
