'use client'
import React from 'react'

const Offer = () => {
    type CardProps = {
        name: string,
    }
    const Card = ({name}:CardProps) => {
        return (
            <div className={`bg-[url('https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg')] bg-cover bg-center h-50 w-70 rounded-xl mt-10`}>
                <div className='relative'>
                    <p className=' absolute top-35 left-2 text-[#FC8A06] font-bold mt-5 ml-5 text-sm'>Restaurants</p>
                    <h3 className='absolute top-45 left-2 text-white font-bold mt ml-5'>{name}</h3>
                </div>
            </div>
        )
    }
  return (
    <div className='flex justify-center items-center'>
        <div className='flex w-[90rem] justify-between items-center'>
            <Card name={'Chef Burgers London'} />
        </div>
    </div>
  )
}

export default Offer
