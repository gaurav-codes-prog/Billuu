import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Problems } from '@/components/problems'
import { Impact } from '@/components/impact'
import { Solution } from '@/components/solution'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { WhyChoose } from '@/components/why-choose'
import { Pricing } from '@/components/pricing'
import { Comparison } from '@/components/comparison'
import { CTASection, Footer } from '@/components/cta-footer'

export default function Home() {
  return (
    <main className="bg-[#080808] text-foreground">
      <Navbar />
      <Hero />
      <Problems />
      <Impact />
      <Solution />
      <HowItWorks />
      <Features />
      <WhyChoose />
      <Pricing />
      <Comparison />
      <CTASection />
      <Footer />
    </main>
  )
}
