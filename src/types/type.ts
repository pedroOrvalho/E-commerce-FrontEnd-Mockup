export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type CartProduct = {
  cartProduct: {
    product: Product;
    quantity: number;
  };
};
