"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://photos.smugmug.com/Asia/India/i-Pf4hCQr/0/d3d38770/X2/indian-food-dosa-X2.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/snacks-recipes-fb.jpg",
  "https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.jpg?s=612x612&w=0&k=20&c=cYxRAfU7OdjJCK4M7dbH4YUIk7SGqETlDvONBEOATuw=",
  "https://images.squarespace-cdn.com/content/v1/5e484ab628c78d6f7e602d73/cc2501a8-9b22-46b7-b5cc-c297a51f57cf/famous-japanese-food-sushi.jpg",
  "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg",
  "https://www.china-admissions.com/wp-content/uploads/2020/02/Chinese-food.jpg",
];

const ImageSlider = ({ images} ) => {
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
      <div className="h-150 w-[95rem] flex flex-row justify-center items-center gap-4">
        <button onClick={prevImage} className="text-black">Prev</button>
        <img className="h-full w-full object-cover rounded-xl" src={images[currImage]} alt="slider" />
        <button onClick={nextImage} className="text-black">Next</button>
      </div>
    </div>
  );
};
const HeroSection = () => {
    
  return (
    <div>
      <ImageSlider images={images}/>  
      
    </div>
  )
}

export default HeroSection
