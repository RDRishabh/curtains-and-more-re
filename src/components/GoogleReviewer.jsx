import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const GoogleReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const reviews = [
    {
      name: "Captain Leod",
      date: "a month ago",
      rating: 5,
      comment: "Excellent experience with premium blinds uk, very fast installation had the job done in no time, also very friendly and professional, would recommend!"
    },
    {
      name: "Lynette Orchard",
      date: "a month ago",
      rating: 5,
      comment: "Adam was very helpful, friendly. He even put up the fittings for my curtain poles in living and bedroom. Amazing young man."
    },
    {
      name: "Maria Ellis",
      date: "a month ago",
      rating: 5,
      comment: "Ordered the blinds only a week to wait! Loved it, staff highly recommended!"
    },
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleReviews = () => {
    let result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 px-4 bg-[#f3efeb]">
      <div className="max-w-6xl mx-auto">
        {/* Google Stars and Logo */}
        <div className="flex flex-col items-center mb-12">
          <img src="/png/google.png" alt="Google" className="h-8 mb-4" />
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex flex-col sm:flex-row gap-4 px-10">
            {visibleReviews().map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex-1 min-w-0"
              >
                {/* User info */}
                <div className="flex items-center mb-3">
                  <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-quincy font-medium text-base">{review.name}</h4>
                    <div className="text-gray-500 text-sm font-lovato">{review.date}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-gray-700 font-lovato">{review.comment}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSlider;
