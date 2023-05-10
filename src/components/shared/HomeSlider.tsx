import React, { useEffect, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { Button } from './Button';

type Images = {
  images: string[];
};

export function HomeSlider({ images }: Images) {
  const [imageIndex, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageIndex < images.length - 1) {
        setIndex(imageIndex + 1);
      } else {
        setIndex(0);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageIndex, images.length]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <div className="w-full sm:w-full  h-[90vh] m-auto  relative">
      <div
        style={{ backgroundImage: `url(${images[imageIndex]})` }}
        className="h-full duration-500 bg-center bg-cover "
      />
      <div className="absolute top-[40vh] right-0 left-0 flex height-full justify-center items-center">
        <div className="flex flex-col items-center p-8 rounded-md bg-slate-400/5 backdrop-blur-3xl">
          <h1 className="py-2 text-3xl font-semibold !text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 sm:text-5xl">
            Buy products from world&#39;s top best sellers.
          </h1>
          <h1 className="text-2xl font-medium text-white sm:text-3xl">
            Get cheap, quality products from our shop.
          </h1>
          <Link className="mt-4 text-green-400" to="/register">
            <Button colorScheme="btn-secondary" label="Register" />
          </Link>
        </div>
      </div>
      <div className="absolute left-0 right-0 flex items-end justify-center bottom-3">
        {images.map((img, slideIndex) => (
          <button
            type="button"
            key={img + crypto.randomUUID()}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled
              className={`cursor-pointer ${
                imageIndex === slideIndex
                  ? 'text-white'
                  : 'text-white opacity-50'
              }`}
              style={
                imageIndex === slideIndex ? { fontSize: 46 } : { fontSize: 40 }
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
