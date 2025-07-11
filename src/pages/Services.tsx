
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    { 
      id: 1, 
      title: 'Structural Engineering', 
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 2, 
      title: 'Civil Engineering', 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 3, 
      title: 'Mechanical Systems', 
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 4, 
      title: 'Electrical Engineering', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 5, 
      title: 'Environmental Engineering', 
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 6, 
      title: 'Project Management', 
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 7, 
      title: 'Consulting Services', 
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 8, 
      title: 'Quality Assurance', 
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 9, 
      title: 'Safety Engineering', 
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 10, 
      title: 'HVAC Design', 
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
  ];

  const servicesPerPage = 6;
  const totalPages = Math.ceil(services.length / servicesPerPage);
  const currentServices = services.slice(
    currentPage * servicesPerPage,
    (currentPage + 1) * servicesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                onClick={handleLinkClick}
                className={`group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-montserrat text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

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
                Page {currentPage + 1} of {totalPages}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
