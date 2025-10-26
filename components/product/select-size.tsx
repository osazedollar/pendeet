"use client";

import { useState } from "react";

const sizes: Size[] = ["s", "m", "l", "xl", "xxl"];

type Size = "s" | "m" | "l" | "xl" | "xxl";

function SelectSize() {
  const [isSelected, setIsSelected] = useState<Size>("s");

  return (
    <div className="flex items-center gap-2">
      {sizes.map((size, i) => {
        return (
          <button
            key={i}
            className={`rounded-lg w-10 h-8.5 flex-center hover:shadow duration-200 cursor-pointer font-semibold uppercase text-xs ${
              isSelected === size
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => setIsSelected(size)}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}

export default SelectSize;
