"use client";
import { BiMoviePlay } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoChatbubblesOutline, IoNotificationsOutline } from "react-icons/io5";
import UserDropdown from "./user-dropdown";
import Link from "next/link";
import { CgAddR } from "react-icons/cg";
import { useCart } from "@/context/cart-context";

function HeaderIcons() {
  const { cartItems } = useCart();

  return (
    <div className="flex items-center gap-4 lg:gap-6 text-[#374151]">
      <Link href="/" className="group cursor-pointer hidden md:block">
        <CgAddR size={22} className="group-hover:text-primary" />
        {/* <Icon
          icon={ICON.ADD_OUTLINE}
          fontSize={24}
          className="group-hover:text-primary"
        /> */}
      </Link>
      <Link href="/trends" className="group cursor- hidden md:block">
        {/* <Image src={"/svgs/trend.svg"} width={22} height={22} alt="trend" /> */}
        <BiMoviePlay size={22} className="group-hover:text-primary" />
      </Link>
      <Link href="/cart-wishlist" className="group cursor-pointer relative">
        <BsCart3 size={22} className="group-hover:text-primary" />

        <span className="absolute -right-1 -top-[2px] rounded-full size-3 bg-red-500 text-white text-[8px] flex-center font-medium">
          {cartItems.length}
        </span>
      </Link>

      <Link href="/" className="group cursor-pointer relative hidden md:block">
        <IoChatbubblesOutline size={22} className="group-hover:text-primary" />
        <span className="absolute -right-1 -top-[2px] rounded-full size-3 bg-red-500 text-white text-[8px] flex-center font-medium">
          0
        </span>
      </Link>
      <Link href="/" className="group cursor-pointer relative">
        <IoNotificationsOutline
          size={22}
          className="group-hover:text-primary"
        />
        <span className="absolute -right-[2px] -top-[2px] rounded-full size-3 bg-red-500 text-white text-[8px] flex-center font-medium">
          0
        </span>
      </Link>

      {/*user dropdown */}
      <div className="hidden md:block">
        <UserDropdown />
      </div>
    </div>
  );
}

export default HeaderIcons;
