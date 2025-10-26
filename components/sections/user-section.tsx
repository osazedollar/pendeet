import SectionTitle from "@/ui/SectionTitle";
import VendorCard from "@/components/cards/vendor-card";
import React from "react";

export default function UsersSection() {
  return (
    <section className="section-content">
      <div className="w-9/10 max-w-7xl mx-auto space-y-8">
        <SectionTitle title="People you may like" href="#" />
        <div className="flex overflow-x-auto snap-x snap-mandatory py-2 gap-3 scrollbar-hide">
          {Array.from({ length: 10 }).map((_, i) => (
            <VendorCard key={i} className="snap-start snap-always min-w-40" />
          ))}
        </div>
      </div>
    </section>
  );
}
