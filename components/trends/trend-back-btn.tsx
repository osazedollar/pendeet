"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

function TrendBackButton() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex-center text-lg rounded-full size-8 md:size-10 text-primary duration-300 border-3 border-primary shadow-[0_4px_4px_#9c27b0] hover:shadow-[0_8px_8px_#9c27b0] hover:bg-primary hover:text-white focus:scale-[0.98] hover:-translate-y-1 peer"
        onClick={() => router.back()}
      >
        <IoArrowBackOutline />
      </button>
      <p className="font-bold text-xl peer-hover:text-primary hidden lg:block">
        Go Back
      </p>
    </div>
  );
}

export default TrendBackButton;
