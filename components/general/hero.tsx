import MiniSearchBox from "@/ui/MiniSearchBox";
import React from "react";
import TypedLogo from "./typed-logo";

export default function Hero() {
  return (
    <section className="w-full h-44 flex-center">
      <article className="space-y-3 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl">
          Welcome to <TypedLogo />
        </h2>
        <p className="lg:text-2xl  md:text-lg text-sm sm:text-base">
          Discover People, shops & deals tailored for you
        </p>

        <MiniSearchBox />
      </article>
    </section>
  );
}
