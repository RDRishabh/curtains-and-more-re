import React from 'react';

/**
 * HeroSection component displays a full-width hero section with a background image and overlayed text.
 *
 * @param {Object} props
 * @param {string} props.image - The path or URL of the background image
 * @param {string} props.text - The text content to display in the hero section
 */
export default function HeroSection({ image, text }) {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 h-[80vh] bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative h-[80vh] flex items-center justify-center z-10">
        <div className="text-center px-6">
          <div className="rounded-sm">
            <h2 className="text-white text-3xl font-semibold font-quincy">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
