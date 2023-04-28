import React from 'react';

type ProductImageProps = {
  image: string;
};

export function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="flex flex-col items-center col-span-2">
      <img
        src={image}
        alt={image}
        className="object-contain w-full h-auto rounded shadow-lg max-h-[430px] backdrop-blur-sm bg-white/5 dark:shadow-sm dark:shadow-primary"
      />
    </div>
  );
}
