import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    },
    {
      id: '3',
      title: 'Mechanical Systems',
      description: 'Advanced mechanical system design and optimization for commercial and industrial applications.',
      details: 'Our mechanical engineering team specializes in HVAC systems, piping design, equipment selection, and energy efficiency optimization. We provide comprehensive solutions for building mechanical systems that ensure comfort, efficiency, and reliability.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '4',
      title: 'Electrical Engineering',
      description: 'Complete electrical system design and power distribution solutions for all project types.',
      details: 'From power distribution and lighting design to fire alarm systems and telecommunications infrastructure, our electrical engineers deliver safe, efficient, and code-compliant solutions for projects of all sizes.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '5',
      title: 'Environmental Engineering',
      description: 'Sustainable environmental solutions and compliance consulting for responsible development.',
      details: 'Our environmental engineering services include environmental impact assessments, remediation planning, water treatment design, and sustainability consulting to ensure projects meet environmental standards and regulations.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '6',
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring on-time and on-budget delivery.',
      details: 'Our certified project managers coordinate all aspects of engineering projects, from initial planning through final delivery, ensuring quality, timeline adherence, and budget control throughout the project lifecycle.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '7',
      title: 'Consulting Services',
      description: 'Expert engineering consulting and advisory services for complex technical challenges.',
      details: 'Our consulting team provides specialized expertise in engineering analysis, feasibility studies, technical reviews, and expert witness services to support your most challenging engineering problems.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '8',
      title: 'Quality Assurance',
      description: 'Comprehensive quality control and assurance programs for engineering projects.',
      details: 'Our quality assurance team implements rigorous testing, inspection, and verification procedures to ensure all engineering work meets the highest standards of quality and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '9',
      title: 'Safety Engineering',
      description: 'Comprehensive safety analysis and risk assessment for engineering projects.',
      details: 'Our safety engineering team conducts thorough risk assessments, develops safety protocols, and ensures all projects comply with OSHA and industry safety standards to protect workers and the public.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '10',
      title: 'HVAC Design',
      description: 'Advanced HVAC system design and energy efficiency optimization for all building types.',
      details: 'Our HVAC specialists design efficient heating, ventilation, and air conditioning systems that optimize energy consumption while maintaining optimal indoor air quality and comfort for occupants.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const service = services.find(s => s.id === id) || services[0];
  const currentIndex = services.findIndex(s => s.id === id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  const handleNavigation = (serviceId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/services/${serviceId}`);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {service.title}
          </h1>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigation(prevService.id)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:translate-x-[-2px] active:translate-x-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleNavigation(nextService.id)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:translate-x-[2px] active:translate-x-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
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
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-arial font-semibold hover:bg-blue-700 transition-all duration-500"
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
