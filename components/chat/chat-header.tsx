import Avatar from "@/ui/Avatar";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

function ChatHeader({ user }: { user: Conversation }) {
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-white">
      <div className="flex items-center gap-3">
        <Link href="/chat" className="md:hidden">
          <BiArrowBack className="text-2xl text-gray-700" />
        </Link>

        <div className="relative">
          <div className="size-10 rounded-full bg-gray-200 overflow-hidden">
            <Avatar src={user.avatar} alt={user.name} size={48} />
          </div>
          {user.isOnline && (
            <span className="absolute top-0 right-0 size-3 bg-green-500 border-[2.5px] border-white rounded-full">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400"></span>
            </span>
          )}
        </div>
        <div>
          <h2 className="text-[#343434] font-bold text-base">{user.name}</h2>
          <p className="text-xs text-[#343434]">{user.username}</p>
        </div>
      </div>
    </header>
  );
}

export default ChatHeader;
