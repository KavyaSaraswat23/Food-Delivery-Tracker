'use client'
import React from 'react'

const Options = () => {
    type Img = {
        backgroundImage: string,
    }
    type FoodProps = {
        food: string,
        options: string,
        img: Img
    }
    const Food = ({ food, options = "", img }: FoodProps) => {
        return (
            <div className={`bg-cover bg-center h-50 w-40 rounded-xl mt-10 hover:border `} style={img}>
                <div className=' relative bg-gray-50 h-10 mt-40 rounded-b-xl '>
                    <p className=' absolute left-2 text-[#FC8A06] font-bold  text-sm'>{options}</p>
                    <h3 className='absolute text-black mt-4 left-2 font-bold'>{food}</h3>
                </div>
            </div>
        )

    }

    return (
        <div className='flex justify-center items-center mb-10'>
            <div className='flex w-[90rem] justify-between items-center'>
                <Food food={'Burgers'} options={'23 Restaurants'} img={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D')" }} />
                <Food food={'Pastas'} options={'13 Restaurants'} img={{ backgroundImage: "url('https://i0.wp.com/www.simchafisher.com/wp-content/uploads/2022/01/buffalo-chicken-salad.jpeg?resize=840%2C840&ssl=1')" }} />
                <Food food={'Soups'} options={'4 Restaurants'} img={{ backgroundImage: "url('https://www.seriouseats.com/thmb/DvSDZoMw8WSOQFAMgf3L2wlfY9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/053123_TomatoSoup-MPPSoupsAndStews-Morgan-Hunt-Glaze-f59a081d7efb4625a75a1a907a6b1cbf.jpg')" }} />
                <Food food={'Snacks'} options={'10 Restaurants'} img={{ backgroundImage: "url('https://static.gujaratsamachar.com/content_image/content_image_f5230879-2893-49f6-810b-8bf07f0f14c1.jpeg')" }} />
                <Food food={'Sweets'} options={'20 Restaurants'} img={{ backgroundImage: "url('https://wayfaringgujigirl.com/wp-content/uploads/2020/11/image.png?w=1024')" }} />
                <Food food={'Noodels'} options={'25 Restaurants'} img={{ backgroundImage: "url('https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg')" }} />

            </div>

        </div>
    )
}

export default Options
