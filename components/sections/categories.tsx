import CategoryCard from "@/components/cards/category-card";
import SectionTitle from "@/ui/SectionTitle";
import React from "react";

export default function Categories() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="Shop by Categories" href="#" />
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 pt-2 gap-6 scrollbar-hide">
          {Array.from({ length: 7 }).map((_, i) => (
            <CategoryCard key={i} name="Bags" image={"/products/bag.png"} />
          ))}
        </div>
      </div>
    </section>
  );
}
