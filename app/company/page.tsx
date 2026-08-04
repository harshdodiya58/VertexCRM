import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/footer/Footer'
import { FinalCTA } from '@/components/cta/FinalCTA'
import { CompanyHero } from '@/components/company/CompanyHero'
import { CompanyStory } from '@/components/company/CompanyStory'
import { CompanyValues } from '@/components/company/CompanyValues'

export const metadata = {
  title: 'Company - VertexCRM',
  description: 'Learn about the team, story, and values behind VertexCRM.',
}

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CompanyHero />
        <CompanyStory />
        <CompanyValues />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
