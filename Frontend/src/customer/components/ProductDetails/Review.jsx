import React from 'react';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';

const Review = () => {
  const reviews = [
    { name: 'John Doe', rating: 4, review: 'This product is amazing! It exceeded my expectations and I would highly recommend it to anyone.',Date:'April 3,2025' },
    { name: 'Jane Smith', rating: 5, review: 'Excellent quality and fast shipping. Will definitely purchase again.' ,Date:'April 3,2025'},
    { name: 'Dubbler Samu', rating: 5, review: 'Excellent quality and fast shipping. Will definitely purchase again.',Date:'April 3,2025' },
  ];

  return (
    <div className="p-4 sm:px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section: Recent Reviews */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-semibold text-lg">Recent Reviews & Ratings</h1>
          {/* New Section: User Reviews */}
          <div className="mt-5 lg:mr-10">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-start mb-4">
                <Avatar sx={{ bgcolor: '#8634eb' }}>{review.name.charAt(0)}</Avatar>
                <div className="ml-4">
                  <h2 className="ml-2 text-base text-gray-900 font-medium">{review.name}</h2>
                  <h6 className='text-xs text-gray-400 ml-2'>{review.Date}</h6>
                  <div className="flex items-center">
                    <Rating name="read-only" value={review.rating} readOnly />
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-2">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Product Ratings */}
        <div className="w-full lg:w-2/5 pt-10 lg:pt-0">
          <h2 className="font-medium">Product Ratings</h2>
          <div className="flex gap-1 items-center">
            <Rating name="read-only" value={3.5} readOnly />
            <p className="text-xs text-gray-400">(123455 Ratings)</p>
          </div>
          <div className="p-4">
            {[
              { label: 'Excellent', color: 'bg-green-500', percentage: 70, reviews: '19259' },
              { label: 'Very Good', color: 'bg-blue-500', percentage: 50, reviews: '16259' },
              { label: 'Good', color: 'bg-yellow-500', percentage: 30, reviews: '12259' },
              { label: 'Average', color: 'bg-orange-500', percentage: 20, reviews: '10259' },
              { label: 'Poor', color: 'bg-red-500', percentage: 10, reviews: '9259' },
            ].map((rating) => (
              <div key={rating.label} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span>{rating.label}</span>
                  <span className='text-sm text-gray-400'>{rating.reviews}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${rating.color} h-2 rounded-full`}
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
