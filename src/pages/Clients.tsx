
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    document.title = "LSEA | Clients";
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const getCurrentClients = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % clients.length;
      result.push(clients[index]);
    }
    return result;
  };

  const handleLinkClick = () => {
    
  };

  const clients = [
    {
      id: 1,
      name: 'The Port Authority of New York and New Jersey',
      industry: 'Transportation',
      description: 'Bistate agency managing transportation infrastructure, including airports, bridges, tunnels, ports, and World Trade Center.',
      image: '/images/port-authority-ny-nj.png',
      website: 'https://www.panynj.gov/'
    },
    {
      id: 2,
      name: 'New Jersey Department of Transportation',
      industry: 'Government',
      description: 'State agency overseeing New Jersey’s transportation systems, including planning, engineering, maintenance, and transit.',
      image: '/images/njdot.jpg',
      website: 'https://www.state.nj.us/transportation/'
    },
    {
      id: 3,
      name: 'New Jersey Turnpike Authority',
      industry: 'Government',
      description: 'Agency managing New Jersey Turnpike and GSP, overseeing toll collection, maintenance, and roadway improvements.',
      image: '/images/njta.jpg',
      website: 'https://www.thruway.ny.gov/index.shtml?'
    },
    {
      id: 4,
      name: 'NJ Transit',
      industry: 'Transportation',
      description: 'Public transportation agency operating buses, trains, and light rail across New Jersey and into New York.',
      image: '/images/njtransit.jpg',
      website: 'https://www.njtransit.com/'
    },
    {
      id: 5,
      name: 'Delaware River Port Authority',
      industry: 'Transportation',
      description: 'Bistate agency managing bridges and public transit between New Jersey and Pennsylvania across the Delaware River.',
      image: '/images/drpa.jpg',
      website: 'https://www.drpa.org/'
    },
    {
      id: 6,
      name: 'Counties and Municipalities',
      industry: 'Transportation',
      description: 'Local governments managing roads, traffic, planning, and transportation services within specific counties and municipalities in NJ.',
      image: '/images/comu.jpg',
      website: 'https://www.nj.gov/nj/gov/county/'
    },
    {
      id: 7,
      name: 'HUD/Housing Authorities',
      industry: 'Transportation',
      description: 'Agencies providing affordable housing, community development, and assistance programs to low-income residents.',
      image: '/images/ushud.jpg',
      website: 'https://www.hud.gov/contactus/public-housing-contacts'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh]">
        <img
          src="/images/JCCityHall.jpg"
          alt="Our Clients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Clients
          </h1>
        </div>
      </section>

      {/* Clients Grid */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="font-arial text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are proud to work with government agencies, transportation authorities, and organizations 
              that shape the infrastructure of tomorrow. Our partnerships are built on trust, excellence, 
              and a shared commitment to public service.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-600">
              {currentIndex + 1} of {clients.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentClients().map((client, index) => (
              <div
                key={client.id}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat group-hover:text-blue-600 transition-colors">
                        {client.name}
                      </h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {client.industry}
                      </span>
                    </div>
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-4 font-arial line-clamp-3 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
