import { PropertyCardProps } from "@/interfaces";
import { RiStarFill } from "react-icons/ri";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { PiSealPercentFill } from "react-icons/pi";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={property.image || "/placeholder.jpg"}
          alt={property.name || "Property"}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        {property.discount && (
          <div className="flex items-center gap-2 absolute top-3 left-0 bg-green-500 text-white pl-2 pr-4 py-1 rounded-md text-sm font-semibold">
            <PiSealPercentFill className="w-4 h-4" />
            <span>{property.discount}% Off</span>
          </div>
        )}
      </div>

      {/* Categories */}
      {property.category && property.category.length > 0 && (
        <div className="flex flex-wrap gap-2 px-4">
          {property.category.slice(0, 5).map((cat: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg md:text-xl">
            {property.name || "Unnamed Property"}
          </h3>
          {property.rating && (
            <div className="flex items-center gap-1">
              <RiStarFill className="w-4 h-4 fill-yellow-500" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          )}
        </div>


        <p className="text-sm text-gray-600">
          {property.address?.city}, {property.address?.country}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="inline-flex items-center gap-4 text-sm text-gray-900 border px-3 py-2 rounded-full">
            {property.offers?.bed && (
              <div className="flex items-center gap-1">
                <IoBed className="w-5 h-5" />
                <span>{property.offers.bed}</span>
              </div>
            )}
            {property.offers?.shower && (
              <div className="flex items-center gap-1">
                <FaBath className="w-5 h-5" />
                <span>{property.offers.shower}</span>
              </div>
            )}
            {property.offers?.occupants && (
              <div className="flex items-center gap-1">
                <HiUsers className="w-5 h-5" />
                <span>{property.offers.occupants}</span>
              </div>
            )}
          </div>

          <div>
            <span className="font-semibold">
              ${property.price || "N/A"}/Night
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
