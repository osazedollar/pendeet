import Hero from "@/components/general/hero";
import AllProducts from "@/components/sections/all-products";
import Categories from "@/components/sections/categories";
import ForYou from "@/components/sections/for-you";
import NewArrivals from "@/components/sections/new-arrivals";
import Trending from "@/components/sections/trending";
import UsersSection from "@/components/sections/user-section";

export default function Home() {
  return (
    <section className="col-center w-full gap-8 pb-10">
      <Hero />
      <UsersSection />
      <NewArrivals />
      <Trending />
      <ForYou />
      <AllProducts />
      <Categories />
    </section>
  );
}
