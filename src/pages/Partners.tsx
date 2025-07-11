import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allPartners = [
    {
      id: 'ybirdairways',
      name: 'Y Bird Airways',
      founded: '2017',
      specialty: 'Drone Technology for 3D Modeling & Infrastructure Inspection',
      description: 'Y Bird Airways is a partner company to LSEA, providing inspection and assessment services using UAVs.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'wowdesign',
      name: 'WOW Design',
      founded: '2019',
      specialty: 'Architectural and Design Solutions',
      description: 'WOW Design is a well-established architectural firm based in Hong Kong, with extensive experience delivering a wide range of architectural and design projects.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const partnersPerPage = 1;
  const totalPages = Math.ceil(allPartners.length / partnersPerPage);
  const currentPartners = allPartners.slice(
    currentPage * partnersPerPage,
    (currentPage + 1) * partnersPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
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

      {/* Partners Content */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Partnerships
            </h2>
            <p className="font-arial text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We work with industry-established partners to expand our capabilities and provide comprehensive solutions to our clients. Our strategic partnerships enable us to offer specialized services and access to cutting-edge technologies that enhance our project delivery.
            </p>
          </div>

          {/* Partner Display */}
          <div className="relative">
            {currentPartners.map((partner, index) => (
              <div
                key={partner.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 transition-all duration-500 ${index === 0 ? 'animate-fade-in' : ''}`}
              >
                <div className="relative">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-montserrat text-3xl font-bold text-gray-900">
                      {partner.name}
                    </h3>
                    <p className="font-arial text-gray-600">
                      <strong>Founded:</strong> {partner.founded}
                    </p>
                    <p className="font-arial text-gray-600">
                      <strong>Specialty:</strong> {partner.specialty}
                    </p>
                  </div>
                  <p className="font-arial text-lg text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link 
                        to={`/partners/${partner.id}`} 
                        onClick={handleLinkClick}
                        className="font-arial"
                      >
                        Learn More About Partnership
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link 
                        to="/contact" 
                        onClick={handleLinkClick}
                        className="font-arial"
                      >
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-6 mt-12">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPage}
                  className="rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentPage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  className="rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Page Indicator */}
            {totalPages > 1 && (
              <div className="text-center mt-6">
                <p className="font-arial text-gray-500">
                  Partner {currentPage + 1} of {totalPages}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;