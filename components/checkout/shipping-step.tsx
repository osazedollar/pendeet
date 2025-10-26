import React from "react";
import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helper-functions";
import Image from "next/image";

interface ShippingStepProps {
  selectedDelivery: DeliveryMethod;
  addresses: Address[];
  selectedAddress: string;
  setSelectedAddress: (id: string) => void;
  setSelectedDelivery: (method: DeliveryMethod) => void;
  onAddNewAddress: () => void;
  DeliveryMethods: DeliveryMethod[];
}

export const ShippingStep: React.FC<ShippingStepProps> = ({
  addresses,
  selectedAddress,
  setSelectedAddress,
  selectedDelivery,
  setSelectedDelivery,
  onAddNewAddress,
  DeliveryMethods,
}) => {
  return (
    <div>
      {/* Shipping Form */}
      <div className="bg-white rounded-2xl p-4 md:p-6 space-y-6">
        <h2 className="text-lg md:text-xl font-semibold">Shipping</h2>

        {/* Address Selection */}
        <div className="space-y-4">
          <h3 className="font-medium md:text-lg">Select shipping address</h3>

          <div className="space-y-3">
            {addresses.map((address) => (
              <label
                key={address.id}
                className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedAddress === address.id
                    ? "border-primary bg-purple-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="address"
                  value={address.id}
                  checked={selectedAddress === address.id}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                  className="accent-primary size-4"
                />
                <div className="flex-1">
                  <p className="font-semibold">{address.name}</p>
                  <p className="text-sm text-gray-600">{address.address}</p>
                  <p className="text-sm text-gray-600">{address.phone}</p>
                </div>
              </label>
            ))}
          </div>

          <Button
            config={{
              onClick: () => onAddNewAddress(),
              className: "!rounded-2xl !py-2",
            }}
            variant="primary"
            size="full"
          >
            <span className="text-xl">+</span>
            Add New Address
          </Button>
          {/* <button
            onClick={onAddNewAddress}
            className="w-full py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-xl">+</span>
            Add New Address
          </button> */}
        </div>

        {/* Delivery Method */}
        <div className="space-y-4">
          <h3 className="font-medium md:text-lg">Delivery method</h3>

          <div className="space-y-3">
            {DeliveryMethods.map((method) => (
              <label
                className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedDelivery.value === method.value
                    ? "border-primary bg-purple-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                key={method.label}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={selectedDelivery.value === method.value}
                    onChange={() => setSelectedDelivery(method)}
                    className={`size-4 ${
                      selectedDelivery.value === method.value
                        ? "accent-primary"
                        : ""
                    }`}
                  />
                  {method.image && (
                    <div className="relative w-12 h-10">
                      <Image src={method.image} alt="paystack" fill />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{method.label}</p>
                    <p className="text-sm text-gray-600">{method.duration}</p>
                  </div>
                </div>
                <span className="font-bold">
                  {formatCurrency(method.amount)}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
