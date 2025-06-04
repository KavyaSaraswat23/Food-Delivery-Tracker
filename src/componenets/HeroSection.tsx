"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1733153567.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/snacks-recipes-fb.jpg"
];

const ImageSlider = ({ images }) => {
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
