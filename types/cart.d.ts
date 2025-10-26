declare interface CartItem {
  id: string;
  quantity: number;
  title: string;
  vendor: string;
  image: string;
  size?: string;
  color?: string;
  bgColor?: string;
  unitPrice: number;
  // totalPrice: number;
}

declare interface WishlistItem extends Omit<CartItem, "unitPrice"> {
  isInWishlist: boolean;
  discount?: number;
  originalPrice: number;
  currentPrice: number;
  rating?: number;
}
