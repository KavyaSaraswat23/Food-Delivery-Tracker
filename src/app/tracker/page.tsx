'use client'
import Map from '@/componenets/Map'
import React, { useState } from 'react'

const Tracker = () => {
  return (
    <div className='flex flex-row justify-evenly px-0'>

      <div className='flex flex-col border-2 border-black w-[30rem] mx-0'>
        <div>
          <div>
            <h1>Order ID</h1>
          </div>
          <div>
            <h1>Order List</h1>
            <table>

            </table>
          </div>
        </div>
      </div>
      <div className=' h-400 w-[55rem] mx-0'>
        <Map />
      </div>

    </div>
  )
}

export default Tracker
