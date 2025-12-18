import BrandTicker from '@/components/BrandTicker'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import StickyCallButton from '@/components/StickyCallButton'
import Types from '@/components/Types'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BrandTicker/>
      <Types/>
      <Services/>
      <Reviews/>
      <Footer/>
      <StickyCallButton/>
    </div>
  )
}

export default page
