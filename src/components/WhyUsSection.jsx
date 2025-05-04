// src/components/WhyUsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-[#f4f1ea]">
        
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center text-gray-800 mb-6">WHY US?</h2>
        
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="text-[#d2c0a6] flex items-center">
            <span className="uppercase text-sm">FREE QUOTES</span>
          </div>
          <div className="text-[#d2c0a6] flex items-center">
            <span className="text-xl mx-2">•</span>
          </div>
          <div className="text-[#d2c0a6] flex items-center">
            <span className="uppercase text-sm">LOCALLY OWNED</span>
          </div>
          <div className="text-[#d2c0a6] flex items-center">
            <span className="text-xl mx-2">•</span>
          </div>
          <div className="text-[#d2c0a6] flex items-center">
            <span className="uppercase text-sm">QUALITY SERVICE</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Curtains */}
          <div className="flex flex-col items-center">
            <div className="mb-4 overflow-hidden">
              <img 
                src="/png/whyus-01.png" 
                alt="Curtains" 
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl text-gray-700 mb-3">Curtains</h3>
            <Link 
              to="/curtains" 
              className="bg-[#a6b4c2] text-white py-2 px-6 uppercase text-sm tracking-wider"
            >
              MORE INFO
            </Link>
          </div>
          
          {/* Blinds */}
          <div className="flex flex-col items-center">
            <div className="mb-4 overflow-hidden">
              <img 
                src="/png/whyus-02.png" 
                alt="Blinds" 
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl text-gray-700 mb-3">Blinds</h3>
            <Link 
              to="/blinds" 
              className="bg-[#a6b4c2] text-white py-2 px-6 uppercase text-sm tracking-wider"
            >
              MORE INFO
            </Link>
          </div>
          
          {/* Shutters */}
          <div className="flex flex-col items-center">
            <div className="mb-4 overflow-hidden">
              <img 
                src="/png/whyus-03.png" 
                alt="Shutters" 
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl text-gray-700 mb-3">Shutters</h3>
            <Link 
              to="/shutters" 
              className="bg-[#a6b4c2] text-white py-2 px-6 uppercase text-sm tracking-wider"
            >
              MORE INFO
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl italic text-gray-700 mb-2">" Simplicity is the ultimate form of sophistication."</p>
          <p className="text-gray-600">- LEONARDO VINCI</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;