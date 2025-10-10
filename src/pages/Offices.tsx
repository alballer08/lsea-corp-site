
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GoogleMap } from '@/components/GoogleMap';

const Offices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedState, setSelectedState] = useState('all');

  useEffect(() => {
    document.title = "LSEA | Offices";
    setIsVisible(true);
  }, []);

  const offices = [
    { id: 1, name: 'Montville, New Jersey Office', address: '150 River Road, Suite E2', city: 'New Jersey', state: 'NJ', phone: '(973) 588-3122', email: 'info@lseacorp.com', lat: 40.891025, lng: -74.370403 },
    { id: 2, name: 'Cherry Hill, New Jersey Office', address: '1101 North Kings Highway, Suite 311', city: 'Cherry Hill', state: 'NJ', phone: '(856) 330-4613', email: 'info@lseacorp.com', lat: 39.920354, lng: -75.002733 },
    { id: 3, name: 'New York Office', address: '1350 6th Avenue, West 55th Street, 3rd Floor', city: 'New York', state: 'NY', phone: '(973) 588-3123', email: 'info@lseacorp.com', lat: 40.763041, lng: -73.978132 },
    { id: 4, name: 'Long Island, New York Office', address: '513 Valley Lane', city: 'Valley Stream', state: 'NY', phone: '(973) 588-3122', email: 'info@lseacorp.com', lat: 40.647811, lng: -73.721406 },
    { id: 5, name: 'Pennsylvania Office', address: '228 Moore Street', city: 'Philadelphia', state: 'PA', phone: '(267) 273-4769', email: 'info@lseacorp.com', lat: 39.925500, lng: -75.150530 },
    { id: 6, name: 'Connecticut Office', address: '120 Kane Street, Suite C8', city: 'West Hartford', state: 'CT', phone: '(203) 314 5770', email: 'info@lseacorp.com', lat: 41.751044, lng: -72.718931 },
  ];

  const filteredOffices = selectedState === 'all' 
    ? offices 
    : offices.filter(office => office.state === selectedState);

  const states = [...new Set(offices.map(office => office.state))];

  const handleLocateOffice = (office: any) => {
    console.log('Locating office:', office.name);
    // The map component handles the actual location and scrolling
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh]">
        <img
          src="/images/nybuildings.jpg"
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
                className={`bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-5">
                  {office.name}
                </h3>
                <div className="space-y-3 mb-5 flex-grow">
                  <p className="font-arial text-base text-gray-600">
                    <strong>Address:</strong> {office.address}
                  </p>
                  <p className="font-arial text-base text-gray-600">
                    <strong>City:</strong> {office.city}, {office.state}
                  </p>
                  <p className="font-arial text-base text-gray-600">
                    <strong>Phone:</strong> {office.phone}
                  </p>
                  <p className="font-arial text-base text-gray-600">
                    <strong>Email:</strong> {office.email}
                  </p>
                </div>
                <Button 
                  className="w-full font-arial"
                  onClick={() => {
                    if ((window as any).mapLocateOffice) {
                      (window as any).mapLocateOffice(office);
                    }
                  }}
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
