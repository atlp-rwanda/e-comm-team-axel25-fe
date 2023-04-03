import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

type ReviewsProp = {
  num: number;
};

function Stars({ num }: ReviewsProp) {
  return (
    <div className="bg-white rounded-md w-28 h-7 py-1 px-4">
      <span className="flex flex-row">
        {Array.from({ length: 5 }, (_, i) => (
          <TiStarFullOutline
            key={i}
            className={i < num ? 'fill-yellow-500' : 'fill-gray-600'}
          />
        ))}
      </span>
    </div>
  );
}

export default Stars;
