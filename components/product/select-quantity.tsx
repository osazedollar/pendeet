import { FiMinus, FiPlus } from "react-icons/fi";

function SelectQuantity() {
  return (
    <div className="flex items-center bg-gray-200 p-1 rounded-lg">
      <button className="px-2.5 py-2 hover:bg-gray-300 rounded-lg focus:outline-none duration-200">
        <FiMinus />
      </button>
      <div className="flex-1 text-xs px-2 md:text-sm">1</div>
      <button className="px-2.5 py-2 hover:bg-gray-300 rounded-lg focus:outline-none duration-200">
        <FiPlus />
      </button>
    </div>
  );
}

export default SelectQuantity;
