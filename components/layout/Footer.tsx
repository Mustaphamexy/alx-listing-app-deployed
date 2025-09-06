import React from "react";
import Logo from "@/public/assets/Logo-white.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-200 border-t-16 border-teal-500 px-4 py-12 md:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* logo */}
        <div className="lg:hidden">
          <Image src={Logo} alt="star" className="mb-6" />
          <p className="max-w-2xl mb-8">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        {/* Mobile view links */}
        <div className="lg:hidden space-y-6 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Explore</h2>
            <ul className="space-y-1">
              <li>Apartments in Dubai</li>
              <li>Hotels in New York</li>
              <li>Villa in Spain</li>
              <li>Mansion in Indonesia</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Help</h2>
            <ul className="space-y-1">
              <li>Support</li>
              <li>Cancel booking</li>
              <li>Refunds Process</li>
            </ul>
          </div>
        </div>
        {/* desktop and border view */}
        <div className="hidden lg:block mb-8">
          <div className="grid grid-cols-4 gap-8">
            <div className="">
              {/* logo */}
              <Image src={Logo} alt="star" className="mb-6" />
              <p className="max-w-3xl mb-8">
                ALX is a platform where travelers can discover and book unique,
                comfortable, and affordable lodging options worldwide. From cozy
                city apartments and tranquil countryside retreats to exotic
                beachside villas, ALX connects you with the perfect place to
                stay for any trip.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Explore</h2>
              <ul className="space-y-1">
                <li>Apartments in Dubai</li>
                <li>Hotels in New York</li>
                <li>Villa in Spain</li>
                <li>Mansion in Indonesia</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Company</h2>
              <ul className="space-y-1">
                <li>About us</li>
                <li>Blog</li>
                <li>Career</li>
                <li>Customers</li>
                <li>Brand</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Help</h2>
              <ul className="space-y-1">
                <li>Support</li>
                <li>Cancel booking</li>
                <li>Refunds Process</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between lg:flex-row ">
          <div className="text-sm mb-6 lg:mb-0">
            <h2>
              Some hotel requires you to cancel more than 24 hours before
              check-in.
              <span className="underline cursor-pointer ml-1 text-teal-700">
                Details here
              </span>
            </h2>
          </div>
          <div className="flex flex-row gap-4 text-sm ">
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Policy service</span>
            <span className="cursor-pointer">Cookies Policy</span>
            <span className="cursor-pointer hidden md:flex">Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
