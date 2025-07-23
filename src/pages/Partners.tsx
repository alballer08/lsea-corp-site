import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "LSEA | Partners";
    setIsVisible(true);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const partners = [
    {
      id: 1,
      name: 'Y Bird Airways',
      description: 'Leading aviation services provider with comprehensive flight operations and aircraft maintenance solutions across the northeast region.',
      image: '/public/images/y-bird-airways.jpg',
      website: 'https://ybirdairways.com',
      industry: 'Aviation',
      services: ['Aircraft Maintenance', 'Flight Operations', 'Ground Support']
    },
    {
      id: 2,
      name: 'WOW Design',
      description: 'Creative design agency specializing in brand identity, digital experiences, and innovative marketing solutions for modern businesses.',
      image: '/public/images/wow-design-logo.jpg',
      website: 'https://wowdesign.com',
      industry: 'Design & Marketing',
      services: ['Brand Identity', 'Web Design', 'Digital Marketing']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh]">
        <img
          src="/public/images/handshake.jpg"
          alt="Our Partners"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Partners
          </h1>
        </div>
      </section>

      {/* Partners Grid */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Partnerships
            </h2>
            <p className="font-arial text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional results and drive innovation together. 
              Our partnerships are built on shared values of excellence, innovation, and mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer block ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {partner.industry}
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 font-arial line-clamp-3 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;