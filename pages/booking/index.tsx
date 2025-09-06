import BookingForm from '@/components/booking/BookingForm'
import OrderSummary from "@/components/booking/OrderSummary"

export default function BookingPage() {
    const bookingDetails = {
        propertyName : "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",

    };

    return(
        <div className='container mx-auto p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='col-span-2 '>
                    <BookingForm />
                </div>
                <div className='col-span-1'>
                    <OrderSummary bookingDetails={bookingDetails} />
                </div>
            </div>
        </div>
    );
};