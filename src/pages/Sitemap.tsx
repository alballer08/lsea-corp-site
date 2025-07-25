
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "LSEA | Sitemap";
    setIsVisible(true);
  }, []);

const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  
  const siteStructure = [
    {
      name: 'Home',
      url: '/',
      children: []
    },
    {
      name: 'About',
      url: '/about',
      children: []
    },
    {
      name: 'Services',
      url: '/services',
      children: [
        { name: 'Bridge Inspection', url: '/services/1' },
        { name: 'Bridge Design and Rehabilitation', url: '/services/2' },
        { name: 'Building Assessment', url: '/services/3' },
        { name: 'Building Design and Rehabilitation', url: '/services/4' },
        { name: 'Architecture', url: '/services/5' },
        { name: 'MEP Engineering', url: '/services/6' },
        { name: 'Site and Highway Engineering', url: '/services/7' },
        { name: 'Land Surveying', url: '/services/8' },
        { name: 'Structural Assessment and Design', url: '/services/9' },
        { name: 'Traffic Engineering', url: '/services/10' }
      ]
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
      children: [
        { name: 'Overhead Sign Inspections (2016)', url: '/portfolio/1' },
        { name: 'Passaic County Bridge Inspections (2012-2013)', url: '/portfolio/2' },
        { name: 'Inspection and Rating of On and Off State Bridges (2010-2012)', url: '/portfolio/3' },
        { name: 'Cantilever & Overhead Sign Structure Inspection (2011)', url: '/portfolio/4' },
        { name: 'Morris County Bridges - Biennal Inspections (2007)', url: '/portfolio/5' },
        { name: 'Special Inspections of 7 FCM Bridges (2007)', url: '/portfolio/6' },
        { name: 'NJTA - GSP North and South (2005, 2008, 2009, 2017, and 2018)', url: '/portfolio/7' },
        { name: 'NJTA - Microwave Tower Inspection (2014 and 2017)', url: '/portfolio/8' },
        { name: 'NJTA - GSP Sign Structures and Culverts Inspection (2010)', url: '/portfolio/9' },
        { name: 'NJTA – Part A Inspection (2003 to 2015)', url: '/portfolio/10' },
        { name: 'NJTA - Part B Inspection (2007 to 2012)', url: '/portfolio/11' },
        { name: 'NJTA – Part C Inspection (2006 to 2012 & 2014)', url: '/portfolio/12' },
        { name: 'NJTA - Part D Inspection (2005 and 2009)', url: '/portfolio/13' },
        { name: 'DRPA/PATCO Threat & Vulnerability Assessment (2016)', url: '/portfolio/14' },
        { name: 'Structural Hardening Countermeasures (2004 - 2006)', url: '/portfolio/15' },
        { name: 'DRPA/PATCO Facility Replacement Study (2011 – 2012)', url: '/portfolio/16' },
        { name: 'PATCO Bridges Biennial Inspection (2010 & 2014)', url: '/portfolio/17' },
        { name: 'PATCO Safety Review (2003)', url: '/portfolio/18' },
        { name: 'Walt Whitman Bridge Biennial Inspection (2008, 2010 and 2012)', url: '/portfolio/19' },
        { name: 'Benjamin Franklin Bridge Biennial Inspection (2004, 2006, 2008 & 2010)', url: '/portfolio/20' },
        { name: 'JFK Condition Survey of WTC Memorial (2017)', url: '/portfolio/21' },
        { name: 'Condition Survey of Buildings at Elizabeth Marine Terminal (2015)', url: '/portfolio/22' },
        { name: 'GWB Building and Miscellaneous Structures Condition Survey (2014)', url: '/portfolio/23' },
        { name: 'Howland Hook/Port Ivory Buildings Condition Survey (2013)', url: '/portfolio/24' },
        { name: 'Essex County Resources Recovery facility Condition Survey (2012)', url: '/portfolio/25' },
        { name: 'Condition Survey of Buildings in Brooklyn Pier, Brooklyn, New York (2011)', url: '/portfolio/26' },
        { name: 'Teterboro Airport Condition Inspection (2011)', url: '/portfolio/27' },
        { name: 'Undergrade Bridge Inspection, Groups: B, E and F (2015-2016)', url: '/portfolio/28' },
        { name: 'Rehabilitation of Raritan Drawbridge (2015)', url: '/portfolio/29' },
        { name: 'Undergrade Bridge Inspection (2012-2013)', url: '/portfolio/30' },
        { name: 'Aberdeen-Matawan Park & Ride Parking Study (2007)', url: '/portfolio/31' },
        { name: 'Undergrade Bridge Inspection (2009)', url: '/portfolio/32' },
        { name: 'NJ TRANSIT Newark Subway & PATCO Line Safety Review (2003)', url: '/portfolio/33' }
      ]
    },
    {
      name: 'Partners',
      url: '/partners',
      children: []
    },
    {
      name: 'Clients',
      url: '/clients',
      children: [ ]
    },
    {
      name: 'Offices',
      url: '/offices',
      children: []
    },
    {
      name: 'Careers',
      url: '/careers',
      children: []
    },
    {
      name: 'Contact',
      url: '/contact',
      children: []
    },
    {
      name: 'Employee Access',
      url: '/employee-access',
      children: [
        { name: 'Login', url: '/login' },
        { name: 'Dashboard', url: '/dashboard' }
      ]
    },
    {
      name: 'Legal',
      url: '#',
      children: [
        { name: 'Terms of Use', url: '/terms-of-use' },
        { name: 'Privacy Policy', url: '/privacy-policy' }
      ]
    },
    {
      name: 'Site Information',
      url: '#',
      children: [
        { name: 'Sitemap', url: '/sitemap' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
       <header className="bg-white py-10">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold font-montserrat text-gray-900 text-center">
        Site Map
      </h1>
    </div>
  </header>

      {/* Sitemap Content */}
      <section className={`bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Website Structure
            </h2>
            <p className="font-arial text-lg text-gray-600">
              Navigate through all pages and sections of the LSEA Corporation website.
            </p>
          </div>

          <div className="space-y-6">
            {siteStructure.map((section, index) => (
              <div
                key={section.name}
                className={`bg-gray-50 rounded-lg p-6 transition-all duration-300 ${index < 4 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div className="flex-1">
                    {section.url !== '#' ? (
                      <Link
                        to={section.url}
                        onClick={handleLinkClick}
                        className="font-montserrat text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                        {section.name}
                      </Link>

                    ) : (
                      <h3 className="font-montserrat text-xl font-semibold text-gray-900">
                        {section.name}
                      </h3>
                    )}

                    {section.children.length > 0 && (
                      <div className="ml-6 mt-4 space-y-2">
                        {section.children.map((child) => (
                          <div key={child.name} className="flex items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                            <Link
                              to={child.url}
                              onClick={handleLinkClick}
                              className="font-arial text-gray-700 hover:text-blue-600 transition-colors"
                            >
                              {child.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
