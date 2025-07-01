
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Office {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
}

interface GoogleMapProps {
  offices: Office[];
  onLocateOffice: (office: Office) => void;
  apiKey?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ offices, onLocateOffice }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [apiKey, setApiKey] = useState('');
  const [needsApiKey, setNeedsApiKey] = useState(true);

  const initializeMap = async (key: string) => {
    if (!mapRef.current || !key) return;

    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        libraries: ['maps']
      });

      await loader.load();

      const googleMap = new google.maps.Map(mapRef.current, {
        center: { lat: 39.8283, lng: -98.5795 },
        zoom: 5,
      });

      setMap(googleMap);

      // Add markers for each office
      const newMarkers = offices.map((office) => {
        const marker = new google.maps.Marker({
          position: { lat: office.lat, lng: office.lng },
          map: googleMap,
          title: office.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; min-width: 200px;">
              <h3 style="margin: 0 0 10px 0; font-weight: bold; font-size: 16px;">${office.name}</h3>
              <p style="margin: 5px 0; font-size: 14px;"><strong>Address:</strong> ${office.address}</p>
              <p style="margin: 5px 0; font-size: 14px;"><strong>City:</strong> ${office.city}, ${office.state}</p>
              <p style="margin: 5px 0; font-size: 14px;"><strong>Phone:</strong> ${office.phone}</p>
              <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> ${office.email}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(googleMap, marker);
        });

        return marker;
      });

      setMarkers(newMarkers);
      setNeedsApiKey(false);

      // Expose locate function to parent component
      (window as any).mapLocateOffice = (office: Office) => {
        googleMap.setCenter({ lat: office.lat, lng: office.lng });
        googleMap.setZoom(15);
        
        // Find and show info window for the marker
        const marker = newMarkers.find((m, index) => offices[index].id === office.id);
        if (marker) {
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; min-width: 200px;">
                <h3 style="margin: 0 0 10px 0; font-weight: bold; font-size: 16px;">${office.name}</h3>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Address:</strong> ${office.address}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>City:</strong> ${office.city}, ${office.state}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Phone:</strong> ${office.phone}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> ${office.email}</p>
              </div>
            `,
          });
          infoWindow.open(googleMap, marker);
        }
        onLocateOffice(office);
      };

    } catch (error) {
      console.error('Error loading Google Maps:', error);
      setNeedsApiKey(true);
    }
  };

  useEffect(() => {
    return () => {
      delete (window as any).mapLocateOffice;
    };
  }, []);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      initializeMap(apiKey.trim());
    }
  };

  if (needsApiKey) {
    return (
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Google Maps API Key Required</h3>
          <p className="text-blue-700 mb-4">
            To display the interactive map, please enter your Google Maps API key below. 
            You can get one from the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="underline">Google Cloud Console</a>.
          </p>
          <form onSubmit={handleApiKeySubmit} className="flex gap-2">
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Google Maps API key"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Load Map
            </button>
          </form>
        </div>
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Map will appear here once API key is provided</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg" />
    </div>
  );
};
