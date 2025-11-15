"use client";
import { mockConversations } from "@/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChatEmptyState from "./chat-empty-state";
import ChatContainer from "./chat-container";
import ChatList from "./chat-list";

//Not done with this yet!!!
function ChatPage() {
  const router = useRouter();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleUserSelect = (userId: string) => {
    // On mobile, navigate to individual chat page
    if (window.innerWidth < 768) {
      router.push(`/chat/${userId}`);
    } else {
      // On desktop, update selected user
      setSelectedUserId(userId);
    }
  };

  const selectedUser = mockConversations.find(
    (user) => user.id === selectedUserId
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-[clamp(20rem,30vw,25rem)_1fr] h-dvh w-full max-w-[1440px] mx-auto">
      <div className="grid">
        <ChatList
          conversations={mockConversations}
          activeConversationId={selectedUserId!}
          onUserSelect={handleUserSelect}
        />
      </div>
      <div className="hidden md:grid">
        {selectedUser ? (
          <ChatContainer user={selectedUser} />
        ) : (
          <ChatEmptyState />
        )}
        {/* <ChatEmptyState /> */}
      </div>
    </section>
  );
}

export default ChatPage;
