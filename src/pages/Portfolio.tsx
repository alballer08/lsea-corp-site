import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();
  const projectsPerPage = 9;

  useEffect(() => {
    document.title = "LSEA | Portfolio";
    setIsVisible(true);
  }, []);

  // Handle URL query parameter for filtering - run on every location change
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const filter = urlParams.get('filter');
    
    if (filter) {
      // Map the filter names to category values
      const categoryMap = {
        'Bridge Inspection': 'bridge-inspection',
        'Structural Inspection': 'structural-inspection', 
        'Building Assessment': 'building-assessment',
        'Transit & Rail': 'transit-rail',
        'Assessment & Evaluation': 'assessment',
        'Surveying': 'surveying'
      };
      
      const category = categoryMap[filter as keyof typeof categoryMap] || 'all';
      setSelectedCategory(category);
      setCurrentPage(1); // Reset to first page when filtering
    } else {
      setSelectedCategory('all');
    }
  }, [location.search]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const projects = [
    { id: 1, title: 'Overhead Sign Inspections (2016)', image: '/public/images/overheadsign.jpg', description: 'LSEA provided sign inspection services to the NJDOT for 106 state-owned overhead sign structures along various routes throughout New Jersey.', category: 'structural-inspection' },
    { id: 2, title: 'Passaic County Bridge Inspections (2012-2013)', image: '/public/images/njdot-bridge.jpg', description: 'LSEA performed inspections and calculated load ratings for 55 Passaic County owned bridges as part of a two cycle agreement.', category: 'bridge-inspection' },
    { id: 3, title: 'Inspection and Rating of On and Off State Bridges (2010-2012)', image: '/public/images/wanaque-2.jpg', description: 'LSEA handled the routine biennial inspections, bridge condition evaluations, and Pontis evaluations for 44 On and 2 Off state bridges.', category: 'bridge-inspection' },
    { id: 4, title: 'Cantilever & Overhead Sign Structure Inspection (2011)', image: '/public/images/njdot-bridge.jpg', description: 'LSEA evaluated the condition and fatigue stresses of 137 cantilever and overhead signs for the NJDOT.', category: 'structural-inspection' },
    { id: 5, title: 'Morris County Bridges - Biennial Inspections (2007)', image: '/public/images/njdot-bridge.jpg', description: 'LSEA performed biennial inspections of 42 Morris County bridges.', category: 'bridge-inspection' },
    { id: 6, title: 'Special Inspection of 7 FCM Bridges (2007)', image: '/public/images/wanaque-2.jpg', description: 'LSEA assisted the NJDOT Bureau of Structural Evaluation inspected 7 various FCM bridge structures.', category: 'bridge-inspection' },
    { id: 7, title: 'NJTA – GSP North and South (2005, 2008, 2009, 2017, and 2018)', image: '/public/images/NJTA-89.3SR.jpg', description: 'In 2017 and 2018, NJTA selected LSEA as a prime consultant to inspect over 250 bridges along the Garden State Parkway.', category: 'bridge-inspection' },
    { id: 8, title: 'NJTA – Microwave Tower Inspection (2014 and 2017)', image: '/public/images/GSPAntenna2.jpg', description: 'LSEA inspected 15 cell towers in 2014 and 24 cell towers in 2017.', category: 'structural-inspection' },
    { id: 9, title: 'NJTA – GSP Sign Structures and Culverts Inspection (2010)', image: '/public/images/NJTA-95.2S.jpg', description: 'LSEA performed inspections and Pontis/BMS evaluations of 140 Sign Structures and 53 Culverts.', category: 'structural-inspection' },
    { id: 10, title: 'NJTA – Part A Inspection (2003 to 2015)', image: '/public/images/NJTA-95.2S.jpg', description: 'LSEA performed annual and in-depth inspections of 195 bridges, ranging from single span to multi-span structures, in all districts for the New Jersey Turnpike Authority. ', category: 'bridge-inspection' },
    { id: 11, title: 'NJTA - Part B Inspection (2007 to 2012)', image: '/public/images/NJTA-95.2S.jpg', description: 'LSEA performed inspections of 220 bridges within districts 1 through 8.', category: 'bridge-inspection' },
    { id: 12, title: 'NJTA – Part C Inspection (2006 to 2012 & 2014)', image: '/public/images/NJTA-95.2S.jpg', description: 'LSEA, as the prime consultant, performed inspections of 13 bridges within the I-95 extension, 75 culverts in all districts and over 430 sign structures.', category: 'bridge-inspection' },
    { id: 13, title: 'NJTA - Part D Inspection (2005 and 2009)', image: '/public/images/NJTA-95.2S.jpg', description: 'LSEA performed inspections of 5 bridges within the I-95 Extension, and 42 culverts in districts 4, 5, and 8.', category: 'bridge-inspection' },
    { id: 14, title: 'DRPA/PATCO Threat & Vulnerability Assessment (2016)', image: '/public/images/PATCOstation.jpg', description: 'LSEA conducted a threat & vulnerability assessment for the properties owned and operated by the DRPA-PATCO.', category: 'assessment' },
    { id: 15, title: 'Structural Hardening Countermeasures (2004 - 2006)', image: '/public/images/PATCOstation.jpg', description: 'LSEA, as a sub-consultant, performed a structural hardening assessment on Benjamin Franklin Bridge and Walt Whitman Bridge.', category: 'assessment' },
    { id: 16, title: 'DRPA/PATCO Facility Replacement Study (2011 – 2012)', image: '/public/images/PATCOstation.jpg', description: 'LSEA, as a sub-consultant, assisted DRPA in performing asset value studies, in order to estimate potential asset replacement costs due to catastrophic events.', category: 'assessment' },
    { id: 17, title: 'PATCO Bridges Biennial Inspection (2010 & 2014)', image: '/public/images/PATCOstation.jpg', description: 'LSEA, as a sub-consultant, performed a biennial inspection of the PATCO line bridges between Philadelphia, PA and Camden, NJ.', category: 'bridge-inspection' },
    { id: 18, title: 'PATCO Safety Review (2003)', image: '/public/images/PATCOstation.jpg', description: 'LSEA, as a sub-consultant, provided safety review services for the State Oversight Agency.', category: 'assessment' },
    { id: 19, title: 'Walt Whitman Bridge Biennial Inspection (2008, 2010 and 2012)', image: '/public/images/WaltWhitmanBridge.jpg', description: 'LSEA, as a sub-consultant, performed a biennial inspection of the Walt Whitman Bridge.', category: 'bridge-inspection' },
    { id: 20, title: 'Benjamin Franklin Bridge Biennial Inspection (2004, 2006, 2008 & 2010)', image: '/public/images/WaltWhitmanBridge.jpg', description: 'LSEA, as a sub-consultant, performed a biennial inspection of the Benjamin Franklin Bridge, which carries a high speed PATCO rail line along each fascia.', category: 'bridge-inspection' },
    { id: 21, title: 'JFK Condition Survey of WTC Memorial (2017)', image: '/public/images/wtc.jpg', description: 'LSEA performed condition survey inspections of the WTC memorial site, including both pools, the WTC Memorial Building, and the tunnels underneath the site.', category: 'building-assessment' },
    { id: 22, title: 'Condition Survey of Buildings at Elizabeth Marine Terminal (2015)', image: '/public/images/wtc.jpg', description: 'LSEA performed condition inspections of 4 buildings owned by the PANYNJ in Port Ivory, Staten Island, New York.', category: 'building-assessment' },
    { id: 23, title: 'GWB Building and Miscellaneous Structures Condition Survey (2014)', image: '/public/images/wtc.jpg', description: 'Modern fire station with emergency response capabilities and training facilities.', category: 'building-assessment' },
    { id: 24, title: 'Howland Hook/Port Ivory Buildings Condition Survey (2013)', image: '/public/images/wtc.jpg', description: 'LSEA performed condition inspection of buildings owned by the PANYNJ in Port Ivory.', category: 'building-assessment' },
    { id: 25, title: 'Essex County Resources Recovery facility Condition Survey (2012)', image: '/public/images/EssexResourceCenter.jpg', description: 'LSEA provided the structural building condition survey for the Essex County Resource Recovery facility.', category: 'building-assessment' },
    { id: 26, title: 'Condition Survey of Buildings in Brooklyn Pier, Brooklyn, New York (2011)', image: '/public/images/EssexResourceCenter.jpg', description: 'LSEA provided structural building condition surveys for 5 warehouse buildings located in Brooklyn Pier owned by Port Authority of NY & NJ.', category: 'building-assessment' },
    { id: 27, title: 'Teterboro Airport Condition Inspection (2011)', image: '/public/images/Hanger1.jpg', description: ' LSEA performed condition inspection on 7 buildings within Teterboro Airport, including office buildings, hangers, the tower, and the museum.', category: 'building-assessment' },
    { id: 28, title: 'Undergrade Bridge Inspection, Groups: B, E and F (2015-2016)', image: '/public/images/transit-1.jpg', description: 'LSEA provided a team of 3 engineers for the in-depth hands-on undergrade bridge inspections for 3 projects.', category: 'transit-rail' },
    { id: 29, title: 'Rehabilitation of Raritan Drawbridge (2015)', image: '/public/images/transit-db.jpg', description: 'LSEA was involved in the rehabilitation of the Raritan Drawbridge, which was severely damaged during Hurricane Sandy.', category: 'transit-rail' },
    { id: 30, title: 'Undergrade Bridge Inspection (2012-2013)', image: '/public/images/transit-1.jpg', description: 'LSEA, as the Prime Consultant, performed inspections and structural rating analyses of 61 bridges carrying New Jersey Transit rail lines.', category: 'transit-rail' },
    { id: 31, title: 'Aberdeen-Matawan Park & Ride Parking Study (2007)', image: '/public/images/transit-3.jpg', description: 'LSEA was involved in the planning and study of the parking lot for the Aberdeen-Matawan station for NJ TRANSIT.', category: 'surveying' },
    { id: 32, title: 'Undergrade Bridge Inspection (2009)', image: '/public/images/transit-1.jpg', description: 'LSEA provided a team of 3 engineers, which performed inspections and structural rating analyses of two sets of bridges. ', category: 'transit-rail' },
    { id: 33, title: 'NJ TRANSIT Newark Subway & PATCO Line Safety Review (2003)', image: '/public/images/transit-3.jpg', description: 'LSEA, as a sub-consultant, provided safety review services for the State Oversight Agency, through performing an on-site review of the implementation of the System Safety Program.', category: 'transit-rail' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [...new Set(projects.map(project => project.category))];

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(500, 500);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(500, 500);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh]">
        <img
          src="/public/images/constructionsite.jpg"
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
          {/* Filter */}
          <div className="mb-8">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-64 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Filter by project type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
                <SelectItem value="all">All Project Types</SelectItem>
                <SelectItem value="bridge-inspection">Bridge Inspection</SelectItem>
                <SelectItem value="structural-inspection">Structural Inspection</SelectItem>
                <SelectItem value="building-assessment">Building Assessment</SelectItem>
                <SelectItem value="transit-rail">Transit & Rail</SelectItem>
                <SelectItem value="assessment">Assessment & Evaluation</SelectItem>
                <SelectItem value="surveying">Surveying</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
