import { AiOutlineComment } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp, IoMdHeartEmpty } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { TbSend } from "react-icons/tb";
import UserTrendAvatar from "./user-trend-avatar";

function TrendOptions() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col gap-3.5 lg:gap-3 text-3xl lg:text-[35px] text-white md:text-gray-800 px-2.5 md:pl-0">
      {/*go up */}
      <button className="size-9 flex-center lg:flex hidden bg-primary/20 text-primary rounded-full shadow-lg md:text-xl hover:bg-primary hover:text-white duration-200 hover:shadow-2xl ">
        <IoIosArrowUp className="" />
      </button>

      {/*follow user */}
      <UserTrendAvatar />

      {/*like */}
      <div className="flex flex-col items-center">
        <button className="hover:text-primary">
          <IoMdHeartEmpty className="text-3xl" />
        </button>
        {/* <FaRegHeart className="text-2xl" /> */}
        <p className="text-xs">294</p>
      </div>

      {/*chat */}
      <div className="flex flex-col items-center">
        <button className="hover:text-primary">
          <AiOutlineComment className=" text-3xl" />
        </button>
        <p className="text-xs">45</p>
      </div>

      {/*share */}

      <button className="flex-center hover:text-primary">
        <TbSend className="text-3xl" />
        {/* <FiSend className=" text-3xl" /> */}
      </button>

      {/*options */}
      <button className="flex-center hover:text-primary">
        <SlOptions className=" text-2xl" />
      </button>

      {/*go down */}
      <button className="size-9 flex-center bg-primary/20 text-primary rounded-full shadow-lg hover:shadow-2xl md:text-xl hover:bg-primary hover:text-white duration-200  lg:flex hidden">
        <IoIosArrowDown className="" />
      </button>
    </div>
  );
}

export default TrendOptions;
