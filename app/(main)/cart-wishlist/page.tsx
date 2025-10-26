import React from "react";
import { CartList } from "@/components/cart/cart-list";
import { WishlistContent } from "@/components/wishlist/wishlistContent";
import { TabNavigation } from "@/components/cart/tab-navigation";
import { ProductCard } from "@/components/cards/product-card";
import { forYouItems } from "@/data";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Cart & Wishlist",
  description: "Manage your cart and wishlist items.",
};

export default async function CartWishlistPage() {
  const foryouItems = await forYouItems();

  // px-4 lg:px-0 py-6 md:py-8
  return (
    <div className="min-h-screen bg-offWhite pb-14">
      <div className="max-w-7xl w-9/10 mx-auto flex flex-col gap-y-24">
        <section className="space-y-4">
          {/* Tab Navigation */}
          <TabNavigation />

          {/* Content Area - Hidden by client component based on active tab */}
          <div>
            {/* Cart Content */}
            <div id="cart-content">
              <h2 className="text-xl font-semibold mb-6">My Cart</h2>
              <CartList />
            </div>

            {/* Wishlist Content */}
            <div id="wishlist-content" className="hidden">
              <WishlistContent />
            </div>
          </div>
        </section>

        {/* Continue Shopping Section */}
        <div className="bg-white space-y-8 py-4 rounded-lg">
          <p className="font-semibold text-center text-xl md:text-2xl">
            Suggestions
          </p>

          {/* Suggestions Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-3 scrollbar-hide">
            {foryouItems.map((item) => (
              <ProductCard
                key={nanoid()}
                {...item}
                className="min-w-52 md:min-w-60"
                showAddToCart
                allowShare
                imgTagText="Suggested for you"
              />
            ))}
            {/* {Array.from({ length: 6 }).map((_, i) => (
              <ProductCard
                key={i}
                id={i.toString()}
                title="Brown Leather Bag"
                vendor="jayscloset"
                image="/products/hoodei.png"
                originalPrice={30000}
                currentPrice={24000}
                className="min-w-52"
                imgTagText="Suggested for you"
                showAddToCart
                allowShare
                rating={12}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
