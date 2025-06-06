'use client'
import HeroSection from '@/componenets/HeroSection'
import Offer from '@/componenets/Offer'
import React from 'react'
import { useEffect, useState } from 'react'
import Options from '@/componenets/Options'

type ObjectProps = {
  restaurant: string,
  description: string,
  img: string,
  price: number,

}
type ResProps = {
  obj: ObjectProps,
}

const Basket = () => {
  const [cartItems, setCartItems] = useState<ObjectProps[]>([]);
  const deleteFood = (idx: number) => {
    const updatedCart = cartItems.filter((res, i) => {
      if (idx === i) {
        return false
      } else {
        return true
      }
    })
    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }
  useEffect(() => {
    const items = localStorage.getItem('cartItems');
    if (items) {
      try {
        const parsed: ObjectProps[] = JSON.parse(items);
        setCartItems(parsed);
      } catch (e) {
        console.error('Error parsing cart items', e);
      }
    }
  }, []);

  if (cartItems.length === 0) return <p className="p-10">Your cart is empty.</p>;

  return (
    <div className='flex flex-row justify-center'>
      <div className=" w-min-200 border-2">
        <h1 className="text-3xl font-bold mb-6">Your Basket</h1>
        {cartItems.map((item, idx) => (
          <div key={idx} className="border p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-bold">{item.restaurant}</h2>
            <div className='flex'>
              <p className="mt-2">{item.description}</p>
              <img src={item.img} alt={item.restaurant} className="w-32 h-32 rounded my-4" />
            </div>
            <div>
              <input type="number" name="quantity" min="1" ></input>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
            <button onClick={() => {
              deleteFood(idx)
              console.log(cartItems)
            }}>Delete Food</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Basket
