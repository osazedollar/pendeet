function OrdersInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      <h3 className="text-base font-semibold text-gray-900">
        Order Information
      </h3>

      <ul className="space-y-1">
        <li className="space-x-3">
          <span className="font-semibold">Order ID:</span>
          <span>Order #PEN12345</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Date:</span>
          <span>{new Date(Date.now()).toLocaleDateString()}</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Delivery Method:</span>
          <span>Standard delivery</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Delivery address:</span>
          <span>15A, Allen Avenue, Ikeja, Lagos</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Commision</span>
          <span className="">₦8500 (10%)</span>
        </li>
        <li className="space-x-3">
          <span className="font-semibold">Order ID:</span>
          <span className="">Order #PEN12345</span>
        </li>
      </ul>
    </div>
  );
}

export default OrdersInfo;
