import React, { useState } from "react";
import { AccommodationType } from "../../interfaces";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  FaHome,
  FaBuilding,
  FaTree,
  FaVihara,
  FaStar,
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaCampground,
  FaCity,
  FaWarehouse,
} from "react-icons/fa";
import { GiTreehouse, GiWoodCabin, GiIsland, GiCastle } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";

const accommodationTypes: AccommodationType[] = [
  { id: "rooms", name: "Rooms", icon: <FaHome className="w-6 h-6" /> },
  { id: "mansion", name: "Mansion", icon: <FaBuilding className="w-6 h-6" /> },
  {
    id: "countryside",
    name: "Countryside",
    icon: <FaTree className="w-6 h-6" />,
  },
  { id: "villa", name: "Villa", icon: <FaVihara className="w-6 h-6" /> },
  { id: "tropical", name: "Tropical", icon: <GiIsland className="w-6 h-6" /> },
  { id: "new", name: "New", icon: <FaStar className="w-6 h-6" /> },
  {
    id: "amazing-pool",
    name: "Amazing pool",
    icon: <FaSwimmingPool className="w-6 h-6" />,
  },
  {
    id: "beach-house",
    name: "Beach house",
    icon: <FaUmbrellaBeach className="w-6 h-6" />,
  },
  { id: "island", name: "Island", icon: <GiIsland className="w-6 h-6" /> },
  {
    id: "camping",
    name: "Camping",
    icon: <FaCampground className="w-6 h-6" />,
  },
  { id: "apartment", name: "Apartment", icon: <FaCity className="w-6 h-6" /> },
  { id: "house", name: "House", icon: <FaHome className="w-6 h-6" /> },
  {
    id: "lakefront",
    name: "Lakefront",
    icon: <FaUmbrellaBeach className="w-6 h-6" />,
  },
  {
    id: "farm-house",
    name: "Farm house",
    icon: <FaWarehouse className="w-6 h-6" />,
  },
  {
    id: "treehouse",
    name: "Treehouse",
    icon: <GiTreehouse className="w-6 h-6" />,
  },
  { id: "cabins", name: "Cabins", icon: <GiWoodCabin className="w-6 h-6" /> },
  { id: "castles", name: "Castles", icon: <GiCastle className="w-6 h-6" /> },
];

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeAccommodation, setActiveAccommodation] = useState("villa");

  const scrollAccommodations = (direction: "left" | "right") => {
    const container = document.getElementById("accommodations-container");
    if (container) {
      const scrollAmount = 200;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              container.scrollWidth - container.clientWidth,
              scrollPosition + scrollAmount
            );

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Main Header */}
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="md:flex items-center hidden ">
            <div className="text-2xl font-bold text-gray-900">
              <Image src={Logo} alt="star" />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 py-4 px-8 max-w-3xl">
            <div className="text-sm pr-28 ">
              <label className="font-medium text-gray-900 mb-2 block">
                Location
              </label>
              <input
                type="text"
                placeholder="Location - Date - Add Guest"
                className="text-gray-500 placeholder-gray-500 focus:outline-none w-full bg-transparent"
              />
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full ml-2 transition-colors duration-200">
              <FiSearch className="w-8 h-8" />
            </button>
          </div>

          {/* Desktop Search Bar - Centered */}
          <div className="hidden md:flex items-center ml-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 p-2 flex-1 md:max-w-2xl lg:max-w-4xl mmx-8">
            {/* Location Input */}
            <div className="flex items-center px-4 pr-2 py-2 border-r md:pr-2 lg:pr-12 border-gray-200">
              <div className="text-sm">
                <label className="font-medium text-gray-900 mb-2 block">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Search for destination"
                  className="text-gray-500 placeholder-gray-500 focus:outline-none w-full bg-transparent"
                />
              </div>
            </div>

            {/* Check-in Input */}
            <div className="flex items-center px-4 md:pr-2 lg:pr-12 py-2 border-r border-gray-200">
              <div className="text-sm">
                <label className="font-medium text-gray-900 mb-2 block">
                  Check in
                </label>
                <input
                  type="date"
                  className="text-gray-500 placeholder-gray-500 focus:outline-none w-full bg-transparent"
                />
              </div>
            </div>

            {/* Check-out Input */}
            <div className="flex items-center px-4 md:pr-2 lg:pr-12 py-2 border-r border-gray-200">
              <div className="text-sm">
                <label className="font-medium text-gray-900 mb-2 block">
                  Check out
                </label>
                <input
                  type="date"
                  className="text-gray-500 placeholder-gray-500 focus:outline-none w-full bg-transparent"
                />
              </div>
            </div>

            {/* People Input */}
            <div className="flex items-center px-4 md:pr-2 lg:pr-12 py-2">
              <div className="text-sm">
                <label className="font-medium text-gray-900 mb-2 block">
                  People
                </label>
                <input
                  type="number"
                  placeholder="Add guest"
                  min={1}
                  className="text-gray-500 placeholder-gray-500 focus:outline-none w-full bg-transparent"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full lg:ml-2 transition-colors duration-200">
              <FiSearch className="w-8 h-8" />
            </button>
          </div>

          {/* Auth Buttons */}
          <div className=" hidden lg:flex items-center space-x-3">
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
              Sign in
            </button>
            <button className="text-gray-800 hover:text-gray-900 px-4 py-2 font-medium transition-colors duration-200 border-2 border-gray-500 rounded-full">
              Sign up
            </button>
          </div>
          <div className="ml-2">
            <FaCircleUser className="w-14 h-14 lg:hidden text-green-700 " />
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="border-t border-gray-200">
        <div className="px-4 md:px-6 lg:px-8 py-4">
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scrollAccommodations("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <FiChevronLeft className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={() => scrollAccommodations("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <FiChevronRight className="w-4 h-4 text-gray-600" />
            </button>

            {/* Accommodations Container */}
            <div
              id="accommodations-container"
              className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {accommodationTypes.map((accommodation) => (
                <button
                  key={accommodation.id}
                  onClick={() => setActiveAccommodation(accommodation.id)}
                  className={`flex flex-col items-center justify-center min-w-0 flex-shrink-0 p-3 rounded-lg transition-all duration-200 ${
                    activeAccommodation === accommodation.id
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <div className="mb-2 text-gray-700">{accommodation.icon}</div>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {accommodation.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
