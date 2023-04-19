import React from 'react';
import { FaUser } from 'react-icons/fa';
import Stars from './Stars';

type ReviewsProps = {
  name: string;
  rating: number;
  date: string;
  message: string;
};
function ReviewsCard({
  name, rating, date, message,
}: ReviewsProps) {
  return (
    <div className="bg-white dark:bg-dark2 md:w-[700px] md:h-60 rounded-lg md:mt-2 drop-shadow-lg w-[300px] h-auto">
      <div className="flex flex-row ml-5 pt-4">
        <div className="border dark:border-cyan-100 w-10 h-10 px-[7px] py-1.5 rounded-full">
          <FaUser className="h-6 w-6 dark:fill-white" />
        </div>
        <h3 className="text-dark dark:text-white text-base font-semibold ml-5 pt-2">
          {name}
        </h3>
      </div>
      <div className="flex flex-row items-center ml-2 mt-3">
        {/* <img className="w-20" src={stars} alt="Ratings" /> */}
        <Stars num={rating} />
        <p className="text-dark dark:text-white ml-2">{rating}</p>
        <p className="text-gray-500 md:ml-96 md:text-base ml-14 text-sm">
          {date}
        </p>
      </div>
      <p className="text-dark mt-5 mx-5 dark:text-white">{message}</p>
      <hr className="border-gray-300 md:mt-7 mx-3 mt-5 pb-5" />
    </div>
  );
}

export default ReviewsCard;
