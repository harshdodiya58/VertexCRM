'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, User, Mail, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

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

function Field({
  id,
  label,
  icon: Icon,
  type = 'text',
  autoComplete,
  value,
  onChange,
  placeholder,
  error,
}: {
  id: string
  label: string
  icon: React.ElementType
  type?: string
  autoComplete?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  error?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text-primary">
        {label}
      </label>
      <div className="relative">
        <Icon
          className={cn(
            'absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors',
            error ? 'text-danger' : 'text-text-muted'
          )}
          aria-hidden="true"
        />
        <input
          id={id}
          name={id.replace('cta-', '')}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            'w-full h-12 pl-10 pr-4 rounded-md border bg-bg-secondary text-sm text-text-primary placeholder:text-text-muted',
            'transition-colors duration-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary',
            error ? 'border-danger bg-danger/5' : 'border-border-subtle hover:border-border-strong'
          )}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs text-danger" role="alert">{error}</p>
      )}
    </div>
  )
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
                className="bg-white rounded-xl border border-border-subtle shadow-elevation-2 p-5 flex flex-col gap-4"
                aria-label="Book a demo form"
              >
                <Field
                  id="cta-name"
                  label="Your Name"
                  icon={User}
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Priya Mehta"
                  error={errors.name}
                />

                <Field
                  id="cta-email"
                  label="Work Email"
                  icon={Mail}
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="priya@mehta-realty.com"
                  error={errors.email}
                />

                <Field
                  id="cta-company"
                  label="Company Name"
                  icon={Building2}
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Mehta Realty Group"
                  error={errors.company}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-1"
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
