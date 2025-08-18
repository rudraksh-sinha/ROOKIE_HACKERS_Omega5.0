export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  description: string;
  relatedProducts: string[]; // IDs of related products
}

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscribed?: boolean; // Flag for subscription discount
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}