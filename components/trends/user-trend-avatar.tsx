"use client";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

function UserTrendAvatar() {
  const router = useRouter();

  return (
    <div className="relative size-9">
      <div
        tabIndex={0}
        className="size-full rounded-full bg-gray-500 animate-pulse cursor-pointer"
        onClick={() => router.push("/profile")}
      ></div>
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-red-500 text-white flex-center translate-y-1/2 size-3 text-[10px]">
        <FiPlus className="" />
      </button>
    </div>
  );
}

export default UserTrendAvatar;
