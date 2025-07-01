
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

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

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ offices, onLocateOffice, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [userApiKey, setUserApiKey] = useState(apiKey || '');
  const [showApiInput, setShowApiInput] = useState(!apiKey);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const googleMap = new window.google.maps.Map(mapRef.current, {
      zoom: 5,
      center: { lat: 39.8283, lng: -98.5795 }, // Center of USA
      mapTypeId: 'roadmap',
    });

    setMap(googleMap);

    // Add markers for each office
    const newMarkers = offices.map((office) => {
      const marker = new window.google.maps.Marker({
        position: { lat: office.lat, lng: office.lng },
        map: googleMap,
        title: office.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 10px 0; font-weight: bold;">${office.name}</h3>
            <p style="margin: 5px 0;"><strong>Address:</strong> ${office.address}</p>
            <p style="margin: 5px 0;"><strong>City:</strong> ${office.city}, ${office.state}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${office.phone}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${office.email}</p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(googleMap, marker);
      });

      return marker;
    });

    setMarkers(newMarkers);
  };

  const loadGoogleMapsScript = () => {
    if (window.google) {
      initializeMap();
      return;
    }

    window.initMap = initializeMap;
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${userApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  useEffect(() => {
    if (userApiKey && !showApiInput) {
      loadGoogleMapsScript();
    }
  }, [userApiKey, showApiInput]);

  const handleLocateOffice = (office: Office) => {
    if (map) {
      map.setCenter({ lat: office.lat, lng: office.lng });
      map.setZoom(15);
      
      // Find and trigger the marker
      const marker = markers.find((m, index) => offices[index].id === office.id);
      if (marker) {
        window.google.maps.event.trigger(marker, 'click');
      }
    }
    onLocateOffice(office);
  };

  if (showApiInput) {
    return (
      <div className="bg-gray-100 h-96 rounded-lg flex flex-col items-center justify-center p-8">
        <h3 className="font-montserrat text-xl font-semibold mb-4">Google Maps Integration</h3>
        <p className="text-gray-600 mb-4 text-center">
          To display the interactive map, please enter your Google Maps API key:
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Google Maps API key"
            value={userApiKey}
            onChange={(e) => setUserApiKey(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            onClick={() => setShowApiInput(false)}
            disabled={!userApiKey.trim()}
            className="whitespace-nowrap"
          >
            Load Map
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Get your API key at{' '}
          <a 
            href="https://console.cloud.google.com/apis/credentials" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Cloud Console
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {offices.map((office) => (
          <Button
            key={office.id}
            variant="outline"
            size="sm"
            onClick={() => handleLocateOffice(office)}
            className="text-left justify-start"
          >
            📍 {office.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
