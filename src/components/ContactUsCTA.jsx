import React from 'react';

export default function ContactUsCTA() {
  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById('contact');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Image - using placeholder as we can't include external images */}
      <div className="w-full h-96 bg-gray-200 relative">
        {/* Placeholder for the bedroom image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/png/Image08.png")',
            backgroundPosition: "center 40%"
          }}
          aria-label="Modern bedroom with beige walls, wooden headboard, floor mirror, and hanging pendant lights"
        />

        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CTA Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="max-w-md w-full px-6 py-8 text-center">
            <div className="bg-black/40 bg-opacity-80 p-6 rounded-sm">
              <h2 className="text-white text-3xl font-medium font-quincy">
                Book your free measure and quote
              </h2>
            </div>

            <button
              className="bg-[#A7B4BF] text-gray-700 -mt-4 px-8 py-3 font-medium font-lovato transition-colors duration-300 uppercase tracking-wide cursor-pointer"
              onClick={scrollToContactForm} // Changed this line
            >
              CONTACT US NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}