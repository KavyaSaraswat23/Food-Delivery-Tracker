"use client"
import React, { useState } from 'react';
import foodItems from '@/pages/food';
import Res from '@/componenets/Res';
import k from '@/images/k.png'
import y from '@/images/y.png'
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
      <div className='h-200 w-80 rounded-bl-2xl rounded-tl-2xl'>
        <h1 className='text-black text-3xl text-center font-extrabold mb-4 mt-4'>Menu</h1>
        {foodItems.map((food, idx) => {
          return (
            <div key={idx} className={` ${selectIdx === food.id
              ? 'bg-[#FC8A06] text-black rounded-bl-2xl rounded-tl-2xl' : 'bg-white text-black'} py-2`} onClick={() => setSelectIdx(food.id)}>
              <h2 className={`text-2xl font-bold ml-5 mt-2 mb-2 `}>
                {food.name}
              </h2>
            </div>
          )
        })}
      </div>
      <div className='h-200 w-200 overflow-scroll'>
        <h1 className='mx-10 text-black font-bold text-5xl mt-4 mb-4'>{foodItems[selectIdx].name}</h1>
        {foodItems[selectIdx].options.map((object, idx) => {
          return (
            <div key={idx} className='py-2 px-2 rounded-2xl border-t-4 border-b-4 bg-white'>
              <Res obj={object} key={idx} />
              <button onClick={() => {
                addToBasket(object)
              }} className='rounded-xl border-2 bg-black h-15  w-25 text-white font-bold ml-13'>
                Add To Basket
              </button>
            </div>
          )
          })}
      </div>
      <div className="h-200 w-80 overflow-scroll">
        <img src={k.src} alt="" />
        <img src={y.src} alt="" />
      </div>

    </div>
  )
}

export default Restaurants;
