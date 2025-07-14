import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
  },
  {
    id: 'tech-solutions',
    name: 'Tech Solutions Inc',
    description: 'Technology consulting firm providing enterprise software solutions and digital transformation services.',
    image: '/placeholder.svg',
    website: 'https://techsolutions.com',
    industry: 'Technology',
    services: ['Software Development', 'Cloud Migration', 'IT Consulting']
  },
  {
    id: 'green-energy',
    name: 'Green Energy Partners',
    description: 'Renewable energy solutions provider focusing on sustainable power generation and energy efficiency.',
    image: '/placeholder.svg',
    website: 'https://greenenergy.com',
    industry: 'Energy',
    services: ['Solar Solutions', 'Wind Energy', 'Energy Consulting']
  }
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our Partners
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional results and drive innovation together.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
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

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Interested in Partnering with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for innovative partnerships that create value for our clients and drive industry growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;