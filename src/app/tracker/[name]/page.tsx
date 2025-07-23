'use client'
import Map from '@/components/Map';
import React, { useEffect, useState } from 'react';
// import { isOrdered } from '../basket/page';


const Tracker = () => {


    return (
        <div className='flex flex-row justify-evenly px-0 mt-10'>

            <div className='flex flex-col border border-black w-[30rem] mx-0'>
                
            </div>
            <div className=' h-200 w-[54rem] mx-0 '>
                <Map />
            </div>

        </div>
    )
}

export default Tracker
