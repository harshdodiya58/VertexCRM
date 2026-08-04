import { Navbar } from '@/components/navbar/Navbar'
import { Hero } from '@/components/hero/Hero'
import { TrustedBy } from '@/components/trusted-by/TrustedBy'
import { Problem } from '@/components/problem-solution/Problem'
import { SolutionTransition } from '@/components/problem-solution/SolutionTransition'
import { CoreFeatures } from '@/components/features/CoreFeatures'
import { DashboardShowcase } from '@/components/dashboard-showcase/DashboardShowcase'
import { Integrations } from '@/components/integrations/Integrations'
import { Automation } from '@/components/automation/Automation'
import { Analytics } from '@/components/analytics/Analytics'
import { WhyChooseUs } from '@/components/why-choose-us/WhyChooseUs'
import { Testimonials } from '@/components/testimonials/Testimonials'
import { Pricing } from '@/components/pricing/Pricing'
import { FAQ } from '@/components/faq/FAQ'
import { FinalCTA } from '@/components/cta/FinalCTA'
import { Footer } from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      {/* Volume 5.7 — One <h1> per page, landmark regions */}
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Problem />
        <SolutionTransition />
        <CoreFeatures />
        <DashboardShowcase />
        <Integrations />
        <Automation />
        <Analytics />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
