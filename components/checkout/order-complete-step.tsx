"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import { TiShoppingCart } from "react-icons/ti";
import Lottie from "lottie-react";
import AnimatedLoader from "@/public/loading.json";

export const OrderCompleteStep: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold translate-y-12">
          Order Complete
        </h1>

        <Lottie
          animationData={AnimatedLoader}
          loop={true}
          autoplay={true}
          className="mx-auto w-60 lg:w-72 xl:w-96"
        />

        {/* <div className="flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div> */}

        <div className="flex flex-col gap-1 -translate-y-14">
          <p className="text-lg md:text-xl font-semibold">
            Thank you for ordering!
          </p>
          <p className="text-xs md:text-sm">
            We&apos;ve received your order! You&apos;ll get an email
            confirmation and tracking details shortly.
          </p>

          <div className="mt-3 flex gap-4">
            <Button
              config={{
                className: "flex-1 rounded-xl!",
                onClick: () => router.push("/"),
              }}
              variant="primary_outlined"
              size="full"
            >
              Track Order
            </Button>
            <Button
              config={{
                onClick: () => router.push("/"),
                className: "flex-1 rounded-xl! text-nowrap",
              }}
              variant="primary"
              size="full"
            >
              Continue Shopping
              <span>
                <TiShoppingCart fontSize={20} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
