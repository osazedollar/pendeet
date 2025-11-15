const allStatus = [
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

function VendorStatusUpdate() {
  return (
    <div className="space-y-2">
      {/*show order status */}
      <div className="space-y-2">
        <label>Country/Region</label>
        <select
          name="country"
          // value={formData.country}
          // onChange={handleChange}
          defaultValue={"pending"}
          className="w-full px-4 py-2 border border-[#999999] rounded-lg focus:outline-none focus:border-primary bg-gray-100 cursor-pointer text-sm capitalize"
        >
          {allStatus.map((status, i) => (
            <option key={i} value={status} className="bg-white capitalize">
              {status}
            </option>
          ))}
        </select>
      </div>

      {/*tracking number */}
      <div className="space-y-2">
        <label>Tracking Number</label>
        <input
          type="text"
          placeholder="STRC6FFTY6UJCY7654HGVJ"
          disabled
          className="w-full px-4 py-2 border border-[#999999] rounded-lg focus:outline-none focus:border-primary bg-gray-100 cursor-pointer text-sm"
        />
      </div>
    </div>
  );
}

export default VendorStatusUpdate;
