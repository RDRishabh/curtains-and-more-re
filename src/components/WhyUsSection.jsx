// src/components/WhyUsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-[#f4f1ea]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center text-gray-800 mb-6 font-quincy">
          WHY US?
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 text-[#d2c0a6] text-sm sm:text-base font-lovato">
          <span className="uppercase">FREE QUOTES</span>
          <span className="text-xl">•</span>
          <span className="uppercase">LOCALLY OWNED</span>
          <span className="text-xl">•</span>
          <span className="uppercase">QUALITY SERVICE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Curtains */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/png/whyus-01.png"
              alt="Curtains"
              className="mb-4 w-full h-auto max-w-[260px] object-cover"
            />
            <h3 className="text-xl text-gray-700 mb-3 font-lovato">Curtains</h3>
            <Link
              to="/curtains"
              className="bg-[#a6b4c2] text-white py-2 px-6 uppercase text-sm tracking-wider hover:bg-[#93a1af] transition font-lovato"
            >
              More Info
            </Link>
          </div>

          {/* Blinds */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/png/whyus-02.png"
              alt="Blinds"
              className="mb-4 w-full h-auto max-w-[260px] object-cover"
            />
            <h3 className="text-xl text-gray-700 mb-3 font-lovato">Blinds</h3>
            <Link
              to="/blinds"
              className="bg-[#a6b4c2] text-white py-2 px-6 uppercase text-sm tracking-wider hover:bg-[#93a1af] transition font-lovato"
            >
              More Info
            </Link>
          </div>

          {/* Shutters */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/png/whyus-03.png"
              alt="Shutters"
              className="mb-4 w-full h-auto max-w-[260px] object-cover"
            />
            <h3 className="text-xl text-gray-700 mb-3 font-lovato">Shutters</h3>
            <Link
              to="/shutters"
              className="bg-[#a6b4c2] text-white py-2 px-6 uppercase text-sm tracking-wider hover:bg-[#93a1af] transition font-lovato"
            >
              More Info
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl italic text-gray-700 mb-2 font-lovato">
            <span className='font-serif'>"</span>Simplicity is the ultimate form of sophistication.<span className='font-serif'>"</span>
          </p>
          <p className="text-gray-600 font-lovato">- Leonardo da Vinci</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
