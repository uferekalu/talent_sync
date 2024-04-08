import BackgroundImages from '@/components/BackgroundImages'
import Benefits from '@/components/Benefits'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import QuickSearchLandingPage from '@/components/QuickSearchLandingPage'

export default function Home() {
  return (
    <main className="bg-[#D9E2FF]">
      <div className="fixed z-[99] w-full bg-[#D9E2FF]">
        <Nav activeLink="Home" />
      </div>
      <div className="relative top-[12vh]">
        <div className="pt-3 bg-gradient-to-b from-[#D9E2FF] to-[#FFFFFF]">
          <BackgroundImages />
          <Hero />
          <QuickSearchLandingPage />
        </div>
        <Benefits />
      </div>
    </main>
  )
}
