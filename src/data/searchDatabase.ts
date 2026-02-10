export interface SearchItem {
  id: string;
  page_title: string;
  page_url: string;
  heading: string | null;
  description: string | null;
  keywords: string[];
}

export const searchDatabase: SearchItem[] = [
  // Main Pages
  {
    id: 'home',
    page_title: 'Home',
    page_url: '/',
    heading: 'Welcome to LSEA',
    description: 'Leading engineering solutions and services',
    keywords: ['home', 'main', 'start']
  },
  {
    id: 'about',
    page_title: 'About Us',
    page_url: '/about',
    heading: 'About LSEA',
    description: 'Learn about our company, mission, and values',
    keywords: ['about', 'company', 'team', 'mission', 'values']
  },
  {
    id: 'services',
    page_title: 'Services',
    page_url: '/services',
    heading: 'Our Services',
    description: 'Engineering and consulting services',
    keywords: ['services', 'consulting', 'solutions']
  },
  {
    id: 'portfolio',
    page_title: 'Portfolio',
    page_url: '/portfolio',
    heading: 'Our Portfolio',
    description: 'Explore our projects and case studies',
    keywords: ['portfolio', 'projects', 'case studies', 'work']
  },
  {
    id: 'clients',
    page_title: 'Clients',
    page_url: '/clients',
    heading: 'Our Clients',
    description: 'Organizations we work with',
    keywords: ['clients', 'partners', 'businesses']
  },
  {
    id: 'contact',
    page_title: 'Contact Us',
    page_url: '/contact',
    heading: 'Get in Touch',
    description: 'Contact us for inquiries and support',
    keywords: ['contact', 'email', 'phone', 'reach out', 'inquiry']
  },
  {
    id: 'careers',
    page_title: 'Careers',
    page_url: '/careers',
    heading: 'Join Our Team',
    description: 'Career opportunities and job openings',
    keywords: ['careers', 'jobs', 'employment', 'hiring', 'positions']
  },
  {
    id: 'offices',
    page_title: 'Offices',
    page_url: '/offices',
    heading: 'Our Offices',
    description: 'Office locations and contact information',
    keywords: ['offices', 'locations', 'addresses', 'branches']
  },
  {
    id: 'partners',
    page_title: 'Partners',
    page_url: '/partners',
    heading: 'Our Partners',
    description: 'Strategic partnerships and collaborations',
    keywords: ['partners', 'partnerships', 'collaborations', 'associates']
  },

  // Engineering Disciplines & Keywords
  {
    id: 'civil-engineering',
    page_title: 'Civil Engineering',
    page_url: '/services',
    heading: 'Civil Engineering Services',
    description: 'Infrastructure, construction, and civil projects',
    keywords: ['civil engineering', 'civil engineer', 'infrastructure', 'construction', 'structural design', 'bridges', 'roads', 'highways', 'foundations']
  },
  {
    id: 'mechanical-engineering',
    page_title: 'Mechanical Engineering',
    page_url: '/services',
    heading: 'Mechanical Engineering Services',
    description: 'Mechanical design and systems engineering',
    keywords: ['mechanical engineering', 'mechanical engineer', 'mechanical design', 'HVAC', 'systems', 'machinery', 'equipment']
  },
  {
    id: 'electrical-engineering',
    page_title: 'Electrical Engineering',
    page_url: '/services',
    heading: 'Electrical Engineering Services',
    description: 'Electrical systems and power solutions',
    keywords: ['electrical engineering', 'electrical engineer', 'power systems', 'electrical design', 'wiring', 'systems', 'circuits']
  },
  {
    id: 'structural-engineering',
    page_title: 'Structural Engineering',
    page_url: '/services',
    heading: 'Structural Engineering Services',
    description: 'Structural design and analysis',
    keywords: ['structural engineering', 'structural engineer', 'structural design', 'analysis', 'load', 'stability']
  },

  // Project Types
  {
    id: 'commercial-projects',
    page_title: 'Commercial Projects',
    page_url: '/portfolio',
    heading: 'Commercial Engineering',
    description: 'Commercial and business projects',
    keywords: ['commercial', 'commercial projects', 'business', 'office', 'retail', 'commercial buildings']
  },
  {
    id: 'residential-projects',
    page_title: 'Residential Projects',
    page_url: '/portfolio',
    heading: 'Residential Engineering',
    description: 'Residential and housing projects',
    keywords: ['residential', 'residential projects', 'housing', 'apartments', 'homes', 'residential buildings']
  },
  {
    id: 'industrial-projects',
    page_title: 'Industrial Projects',
    page_url: '/portfolio',
    heading: 'Industrial Engineering',
    description: 'Industrial and manufacturing projects',
    keywords: ['industrial', 'industrial projects', 'manufacturing', 'factories', 'plants', 'warehouses']
  },
  {
    id: 'infrastructure-projects',
    page_title: 'Infrastructure Projects',
    page_url: '/portfolio',
    heading: 'Infrastructure Development',
    description: 'Public infrastructure and development projects',
    keywords: ['infrastructure', 'infrastructure projects', 'public works', 'development', 'transit', 'transportation']
  },

  // Specific Services
  {
    id: 'bridge-inspection-service',
    page_title: 'Bridge Inspection',
    page_url: '/services/1',
    heading: 'Bridge Inspection Services',
    description: 'Evaluation, inspection, and rating services for highways and railroads',
    keywords: ['bridge inspection', 'bridge inspection service', 'railroad bridges', 'short-span bridges', 'major bridges', 'culverts', 'sign structures', 'pedestrian bridges', 'utility bridges', 'non-destructive testing', 'load testing', 'rating']
  },
  {
    id: 'bridge-design-service',
    page_title: 'Bridge Design and Rehabilitation',
    page_url: '/services/2',
    heading: 'Bridge Design and Rehabilitation',
    description: 'Complete bridge rehabilitation and replacement design services',
    keywords: ['bridge design', 'bridge rehabilitation', 'bridge replacement', 'steel bridges', 'concrete bridges', 'prestressed concrete', 'timber bridges', 'arch bridges', 'truss bridges', 'seismic analysis', 'foundation studies']
  },
  {
    id: 'building-assessment-service',
    page_title: 'Building Assessment',
    page_url: '/services/3',
    heading: 'Building Assessment Services',
    description: 'Comprehensive inspection services for commercial and residential buildings',
    keywords: ['building assessment', 'building inspection', 'warehouses', 'offices', 'stadiums', 'hospitals', 'laboratories', 'schools', 'churches', 'condition inspection', 'ADA compliance', 'HUD', 'emergency damage', 'pre-purchase']
  },
  {
    id: 'building-design-service',
    page_title: 'Building Design and Rehabilitation',
    page_url: '/services/4',
    heading: 'Building Design and Rehabilitation',
    description: 'Architectural and engineering services for commercial and industrial buildings',
    keywords: ['building design', 'building rehabilitation', 'warehouses', 'stadiums', 'office buildings', 'apartments', 'condominiums', 'hospitals', 'laboratories', 'schools', 'churches', 'HUD housing', 'feasibility studies', 'diagnostic studies', 'structural design']
  },
  {
    id: 'architecture-service',
    page_title: 'Architecture',
    page_url: '/services/5',
    heading: 'Architecture Services',
    description: 'Architectural design and consulting services throughout the Tri-state area',
    keywords: ['architecture', 'architectural design', 'residential design', 'commercial design', 'industrial design', 'high rise', 'shopping center', 'plaza', 'apartment', 'religious buildings', 'libraries']
  },
  {
    id: 'mep-engineering-service',
    page_title: 'MEP Engineering',
    page_url: '/services/6',
    heading: 'MEP Engineering Services',
    description: 'Mechanical, Electrical, and Plumbing systems design and engineering',
    keywords: ['MEP', 'MEP engineering', 'HVAC', 'HVAC upgrade', 'generator design', 'emergency generator', 'fire protection', 'sprinkler systems', 'standpipe', 'energy audit', 'electrical system', 'solar power', 'boiler', 'chiller', 'lighting design', 'lightning protection', 'power distribution', 'transformer', 'elevator', 'escalator']
  },
  {
    id: 'site-highway-service',
    page_title: 'Site and Highway Engineering',
    page_url: '/services/7',
    heading: 'Site and Highway Engineering',
    description: 'Highway design, construction, and infrastructure projects',
    keywords: ['site engineering', 'highway engineering', 'traffic flows', 'highway intersections', 'highway interchanges', 'geometric alignment', 'pavement design', 'pavement maintenance', 'construction assistance', 'detours']
  },
  {
    id: 'land-surveying-service',
    page_title: 'Land Surveying',
    page_url: '/services/8',
    heading: 'Land Surveying Services',
    description: 'Professional surveying services for engineering and construction',
    keywords: ['land surveying', 'surveying', 'transportation surveys', 'right-of-way', 'property surveys', 'construction layout', 'subdivision surveys', 'ALTA', 'ACSM', 'topographic surveys', 'environmental surveys', 'control surveys']
  },
  {
    id: 'structural-assessment-service',
    page_title: 'Structural Assessment and Design',
    page_url: '/services/9',
    heading: 'Structural Assessment and Design',
    description: 'Licensed professional engineers offering detailed structural assessments',
    keywords: ['structural assessment', 'structural design', 'condition assessment', 'NABIE standards', 'ADA compliance', 'UPCS', 'HQS', 'electrical evaluation', 'mechanical evaluation', 'drone inspection', 'drone assisted', 'safety audit', 'security audit']
  },
  {
    id: 'traffic-engineering-service',
    page_title: 'Traffic Engineering',
    page_url: '/services/10',
    heading: 'Traffic Engineering Services',
    description: 'Traffic engineering studies and analysis',
    keywords: ['traffic engineering', 'traffic studies', 'traffic analysis', 'detour design', 'temporary detours', 'roadway engineering']
  },

  // Specific Projects
  {
    id: 'project-overhead-signs',
    page_title: 'Overhead Sign Inspections (2016)',
    page_url: '/portfolio/1',
    heading: 'Overhead Sign Inspections',
    description: 'NJDOT overhead sign structure inspections with ultrasonic testing',
    keywords: ['overhead sign', 'sign inspection', 'NJDOT', 'ultrasonic testing', 'anchor bolts', 'Pontis evaluation']
  },
  {
    id: 'project-passaic-bridges',
    page_title: 'Passaic County Bridge Inspections (2012-2013)',
    page_url: '/portfolio/2',
    heading: 'Passaic County Bridges',
    description: 'Inspection and load rating of 55 Passaic County bridges',
    keywords: ['Passaic County', 'bridge inspection', 'load rating', 'Wanaque Reservoir', 'West Brooke Bridge', 'Pontis evaluation']
  },
  {
    id: 'project-on-off-state-bridges',
    page_title: 'Inspection and Rating of On and Off State Bridges (2010-2012)',
    page_url: '/portfolio/3',
    heading: 'State Bridge Inspections',
    description: 'Biennial inspections of 44 on-system and 2 off-system state bridges',
    keywords: ['state bridges', 'biennial inspection', 'load rating', 'Pontis evaluation', 'on-system', 'off-system']
  },
  {
    id: 'project-cantilever-signs',
    page_title: 'Cantilever & Overhead Sign Structure Inspection (2011)',
    page_url: '/portfolio/4',
    heading: 'Cantilever Sign Structures',
    description: 'NJDOT evaluation of 137 cantilever and overhead sign structures',
    keywords: ['cantilever', 'overhead signs', 'NJDOT', 'fatigue stress', 'safety inspection']
  },
  {
    id: 'project-morris-bridges',
    page_title: 'Morris County Bridges - Biennial Inspections (2007)',
    page_url: '/portfolio/5',
    heading: 'Morris County Bridges',
    description: 'Biennial inspections of 42 Morris County bridges',
    keywords: ['Morris County', 'bridge inspection', 'steel bridges', 'concrete beams', 'prestressed concrete', 'culverts']
  },
  {
    id: 'project-fcm-bridges',
    page_title: 'Special Inspection of 7 FCM Bridges (2007)',
    page_url: '/portfolio/6',
    heading: 'FCM Bridge Inspection',
    description: 'NJDOT inspection of 7 fracture critical member bridges',
    keywords: ['FCM', 'fracture critical', 'special inspection', 'bridge replacement', 'detour plans', 'traffic study']
  },
  {
    id: 'project-gsp-bridges',
    page_title: 'NJTA – GSP North and South (2017-2018)',
    page_url: '/portfolio/7',
    heading: 'Garden State Parkway Bridges',
    description: 'Prime consultant inspection of over 250 bridges on the Garden State Parkway',
    keywords: ['Garden State Parkway', 'GSP', 'NJTA', 'bridge inspection', 'New Jersey Turnpike']
  },
  {
    id: 'project-microwave-towers',
    page_title: 'NJTA – Microwave Tower Inspection (2014 and 2017)',
    page_url: '/portfolio/8',
    heading: 'Microwave Tower Inspection',
    description: 'Inspection of 15 and 24 cell towers for structural integrity',
    keywords: ['microwave tower', 'cell tower', 'tower inspection', 'NJTA', 'structural integrity']
  },
  {
    id: 'project-gsp-culverts',
    page_title: 'NJTA – GSP Sign Structures and Culverts Inspection (2010)',
    page_url: '/portfolio/9',
    heading: 'GSP Sign Structures and Culverts',
    description: 'Inspection of 140 sign structures and 53 culverts using InspectTech software',
    keywords: ['sign structure', 'culvert', 'InspectTech', 'Pontis', 'BMS evaluation', 'Garden State Parkway']
  },
  {
    id: 'project-njta-part-a',
    page_title: 'NJTA – Part A Inspection (2003 to 2015)',
    page_url: '/portfolio/10',
    heading: 'NJTA Part A Inspection',
    description: 'Annual and in-depth inspection of 195 bridges across all districts',
    keywords: ['NJTA', 'New Jersey Turnpike', 'bridge inspection', 'long-span', 'Laderman Bridge', 'FCM', 'load rating']
  },
  {
    id: 'project-njta-part-b',
    page_title: 'NJTA - Part B Inspection (2007 to 2012)',
    page_url: '/portfolio/11',
    heading: 'NJTA Part B Inspection',
    description: 'Inspection of 220 bridges across districts 1 through 8',
    keywords: ['NJTA', 'Part B', 'bridge inspection', 'InspectTech', '220 bridges']
  },
  {
    id: 'project-njta-part-c',
    page_title: 'NJTA – Part C Inspection (2006 to 2012 & 2014)',
    page_url: '/portfolio/12',
    heading: 'NJTA Part C Inspection',
    description: 'Prime consultant inspection of 13 I-95 bridges, 75 culverts, and 430+ sign structures',
    keywords: ['NJTA', 'Part C', 'I-95', 'bridge inspection', 'culvert inspection', 'sign structure']
  },
  {
    id: 'project-njta-part-d',
    page_title: 'NJTA - Part D Inspection (2005 and 2009)',
    page_url: '/portfolio/13',
    heading: 'NJTA Part D Inspection',
    description: 'Inspection of 5 I-95 Extension bridges and 42 culverts',
    keywords: ['NJTA', 'Part D', 'I-95 Extension', 'bridge inspection', 'culvert inspection']
  },
  {
    id: 'project-drpa-patco',
    page_title: 'DRPA/PATCO Threat & Vulnerability Assessment (2016)',
    page_url: '/portfolio/14',
    heading: 'DRPA/PATCO Assessment',
    description: 'Threat and vulnerability assessment for DRPA/PATCO properties',
    keywords: ['DRPA', 'PATCO', 'threat assessment', 'vulnerability assessment', 'Delaware River Port Authority']
  },
  {
    id: 'project-structural-hardening',
    page_title: 'Structural Hardening Countermeasures (2004 - 2006)',
    page_url: '/portfolio/15',
    heading: 'Structural Hardening',
    description: 'Benjamin Franklin Bridge and Walt Whitman Bridge hardening assessment',
    keywords: ['structural hardening', 'Benjamin Franklin Bridge', 'Walt Whitman Bridge', 'countermeasures']
  },
  {
    id: 'project-drpa-facility',
    page_title: 'DRPA/PATCO Facility Replacement Study (2011 – 2012)',
    page_url: '/portfolio/16',
    heading: 'Facility Replacement Study',
    description: 'Asset value studies and replacement cost estimates for DRPA',
    keywords: ['DRPA', 'facility replacement', 'asset value', 'replacement cost', 'catastrophic events']
  },
  {
    id: 'project-patco-biennial',
    page_title: 'PATCO Bridges Biennial Inspection (2010 & 2014)',
    page_url: '/portfolio/17',
    heading: 'PATCO Bridge Inspection',
    description: 'Biennial inspection of PATCO bridges between Philadelphia and Camden',
    keywords: ['PATCO', 'bridge inspection', 'Philadelphia', 'Camden', 'rail bridges']
  },
  {
    id: 'project-walt-whitman',
    page_title: 'Walt Whitman Bridge Biennial Inspection (2008, 2010 and 2012)',
    page_url: '/portfolio/19',
    heading: 'Walt Whitman Bridge',
    description: 'Biennial inspection of Walt Whitman Bridge',
    keywords: ['Walt Whitman Bridge', 'biennial inspection', 'bridge inspection', 'PATCO rail']
  },
  {
    id: 'project-benjamin-franklin',
    page_title: 'Benjamin Franklin Bridge Biennial Inspection (2004, 2006, 2008 & 2010)',
    page_url: '/portfolio/20',
    heading: 'Benjamin Franklin Bridge',
    description: 'Biennial inspection of Benjamin Franklin Bridge with PATCO rail line',
    keywords: ['Benjamin Franklin Bridge', 'biennial inspection', 'PATCO', 'rail bridge', 'historic bridge']
  },
  {
    id: 'project-wtc-memorial',
    page_title: 'JFK Condition Survey of WTC Memorial (2017)',
    page_url: '/portfolio/21',
    heading: 'WTC Memorial Inspection',
    description: 'Condition survey of WTC Memorial pools, building, and tunnels',
    keywords: ['WTC', 'World Trade Center', 'memorial', 'condition survey', 'JFK', 'pools']
  },
  {
    id: 'project-elizabeth-marine',
    page_title: 'Condition Survey of Buildings at Elizabeth Marine Terminal (2015)',
    page_url: '/portfolio/22',
    heading: 'Elizabeth Marine Terminal',
    description: 'Condition inspection of 4 PANYNJ buildings in Port Ivory, Staten Island',
    keywords: ['Elizabeth Marine Terminal', 'Port Ivory', 'Staten Island', 'PANYNJ', 'building inspection']
  },
  {
    id: 'project-gwb-buildings',
    page_title: 'GWB Building and Miscellaneous Structures Condition Survey (2014)',
    page_url: '/portfolio/23',
    heading: 'GWB Buildings Survey',
    description: 'Condition survey of George Washington Bridge buildings and structures',
    keywords: ['GWB', 'George Washington Bridge', 'condition survey', 'fire station', 'emergency response']
  },
  {
    id: 'project-howland-port',
    page_title: 'Howland Hook/Port Ivory Buildings Condition Survey (2013)',
    page_url: '/portfolio/24',
    heading: 'Howland Hook Survey',
    description: 'Condition inspection of buildings in Port Ivory owned by PANYNJ',
    keywords: ['Howland Hook', 'Port Ivory', 'PANYNJ', 'building inspection']
  },
  {
    id: 'project-essex-recovery',
    page_title: 'Essex County Resources Recovery facility Condition Survey (2012)',
    page_url: '/portfolio/25',
    heading: 'Essex County Resource Center',
    description: 'Structural building condition survey for Essex County Resource Recovery facility',
    keywords: ['Essex County', 'resource recovery', 'recycling facility', 'condition survey', 'New Jersey']
  },
  {
    id: 'project-brooklyn-pier',
    page_title: 'Condition Survey of Buildings in Brooklyn Pier (2011)',
    page_url: '/portfolio/26',
    heading: 'Brooklyn Pier Buildings',
    description: 'Structural condition surveys of 5 warehouse buildings in Brooklyn Pier',
    keywords: ['Brooklyn Pier', 'warehouse', 'New York', 'PANYNJ', 'Port Authority']
  },
  {
    id: 'project-teterboro-airport',
    page_title: 'Teterboro Airport Condition Inspection (2011)',
    page_url: '/portfolio/27',
    heading: 'Teterboro Airport',
    description: 'Condition inspection of 7 buildings at Teterboro Airport including hangar and tower',
    keywords: ['Teterboro Airport', 'airport inspection', 'hangar', 'museum', 'New Jersey', 'tower']
  },
  {
    id: 'project-undergrade-bgf',
    page_title: 'Undergrade Bridge Inspection, Groups: B, E and F (2015-2016)',
    page_url: '/portfolio/28',
    heading: 'Undergrade Bridge Inspection B, E, F',
    description: 'In-depth undergrade bridge inspections for 3 project groups',
    keywords: ['undergrade bridge', 'bridge inspection', 'in-depth inspection', 'NJ Transit', 'rail']
  },
  {
    id: 'project-raritan-drawbridge',
    page_title: 'Rehabilitation of Raritan Drawbridge (2015)',
    page_url: '/portfolio/29',
    heading: 'Raritan Drawbridge',
    description: 'Rehabilitation of Raritan Drawbridge damaged during Hurricane Sandy',
    keywords: ['Raritan Drawbridge', 'drawbridge', 'rehabilitation', 'Hurricane Sandy', 'New Jersey']
  },
  {
    id: 'project-undergrade-main',
    page_title: 'Undergrade Bridge Inspection (2012-2013)',
    page_url: '/portfolio/30',
    heading: 'Undergrade Bridge Inspection',
    description: 'Prime consultant inspection of 61 NJ Transit rail line bridges',
    keywords: ['undergrade bridge', 'NJ Transit', 'rail bridge', 'bridge inspection', '61 bridges']
  },
  {
    id: 'project-aberdeen-parking',
    page_title: 'Aberdeen-Matawan Park & Ride Parking Study (2007)',
    page_url: '/portfolio/31',
    heading: 'Aberdeen-Matawan Station',
    description: 'Planning and study of parking lot for Aberdeen-Matawan NJ TRANSIT station',
    keywords: ['Aberdeen-Matawan', 'Park and Ride', 'parking study', 'NJ TRANSIT', 'transit station']
  },
  {
    id: 'project-undergrade-2009',
    page_title: 'Undergrade Bridge Inspection (2009)',
    page_url: '/portfolio/32',
    heading: 'Undergrade Bridge Inspection 2009',
    description: 'Inspection and structural rating analysis of bridge sets for NJ TRANSIT',
    keywords: ['undergrade bridge', 'bridge inspection', 'rating analysis', 'NJ TRANSIT', 'rail bridges']
  },
  {
    id: 'project-nj-transit-safety',
    page_title: 'NJ TRANSIT Newark Subway & PATCO Line Safety Review (2003)',
    page_url: '/portfolio/33',
    heading: 'NJ TRANSIT Safety Review',
    description: 'Safety review for Newark Subway and PATCO line State Oversight Agency',
    keywords: ['NJ TRANSIT', 'Newark Subway', 'PATCO', 'safety review', 'system safety program']
  },

  // Legal/Policy Pages
  {
    id: 'privacy',
    page_title: 'Privacy Policy',
    page_url: '/privacy-policy',
    heading: 'Privacy Policy',
    description: 'Our privacy and data protection policy',
    keywords: ['privacy', 'privacy policy', 'data protection', 'gdpr']
  },
  {
    id: 'terms',
    page_title: 'Terms of Use',
    page_url: '/terms-of-use',
    heading: 'Terms of Use',
    description: 'Website terms and conditions',
    keywords: ['terms', 'terms of use', 'conditions', 'agreement', 'legal']
  },
  {
    id: 'sitemap',
    page_title: 'Sitemap',
    page_url: '/sitemap',
    heading: 'Sitemap',
    description: 'Website map and navigation',
    keywords: ['sitemap', 'site map', 'navigation', 'directory']
  },

  // Employee/Access
  {
    id: 'employee-access',
    page_title: 'Employee Access',
    page_url: '/employee-access',
    heading: 'Employee Portal',
    description: 'Employee login and access portal',
    keywords: ['employee', 'employee access', 'portal', 'login', 'staff']
  },
  {
    id: 'login',
    page_title: 'Login',
    page_url: '/login',
    heading: 'User Login',
    description: 'User authentication and login',
    keywords: ['login', 'sign in', 'authenticate', 'password', 'account']
  },
  {
    id: 'dashboard',
    page_title: 'Dashboard',
    page_url: '/dashboard',
    heading: 'User Dashboard',
    description: 'User dashboard and profile',
    keywords: ['dashboard', 'profile', 'account', 'user']
  },
];

/**
 * Search the local database for matching terms
 * @param query - The search query
 * @returns Array of matching search items
 */
export const searchLocal = (query: string): SearchItem[] => {
  if (!query.trim()) {
    return [];
  }

  const normalizedQuery = query.trim().toLowerCase();

  return searchDatabase.filter((item) => {
    // Check page title
    if (item.page_title.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Check heading
    if (item.heading?.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Check description
    if (item.description?.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Check keywords
    if (
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(normalizedQuery)
      )
    ) {
      return true;
    }

    return false;
  });
};
