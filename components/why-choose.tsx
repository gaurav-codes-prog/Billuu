'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Zap, BarChart2, Users, Cloud, Building2, MessageSquare, Clock } from 'lucide-react'

const reasons = [
  { icon: Zap, title: 'Faster Billing', desc: 'Reduce wait time by 60%. Bill any table in under 30 seconds.' },
  { icon: BarChart2, title: 'Better Inventory Control', desc: 'Track every item. Stop inventory losses and pilferage instantly.' },
  { icon: Clock, title: 'Live Business Reports', desc: 'Real-time sales, profit, and performance data — 24/7, anywhere.' },
  { icon: Users, title: 'Increase Repeat Customers', desc: 'Built-in loyalty and CRM to bring customers back every week.' },
  { icon: CheckCircle2, title: 'Easy Staff Management', desc: 'Role-based access, attendance, and performance tracking built in.' },
  { icon: Building2, title: 'Multi-Outlet Ready', desc: 'Manage all your locations from one centralized dashboard.' },
  { icon: Cloud, title: 'Cloud-Based Platform', desc: 'Access your restaurant data from any device, anywhere in India.' },
  { icon: MessageSquare, title: 'Reliable 24/7 Support', desc: 'Dedicated team available via phone, WhatsApp and live chat.' },
]

export function WhyChoose() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-5">
            Why Billuu
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Restaurant Owners{' '}
            <span className="text-[var(--gold)]">Choose Billuu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 group"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {r.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{r.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Join banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 rounded-2xl"
          style={{ background: 'var(--gold)' }}
        >
          <span className="text-[#080808] font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
            Join Restaurants already growing with Billuu
          </span>
          <a
            href="#cta"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#080808] text-foreground font-bold text-sm hover:bg-[#111] transition-colors whitespace-nowrap"
          >
            Book a Demo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
