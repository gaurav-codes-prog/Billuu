'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Package, Users, BarChart2, TrendingDown, Puzzle } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Slow Billing & Long Queues',
    desc: 'Customers wait, tables turn slow, and revenue slips away every hour.',
  },
  {
    icon: Package,
    title: 'Manual Inventory Tracking',
    desc: 'Excel sheets, guesswork, and costly stock leakages every single week.',
  },
  {
    icon: Users,
    title: 'Staff Dependency & Errors',
    desc: 'Manual order-taking leads to kitchen mistakes and unhappy customers.',
  },
  {
    icon: BarChart2,
    title: 'No Business Visibility',
    desc: 'Flying blind without real-time sales, costs, or profit data.',
  },
  {
    icon: TrendingDown,
    title: 'Profit Leakage',
    desc: 'Wastage, pilferage, and billing errors are quietly draining your margins.',
  },
  {
    icon: Puzzle,
    title: 'Disconnected Software',
    desc: "Multiple apps that don't talk to each other waste time and create errors.",
  },
]

export function Problems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="problems" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-5">
            The Challenge
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {"What's Holding Your "}
            <span className="text-[var(--gold)]">Restaurant Back?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day, restaurant owners silently lose revenue to these avoidable problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon
            const isHovered = hovered === i
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-2xl border p-6 cursor-default overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isHovered ? 'rgba(212,160,23,0.5)' : 'var(--border)',
                  background: isHovered ? 'rgba(212,160,23,0.05)' : 'var(--card)',
                  boxShadow: isHovered ? '0 0 40px rgba(212,160,23,0.1)' : 'none',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: isHovered ? 'rgba(212,160,23,0.2)' : 'rgba(212,160,23,0.08)',
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-300"
                    style={{ color: 'var(--gold)' }}
                  />
                </div>
                <h3
                  className="font-bold text-lg text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(212,160,23,0.15), transparent 70%)',
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
