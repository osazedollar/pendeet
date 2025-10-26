import { formatCurrency } from "@/utils/helper-functions";
import Image from "next/image";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import Shirt from "@/public/products/street-wear.png";

function ProductItemCard() {
  return (
    <div className="flex gap-3">
      <div className="size-16 relative bg-orange-200 rounded-xl ">
        <Image
          src={Shirt}
          alt="shirt"
          fill
          placeholder="blur"
          className=" object-cover p-1"
        />
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-sm line-clamp-1">
            Green Trench Gown
          </h4>
          <button
            // onClick={() => removeFromCart(item.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <FiX className="size-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="size-3.5 rounded-full bg-green-600" />
          <span>Green</span>
          <span>|</span>
          <span>XXL</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">
            {formatCurrency(24000)}
          </span>
          <div className="flex gap-2 bg-gray-100 rounded-full px-2 py-1">
            <button
              // onClick={() => decQuantity(item.id)}
              className="hover:text-primary"
            >
              <FiMinus className="size-3" />
            </button>
            <span className="w-4 text-center text-sm font-medium">
              1{/* {item.quantity} */}
            </span>
            <button
              // onClick={() => incQuantity(item.id)}
              className="hover:text-primary"
            >
              <FiPlus className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
