'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Shield, Zap, Globe } from 'lucide-react'

const points = [
  'One platform for all your restaurant operations',
  'Cloud-based — access from anywhere, anytime',
  'Built specifically for Indian restaurants',
  'Works for single outlets to large franchise chains',
]

const web3Points = [
  { icon: Shield, title: 'Blockchain-Verified Billing', desc: 'Every transaction is immutably recorded on-chain, eliminating billing fraud entirely.' },
  { icon: Zap, title: 'Tokenized Loyalty Rewards', desc: 'Customers earn BLU tokens on every order — redeemable across all partner restaurants.' },
  { icon: Globe, title: 'Decentralized Data Ownership', desc: 'Your restaurant data belongs to you — not a corporate server. True data sovereignty.' },
]

export function Solution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solution" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Gold divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="inline-block w-fit px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest">
            The Solution
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-balance text-foreground leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet <span className="text-[var(--gold)]">Billuu</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {"Billuu is Bharat's all-in-one Restaurant Operating System — helping restaurants manage billing, kitchen operations, inventory, customer engagement, and business analytics from a single unified platform."}
          </p>

          <ul className="flex flex-col gap-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="text-foreground text-sm font-medium">{p}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#cta"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center gap-2 w-fit px-7 py-3.5 rounded-full bg-[var(--gold)] text-[#080808] font-bold text-sm hover:bg-[#e8b420] transition-all duration-200 hover:shadow-[0_0_30px_rgba(212,160,23,0.4)]"
          >
            Start For Free
          </motion.a>
        </motion.div>

        {/* Right — Web3 cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="rounded-2xl border border-[var(--gold-border)] bg-[var(--card)] p-5 mb-2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-widest">Web3 Superpowers</span>
              <span className="text-xs text-muted-foreground">Powered by blockchain</span>
            </div>
            <div className="flex flex-col gap-4">
              {web3Points.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--gold-dim)] border border-[var(--gold-border)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(212,160,23,0.2)] transition-colors">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Token card */}
          <div className="rounded-2xl border border-[var(--gold-border)] bg-[var(--gold-dim)] p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-[#080808] font-extrabold text-sm">
                BLU
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">BLU Token</div>
                <div className="text-xs text-muted-foreground">Billuu Loyalty Token</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-lg font-extrabold text-[var(--gold)]">₹0.42</div>
                <div className="text-xs text-[#22c55e]">+12.4% today</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Earn BLU tokens on every order. Redeem for discounts, upgrades & exclusive experiences across Billuu partners.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
