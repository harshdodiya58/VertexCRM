'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccordionItem } from '@/components/ui/AccordionItem'
import { FAQ_ITEMS } from '@/constants/faq'

export function FAQ() {
  // Single-open accordion (documented choice per spec)
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="section-padding bg-bg-primary" id="faq" aria-labelledby="faq-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before getting started. Not finding your answer? Chat with us on WhatsApp."
          align="center"
        />

        <div
          className="mt-12 max-w-3xl mx-auto flex flex-col gap-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} role="listitem">
              <AccordionItem
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          Still have questions?{' '}
          <a
            href="#contact"
            className="text-accent-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 rounded"
          >
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  )
}
