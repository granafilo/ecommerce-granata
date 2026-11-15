export type TypeProduct = {
  id: number;
  name: string;
  category: "Running" | "Trail" | "Lifestyle" | string;
  reviews: TypeReview;
  description: string;
  variants: TypeVariant[];
};

type TypeReview = {
  rating: number;
  reviewCount: number;
};

export type TypeVariant = {
  colorId: number;
  colorCode: string;
  colorName: string;
  price: TypePrice;
  images: string[];
  inventory: TypeSizeAvailability[];
  badge?: string;
};

type TypePrice = {
  amount: number;
  currency: string;
};

type TypeSizeAvailability = {
  size: number;
  stock: number;
};
