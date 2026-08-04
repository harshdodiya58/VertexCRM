'use client'

import { CheckCircle } from 'lucide-react'

export function InvoicePreview() {
  return (
    <div className="bg-white rounded-lg border border-border-subtle p-4 h-full w-full shadow-elevation-1 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-accent-primary">VERTEXCRM</p>
          <p className="text-xs text-text-muted">GST Invoice</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">
          <CheckCircle className="w-3 h-3" />
          Paid
        </div>
      </div>

      {/* Invoice details */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-text-muted">Invoice #</span>
          <span className="font-mono font-medium text-text-primary">INV-2024-1042</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-text-muted">To</span>
          <span className="font-medium text-text-primary">Kapoor Realty</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-text-muted">GSTIN</span>
          <span className="font-mono text-text-secondary">27AAPFK0956Q1Z2</span>
        </div>
      </div>

      {/* Line items */}
      <div className="border-t border-border-subtle pt-2 space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-text-secondary">Consulting Services</span>
          <span className="font-mono text-text-primary">₹38,136</span>
        </div>
        <div className="flex justify-between text-xs text-text-muted">
          <span>GST 18%</span>
          <span className="font-mono">₹6,864</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-border-subtle pt-2 flex justify-between items-center">
        <span className="text-xs font-semibold text-text-primary">Total</span>
        <span className="font-mono font-bold text-lg text-accent-primary">₹45,000</span>
      </div>
    </div>
  )
}
