import Link from "next/link";
import { FiHelpCircle } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function NeedHelp() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      <h3 className="text-base font-semibold text-gray-900">Need Help?</h3>

      <ul className="space-y-3 font-medium">
        <li>
          <Link
            href="/orders/id"
            className="space-x-3 flex flex-row items-center hover:text-primary"
          >
            <IoChatboxEllipsesOutline size={18} />

            <span>Chat With Us</span>
          </Link>
        </li>
        <li>
          <Link
            href="/orders/id"
            className="space-x-3 flex flex-row items-center hover:text-primary"
          >
            <GoMail size={18} />

            <span>Email Support</span>
          </Link>
        </li>
        <li>
          <Link
            href="/orders/id"
            className="space-x-3 flex flex-row items-center hover:text-primary"
          >
            <FiHelpCircle size={18} />

            <span>Visit FAQs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NeedHelp;
