declare type Status =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

declare interface Order {
  name: string;
  image: string;
  price: number;
  backgroundColor: string;
  selectedColor: string;
  size: string;
  quantity: string;
  orderId: string;
  status: Status;
  colorName: string;
  date: string;
}
