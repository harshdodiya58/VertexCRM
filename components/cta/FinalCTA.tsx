'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  company: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email'
  if (!data.company.trim()) errors.company = 'Company name is required'
  return errors
}

export function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setIsLoading(true)
    // Simulate async (no backend)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section
      className="relative section-padding overflow-hidden"
      id="contact"
      aria-labelledby="cta-heading"
    >
      {/* Gradient wash background (≤5% opacity per spec) */}
      <div className="absolute inset-0 bg-signature-subtle pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-tertiary/4 rounded-full blur-3xl" />
      </div>

      <div className="container-content relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow mb-4 block">GET STARTED</span>
          <h2 id="cta-heading" className="font-heading font-semibold text-text-primary mb-4">
            See VertexCRM running your business{' '}
            <span className="gradient-text">in 15 minutes.</span>
          </h2>
          <p className="text-body-lg text-text-secondary">
            Book a personalised demo — we'll show you exactly how VertexCRM fits your
            specific lead sources, team size, and workflow.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-xl border border-border-subtle shadow-elevation-2 p-8 flex flex-col gap-5"
                aria-label="Book a demo form"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cta-name" className="text-sm font-medium text-text-primary">
                    Your Name
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Priya Mehta"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-sm border text-text-primary placeholder:text-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/30 ${
                      errors.name ? 'border-danger bg-danger/5' : 'border-border-subtle hover:border-border-strong'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-danger" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cta-email" className="text-sm font-medium text-text-primary">
                    Work Email
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@mehta-realty.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-sm border text-text-primary placeholder:text-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/30 ${
                      errors.email ? 'border-danger bg-danger/5' : 'border-border-subtle hover:border-border-strong'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-danger" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cta-company" className="text-sm font-medium text-text-primary">
                    Company Name
                  </label>
                  <input
                    id="cta-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Mehta Realty Group"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    className={`w-full px-4 py-3 rounded-sm border text-text-primary placeholder:text-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/30 ${
                      errors.company ? 'border-danger bg-danger/5' : 'border-border-subtle hover:border-border-strong'
                    }`}
                  />
                  {errors.company && (
                    <p id="company-error" className="text-xs text-danger" role="alert">{errors.company}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-2"
                  icon={ArrowRight}
                  iconPosition="right"
                  loading={isLoading}
                >
                  Book My Free Demo
                </Button>

                <p className="text-center text-xs text-text-muted">
                  No setup fee. No credit card. 15-minute demo, no fluff.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-xl border border-success/30 shadow-elevation-2 p-12 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-success" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-text-primary mb-2">
                  You're on the list!
                </h3>
                <p className="text-text-secondary mb-2">
                  Thanks, <strong>{formData.name}</strong>! We'll reach out to{' '}
                  <strong>{formData.email}</strong> within 24 hours to schedule your demo.
                </p>
                <p className="text-sm text-text-muted">
                  In the meantime, check your inbox for a quick intro from our team.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
