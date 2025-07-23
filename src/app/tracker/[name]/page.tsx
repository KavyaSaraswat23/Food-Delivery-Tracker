'use client'
import Map from '@/components/Map';
import React, { useState } from 'react';
import axios from 'axios';

const Tracker = () => {
    const [user, setUser] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const getUserDetails = async () => {
        const res = await axios.get('/api/me');
        console.log(res.data);
        setUser(res.data.data.name);
        setId(res.data.data.phone + res.data.data.email);
        setAddress(res.data.data.address)
    }

    getUserDetails();

    type ObjectProps = {
        restaurant: string,
        img: string,
        unitPrice: number,
        totalPrice: number,
        quantity: number,
    }
    const order: ObjectProps[] = [
        {
            restaurant: "Pizza Shopee",
            img: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg",
            unitPrice: 180,
            totalPrice: 180,
            quantity: 1,
        },
        {
            restaurant: "Madras Dosa Corner",
            img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-L1.jpg?resize=600%2C900&ssl=1",
            unitPrice: 180,
            totalPrice: 180,
            quantity: 1,
        },
        {
            restaurant: "Amrik Sukhdev",
            img: "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg",
            unitPrice: 180,
            totalPrice: 180,
            quantity: 1,
        },
    ]
    return (
        <div className='flex flex-row justify-evenly px-0 mt-10'>
            <div className='flex flex-col w-[30rem] mx-0 rounded-2xl'>
                <h2 className='text-2xl font-bold'>Order Id: <span className='font-normal'>{id}</span></h2>
                <h2 className='text-2xl font-bold'>Owner: <span className='font-normal'>{user}</span></h2>
                <h2 className='text-2xl font-bold'>Deliver At: <span className='font-normal'>{address}</span></h2>
                <h2 className='text-2xl font-bold mt-4'>Order Items:</h2>
                <div className='border-2 rounded-2xl'>
                    {order.map((food, idx) => {
                    return (
                        <div key={idx} className='border rounded-2xl'>
                            <h2 className='text-xl font-semibold ml-5'>Price {food.restaurant}</h2>
                            <div className='flex flex-row justify-around'>

                                <h2 className='text-xl font-semibold mt-5'>{food.unitPrice}</h2>
                                <img src={food.img} alt="" className='h-20 w-20 rounded-2xl'/>
                            </div>
                        </div>
                    )
                    })}
                </div>
                
            </div>
            <div className=' h-200 w-[54rem] mx-0 '>
                <Map />
            </div>

        </div>
    )
}

export default Tracker
