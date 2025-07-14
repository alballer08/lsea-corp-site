
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const projects = [
    { id: 1, title: 'Metro Bridge Project', image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'A state-of-the-art bridge connecting downtown metro areas with innovative engineering solutions.' },
    { id: 2, title: 'Corporate Headquarters', image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Modern office complex featuring sustainable design and cutting-edge technology integration.' },
    { id: 3, title: 'Industrial Complex', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Large-scale industrial facility with optimized workflow and environmental compliance.' },
    { id: 4, title: 'Residential Development', image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Luxury residential community with modern amenities and green spaces.' },
    { id: 5, title: 'Highway Infrastructure', image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Major highway expansion project improving traffic flow and safety standards.' },
    { id: 6, title: 'Educational Facility', image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Modern university campus with innovative learning spaces and research facilities.' },
    { id: 7, title: 'Medical Center', image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Advanced healthcare facility with specialized medical equipment and patient care areas.' },
    { id: 8, title: 'Urban Park Development', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Comprehensive park redesign with recreational facilities and natural landscapes.' },
    { id: 9, title: 'Transportation Hub', image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Multi-modal transportation center connecting various transit systems.' },
    { id: 10, title: 'Water Treatment Plant', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Advanced water treatment facility ensuring clean water supply for the region.' },
    { id: 11, title: 'Solar Energy Farm', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Large-scale solar installation providing renewable energy to thousands of homes.' },
    { id: 12, title: 'Convention Center', image: 'https://images.unsplash.com/photo-1485518994577-6cd6324ade8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'State-of-the-art convention facility with flexible event spaces and modern amenities.' },
    { id: 13, title: 'Retail Complex', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Mixed-use retail development with shopping, dining, and entertainment options.' },
    { id: 14, title: 'Sports Stadium', image: 'https://images.unsplash.com/photo-1504016343244-4b17a2b0b0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Modern sports venue with advanced seating, lighting, and sound systems.' },
    { id: 15, title: 'Airport Terminal', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Expanded airport terminal with improved passenger flow and security features.' },
    { id: 16, title: 'Manufacturing Plant', image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Automated manufacturing facility with lean production processes and quality control.' },
    { id: 17, title: 'Cultural Center', image: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Arts and cultural venue featuring galleries, theaters, and community spaces.' },
    { id: 18, title: 'Data Center', image: 'https://images.unsplash.com/photo-1548610325-7c2e2056b6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'High-security data center with redundant systems and environmental controls.' },
    { id: 19, title: 'Hotel Complex', image: 'https://images.unsplash.com/photo-1470197713549-4b0c11b7e78a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Luxury hotel with conference facilities, spa, and fine dining establishments.' },
    { id: 20, title: 'Research Laboratory', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Advanced research facility with specialized equipment and clean room environments.' },
    { id: 21, title: 'Parking Garage', image: 'https://images.unsplash.com/photo-1580836165012-e2f0f02c4e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Multi-level parking structure with smart parking systems and electric vehicle charging.' },
    { id: 22, title: 'Warehouse Distribution', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Logistics center with automated storage and retrieval systems.' },
    { id: 23, title: 'Fire Station', image: 'https://images.unsplash.com/photo-1555664824-0d4b0c6d6c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Modern fire station with emergency response capabilities and training facilities.' },
    { id: 24, title: 'Library Building', image: 'https://images.unsplash.com/photo-1519365842728-3ae8c5cbe6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Contemporary library with digital resources and community meeting spaces.' },
    { id: 25, title: 'Government Building', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Municipal building with public services and administrative offices.' },
    { id: 26, title: 'Shopping Mall', image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Regional shopping center with diverse retail options and entertainment.' },
    { id: 27, title: 'Power Plant', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Clean energy power generation facility with advanced emission controls.' },
    { id: 28, title: 'Telecommunications Tower', image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Communication infrastructure supporting regional network connectivity.' },
    { id: 29, title: 'Apartment Complex', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Affordable housing development with community amenities and green spaces.' },
    { id: 30, title: 'Senior Living Center', image: 'https://images.unsplash.com/photo-1519167758481-83f29c04446c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Comprehensive senior care facility with medical services and recreational areas.' },
    { id: 31, title: 'Waste Management Facility', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Advanced waste processing center with recycling and environmental protection.' },
    { id: 32, title: 'Community Center', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Multi-purpose community facility with recreational and educational programs.' },
    { id: 33, title: 'Metro Station', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Underground transit station with modern design and accessibility features.' }
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Our Portfolio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                onClick={handleLinkClick}
                className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="font-arial text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              <span className="font-montserrat text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
