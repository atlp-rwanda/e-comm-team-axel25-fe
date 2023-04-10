export type ProductImageProps = {
  images: Image[];
};

export type Image = {
  imageSrc: string;
  imageAlt: string;
};

export type ProductCardProps = {
  images: Image[];
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
};
