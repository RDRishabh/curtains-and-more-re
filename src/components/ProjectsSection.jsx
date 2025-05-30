import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = ({ title, intro, items, galleryImages }) => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);
  const carouselRef = useRef(null);

  // Toggle function for dropdowns
  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  // Carousel scroll functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading and Introduction */}
      <h1 className="text-3xl font-quincy mb-6 text-gray-800">{title}</h1>
      
      <div className="mb-8 space-y-4">
        {intro.map((paragraph, i) => (
          <p key={i} className="text-gray-700 font-lovato">
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Dropdown Sections */}
      <div className="space-y-3 mb-10 font-lovato">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
            {/* Dropdown Header */}
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left"
              onClick={() => toggleDropdown(index)}
            >
              <span className="font-medium text-gray-800">{item.title}</span>
              <ChevronDown 
                className={`transition-transform ${openDropdown === index ? 'transform rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            
            {/* Dropdown Content */}
            {openDropdown === index && (
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="">
                    <p className="text-gray-700 mb-4">{item.content}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Image Carousel */}
      <div className="relative">
        {/* Carousel Navigation */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button 
            onClick={scrollLeft}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button 
            onClick={scrollRight}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef} 
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-none w-64 md:w-80 snap-start"
            >
              <img 
                src={image.src} 
                alt={image.alt || `Example ${index + 1}`} 
                className="w-full h-48 md:h-60 object-cover rounded"
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom styles for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;