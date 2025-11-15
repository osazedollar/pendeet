import avatar1 from "@/assets/images/avatar/avatar1.png";
import Image from "next/image";
import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { MdOutlineChat } from "react-icons/md";

function VendorDetails() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      <h3 className="text-base font-semibold text-gray-900">Vendor Details</h3>

      <div className="flex flex-row items-center gap-3 border-b pb-2 border-gray-300">
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
            Jayscloset
          </p>
          <p>123k Followers</p>
        </div>
      </div>

      <ul className="space-y-3 font-medium">
        <li>
          <Link
            href="/orders/id"
            className="space-x-3 flex flex-row items-center hover:text-primary"
          >
            <MdOutlineChat size={18} />

            <span>Messages Vendor</span>
          </Link>
        </li>
        <li>
          <Link
            href="/orders/id"
            className="space-x-3 flex flex-row items-center hover:text-primary"
          >
            <BsShop size={18} />

            <span>Visit Vendor Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default VendorDetails;
