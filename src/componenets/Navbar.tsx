'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const pathName = usePathname()

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Restraunts", path: "/restaurants" },
    { name: "Basket", path: "/basket" },
    { name: "Tracker", path: "/tracker" },
  ]


  return (
    <div className='flex flex-row justify-center items-center-safe mt-7'>
      <div className='text-black text-center m-auto'>
        <h1 className='text-5xl font-bold'>Orders<span className='bg-[#FC8A06]'>.In</span></h1>
      </div>
      <div className='h-15 flex flex-row justify-around items-center m-auto' >


        {navLinks.map((link) => {
          const isActive = pathName === link.path
          return <Link
            key={link.path}
            href={link.path}
            className={`flex flex-col justify-center items-center h-12 w-30 m-7 transition-colors ${isActive
              ? 'bg-[#FC8A06] text-white rounded-4xl font-semibold'
              : 'bg-white text-black'
              }`}
          >
            {link.name}
          </Link>
        })}

      </div>
      <div className='flex justify-center items-center rounded-4xl text-center h-15 w-40 bg-black m-auto'>
        <h1 className=' border-amber-200 text-white'>Login/Signup</h1>
      </div>
    </div>
  )
}

export default Navbar
