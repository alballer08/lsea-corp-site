
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
      id: 'techsolutions',
      name: 'TechSolutions Inc.',
      founded: '2015',
      specialty: 'Engineering Software Solutions',
      description: 'TechSolutions Inc. is our premier technology partner, providing cutting-edge software solutions for complex engineering projects.',
      details: 'Founded in 2015, TechSolutions has become a leader in engineering software development. They specialize in CAD automation, structural analysis software, and project management platforms. Their innovative solutions have helped us streamline our design processes and improve project delivery times by up to 30%.',
      services: ['CAD Automation', 'Structural Analysis Software', 'Project Management Platforms', 'Custom Engineering Applications'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: 'buildcorp',
      name: 'BuildCorp Partners',
      founded: '2010',
      specialty: 'Construction Management',
      description: 'BuildCorp Partners brings extensive construction and project management expertise to our large-scale engineering projects.',
      details: 'With over a decade of experience in construction management, BuildCorp Partners has been instrumental in the successful completion of our most challenging projects. Their expertise in logistics, safety management, and quality control ensures that our engineering designs are executed flawlessly in the field.',
      services: ['Construction Management', 'Quality Control', 'Safety Management', 'Logistics Coordination'],
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
                  About {partner.name}
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
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
