import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const BookingSection: React.FC<{price: number}> = ({price}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const nights = 7; // Default nights for calculation
  const weeklyDiscount = 40;
  const serviceFee = 33;
  const subtotal = price * nights;
  const total = subtotal - weeklyDiscount + serviceFee;

  return (
    <>
      {/* Desktop Booking Card */}
      <div className='hidden lg:block bg-white p-6 shadow-lg rounded-xl border border-gray-200'>
        <div className='flex items-baseline gap-2 mb-6'>
          <h3 className='text-2xl font-bold text-gray-900'>${price.toLocaleString()}</h3>
          <span className='text-gray-600'>/night</span>
        </div>

        {/* Date Inputs */}
        <div className='border-t border-gray-300  overflow-hidden mb-4'>
          <div className='flex flex-col'>
            <div className='p-3 '>
              <label className='block text-xl font-bold text-gray-900 mb-1'>Check In</label>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className='w-full text-sm outline-none border-2 p-4 border-gray-500 shadow-md rounded-md' 
                placeholder='Add date'
              />
            </div>
            <div className='p-3'>
              <label className='block text-xl font-bold text-gray-900 mb-1'>Check Out</label>
              <input 
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-sm outline-none border-2 p-4 border-gray-500 shadow-md rounded-md" 
                placeholder='Add date'
              />
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className='space-y-3 mb-6'>
          <div className='flex justify-between text-gray-700'>
            <span>${price.toLocaleString()} x {nights} nights</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className='flex justify-between text-gray-700'>
            <span>Weekly discounts</span>
            <span className='text-green-600'>-${weeklyDiscount}</span>
          </div>
          <div className='flex justify-between text-gray-700'>
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </div>
        </div>

        <div className='border-t border-gray-200 pt-4 mb-6'>
          <div className='flex justify-between font-semibold text-gray-900'>
            <span>Total payment</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>

        <button className='w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors'>
          Reserve now
        </button>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-baseline gap-2'>
              <span className='text-xl font-bold text-gray-900'>${price.toLocaleString()}</span>
              <span className='text-gray-600'>/night</span>
            </div>
            <button className='text-sm text-gray-600 underline'>Add date</button>
          </div>
          <button className='bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors'>
            Reserve now
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingSection;