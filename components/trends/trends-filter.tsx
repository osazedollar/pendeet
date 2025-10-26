"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type filter = { label: string; value: string }[];

function TrendsFilter({
  activeFilter,
  filters,
}: {
  activeFilter: string;
  filters: filter;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  //   const activeFilter = searchParams.get("category") ?? "all";

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("trends", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map(({ label, value }, i) => (
        <Button
          filter={value}
          activeFilter={activeFilter}
          handleFilter={handleFilter}
          key={i}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
export default TrendsFilter;

interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      className={`py-1.5 px-3  rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out text-xs lg:text-sm text-nowrap ${
        filter === activeFilter
          ? "font-medium bg-primary shadow-md text-white"
          : "font-medium hover:bg-primary/30 bg-gray-200"
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
