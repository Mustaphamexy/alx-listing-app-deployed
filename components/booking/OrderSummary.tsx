const OrderSummary: React.FC<{ bookingDetails: any }> = ({
  bookingDetails,
}) => (
  <div className="bg-white p-6 shadow-lg rounded-lg h-fit mx-auto">
    <h2 className="text-2xl font-bold mb-6">Review Order Details</h2>
    
    {/* Property Image */}
    <div className="mb-6">
      <img
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Villa Arrecife Beach House"
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>

    {/* Property Details */}
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">{bookingDetails.propertyName}</h3>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="font-semibold">4.76</span>
        <span className="text-gray-500 ml-1">( 345 reviews )</span>
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <span>{bookingDetails.startDate}</span>
        <span className="mx-2">•</span>
        <span>{bookingDetails.startTime}</span>
        <span className="mx-2">•</span>
        <span>{bookingDetails.totalNights} Nights</span>
      </div>
    </div>

    {/* Pricing Details */}
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Booking fee</span>
        <span className="font-semibold">${bookingDetails.bookingFee.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-semibold">${bookingDetails.price.toFixed(2)}</span>
      </div>
      
      <hr className="border-gray-200" />
      
      <div className="flex justify-between items-center text-lg font-bold">
        <span>Grand Total</span>
        <span>${(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}</span>
      </div>
    </div>
  </div>
);

export default OrderSummary;
