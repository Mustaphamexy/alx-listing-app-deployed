/* eslint-disable @typescript-eslint/no-unused-vars */


import CancellationPolicy from "./CancellationPolicy";
import { FaAngleDown } from "react-icons/fa6";
import { IoLockClosedSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";




const BookingForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    aptNumber: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

  })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);


    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handlesubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post('${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings', formData)
         alert("Booking confirmed!");
      } catch (error) {
        setError('failed to submit bookings');
      } finally {
        setLoading(false);
      }
    };


  return (
    <form
      onSubmit={handlesubmit}
      className="bg-white w-full max-w-none space-y-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Contact Detail</h2>

      {/* Contact Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2">
            Phone number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Payment Section */}
      <div className="pt-6">
        <h3 className="text-lg font-semibold mb-4">Pay with</h3>

        {/* Card Details */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">
              Card number
            </label>
            <div className="relative">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IoLockClosedSharp />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2">
                Expiration date
              </label>
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="•••"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="pt-6 space-y-4">
        <h3 className="text-lg font-semibold mb-4">Billing Address</h3>

        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />

        <input
          type="text"
          name="aptNumber"
          value={formData.aptNumber}
          onChange={handleChange}
          placeholder="Apt or suite number"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white pr-10"
        >
          <option>Nigeria</option>
          <option>Ghana</option>
          <option>Kenya</option>
          <option>South Africa</option>
        </select>
      </div>

      <CancellationPolicy />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-8"
      >
        {loading ? "Processing..." : "Confirm & pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default BookingForm;