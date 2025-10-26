function OrderSummary({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
      {children}
    </div>
  );
}

export default OrderSummary;
