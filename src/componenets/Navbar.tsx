'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const pathName = usePathname()

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Browse Menu", path: "/browsemenu" },
    { name: "Restraunts", path: "/restaurants" },
    { name: "tracker", path: "/tracker" },
  ]


  return (
    <div className='flex flex-row justify-center items-center-safe mt-7'>
      <div className='text-3xl text-black text-center m-auto'>
        <h1>Orders</h1>
      </div>
      <div className='h-15 w-250 flex flex-row justify-between items-center m-auto' >
        {/* Changes to be done here */}

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
      <div className=' h-15 w-40 bg-black flex justify-between items-center border-2 border-black rounded-4xl m-auto'>

        <div className=' text-white flex justify-center items-ce'>Login</div>

      </div>
    </div>
  )
}

export default Navbar
