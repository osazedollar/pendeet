import React from "react";
import { CheckoutContent } from "@/components/checkout/checkout-content";
import { getUserAddresses } from "@/data";

export const metadata = {
  title: "Checkout",
  description: "Checkout and complete your purchase.",
};

async function CheckoutPage() {
  const userAddresses = await getUserAddresses();

  //No need for all this -> px-4 lg:px-8 py-6 md:py-8 cause u already have w-9/10
  return (
    <div className="min-h-screen bg-offwhite pb-14">
      <div className="max-w-7xl w-9/10 mx-auto ">
        <CheckoutContent userAddresses={userAddresses} />
      </div>
    </div>
  );
}

export default CheckoutPage;
