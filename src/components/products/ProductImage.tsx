import React, { useCallback, useState } from 'react';

type ProductImageProps = {
  images: Image[];
};

type Image = {
  imageSrc: string;
  imageAlt: string;
};

export function ProductImage({ images }: ProductImageProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = useCallback((image: Image) => {
    setSelectedImage(image);
  }, []);

  return (
    <div className="flex flex-col items-center col-span-2">
      <img
        src={selectedImage.imageSrc}
        alt={selectedImage.imageAlt}
        className="object-contain w-full h-auto rounded shadow-lg max-h-[430px] backdrop-blur-sm bg-white/5 dark:shadow-sm dark:shadow-primary"
      />
      <div className="flex justify-center gap-2 mt-4 overflow-scroll">
        {images.map((image) => (
          <button
            key={image.imageSrc}
            type="button"
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image.imageSrc}
              alt={image.imageAlt}
              className={`w-10 h-10 object-cover aspect-square mx-2 cursor-pointer ${
                selectedImage.imageSrc === image.imageSrc
                  ? 'border-2 border-primary rounded-md'
                  : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
