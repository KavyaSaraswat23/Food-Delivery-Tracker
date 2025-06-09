'use client'
import React from 'react'

const Offer = () => {
    type Img = {
        backgroundImage: string,
    }
    type CardProps = {
        name: string,
        img: Img
    }
    const Card = ({ name, img }: CardProps) => {
        return (
            <div className=" bg-cover bg-center h-60 w-100 rounded-xl mt-10" style={img}>

                <div className='relative'>
                    <p className=' absolute top-40 left-2 text-[#FC8A06] font-bold mt-5 ml-5 text-sm'>Restaurants</p>
                    <h3 className='absolute top-50 left-2 text-white font-bold mt ml-5'>{name}</h3>
                </div>
            </div>
        )
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='flex w-[90rem] justify-between items-center'>
                <Card name={'Chef Burgers London'} img={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/049/633/073/non_2x/diverse-cafe-menu-bolognese-lasagna-salad-box-smoked-duck-breast-salad-spicy-buffalo-chicken-wings-basque-cheesecake-iced-latte-tiramisu-coffee-filter-pack-photo.jpg')" }} />
                <Card name={'Grand Ai Cafe London'} img={{ backgroundImage: "url('https://yuherboa.b-cdn.net/wp-content/uploads/2024/10/Bangkok-Chinese-food-1024x574.webp')" }} />
                <Card name={'Butterbrot Cafe London'} img={{ backgroundImage: "url('https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2400,w_3600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/The_Nash_weyxvb.jpg')" }} />
            </div>
        </div>
    )
}

export default Offer
