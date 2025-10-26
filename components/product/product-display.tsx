import Shirt1 from "@/public/products/shirt1.png";
import Image from "next/image";

function ProductDisplay() {
  return (
    <div className="flex gap-3 pb-3">
      <div className="relative aspect-square w-14">
        <Image
          src={Shirt1}
          alt="prod-1"
          fill
          sizes="48px"
          className="object-cover rounded"
        />
      </div>

      <div className="space-y-[2px]">
        <p className="line-clamp-1 font-semibold text-gray-800">
          Verytical Stripped Shirt Verytical Stripped Shirt
        </p>
        <p className="flex items-center justify-between text-xs font-medium">
          <span className="text-gray-500">Black & White</span>
          <b className="text-gray-800">1x</b>
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
