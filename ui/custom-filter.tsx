"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}
type optionsProps = {
  options: Option[];
  filterKey: string;
  label?: string;
};

function CustomFilter({ options, filterKey, label }: optionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const close = () => setIsOpen(false);
  const dropdownRef = useOutsideClick<HTMLDivElement>(close); //close filter when clicking outside

  const currentSort = searchParams.get(filterKey) || options[0]?.value;
  const selectedItem =
    options.find((option) => option.value === currentSort) || options[0];

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    const params = new URLSearchParams(searchParams);
    params.set(filterKey, option.value);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });

    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col font-medium gap-1" ref={dropdownRef}>
      {label && <p className="">{label}</p>}
      <div
        className=" relative rounded-lg px-4 py-2 border focus:shadow cursor-pointer text-sm border-[#999999] w-full bg-gray-100"
        onClick={toggleIsOpen}
      >
        {selectedItem?.label}

        <IoIosArrowDown
          size={18}
          className={`absolute duration-200 ease-linear ${
            isOpen && "rotate-180"
          } top-1/2 -translate-y-1/2 right-4`}
        />
        {/* <FaAngleUp
          size={20}
          className={`absolute duration-200 ease-linear ${
            !isOpen && "rotate-180"
          } top-1/2 -translate-y-1/2 right-3`}
        /> */}
      </div>
      {/*dropdown */}
      <div
        className={`absolute bg-white border border-[#999999] w-full top-full mt-1 text-sm rounded-lg duration-200 ease-linear p-1 shadow overflow-y-scroll scrollbar-hide z-10 ${
          isOpen ? "max-h-60 visible" : "max-h-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={` rounded-lg py-1.5 ${
                option.label === selectedItem.label
                  ? "font-semibold bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomFilter;
