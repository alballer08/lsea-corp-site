
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: '1',
      title: 'Metro Bridge Project',
      content: [
        'A comprehensive infrastructure development project connecting urban areas with state-of-the-art bridge engineering. This major infrastructure project involved the design and construction of a modern bridge system that spans multiple waterways, connecting key urban districts.',
        'Our engineering team developed innovative solutions for complex geological challenges while ensuring minimal environmental impact. The project required extensive soil analysis, seismic design considerations, and coordination with multiple transportation authorities.',
        'The completed bridge system now serves thousands of commuters daily and has become a landmark structure in the metropolitan area. This project demonstrates our capability to deliver complex infrastructure solutions that balance functionality, safety, and aesthetic appeal.'
      ],
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Corporate Headquarters',
      content: [
        'Modern corporate facility design featuring sustainable architecture and advanced building systems. Our team designed a cutting-edge corporate headquarters featuring sustainable building practices, advanced HVAC systems, and modern workspace design.',
        'The project achieved LEED Gold certification and serves as a model for future commercial developments. We integrated energy-efficient systems, natural lighting optimization, and advanced building automation to create a healthy and productive work environment.',
        'The headquarters now houses over 1,000 employees and features flexible workspaces, state-of-the-art conference facilities, and a rooftop garden. This project showcases our ability to balance sustainability, functionality, and employee well-being in commercial design.'
      ],
      image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '3',
      title: 'Industrial Complex',
      content: [
        'Large-scale industrial facility with advanced manufacturing capabilities and environmental controls. This comprehensive industrial development project features advanced manufacturing facilities, environmental control systems, and efficient logistics infrastructure.',
        'Our engineering solutions optimized workflow while maintaining strict environmental compliance. We designed specialized ventilation systems, waste management processes, and safety protocols to ensure safe and efficient operations.',
        'The completed complex now operates at full capacity with minimal environmental impact and serves as a model for sustainable industrial development. This project demonstrates our expertise in balancing industrial productivity with environmental responsibility.'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '4',
      title: 'Residential Development',
      content: [
        'Sustainable residential community with integrated infrastructure and green building practices. This residential development project showcases our expertise in community planning, sustainable design, and integrated infrastructure development.',
        'The project features energy-efficient homes, advanced water management systems, and community amenities. We incorporated renewable energy systems, smart home technology, and sustainable building materials throughout the development.',
        'The completed community now houses over 500 families and features parks, recreational facilities, and walking trails. This project demonstrates our commitment to creating sustainable, livable communities that enhance quality of life for residents.'
      ],
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '5',
      title: 'Highway Infrastructure',
      content: [
        'Major highway expansion project improving regional transportation connectivity. This large-scale transportation infrastructure project involved highway expansion, bridge construction, and traffic management systems.',
        'Our engineering solutions improved regional connectivity while minimizing construction impact on existing traffic flow. We developed phased construction plans and temporary traffic management systems to maintain traffic flow during construction.',
        'The completed highway expansion now accommodates increased traffic volume and has reduced commute times for thousands of daily travelers. This project showcases our ability to deliver complex transportation infrastructure while maintaining public safety and minimizing disruption.'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '6',
      title: 'Educational Facility',
      content: [
        'State-of-the-art educational campus with modern learning environments and advanced technology integration. Our educational facility project combines innovative architectural design with advanced educational technology infrastructure.',
        'The campus features flexible learning spaces, sustainable building systems, and cutting-edge laboratory facilities. We designed adaptable classrooms, advanced science laboratories, and technology-enhanced learning environments to support modern educational methods.',
        'The completed campus now serves over 2,000 students and has become a model for educational facility design. This project demonstrates our ability to create learning environments that inspire innovation and support diverse educational programs.'
      ],
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '7',
      title: 'Medical Center',
      content: [
        'Comprehensive healthcare facility with advanced medical technology and patient-centered design. This comprehensive medical center project features advanced healthcare technology, patient-centered design, and efficient clinical workflows.',
        'Our engineering solutions support critical medical operations while ensuring patient comfort and safety. We designed specialized HVAC systems, medical gas distribution, and advanced electrical systems to support critical care operations.',
        'The completed medical center now provides comprehensive healthcare services to the community and has expanded access to specialized medical care. This project demonstrates our expertise in healthcare facility design and our commitment to improving community health outcomes.'
      ],
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const project = projects.find(p => p.id === id) || projects[0];
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const handleNavigation = (projectId: string, direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/portfolio/${projectId}`);
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
          src={project.image}
          alt={project.title}
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
            {project.title}
          </h1>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigation(prevProject.id, 'left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
          <ChevronLeft className="w-6 h-6 transition-all duration-300 group-hover:-translate-x-1 group-active:scale-90" />
        </button>
        <button
          onClick={() => handleNavigation(nextProject.id, 'right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
          <ChevronRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-active:scale-90" />
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
              <div className="space-y-4">
                {project.content.map((paragraph, index) => (
                  <p key={index} className="font-arial text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
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
