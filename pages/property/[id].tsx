import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { FaArrowLeft, FaHeart, FaShare } from "react-icons/fa";
import { PropertyDescProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyDescProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<PropertyDescProps>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        );
        console.log(
          "Environment variable:",
          process.env.NEXT_PUBLIC_API_BASE_URL
        );
        console.log(
          "Full URL:",
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        );
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Failed to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-lg text-teal-900">Loading Property Details</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="mb-6 text-2xl text-red-600 font-bold">{error}</p>
        <button
          onClick={() => router.back()}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="mb-14 text-4xl sm:text-7xl font-extrabold text-gray-900 text-center">
          Property Not Found
        </p>
        <button
          onClick={() => router.back()}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 lg:pb-0">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 bg-white border-b border-gray-200 px-4 py-3 z-40">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <span className="font-medium text-gray-900">Return</span>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FaHeart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FaShare className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden lg:block container mx-auto px-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Return</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <FaShare className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <FaHeart className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-0 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
          {/* Left side - Property details */}
          <div className="lg:col-span-2 bg-white lg:bg-transparent">
            <PropertyDetail property={property} />
            <ReviewSection propertyId={property.id} />
          </div>

          {/* Right side - Booking section */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <BookingSection price={property.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
