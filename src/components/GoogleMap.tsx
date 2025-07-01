
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const GoogleMap: React.FC<GoogleMapProps> = ({ offices, onLocateOffice }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const [markers, setMarkers] = useState<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map with faster loading options
    const leafletMap = L.map(mapRef.current, {
      preferCanvas: true, // Use canvas for better performance
      zoomAnimation: true,
      fadeAnimation: true,
      markerZoomAnimation: true
    }).setView([39.8283, -98.5795], 5);

    // Add OpenStreetMap tile layer with faster loading
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
      tileSize: 256,
      zoomOffset: 0,
      updateWhenIdle: false, // Load tiles while panning
      keepBuffer: 2 // Keep more tiles in memory
    }).addTo(leafletMap);

    setMap(leafletMap);

    // Add markers for each office
    const newMarkers = offices.map((office) => {
      const marker = L.marker([office.lat, office.lng]).addTo(leafletMap);
      
      const popupContent = `
        <div style="padding: 10px; min-width: 200px;">
          <h3 style="margin: 0 0 10px 0; font-weight: bold; font-size: 16px;">${office.name}</h3>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Address:</strong> ${office.address}</p>
          <p style="margin: 5px 0; font-size: 14px;"><strong>City:</strong> ${office.city}, ${office.state}</p>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Phone:</strong> ${office.phone}</p>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> ${office.email}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      return marker;
    });

    setMarkers(newMarkers);

    // Expose locate function to parent component with faster animation
    (window as any).mapLocateOffice = (office: Office) => {
      // Use setView for instant movement instead of flyTo
      leafletMap.setView([office.lat, office.lng], 15);
      
      // Find and open popup for the marker immediately
      const marker = newMarkers.find((m, index) => offices[index].id === office.id);
      if (marker) {
        marker.openPopup();
      }
      onLocateOffice(office);
    };

    // Cleanup function
    return () => {
      leafletMap.remove();
      delete (window as any).mapLocateOffice;
    };
  }, [offices, onLocateOffice]);

  return (
    <div className="space-y-4">
      <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg" />
    </div>
  );
};
