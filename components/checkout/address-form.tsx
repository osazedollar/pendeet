"use client";
import React, { useState } from "react";

interface Address {
  id: string;
  name: string;
  address: string;
  phone: string;
}

interface AddressFormProps {
  onAddressAdded: (address: Address) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({ onAddressAdded }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "Nigeria",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAddress: Address = {
      id: Date.now().toString(),
      name: `${formData.firstName} ${formData.lastName}`,
      address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country}`,
      phone: formData.phone,
    };

    onAddressAdded(newAddress);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-4 md:p-6 space-y-5"
    >
      <h2 className="text-lg md:text-xl font-semibold">Shipping</h2>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="font-medium md:text-base">Contact information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              We will send order updates to this email
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234"
              className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>
      </div>

      <div className="w-full border-b border-[#999999]" />

      {/* Shipping Address */}
      <div className="space-y-4">
        <h3 className="font-medium md:text-base">Shipping Address</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Country/Region
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
            required
          >
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street number and name"
            className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            placeholder="Apt, suite, unit, etc (optional)"
            className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="w-full px-4 py-2.5 border border-[#999999] rounded-xl focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
      >
        Save New Address
      </button>
    </form>
  );
};
