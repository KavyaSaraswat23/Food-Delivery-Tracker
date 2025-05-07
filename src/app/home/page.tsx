import HeroSection from '@/componenets/HeroSection'
import Offer from '@/componenets/Offer'
import Options from '@/componenets/Options'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <HeroSection />
      <Offer />
      <Options />
    </div>
  )
}

export default Home
