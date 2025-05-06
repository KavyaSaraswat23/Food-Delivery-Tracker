"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
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
  }, [images.length]);

  return (
    <div className="w-full relative overflow-hidden border-2 border-black flex flex-row justify-center mt-10">
      <div className="h-150 w-[90%] flex flex-row justify-center items-center gap-4">
        <button onClick={prevImage} className="text-black">Prev</button>
        <img className="h-full w-full object-cover" src={images[currImage]} alt="slider" />
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
