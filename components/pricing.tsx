'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 399, yearly: 3999 },
    desc: 'Single outlet cafes, QSRs & food trucks',
    features: ['POS & Billing', 'Basic Inventory', 'QR Ordering', 'Email Support & Call Support'],
    cta: 'Get Started',
    ctaLink: '#cta',
    popular: false,
  },
  {
    name: 'Growth',
    price: { monthly: 649, yearly: 6499 },
    desc: 'Full-service restaurants & cloud kitchens',
    features: [
      'Everything in Starter',
      'Kitchen Mgmt (KOT)',
      'CRM & Loyalty',
      'Advanced Analytics',
      'Multi-User Access',
      'Multiple Outlets',
      'Priority Support',
    ],
    cta: 'Book a Demo',
    ctaLink: '#cta',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, yearly: null },
    desc: 'Chains, franchises & multi-outlet groups',
    features: [
      'Everything in Growth',
      'Unlimited Outlets',
      'White-label Options',
      'API Access',
      'Custom Integrations',
      'Account Manager',
      '24/7 Premium Support',
    ],
    cta: 'Contact Sales',
    ctaLink: '#cta',
    popular: false,
  },
]

const featureComparison = [
  { label: 'POS & Billing', starter: true, growth: true, enterprise: true },
  { label: 'Kitchen Display (KOT)', starter: false, growth: true, enterprise: true },
  { label: 'CRM & Loyalty', starter: false, growth: true, enterprise: true },
  { label: 'Multi-Outlet Mgmt', starter: false, growth: 'Up to 3', enterprise: 'Unlimited' },
  { label: 'Advanced Analytics', starter: false, growth: true, enterprise: true },
  { label: 'API Access', starter: false, growth: false, enterprise: true },
]

function PlanValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-xs font-semibold text-[var(--gold)]">{value}</span>
  }
  if (value) {
    return <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mx-auto" />
  }
  return <span className="text-muted-foreground text-lg leading-none">×</span>
}

export function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" ref={ref} className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-5">
            Transparent Pricing
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Simple Plans.{' '}
            <span className="text-[var(--gold)]">No Hidden Charges.</span>
          </h2>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] rounded-full p-1.5">
            <button
              onClick={() => setYearly(false)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: !yearly ? 'var(--gold)' : 'transparent',
                color: !yearly ? '#080808' : 'var(--muted-foreground)',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
              style={{
                background: yearly ? 'var(--gold)' : 'transparent',
                color: yearly ? '#080808' : 'var(--muted-foreground)',
              }}
            >
              Yearly
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: yearly ? 'rgba(0,0,0,0.2)' : 'rgba(212,160,23,0.2)',
                  color: yearly ? '#080808' : 'var(--gold)',
                }}
              >
                Save 30%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border p-7 flex flex-col gap-6 overflow-hidden"
              style={{
                background: plan.popular ? '#0f0f0f' : 'var(--card)',
                borderColor: plan.popular ? 'var(--gold)' : 'var(--border)',
                boxShadow: plan.popular ? '0 0 60px rgba(212,160,23,0.15)' : 'none',
              }}
            >
              {plan.popular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--gold)] text-[#080808]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={plan.popular ? 'mt-6' : ''}>
                <div
                  className="text-sm font-semibold text-[var(--gold)] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  {plan.price.monthly ? (
                    <>
                      <span
                        className="text-4xl font-extrabold text-foreground"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        ₹{(yearly ? plan.price.yearly : plan.price.monthly)?.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-muted-foreground pb-1">
                        /{yearly ? 'year' : 'month'}
                      </span>
                    </>
                  ) : (
                    <span
                      className="text-4xl font-extrabold text-foreground"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Custom
                      <span className="text-sm font-normal text-muted-foreground ml-1">pricing</span>
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{plan.desc}</div>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 group"
                style={{
                  background: plan.popular ? 'var(--gold)' : 'transparent',
                  color: plan.popular ? '#080808' : 'var(--gold)',
                  border: plan.popular ? 'none' : '1.5px solid var(--gold)',
                }}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Feature comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-[var(--border)] overflow-hidden"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]">
                <th className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Feature</th>
                {['Starter', 'Growth', 'Enterprise'].map((h) => (
                  <th
                    key={h}
                    className="text-center px-4 py-4 text-xs font-bold uppercase tracking-wider"
                    style={{ color: h === 'Growth' ? 'var(--gold)' : 'var(--muted-foreground)' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((row, i) => (
                <tr
                  key={row.label}
                  className="border-b border-[var(--border)] last:border-0"
                  style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(212,160,23,0.02)' }}
                >
                  <td className="px-5 py-3.5 text-sm text-foreground">{row.label}</td>
                  <td className="text-center px-4 py-3.5"><PlanValue value={row.starter} /></td>
                  <td className="text-center px-4 py-3.5"><PlanValue value={row.growth} /></td>
                  <td className="text-center px-4 py-3.5"><PlanValue value={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-muted-foreground"
        >
          {['Free Demo', 'GST Invoice Included', 'No Hidden Charges', 'Easy Onboarding', 'Dedicated Support'].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)]" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
