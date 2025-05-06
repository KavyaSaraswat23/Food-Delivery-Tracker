'use client'
import React from 'react'

const Navbar = () => {
    const Links = function({name}){
        return (
            <div className='flex flex-col justify-center items-center h-12 w-30 border-2 border-black rounded-4xl m-7 text-black'>
                <h2>{name}</h2>
            </div>
        )
    }
  return (
    <div className='flex flex-row justify-center items-center-safe mt-7'>
        <div className='text-3xl text-black text-center border-2 m-auto'>
            <h1>Orders</h1>
        </div>
        <div className='h-15 w-250 flex flex-row justify-between items-center border-2 border-black rounded-4xl rounded-4xla m-auto' >
            <Links name={'Home'}></Links>
            <Links name={'Browse Menu'}></Links>
            <Links name={'Restraunts'}></Links>
            <Links name={'Track Order'}></Links>
        </div>
        <div className='m-auto'>
            <h1 className='text-3xl text-black text-center border-2'>Login</h1>
        </div>
    </div>
  )
}

export default Navbar
