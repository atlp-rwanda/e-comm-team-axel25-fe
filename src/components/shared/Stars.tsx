import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

type ReviewsProp = {
  num: number;
};

function Stars({ num }: ReviewsProp) {
  return (
    <div className="flex items-center justify-center">
      <span className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <TiStarFullOutline
            key={i}
            className={
              i < num ? 'fill-yellow-500' : 'fill-gray-600 dark:fill-gray-400'
            }
          />
        ))}
      </span>
    </div>
  );
}

export default Stars;
