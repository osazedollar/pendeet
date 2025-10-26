import SearchBox from "@/ui/SearchBox";
// import Image from "next/image";
import Link from "next/link";

import HeaderIcons from "../general/header-icons";

function Header() {
  return (
    <header className="bg-white flex items-center justify-between px-3 py-2.5 z-50 sticky top-0 left-0 right-0 gap-x-3 lg:gap-x-10 shadow-xs rounded-b-xl h-fit">
      {/*logo */}
      <Link
        href="/"
        className="font-qurova font-medium text-primary text-2xl md:text-3xl focus:outline-none"
      >
        Pendeet
        {/* <Image
          src={"/svgs/logo.svg"}
          width={128}
          height={22}
          alt="pendeet_logo"
        /> */}
      </Link>
      {/*search box */}
      <div className="hidden md:block w-full max-w-md lg:focus-within:max-w-full duration-500 ease-in-out">
        <SearchBox />
      </div>
      {/*header icons */}
      <HeaderIcons />
    </header>
  );
}

export default Header;
