import React from 'react'
import TopBar from '../layout/TopBar'
import HeaderBar from '../layout/HeaderBar'
import Hero from '../components/sections/Hero'
import AboutUs from '../components/sections/AboutUs'
import Cta from '../components/Cta'
import Brands from '../components/sections/Brands'
import Services from '../components/sections/Services'
import Branches from '../components/sections/Branches'
import Gallery from '../components/sections/Gallery'
import Guarantee from '../components/sections/Guarantee'
import Footer from '../components/sections/Footer'

const Home = (): React.JSX.Element => {
  return (
    <div>
      <TopBar />
      <HeaderBar />

      <Hero />
      <AboutUs />
      <Cta />
      <Guarantee />
      <Brands />
      <Services />
      <Branches />
      <Gallery />

      <Footer />
    </div>
  )
}

export default Home
