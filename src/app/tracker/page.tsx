import Map from '@/componenets/Map'
import React from 'react'

const Tracker = () => {
  return (
    <div className='flex flex-row justify-evenly'>
      
      <div className='border-2 border-black w-[30rem]'>
        <h1 className='text-black'>Info</h1>
      </div>
      <div className='border-2 h-400 w-[50rem] border-black'>
        {/* <Map /> */}
      </div>
      
    </div>
  )
}

export default Tracker
