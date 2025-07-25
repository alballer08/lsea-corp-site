
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "LSEA | Services";
    setIsVisible(true);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    { 
      id: 1, 
      title: 'Bridge Inspection', 
      image: '/public/images/bridge-inspection.jpg'
    },
    { 
      id: 2, 
      title: 'Bridge Design and Rehabilitation', 
      image: '/public/images/PatcongCreek.jpg'
    },
    { 
      id: 3, 
      title: 'Building Assessment', 
      image: '/public/images/wtc.jpg'
    },
    { 
      id: 4, 
      title: 'Building Design and Rehabilitation', 
      image: '/public/images/ParsonsBoulevard.jpg'
    },
    { 
      id: 5, 
      title: 'Architecture', 
      image: '/public/images/chinahouse.jpg'
    },
    { 
      id: 6, 
      title: 'MEP Engineering',
      image: '/public/images/generatorupgrade.jpg'
    },
    { 
      id: 7, 
      title: 'Site and Highway Engineering', 
      image: '/public/images/cloverleaf-medium.jpg'
    },
    { 
      id: 8, 
      title: 'Land Surveying', 
      image: '/public/images/survey1.jpg'
    },
    { 
      id: 9, 
      title: 'Structural Assessment and Design', 
      image: '/public/images/GSPAntenna2.jpg'
    },
    { 
      id: 10, 
      title: 'Traffic Engineering', 
      image: '/public/images/GWBTunnel.jpg'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh]">
        <img
          src="/public/images/software.jpg"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                onClick={handleLinkClick}
                className={`group relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
            {/* Check out our services placeholder */}
            <Link
              to={`/services/1`}
              onClick={handleLinkClick}
              className="group relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-800 animate-fade-in-delay"
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold mb-2">
                    Check Out Our Services
                  </h3>
                  <p className="font-arial text-sm opacity-90">
                    Discover more about what we offer
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
