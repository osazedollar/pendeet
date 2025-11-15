function OrdersHeader({ showTab = true }: { showTab?: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3 hidden md:flex flex-col md:gap-1">
      <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
        Orders Center
      </h2>

      {showTab && (
        <div className="flex items-center gap-2.5 text-xs lg:text-sm">
          <button className="font-semibold">My Orders (3)</button>
          <span className="rounded-full size-2 bg-primary" />
          <button className="font-semibold text-gray-500 hover:bg-primary/30 rounded-lg hover:shadow-md hover:text-black duration-200 px-2 py-1.5">
            Sales (3)
          </button>
        </div>
      )}
    </div>
  );
}

export default OrdersHeader;
