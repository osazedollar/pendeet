import Avatar from "@/ui/Avatar";

function ChatListItem({
  activeConversationId,
  user,
  onUserSelect,
}: ChatListItemProps) {
  return (
    <li
      onClick={() => onUserSelect(user.id)}
      className={`flex items-center gap-3 px-2 md:px-3 lg:px-4 py-3 transition-colors duration-200 rounded-lg cursor-pointer ${
        activeConversationId === user.id
          ? "bg-primary/20"
          : "hover:bg-primary/10 hover:shadow-2xs"
      }`}
    >
      <div className="relative">
        <div className="size-8 lg:size-11 rounded-full bg-gray-200 overflow-hidden">
          <Avatar src={user.avatar} alt={user.name} size={56} />
        </div>
        {user.isOnline && (
          <span className="absolute top-0 right-0 size-3 bg-green-500 border-[2.5px] border-white rounded-full">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-400"></span>
          </span>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-[#343434] font-semibold text-base lg:text-base truncate">
            {user.name}
          </h3>
          {user.unreadCount > 0 && (
            <div className="size-4.5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-[10px]">{user.unreadCount}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#343434] line-clamp-1">
            {user.lastMessage}
          </p>
          <span className="text-xs  text-[#343434]  ml-2">
            {user.lastMessageTime}
          </span>
        </div>
      </div>
    </li>
  );
}

export default ChatListItem;
