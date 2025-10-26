"use client";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/ui/Button";
import { LuTag } from "react-icons/lu";
import OrderSummary from "../general/order-summary";
import { useCart } from "@/context/cart-context";
import Empty from "./empty";
import CartItem from "./cart-item";
import { formatCurrency } from "@/utils/helper-functions";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";

// interface CartListProps {
//   items: CartItem[];
// }

export const CartList = () => {
  const { cartItems } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const router = useRouter();

  const isEmpty = cartItems.length === 0;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const discount = 10000;
  const total = subtotal - discount;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Cart Items */}
      {!isEmpty ? (
        <>
          <div className={`lg:col-span-2 space-y-4`}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            {/*You could use this same order summary for checkout; only change the children inside */}
            <OrderSummary>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gross Discount</span>
                  <span className="font-semibold text-red-500">
                    -{formatCurrency(discount)}
                  </span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="relative flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Add promo code"
                      className="w-full px-4 pl-10 py-2.5 bg-[#F0F0F0] rounded-2xl focus:bg-white focus:outline-none border border-transparent focus:border-primary transition-all duration-300 ease-in-out peer"
                    />
                    <LuTag className="absolute left-3 text-placeholder text-xl top-1/2 -translate-y-1/2 peer-focus:text-primary" />
                  </div>

                  <button className="px-6 border border-primary text-primary rounded-2xl font-medium hover:bg-primary hover:text-white transition-colors duration-300">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                config={{
                  className: "rounded-2xl!",
                  onClick: () => router.push("/checkout"),
                }}
                size="full"
                variant="primary"
              >
                Go to Checkout
                <FiArrowRight className="w-4 h-4" />
              </Button>
            </OrderSummary>
          </div>
        </>
      ) : (
        <div className="flex-center top-1/2 col-span-1 lg:col-span-3 ">
          <Empty
            icon={MdOutlineAddShoppingCart}
            title="Your Cart is Empty"
            description="Browse our categories and discover our best deals!"
            btnText="Continue Shopping"
          />
        </div>
      )}
    </div>
  );
};
