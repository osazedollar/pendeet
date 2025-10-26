"use client";
import Image from "next/image";
import React, { useState } from "react";

export const PaymentStep = ({}) => {
  const [selectedPayment, setSelectedPayment] = useState("paystack");

  return (
    <div>
      <div className="bg-white rounded-2xl p-4 md:p-6 space-y-6">
        <h2 className="text-lg md:text-xl font-semibold">Payment Methods</h2>

        <div className="space-y-4">
          <h3 className="font-medium md:text-lg">Select payment method</h3>

          <label
            className={`flex items-center justify-between p-3 rounded-2xl border-2 cursor-pointer transition-all ${
              selectedPayment === "paystack"
                ? "border-primary bg-purple-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-10">
                <Image src="/paystack.png" alt="paystack" fill />
              </div>
              <span className="font-semibold md:text-lg">Paystack</span>
            </div>
            <input
              type="radio"
              name="payment"
              value="paystack"
              checked={selectedPayment === "paystack"}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="accent-primary w-5 h-5"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
