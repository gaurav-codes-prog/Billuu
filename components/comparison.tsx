'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const rows = [
  { label: 'Ease of Use', traditional: 'Complex, needs IT support', billuu: 'Intuitive — anyone can learn' },
  { label: 'Cloud Access', traditional: false, billuu: true },
  { label: 'Real-time Analytics', traditional: false, billuu: true },
  { label: 'Inventory Management', traditional: 'Manual / basic', billuu: 'Automated & precise' },
  { label: 'QR Ordering', traditional: false, billuu: true },
  { label: 'Multi-Outlet Mgmt', traditional: false, billuu: true },
  { label: 'Customer Loyalty', traditional: false, billuu: true },
  { label: '24/7 Support', traditional: 'Limited business hours', billuu: 'Always available' },
  { label: 'Scalability', traditional: 'Expensive to upgrade', billuu: 'Grow without friction' },
]

function Cell({ value, gold }: { value: string | boolean; gold?: boolean }) {
  if (typeof value === 'boolean') {
    if (value) return <CheckCircle2 className="w-5 h-5 text-[var(--gold)] mx-auto" />
    return <XCircle className="w-5 h-5 text-red-500 mx-auto" />
  }
  return (
    <span
      className="text-sm font-medium"
      style={{ color: gold ? 'var(--foreground)' : 'var(--muted-foreground)' }}
    >
      {value}
    </span>
  )
}

export function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="compare" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-5">
            The Difference
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Billuu vs{' '}
            <span className="text-[var(--gold)]">Traditional POS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-[var(--gold-border)] overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--gold-border)] bg-[var(--card)]">
                <th className="text-left px-6 py-5 text-sm font-semibold text-muted-foreground">Feature</th>
                <th className="text-center px-6 py-5 text-sm font-bold text-muted-foreground">Traditional POS</th>
                <th
                  className="text-center px-6 py-5 text-sm font-extrabold"
                  style={{ background: 'rgba(212,160,23,0.08)', color: 'var(--gold)' }}
                >
                  Billuu ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="border-b border-[var(--border)] last:border-0"
                  style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{row.label}</td>
                  <td className="text-center px-6 py-4">
                    <Cell value={row.traditional} />
                  </td>
                  <td
                    className="text-center px-6 py-4"
                    style={{ background: 'rgba(212,160,23,0.04)' }}
                  >
                    <Cell value={row.billuu} gold />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
