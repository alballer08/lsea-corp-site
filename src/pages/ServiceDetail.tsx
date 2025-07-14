import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: '1',
      title: 'Bridge Inspection',
      content: [
        'Comprehensive structural design and analysis services for buildings, bridges, and infrastructure projects. Our structural engineering team provides innovative solutions for complex building challenges using state-of-the-art analysis software and proven engineering principles.',
        'We specialize in seismic design, load analysis, foundation engineering, and structural rehabilitation. Our expertise spans from residential buildings to large-scale commercial and industrial projects, including high-rise buildings, bridges, and specialized structures.',
        'Our structural engineers are licensed professionals with extensive experience in various building codes and standards. We work closely with architects, contractors, and clients to ensure that all structural elements are safe, efficient, and cost-effective while meeting all regulatory requirements.'
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Bridge Design and Rehabilitation',
      content: [
        'Infrastructure development and site engineering solutions for public and private sector projects. Our civil engineering services encompass site development, transportation engineering, water resources, and municipal infrastructure development.',
        'We work closely with communities and developers to create sustainable, efficient infrastructure solutions that serve growing populations. Our team has experience with roadway design, drainage systems, utilities planning, and environmental impact mitigation.',
        'Our civil engineers are well-versed in local regulations and permitting processes, ensuring that all projects comply with municipal requirements and environmental standards. We provide comprehensive solutions from initial site analysis through final construction support.'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '3',
      title: 'Building Assessment',
      content: [
        'Advanced mechanical system design and optimization for commercial and industrial applications. Our mechanical engineering team specializes in HVAC systems, piping design, equipment selection, and energy efficiency optimization.',
        'We provide comprehensive solutions for building mechanical systems that ensure comfort, efficiency, and reliability. Our expertise includes heating and cooling load calculations, ductwork design, equipment sizing, and system integration with building automation systems.',
        'Our mechanical engineers stay current with the latest technologies and energy-efficient solutions, helping clients reduce operating costs while maintaining optimal indoor environmental conditions. We provide detailed system specifications, installation support, and commissioning services.'
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '4',
      title: 'Building Design and Rehabilitation',
      content: [
        'Complete electrical system design and power distribution solutions for all project types. From power distribution and lighting design to fire alarm systems and telecommunications infrastructure, our electrical engineers deliver safe, efficient, and code-compliant solutions.',
        'Our electrical engineering services include load calculations, panel schedules, lighting design, emergency power systems, and low-voltage systems integration. We ensure all electrical installations meet National Electrical Code requirements and local utility standards.',
        'We work with the latest electrical design software and stay current with emerging technologies such as LED lighting, smart building systems, and renewable energy integration. Our team provides comprehensive electrical solutions from concept through commissioning and maintenance planning.'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '5',
      title: 'Architecture',
      content: [
        'Sustainable environmental solutions and compliance consulting for responsible development. Our environmental engineering services include environmental impact assessments, remediation planning, water treatment design, and sustainability consulting.',
        'We ensure projects meet environmental standards and regulations through comprehensive analysis and planning. Our team has expertise in air quality management, water resources protection, waste management, and environmental monitoring systems.',
        'Our environmental engineers work closely with regulatory agencies and provide clients with practical solutions that balance development needs with environmental protection. We offer ongoing environmental compliance support and monitoring services to ensure long-term sustainability.'
      ],
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '6',
      title: 'MEP Engineering',
      content: [
        'Comprehensive project management services ensuring on-time and on-budget delivery. Our certified project managers coordinate all aspects of engineering projects, from initial planning through final delivery, ensuring quality, timeline adherence, and budget control.',
        'We utilize proven project management methodologies and tools to track progress, manage resources, and communicate effectively with all stakeholders. Our project managers have extensive experience in construction administration, contract management, and risk mitigation.',
        'Our project management approach emphasizes clear communication, proactive problem-solving, and continuous quality improvement. We provide regular progress reports, schedule updates, and budget tracking to keep clients informed throughout the project lifecycle.'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '7',
      title: 'Site and Highway Engineering',
      content: [
        'Expert engineering consulting and advisory services for complex technical challenges. Our consulting team provides specialized expertise in engineering analysis, feasibility studies, technical reviews, and expert witness services.',
        'We support clients with independent technical evaluations, peer reviews, and specialized analysis for challenging engineering problems. Our consultants have deep expertise in various engineering disciplines and can provide objective assessments and recommendations.',
        'Our consulting services include failure analysis, design optimization, regulatory compliance consulting, and technical due diligence. We work with clients to identify cost-effective solutions and provide expert testimony when required for legal proceedings.'
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '8',
      title: 'Land Surveying',
      content: [
        'Comprehensive quality control and assurance programs for engineering projects. Our quality assurance team implements rigorous testing, inspection, and verification procedures to ensure all engineering work meets the highest standards.',
        'We maintain strict quality control standards throughout every phase of project development, from initial design through final delivery. Our QA processes include design reviews, material testing, construction inspection, and performance verification.',
        'Our quality assurance professionals are trained in industry best practices and use advanced testing equipment to verify compliance with specifications and standards. We provide detailed documentation and reporting to ensure full traceability and accountability.'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '9',
      title: 'Structural Assessment and Design',
      content: [
        'Comprehensive safety analysis and risk assessment for engineering projects. Our safety engineering team conducts thorough risk assessments, develops safety protocols, and ensures all projects comply with OSHA and industry safety standards.',
        'We provide safety consulting services including hazard identification, risk analysis, safety training, and emergency response planning. Our safety engineers work proactively to identify potential hazards and develop mitigation strategies before they become problems.',
        'Our safety programs are tailored to specific project requirements and include regular safety audits, training programs, and incident investigation services. We help clients maintain excellent safety records while ensuring regulatory compliance and protecting workers and the public.'
      ],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '10',
      title: 'Traffic Engineering',
      content: [
        'Advanced HVAC system design and energy efficiency optimization for all building types. Our HVAC specialists design efficient heating, ventilation, and air conditioning systems that optimize energy consumption while maintaining optimal indoor air quality.',
        'We provide comprehensive HVAC design services including load calculations, equipment selection, ductwork design, and controls integration. Our designs focus on energy efficiency, occupant comfort, and long-term reliability while meeting all applicable codes and standards.',
        'Our HVAC engineers use advanced modeling software to optimize system performance and energy efficiency. We stay current with the latest HVAC technologies and can integrate renewable energy systems, smart controls, and advanced filtration systems into our designs.'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const service = services.find(s => s.id === id) || services[0];
  const currentIndex = services.findIndex(s => s.id === id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  const handleNavigation = (serviceId: string, direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/services/${serviceId}`);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 100);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            slideDirection === 'left' 
              ? '-translate-x-full opacity-0' 
              : slideDirection === 'right' 
                ? 'translate-x-full opacity-0' 
                : 'translate-x-0 opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${
            isVisible && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {service.title}
          </h1>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigation(prevService.id, 'left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
          <ChevronLeft className="w-6 h-6 transition-all duration-300 group-hover:-translate-x-1 group-active:scale-90" />
        </button>
        <button
          onClick={() => handleNavigation(nextService.id, 'right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
          <ChevronRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-active:scale-90" />
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
              <div className="space-y-4">
                {service.content.map((paragraph, index) => (
                  <p key={index} className="font-arial text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
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
