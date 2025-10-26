import axios from "axios";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getErrorMessage = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    return (
      err.response?.data?.message ||
      err.message ||
      "Something went wrong, please try again."
    );
  }

  return "Network Error, please try again later.";
};

//default refresh_token_lifetime = 7days
//NB: Change refresh-token-lifetime to 1yr cause dats what comes from BE; i'm just using 7 days 4 testing
//NB: change access-token-lifetime to 5min in production; i'm using 15min just to test
export const ACCESS_TOKEN_LIFETIME = 15 * 60;
export const REFRESH_TOKEN_LIFETIME = 7 * 24 * 60 * 60;
export const ACCESS_TOKEN_IDENTIFIER = "access";
export const REFRESH_TOKEN_IDENTIFIER = "refresh";
export const STORAGE_CART_IDENTIFIER = "pendeet.cart";
export const CHECKOUT_STEP_IDENTIFIER = "pendeet.checkoutStep";
export const STORAGE_WISHLIST_IDENTIFIER = "pendeet.wishlist";
export const BASE_COOKIE_OPTIONS: ResponseCookie = {
  name: "access",
  value: "",
  httpOnly: true,
  sameSite: "strict" as "strict" | "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: ACCESS_TOKEN_LIFETIME,
};

export const BASE_BACKEND_URL = process.env.NEXT_PUBLIC_BASE_BACKEND_URL;
