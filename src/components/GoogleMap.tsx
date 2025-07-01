
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
    if (!mapRef.current || map) return; // Prevent re-initialization

    // Initialize map with optimized settings
    const leafletMap = L.map(mapRef.current, {
      preferCanvas: true,
      zoomAnimation: false, // Disable animations for faster performance
      fadeAnimation: false,
      markerZoomAnimation: false,
      zoomControl: true,
      attributionControl: false // Remove attribution for cleaner look
    }).setView([39.8283, -98.5795], 5);

    // Add tile layer with optimized settings
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      tileSize: 256,
      zoomOffset: 0,
      updateWhenIdle: true, // Only update when idle for better performance
      keepBuffer: 1 // Reduce buffer for faster loading
    }).addTo(leafletMap);

    setMap(leafletMap);

    // Add markers
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

    // Set up locate function
    (window as any).mapLocateOffice = (office: Office) => {
      // Scroll to map first
      if (mapRef.current) {
        mapRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
      
      // Use setView for instant positioning
      leafletMap.setView([office.lat, office.lng], 15);
      
      // Find and open popup
      const marker = newMarkers.find((m, index) => offices[index].id === office.id);
      if (marker) {
        // Small delay to ensure map has moved before opening popup
        setTimeout(() => {
          marker.openPopup();
        }, 100);
      }
      onLocateOffice(office);
    };

    // Cleanup function
    return () => {
      if (leafletMap) {
        leafletMap.remove();
      }
      delete (window as any).mapLocateOffice;
    };
  }, []); // Remove dependencies to prevent re-initialization

  return (
    <div className="space-y-4">
      <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg" />
    </div>
  );
};
