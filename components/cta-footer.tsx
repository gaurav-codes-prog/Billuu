'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Zap, Mail, Phone, MapPin } from 'lucide-react'
import { Web3Canvas } from './web3-canvas'

export function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      <Web3Canvas />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-[var(--gold)] flex items-center justify-center">
            <Zap className="w-8 h-8 text-[#080808]" strokeWidth={2.5} />
          </div>

          <span className="px-4 py-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-dim)] text-xs font-semibold text-[var(--gold)] uppercase tracking-widest">
            Get Started Today
          </span>

          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-balance text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Transform Your{' '}
            <span className="text-[var(--gold)]">Restaurant?</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Book a free 30-minute demo. {"We'll"} set up your restaurant on Billuu in under an hour.
            No credit card required.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-2">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Restaurant email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-5 py-3.5 rounded-full bg-[var(--card)] border border-[var(--border)] text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="px-5 py-3.5 rounded-full bg-[var(--card)] border border-[var(--border)] text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--gold)] text-[#080808] font-bold text-sm hover:bg-[#e8b420] transition-all duration-200 hover:shadow-[0_0_40px_rgba(212,160,23,0.5)] group"
              >
                Book My Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full mt-2 px-8 py-6 rounded-2xl border border-[var(--gold-border)] bg-[var(--gold-dim)]"
            >
              <div className="text-2xl font-extrabold text-[var(--gold)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                You{"'"}re on the list!
              </div>
              <div className="text-muted-foreground text-sm">
                Our team will reach out within 24 hours to schedule your demo. Check your email for confirmation.
              </div>
            </motion.div>
          )}

          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground mt-2">
            {['No credit card required', 'Setup in 1 hour', '30-day free trial'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[var(--border)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--gold)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#080808]" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-foreground">Bil</span>
                <span className="text-[var(--gold)]">luu</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Bharat's"} Smart Restaurant Operating System. Billing, kitchen, inventory, CRM & analytics — all in one.
            </p>
            <div className="flex gap-3">
              {['T', 'I', 'L', 'Y'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--gold)] hover:border-[var(--gold-border)] cursor-pointer transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-sm font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Product</div>
            <ul className="flex flex-col gap-2.5">
              {['POS & Billing', 'Kitchen Display', 'Inventory', 'Analytics', 'QR Ordering', 'WhatsApp Bills'].map((l) => (
                <li key={l}>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Company</div>
            <ul className="flex flex-col gap-2.5">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact</div>
            <ul className="flex flex-col gap-3">
              {[
                { icon: Mail, text: 'hello@billuu.com' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: MapPin, text: 'Bengaluru, India' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4 text-[var(--gold)] shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Billuu. All rights reserved. Powered by Web3 technology.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--gold)] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
