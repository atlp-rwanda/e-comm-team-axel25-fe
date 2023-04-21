import React, { useState } from 'react';
import { Counter } from '../inputs/Counter';

type CartDescriptionProps = {
  stock: string;
  leftInStock: number;
  soldBy: string;
  name: string;
  image: string;
};

export function CartDescription({
  stock,
  leftInStock,
  soldBy,
  name,
  image,
}: CartDescriptionProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col items-center gap-3 md:flex-row">
      <img className="w-full h-auto md:w-40 md:h-40" src={image} alt={name} />
      <div className="flex flex-col gap-3">
        <strong className="text-lg font-normal md:text-2xl md:font-medium">
          {name}
        </strong>
        <p className="text-sm text-success md:text-base">{stock}</p>
        <p className="text-sm md:text-base">
          Sold by: <span className="text-primary">{soldBy}</span>
        </p>
        <div className="flex items-center gap-3">
          <Counter
            title=""
            onChange={(value) => {
              setQuantity(value);
            }}
            value={quantity}
          />
          <p className="text-sm text-danger md:text-base">
            {leftInStock} left in stock
          </p>
        </div>
      </div>
    </div>
  );
}
