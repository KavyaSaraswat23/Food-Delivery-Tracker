import React from "react";
type ObjectProps = {
    restaurant: string,
    description: string,
    img: string,
    price: number,
    
}
type ResProps = {
    obj: ObjectProps,
    
}
const Res = ({obj}: ResProps) => {
    return (
        <div className=" py-2 px-2 border-2">
            <h1 className="text-3xl font-bold mx-4 my-4">{obj.restaurant}</h1>
            <div className="flex">
                <p className="text-shadow-md mx-4 my-4">{obj.description}</p>
                <img src={obj.img} alt="" className="mx-4 rounded-full"/>
            </div>
            <h1 className="text-xl font-bold mx-14 my-4">{obj.price}</h1>
            <button className="bg-">Add to Basket</button>
        </div>
    )
};

export default Res;