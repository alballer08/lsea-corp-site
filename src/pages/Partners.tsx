import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  {
    id: 'y-bird-airways',
    name: 'Y Bird Airways',
    description: 'Leading aviation services provider with comprehensive flight operations and aircraft maintenance solutions.',
    image: '/placeholder.svg',
    website: 'https://ybirdairways.com',
    industry: 'Aviation',
    services: ['Aircraft Maintenance', 'Flight Operations', 'Ground Support']
  },
  {
    id: 'wow-design',
    name: 'WOW Design',
    description: 'Creative design agency specializing in brand identity, digital experiences, and innovative marketing solutions.',
    image: '/placeholder.svg',
    website: 'https://wowdesign.com',
    industry: 'Design & Marketing',
    services: ['Brand Identity', 'Web Design', 'Digital Marketing']
  }
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPartners = () => {
    const start = currentIndex * itemsPerPage;
    return partners.slice(start, start + itemsPerPage);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Full Width Image */}
      <section className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our Partners
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional results and drive innovation together.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid with Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-600">
              {currentIndex + 1} of {totalPages}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getCurrentPartners().map((partner) => (
              <Link
                key={partner.id}
                to={`/partners/${partner.id}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                        {partner.name}
                      </h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {partner.industry}
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 font-arial">
                    {partner.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {partner.services.map((service, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;