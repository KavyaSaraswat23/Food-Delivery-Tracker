'use client'
import Map from '@/components/Map';
import React, { useState } from 'react';
import axios from 'axios';
// import { isOrdered } from '../basket/page';

const Tracker = () => {
    const [user, setUser] = useState<string>("")
    const [id, setId] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const getUserDetails = async () => {
        const res = await axios.get('/api/me');
        console.log(res.data);
        setUser(res.data.data.name);
        setId(res.data.data.phone + res.data.data.email);
        setAddress(res.data.data.address)
    }
    
    getUserDetails()
    return (
        <div className='flex flex-row justify-evenly px-0 mt-10'>
            <div className='flex flex-col border border-black w-[30rem] mx-0'>
                <h2 className='text-2xl font-normal'><span className='font-bold'>Order Id:</span> {id}</h2>
                <h2 className='text-2xl font-bold'>Owner: {user}</h2>
                <h2 className='text-2xl font-bold'>Deliver At: <span className='font-semibold'>{address}</span></h2>
            </div>
            <div className=' h-200 w-[54rem] mx-0 '>
                <Map />
            </div>

        </div>
    )
}

export default Tracker
