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
