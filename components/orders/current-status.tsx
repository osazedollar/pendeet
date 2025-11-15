import { getStatusClasses } from "@/utils/helper-functions";

function CurrentStatus() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-2 md:space-y-3 lg:space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">
          Current Status
        </h3>

        {/*status */}
        <span
          className={`capitalize font-semibold px-2 py-1 lg:px-4 rounded-full text-[8px] md:text-[10px] lg:text-xs ${getStatusClasses(
            "delivered"
          )}`}
        >
          completed
        </span>
      </div>

      <p className="text-xs md:text-sm">
        Package was delivered on October 30, 2025
      </p>
    </div>
  );
}

export default CurrentStatus;
