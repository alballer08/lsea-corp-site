
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
    },
    {
      id: '8',
      title: 'Urban Park Development',
      content: [
        'Comprehensive park redesign with recreational facilities and natural landscapes. This urban park development project transformed underutilized city space into a vibrant community hub featuring modern recreational facilities and sustainable landscaping.',
        'Our landscape architecture team created diverse recreational areas while preserving existing natural features. We integrated walking trails, playground equipment, sports facilities, and native plant gardens to create a multifunctional community space.',
        'The completed park now serves as a gathering place for residents and has increased property values in the surrounding area. This project demonstrates our ability to enhance urban environments through thoughtful landscape design and community planning.'
      ],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '9',
      title: 'Transportation Hub',
      content: [
        'Multi-modal transportation center connecting various transit systems. This transportation hub project created a seamless connection between bus, rail, and pedestrian transportation modes while providing modern passenger amenities.',
        'Our design team developed efficient passenger flow systems and integrated real-time information displays. We incorporated weather protection, retail spaces, and accessibility features to enhance the passenger experience.',
        'The completed hub now serves over 10,000 daily passengers and has become a model for integrated transportation planning. This project showcases our expertise in creating efficient, user-friendly transportation infrastructure.'
      ],
      image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '10',
      title: 'Water Treatment Plant',
      content: [
        'Advanced water treatment facility ensuring clean water supply for the region. This water treatment plant project incorporated cutting-edge filtration technology and environmental monitoring systems to provide safe drinking water to over 100,000 residents.',
        'Our engineering solutions optimize treatment processes while minimizing energy consumption. We designed automated control systems, redundant safety measures, and real-time water quality monitoring to ensure consistent treatment performance.',
        'The completed facility exceeds all regulatory standards and serves as a model for sustainable water infrastructure. This project demonstrates our commitment to public health and environmental stewardship through innovative water treatment solutions.'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '11',
      title: 'Solar Energy Farm',
      content: [
        'Large-scale solar installation providing renewable energy to thousands of homes. This solar energy farm project represents a significant step toward sustainable energy production, featuring advanced photovoltaic technology and smart grid integration.',
        'Our renewable energy team optimized panel placement and electrical systems for maximum efficiency. We incorporated battery storage systems, grid-tie inverters, and monitoring systems to ensure reliable energy production and distribution.',
        'The completed solar farm now generates enough clean energy to power 5,000 homes annually and has reduced regional carbon emissions significantly. This project showcases our expertise in renewable energy infrastructure and environmental sustainability.'
      ],
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '12',
      title: 'Convention Center',
      content: [
        'State-of-the-art convention facility with flexible event spaces and modern amenities. This convention center project created a versatile venue capable of hosting trade shows, conferences, and cultural events with advanced audio-visual systems and adaptable layouts.',
        'Our design team developed modular space configurations and integrated advanced technology infrastructure. We incorporated flexible lighting systems, high-capacity electrical distribution, and sophisticated climate control to accommodate diverse event requirements.',
        'The completed convention center now hosts over 200 events annually and has become a major economic driver for the region. This project demonstrates our ability to create dynamic, technology-enabled spaces that support business and cultural activities.'
      ],
      image: 'https://images.unsplash.com/photo-1485518994577-6cd6324ade8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '13',
      title: 'Retail Complex',
      content: [
        'Mixed-use retail development with shopping, dining, and entertainment options. This retail complex project created a vibrant commercial destination featuring diverse retail spaces, restaurant facilities, and entertainment venues in a pedestrian-friendly environment.',
        'Our planning team designed efficient traffic flow and integrated parking solutions. We incorporated attractive streetscapes, public gathering spaces, and sustainable building practices to create an inviting shopping and dining destination.',
        'The completed retail complex now hosts over 50 businesses and attracts thousands of visitors daily. This project showcases our expertise in mixed-use development and our ability to create economically viable commercial spaces.'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '14',
      title: 'Sports Stadium',
      content: [
        'Modern sports venue with advanced seating, lighting, and sound systems. This sports stadium project created a world-class athletic facility featuring state-of-the-art playing surfaces, spectator amenities, and broadcast capabilities.',
        'Our engineering team developed innovative structural solutions and integrated advanced technology systems. We incorporated energy-efficient lighting, high-definition video displays, and sophisticated sound systems to enhance the spectator experience.',
        'The completed stadium now hosts professional sporting events and has become a source of community pride. This project demonstrates our ability to deliver complex entertainment infrastructure that meets the highest performance standards.'
      ],
      image: 'https://images.unsplash.com/photo-1504016343244-4b17a2b0b0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '15',
      title: 'Airport Terminal',
      content: [
        'Expanded airport terminal with improved passenger flow and security features. This airport terminal project modernized existing facilities and added new gates, security checkpoints, and passenger amenities to handle increased air traffic.',
        'Our design team optimized passenger circulation and integrated advanced security systems. We incorporated automated baggage handling, biometric screening technology, and flexible gate configurations to improve operational efficiency.',
        'The completed terminal expansion now handles 50% more passengers while maintaining security standards and improving the travel experience. This project showcases our expertise in aviation infrastructure and passenger facility design.'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '16',
      title: 'Manufacturing Plant',
      content: [
        'Automated manufacturing facility with lean production processes and quality control. This manufacturing plant project created a modern production facility featuring automated assembly lines, quality control systems, and efficient material handling.',
        'Our industrial engineering team optimized production workflows and integrated advanced automation systems. We incorporated robotic assembly equipment, real-time quality monitoring, and flexible production lines to maximize efficiency and product quality.',
        'The completed manufacturing plant now produces high-quality products at competitive costs while maintaining strict quality standards. This project demonstrates our expertise in industrial facility design and advanced manufacturing systems.'
      ],
      image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '17',
      title: 'Cultural Center',
      content: [
        'Arts and cultural venue featuring galleries, theaters, and community spaces. This cultural center project created a dynamic venue for artistic expression and community engagement, featuring flexible performance spaces and interactive exhibit areas.',
        'Our design team developed acoustically optimized spaces and integrated advanced lighting systems. We incorporated moveable walls, specialized flooring, and climate control systems to support diverse artistic performances and exhibitions.',
        'The completed cultural center now hosts over 300 events annually and has become a focal point for regional arts and culture. This project demonstrates our ability to create inspiring spaces that support artistic expression and community engagement.'
      ],
      image: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '18',
      title: 'Data Center',
      content: [
        'High-security data center with redundant systems and environmental controls. This data center project created a mission-critical facility featuring advanced cooling systems, backup power infrastructure, and comprehensive security measures.',
        'Our engineering team developed redundant systems and integrated advanced monitoring technology. We incorporated uninterruptible power supplies, precision cooling systems, and biometric security controls to ensure continuous operations.',
        'The completed data center now provides reliable hosting services for critical business applications and has achieved industry-leading uptime performance. This project showcases our expertise in mission-critical infrastructure and advanced technology systems.'
      ],
      image: 'https://images.unsplash.com/photo-1548610325-7c2e2056b6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '19',
      title: 'Hotel Complex',
      content: [
        'Luxury hotel with conference facilities, spa, and fine dining establishments. This hotel complex project created a premier hospitality destination featuring luxurious accommodations, world-class amenities, and advanced guest services.',
        'Our hospitality design team developed elegant guest rooms and integrated sophisticated building systems. We incorporated advanced reservation systems, energy management controls, and high-speed internet infrastructure to enhance the guest experience.',
        'The completed hotel complex now serves business and leisure travelers while contributing significantly to the local economy. This project demonstrates our ability to create exceptional hospitality environments that exceed guest expectations.'
      ],
      image: 'https://images.unsplash.com/photo-1470197713549-4b0c11b7e78a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '20',
      title: 'Research Laboratory',
      content: [
        'Advanced research facility with specialized equipment and clean room environments. This research laboratory project created cutting-edge facilities for scientific research, featuring specialized laboratories, clean room environments, and advanced instrumentation.',
        'Our laboratory design team developed controlled environments and integrated specialized utility systems. We incorporated HEPA filtration, precision temperature control, and specialized electrical distribution to support sensitive research equipment.',
        'The completed research facility now supports groundbreaking scientific research and has attracted top researchers from around the world. This project showcases our expertise in specialized facility design and advanced building systems.'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '21',
      title: 'Parking Garage',
      content: [
        'Multi-level parking structure with smart parking systems and electric vehicle charging. This parking garage project created an efficient parking solution featuring automated guidance systems, electric vehicle charging stations, and advanced security features.',
        'Our transportation engineering team optimized traffic flow and integrated smart parking technology. We incorporated LED lighting, real-time occupancy monitoring, and mobile payment systems to enhance the parking experience.',
        'The completed parking garage now serves downtown businesses and has reduced street-level parking congestion. This project demonstrates our ability to create efficient transportation infrastructure that supports urban mobility.'
      ],
      image: 'https://images.unsplash.com/photo-1580836165012-e2f0f02c4e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '22',
      title: 'Warehouse Distribution',
      content: [
        'Logistics center with automated storage and retrieval systems. This warehouse distribution project created a modern logistics facility featuring automated material handling, inventory management systems, and efficient loading dock operations.',
        'Our logistics engineering team optimized warehouse layout and integrated advanced automation systems. We incorporated robotic storage systems, conveyor networks, and real-time inventory tracking to maximize operational efficiency.',
        'The completed distribution center now handles thousands of shipments daily and has reduced delivery times significantly. This project showcases our expertise in logistics infrastructure and automated material handling systems.'
      ],
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '23',
      title: 'Fire Station',
      content: [
        'Modern fire station with emergency response capabilities and training facilities. This fire station project created a state-of-the-art emergency response facility featuring advanced vehicle storage, equipment maintenance areas, and training simulators.',
        'Our emergency services design team developed efficient response workflows and integrated specialized building systems. We incorporated apparatus bays, equipment storage, and living quarters designed to support 24/7 emergency response operations.',
        'The completed fire station now provides enhanced emergency response capabilities and has reduced response times to emergency calls. This project demonstrates our commitment to public safety and our expertise in emergency services infrastructure.'
      ],
      image: 'https://images.unsplash.com/photo-1555664824-0d4b0c6d6c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '24',
      title: 'Library Building',
      content: [
        'Contemporary library with digital resources and community meeting spaces. This library building project created a modern learning environment featuring digital media centers, quiet study areas, and flexible community spaces.',
        'Our educational facility design team developed adaptable spaces and integrated advanced technology infrastructure. We incorporated high-speed internet, digital media equipment, and collaborative learning areas to support diverse educational activities.',
        'The completed library now serves as a community hub for learning and cultural activities, hosting educational programs and providing access to digital resources. This project showcases our ability to create inspiring learning environments that serve diverse community needs.'
      ],
      image: 'https://images.unsplash.com/photo-1519365842728-3ae8c5cbe6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '25',
      title: 'Government Building',
      content: [
        'Municipal building with public services and administrative offices. This government building project created efficient public service facilities featuring citizen service centers, administrative offices, and public meeting spaces.',
        'Our civic architecture team developed accessible spaces and integrated modern technology systems. We incorporated security systems, digital service delivery, and barrier-free design to improve public access to government services.',
        'The completed government building now provides enhanced public services and has improved citizen satisfaction with government interactions. This project demonstrates our expertise in civic architecture and public service facility design.'
      ],
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '26',
      title: 'Shopping Mall',
      content: [
        'Regional shopping center with diverse retail options and entertainment. This shopping mall project created a comprehensive retail destination featuring anchor stores, specialty shops, dining areas, and entertainment venues.',
        'Our retail design team developed efficient circulation patterns and integrated modern amenities. We incorporated flexible lease spaces, food courts, and entertainment areas to create a vibrant shopping environment.',
        'The completed shopping mall now attracts millions of visitors annually and has become a major economic driver for the region. This project showcases our expertise in retail development and our ability to create successful commercial destinations.'
      ],
      image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '27',
      title: 'Power Plant',
      content: [
        'Clean energy power generation facility with advanced emission controls. This power plant project created a modern electricity generation facility featuring advanced turbine technology, emission control systems, and grid integration capabilities.',
        'Our power engineering team developed efficient generation systems and integrated environmental protection measures. We incorporated advanced control systems, emission monitoring, and grid synchronization equipment to ensure reliable power generation.',
        'The completed power plant now provides clean electricity to thousands of homes and businesses while meeting strict environmental standards. This project demonstrates our expertise in power generation infrastructure and environmental compliance.'
      ],
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '28',
      title: 'Telecommunications Tower',
      content: [
        'Communication infrastructure supporting regional network connectivity. This telecommunications tower project created essential communication infrastructure featuring multi-carrier antenna systems, backup power, and network switching equipment.',
        'Our telecommunications engineering team developed robust communication systems and integrated redundant infrastructure. We incorporated fiber optic connections, microwave equipment, and emergency communication systems to ensure reliable service.',
        'The completed telecommunications tower now provides enhanced cellular and data coverage to rural areas and has improved emergency communication capabilities. This project showcases our expertise in telecommunications infrastructure and network engineering.'
      ],
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '29',
      title: 'Apartment Complex',
      content: [
        'Affordable housing development with community amenities and green spaces. This apartment complex project created quality housing options featuring energy-efficient apartments, community centers, and recreational facilities.',
        'Our residential design team developed sustainable housing solutions and integrated community amenities. We incorporated energy-efficient appliances, green building materials, and shared community spaces to create a desirable living environment.',
        'The completed apartment complex now provides affordable housing for working families and has enhanced the neighborhood with improved amenities. This project demonstrates our commitment to affordable housing and community development.'
      ],
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '30',
      title: 'Senior Living Center',
      content: [
        'Comprehensive senior care facility with medical services and recreational areas. This senior living center project created a supportive environment for elderly residents featuring assisted living units, medical facilities, and recreational programs.',
        'Our senior care design team developed age-appropriate facilities and integrated specialized building systems. We incorporated barrier-free design, emergency call systems, and therapeutic environments to support resident health and wellbeing.',
        'The completed senior living center now provides quality care for elderly residents and has become a model for senior housing design. This project showcases our expertise in specialized housing and our commitment to serving diverse community needs.'
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f29c04446c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '31',
      title: 'Waste Management Facility',
      content: [
        'Advanced waste processing center with recycling and environmental protection. This waste management facility project created a comprehensive waste processing operation featuring recycling systems, environmental controls, and public education programs.',
        'Our environmental engineering team developed sustainable waste processing systems and integrated pollution control measures. We incorporated automated sorting equipment, emission control systems, and groundwater monitoring to protect environmental quality.',
        'The completed waste management facility now processes municipal waste while maximizing recycling and minimizing environmental impact. This project demonstrates our expertise in environmental infrastructure and our commitment to sustainable waste management.'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '32',
      title: 'Community Center',
      content: [
        'Multi-purpose community facility with recreational and educational programs. This community center project created a vibrant hub for community activities featuring gymnasiums, classrooms, meeting rooms, and specialized program spaces.',
        'Our community design team developed flexible spaces and integrated modern amenities. We incorporated athletic facilities, educational technology, and barrier-free design to support diverse community programs and activities.',
        'The completed community center now serves thousands of residents through recreational and educational programs and has strengthened community connections. This project showcases our ability to create facilities that bring communities together and support lifelong learning.'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '33',
      title: 'Metro Station',
      content: [
        'Underground transit station with modern design and accessibility features. This metro station project created efficient public transportation infrastructure featuring platform systems, passenger circulation, and accessibility accommodations.',
        'Our transit engineering team developed efficient passenger flow systems and integrated modern amenities. We incorporated escalators, elevators, and platform safety systems to ensure safe and convenient public transit access.',
        'The completed metro station now serves thousands of daily commuters and has improved public transportation options in the region. This project demonstrates our expertise in transit infrastructure and our commitment to sustainable transportation solutions.'
      ],
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
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
