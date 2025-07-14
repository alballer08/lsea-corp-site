
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
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
    window.scrollTo(0, 0);
  };

  const clients = [
    {
      id: 1,
      name: 'Port Authority of NY & NJ',
      industry: 'Transportation',
      description: 'Leading transportation authority managing airports, bridges, tunnels, and seaports in the New York-New Jersey region.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.panynj.gov/'
    },
    {
      id: 2,
      name: 'New Jersey Department of Transportation',
      industry: 'Government',
      description: 'State agency responsible for transportation issues and policy in New Jersey, including highways, public transit, and aviation.',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.state.nj.us/transportation/'
    },
    {
      id: 3,
      name: 'New York State Department of Transportation',
      industry: 'Government',
      description: 'State agency responsible for the development and operation of highways, railroads, mass transit systems, ports, and aviation facilities.',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.dot.ny.gov/'
    },
    {
      id: 4,
      name: 'NJ Transit',
      industry: 'Transportation',
      description: 'Public transportation corporation serving the greater New York metropolitan area.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.njtransit.com/'
    },
    {
      id: 5,
      name: 'Metropolitan Transportation Authority',
      industry: 'Transportation',
      description: 'Public benefit corporation responsible for public transportation in the New York City metropolitan area.',
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.mta.info/'
    },
    {
      id: 6,
      name: 'New Jersey Turnpike Authority',
      industry: 'Transportation',
      description: 'State agency responsible for maintaining and operating the New Jersey Turnpike and Garden State Parkway.',
      image: 'https://images.unsplash.com/photo-1558618047-6c0c2e7c5c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.state.nj.us/turnpike/'
    },
    {
      id: 7,
      name: 'Delaware River Port Authority',
      industry: 'Transportation',
      description: 'Bi-state agency that operates four major bridges connecting Pennsylvania and New Jersey.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      website: 'https://www.drpa.org/'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
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
