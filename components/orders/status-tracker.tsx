import { FaCheck } from "react-icons/fa";

function Statustracker() {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-center">
          <span className="bg-primary size-8 rounded-full border-2 border-purple-200 text-white flex-center">
            <FaCheck />
          </span>
          <span className="bg-gray-500 rounded-full w-[2px] h-6" />
        </div>
        <p className="flex flex-col text-xs lg:text-sm">
          <span className="font-medium">Order Placed</span>
          <span className="">Aug 17, 2025</span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-center">
          <span className="bg-primary size-8 rounded-full border-2 border-purple-200 text-white flex-center">
            <FaCheck />
          </span>
          <span className="bg-gray-500 rounded-full w-[2px] h-6" />
        </div>
        <p className="flex flex-col text-xs lg:text-sm">
          <span className="font-medium">Shipped</span>
          <span className="">Aug 22, 2025</span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-center">
          <span className="bg-black size-8 rounded-full border-2 border-purple-200 text-white flex-center">
            <FaCheck />
          </span>
          {/* <span className="bg-gray-500 rounded-full w-[2px] h-6" /> */}
        </div>
        <p className="flex flex-col text-xs lg:text-sm">
          <span className="font-medium">Delivered</span>
          <span className="">Pending...</span>
        </p>
      </div>
    </div>
  );
}

export default Statustracker;
