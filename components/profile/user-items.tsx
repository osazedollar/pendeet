import SectionTitle from "@/ui/SectionTitle";
import { ProductCard } from "../cards/product-card";
import { getAllProducts, newArrivalItems } from "@/data";
import { nanoid } from "nanoid";

function UserItems() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <SectionTitle title="Featured" href="#" />
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-3 md:gap-4 scrollbar-hide">
          {newArrivalItems.map((item) => (
            <ProductCard key={nanoid()} {...item} className={"md:min-w-60"} />
          ))}
          {/* {Array.from({ length: 6 }).map((_, i) => (
            <ProductCard
              key={i}
              id={i.toString()}
              title="Brown Leather Bag"
              vendor="jayscloset"
              image="/products/bag2.png"
              originalPrice={30000}
              currentPrice={24000}
              className="min-w-52"
              discount={30}
            />
          ))} */}
        </div>
      </div>

      <div className="space-y-4">
        <SectionTitle title="All products" href="#" />
        <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))]">
          {getAllProducts.map((item) => (
            <ProductCard key={nanoid()} {...item} showAddToCart showRating />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserItems;
