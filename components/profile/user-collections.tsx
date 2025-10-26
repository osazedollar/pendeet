"use client";
import Tabs from "@/components/profile/tabs";
import { useState } from "react";
import UserItems from "./user-items";
import UserTrends from "./user-trends";
import { ProductCard } from "../cards/product-card";
import { getAllProducts } from "@/data";
import { nanoid } from "nanoid";

type tabs = "items" | "trends" | "wishlist";

const tabsArray: { label: tabs; count: number }[] = [
  { label: "items", count: 18 },
  { label: "trends", count: 5 },
  { label: "wishlist", count: 3 },
];

function UserCollections() {
  const [activeTab, setActiveTab] = useState<tabs>("items");

  return (
    <div className="space-y-3">
      <Tabs
        tabs={tabsArray}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/*main contents */}
      <div className="flex flex-col gap-8 mt-8">
        {activeTab === "items" && <UserItems />}
        {activeTab === "trends" && <UserTrends />}
        {activeTab === "wishlist" && (
          <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))]">
            {getAllProducts.slice(0, 3).map((item) => (
              <ProductCard key={nanoid()} {...item} showAddToCart showRating />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserCollections;
