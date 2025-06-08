"use client"
import React, { useState } from 'react';
import foodItems from '@/api/food';
import Res from '@/componenets/Res';

const Restaurants = () => {
  const [selectIdx, setSelectIdx] = useState(0);

  function addToBasket(obj: Object) {
    const existingCart = localStorage.getItem('cartItems');
    let cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(obj);
    localStorage.setItem('cartItems', JSON.stringify(cart));
}
  return (
    <div className='flex flex-row p-10'>
      <div className='h-200 w-80 border-2 '>
        <h1 className='text-black text-3xl text-center font-extrabold mb-4 mt-4'>Menu</h1>
        {foodItems.map((food, idx) => {
          return (
            <div key={idx} className={` ${selectIdx === food.id
              ? 'bg-black text-white' : 'bg-white text-black'} py-2`} onClick={() => setSelectIdx(food.id)}>
              <h2 className={`text-2xl font-bold ml-5 mt-2 mb-2 `}>
                {food.name}
              </h2>
            </div>
          )
        })}
      </div>
      <div className='h-200 w-200 border-2 overflow-scroll'>
        <h1 className='mx-10 text-black font-bold text-5xl my-8'>{foodItems[selectIdx].name}</h1>
        {foodItems[selectIdx].options.map((object, idx) => {
          return (
            <div key={idx} className='py-2 px-2 border-2'>
              <Res obj={object} key={idx} />
              <button onClick={() => {
                addToBasket(object)
              }} className='border-2 '>
                Add To cart
              </button>
            </div>
          )
          })}
      </div>
      <div className='h-200 w-80 border-2'>

      </div>

    </div>
  )
}

export default Restaurants;
