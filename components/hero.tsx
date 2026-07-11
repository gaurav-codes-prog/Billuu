'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Shield, Zap, TrendingUp } from 'lucide-react'
import { Web3Canvas } from './web3-canvas'

function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return value
}

const liveOrders = [
  { table: 'Table 4', items: 'Paneer Tikka, Dal Makhani', amount: '₹580', status: 'Served', color: '#22c55e' },
  { table: 'Table 7', items: 'Biryani ×2, Raita', amount: '₹760', status: 'Preparing', color: '#f59e0b' },
  { table: 'Table 2', items: 'Soup, Filter Coffee', amount: '₹320', status: 'Billed', color: '#D4A017' },
  { table: 'Table 9', items: 'Masala Dosa ×3', amount: '₹450', status: 'Served', color: '#22c55e' },
]

export function Hero() {
  const [started, setStarted] = useState(false)
  const [orderIdx, setOrderIdx] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true)
    }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderIdx((i) => (i + 1) % liveOrders.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const revenue = useCounter(42850, 2200, started)
  const orders = useCounter(186, 1800, started)
  const uptime = useCounter(999, 2000, started)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]"
    >
      {/* Web3 animated background */}
      <Web3Canvas />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            Restaurant Operating System · Bharat
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {"Bharat's Smart"}
            <br />
            <span className="text-[var(--gold)]">Restaurant</span>
            <br />
            Operating System
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Everything your restaurant needs to run, grow & scale — billing, kitchen, inventory,
            CRM & analytics. All in one Web3-powered platform.
          </motion.p>

          {/* Web3 trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: Shield, label: 'Blockchain Billing' },
              { icon: Zap, label: 'Real-time Sync' },
              { icon: TrendingUp, label: 'On-chain Analytics' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-medium text-muted-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--gold)]" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#cta"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--gold)] text-[#080808] font-bold text-sm hover:bg-[#e8b420] transition-all duration-200 hover:shadow-[0_0_30px_rgba(212,160,23,0.5)]"
            >
              Book Your Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--gold-border)] text-[var(--gold)] font-semibold text-sm hover:bg-[var(--gold-dim)] transition-all duration-200"
            >
              Explore Features
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-8 pt-2"
          >
            {[
              { value: '10+', label: 'Restaurants Onboard' },
              { value: '3+', label: 'Cities Across Bharat' },
              { value: '99.9%', label: 'Platform Uptime' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-extrabold text-[var(--gold)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Live Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          {/* Dashboard card */}
          <div className="rounded-2xl border border-[var(--gold-border)] bg-[#0e0e0e] overflow-hidden shadow-[0_0_80px_rgba(212,160,23,0.12)]">
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#080808] border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffc127]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Billuu Dashboard
              </span>
              <span className="text-xs font-mono text-[var(--gold)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                LIVE
              </span>
            </div>

            <div className="p-5 flex flex-col gap-5">
              {/* Revenue cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Today's Revenue", value: `₹${revenue.toLocaleString('en-IN')}`, sub: '+12% vs yesterday', color: 'var(--gold)' },
                  { label: 'Orders', value: orders.toString(), sub: '+8% vs yesterday', color: '#22c55e' },
                  { label: 'Avg Bill Value', value: `₹${Math.floor(revenue / Math.max(orders, 1))}`, sub: '+4% vs yesterday', color: '#60a5fa' },
                ].map(({ label, value, sub, color }) => (
                  <div key={label} className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-3">
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="text-lg font-extrabold" style={{ color, fontFamily: 'var(--font-heading)' }}>
                      {value}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

              {/* Mini chart */}
              <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-3">
                <div className="text-xs text-muted-foreground mb-3">REVENUE — LAST 7 DAYS</div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 55, 45, 60, 52, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i === 6 ? 'var(--gold)' : 'rgba(212,160,23,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Live orders ticker */}
              <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Live Orders</span>
                  <span className="text-xs font-mono text-[var(--gold)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                    Streaming
                  </span>
                </div>
                <AnimatedOrder order={liveOrders[orderIdx]} />
              </div>

              {/* Web3 badge */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--gold-dim)] border border-[var(--gold-border)]">
                <Shield className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <span className="text-xs text-[var(--gold)]">
                  All transactions cryptographically verified · Block #{(847291 + orderIdx * 3).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-[var(--surface)] border border-[var(--gold-border)] rounded-xl px-4 py-3 shadow-xl hidden lg:block"
          >
            <div className="text-xs text-muted-foreground">KOT Sent</div>
            <div className="text-sm font-bold text-[var(--gold)]">Table 7 · Kitchen</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-[var(--surface)] border border-[var(--gold-border)] rounded-xl px-4 py-3 shadow-xl hidden lg:block"
          >
            <div className="text-xs text-muted-foreground">Uptime</div>
            <div className="text-sm font-bold text-[#22c55e]">
              {(uptime / 10).toFixed(1)}%
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-[var(--gold-border)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--gold)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function AnimatedOrder({ order }: { order: (typeof liveOrders)[0] }) {
  return (
    <motion.div
      key={order.table}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between"
    >
      <div>
        <div className="text-sm font-semibold text-foreground">{order.table}</div>
        <div className="text-xs text-muted-foreground">{order.items}</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-bold" style={{ color: 'var(--gold)' }}>{order.amount}</div>
        <div className="text-xs font-semibold" style={{ color: order.color }}>{order.status}</div>
      </div>
    </motion.div>
  )
}
