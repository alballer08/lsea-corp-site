import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentItem {
  type: 'text' | 'list';
  text?: string;
  items?: string[];
}

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
        { type: 'text', text: 'LSEA can provide evaluation, inspection, and rating services on a wide variety of highway and railroad for both the private and public sectors. LSEA has the experience in the evaluation, inspection, and rating of structures ranging in size from single-span bridges to major bridges. LSEA has experience in the inspection of a wide variety of materials including steel, concrete, prestressed concrete, and timber.' },
        { type: 'text', text: "Our NHI certified Team Leaders are familiar with the NBIS and various clients' inspection procedures and requirements. We specialize in a variety of structures, including:" },
        { type: 'list', items: ['Railroad bridges', 'Short-span bridges', 'Major bridges', 'Culverts', 'Sign structures', 'Pedestrian bridges', 'Utility bridges'] },
        { type: 'text', text: 'Our experienced staff also can perform and/or implement several types of evaluation programs including non-destructive testing, load testing and rating, and fracture and fatigue analysis.' }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Bridge Design and Rehabilitation',
      content: [
        { type: 'text', text: 'LSEA can provide complete bridge rehabilitation and replacement design services for a variety of highway and railroad bridges from the conceptual stage through to the final design stage for both the private and public sectors, using innovative concepts and the latest technology in the field of bridge design.' },
        { type: 'text', text: 'LSEA has the experience in the design of all types of bridges using a wide variety of materials including steel, concrete, prestressed concrete and timber. We have experience with a wide range of bridge types, including:' },
        { type: 'list', items: ['Short-span bridges', 'Multi-span bridges', 'Railroad bridges', 'Timber bridges', 'Straight and curved girders', 'Culverts', 'Arch bridges', 'Truss bridges'] },
        { type: 'text', text: 'Our staff is experienced in all phases of bridge and roadway design, including:' },
        { type: 'list', items: ['Feasibility studies and reports', 'Initial scoping phases', 'Evaluation of alternative solutions', 'Structural analysis and design', 'Reconstruction and rehabilitation design', 'Seismic analysis and design', 'Foundation studies and reports'] }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '3',
      title: 'Building Assessment',
      content: [
        { type: 'text', text: 'LSEA delivers comprehensive inspection services for both industrial/commercial buildings and residential homes.' },
        { type: 'text', text: 'We inspect and assess a wide range of facilities including warehouses, offices, stadiums, hospitals, labs, schools, churches, multi-family housing, and more. Our licensed engineers, with extensive experience in NJ and NY, follow NABIE standards and offer:' },
        { type: 'list', items: ['Comprehensive & Future Needs Assessments', 'Condition Inspections', 'ADA Compliance & UPCS Inspections', 'HUD GPNA & RAD PCA', 'Electrical & Mechanical System Evaluations', 'Emergency Damage Assessments'] },
        { type: 'text', text: 'LSEA provides full inspection, evaluation, and design services for residential properties. Our licensed structural engineers are well-versed in NJ/NY codes and national standards. Services include:' },
        { type: 'list', items: ['Pre-purchase & Seller Home Inspections', 'Structural & Mechanical Consultations', 'Lead, Mold, Asbestos Testing', 'Expert Witness Testimony', 'Pre-construction Plan Reviews & On-site Inspections'] },
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '4',
      title: 'Building Design and Rehabilitation',
      content: [
        { type: 'text', text: 'LSEA can provide complete architectural and engineering services for a variety of commercial/industrial buildings for a variety of clients, which includes, but is not limited to:' },
        { type: 'list', items: ['Warehouses', 'Stadiums', 'Office buildings', 'Multi-family apartments and condominiums', 'Hospitals', 'Laboratories', 'Schools', 'Churches', 'Residential complexes (HUD housing)'] },
        { type: 'text', text: 'Our design teams are dedicated to providing practical, functional and cost-effective designs for any size project and/or solutions for particular problems. LSEA can provide architectural and engineering services for new construction, rehabilitation and repair projects.' },
        { type: 'text', text: 'LSEA has preformed numerous architectural and engineering design services for various clients throughout the State of New Jersey and New York. Our design teams provide the following services:' },
        { type: 'list', items: ['Feasibility Studies', 'Diagnostic Studies', 'Maintenance Planning', 'Structural Design/Renovations/Repair/Upgrading', 'Site Planning and Design', 'Landscaping Design', 'Lighting Design', 'Electrical System Design', 'Mechanical System Design', 'Security System Design'] }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '5',
      title: 'Architecture',
      content: [
        { type: 'text', text: 'LSEA has provided architectural design and consulting services to clients throughout the Tri-state area. The projects we have been involved with include, but are not limited to:' },
        { type: 'list', items: ['Residential - Single and Multi-Family', 'Commercial - Low Rise to High Rise Building', 'Industrial - Warehouses, Hangar Buildings, Storage', 'Shopping Center', 'Stadium', 'Plaza', 'Apartment complex', 'Churches/Religious Buildings/Libraries'] }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '6',
      title: 'MEP Engineering',
      content: [
        { type: 'text', text: 'LSEA has provided MEP Engineering Services to various state agencies, local municipalities, and private sectors. Our specialties include the following services:' },
        { type: 'list', items: ['HVAC Upgrade and Replacement', 'Emergency Generator Design', 'Fire Protection/Sprinkler/Standpipe System Design', 'Energy Audit', 'Electrical System Upgrade', 'Solar Power Design', 'Boiler/Chiller Design', 'Lighting Design', 'Lightening Protection System', 'Underground Feeder Distribution', 'Switchgears/CT Cabinets', 'High and Low Tension Power Distribution System', 'Transformer Design', 'Domestic Hot Water', 'Building and Plumbing Piping Distribution System', 'Elevator and Escalator Design'] }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '7',
      title: 'Site and Highway Engineering',
      content: [
        { type: 'text', text: 'LSEA has carried out many highway projects in the New York and New Jersey State areas, managing the construction or reconstruction of different segments of highways, the design and construction assistance for complex interchanges and safety assembles connected to this important sector of the states infrastructure.' },
        { type: 'text', text: "The company's technical team is of highly professional qualification and by using the most advanced technology in highway design has obtain a high rate of proficiency reflected in the quality, term delivery and budget cap of the project." },
        { type: 'text', text: 'LSEA has provided Site and Highway Engineering services to various state agencies, local municipalities, and private sectors. Our services include the following services:' },
        { type: 'list', items: ['Planning for future traffic flows', 'Design of highway intersections/interchanges', 'Geometric alignment and design', 'Highway pavement materials and design', 'Structural design of pavement thickness', 'Pavement maintenance'] }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '8',
      title: 'Land Surveying',
      content: [
        { type: 'text', text: 'LSEA has been providing Land Surveying services for our public and private clients in the Engineering, Transportation, and Construction industries in the following areas:' },
        { type: 'list', items: ['Transportation Design Surveys', 'Right-of-Way Surveys', 'Property Surveys', 'Construction Layout Surveys', 'Subdivision Surveys', 'ALTA/ACSM Land Title Surveys', 'Topographic Surveys', 'Environmental Surveys', 'Mapping Control Surveys'] }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '9',
      title: 'Structural Assessment and Design',
      content: [
        { type: 'text', text: 'LSEA’s inspection teams are licensed professional engineers with extensive experience across New Jersey and New York. We follow NABIE standards to deliver detailed assessments and valuable insights into building conditions.' },
        { type: 'list', items: ['Needs & Condition Assessments (Current & Future)', 'HUD GPNA & RAD PCA', 'ADA Compliance & UPCS/HQS Inspections', 'Electrical, Mechanical & Structural Evaluations', 'Emergency Damage Inspections','Safety & Security Audits','Drone-Assisted Inspections'] },
        { type: 'text', text: 'Our engineers ensure safety programs meet required standards through detailed audits and on-site evaluations, serving state agencies, municipalities, and private clients.' },
        { type: 'text', text: 'In partnership with Y Bird Airways, we use drone technology to capture high-resolution images and 3D models, allowing safe, efficient inspection of hard-to-reach areas.' }
      ] as ContentItem[],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '10',
      title: 'Traffic Engineering',
      content: [
        { type: 'text', text: 'Most of the bridges that LSEA has provided the design and construction engineering supporting services, for new or replacement of them included:' },
        { type: 'list', items: ['Traffic engineering studies', 'Milling and resurfacing of adjacent roadways', 'Temporary detours layout', 'Design of new gas and water lines carried within the structures'] }
      ] as ContentItem[],
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

  const renderContentItem = (item: ContentItem, index: number) => {
    if (item.type === 'text') {
      return (
        <p key={index} className="font-arial text-lg text-gray-600 leading-relaxed mb-4">
          {item.text}
        </p>
      );
    } else if (item.type === 'list') {
      return (
        <ul key={index} className="font-arial text-lg text-gray-600 leading-relaxed mb-4 list-disc list-inside space-y-2">
          {item.items?.map((listItem, listIndex) => (
            <li key={listIndex} className="ml-4">
              {listItem}
            </li>
          ))}
        </ul>
      );
    }
    return null;
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
                {service.content.map((item, index) => renderContentItem(item, index))}
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