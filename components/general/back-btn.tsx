"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

function BackButton() {
  const router = useRouter();

  return (
    <button className="" onClick={() => router.back()}>
      <IoIosArrowBack />
    </button>
  );
}

export default BackButton;
