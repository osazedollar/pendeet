declare type delivery = "standard" | "speedaf" | "dhl" | "edomason";

declare interface Address {
  id: string;
  name: string;
  address: string;
  phone: string;
}

declare interface DeliveryMethod {
  label: string;
  value: string;
  duration: string;
  amount: number;
  image?: string | StaticImport;
}
