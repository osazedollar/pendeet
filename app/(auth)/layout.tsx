import Logo from "@/ui/Logo";
import { ICON } from "@/utils/icon-export";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className="w-full h-screen  flex flex-col">
      <section className="w-full h-full grid lg:grid-cols-[55%_45%]">
        <figure className="hidden lg:block w-full relative overflow-hidden h-fulll bg-gray-100">
          <div className="absolute z-10 top-5 left-5">
            <Logo />
          </div>
       
          <Image
            fill
            src={"/svgs/banner.svg"}
            className="object-cover object-center"
            alt="banner_image"
          />
        </figure>
        <aside className="w-full px-13.5 h-full col-center relative bg-white">
             <p className="text-xs flex-center gap-1 absolute right-4 cursor-pointer hover:underline text-black/40 top-4 font-medium">English (US)
             <Icon icon={ICON.CARET_DOWN} fontSize={22} className="shrink-0" />
             </p>
          {children}</aside>
      </section>
      <div className="w-full p-4 bg-gray-100"></div>
    </section>
  );
}
