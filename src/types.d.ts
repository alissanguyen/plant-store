export interface ProductInfo {
  id: number;
  name: string;
  availability: number;
  price: number;
  image: string;
  status: boolean;
  category: string;
  description: string;
  relatedProducts: any[];
}

export interface ReviewInfo {
  id: number;
  description: string;
  buyer: string;
  buyerUsername: string | null;
  location: string;
  time: string;
  from: string;
}

export interface FaqInfo {
  id: number;
  question: string;
  answer: string;
}

export interface PlantCategory {
  id: string;
  name: string;
}

export interface SortOption {
  option: string;
  value: string;
}

export interface CartData {
  id: string;
  created: string;
  items: [];
  totalItems: number;
}

export interface CartItemData {
  id: string;
  image: string;
  price: number;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}
export interface FormattedProductData {
  category: {
    id: string;
    name: string;
  };
  description: string;
  id: string;
  image: string;
  inventory: number;
  name: string;
  price: number;
  relatedProducts: any[];
}

export interface LineTotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Subtotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface Cart {
  id: string;
  created: number;
  updated: number;
  expires: number;
  total_items: number;
  total_unique_items: number;
  subtotal: Subtotal;
  hosted_checkout_url: string;
  meta?: any;
  line_items: any[];
  currency: Currency;
  discount: any[];
}

export interface UpdateCartResponseSuccess {
  success: boolean;
  event: string;
  line_item_id: string;
  product_id?: any;
  product_name?: any;
  quantity: number;
  line_total: LineTotal;
  cart: Cart;
  image?: any;
}
