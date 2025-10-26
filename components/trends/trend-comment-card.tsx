import Image from "next/image";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import Tick from "@/assets/images/blue-tick.png";
import User from "@/public/user.webp";

function TrendCommentCard({ isVendor }: { isVendor?: boolean }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-2">
      {/*user avatar */}
      <span className="relative size-8 rounded-full">
        <Image
          src={User}
          fill
          alt="avatar"
          className="object-cover rounded-full"
        />
      </span>
      {/*user text */}
      <div className="text-xs space-y-[2px]">
        <div className="space-x-1 flex items-center">
          <p className="text-gray-500">Jayscloset</p>
          {isVendor && (
            <>
              <Image src={Tick} alt="verified-tick" width={10} height={10} />
              <p className="text-red-600 text-[11px]">Vendor</p>
            </>
          )}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nemo
          illo dolorem nostrum similique? Eligendi?
        </p>
        <p className="text-gray-500 text-[11px] ">
          5h&nbsp;&nbsp;{" "}
          <span tabIndex={0} className="hover:text-black cursor-pointer">
            Reply
          </span>
        </p>
        <button className="text-gray-500 text-[11px] hover:text-black flex items-center">
          View replies (0) <IoIosArrowDown />
        </button>
      </div>
      {/*likes */}
      <div className="flex flex-col items-center">
        <button className="hover:text-primary text-xl">
          <IoMdHeartEmpty />
        </button>
        <p className="text-xs">0</p>
      </div>
    </div>
  );
}

export default TrendCommentCard;
