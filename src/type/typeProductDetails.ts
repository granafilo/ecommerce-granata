export type TypeProduct = {
  id: number;
  name: string;
  review: TypeReview;
  description: string;
  variants: TypeVariant[];
};

type TypeReview = {
  rating: number;
  reviewCount: number;
};

type TypeVariant = {
  colorId: number;
  colordCode: string;
  colorName: string;
  price: TypePrice;
  images: string[];
  inventory: TypeSizeAvailability[];
};

type TypePrice = {
  amount: number;
  currency: string;
};

type TypeSizeAvailability = {
  size: number;
  stock: number;
};
