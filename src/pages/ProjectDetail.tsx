
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: '1',
      title: 'Metro Bridge Project',
      location: 'New York, NY',
      completed: '2023',
      description: 'A major infrastructure project connecting two metropolitan areas with a state-of-the-art bridge design.',
      details: 'This project involved the design and construction oversight of a 2,000-foot span bridge crossing a major waterway. The project required innovative engineering solutions to address environmental concerns, seismic requirements, and heavy traffic loads. Our team provided structural analysis, environmental impact assessment, and construction management services.',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Corporate Headquarters',
      location: 'Los Angeles, CA',
      completed: '2022',
      description: 'A sustainable 40-story office building featuring cutting-edge green building technologies.',
      details: 'This LEED Platinum certified building showcases our commitment to sustainable design. The project featured advanced HVAC systems, renewable energy integration, and innovative structural solutions that reduced material usage by 15% while maintaining superior performance standards.',
      image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const project = projects.find(p => p.id === id) || projects[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Details */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-montserrat text-3xl font-bold text-gray-900">
                  Project Details
                </h2>
                <p className="font-arial text-gray-600">
                  <strong>Location:</strong> {project.location}
                </p>
                <p className="font-arial text-gray-600">
                  <strong>Completed:</strong> {project.completed}
                </p>
              </div>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {project.details}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-arial font-semibold hover:bg-green-700 transition-colors"
              >
                Discuss Your Project
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
