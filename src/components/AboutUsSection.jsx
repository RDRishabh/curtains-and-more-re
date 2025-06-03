import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); // Scrolls to the top of the page
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Column - Added max-h constraint and object-fit properties */}
          <div className="flex items-center justify-center">
            <div className="max-h-[600px] overflow-hidden rounded-2xl">
              <img 
                src="https://res.cloudinary.com/dxaycpvto/image/upload/v1748964567/aboutus123_q7gghq.jpg" 
                alt="Gray Curtains" 
                className="w-full h-auto  shadow-md object-cover "
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content Column - Using flex to center content vertically */}
          <div className="flex flex-col justify-center font-lovato">
            <h2 className="text-3xl font-medium text-gray-800 mb-6 font-quincy">OUR STORY</h2>
            
            <p className="text-gray-700 mb-4">
              Our inspired collections of fabrics, cushion covers, tiebacks, wall art and 
              more look stunning in contemporary or period settings. We aim to create
              beautiful, enduring pieces for your home.
            </p>
            
            <p className="text-gray-700 mb-4">
              We supply our comprehensive ranges of very high-quality products directly
              to the home owners and interior designers in London. With over hundreds of
              lines and fabrics from cotton, linen, silk, velvet etc you will be spoilt for
              choice.
            </p>
            
            <p className="text-gray-700 mb-6">
              For beautiful made to measure curtains in Harrow, Kenton, Pinner, Watford,
              Wembley, Northwood, Finchley, Edgware, Enfield, Hayes, Slough and around
              London, give us a call and see how we could help you.
            </p>
            
            <div>
              <Link 
                to="/our-story" 
                onClick={scrollToTop} // Add this onClick handler
                className="inline-block bg-[#f0ebe2] text-gray-700 py-2 px-10 border rounded-sm border-[#e5dfd4] hover:bg-[#e5dfd4] hover:text-gray-800 text-sm font-medium transition duration-300 ease-in-out shadow-md"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;