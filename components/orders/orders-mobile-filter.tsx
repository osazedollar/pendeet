"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function OrdersMobileFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("status") ?? "all";

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("status", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-row text-xs md:text-sm lg:text-base overflow-x-scroll snap-mandatory snap-x scrollbar-hide bg-white rounded shadow-md ">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All
      </Button>
      <Button
        filter="pending"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Pending
      </Button>

      <Button
        filter="processing"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Processing
      </Button>
      <Button
        filter="shipped"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Shipped
      </Button>
      <Button
        filter="delivered"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Delivered
      </Button>
      <Button
        filter="cancelled"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Cancelled
      </Button>
    </div>
  );
}
export default OrdersMobileFilter;

interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      className={`relative px-4 py-2 hover:bg-primary/20 rounded-lg font-medium flex items-center justify-center transition-all duration-200 ease-in-out snap-start ${
        filter === activeFilter
          ? "before:absolute before:bottom-0 before:w-full before:rounded-full before:bg-primary before:h-[3px] before:left-0 font-semibold text-primary"
          : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
