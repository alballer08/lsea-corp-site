
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const projects = [
    { id: 1, title: 'Metro Bridge Project', image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Corporate Headquarters', image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Industrial Complex', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Residential Development', image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Highway Infrastructure', image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 6, title: 'Educational Facility', image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 7, title: 'Medical Center', image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 8, title: 'Transportation Hub', image: 'https://images.unsplash.com/photo-1474164301059-d5d69c95e1b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 9, title: 'Retail Complex', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 10, title: 'Water Treatment Plant', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 11, title: 'Sports Complex', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 12, title: 'Mixed-Use Development', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                onClick={handleLinkClick}
                className={`group relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${index < 2 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
