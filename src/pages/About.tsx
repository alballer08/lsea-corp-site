
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const [animatingSection, setAnimatingSection] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionChange = (section: string) => {
    if (section !== activeSection) {
      setAnimatingSection(section);
      setTimeout(() => {
        setActiveSection(section);
        setAnimatingSection(null);
      }, 200);
    }
  };

  const sections = {
    story: {
      title: 'Our Story',
      content: [
        'LSEA Corporation is a multi-discipline consulting firm established in 2001 with a vision to provide exceptional engineering and consulting services to both public and private sector clients. Founded by a small team of dedicated professionals, our company has steadily grown through a commitment to quality, innovation, and client satisfaction.',
        'We offer a comprehensive range of services, including bridge inspection, evaluation, and design; building inspection and design; highway and traffic engineering; property management; relocation and land acquisition services; construction management and monitoring; environmental engineering; and site planning and engineering. Each project we undertake is approached with technical rigor, attention to detail, and a focus on long-term value.',
        'Since our founding, we have successfully completed hundreds of projects—from small-scale residential developments to large infrastructure installations. These projects have contributed to a deep and diverse knowledge base that informs our approach to engineering excellence.',
        'Today, LSEA Corporation continues to expand its capabilities while maintaining the personalized service and high standards that have defined us from the beginning.'
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    mission: {
      title: 'Company Mission',
      content: [
        'At LSEA Corporation, our mission is to deliver innovative engineering solutions that exceed client expectations while upholding the highest standards of quality, safety, and environmental responsibility. We are committed to creating sustainable, efficient, and safe outcomes that positively impact communities and contribute to a better future.',
        'We believe that successful engineering goes beyond project completion—it’s about building lasting relationships through integrity, excellence, and continuous improvement. Through close collaboration with our clients, we work to understand their unique challenges and deliver tailored solutions that provide both immediate results and long-term value.',
        'Our dedicated team of highly qualified and motivated professionals is the foundation of our success. By combining technical expertise with personalized service, we are able to match the capabilities of larger firms while maintaining the responsiveness and attention to detail that define our approach.',
        'At LSEA, our success is measured by the success of our clients and the meaningful contributions our work makes to society.'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    expertise: {
      title: 'Technical Expertise',
      content: [
        'LSEA Corporation offers a multidisciplinary team with expertise in civil and structural engineering. With decades of combined experience, our principals, project managers, engineers, and officers are equipped to manage projects of various sizes and complexities. From preliminary studies to final design, we provide the technical support and insight needed to complement our clients’ in-house teams and deliver fully integrated solutions.',
        'Our engineers bring specialized knowledge in seismic design, sustainable building practices, advanced materials, and complex system integration. We leverage cutting-edge technology and proven methodologies to develop solutions that are both innovative and practical.',
        'At LSEA, we take a comprehensive, holistic approach to engineering—considering every aspect of a project from concept through implementation. This perspective allows us to identify challenges early, streamline project delivery, and optimize performance, efficiency, and cost-effectiveness. Through continuous learning and professional development, our team remains at the forefront of industry advancement, ensuring our clients benefit from the latest in engineering innovation.'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    commitment: {
      title: 'Total Commitment and Qualifications',
      content: [
        'At LSEA Corporation, our success is built on the expertise and dedication of our experienced staff. With a multidisciplinary team of professionals in civil, structural, mechanical, and electrical engineering, we deliver innovative, practical solutions tailored to each client’s needs. From feasibility studies to final design, we manage projects of all sizes and complexity with a commitment to quality, budget, and schedule.',
        'We invest heavily in continued education, training, licensing, and certifications to ensure our staff remains at the forefront of industry standards and technology. This ongoing development enables us to deliver high-performance solutions that meet today’s engineering challenges.',
        'LSEA is proud to be certified as a Minority Business Enterprise (MBE), Disadvantaged Business Enterprise (DBE), and Small Business Enterprise (SBE) with over 20 public agencies, including:',
        'At LSEA, we combine technical excellence with personal commitment—ensuring every project is completed to the highest standards of safety, sustainability, and client satisfaction.'
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    partners: {
      title: 'Partners',
      content: [
        'We work with industry-established partners to expand our capabilities and provide comprehensive solutions to our clients. Our strategic partnerships enable us to offer specialized services and access to cutting-edge technologies that enhance our project delivery.'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="About LSEA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Us
          </h1>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            {Object.entries(sections).map(([key, section]) => (
              <Button
                key={key}
                variant={activeSection === key ? "default" : "outline"}
                onClick={() => handleSectionChange(key)}
                className={`font-arial relative overflow-hidden group transition-all duration-300 transform ${
                  animatingSection === key 
                    ? 'scale-95 opacity-80' 
                    : activeSection === key 
                      ? 'scale-105 shadow-lg ring-2 ring-blue-200' 
                      : 'hover:scale-102 hover:shadow-md hover:-translate-y-0.5'
                } ${
                  activeSection === key 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600' 
                    : 'bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100'
                }`}
              >
                <span className="relative z-10">{section.title}</span>
                {activeSection !== key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-400 ${
              animatingSection ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900">
                {sections[activeSection].title}
              </h2>
              <div className="space-y-4">
                {sections[activeSection].content.map((paragraph, index) => {
                  // Special handling for commitment section with certifications
                  if (activeSection === 'commitment' && index === 2) {
                    return (
                      <div key={index} className="space-y-2">
                        <p className="font-arial text-lg text-gray-600 leading-relaxed">
                          LSEA is proud to be certified as a Minority Business Enterprise (MBE), Disadvantaged Business Enterprise (DBE), and Small Business Enterprise (SBE) with over 20 public agencies, including:
                        </p>
                        <ul className="font-arial text-lg text-gray-600 leading-relaxed ml-4 space-y-1">
                           <li className="flex items-start">
                             <span className="text-gray-900 mr-2">•</span>
                             <span><strong>MBE:</strong> Port Authority of NY & NJ, NJDOT, NJ Transit, NYS Dept. of Economic Development, NJ Turnpike Authority, NYCSCA, and more</span>
                           </li>
                           <li className="flex items-start">
                             <span className="text-gray-900 mr-2">•</span>
                             <span><strong>DBE:</strong> NJDOT, NYSDOT, NJ Transit, MTA (NYC Transit, LIRR, Metro-North, Bridges & Tunnels)</span>
                           </li>
                           <li className="flex items-start">
                             <span className="text-gray-900 mr-2">•</span>
                             <span><strong>SBE:</strong> NJDOT, NJ Turnpike Authority, Delaware River Port Authority</span>
                           </li>
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="font-arial text-lg text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
              {activeSection === 'partners' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-montserrat text-xl font-semibold mb-2">Y Bird Airways</h3>
                    <p className="font-arial text-gray-600 mb-4">Leading technology partner providing advanced drone-based imaging and 3D modeling solutions for infrastructure inspection and engineering projects.</p>
                    <Button asChild>
                      <a href="/partners/ybirdairways" className="font-arial">Learn about the partner</a>
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-montserrat text-xl font-semibold mb-2">WOW Design</h3>
                    <p className="font-arial text-gray-600 mb-4">Trusted architectural firm involved in countless architectural and design projects. </p>
                    <Button asChild>
                      <a href="/partners/wowdesign" className="font-arial">Learn about the partner</a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className={`w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-400 ${
                  animatingSection ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
