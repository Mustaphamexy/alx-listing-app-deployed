import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ReviewProps } from '@/interfaces';
import axios from "axios";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching Reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="px-4 sm:px-6 mt-8 text-gray-600">Loading reviews...</p>;
  }

  if (error) {
    return <p className="px-4 sm:px-6 mt-8 text-red-500">{error}</p>;
  }

  return (
    <div className="px-4 sm:px-6 mt-8 bg-white">
      <div className="flex items-center gap-2 mb-8">
        <FaStar className="w-5 h-5 text-yellow-500" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          {calculateAverageRating(reviews).toFixed(2)}
        </h3>
        <span className="text-gray-600">({reviews.length} reviews)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6">
            <div className="flex items-start gap-4 mb-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{getTimeAgo(review.date)}</span>
                  <span>•</span>
                  <span>{review.tripType || 'Family trip'}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to format dates
const getTimeAgo = (date?: string) => {
  if (!date) {
    const months = ['March', 'August', 'January'];
    const years = ['2024', '2023'];
    return `${months[Math.floor(Math.random() * months.length)]} ${
      years[Math.floor(Math.random() * years.length)]
    }`;
  }
  return date;
};

const calculateAverageRating = (reviews: ReviewProps[]) => {
  if (!reviews.length) return 0;
  const ratings = reviews.map((r) => parseFloat(r.rating) || 0);
  return ratings.reduce((a, b) => a + b, 0) / ratings.length;
};

export default ReviewSection;
