'use client'
import { useState, useEffect } from "react";
export default function UserProfile() {

    const images: string[] = [
        "https://photos.smugmug.com/Asia/India/i-Pf4hCQr/0/d3d38770/X2/indian-food-dosa-X2.jpg",
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/snacks-recipes-fb.jpg",
        "https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.jpg?s=612x612&w=0&k=20&c=cYxRAfU7OdjJCK4M7dbH4YUIk7SGqETlDvONBEOATuw=",
        "https://images.squarespace-cdn.com/content/v1/5e484ab628c78d6f7e602d73/cc2501a8-9b22-46b7-b5cc-c297a51f57cf/famous-japanese-food-sushi.jpg",
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg",
        "https://www.china-admissions.com/wp-content/uploads/2020/02/Chinese-food.jpg",
    ];

    type propType = {
        images: string[]
    }

    function ImageSlider({ images }: propType) {
        const [currImage, setCurrImage] = useState(0);

        const nextImage = () => {
            setCurrImage((currImage + 1) % images.length);
        };

        const prevImage = () => {
            setCurrImage((currImage - 1 + images.length) % images.length);
        };
        useEffect(() => {
            const imageInterval = setTimeout(() => {
                setCurrImage((currImage + 1) % images.length);
            }, 3000);
            return () => clearTimeout(imageInterval);
        }, [currImage, images.length]);

        return (
            <div className="w-full relative overflow-hidden flex flex-row justify-center mt-10">
                <div className="h-150 w-[92rem] flex flex-row justify-center items-center gap-4 ">
                    <button onClick={prevImage} className="text-black"></button>
                    <img className="h-full w-full object-cover rounded-xl transition" src={images[currImage]} alt="slider" />
                    <button onClick={nextImage} className="text-black"></button>
                </div>
            </div>
        );
    }
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
    type CardProps = {
        name: string,
        img: Img
    }
    const Card = ({ name, img }: CardProps) => {
        return (
            <div className=" bg-cover bg-center h-60 w-100 rounded-xl mt-10" style={img}>

                <div className='relative bg-gray-50 h-10 mt-50 rounded-b-xl'>
                    <p className=' absolute left-2 text-[#FC8A06] font-bold mt-5 ml-5 text-sm'>Restaurant</p>
                    <h3 className='absolute left-2 text-black font-semibold mt ml-5'>{name}</h3>
                </div>
            </div>
        )
    }
    return (
        <div>
            <ImageSlider images={images} />
            <div className='flex justify-center items-center'>
                <div className='flex w-[90rem] justify-between items-center'>
                    <Card name={'Chef Burgers London'} img={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/049/633/073/non_2x/diverse-cafe-menu-bolognese-lasagna-salad-box-smoked-duck-breast-salad-spicy-buffalo-chicken-wings-basque-cheesecake-iced-latte-tiramisu-coffee-filter-pack-photo.jpg')" }} />
                    <Card name={'Grand Ai Cafe London'} img={{ backgroundImage: "url('https://yuherboa.b-cdn.net/wp-content/uploads/2024/10/Bangkok-Chinese-food-1024x574.webp')" }} />
                    <Card name={'Butterbrot Cafe London'} img={{ backgroundImage: "url('https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2400,w_3600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/The_Nash_weyxvb.jpg')" }} />
                </div>
            </div>
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
        </div>
    )
};