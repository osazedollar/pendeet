import SectionTitle from "@/ui/SectionTitle";
import React, { Suspense } from "react";
import { ProductCard } from "../cards/product-card";
import { forYouItems } from "@/data";
import { wait } from "@/utils/helper-functions";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

async function ForYouList() {
  const trendingItems = await forYouItems();
  await wait(3000);

  return (
    <>
      {trendingItems.map((item) => (
        <ProductCard
          className="min-w-52 md:min-w-60"
          {...item}
          key={item.id}
          showAddToCart
          allowShare
          imgTagText="Suggested for you"
        />
      ))}
    </>
  );
}

export default function ForYou() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="For You" href="#" />
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-3  md:gap-4 scrollbar-hide">
          <Suspense
            fallback={
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProductCardSkeleton
                    key={i}
                    className="min-w-52 md:min-w-60 snap-start snap-always"
                  />
                ))}
              </>
            }
          >
            <ForYouList />
          </Suspense>
          {/* {foryouItems.map((item) => (
            <ProductCard
              key={nanoid()}
              {...item}
              className="min-w-52"
              showAddToCart
              allowShare
              imgTagText="Suggested for you"
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}
