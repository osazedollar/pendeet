import { KeyboardEvent } from "react";
import { LuImage, LuSend } from "react-icons/lu";

interface IMessageInput {
  newMessage: string;
  setNewMessage: (value: string) => void;
  handleKeyPress: (e: KeyboardEvent<Element>) => void;
  handleSendMessage: () => void;
}

//Not done with this yet!!!
function MessageInput({
  newMessage,
  setNewMessage,
  handleKeyPress,
  handleSendMessage,
}: IMessageInput) {
  return (
    <div className="relative flex-1 gap-3 flex items-center rounded-full">
      <input
        type="text"
        placeholder="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full px-4 py-2 lg:py-2.5 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />

      <button className="flex self-stretch flex-center hover:bg-gray-200 rounded-lg px-2.5 text-lg lg:text-xl text-gray-500 duration-200">
        <LuImage />
      </button>
      <button
        onClick={handleSendMessage}
        disabled={!newMessage.trim()}
        className="flex self-stretch flex-center disabled:bg-primary/50 bg-primary rounded-lg px-2.5 text-lg lg:text-xl text-white duration-200"
      >
        <LuSend />
      </button>
      {/* <button
        onClick={handleSendMessage}
        disabled={!newMessage.trim()}
        className="absolute right-4 top-2.5 text-primary disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
      >
        <IoSendSharp className="text-xl" />
      </button> */}
    </div>
  );
}

export default MessageInput;
