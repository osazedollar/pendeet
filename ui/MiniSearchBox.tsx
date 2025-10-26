"use client";
import { ICON } from "@/utils/icon-export";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

interface SearchProps {
  className?: string;
  placeholder?: string;
  setQuery?: (query: string) => void;
}

function MiniSearchBox({
  className = "",
  placeholder = "Search Pendeet",
}: //   setQuery,
SearchProps) {
  const [input, setInput] = useState("");

  return (
    <div
      className={`relative flex gap-3 rounded-full w-full md:hidden items-stretch ${className} duration-300 ease-in-out`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full ring-1 bg-[#f0f0f0] ring-gray-200  rounded-full py-1.5 sm:py-2 md:py-3 px-3 focus:outline-none duration-300 ease-in-out focus:ring-primary"
      />
      <span className="rounded-full w-10 right-0 bg-primary  text-white flex-center hover:opacity-80">
        <Icon icon={ICON.SEARCH} />
      </span>
    </div>
  );
}

export default MiniSearchBox;
