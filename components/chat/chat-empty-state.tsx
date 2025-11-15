import { IoLogoWechat } from "react-icons/io5";
// import Button from "@/ui/Button";

export default function ChatEmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gray-50 px-5 lg:px-0">
      <div className="flex flex-col items-center gap-4 max-w-md text-center">
        <IoLogoWechat className="text-5xl lg:text-7xl text-primary animate-bounce drop-shadow-2xl" />
        {/* <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center animate-bounce">
          <BsChatDots className="text-6xl text-primary" />
        </div> */}
        <div className="space-y-2">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
            Select a conversation
          </h2>
          <p className="text-gray-600 text-xs lg:text-sm xl:text-base font-mono">
            Choose a conversation from the list to start messaging or create a
            new chat to connect with vendors and customers.
          </p>
        </div>
        {/* <Button variant="primary" size="regular">
          Start New Chat
        </Button> */}
      </div>
    </div>
  );
}
