import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

// Component for the Work Locations section with Google Maps integration
export default function WorkLocations() {
  // Map center coordinates (Northwest London)
  const mapCenter = { lat: 51.5549, lng: -0.2800 };
  
  // Location pins with coordinates
  const locations = [
    { name: "Watford", lat: 51.6565, lng: -0.3903 },
    { name: "Enfield", lat: 51.6515, lng: -0.0800 },
    { name: "Luton", lat: 51.8787, lng: -0.4200 }
  ];

  // List of service areas
  const serviceAreas = [
    ["Harrow", "Golders Green"],
    ["Pinner", "Hendon"],
    ["Watford", "Northwood"],
    ["Wembley", "Pinner"],
    ["Kenton", "Uxbridge"],
    ["Uxbridge", "Ickenham"],
    ["Ickenham", "Finchley"],
    ["Hatchend", "Mill Hill"],
    ["Stanmore", "Central London"]
  ];

  // Function to open location in Google Maps
  const openInGoogleMaps = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };

  // Function to open the map center in Google Maps when clicking on the map background
  const openMapCenter = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${mapCenter.lat},${mapCenter.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col md:flex-row bg-white max-w-6xl py-12 mx-auto p-4 gap-8">
      {/* Map Section */}
      <div className="w-full md:w-1/2 relative">
        <div 
          className="rounded-lg overflow-hidden h-80 md:h-full relative cursor-pointer"
          onClick={openMapCenter}
        >
          {/* Google Maps Static Image (clickable) */}
          <div className="absolute inset-0 bg-green-50">
            <iframe
              className="w-full h-full border-none"
              src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY_HERE&center=${mapCenter.lat},${mapCenter.lng}&zoom=10&maptype=roadmap&style=element:geometry%7Ccolor:0xe8f5e9&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:water%7Celement:geometry%7Ccolor:0xc8e6c9`}
              allowFullScreen
              loading="lazy"
              title="Google Map of Service Areas"
            ></iframe>
          </div>
          
          {/* Location Pins */}
          {locations.map((location, index) => {
            // Calculate position based on the difference from center coordinates
            // These values may need adjustment based on the actual map zoom and dimensions
            const topPosition = 50 - ((location.lat - mapCenter.lat) * 25);
            const leftPosition = 50 + ((location.lng - mapCenter.lng) * 25);
            
            return (
              <div 
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{
                  top: `${topPosition}%`,
                  left: `${leftPosition}%`,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  openInGoogleMaps(location);
                }}
              >
                <MapPin size={24} color="red" fill="red" />
              </div>
            );
          })}
          
          {/* Note: In production, replace the iframe with a proper Google Maps React component */}
          {/* The static iframe is used here as a placeholder */}
        </div>
        <div className="text-xs text-gray-500 mt-1">Click on map or pins to open Google Maps</div>
      </div>
      
      {/* Text Content Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-serif mb-4 text-gray-900">Our Work Locations</h2>
        
        <p className="mb-6 text-gray-700">
          At Curtains & More, we proudly serve homes and businesses 
          across North West London and beyond. From Harrow to Central 
          London, we're happy to travel to you—offering bespoke curtains, 
          blinds, and soft furnishings with a personal touch.
        </p>
        
        <p className="mb-4 text-gray-700 font-medium">We regularly cover areas including:</p>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {serviceAreas.map((pair, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center">
                <span className="mr-2 text-gray-900">•</span>
                <span className="text-gray-800">{pair[0]}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-gray-900">•</span>
                <span className="text-gray-800">{pair[1]}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}