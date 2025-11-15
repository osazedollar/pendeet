"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import Avatar from "@/ui/Avatar";

interface ChatInterfaceProps {
  conversations: Conversation[];
  activeConversation: Conversation;
  messages: ChatMessage[];
  currentUserId: string;
}

export default function ChatInterface({
  // conversations,
  activeConversation,
  messages: initialMessages,
  currentUserId,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: `m${Date.now()}`,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      }),
      senderId: currentUserId,
      senderName: "You",
      type: "text",
      isOwn: true,
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-dvh">
      {/* Sidebar - Desktop Only */}
      {/* <div className="hidden lg:block">
        <ChatList
          conversations={conversations}
          activeConversationId={activeConversation.id}
        />
      </div> */}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="flex items-center justify-between p-4 lg:p-6 bg-white">
          <div className="flex items-center gap-3">
            <Link href="/chat">
              <BiArrowBack className="text-2xl text-gray-700" />
            </Link>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <Avatar
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  size={48}
                />
              </div>
              {activeConversation.isOnline && (
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div>
              <h2 className="text-[#343434] font-bold text-base">
                {activeConversation.name}
              </h2>
              <p className="text-xs text-[#343434]">
                {activeConversation.username}
              </p>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.isOwn ? "justify-end" : "justify-start"
              }`}
            >
              {!message.isOwn && (
                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                  <Avatar
                    src={message.senderAvatar}
                    alt={message.senderName}
                    size={40}
                  />
                </div>
              )}
              <div
                className={`flex flex-col ${
                  message.isOwn ? "items-end" : "items-start"
                }`}
              >
                {message.type === "text" && (
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-md lg:max-w-lg ${
                      message.isOwn
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-[#EEEEEE] text-[#343434] rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p className="text-base leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                )}
                {message.type === "image" && message.imageUrl && (
                  <div
                    className={`rounded-2xl overflow-hidden max-w-md lg:max-w-lg ${
                      message.isOwn ? "bg-primary" : "bg-white shadow-sm"
                    }`}
                  >
                    <div className="p-2">
                      <Image
                        src={message.imageUrl}
                        alt={message.imageCaption || "Image"}
                        width={400}
                        height={300}
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                    {message.imageCaption && (
                      <div
                        className={`px-4 py-3 ${
                          message.isOwn ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.imageCaption}</p>
                      </div>
                    )}
                  </div>
                )}
                <span className="text-xs text-[#343434] mt-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-3 p-4 lg:p-6">
          <div className="relative flex-1 items-center rounded-full">
            <input
              type="text"
              placeholder="Write your message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="absolute right-4 top-2.5 text-primary disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              <IoSendSharp className="text-xl" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
