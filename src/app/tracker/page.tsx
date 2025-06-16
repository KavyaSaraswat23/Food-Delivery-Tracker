'use client'
import Map from '@/componenets/Map';
import React, { useEffect, useState } from 'react';
import { isOrdered } from '../basket/page';


const Tracker = () => {

  function orderId(): number | null{
    if (isOrdered.order){
      const k = Math.floor(Math.random() * 9000000000) + 1000000000;
      return k
    }return null

};
const id = orderId();

  return (
    <div className='flex flex-row justify-evenly px-0'>

      <div className='flex flex-col border-2 border-black w-[30rem] mx-0'>
        <div>
          <div>
            <h1>Order ID: {id}</h1>
            
          </div>
          <div>
            <h1>Order List</h1>
            {/* {orderCart.map((item, idx) => {
              return (
                <div key={idx}>
                  <h1>{item.restaurant}</h1>
                </div>
              )
            })} */}
            
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
