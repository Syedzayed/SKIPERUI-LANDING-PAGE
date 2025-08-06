import CardCarouselParent from '@/components/homeCards/CardCarouselParent'
import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroContent />
      <CardCarouselParent />
    </div>
  )
}

export default page