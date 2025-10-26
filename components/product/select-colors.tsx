"use client";

import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const colors: Color[] = ["green", "lime", "slate", "brown", "yellow"];

type Color = "green" | "lime" | "slate" | "brown" | "yellow";

export const getColor = (color: Color) => {
  switch (color) {
    case "green":
      return "bg-[#597858]";
    case "lime":
      return "bg-[#314f4a]";
    case "slate":
      return "bg-[#31344f]";
    case "brown":
      return "bg-[#aa9dab]";
    case "yellow":
      return "bg-yellow-500";
    default:
      return "bg-gray-700";
  }
};

function SelectColors() {
  const [isSelected, setIsSelected] = useState<Color>("green");

  return (
    <div className="flex items-center gap-3">
      {colors.map((color, i) => {
        const bg = getColor(color);
        return (
          <button
            key={i}
            className={`rounded-full size-8 flex-center  text-white shadow-md hover:shadow-lg duration-200 cursor-pointer ${bg}`}
            onClick={() => setIsSelected(color)}
          >
            <IoMdCheckmark
              className={`${isSelected === color ? "block" : "hidden"}`}
            />
            {/* <IoCheckmark /> */}
          </button>
        );
      })}
    </div>
  );
}

export default SelectColors;
