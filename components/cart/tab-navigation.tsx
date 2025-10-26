"use client";

import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import React, { useState } from "react";

// interface TabNavigationProps {
//   cartCount: number;
//   wishlistCount: number;
// }

export const TabNavigation = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">("cart");

  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  const handleTabChange = (tab: "cart" | "wishlist") => {
    setActiveTab(tab);

    // Toggle visibility of content sections
    const cartContent = document.getElementById("cart-content");
    const wishlistContent = document.getElementById("wishlist-content");

    if (tab === "cart") {
      cartContent?.classList.remove("hidden");
      wishlistContent?.classList.add("hidden");
    } else {
      cartContent?.classList.add("hidden");
      wishlistContent?.classList.remove("hidden");
    }
  };

  return (
    <div className="border-b border-gray-400">
      <div className="flex">
        <button
          onClick={() => handleTabChange("cart")}
          className={`py-3 px-6 text-base transition-colors relative hover:bg-primary/30 duration-300 rounded-t ${
            activeTab === "cart"
              ? "text-primary font-semibold"
              : "text-[#34343499] font-medium"
          }`}
        >
          Cart ({cartCount})
          {activeTab === "cart" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>

        <button
          onClick={() => handleTabChange("wishlist")}
          className={`py-3 px-6 text-base transition-colors relative hover:bg-primary/30 duration-300 rounded-t ${
            activeTab === "wishlist"
              ? "text-primary font-semibold"
              : "text-[#34343499] font-medium"
          }`}
        >
          Wishlist ({wishlistCount})
          {activeTab === "wishlist" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>
    </div>
  );
};
