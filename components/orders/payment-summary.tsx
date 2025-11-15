import { formatCurrency } from "@/utils/helper-functions";

function PaymentSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      <h3 className="text-base font-semibold text-gray-900">
        Payment Summmary
      </h3>

      <ul className="space-y-1">
        <li className="flex flex-row justify-between">
          <span>Product amount</span>
          <span className="font-semibold">{formatCurrency(79000)}</span>
        </li>
        <li className="flex flex-row justify-between border-b border-gray-300 pb-2">
          <span>Shipping fee</span>
          <span className="font-semibold">{formatCurrency(2350)}</span>
        </li>
        <li className="flex flex-row justify-between">
          <span>Total</span>
          <span className="font-semibold">{formatCurrency(85000)}</span>
        </li>
      </ul>
    </div>
  );
}

export default PaymentSummary;
