
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  useEffect(() => {
    document.title = "LSEA | Portfolio";
    setIsVisible(true);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const projects = [
    { id: 1, title: 'Overhead Sign Inspections (2016)', image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA provided sign inspection services to the NJDOT for 106 state-owned overhead sign structures along various routes throughout New Jersey.' },
    { id: 2, title: 'Passaic County Bridge Inspections (2012-2013)', image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed inspections and calculated load ratings for 55 Passaic County owned bridges as part of a two cycle agreement.' },
    { id: 3, title: 'Inspection and Rating of On and Off State Bridges (2010-2012)', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA handled the routine biennial inspections, bridge condition evaluations, and Pontis evaluations for 44 On and 2 Off state bridges.' },
    { id: 4, title: 'Cantilever & Overhead Sign Structure Inspection (2011)', image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA evaluated the condition and fatigue stresses of 137 cantilever and overhead signs for the NJDOT.' },
    { id: 5, title: 'Morris County Bridges - Biennial Inspections (2007)', image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed biennial inspections of 42 Morris County bridges.' },
    { id: 6, title: 'Special Inspection of 7 FCM Bridges (2007)', image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA assisted the NJDOT Bureau of Structural Evaluation inspected 7 various FCM bridge structures.' },
    { id: 7, title: 'NJTA – GSP North and South (2005, 2008, 2009, 2017, and 2018)', image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'In 2017 and 2018, NJTA selected LSEA as a prime consultant to inspect over 250 bridges along the Garden State Parkway.' },
    { id: 8, title: 'NJTA – Microwave Tower Inspection (2014, 2017)', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA inspected 15 cell towers in 2014 and 24 cell towers in 2017.' },
    { id: 9, title: 'NJTA – GSP Sign Structures and Culverts Inspection (2010)', image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed inspections and Pontis/BMS evaluations of 140 Sign Structures and 53 Culverts.' },
    { id: 10, title: 'NJTA – Part A Inspection (2003 to 2015)', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed annual and in-depth inspections of 195 bridges, ranging from single span to multi-span structures, in all districts for the New Jersey Turnpike Authority. ' },
    { id: 11, title: 'NJTA - Part B Inspection (2007 to 2012)', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed inspections of 220 bridges within districts 1 through 8.' },
    { id: 12, title: 'NJTA – Part C Inspection (2006 to 2012 & 2014)', image: 'https://images.unsplash.com/photo-1485518994577-6cd6324ade8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as the prime consultant, performed inspections of 13 bridges within the I-95 extension, 75 culverts in all districts and over 430 sign structures.' },
    { id: 13, title: 'NJTA - Part D Inspection (2005 and 2009)', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed inspections of 5 bridges within the I-95 Extension, and 42 culverts in districts 4, 5, and 8.' },
    { id: 14, title: 'DRPA/PATCO Threat & Vulnerability Assessment (2016)', image: 'https://images.unsplash.com/photo-1504016343244-4b17a2b0b0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA conducted a threat & vulnerability assessment for the properties owned and operated by the DRPA-PATCO.' },
    { id: 15, title: 'Structural Hardening Countermeasures (2004 - 2006)', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, performed a structural hardening assessment on Benjamin Franklin Bridge and Walt Whitman Bridge.' },
    { id: 16, title: 'DRPA/PATCO Facility Replacement Study (2011 – 2012)', image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, assisted DRPA in performing asset value studies, in order to estimate potential asset replacement costs due to catastrophic events.' },
    { id: 17, title: 'PATCO Bridges Biennial Inspection (2010 & 2014)', image: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, performed a biennial inspection of the PATCO line bridges between Philadelphia, PA and Camden, NJ.' },
    { id: 18, title: 'PATCO Safety Review (2003)', image: 'https://images.unsplash.com/photo-1548610325-7c2e2056b6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, provided safety review services for the State Oversight Agency.' },
    { id: 19, title: 'Walt Whitman Bridge Biennial Inspection (2008, 2010 and 2012)', image: 'https://images.unsplash.com/photo-1470197713549-4b0c11b7e78a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, performed a biennial inspection of the Walt Whitman Bridge.' },
    { id: 20, title: 'Benjamin Franklin Bridge Biennial Inspection (2004, 2006, 2008 & 2010)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, performed a biennial inspection of the Benjamin Franklin Bridge, which carries a high speed PATCO rail line along each fascia.' },
    { id: 21, title: 'JFK Condition Survey of WTC Memorial (2017)', image: 'https://images.unsplash.com/photo-1580836165012-e2f0f02c4e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed condition survey inspections of the WTC memorial site, including both pools, the WTC Memorial Building, and the tunnels underneath the site.' },
    { id: 22, title: 'Condition Survey of Buildings at Elizabeth Marine Terminal (2015)', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed condition inspections of 4 buildings owned by the PANYNJ in Port Ivory, Staten Island, New York.' },
    { id: 23, title: 'GWB Building and Miscellaneous Structures Condition Survey (2014)', image: 'https://images.unsplash.com/photo-1555664824-0d4b0c6d6c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'Modern fire station with emergency response capabilities and training facilities.' },
    { id: 24, title: 'Howland Hook/Port Ivory Buildings Condition Survey (2013)', image: 'https://images.unsplash.com/photo-1519365842728-3ae8c5cbe6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA performed condition inspection of buildings owned by the PANYNJ in Port Ivory.' },
    { id: 25, title: 'Essex County Resources Recovery facility Condition Survey (2012)', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA provided the structural building condition survey for the Essex County Resource Recovery facility.' },
    { id: 26, title: 'Condition Survey of Buildings in Brooklyn Pier, Brooklyn, New York (2011)', image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA provided structural building condition surveys for 5 warehouse buildings located in Brooklyn Pier owned by Port Authority of NY & NJ.' },
    { id: 27, title: 'Teterboro Airport Condition Inspection (2011)', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: ' LSEA performed condition inspection on 7 buildings within Teterboro Airport, including office buildings, hangers, the tower, and the museum.' },
    { id: 28, title: 'Undergrade Bridge Inspection, Groups: B, E and F (2015-2016)', image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA provided a team of 3 engineers for the in-depth hands-on undergrade bridge inspections for 3 projects.' },
    { id: 29, title: 'Rehabilitation of Raritan Drawbridge (2015)', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA was involved in the rehabilitation of the Raritan Drawbridge, which was severely damaged during Hurricane Sandy.' },
    { id: 30, title: 'Undergrade Bridge Inspection (2012-2013)', image: 'https://images.unsplash.com/photo-1519167758481-83f29c04446c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as the Prime Consultant, performed inspections and structural rating analyses of 61 bridges carrying New Jersey Transit rail lines.' },
    { id: 31, title: 'Aberdeen-Matawan Park & Ride Parking Study (2007)', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA was involved in the planning and study of the parking lot for the Aberdeen-Matawan station for NJ TRANSIT.' },
    { id: 32, title: 'Undergrade Bridge Inspection (2009)', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA provided a team of 3 engineers, which performed inspections and structural rating analyses of two sets of bridges. ' },
    { id: 33, title: 'NJ TRANSIT Newark Subway & PATCO Line Safety Review (2003)', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', description: 'LSEA, as a sub-consultant, provided safety review services for the State Oversight Agency, through performing an on-site review of the implementation of the System Safety Program.' }
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
