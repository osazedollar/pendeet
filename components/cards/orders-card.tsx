import { formatCurrency, getStatusClasses } from "@/utils/helper-functions";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function OrdersCard({ item }: { item: Order }) {
  return (
    <li className="rounded-2xl shadow-md bg-white p-3 space-y-2 relative">
      <Link
        className="inset-0 absolute md:hidden"
        href={`/orders/${item.orderId}`}
      />
      {/*header */}
      <div className=" border-b border-gray-300 flex flex-row justify-between items-center py-1 text-[10px] lg:text-xs">
        <p>
          <span>Order date:&nbsp;&nbsp;</span>
          <span className="font-medium">
            {new Date(item.date).toLocaleDateString()}
          </span>
        </p>
        <p>
          <span>Order ID:&nbsp;&nbsp;</span>
          <span className="font-medium">#{item.orderId}</span>
        </p>
      </div>

      {/*details */}
      <div className="flex flex-row  items-center gap-3 md:gap-6 lg:gap-10 justify-between">
        {/*product info */}
        <div className="flex flex-row items-center gap-2 md:gap-3">
          {/*image */}
          <div
            className="size-12 sm:size-14 md:size-16 lg:size-20 bg-orange-200 rounded-xl flex-shrink-0"
            style={{ backgroundColor: item.backgroundColor }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="w-full h-full object-contain p-1"
            />
          </div>
          {/*info */}
          <div className="space-y-1">
            <h4 className="font-semibold text-xs md:text-sm lg:text-base line-clamp-1">
              {item.name}
            </h4>

            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 text-xs ">
              <div className="flex flex-row items-center gap-1">
                <div
                  className="size-2 md:size-3 rounded-full"
                  style={{ backgroundColor: item.selectedColor }}
                />

                <span className="font-medium capitalize text-[10px] sm:text-xs md:text-sm">
                  {item.colorName}
                </span>
              </div>
              <span>|</span>
              <span className="uppercase font-medium text-[10px] sm:text-xs md:text-sm">
                xl
              </span>
            </div>
          </div>
        </div>

        {/*quantity */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xs md:text-sm lg:text-base">Qty</h3>
          <h3 className="font-semibold text-xs md:text-sm lg:text-base">
            {item.quantity}
          </h3>
        </div>

        {/*price */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xs md:text-sm lg:text-base">Price</h3>
          <h3 className="font-semibold text-xs md:text-sm lg:text-base">
            {formatCurrency(item.price)}
          </h3>
        </div>

        {/*status */}
        <div className="flex flex-col items-center gap-2">
          <span
            className={`capitalize font-semibold px-2 py-1 lg:px-4 rounded-full text-[8px] md:text-[10px] lg:text-xs ${getStatusClasses(
              item.status
            )}`}
          >
            {item.status}
          </span>
          <Link
            href={`/orders/${item.orderId}`}
            className="text-primary text-xs items-center flex-row gap-1 group hidden md:flex"
          >
            <span className="font-medium group-hover:font-semibold duration-200">
              See details
            </span>
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default OrdersCard;
