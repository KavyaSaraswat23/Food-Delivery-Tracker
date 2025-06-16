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

type Status = {
    order: boolean,
  }
  const isOrdered: Status = {
    order: false
  }

const Basket = () => {
  const [orderCart, setOrderCart] = useState<ObjectProps[]>([]);
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
    setOrderCart(cartItems);

    
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    isOrdered.order = true
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

  if (cartItems.length === 0) return <div className="flex justify-center items-center h-190 w-full ">
    <h1 className='text-3xl font-bold'>Your Basket is empty.</h1>
  </div>;

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="h-170 w-200 overflow-scroll ">
        <h1 className="text-3xl font-bold mb-6 text-black">Your Basket</h1>
        {cartItems.map((item, idx) => (
          <div key={idx} className="border-2 p-4 text-left rounded-2xl my-4">
            <h2 className="text-xl font-bold text-black">{item.restaurant}</h2>
            <div className='flex'>
              <p className="mt-2 text-black">{item.description}</p>
              <img src={item.img} alt={item.restaurant} className="w-32 h-32 rounded my-4 text-black" />
            </div>
            <div className='flex'>
              <p className='text-lg font-semibold mx-5 bg-[#FCA809] rounded-lg w-25 text-center'> Quantity: {item.quantity}</p>
              <p className="text-lg font-semibold text-black bg-[#FCA809] rounded-lg w-12 text-center">${item.price}</p>
            </div>

            <button className='text-white bg-black font-semibold rounded-lg w-30 mx-5 my-4' onClick={() => {
              deleteFood(idx)
            }}>Remove Item</button>
          </div>
        ))}
      </div>
      <div className='w-200 h-20 mb-2 rounded-2xl text-center bg-amber-500 flex items-center justify-center'>
        <button className='text-2xl text-center font-extrabold' onClick={finalOrder}>Your Total Order ${totalPrice}</button>
      </div>
    </div>
  );
};

// To get the last order from localStorage (anywhere in your app)
export {isOrdered};

export default Basket;
