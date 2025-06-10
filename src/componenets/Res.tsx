"use client"
import React, { useState } from "react";

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
const Res = ({ obj }: ResProps) => {

    return (
        <div className="">
            <h1 className="text-3xl text-shadow-md font-bold mx-4 my-4 text-black">{obj.restaurant}</h1>
            <div className="flex">
                <p className="text-shadow-md mx-4 my-4 text-black">{obj.description}</p>
                <img src={obj.img} alt="" className="mx-4 rounded-full" />
            </div>
            <div className=" flex justify-center-safe items-center bg-black rounded-lg w-20 h-10 mx-14">
                <h1 className="text-xl font-bold text-white">${obj.price}</h1>
            </div>

        </div>
    )
};

export default Res;