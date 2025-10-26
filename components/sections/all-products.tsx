import SectionTitle from "@/ui/SectionTitle";
import React, { Suspense } from "react";
import { ProductCard } from "../cards/product-card";
import { getAllItems } from "@/data";
import { wait } from "@/utils/helper-functions";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

async function ProductsList() {
  const products = await getAllItems();
  await wait(3000);

  return (
    <>
      {products.map((item) => (
        <ProductCard {...item} key={item.id} showAddToCart showRating />
      ))}
    </>
  );
}

export default function AllProducts() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="All Products" href="#" />
        <ul className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))]">
          <Suspense
            fallback={
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </>
            }
          >
            <ProductsList />
          </Suspense>

          {/* {products.map((item) => (
            <ProductCard key={nanoid()} {...item} showAddToCart showRating />
          ))} */}
        </ul>
      </div>
    </section>
  );
}
