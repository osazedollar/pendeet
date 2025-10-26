import { FiX } from "react-icons/fi";
import TrendCommentCard from "./trend-comment-card";
import { LuSendHorizontal } from "react-icons/lu";
import { GrEmoji } from "react-icons/gr";

function TrendDetails() {
  return (
    <div className="p-4 shadow-2xl h-dvh">
      <div className="h-full flex flex-col gap-4">
        {/*header */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">Comments (2550)</p>
          <button className="flex-center hover:bg-gray-100 hover:shadow p-1 rounded-full group duration-200">
            <FiX className="group-hover:scale-115 duration-200" />
          </button>
        </div>

        {/*main contents */}
        <div className="flex-1 overflow-y-scroll space-y-2 scrollbar-hide">
          {Array.from({ length: 6 }).map((_, i) => (
            <TrendCommentCard key={i} />
          ))}
        </div>

        {/*footer contents */}
        <div className="relative flex gap-2">
          <div className="flex-1 relative">
            <GrEmoji className="absolute left-1.5 top-1/2 -translate-y-1/2 text-lg lg:text-xl hover:text-primary cursor-pointer" />
            <input
              type="text"
              placeholder="Add comment..."
              className="py-1.5 pl-8 pr-3 rounded-lg bg-gray-200 focus:ring-primary ring-gray-200 ring w-full outline-none duration-200 text-xs lg:text-sm"
            />
          </div>
          {/*send btn */}
          <button className="text-2xl text-primary">
            <LuSendHorizontal className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendDetails;
