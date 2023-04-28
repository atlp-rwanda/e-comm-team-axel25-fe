import React, { useEffect, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { SlidingImages } from '../../utils/SlidingImages';

type Images = {
  images: SlidingImages;
  linkInfo: [{ url: string; anchor: string }];
};

export function HomeSlider({ images, linkInfo }: Images) {
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
  }, [imageIndex, images.length - 1]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <div className="w-full sm:w-full  h-[90vh] m-auto  relative">
      <div
        style={{ backgroundImage: `url(${images[imageIndex]})` }}
        className="h-full bg-center bg-cover duration-500 "
      />
      <div className="absolute top-[40vh] right-0 left-0 flex height-full justify-center items-center">
        <div className="flex flex-col items-center ">
          <h1 className="text-white font-semibold text-3xl sm:text-5xl py-2">
            Welcome to Team Cypher
          </h1>
          <h1 className="text-white font-medium text-2xl sm:text-3xl">
            {' '}
            official e-commerce website
          </h1>
          <div className="">
            {linkInfo.map((lInfo) => (
              <a key="" href={lInfo.url} className="text-green-400">
                {lInfo.anchor}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-0 left-0 flex justify-center items-end">
        {images.map((_, slideIndex) => (
          <button type="button" key={0} onClick={() => goToSlide(slideIndex)}>
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

export default HomeSlider;
