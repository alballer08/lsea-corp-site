
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const siteStructure = [
    {
      name: 'Home',
      url: '/',
      children: []
    },
    {
      name: 'About',
      url: '/about',
      children: [
        { name: 'Partners - Y Bird Airways', url: '/partners/ybirdairways' },
        { name: 'Partners - WOW Design', url: '/partners/wowdesign' }
      ]
    },
    {
      name: 'Services',
      url: '/services',
      children: [
        { name: 'Structural Engineering', url: '/services/1' },
        { name: 'Civil Engineering', url: '/services/2' },
        { name: 'Mechanical Systems', url: '/services/3' },
        { name: 'Electrical Engineering', url: '/services/4' },
        { name: 'Environmental Engineering', url: '/services/5' },
        { name: 'Project Management', url: '/services/6' },
        { name: 'Consulting Services', url: '/services/7' },
        { name: 'Quality Assurance', url: '/services/8' },
        { name: 'Safety Engineering', url: '/services/9' }
      ]
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
      children: [
        { name: 'Metro Bridge Project', url: '/portfolio/1' },
        { name: 'Corporate Headquarters', url: '/portfolio/2' },
        { name: 'Industrial Complex', url: '/portfolio/3' },
        { name: 'Residential Development', url: '/portfolio/4' },
        { name: 'Highway Infrastructure', url: '/portfolio/5' },
        { name: 'Educational Facility', url: '/portfolio/6' },
        { name: 'Medical Center', url: '/portfolio/7' }
      ]
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
      name: 'Legal',
      url: '#',
      children: [
        { name: 'Terms of Use', url: '/terms-of-use' },
        { name: 'Privacy Policy', url: '/privacy-policy' }
      ]
    },
    {
      name: 'Employee Access',
      url: '/employee-access',
      children: []
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Sitemap"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Sitemap
          </h1>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
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
