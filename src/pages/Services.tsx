
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { 
      id: 1, 
      title: 'Structural Engineering', 
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995515.png'
    },
    { 
      id: 2, 
      title: 'Civil Engineering', 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png'
    },
    { 
      id: 3, 
      title: 'Mechanical Systems', 
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/3094/3094837.png'
    },
    { 
      id: 4, 
      title: 'Electrical Engineering', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'
    },
    { 
      id: 5, 
      title: 'Environmental Engineering', 
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/1998/1998342.png'
    },
    { 
      id: 6, 
      title: 'Project Management', 
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png'
    },
    { 
      id: 7, 
      title: 'Consulting Services', 
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png'
    },
    { 
      id: 8, 
      title: 'Quality Assurance', 
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png'
    },
    { 
      id: 9, 
      title: 'Safety Engineering', 
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913465.png'
    },
    { 
      id: 10, 
      title: 'HVAC Design', 
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'https://cdn-icons-png.flaticon.com/512/3659/3659899.png'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
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
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className={`group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${index < 6 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-montserrat text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
            
            {/* Filler Box */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-blue-600 rounded-lg p-8 flex items-center justify-center text-center animate-fade-in-delay">
              <div>
                <h3 className="font-montserrat text-xl font-semibold text-white mb-4">
                  Comprehensive Engineering Solutions
                </h3>
                <p className="font-arial text-white mb-6">
                  Read more about our complete range of professional engineering services.
                </p>
                <button className="font-arial bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
