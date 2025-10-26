import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

interface ICommentsCard {
  text: string;
}

function CommentsCard({ text }: ICommentsCard) {
  const [showMore, setShowMore] = useState(false);

  const description = !showMore ? text.slice(0, 200) + "..." : text;

  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center gap-3 text-gray-700">
        <span className="size-9 rounded-full bg-gray-400"></span>
        <p className="flex items-center gap-1 text-xs md:text-sm">
          <b>User11113687311626</b>
          <LuDot />
          <span className="font-medium truncate">A month ago</span>
        </p>
      </div>
      <p className="text-xs leading-normal">{description}</p>
      <button
        className="text-end text-primary font-medium text-xs focus:outline-none w-fit  self-end"
        onClick={() => setShowMore((curr) => !curr)}
      >
        {showMore ? "Show less" : "Read More"}
      </button>
      <div className="flex items-center gap-2 text-gray-700 self-end">
        <span className="flex items-center text-xs gap-1">
          <IoMdHeartEmpty className="text-red-400" size={20} />
          35
        </span>
        <span className="flex items-center text-xs gap-1">
          <IoChatboxOutline size={20} />3
        </span>
      </div>
    </li>
  );
}

export default CommentsCard;
