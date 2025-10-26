import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/utils/helper-functions";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

function CartItem({ item }: { item: CartItem }) {
  const { removeFromCart, incQuantity, decQuantity } = useCart();

  const totalPrice = item.quantity * item.unitPrice;

  return (
    <div
      key={item.id}
      className="bg-white rounded-2xl p-3 flex gap-4 items-center shadow-sm"
    >
      {/* Product Image */}
      <div
        className="w-28 h-28 md:w-30 md:h-30 bg-orange-200 rounded-xl flex-shrink-0 overflow-hidden"
        style={{
          backgroundColor: item.bgColor,
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={112}
          height={112}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base md:text-lg font-bold line-clamp-1 capitalize">
            {item.title}
          </h3>
          <button
            onClick={() => {
              removeFromCart(item.id);
              toast.success("Product removed from cart");
            }}
            className="text-red-500 hover:text-red-600 p-2"
          >
            <FiTrash2 className="size-4 md:size-5" />
          </button>
        </div>

        <p className="text-gray-500 text-xs">{item.vendor}</p>

        <div className="flex flex-row items-center gap-5">
          <span className="text-gray-500 text-xs ">Size</span>
          <p className="font-medium text-black text-xs md:text-sm">
            {item.size}
          </p>
        </div>

        <div className="flex flex-row items-center gap-5">
          <span className="text-gray-500 text-xs ">Color</span>
          <div
            className="size-3 md:size-5 rounded-full border border-gray-300"
            style={{ backgroundColor: item.color }}
          />
        </div>

        <div className="flex items-center justify-between relative">
          <p className="text-base md:text-lg font-bold">
            {formatCurrency(totalPrice)}
          </p>
          <div className="flex gap-1 md:gap-2 lg:gap-3 bg-gray-100 rounded-full px-3 py-2 absolute right-0">
            <button
              onClick={() => decQuantity(item.id)}
              className="hover:text-primary"
            >
              <FiMinus />
            </button>
            <span className="w-6 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => incQuantity(item.id)}
              className="hover:text-primary"
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
