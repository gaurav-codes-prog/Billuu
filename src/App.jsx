import { useEffect, useMemo, useState } from 'react'

const features = [
  ['01', 'Smart Billing', 'GST-ready billing that is fast, accurate, and built for every service style.'],
  ['02', 'Kitchen Display', 'Send every order to the right station and keep the rush moving.'],
  ['03', 'Inventory Control', 'Know what is selling, what is wasting, and what needs ordering.'],
  ['04', 'Customer CRM', 'Turn first visits into loyal regulars with simple, personal journeys.'],
  ['05', 'Live Analytics', 'See revenue, tables, and team performance in one clear view.'],
  ['06', 'BLU Rewards', 'Give guests transparent digital rewards they can actually use.'],
]

const steps = ['Connect your restaurant', 'Set up your menu', 'Start billing', 'Watch your kitchen', 'Grow with insights']

function Web3Canvas() {
  const nodes = useMemo(() => Array.from({ length: 28 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 53) % 100}%`,
    delay: `${(index % 7) * 0.5}s`,
  })), [])

  return <div className="web3-field" aria-hidden="true">
    {nodes.map((node, index) => <span key={index} className="node" style={node} />)}
    <div className="field-orb orb-one" />
    <div className="field-orb orb-two" />
  </div>
}

function Navbar({ onDemo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="navbar">
    <a className="brand" href="#top" aria-label="Billuu home"><span className="brand-mark">B</span><span>billuu</span></a>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
      <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
      <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
      <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
      <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
    </nav>
    <div className="nav-actions"><span className="live-pill"><i /> Live system</span><button className="button button-small" onClick={onDemo}>Book a demo</button></div>
    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
  </header>
}

function Hero({ onDemo }) {
  const [blocks, setBlocks] = useState(18427)
  useEffect(() => { const timer = setInterval(() => setBlocks(value => value + 1), 3200); return () => clearInterval(timer) }, [])
  return <section className="hero" id="top"><Web3Canvas /><Navbar onDemo={onDemo} /><div className="hero-content">
    <div className="eyebrow"><span /> Restaurant operations, reimagined</div>
    <h1>Run your restaurant<br /><em>like a network.</em></h1>
    <p className="hero-copy">One intelligent operating system for billing, kitchen, inventory, CRM, and growth — built for the way Bharat eats.</p>
    <div className="hero-buttons"><button className="button" onClick={onDemo}>See Billuu in action <span>↗</span></button><a className="text-link" href="#platform">Explore the platform <span>↓</span></a></div>
    <div className="hero-trust"><span>Trusted by operators in</span><strong>3+ cities</strong><b>•</b><strong>10+ restaurants</strong></div>
  </div><div className="block-badge"><span>●</span> Block #{blocks.toLocaleString()} <small>verified</small></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section>
}

function Problem() { return <section className="section problem" id="story"><div className="section-heading"><p className="eyebrow">The old way is broken</p><h2>Your restaurant deserves<br /><em>better infrastructure.</em></h2><p>Most restaurant owners are forced to stitch together disconnected tools that were never made to work as one.</p></div><div className="problem-grid">{[['₹', 'Scattered tools', 'Billing here. Inventory there. Nothing talks to each other.'], ['↯', 'Hidden leakage', 'Small gaps in stock, staff, and sales quietly eat your margins.'], ['◌', 'No clear picture', 'You are making big decisions with yesterday’s data — or no data.']].map(([icon, title, text]) => <article className="problem-card" key={title}><span className="card-icon">{icon}</span><h3>{title}</h3><p>{text}</p><span className="card-number">0{[['₹', 'Scattered tools'], ['↯', 'Hidden leakage'], ['◌', 'No clear picture']].findIndex(item => item[1] === title) + 1}</span></article>)}</div></section> }

function Dashboard() { const [orders, setOrders] = useState(247); useEffect(() => { const timer = setInterval(() => setOrders(value => value + 1), 2200); return () => clearInterval(timer) }, []); return <div className="dashboard"><div className="dash-top"><span className="dash-label"><i /> Live overview</span><span className="dash-date">Today, 17 Sep 2026</span></div><div className="dash-stats"><div><small>Revenue today</small><strong>₹ 1,84,270</strong><span className="positive">↑ 18.4%</span></div><div><small>Orders</small><strong>{orders}</strong><span className="positive">↑ 12.1%</span></div><div><small>Avg. order value</small><strong>₹ 746</strong><span className="positive">↑ 6.8%</span></div></div><div className="chart"><div className="chart-bars">{[38, 52, 46, 67, 56, 81, 72, 94, 68, 86, 73, 100].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>10 AM</span><span>2 PM</span><span>6 PM</span><span>10 PM</span></div></div><div className="dash-foot"><span>Today’s pulse</span><strong><i /> Team is on track</strong><span>→</span></div></div> }

function Platform() { return <section className="section platform" id="platform"><div className="platform-copy"><p className="eyebrow">Meet Billuu</p><h2>The operating system<br />your <em>team</em> deserves.</h2><p>Billuu brings your entire restaurant into one calm, connected command center. Less switching. More knowing.</p><div className="web3-chip"><span>⬡</span><div><strong>Powered by transparent data</strong><small>Every decision, backed by a verified record.</small></div></div></div><Dashboard /></section> }

function HowItWorks() { const [active, setActive] = useState(0); return <section className="section how"><div className="section-heading centered"><p className="eyebrow">One connected flow</p><h2>From first click to<br /><em>last order.</em></h2></div><div className="steps">{steps.map((step, index) => <button className={active === index ? 'step active' : 'step'} onClick={() => setActive(index)} key={step}><span>0{index + 1}</span><strong>{step}</strong><i>→</i></button>)}</div><div className="step-detail"><span className="detail-index">0{active + 1}</span><div><h3>{steps[active]}</h3><p>{['Connect your menu, team, and locations in a few simple clicks.', 'Build a digital menu once and send it everywhere instantly.', 'Serve more guests with frictionless, GST-ready billing.', 'Keep every station synced with live order visibility.', 'Use clean insights to make your next best move.'][active]}</p></div></div></section> }

function Features() { const [selected, setSelected] = useState(0); return <section className="section features" id="features"><div className="section-heading"><p className="eyebrow">One OS. Every edge.</p><h2>Everything your<br /><em>restaurant needs.</em></h2></div><div className="feature-layout"><div className="feature-list">{features.map(([number, title, text], index) => <button className={selected === index ? 'feature-item selected' : 'feature-item'} onClick={() => setSelected(index)} key={title}><span>{number}</span><strong>{title}</strong><i>↗</i></button>)}</div><div className="feature-focus"><span className="focus-number">{features[selected][0]}</span><div className="focus-icon">{['▣', '▤', '◫', '◎', '◈', '⬡'][selected]}</div><h3>{features[selected][1]}</h3><p>{features[selected][2]}</p><a href="#pricing">See how it works →</a></div></div></section> }

function Pricing({ onDemo }) { const [annual, setAnnual] = useState(false); return <section className="section pricing" id="pricing"><div className="section-heading centered"><p className="eyebrow">Simple, honest pricing</p><h2>Pick your pace.<br /><em>Grow from there.</em></h2><div className="billing-toggle"><button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</button><button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Yearly <span>Save 20%</span></button></div></div><div className="price-grid"><article className="price-card"><p>Starter</p><h3>{annual ? '₹1,599' : '₹1,999'}<small>/month</small></h3><span>For focused beginnings.</span><button className="button outline" onClick={onDemo}>Start with Starter →</button><ul><li>Smart billing & GST reports</li><li>Menu & order management</li><li>Basic inventory</li><li>1 location</li></ul></article><article className="price-card featured-price"><div className="popular">Most popular</div><p>Growth</p><h3>{annual ? '₹3,999' : '₹4,999'}<small>/month</small></h3><span>For teams ready to scale.</span><button className="button" onClick={onDemo}>Choose Growth →</button><ul><li>Everything in Starter</li><li>Kitchen display system</li><li>Advanced analytics & CRM</li><li>BLU rewards & loyalty</li><li>Up to 3 locations</li></ul></article><article className="price-card"><p>Enterprise</p><h3>Let&apos;s talk</h3><span>For ambitious multi-location teams.</span><button className="button outline" onClick={onDemo}>Talk to our team →</button><ul><li>Everything in Growth</li><li>Custom integrations</li><li>Dedicated success manager</li><li>Unlimited locations</li></ul></article></div></section> }

function Footer({ onDemo }) { const [email, setEmail] = useState(''); const [sent, setSent] = useState(false); const subscribe = event => { event.preventDefault(); if (email) setSent(true) }; return <><section className="cta"><Web3Canvas /><div><p className="eyebrow">Ready when you are</p><h2>Build the restaurant<br /><em>you imagined.</em></h2><p>See what changes when everything finally works together.</p><button className="button" onClick={onDemo}>Book your free demo ↗</button></div></section><footer><div className="footer-top"><div><a className="brand" href="#top"><span className="brand-mark">B</span><span>billuu</span></a><p>The smart operating system<br />for Bharat&apos;s restaurants.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#platform">Platform</a><a href="#features">Features</a><a href="#pricing">Pricing</a></div><div><strong>Connect</strong><a href="#story">Our story</a><a href="#top">Instagram</a><a href="#top">LinkedIn</a></div><div><strong>Get updates</strong>{sent ? <p className="success">You&apos;re on the list.</p> : <form onSubmit={subscribe}><input aria-label="Email address" value={email} onChange={event => setEmail(event.target.value)} placeholder="Your email address" type="email" required /><button aria-label="Subscribe">→</button></form>}</div></div></div><div className="footer-bottom"><span>© 2026 Billuu Technologies</span><span>Made for Bharat, with clarity.</span><a href="#top">Back to top ↑</a></div></footer></> }

export default function App() { const [demoOpen, setDemoOpen] = useState(false); const [submitted, setSubmitted] = useState(false); return <main><Hero onDemo={() => setDemoOpen(true)} /><Problem /><Platform /><HowItWorks /><Features /><Pricing onDemo={() => setDemoOpen(true)} /><Footer onDemo={() => setDemoOpen(true)} />{demoOpen && <div className="modal-backdrop" onClick={() => setDemoOpen(false)}><div className="demo-modal" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setDemoOpen(false)} aria-label="Close">×</button>{submitted ? <><span className="modal-check">✓</span><h2>You&apos;re on the list.</h2><p>Our team will reach out shortly to find the right fit for your restaurant.</p></> : <><p className="eyebrow">Free, no-pressure walkthrough</p><h2>Let&apos;s talk<br /><em>restaurant.</em></h2><form onSubmit={event => { event.preventDefault(); setSubmitted(true) }}><input required placeholder="Your name" /><input required type="email" placeholder="Work email" /><input placeholder="Restaurant name" /><button className="button" type="submit">Request my demo ↗</button></form></>}</div></div>}</main> }
