'use client'
import React, { useState } from "react";
import foodItems from "@/app/api/foodItems/route";

const Restaurant = () => {
    const [selectIdx, setSelectIdx] = useState(0);
    type ObjectProps = {
        restaurant: string,
        description: string,
        img: string,
        unitPrice: number,
        totalPrice: number,
        quantity: number,
    }
    type ResProps = {
        obj: ObjectProps,
    }
    const Res = ({ obj }: ResProps) => {

        return (
            <div className="">
                <h1 className="text-3xl text-shadow-md font-bold mx-4 my-4 text-black">{obj.restaurant}</h1>
                <div className="flex flex-row justify-between">
                    <p className="text-shadow-md mx-4 my-4 text-black">{obj.description}</p>
                    <img src={obj.img} alt="" className="mx-4 rounded-full h-50 w-50" />
                </div>
                <div className=" flex justify-center-safe items-center bg-black rounded-lg w-20 h-10 mx-14">
                    <h1 className="text-xl font-bold text-white">${obj.unitPrice}</h1>
                </div>

            </div>
        )
    };
    function addToBasket(obj: ObjectProps) {
        const existingCart = localStorage.getItem('cartItems');
        let cart: ObjectProps[] = existingCart ? JSON.parse(existingCart) : [];

        const ind = cart.findIndex(
            (ele) => ele.restaurant === obj.restaurant && ele.description === obj.description
        );

        if (ind !== -1) {
            cart[ind].quantity += 1;
            cart[ind].totalPrice = cart[ind].unitPrice * cart[ind].quantity;
        } else {
            cart.push(obj);
        }

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
            <div className='h-200 w-200 overflow-scroll border-x rounded-xl'>
                <h1 className='mx-10 text-black font-bold text-5xl mt-4 mb-4'>{foodItems[selectIdx].name}</h1>
                {foodItems[selectIdx].options.map((object, idx) => {
                    return (
                        <div key={idx} className='py-2 px-2 rounded-2xl border-t-4 border-b-4 bg-white'>
                            <Res obj={object} key={idx} />
                            <button onClick={() => {
                                addToBasket(object)
                            }} className='rounded-xl border-2 bg-black h-15  w-35 text-white font-bold ml-13 flex justify-center items-center'>
                                Add To Basket
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="h-200 w-80 overflow-scroll">
                {/* <img src={k.src} alt="" />
                <img src={y.src} alt="" /> */}
            </div>

        </div>
    );
}

export default Restaurant;