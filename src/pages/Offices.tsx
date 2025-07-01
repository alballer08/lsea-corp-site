
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GoogleMap } from '@/components/GoogleMap';

const Offices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedState, setSelectedState] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const offices = [
    { id: 1, name: 'New York Office', address: '123 Business Ave', city: 'New York', state: 'NY', phone: '(212) 555-0101', email: 'ny@lseacorp.com', lat: 40.7128, lng: -74.0060 },
    { id: 2, name: 'Los Angeles Office', address: '456 Corporate Blvd', city: 'Los Angeles', state: 'CA', phone: '(213) 555-0102', email: 'la@lseacorp.com', lat: 34.0522, lng: -118.2437 },
    { id: 3, name: 'Chicago Office', address: '789 Engineering St', city: 'Chicago', state: 'IL', phone: '(312) 555-0103', email: 'chicago@lseacorp.com', lat: 41.8781, lng: -87.6298 },
    { id: 4, name: 'Houston Office', address: '321 Professional Way', city: 'Houston', state: 'TX', phone: '(713) 555-0104', email: 'houston@lseacorp.com', lat: 29.7604, lng: -95.3698 },
    { id: 5, name: 'Atlanta Office', address: '654 Innovation Dr', city: 'Atlanta', state: 'GA', phone: '(404) 555-0105', email: 'atlanta@lseacorp.com', lat: 33.7490, lng: -84.3880 },
    { id: 6, name: 'Seattle Office', address: '987 Technology Ln', city: 'Seattle', state: 'WA', phone: '(206) 555-0106', email: 'seattle@lseacorp.com', lat: 47.6062, lng: -122.3321 },
  ];

  const filteredOffices = selectedState === 'all' 
    ? offices 
    : offices.filter(office => office.state === selectedState);

  const states = [...new Set(offices.map(office => office.state))];

  const handleLocateOffice = (office: any) => {
    console.log('Locating office:', office.name);
    // Call the global map locate function
    if ((window as any).mapLocateOffice) {
      (window as any).mapLocateOffice(office);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Our Offices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Offices
          </h1>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleMap 
            offices={offices} 
            onLocateOffice={handleLocateOffice}
          />

          {/* Filter */}
          <div className="mb-8 mt-12">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-48 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Filter by state" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 shadow-lg">
                <SelectItem value="all">All States</SelectItem>
                {states.map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffices.map((office, index) => (
              <div
                key={office.id}
                className={`bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-4">
                  {office.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="font-arial text-gray-600">
                    <strong>Address:</strong> {office.address}
                  </p>
                  <p className="font-arial text-gray-600">
                    <strong>City:</strong> {office.city}, {office.state}
                  </p>
                  <p className="font-arial text-gray-600">
                    <strong>Phone:</strong> {office.phone}
                  </p>
                  <p className="font-arial text-gray-600">
                    <strong>Email:</strong> {office.email}
                  </p>
                </div>
                <Button 
                  className="w-full font-arial"
                  onClick={() => handleLocateOffice(office)}
                >
                  Locate on Map
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offices;
