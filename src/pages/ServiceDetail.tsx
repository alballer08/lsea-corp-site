
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: '1',
      title: 'Structural Engineering',
      description: 'Comprehensive structural design and analysis services for buildings, bridges, and infrastructure projects.',
      details: 'Our structural engineering team provides innovative solutions for complex building challenges. We specialize in seismic design, load analysis, foundation engineering, and structural rehabilitation. Our expertise spans from residential buildings to large-scale commercial and industrial projects.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Civil Engineering',
      description: 'Infrastructure development and site engineering solutions for public and private sector projects.',
      details: 'Our civil engineering services encompass site development, transportation engineering, water resources, and municipal infrastructure. We work closely with communities and developers to create sustainable, efficient infrastructure solutions that serve growing populations.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const service = services.find(s => s.id === id) || services[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {service.title}
          </h1>
        </div>
      </section>

      {/* Service Details */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900">
                Service Overview
              </h2>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {service.details}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-arial font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
