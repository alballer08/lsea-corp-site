import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { SearchModal } from './SearchModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  // Special handler for About section navigation
  const handleAboutNavigation = (section: string) => {
    const targetUrl = `/about#${section}`;
    
    if (location.pathname === '/about') {
      // If already on about page, just change the hash and trigger hashchange
      window.location.hash = section;
      // Manually trigger a custom event since hashchange might not fire for programmatic changes
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      // Navigate to about page with hash
      navigate(targetUrl);
    }
    
    setIsOpen(false);
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  // Special handler for Portfolio filtering
  const handlePortfolioFilter = (filter: string) => {
    const encodedFilter = encodeURIComponent(filter);
    const targetUrl = `/portfolio?filter=${encodedFilter}`;
    
    // Always navigate to ensure the filter is applied properly
    navigate(targetUrl);
    
    setIsOpen(false);
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  // Special handler for Services navigation
  const handleServiceNavigation = (serviceId: string) => {
    const targetUrl = `/services/${serviceId}`;
    
    // Always navigate to the specific service
    navigate(targetUrl);
    
    setIsOpen(false);
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-[1000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-navbar">
            {/* Logo */}
            <div 
              onClick={handleLogoClick}
              className="flex items-center space-x-1 cursor-pointer flex-shrink-0"
            >
              <div className="w-12 h-18 sm:w-12 sm:h-18 md:w-12 md:h-18 lg:w-12 lg:h-18 bg-transparent rounded flex items-center justify-center p-1 flex-shrink-0">
                <img 
                  src="/public/logo.png"
                  alt="LSEA Logo"
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: 'none',
                    opacity: 1,
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    color: 'initial'
                  }}
                />
              </div>
              <span className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-gray-900 font-montserrat flex-shrink-0">LSEA Corporation</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8">
              {/* About Dropdown */}
              <div className="relative group">
                <Link 
                  to="/about" 
                  onClick={handleLinkClick} 
                  className={`relative text-sm font-medium font-arial transition-colors duration-200 flex items-center space-x-1 ${location.pathname === '/about' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}
                >
                  <span>ABOUT</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button onClick={() => handleAboutNavigation('our-story')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Our Story</button>
                    <button onClick={() => handleAboutNavigation('company-mission')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Company Mission</button>
                    <button onClick={() => handleAboutNavigation('technical-expertise')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Technical Expertise</button>
                    <button onClick={() => handleAboutNavigation('total-commitment')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Total Commitment</button>
                    <button onClick={() => handleAboutNavigation('total-commitment')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Qualifications</button>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link 
                  to="/services" 
                  onClick={handleLinkClick} 
                  className={`relative text-sm font-medium font-arial transition-colors duration-200 flex items-center space-x-1 ${location.pathname === '/services' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/services" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">All Services</Link>
                    <button onClick={() => handleServiceNavigation('1')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Bridge Inspection</button>
                    <button onClick={() => handleServiceNavigation('2')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Bridge Design and Rehabilitation</button>
                    <button onClick={() => handleServiceNavigation('3')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Building Assessment</button>
                    <button onClick={() => handleServiceNavigation('4')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Building Design and Rehabilitation</button>
                    <button onClick={() => handleServiceNavigation('5')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Architecture</button>
                    <button onClick={() => handleServiceNavigation('6')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">MEP Engineering</button>
                    <button onClick={() => handleServiceNavigation('7')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Site and Highway Engineering</button>
                    <button onClick={() => handleServiceNavigation('8')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Land Surveying</button>
                    <button onClick={() => handleServiceNavigation('9')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Structural Assessment and Design</button>
                    <button onClick={() => handleServiceNavigation('10')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Traffic Engineering</button>
                  </div>
                </div>
              </div>

              {/* Portfolio Dropdown */}
              <div className="relative group">
                <Link 
                  to="/portfolio" 
                  onClick={handleLinkClick} 
                  className={`relative text-sm font-medium font-arial transition-colors duration-200 flex items-center space-x-1 ${location.pathname === '/portfolio' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}
                >
                  <span>PORTFOLIO</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/portfolio" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">All Projects</Link>
                    <button onClick={() => handlePortfolioFilter('Bridge Inspection')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Bridge Inspection</button>
                    <button onClick={() => handlePortfolioFilter('Structural Inspection')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Structural Inspection</button>
                    <button onClick={() => handlePortfolioFilter('Building Assessment')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Building Assessment</button>
                    <button onClick={() => handlePortfolioFilter('Transit & Rail')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Transit & Rail</button>
                    <button onClick={() => handlePortfolioFilter('Assessment & Evaluation')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Assessment & Evaluation</button>
                    <button onClick={() => handlePortfolioFilter('Surveying')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-arial">Surveying</button>
                  </div>
                </div>
              </div>

              <Link to="/clients" onClick={handleLinkClick} className={`relative text-sm font-medium font-arial transition-colors duration-200 ${location.pathname === '/clients' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}>CLIENTS</Link>
              <Link to="/partners" onClick={handleLinkClick} className={`relative text-sm font-medium font-arial transition-colors duration-200 ${location.pathname === '/partners' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}>PARTNERS</Link>
              <Link to="/offices" onClick={handleLinkClick} className={`relative text-sm font-medium font-arial transition-colors duration-200 ${location.pathname === '/offices' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}>OFFICES</Link>
              <Link to="/careers" onClick={handleLinkClick} className={`relative text-sm font-medium font-arial transition-colors duration-200 ${location.pathname === '/careers' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}>CAREERS</Link>
              <Link to="/contact" onClick={handleLinkClick} className={`relative text-sm font-medium font-arial transition-colors duration-200 ${location.pathname === '/contact' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full'}`}>CONTACT</Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="xl:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link to="/about" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">About</Link>
                <Link to="/services" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Services</Link>
                <Link to="/portfolio" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Portfolio</Link>
                <Link to="/clients" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Clients</Link>
                <Link to="/partners" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Partners</Link>
                <Link to="/offices" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Offices</Link>
                <Link to="/careers" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Careers</Link>
                <Link to="/contact" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
