import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './shared';
import { images } from '../utils/SlidingImages';

export function DiscountArea() {
  return (
    <div className="flex my-8 gap-4">
      <img
        className="max-w-sm flex-1 object-cover rounded-md"
        src={images[2]}
        alt="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="w-full flex-1">
        <h2 className="text-2xl">We are offering discount for holidays.</h2>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam numquam dolor,
          eveniet expedita tenetur quis iure minima sint excepturi assumenda pariatur voluptatem
          molestias fuga, rerum architecto ab dolores alias.
        </p>
        <Link to="/login">
          <Button colorScheme="btn-secondary" label="Get started with our services" />
        </Link>
      </div>
    </div>
  );
}
