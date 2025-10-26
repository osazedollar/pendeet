import { trendsData } from "@/data";
import Image from "next/image";

import { CiPlay1 } from "react-icons/ci";

function UserTrends() {
  return (
    <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))]">
      {trendsData.map(({ image, views }, i) => (
        <div
          className="rounded-lg cursor-pointer relative h-76 group overflow-hidden shadow-md"
          key={i}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg z-1 translate-y-full group-hover:translate-y-0 duration-300" />
          <Image
            src={image}
            alt="trend-img"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
          />
          {/*counts */}
          <p className="absolute left-4 bottom-4  text-white flex items-center gap-1 text-xs z-10">
            {views} <CiPlay1 size={17} />
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserTrends;
