import SectionTitle from "@/ui/SectionTitle";
import React from "react";
import { ProductCard } from "../cards/product-card";
{
  /* <Link href={`/product/${id}`} className="inset-0 absolute" /> */
}

export default function Trending() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="Trending" href="#" />
        <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(192px,100%),1fr))]">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard
              key={i}
              id={i.toString()}
              title="Brown Leather Bag"
              vendor="jayscloset"
              image="/products/jacket.png"
              originalPrice={30000}
              currentPrice={24000}
              discount={30}
              className="min-w-52"
              variant="compact"
              rating={12}
              isInWishlist
            />
          ))}
        </div>
      </div>
    </section>
  );
}
