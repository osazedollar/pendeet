"use client";
import { getMessagesById } from "@/data";
import Avatar from "@/ui/Avatar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "./chat-header";
import MessageInput from "./message-input";

interface IChatContainer {
  user: Conversation;
}

//Not done with this yet!!!

function ChatContainer({ user }: IChatContainer) {
  const id = user.id;
  const [messages, setMessages] = useState(getMessagesById(id));
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  console.log({ messages, user });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const newMessages = getMessagesById(user.id);

    setMessages(newMessages);

    scrollToBottom();
  }, [user.id]);

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
      senderId: user.id,
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
    <div className="flex flex-col h-dvh">
      {/* Chat Header */}
      <ChatHeader user={user} />

      {/* Messages Area */}
      <ul className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`flex gap-3 ${
              message.isOwn ? "justify-end" : "justify-start"
            }`}
          >
            {!message.isOwn && (
              <div className="size-8 flex-center rounded-full bg-gray-200 shrink-0 overflow-hidden">
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
                  <p className="text-base leading-relaxed">{message.content}</p>
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
          </li>
        ))}
        <div ref={messagesEndRef} />
      </ul>

      {/* Message Input */}
      <div className="flex items-center py-4 px-4 lg:px-6">
        <MessageInput
          newMessage={newMessage}
          handleKeyPress={handleKeyPress}
          handleSendMessage={handleSendMessage}
          setNewMessage={setNewMessage}
        />
      </div>
    </div>
  );
}

export default ChatContainer;
