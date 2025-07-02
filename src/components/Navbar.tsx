
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { SearchModal } from './SearchModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-navbar">
            {/* Logo */}
            <div 
              onClick={handleLogoClick}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <div className="w-12 h-18 bg-transparent rounded flex items-center justify-center p-1">
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
              <span className="text-xl font-bold text-gray-900 font-montserrat">LSEA Corporation</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-arial">ABOUT</Link>
              <Link to="/services" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-arial">SERVICES</Link>
              <Link to="/portfolio" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-arial">PORTFOLIO</Link>
              <Link to="/offices" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-arial">OFFICES</Link>
              <Link to="/careers" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-arial">CAREERS</Link>
              <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-arial">CONTACT</Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
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
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link to="/about" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">About</Link>
                <Link to="/services" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Services</Link>
                <Link to="/portfolio" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-arial">Portfolio</Link>
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
