"use client";

import React, { useState } from "react";
import { CheckoutStepper } from "./checkout-stepper";
import { ShippingStep } from "./shipping-step";
import { PaymentStep } from "./payment-step";
import { OrderCompleteStep } from "./order-complete-step";
import { AddressForm } from "./address-form";
import { CheckoutOrderSummary } from "./checkout-order-summary";
import { DeliveryMethods } from "@/data";
// import { CHECKOUT_STEP_IDENTIFIER } from "@/utils/config";

interface CheckoutContentProps {
  // cartItems: CartItem[];
  userAddresses: Address[];
}

export const CheckoutContent: React.FC<CheckoutContentProps> = ({
  userAddresses: initialAddresses,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState(
    initialAddresses[0]?.id || ""
  );

  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryMethod>(
    DeliveryMethods[0]
  );
  const [showAddressForm, setShowAddressForm] = useState(
    initialAddresses.length === 0
  );

  // useEffect(() => {
  //   const storedStep = localStorage.getItem(CHECKOUT_STEP_IDENTIFIER);
  //   if (storedStep) {
  //     setCurrentStep(JSON.parse(storedStep));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(CHECKOUT_STEP_IDENTIFIER, JSON.stringify(currentStep));
  // }, [currentStep, setCurrentStep]);

  const handleAddressAdded = (address: Address) => {
    setAddresses([...addresses, address]);
    setSelectedAddress(address.id);
    setShowAddressForm(false);
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col lg:flex-row gap-3">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Checkout
        </h1>

        {/* bg-black flex flex-1 self-center */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 ">
          <CheckoutStepper currentStep={currentStep} />
        </div>
      </div>

      {/*You can also add CheckoutOrderSummary component here instead of repeating it in every conponent been rendered base on the current step */}

      {/*The parent component<div> should handle the children layout itself rather than the children setting their layout individually */}
      {currentStep < 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          <div className="md:col-span-2">
            {currentStep === 1 &&
              (showAddressForm ? (
                <AddressForm onAddressAdded={handleAddressAdded} />
              ) : (
                <ShippingStep
                  addresses={addresses}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                  selectedDelivery={selectedDelivery}
                  setSelectedDelivery={setSelectedDelivery}
                  DeliveryMethods={DeliveryMethods}
                  onAddNewAddress={() => setShowAddressForm(true)}
                />
              ))}

            {currentStep === 2 && <PaymentStep />}
          </div>

          <div className="lg:col-span-1">
            <CheckoutOrderSummary
              showItems={true}
              showButtons={!showAddressForm}
              showBack={currentStep > 1}
              onNext={handleContinue}
              onBack={handleBack}
              deliveryFee={selectedDelivery.amount}
            />
          </div>
        </div>
      )}

      {currentStep === 3 && <OrderCompleteStep />}
    </div>
  );
};
