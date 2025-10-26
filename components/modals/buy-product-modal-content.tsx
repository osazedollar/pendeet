import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helper-functions";
import ProductItemCard from "../product/product-item-card";

function BuyProductModalContent() {
  return (
    <div className=" flex flex-col gap-4">
      <p className="font-semibold lg:text-base">Order Summary</p>

      {/*items */}
      <ProductItemCard />

      {/* amounts */}
      <ul className="flex flex-col gap-3">
        <li className="flex items-center justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatCurrency(79000)}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-gray-600">Delivery fee</span>
          <span className="font-medium">{formatCurrency(780)}</span>
        </li>
        <li className="flex justify-between pt-3 border-t border-gray-300">
          <span className="text-base font-semibold">Total</span>
          <span className="text-lg font-semibold">{formatCurrency(70500)}</span>
        </li>
      </ul>
      <Button
        config={{
          className: "flex-1 py-2! rounded-lg!",
        }}
        variant="primary"
        size="full"
      >
        Buy Now
      </Button>
    </div>
  );
}

export default BuyProductModalContent;
