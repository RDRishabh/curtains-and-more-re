import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const mapCenter = { lat: 51.5549, lng: -0.2800 };

const locations = [
  { name: "Watford", lat: 51.6565, lng: -0.3903, link: "https://maps.google.com?q=51.6565,-0.3903" },
  { name: "Enfield", lat: 51.6515, lng: -0.0800, link: "https://maps.google.com?q=51.6515,-0.0800" },
  { name: "Luton", lat: 51.8787, lng: -0.4200, link: "https://maps.google.com?q=51.8787,-0.4200" },
];

const serviceAreas = [
  ["Harrow", "Golders Green"],
  ["Pinner", "Hendon"],
  ["Watford", "Northwood"],
  ["Wembley", "Pinner"],
  ["Kenton", "Uxbridge"],
  ["Uxbridge", "Ickenham"],
  ["Ickenham", "Finchley"],
  ["Hatchend", "Mill Hill"],
  ["Stanmore", "Central London"],
];

const WorkLocations = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD7cHciPt3oHoRP9PyfSjBAEX1f36AVmoc"
  });

  const [activeLocation, setActiveLocation] = useState(null);

  if (!isLoaded) return (
    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading map...</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Service Locations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide services across North London and surrounding areas. Find your nearest location below.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Interactive Google Map */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-4 rounded-xl shadow-lg h-full">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={10}
                options={{ 
                  disableDefaultUI: false,
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: true,
                  styles: [
                    {
                      featureType: "poi",
                      elementType: "labels",
                      stylers: [{ visibility: "off" }]
                    }
                  ]
                }}
              >
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={location.name}
                    onClick={() => setActiveLocation(location)}
                    animation={window.google?.maps.Animation.DROP}
                  />
                ))}
              </GoogleMap>
              
              {activeLocation && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-blue-800">{activeLocation.name}</h4>
                    <p className="text-sm text-gray-600">Lat: {activeLocation.lat.toFixed(4)}, Lng: {activeLocation.lng.toFixed(4)}</p>
                  </div>
                  <a 
                    href={activeLocation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                  >
                    <Navigation size={16} />
                    <span>Directions</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Service Areas Card */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white p-6 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Service Areas</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {serviceAreas.flat().map((area, idx) => (
                  <div key={idx} className="flex items-center py-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkLocations;