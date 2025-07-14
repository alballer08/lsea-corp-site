import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  {
    id: 'global-manufacturing',
    name: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    description: 'Leading manufacturer with operations across 15 countries, specializing in automotive components and industrial equipment.',
    logo: '/placeholder.svg',
    projectType: 'Digital Transformation',
    results: '40% efficiency increase',
    year: '2023'
  },
  {
    id: 'metropolitan-healthcare',
    name: 'Metropolitan Healthcare',
    industry: 'Healthcare',
    description: 'Regional healthcare network serving over 2 million patients with comprehensive medical services and facilities.',
    logo: '/placeholder.svg',
    projectType: 'System Integration',
    results: '60% faster patient processing',
    year: '2023'
  },
  {
    id: 'fintech-innovations',
    name: 'FinTech Innovations',
    industry: 'Financial Services',
    description: 'Cutting-edge financial technology company providing mobile banking solutions and payment processing.',
    logo: '/placeholder.svg',
    projectType: 'Security Infrastructure',
    results: '99.9% uptime achieved',
    year: '2022'
  },
  {
    id: 'sustainable-energy',
    name: 'Sustainable Energy Solutions',
    industry: 'Energy',
    description: 'Renewable energy provider managing wind and solar farms across the Pacific Northwest.',
    logo: '/placeholder.svg',
    projectType: 'Smart Grid Implementation',
    results: '25% cost reduction',
    year: '2022'
  },
  {
    id: 'educational-networks',
    name: 'Educational Networks',
    industry: 'Education',
    description: 'Educational technology platform serving K-12 schools with interactive learning management systems.',
    logo: '/placeholder.svg',
    projectType: 'Cloud Migration',
    results: '500K+ students reached',
    year: '2021'
  },
  {
    id: 'retail-giants',
    name: 'Retail Giants LLC',
    industry: 'Retail',
    description: 'Multi-channel retail corporation with both brick-and-mortar stores and e-commerce platforms.',
    logo: '/placeholder.svg',
    projectType: 'E-commerce Platform',
    results: '150% sales growth',
    year: '2021'
  },
  {
    id: 'aerospace-dynamics',
    name: 'Aerospace Dynamics',
    industry: 'Aerospace',
    description: 'Advanced aerospace engineering company specializing in satellite technology and space exploration systems.',
    logo: '/placeholder.svg',
    projectType: 'Mission Critical Systems',
    results: '100% mission success rate',
    year: '2022'
  }
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;
  const totalPages = clients.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentClients = () => {
    return [clients[currentIndex]];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Full Width Image */}
      <section className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our Clients
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Trusted by industry leaders across various sectors to deliver innovative solutions and exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid with Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Featured Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped organizations achieve their goals through innovative solutions and strategic partnerships.
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
              {currentIndex + 1} of {totalPages}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center">
            {getCurrentClients().map((client) => (
              <Link
                key={client.id}
                to={`/clients/${client.id}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group max-w-md mx-auto"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900 font-montserrat group-hover:text-blue-600 transition-colors">
                        {client.name}
                      </h3>
                      <span className="text-sm text-gray-500">{client.industry}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 font-arial line-clamp-3">
                    {client.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Project Type:</span>
                      <span className="text-sm text-gray-600">{client.projectType}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Results:</span>
                      <span className="text-sm text-green-600 font-semibold">{client.results}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Year:</span>
                      <span className="text-sm text-gray-600">{client.year}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span className="text-xs font-medium">View Case Study</span>
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

export default Clients;