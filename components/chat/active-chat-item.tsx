import Avatar from "@/ui/Avatar";

function ActiveChatItem({
  user,
  onUserSelect,
  activeConversationId,
}: ChatListItemProps) {
  return (
    <li
      key={user.id}
      onClick={() => onUserSelect(user.id)}
      // href={`/chat/${user.id}`}
      className={`flex flex-col items-center rounded-full  cursor-pointer ${user.id === activeConversationId && "border-2 border-primary"}`}
    >
      <div className="relative">
        <div className="size-10 lg:size-12 xl:size-14 rounded-full bg-gray-200">
          <Avatar src={user.avatar} alt={user.name} size={64} />
        </div>
        {user.isOnline && (
          <span className="absolute top-0 right-0 size-3 bg-green-500 border-[2.5px] border-white rounded-full">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-400"></span>
          </span>
        )}
      </div>
    </li>
  );
}

export default ActiveChatItem;
