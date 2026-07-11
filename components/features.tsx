'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Receipt, ChefHat, Package, Users, QrCode, BarChart2, FileText, MessageSquare, Building2
} from 'lucide-react'

const features = [
  {
    icon: Receipt,
    title: 'POS & Billing',
    sub: 'Fast & accurate billing',
    desc: 'Bill any table in under 30 seconds. Supports GST invoicing, split bills, and custom discounts.',
    highlight: true,
  },
  {
    icon: ChefHat,
    title: 'Kitchen Mgmt',
    sub: 'KOT & display system',
    desc: 'Orders appear on kitchen display instantly. No paper, no noise, no mistakes.',
  },
  {
    icon: Package,
    title: 'Inventory',
    sub: 'Stock & wastage control',
    desc: 'Track every item from purchase to plate. Get low-stock alerts before you run out.',
  },
  {
    icon: Users,
    title: 'CRM & Loyalty',
    sub: 'Retain your customers',
    desc: 'Build repeat business with BLU token rewards, smart offers, and customer insights.',
  },
  {
    icon: QrCode,
    title: 'QR Ordering',
    sub: 'Contactless table orders',
    desc: 'Guests scan, browse, and order from their phone. Zero waiter dependency.',
  },
  {
    icon: BarChart2,
    title: 'Analytics',
    sub: 'Live business insights',
    desc: 'Real-time dashboards for revenue, costs, bestsellers, and staff performance.',
    highlight: true,
  },
  {
    icon: FileText,
    title: 'Reports',
    sub: 'Daily, weekly, monthly',
    desc: 'Automated reports delivered to your phone every morning. No Excel, no accountant needed.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Bills',
    sub: 'Instant digital receipts',
    desc: 'Send GST bills directly to customers on WhatsApp — instant, paperless, professional.',
  },
  {
    icon: Building2,
    title: 'Multi-Outlet',
    sub: 'Manage all locations',
    desc: 'One dashboard for all your branches. Compare performance across locations instantly.',
  },
]

export function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="features" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(212,160,23,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-5">
            Complete Platform
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-[var(--gold)]">Everything</span> Your Restaurant Needs
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            One subscription. Zero extra integrations. All modules work together seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            const isActive = active === i
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="relative rounded-2xl border p-6 cursor-default overflow-hidden transition-all duration-300 group"
                style={{
                  background: f.highlight
                    ? isActive
                      ? 'rgba(212,160,23,0.15)'
                      : 'rgba(212,160,23,0.08)'
                    : isActive
                    ? 'rgba(212,160,23,0.06)'
                    : 'var(--card)',
                  borderColor: f.highlight
                    ? isActive
                      ? 'rgba(212,160,23,0.6)'
                      : 'rgba(212,160,23,0.3)'
                    : isActive
                    ? 'rgba(212,160,23,0.3)'
                    : 'var(--border)',
                  boxShadow: isActive ? '0 0 40px rgba(212,160,23,0.1)' : 'none',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? 'rgba(212,160,23,0.25)' : 'rgba(212,160,23,0.1)',
                    }}
                  >
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-bold text-base text-foreground"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {f.title}
                    </div>
                    <div className="text-xs text-[var(--gold)] mt-0.5 font-medium">{f.sub}</div>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{f.desc}</p>
                </motion.div>

                {/* Glow corner */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: isActive ? 1 : 0,
                    background: 'radial-gradient(circle at top right, rgba(212,160,23,0.12), transparent 70%)',
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
