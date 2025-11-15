import Shirt from "@/public/products/stripped-shirt.png";
import { formatCurrency } from "@/utils/helper-functions";
import Image from "next/image";

function ItemsOrdered() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-5">
      <h3 className="text-base font-semibold text-gray-900">
        Items Ordered (2)
      </h3>

      <ul>
        <li className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            {/*image */}
            <div
              className="size-12 sm:size-14 md:size-16 lg:size-20 bg-orange-200 rounded-xl flex-shrink-0"
              // style={{ backgroundColor: item.backgroundColor }}
            >
              <Image
                src={Shirt}
                alt={"prod"}
                width={80}
                height={80}
                className="w-full h-full object-contain p-1"
              />
            </div>
            {/*details */}
            <div>
              <h4 className="font-semibold text-xs md:text-sm lg:text-base line-clamp-1">
                Vertical stripped shirt
              </h4>

              <p className="font-medium">
                Prod <b>#0001</b>
              </p>
              <p>
                <span className="font-medium">Qty:&nbsp;</span>3
              </p>
            </div>
          </div>

          {/*price */}
          <h3 className="font-semibold text-xs md:text-sm lg:text-base">
            {formatCurrency(7000)}
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default ItemsOrdered;
