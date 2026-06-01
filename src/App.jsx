import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Benefits from './components/Benefits'
import Guests from './components/Guests'
import WhatToExpect from './components/WhatToExpect'
import SponsorsSection from './components/SponsorsSection'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import PartnersSponsorsSection from './components/SponsorsSection'
import HostCircleSection from './components/HostCircleSection'
import ContactSection from './components/ContactUs'

// saurabh is here

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Intro />
      <Benefits />
      <Guests />
      <SponsorsSection />
      <WhatToExpect />
      {/* <PartnersSponsorsSection /> */}
      <Reserve />
      <HostCircleSection />
      <FAQ/>
      <ContactSection/>
      <FinalCTA/>
      <Footer />
    </div>
  )
}
