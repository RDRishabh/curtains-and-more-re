import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

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

  if (!isLoaded) return <div className="text-center p-10">Loading map...</div>;

  return (
    <section className="py-16 px-4 md:px-10 bg-white flex flex-row items-center">
        {/* Interactive Google Map */}
        <div className="w-[50%] h-[500px] rounded-lg overflow-hidden shadow-md">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={11}
            options={{ disableDefaultUI: true }}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
              />
            ))}
          </GoogleMap>
        </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 font-quincy">Work Locations</h2>

        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 font-lovato">
          <div>
            <h3 className="text-xl font-semibold mb-2 font-quincy">Service Areas:</h3>
            <ul className="list-disc list-inside text-gray-700">
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
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 font-quincy">Location Addresses:</h3>
            <ul className="text-gray-700">
              {locations.map((location, i) => (
                <li key={i} className="mb-1">
                  <a
                    href={location.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkLocations;
