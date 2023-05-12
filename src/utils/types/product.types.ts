export type ProductImageProps = {
  images: Image[];
};

export type Image = {
  imageSrc: string;
  imageAlt: string;
};

export type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  quantity: number;
  seller: string;
};
