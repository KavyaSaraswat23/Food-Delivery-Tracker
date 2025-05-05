'use client'
import React from 'react'

const Navbar = () => {
    const Links = function({name}){
        return (
            <div className='flex flex-col justify-center items-center h-12 w-30 border-2 border-white rounded-4xl m-7'>
                <h2>{name}</h2>
            </div>
        )
    }
  return (
    <div className='flex justify-center align-middle'>
        
        <div className='h-15 w-250 flex flex-row justify-between items-center border-2 border-amber-100 rounded-4xl' >
            <Links name={'Home'}></Links>
            <Links name={'Browse Menu'}></Links>
            <Links name={'Restraunts'}></Links>
            <Links name={'Track Order'}></Links>
        </div>
    </div>
  )
}

export default Navbar
