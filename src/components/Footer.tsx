
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center font-montserrat font-semibold text-sm text-gray-900">
                LOGO
              </div>
              <span className="font-montserrat font-bold text-xl">
                LSEA Corporation
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Link to="/about" className="font-arial text-gray-300 hover:text-white block mb-2">About</Link>
                <Link to="/services" className="font-arial text-gray-300 hover:text-white block mb-2">Services</Link>
                <Link to="/portfolio" className="font-arial text-gray-300 hover:text-white block mb-2">Portfolio</Link>
              </div>
              <div>
                <Link to="/offices" className="font-arial text-gray-300 hover:text-white block mb-2">Offices</Link>
                <Link to="/careers" className="font-arial text-gray-300 hover:text-white block mb-2">Careers</Link>
                <Link to="/contact" className="font-arial text-gray-300 hover:text-white block mb-2">Contact</Link>
              </div>
              <div>
                <Link to="/sitemap" className="font-arial text-gray-300 hover:text-white block mb-2">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-arial text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} LS Engineering Associates Corporation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms-of-use" className="font-arial text-gray-400 hover:text-white text-sm">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="font-arial text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="font-arial text-gray-400 hover:text-white text-sm">
              Sitemap
            </Link>
            <Link to="/employee-access" className="font-arial text-gray-400 hover:text-white text-sm">
              Employee Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
