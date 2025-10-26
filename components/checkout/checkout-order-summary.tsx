"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiMinus, FiPlus, FiX } from "react-icons/fi";
import { LuTag } from "react-icons/lu";
import { formatCurrency } from "@/utils/helper-functions";
import { useCart } from "@/context/cart-context";
import OrderSummary from "../general/order-summary";
import Button from "@/ui/Button";

//NB: I already declared a cartItem interface in "cart.d.ts" that can be used globally

interface CheckoutOrderSummaryProps {
  // items: CartItem[];
  deliveryFee?: number;
  showItems?: boolean;
  showButtons?: boolean;
  showBack?: boolean;
  onNext: () => void;
  onBack: () => void;
}

export const CheckoutOrderSummary: React.FC<CheckoutOrderSummaryProps> = ({
  // items: initialItems,
  deliveryFee,
  showItems = true,
  showButtons = true,
  showBack = false,
  onNext,
  onBack,
}) => {
  const { cartItems, decQuantity, incQuantity, removeFromCart } = useCart();

  const [promoCode, setPromoCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const discount = 10000;
  const total = subtotal - discount + deliveryFee!;

  return (
    <OrderSummary>
      <div className="space-y-6">
        {/* Cart Items */}
        {showItems && (
          <div className="space-y-4 max-h-96 checkout-summary overflow-y-auto">
            {cartItems.map((item) => {
              const totalPrice = item.quantity * item.unitPrice;
              return (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-200 rounded-xl flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-sm md:text-base line-clamp-1">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FiX className="size-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div
                        className="size-4 rounded-full border"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>
                        {item.color === "#22c55e" ? "Green" : "Color"}
                      </span>
                      <span>|</span>
                      <span>{item.size}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">
                        {formatCurrency(totalPrice)}
                      </span>
                      <div className="flex gap-2 bg-gray-100 rounded-full px-2 py-1">
                        <button
                          onClick={() => decQuantity(item.id)}
                          className="hover:text-primary"
                        >
                          <FiMinus className="size-3" />
                        </button>
                        <span className="w-4 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incQuantity(item.id)}
                          className="hover:text-primary"
                        >
                          <FiPlus className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Promo Code */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Add promo code"
              className="w-full px-4 pl-10 py-2.5 bg-[#F0F0F0] rounded-2xl focus:bg-white focus:outline-none border border-transparent focus:border-primary transition-all"
            />
            <LuTag className="absolute left-3 text-gray-400 text-lg top-1/2 -translate-y-1/2" />
          </div>
          <button className="px-4 md:px-6 border border-primary text-primary rounded-2xl font-medium hover:bg-primary hover:text-white transition-colors">
            Apply
          </button>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Gross Discount</span>
            <span className="font-semibold text-red-500">
              -{formatCurrency(discount)}
            </span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Delivery fee</span>
            <span className="font-semibold">
              {formatCurrency(deliveryFee ?? 0)}
            </span>
          </div>
          <div className="flex justify-between pt-3 border-t">
            <span className="text-base md:text-lg font-semibold">Total</span>
            <span className="text-lg md:text-xl font-bold">
              {formatCurrency(total)}
            </span>
          </div>
        </div>

        {showButtons && (
          <div className=" flex gap-3">
            {showBack && (
              <Button
                config={{
                  onClick: onBack,
                  className: "flex-1 rounded-2xl!",
                }}
                variant="primary_outlined"
                size="full"
              >
                <FiArrowLeft className="w-4 h-4" />
                Back
              </Button>
            )}
            <Button
              config={{
                onClick: onNext,
                className: "flex-1 rounded-2xl!",
              }}
              variant="primary"
              size="full"
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </OrderSummary>
  );
};
