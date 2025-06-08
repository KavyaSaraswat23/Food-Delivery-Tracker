'use client'
import React from 'react'
import { useEffect, useState } from 'react'

type ObjectProps = {
  restaurant: string,
  description: string,
  img: string,
  price: number,
  quantity: number,
}
type ResProps = {
  obj: ObjectProps,
}
// quantity additon is left for now


const Basket = () => {

  const [cartItems, setCartItems] = useState<ObjectProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

  const finalOrder = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    return (
      <div>
        <form action="">
          
        </form>
      </div>
    )
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

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  if (cartItems.length === 0) return <p className="p-10">Your cart is empty.</p>;

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="h-170 w-200 border-2 overflow-scroll">
        <h1 className="text-3xl font-bold mb-6">Your Basket</h1>
        {cartItems.map((item, idx) => (
          <div key={idx} className="border p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-bold">{item.restaurant}</h2>
            <div className='flex'>
              <p className="mt-2">{item.description}</p>
              <img src={item.img} alt={item.restaurant} className="w-32 h-32 rounded my-4" />
            </div>
            <div>


              <p className="text-lg font-semibold">{item.price}</p>

            </div>

            <button onClick={() => {
              deleteFood(idx)
              console.log(cartItems)
            }}>Delete Food</button>
          </div>
        ))}
      </div>
      <div className='w-200 h-20 border-2 mb-2'>
        <button className='text-2xl mx-3 my-3 text-center' onClick={finalOrder}>Your Total Order {totalPrice}</button>
      </div>
    </div>
  );
};
export default Basket
