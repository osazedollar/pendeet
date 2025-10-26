"use client";
import React, { useState } from "react";
import { ProductCard } from "@/components/cards/product-card";
import { FiSearch } from "react-icons/fi";
import { useWishlist } from "@/context/wishlist-context";
import Empty from "../cart/empty";
import { IoMdHeartHalf } from "react-icons/io";
import { LuSearchX } from "react-icons/lu";

// interface WishlistContentProps {
//   items: WishlistItem[];
// }

export const WishlistContent = () => {
  const { wishlistItems } = useWishlist();
  // const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState("");

  const isEmpty = wishlistItems.length === 0;

  const filteredItems = wishlistItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasFilteredResults = filteredItems.length > 0;

  // Determine the content to display based on the state
  let mainContent;

  if (isEmpty) {
    // 1. Wishlist is completely empty
    mainContent = (
      <div className="text-center py-16 md:max-w-[500px] mx-auto">
        <Empty
          icon={IoMdHeartHalf}
          title="You haven’t saved an item yet!"
          description="Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here"
          btnText="Continue Shopping"
        />
      </div>
    );
  } else if (searchQuery && !hasFilteredResults) {
    // 2. Wishlist is NOT empty, but the search yielded no results
    mainContent = (
      <div className="text-center py-16 md:max-w-[500px] mx-auto">
        <Empty
          icon={LuSearchX}
          title="No products found"
          description={
            <p>
              We couldn&apos;t find any items matching
              <b> {`"${searchQuery}"`} </b> in your wishlist.
            </p>
          }
          showBtn={false}
        />
      </div>
    );
  } else {
    // 3. Display the items (either all items if no query, or filtered items)
    mainContent = (
      <div className="grid gap-3 lg:gap-4 xl:gap-5 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))]">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} {...item} variant="compact" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Header with Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold">My Wishlist</h2>

        {/* Search Bar */}
        {!isEmpty && (
          <div className="relative flex rounded-2xl w-full items-center group sm:w-80 duration-300 ease-in-out">
            <FiSearch className="absolute left-4  group-focus-within:text-primary text-gray-500 text-lg   pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Wishlist..."
              className="w-full ring-1 bg-[#f0f0f0] ring-gray-200 group-focus-within:ring-primary rounded-2xl py-1.5 sm:py-2 px-12 focus:outline-none duration-300 ease-in-out"
            />
          </div>
        )}
      </div>

      {mainContent}

      {/* {!isEmpty && !searchQuery ? (
        <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(192px,100%),1fr))]">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} {...item} variant="compact" />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 md:max-w-[500px] mx-auto">
          <Empty
            icon={IoMdHeartHalf}
            title="You haven’t saved an item yet!"
            description="Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here"
            btnText="Continue Shopping"
          />
        </div>
      )} */}
    </div>
  );
};
