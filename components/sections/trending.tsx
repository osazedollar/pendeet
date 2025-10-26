import SectionTitle from "@/ui/SectionTitle";
<<<<<<< HEAD
import React from "react";
import { ProductCard } from "../cards/product-card";
{
  /* <Link href={`/product/${id}`} className="inset-0 absolute" /> */
=======
import React, { Suspense } from "react";
import { ProductCard } from "../cards/product-card";
import { getTrendingItems } from "@/data";
import { wait } from "@/utils/helper-functions";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

async function TrendingList() {
  const trendingItems = await getTrendingItems();
  await wait(3000);

  return (
    <>
      {trendingItems.map((item) => (
        <ProductCard {...item} key={item.id} variant="compact" />
      ))}
    </>
  );
>>>>>>> 93a8c82c35d828c490bee780b5bc0da5cf19e243
}

export default function Trending() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="Trending" href="#" />
<<<<<<< HEAD
        <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(192px,100%),1fr))]">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard
              key={i}
              id={i.toString()}
=======
        <div className="grid gap-3 lg:gap-4 xl:gap-5 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))]">
          {/* {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard
              key={i}
              id={nanoid()}
>>>>>>> 93a8c82c35d828c490bee780b5bc0da5cf19e243
              title="Brown Leather Bag"
              vendor="jayscloset"
              image="/products/jacket.png"
              originalPrice={30000}
              currentPrice={24000}
              discount={30}
              className="min-w-52"
              variant="compact"
              rating={12}
<<<<<<< HEAD
              isInWishlist
            />
          ))}
=======
            />
          ))} */}

          <Suspense
            fallback={
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </>
            }
          >
            <TrendingList />
          </Suspense>
>>>>>>> 93a8c82c35d828c490bee780b5bc0da5cf19e243
        </div>
      </div>
    </section>
  );
}
