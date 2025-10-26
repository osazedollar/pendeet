"use client";
// import { ICON } from "@/utils/icon-export";
// import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
// import { FiSearch } from "react-icons/fi";

interface SearchProps {
  className?: string;
  placeholder?: string;
  setQuery?: (query: string) => void;
}

function SearchBox({
  className = "",
  placeholder = "Search Pendeet",
}: //   setQuery,
SearchProps) {
  const [input, setInput] = useState("");

  return (
    <div
      className={`relative flex rounded-full w-full items-center group  ${className} duration-300 ease-in-out`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full ring-1 bg-[#f0f0f0] ring-gray-200 group-focus-within:ring-primary rounded-full py-1.5 sm:py-2 md:py-3 px-12 focus:outline-none duration-300 ease-in-out"
      />
      {/* <Icon
        icon={ICON.SEARCH}
        className="absolute left-4  group-focus-within:text-primary text-gray-500 text-lg md:text-xl  pointer-events-none"
      /> */}
      <BiSearchAlt className="absolute left-4  group-focus-within:text-primary text-gray-500 text-lg md:text-xl  pointer-events-none" />
      {/* <FiSearch className="absolute left-4  group-focus-within:text-primary text-gray-500 text-lg md:text-xl  pointer-events-none" /> */}
    </div>
  );
}

export default SearchBox;
