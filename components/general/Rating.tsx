import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

function Rating() {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 3 }).map((_, i) => (
        <IoIosStar key={i} className="text-yellow-500" size={17} />
      ))}
      <IoStarHalf size={17} className="text-yellow-500 " />
      <IoIosStar className="text-gray-300" size={17} />
    </div>
  );
}

export default Rating;
