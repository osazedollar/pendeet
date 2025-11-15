import Image from "next/image";
import avatar1 from "@/assets/images/avatar/avatar1.png";

function BuyersInformation() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      <h3 className="text-base font-semibold text-gray-900">
        Buyer information
      </h3>

      <div className="flex flex-row items-center gap-3">
        <span className="size-14 relative rounded-full">
          <Image
            src={avatar1}
            alt="prod"
            fill
            placeholder="blur"
            className="object-cover rounded-full"
          />
        </span>
        <div>
          <p className="font-semibold text-xs md:text-sm lg:text-base">
            Jane Doe
          </p>
          <p>janedoexcluz@pendeet.com</p>
        </div>
      </div>

      <ul className="space-y-1">
        <li className="space-x-3">
          <span className="font-semibold">Username:</span>
          <span>jd1999__</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Phone:</span>
          <span>+2349012345678</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Delivery address:</span>
          <span>15A, Allen Avenue, Ikeja, Lagos</span>
        </li>
      </ul>
    </div>
  );
}

export default BuyersInformation;
