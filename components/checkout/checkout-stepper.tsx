"use client";

import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

interface CheckoutStepperProps {
  currentStep: number;
}

export const CheckoutStepper: React.FC<CheckoutStepperProps> = ({
  currentStep,
}) => {
  const steps = [
    { number: 1, label: "Shipping" },
    { number: 2, label: "Payment" },
    { number: 3, label: "Finish" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center size-7 md:size-8 rounded-full font-semibold ${
                currentStep >= step.number
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-xs md:text-sm lg:text-base ${
                currentStep >= step.number
                  ? "text-primary font-semibold"
                  : "text-gray-500 font-medium"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <span>
              <CgArrowLongRight
                className={`w-6 md:w-8 lg:w-10 h-8 ${
                  currentStep > index + 1 && "text-primary"
                }`}
              />
            </span>
            // <Image src="/arrow.png" alt="arrow" width={40} height={10} />
            // <div className="w-8 md:w-12 h-0.5 bg-gray-300" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
