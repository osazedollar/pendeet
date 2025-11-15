import { ACCESS_TOKEN_IDENTIFIER } from "./config";

export const storeAccessToken = (state: IActionState) => {
  if (state.data) {
    sessionStorage.setItem(ACCESS_TOKEN_IDENTIFIER, state.data.access);
  }
};

export const formatCurrency = (val: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(val);
};

export const wait = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

export const getStatusClasses = (statusValue: Status) => {
  switch (statusValue) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "shipped":
      return "bg-indigo-100 text-indigo-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    case "delivered":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
