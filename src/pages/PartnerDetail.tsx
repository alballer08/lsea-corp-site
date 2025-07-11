
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PartnerDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    {
      id: 'ybirdairways',
      name: 'Y Bird Airways',
      founded: '2017',
      specialty: 'Drone Technology for 3D Modeling & Infrastrcture Inspection',
      description: 'Y Bird Airways is a partner company to LSEA, providing inspection and assessment services using UAVs.',
      details: 'As a pioneer in the use of drone technology for infrastructure analysis, Y Bird Airways leverages advanced UAV systems to capture high-resolution imagery and generate precise 3D models of buildings, bridges, and other critical infrastructure assets. These 3D renders offer a comprehensive view of structural conditions, enabling more accurate evaluations, efficient maintenance planning, and data-driven decision-making. Their innovative approach not only enhances safety and reduces the need for manual inspections but also ensures minimal disruption to ongoing operations.',
      services: ['Aerial Infrastructure Inspections', '3D Mapping and Modeling', 'Thermal Imaging Surveys', 'Progress Monitoring and Documentation'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: 'wowdesign',
      name: 'WOW Design',
      founded: '2019',
      specialty: 'Architectural and Design Solutions',
      description: 'WOW Design is a well-established architectural firm based in Hong Kong, with extensive experience delivering a wide range of architectural and design projects across both Hong Kong and mainland China.',
      details: 'Known for their creative approach and commitment to quality, they have successfully contributed to residential, commercial, and public developments, blending innovative design with functional solutions tailored to the unique needs of each client and local context.',
      services: ['Architectural Design and Planning', 'Interior Design', '3D Visualization and Rendering', 'Consultation'],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const partner = partners.find(p => p.id === id) || partners[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {partner.name}
          </h1>
        </div>
      </section>

      {/* Partner Details */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-montserrat text-3xl font-bold text-gray-900">
                  {partner.name}
                </h2>
                <p className="font-arial text-gray-600">
                  <strong>Founded:</strong> {partner.founded}
                </p>
                <p className="font-arial text-gray-600">
                  <strong>Specialty:</strong> {partner.specialty}
                </p>
              </div>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {partner.description}
              </p>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                {partner.details}
              </p>
              
              <div>
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-3">
                  Services Provided
                </h3>
                <ul className="space-y-2">
                  {partner.services.map((service, index) => (
                     <li key={index} className="font-arial text-gray-600 flex items-center">
                       <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                       {service}
                     </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-arial font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More About Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerDetail;
