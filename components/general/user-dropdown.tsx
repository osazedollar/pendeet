"use client";
import { useCloseOnScroll } from "@/hooks/useCloseOnScroll";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import Link from "next/link";
import { useState } from "react";
import { GoShield } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoPeopleOutline, IoPersonCircleSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { PiMapPinLight, PiPackage } from "react-icons/pi";

const userDropdownItem = [
  {
    id: 1,
    name: "my order",
    icon: PiPackage,
    link: "/",
  },
  {
    id: 2,
    name: "delivery address",
    icon: PiMapPinLight,
    link: "/",
  },
  {
    id: 3,
    name: "help center",
    icon: IoPeopleOutline,
    link: "/",
  },
  {
    id: 4,
    name: "privacy",
    link: "/",
    icon: GoShield,
  },
];

function UserDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    console.log(isDropdownOpen);
    setIsDropdownOpen((curr) => !curr);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useCloseOnScroll(isDropdownOpen, closeDropdown);
  const dropDownRef = useOutsideClick<HTMLDivElement>(closeDropdown);

  return (
    <div className="relative">
      {/*btn */}
      <button
        className="flex-center group rounded-3xl shadow hover:shadow-lg border border-gray-200 pl-2 bg-white cursor-pointer focus:outline-none duration-200 ease-in-out"
        onClick={handleToggleDropdown}
      >
        <IoIosArrowDown
        // className="duration-200 ease-in-out  group-hover:rotate-180"
        />
        <span className="rounded-full size-8">
          <IoPersonCircleSharp className="size-full text-gray-300" />
        </span>
      </button>

      {/*dropdown */}
      <div
        className={`absolute space-y-2 p-2 md:min-w-40 mt-1 right-0 rounded-md shadow-menu transition-all duration-200 ease-in-out bg-white 
            ${isDropdownOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
        ref={dropDownRef}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="size-10 rounded-full flex-shrink-0 bg-gray-300"></span>
            <p className="flex flex-col justify-between">
              <span className="font-semibold text-lg  md:text-base">
                Jane.E. Doe
              </span>
              <span className="text-xs">Janedoe@pendeet.com</span>
            </p>
          </div>
          <Link
            href="/profile"
            className="uppercase font-semibold flex-center bg-[#f8f7f8] py-1.5 w-full text-[10px] rounded-md"
          >
            view profile
          </Link>

          <span className="bg-gray-100 h-[1px] w-full" />
        </div>
        {/*dropdown items */}
        <ul>
          {userDropdownItem.map(({ icon: Icon, link, id, name }) => (
            <li
              className="hover:bg-purple-100 group focus:outline-none focus:bg-gray-100 rounded-md"
              onClick={() => setIsDropdownOpen(false)}
              key={id}
            >
              <Link
                href={link}
                className=" text-xs py-1.5 px-3 gap-x-2 flex items-center capitalize group-hover:text-primary"
              >
                <Icon size={20} className="group-hover:text-primary" />
                {name}
              </Link>
            </li>
          ))}
        </ul>
        {/*logout btn */}

        <button className="text-sm mt-2 py-2 px-3 gap-x-1.5 flex items-center justify-center bg-red-500 hover:bg-red-600  rounded-md w-full capitalize text-white cursor-pointer">
          <MdLogout size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDropdown;
