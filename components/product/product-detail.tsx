import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import SelectColors from "./select-colors";
import SelectSize from "./select-size";
import Button from "@/ui/Button";

function ProductDetail() {
  return (
    <div className="grid grid-cols-1 gap-2 shadow-md bg-white p-2 rounded-xl">
      <p className="font-semibold text-sm md:text-base text-gray-400">
        Adult male clothes
      </p>
      <p className="font-bold text-xl text-gray-800 md:text-2xl lg:text-3xl">
        Verytical Stripped Shirt
      </p>
      <div className="space-y-[2px]">
        <p className="text-gray-500 text-xs md:text-sm ">
          Lorem ipsum dolor sit amet consectetur. Tincidunt in imperdiet
          facilisi netus. Pharetra montes at ultricies tincidunt. Morbi a
          volutpat nisl nisi sed arcu adipiscing facilisis ornare. Egtgy
        </p>
        <p className="text-primary text-xs font-medium">8 item(s) in stock</p>
        <p className="lg:text-base text-gray-500 font-medium">@Jayscloset</p>
      </div>
      <p className="flex items-center gap-3">
        <span className="font-bold text-lg lg:text-xl text-gray-800">
          ₦24000
        </span>
        <s className="font-semibold text-gray-400"> ₦30000</s>
        <span className="px-2 py-[2px] bg-primary/20 text-primary rounded-full font-medium text-xs">
          -40%
        </span>
      </p>
      {/*rating */}
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: 3 }).map((_, i) => (
          <IoIosStar key={i} className="text-yellow-500" size={17} />
        ))}
        <IoStarHalf size={17} className="text-yellow-500 " />
        <IoIosStar className="text-gray-300" size={17} />
        <span className="text-xs text-gray-400 font-medium">(12)</span>
      </div>

      {/*divider */}
      <span className="h-[1px] w-full mt-[2px] bg-gray-300" />

      {/*colors */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500 font-medium">Select Colors</p>
        <SelectColors />
      </div>

      {/*divider */}
      <span className="h-[1px] w-full mt-[2px] bg-gray-300" />

      <div className="space-y-2">
        <p className="text-xs text-gray-500 font-medium">Choose Size</p>
        <SelectSize />
      </div>

      {/*divider */}
      <span className="h-[1px] w-full mt-[2px] bg-gray-300" />

      {/*profile details */}
      <div className="flex items-center justify-between gap-3">
        <span className="size-10 rounded-full bg-gray-400"></span>
        <div className="flex-1">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">
            JaysCloset
          </p>
          <div className="space-x-3 text-gray-600 text-xs flex flex-wrap">
            <p>
              Followers &nbsp;<b>23K</b>
            </p>
            <p>
              Items &nbsp;<b>271</b>
            </p>
          </div>
        </div>
        <Button
          config={{
            className: "rounded-lg! px-3 md:px-5.5",
          }}
          size="medium"
          variant="primary_outlined"
        >
          Visit Profile
        </Button>
        {/* <button className="px-3 md:px-5.5 py-2 md:py-2.5 rounded-lg outline-[1.4px] hover:bg-gray-600 hover:text-white duration-300  hover:shadow-md outline-gray-600 text-gray-600 font-medium cursor-pointer text-xs sm:text-sm text-nowrap">
          Visit Profile
        </button> */}
      </div>
    </div>
  );
}

export default ProductDetail;
