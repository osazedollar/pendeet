"use client";
import Link from "next/link";
import { BiMoviePlay } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { IoChatbubblesOutline, IoPersonCircleSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PiCoatHangerBold } from "react-icons/pi";
import Modal from "@/context/modal-context";
import Button from "@/ui/Button";

function BottomNav() {
  const pathname = usePathname();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    if (isAddModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isAddModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsAddModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <aside
      className={`fixed z-20 w-full bottom-0 mx-auto rounded-t-xl md:hidden`}
    >
      {/*backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 -z-1 ${
          isAddModalOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsAddModalOpen(false)}
      />

      {/*bottom-sheet */}
      <div
        className={`w-full absolute bottom-full p-5 pt-10 rounded-t-xl bg-white space-y-5 duration-200 transition-transform ${
          isAddModalOpen
            ? "translate-y-0 opacity-100 visible pointer-events-auto"
            : "translate-y-full opacity-0 invisible pointer-events-none"
        }`}
      >
        <span className="h-1 bg-gray-500 w-10 top-2 absolute left-1/2 -translate-x-1/2 rounded-full" />
        <p className="text-gray-400">Add</p>
        <ul className="space-y-5">
          <li className="flex items-center text-gray-600 gap-6 text-base">
            <BiMoviePlay size={22} />
            Trend
          </li>
          <Modal>
            <Modal.Open opens="product-modal">
              <li className="flex items-center text-gray-400 gap-6 text-base">
                <PiCoatHangerBold size={22} />
                Product
              </li>
            </Modal.Open>
            <Modal.Window name="product-modal">
              <div className="text-center flex flex-col gap-2">
                <p className="font-medium text-base">
                  You cannot add products at this time
                </p>
                <p className="text-xs md:text-sm">
                  Use the link below to become a vendor
                </p>

                <div className="bg-gray-300 w-full h-[0.5px]" />

                <Button
                  size="full"
                  variant="primary"
                  config={{
                    className: "rounded-lg! text-xs mt-1",
                  }}
                >
                  Become a Vendor
                </Button>
              </div>
            </Modal.Window>
          </Modal>
        </ul>
      </div>

      {/*main content */}
      <div
        className={`flex justify-between max-w-lg mx-auto bg-white px-3 ${
          isAddModalOpen ? "" : "shadow-2xl"
        }`}
      >
        <Link
          href="/"
          className={`p-4 relative hover:bg-primary/20 ${
            pathname === "/" &&
            !isAddModalOpen &&
            "before:absolute before:h-1 before:w-full before:left-0 before:bg-primary before:bottom-0 before:rounded-full text-primary"
          }`}
        >
          <GoHome size={20} />
        </Link>
        <Link
          href="/trends"
          className={`p-4 relative hover:bg-primary/20 ${
            pathname === "/reels" &&
            !isAddModalOpen &&
            "before:absolute before:h-1 before:w-full before:left-0 before:bg-primary before:bottom-0 before:rounded-full text-primary"
          }`}
        >
          <BiMoviePlay size={20} />
        </Link>
        {/*add-product */}
        <span
          onClick={() => setIsAddModalOpen((curr) => !curr)}
          className={`p-4 relative hover:bg-primary/20 ${
            isAddModalOpen &&
            "before:absolute before:h-1 before:w-full before:left-0 before:bg-primary before:bottom-0 before:rounded-full text-primary"
          }`}
        >
          <CgAddR size={20} />
          {/* <Icon
            icon={ICON.ADD_OUTLINE}
            fontSize={22} 
            className="group-hover:text-primary"
          /> */}
        </span>
        {/*chat */}
        <Link
          href="/chat"
          onClick={() => setIsAddModalOpen(false)}
          className={`p-4 relative hover:bg-primary/20 ${
            pathname === "/chat" &&
            !isAddModalOpen &&
            "before:absolute before:h-1 before:w-full before:left-0 before:bg-primary before:bottom-0 before:rounded-full text-primary"
          }`}
        >
          <p className="relative">
            <IoChatbubblesOutline
              size={22}
              className="group-hover:text-primary"
            />
            <span className="absolute -right-1 -top-[2px] rounded-full size-3 bg-red-500 text-white text-[8px] flex-center font-medium">
              0
            </span>
          </p>
        </Link>
        {/*profile */}
        <Link
          href="/profile"
          className={`p-4 relative hover:bg-primary/20 ${
            pathname === "/profile" &&
            !isAddModalOpen &&
            "before:absolute before:h-1 before:w-full before:left-0 before:bg-primary before:bottom-0 before:rounded-full text-primary"
          }`}
        >
          <IoPersonCircleSharp size={26} className=" text-gray-300" />
        </Link>
      </div>
    </aside>
  );
}

export default BottomNav;
