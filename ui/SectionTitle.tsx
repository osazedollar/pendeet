import { ICON } from "@/utils/icon-export";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  href: string;
  title: string;
}

export default function SectionTitle({ href, title }: SectionTitleProps) {
  return (
    <header className="flex items-center justify-between">
      <h3 className="text-[#212121] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
        {title}
      </h3>
      <Link
        href={href}
        className="flex-center hover:underline font-medium cursor-pointer gap-1"
      >
        See more
        <Icon icon={ICON.ARROW_RIGHT} fontSize={20} />
      </Link>
    </header>
  );
}
