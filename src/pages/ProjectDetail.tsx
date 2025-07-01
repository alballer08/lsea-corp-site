import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: '1',
      title: 'Metro Bridge Project',
      description: 'A comprehensive infrastructure development project connecting urban areas with state-of-the-art bridge engineering.',
      details: 'This major infrastructure project involved the design and construction of a modern bridge system that spans multiple waterways, connecting key urban districts. Our engineering team developed innovative solutions for complex geological challenges while ensuring minimal environmental impact.',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Corporate Headquarters',
      description: 'Modern corporate facility design featuring sustainable architecture and advanced building systems.',
      details: 'Our team designed a cutting-edge corporate headquarters featuring sustainable building practices, advanced HVAC systems, and modern workspace design. The project achieved LEED Gold certification and serves as a model for future commercial developments.',
      image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '3',
      title: 'Industrial Complex',
      description: 'Large-scale industrial facility with advanced manufacturing capabilities and environmental controls.',
      details: 'A comprehensive industrial development project featuring advanced manufacturing facilities, environmental control systems, and efficient logistics infrastructure. Our engineering solutions optimized workflow while maintaining strict environmental compliance.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '4',
      title: 'Residential Development',
      description: 'Sustainable residential community with integrated infrastructure and green building practices.',
      details: 'This residential development project showcases our expertise in community planning, sustainable design, and integrated infrastructure. The project features energy-efficient homes, advanced water management systems, and community amenities.',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '5',
      title: 'Highway Infrastructure',
      description: 'Major highway expansion project improving regional transportation connectivity.',
      details: 'A large-scale transportation infrastructure project involving highway expansion, bridge construction, and traffic management systems. Our engineering solutions improved regional connectivity while minimizing construction impact on existing traffic flow.',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '6',
      title: 'Educational Facility',
      description: 'State-of-the-art educational campus with modern learning environments and advanced technology integration.',
      details: 'Our educational facility project combines innovative architectural design with advanced educational technology infrastructure. The campus features flexible learning spaces, sustainable building systems, and cutting-edge laboratory facilities.',
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '7',
      title: 'Medical Center',
      description: 'Comprehensive healthcare facility with advanced medical technology and patient-centered design.',
      details: 'A comprehensive medical center project featuring advanced healthcare technology, patient-centered design, and efficient clinical workflows. Our engineering solutions support critical medical operations while ensuring patient comfort and safety.',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const project = projects.find(p => p.id === id) || projects[0];
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const handleNavigation = (projectId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/portfolio/${projectId}`);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {project.title}
          </h1>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigation(prevProject.id)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:translate-x-[-2px] active:translate-x-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleNavigation(nextProject.id)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:translate-x-[2px] active:translate-x-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Project Details */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {project.details}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-arial font-semibold hover:bg-blue-700 transition-all duration-500"
              >
                Start Your Project
              </Link>
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
