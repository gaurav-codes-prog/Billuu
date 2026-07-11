'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, UtensilsCrossed, ChefHat, FileText, CreditCard, Package, BarChart2 } from 'lucide-react'

const steps = [
  { num: '01', icon: Users, label: 'Customer', sub: 'Dine-in / Takeaway / Online' },
  { num: '02', icon: UtensilsCrossed, label: 'Order', sub: 'Table / QR / Counter' },
  { num: '03', icon: ChefHat, label: 'Kitchen (KOT)', sub: 'Instant display system' },
  { num: '04', icon: FileText, label: 'Billing', sub: 'Auto-generated bill' },
  { num: '05', icon: CreditCard, label: 'Payment', sub: 'UPI, Card & Cash' },
  { num: '06', icon: Package, label: 'Inventory', sub: 'Auto stock deduction' },
  { num: '07', icon: BarChart2, label: 'Analytics', sub: 'Live business insights' },
]

export function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="how-it-works" ref={ref} className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-5">
            Seamless Workflow
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How <span className="text-[var(--gold)]">Billuu</span> Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-0 right-0 h-px hidden lg:block" aria-hidden="true">
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0.25 }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.2 }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = activeStep === i
              const isLast = i === steps.length - 1
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12 }}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex flex-col items-center gap-3 cursor-default group"
                >
                  {/* Icon circle */}
                  <motion.div
                    animate={isActive ? { scale: 1.12 } : { scale: 1 }}
                    className="relative w-[104px] h-[104px] rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isLast
                        ? 'var(--gold)'
                        : isActive
                        ? 'rgba(212,160,23,0.2)'
                        : 'var(--card)',
                      border: `2px solid ${isActive || isLast ? 'var(--gold)' : 'var(--border)'}`,
                      boxShadow: isActive ? '0 0 30px rgba(212,160,23,0.3)' : 'none',
                    }}
                  >
                    <Icon
                      className="w-9 h-9"
                      style={{ color: isLast ? '#080808' : isActive ? 'var(--gold)' : 'var(--muted-foreground)' }}
                    />
                    {/* Step number */}
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--gold)] text-[#080808] text-[10px] font-extrabold flex items-center justify-center"
                    >
                      {i + 1}
                    </span>
                  </motion.div>

                  <div className="text-center">
                    <div
                      className="font-bold text-sm transition-colors duration-200"
                      style={{
                        color: isActive ? 'var(--gold)' : 'var(--foreground)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {step.label}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{step.sub}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-14 flex items-center gap-4 px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--gold-border)]"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center shrink-0">
            <span className="text-[#080808] text-sm font-bold">⚡</span>
          </div>
          <p className="text-sm text-foreground">
            Every step is automated & connected in real-time —{' '}
            <span className="text-[var(--gold)] font-semibold">no manual entry, no errors, no lag.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
