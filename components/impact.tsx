'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap } from 'lucide-react'

const stats = [
  { value: '15–20%', label: 'Inventory lost monthly', sub: 'Pilferage, wastage & untracked usage' },
  { value: '₹50K+', label: 'Annual billing errors', sub: 'Wrong orders & missed items per outlet' },
  { value: '2×', label: 'Slower table turnover', sub: 'Compared to tech-enabled restaurants' },
  { value: '3 hrs', label: 'Wasted daily on reports', sub: 'Staff time lost to manual paperwork' },
  { value: '40%', label: 'Customer churn rate', sub: 'From slow service & poor experience' },
]

function AnimatedStat({ value, started }: { value: string; started: boolean }) {
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!started) return
    setDisplay(value)
  }, [started, value])

  return (
    <motion.span
      key={started ? 'started' : 'idle'}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'backOut' }}
      className="block text-3xl lg:text-4xl font-extrabold text-[#ef4444]"
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {display}
    </motion.span>
  )
}

export function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle red vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-xs font-semibold text-red-400 uppercase tracking-widest mb-5">
            Business Impact
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Real Cost of{' '}
            <span className="text-red-400">Operational Inefficiency</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            These are not just headaches — they directly reduce your profits every month.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-red-500/15 bg-[var(--card)] p-5 flex flex-col gap-2"
            >
              <AnimatedStat value={s.value} started={inView} />
              <div className="text-sm font-semibold text-foreground leading-tight">{s.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Alert banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0f0f0f] border border-[var(--gold-border)]"
        >
          <Zap className="w-5 h-5 text-[var(--gold)] shrink-0" />
          <p className="text-sm text-foreground">
            Without the right system, restaurants lose{' '}
            <span className="text-[var(--gold)] font-bold">25–35% of potential revenue</span> every
            month.
          </p>
          <span className="ml-auto text-xs font-mono text-muted-foreground uppercase tracking-widest shrink-0">
            Industry Data
          </span>
        </motion.div>
      </div>
    </section>
  )
}
