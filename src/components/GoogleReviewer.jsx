import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const GoogleReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const cardRefs = useRef([]);

  const reviews = [
  {
    name: "Mayuri Lodhia",
    date: "A month ago",
    rating: 5,
    comment: "Excellent!! Excellent!!! Excellent!! I was looking for new curtains for my elderly mother, and specific style, I had called several other stores and businesses none of which were able to help me find what I was looking for. I found Curtains and More on Google, I spoke with Pooja and sent her the pictures of what I was looking for, she called me the next day (Saturday) with exactly the colours and designs with a few other similar options. Pooja gave me an appointment time, which I was unable to attend, as she was unable to give me an appointment within a few days, she offered to come over and measure the curtains on a Sunday evening, gave me a quote the next day, I placed the order and asked Pooja if I could get the curtains within 4 weeks as my mother was due to return, Pooja said she would do her best. I was so surprised to hear back from her within 3 weeks, Pooja and the installer where on time, hung the curtains within a couple of hours and cleaned up after.. I am very very happy with curtains in my mothers living room and bedroom, more importantly my mother just loves the colour, design and the way they have been hung, very easy to open and close, the other ones where very hard for her. I would recommend CurtainsandMore to anyone!! Great product! Good service with updates! Value for money. Very happy with my new curtains and would recommend to family and friends!! Thank you Pooja - Curtains and More!!!",
    // link:"https://g.co/kgs/p57hRv9",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Kavi Shah",
    date: "2 months ago",
    rating: 5,
    comment: "Pooja and team helped install two sets of wave curtains in my apartment. The service was fantastic - Pooja responded quickly to queries, had great advice and lots of good fabric options. The curtains look fantastic and would highly recommend Curtains and More to all!",
    // link:"https://g.co/kgs/eCbXGnS",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Jacqueline Clark",
    date: "A month ago",
    rating: 5,
    comment: "Pooja did the most beautiful job on my flat. From our first meeting, she understood what we wanted and was able to advise perfectly. Extremely professional, we had all the confidence she would do an amazing job, and she did. We are delighted with the final result. Thank you Pooja.",
    // link:"https://g.co/kgs/7Mb8dS9",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Mehdiya Suleimani",
    date: "3 months ago",
    rating: 5,
    comment: "Pooja did the most beautiful job on my flat. From our first meeting, she understood what we wanted and was able to advise perfectly. Extremely professional, we had all the confidence she would do an amazing job, and she did. We are delighted with the final result. Thank you Pooja.",
    // link:"https://g.co/kgs/ckSyzxo",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Pankaj Bansal",
    date: "5 months ago",
    rating: 5,
    comment: "We got the blinds and curtains designed and installed by Pooja and we can recommend her without any hesitation. Pooja had an eye for detail and she was absolutely professional in her approach and work. She is 100% trustworthy and gave us some very valuable recommendations. We needed the blinds fitted before our holiday that left very little time and she made that possible by going out of her way and getting an electrician the night before and getting everything installed. We loved working with her and if we ever need more blinds or curtains, we will come straight to her. Thank you Pooja.",
    // link:"https://g.co/kgs/fk1H1tn",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Kish Bhudia",
    date: "A week ago",
    rating: 5,
    comment: "Pooja provided excellent & prompt service for roller blinds at our architectural studio. She has a great range of products and the fitting service was also very professionally executed.",
    // link:"https://g.co/kgs/JadGE3Y",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Rosie Rose",
    date: "3 months ago",
    rating: 5,
    comment: "We had electric roller blinds with UV protection made for our large shop window and electric Roman blinds for the living room sash windows. Pooja was really helpful with helping us choose the right materials. The choice of fabric is extensive with a huge array of materials/patterns. The blinds are well made and were fitted within 6 weeks. I would highly recommend Curtains & More for the home/business for bespoke blinds.",
    // link:"https://g.co/kgs/J3XSuyN",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Gopi Mistry",
    date: "10 months ago",
    rating: 5,
    comment: "We had Pooja come and fit curtains for my front room and for my mum's home. Amazing professional service from helping us choose the style and fabric to the final fitting. Pooja communicated well and executed as planned. We are both very happy with our curtains.",
    // link:"https://g.co/kgs/jhg8WfE",
    link:"https://g.co/kgs/uJ63sM"
  },
  {
    name: "Design Labs London",
    date: "A year ago",
    rating: 5,
    comment: "We were looking to tie up with a curtain maker for our Interior Design Projects as our usual curtain maker wouldn’t cover the area. After some quick google search we landed on Curtains & More. Pooja instantly understood what our requirements were and gave us a quote based on our fabric choices. Throughout the process we were kept informed and most importantly our installation deadlines were met, which was quite crucial. We found Pooja and her fitting team very friendly and easy to work with. Our clients are thrilled with the end result and so are we! We would highly recommend Curtains & More and will definitely be working with them in future for our Interior Design Projects.",
    // link:"https://g.co/kgs/iqGLxjG",
    link:"https://g.co/kgs/uJ63sM"
  }
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

  useEffect(() => {
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    const maxHeight = Math.max(...heights);
    cardRefs.current.forEach((ref) => {
      if (ref) ref.style.height = '${maxHeight}px';
    });
  }, [currentSlide, visibleCount]);

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

  // const truncateComment = (comment, url) => {
  //   return (
  //     <>
  //       {comment.slice(0, 200)}...
  //       <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 ml-1">
  //         <ExternalLink className="w-4 h-4" />
  //       </a>
  //     </>
  //   );
  // };

  const truncateComment = (comment, url) => {
    // Function to wrap symbols with sans-serif font
    const formatTextWithSymbols = (text) => {
      // Regex to match common symbols that might not render well in custom fonts
      const symbolRegex = /([^\w\s\.,;:!?\-'"()[\]{}@#$%^&*+=<>/\\|`~])/g;
      
      return text.split(symbolRegex).map((part, index) => {
        if (symbolRegex.test(part)) {
          return (
            <span key={index} className="font-sans">
              {part}
            </span>
          );
        }
        return part;
      });
    };

    return (
      <>
        {formatTextWithSymbols(comment.slice(0, 200))}...
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 ml-1">
          <ExternalLink className="w-4 h-4" />
        </a>
      </>
    );
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex flex-col sm:flex-row gap-4 px-10">
            {visibleReviews().map((review, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-white rounded-lg shadow-md p-6 flex-1 min-w-0 overflow-hidden"
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
                <p className="text-sm text-gray-700 font-lovato">
                  {truncateComment(review.comment, review.link)}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 cursor-pointer"
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