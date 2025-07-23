import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-50 flex flex-row justify-around items-center-safe border-black bg-[#D9D9D9]'>
      <div className='h-15 w-60 flex justify-center items-center'>
        <h1 className='text-5xl font-extrabold text-black'>Orders<span className='bg-[#FC8A06]'>.In</span></h1>
      </div>
      <div className='w-100 h-50 flex flex-col justify-center'>
        <h1 className='my-4 font-bold text-black'>Orders.In copyright 2025, All rights reserved.</h1>
        <h2 className='text-black'>Privacy Policy</h2>
        <h2 className='text-black'>Pricing</h2>
        <h2 className='text-black'>Don't sell or share my personal information</h2>
      </div>
      <div className='text-center'>
        <h1 className='font-bold text-black'>Important links</h1>
        <h2 className='text-black'><Link href={'/profile'}>Home</Link></h2>
        <h2 className='text-black'><Link href={'/restaurant'}>Restaurants</Link></h2>
        <h2 className='text-black'><Link href={'/basket'}>Basket</Link></h2>
        <h2 className='text-black'><Link href={'/tracker'}>Tracker</Link></h2>
      </div>
    </div>
  )
}

export default Footer
