import { CiEdit } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import OrderSummary from "../general/order-summary";
import SelectQuantity from "./select-quantity";
import ProductDisplay from "./product-display";
import Button from "@/ui/Button";
// <div className="grid grid-cols-1 gap-3 shadow-md bg-white px-4 py-5 rounded-xl divide-y divide-gray-400 sticky top-[75px]">
//   <p className="font-semibold pb-2 text-lg text-gray-800">Order Summary</p>
function ProductOrderSummary() {
  return (
    <OrderSummary>
      <div className="grid grid-cols-1 gap-3 divide-y divide-gray-400">
        <ul className="flex flex-col gap-4 pb-2">
          {/*address */}
          <li className="space-y-1">
            <p className="font-semibold text-gray-800">Sent to</p>

            <div className="flex items-center justify-between gap-5 w-full">
              <p className="font-medium text-primary text-xs truncate flex items-center gap-1">
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span className="truncate">
                  No 33 Alex avenue; Ugbowo, benin city
                </span>
              </p>

              <span>
                <CiEdit />
              </span>
            </div>
          </li>
          {/*size */}
          <li className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">Size</p>

            <p className="uppercase font-semibold">xxl</p>
          </li>
          {/*color */}
          <li className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">Color</p>

            <span className="rounded-full bg-lime-950 size-5" />
          </li>
          {/*quantity */}
          <li className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">
              Quantity
              <span className="text-xs text-gray-400">&nbsp;(8 in stock)</span>
            </p>

            <SelectQuantity />
          </li>
        </ul>

        <ProductDisplay />

        <Button
          config={{
            className: "rounded-lg!",
          }}
          size="full"
          variant="primary"
        >
          Add to Cart
        </Button>
        <Button
          config={{
            className: "rounded-lg!",
          }}
          size="full"
          variant="primary_outlined"
        >
          Buy Now
        </Button>
      </div>
    </OrderSummary>
  );
}

export default ProductOrderSummary;
