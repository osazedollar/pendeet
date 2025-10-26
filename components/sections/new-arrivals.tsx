import SectionTitle from "@/ui/SectionTitle";
import { ProductCard } from "../cards/product-card";
import { getNewArrivalItems } from "@/data";
import { wait } from "@/utils/helper-functions";
import { Suspense } from "react";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

{
  /* NB: With these trick -- "grid-cols-[repeat(auto-fill,minmax(min(192px,100%),1fr))]" u don't have to define no of col or size of cards; they automatically fit in; also remove sizing from d card except it's extremely needed :) 
  NB: Only add other "grid-cols" then set breakpoint 4 d trick if u don't want 1 col as lowest  
  */
}

//NB: Using this just for testing streaming; in PROD we'll be using the isLoading state from react query to conditionally render skeletons or each items.
async function NewArrivalList() {
  const arrivalItems = await getNewArrivalItems();
  await wait(3000);

  return (
    <>
      {arrivalItems.map((item) => (
        <ProductCard className="min-w-52 md:min-w-60" {...item} key={item.id} />
      ))}
    </>
  );
}

export default function NewArrivals() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="New Arrivals" href="#" />

        <ul className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-3 md:gap-4 scrollbar-hide">
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
            <NewArrivalList />
          </Suspense>
        </ul>
      </div>
    </section>
  );
}
