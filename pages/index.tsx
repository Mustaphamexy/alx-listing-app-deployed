import { Hero_Image, Hero_Image_Mobile } from "@/constants/index";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import Pill from "@/components/common/Pill";
import { FILTER_OPTIONS } from "@/constants/index";
import { LuFilter } from "react-icons/lu";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

const PropertyListingPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Highest Price");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchproperties = async () => {
      try {
        setLoading(true);
         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
        setProperties(response.data);
      } catch (error) {
        console.error ('Error Fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchproperties();
  }, []);



  const filteredProperties = properties.filter(property => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Top Villa") return property.category.includes("Luxury Villa") || property.name.includes("villa");
    if (activeFilter === "Self Checkin") return property.category.includes("Self Checkin");
    if (activeFilter === "Free Reschedule") return property.category.includes("Free Reschedule");
    return true;

  });

  const sortedPropeties = [...filteredProperties].sort((a , b) => {
  if (sortBy === "Highest Price") return b.price - a.price;
  if (sortBy === "Lowest Price") return a.price - b.price;
  if (sortBy === "Highest Rating") return b.rating - a.rating;
   return 0;

  });

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const backgroundImage = isMobile ? Hero_Image_Mobile : Hero_Image;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-lg text-teal-900">Loading Properties</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-bottom bg-no-repeat m-4 md:m-10 rounded-lg overflow-hidden "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Find your favorite <br />
            place here!
          </h1>
          <p className="text-sm md:text-2xl max-w-2xl">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>

      <div className="max-w-8xl  m-4 md:m-10  px-4 py-8">
        {/* Filter Section */}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4 ml-4">
            <div className="flex items-center gap-2">
              <LuFilter className="w-6 h-6 text-gray-600" />
              <span className="text-lg text-gray-600">Filter</span>
              
            </div>
            <div>
              <span>Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1 ml-2"
              >
                <option>Highest Price</option>
                <option>Lowest Price</option>
                <option>Highest Rating</option>
              </select>
            </div>
          </div>
        </div>
        

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {sortedPropeties.map((property, index) => (

            <PropertyCard key={index} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 ">Show More</button>
          <p className="text-gray-600 mt-4">Click to see more listings</p>
        </div>


      </div>
    </div>
  );
};

export default PropertyListingPage;
