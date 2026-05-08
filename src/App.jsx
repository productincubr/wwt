import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Benefits from './components/Benefits'
import WhatToExpect from './components/WhatToExpect'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

// saurabh is here

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Intro />
      <Benefits />
      <WhatToExpect />
      <Reserve />
      <FAQ/>
      <FinalCTA/>
      <Footer />
    </div>
  )
}
