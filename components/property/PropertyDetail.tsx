import React from "react";
import { PropertyDescProps  } from "@/interfaces/index";
import { FaStar, FaBed, FaBath, FaUsers } from "react-icons/fa";
import { MdPool, MdLocalDining, MdCleaningServices, MdHotTub, MdWifi, MdKitchen, MdLocalBar  } from "react-icons/md";
import { GiCook, GiBeachBucket } from "react-icons/gi";
import { FaMountainSun } from "react-icons/fa6";


const PropertyDetail: React.FC<{ property: PropertyDescProps  }> = ({
  property,
}) => {
  const amenityIcons: { [key: string]: React.ReactNode } = {
    "Mountain view": <FaMountainSun className="w-6 h-6" />,
    "Chef": <GiCook className="w-6 h-6" />,
    "Cleaning available during stay": <MdCleaningServices className="w-6 h-6" />,
    "Pool - infinity": <MdPool className="w-6 h-6" />,
    "Kitchen": <MdKitchen className="w-6 h-6" />,
    "Shared beach access": <GiBeachBucket className="w-6 h-6" />,
    "Butler": <MdLocalDining className="w-6 h-6" />,
    "Bartender": <MdLocalBar  className="w-6 h-6" />,
    "Hot tub": <MdHotTub className="w-6 h-6" />,
    "Wifi": <MdWifi className="w-6 h-6" />,
  };

  return (
    <div className="bg-white">
      {/* Property Header */}
      <div className="px-4 sm:px-6 pt-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {property.name}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">{property.rating}</span>
            <span>( {property.reviewCount} reviews )</span>
          </div>
          <span>•</span>
          <span>{property.address.city}, {property.address.country}</span>
          <span>•</span>
          <span className="text-gray-500">Mainstream</span>
        </div>

        {/* Property Stats */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 mb-6">
          <div className="flex items-center gap-2">
            <FaBed className="w-4 h-4" />
            <span>{property.offers.bed} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="w-4 h-4" />
            <span>{property.offers.shower} Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="w-4 h-4" />
            <span>{property.offers.occupants} guests</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-4 sm:px-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 rounded-xl overflow-hidden">
          {/* Main Image */}
          <div className="lg:col-span-2 lg:row-span-2">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
          
          {/* Side Images - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="hidden lg:block">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="hidden lg:block">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-44 object-cover"
            />
          </div>
          <div className="hidden lg:block relative">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-44 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button className="text-white font-medium">Show all photos</button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-4 sm:px-6 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-teal-600 pb-4 text-sm font-medium text-teal-600">
              Description
            </button>
            <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              What we offer
            </button>
            <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              Reviews
            </button>
            <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              About host
            </button>
          </nav>
        </div>

        <div className="pt-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            {property.description}
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">The space</h3>
            <p className="text-gray-700 mb-2">BEDROOM & BATHROOM</p>
            <p className="text-gray-700">
              • Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower,
              Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
            </p>
          </div>

          <button className="text-teal-600 font-medium hover:text-teal-700">
            Read more →
          </button>
        </div>
      </div>

      {/* What this place offers */}
      <div className="px-4 sm:px-6 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          What this place offers
        </h2>
        <p className="text-gray-600 mb-6">
          Each home is fully equipped to meet your needs, with ample space and privacy.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {property.category.slice(0, 8).map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 py-2">
              {amenityIcons[amenity] || <MdPool className="w-6 h-6" />}
              <span className="text-gray-700">{amenity}</span>
            </div>
          ))}
        </div>

        {property.category.length > 8 && (
          <button className=" md:hidden mt-4 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Show all amenities
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;