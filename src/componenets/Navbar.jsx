'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    
  return (
    <div className='flex flex-row justify-center items-center-safe mt-7'>
        <div className='text-3xl text-black text-center m-auto'>
            <h1>Orders</h1>
        </div>
        <div className='h-15 w-250 flex flex-row justify-between items-center border-2 border-black rounded-4xl rounded-4xla m-auto' >

            <Link href='/home' className='flex flex-col justify-center items-center h-12 w-30 border-2 border-black rounded-4xl m-7 text-black bg-[#FC8A06]'>Home</Link>
            <Link href='/browsemenu' className='flex flex-col justify-center items-center h-12 w-30 border-2 border-black rounded-4xl m-7 text-black'>Browse Menu</Link>
            <Link href='/restaurants' className='flex flex-col justify-center items-center h-12 w-30 border-2 border-black rounded-4xl m-7 text-black'>Restraunts</Link>
            <Link href='/tracker bg-' className='flex flex-col justify-center items-center h-12 w-30 border-2 border-black rounded-4xl m-7 text-black'>Track Order</Link>
            
        </div>
        <div className='m-auto'>
            <h1 className='text-3xl text-black text-center '>Login</h1>
        </div>
    </div>
  )
}

export default Navbar
