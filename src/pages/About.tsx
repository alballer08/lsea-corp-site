
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
        'Founded with a vision to provide exceptional engineering services, LSEA Corporation has grown from a small team of dedicated professionals to a leading engineering firm. Our journey spans decades of innovation, client satisfaction, and continuous growth in the engineering industry.',
        'Since our establishment, we have successfully completed hundreds of projects ranging from small-scale residential developments to large infrastructure installations. Each project has contributed to our extensive knowledge base and refined our approach to engineering excellence.',
        'Today, LSEA Corporation stands as a testament to what can be achieved through dedication, expertise, and unwavering commitment to quality. We continue to expand our capabilities while maintaining the personal touch and attention to detail that has defined our company from the beginning.'
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    mission: {
      title: 'Company Mission',
      content: [
        'To deliver innovative engineering solutions that exceed client expectations while maintaining the highest standards of quality, safety, and environmental responsibility. We are committed to building lasting relationships through integrity, excellence, and continuous improvement.',
        'Our mission extends beyond mere project completion to creating sustainable, efficient, and safe engineering solutions that benefit communities and the environment. We believe that responsible engineering practices are essential for building a better future for generations to come.',
        'Through collaborative partnerships with our clients, we strive to understand their unique challenges and deliver tailored solutions that not only meet immediate needs but also provide long-term value. Our success is measured by the success of our clients and the positive impact our work has on society.'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    expertise: {
      title: 'Technical Expertise',
      content: [
        'Our multidisciplinary team brings together expertise in structural, civil, mechanical, and electrical engineering. We leverage cutting-edge technology and proven methodologies to deliver solutions that are both innovative and practical.',
        'With decades of combined experience, our engineers have developed specialized knowledge in areas including seismic design, sustainable building practices, advanced materials, and complex system integration. We stay at the forefront of technological advancement through continuous learning and professional development.',
        'Our comprehensive approach to engineering ensures that all aspects of a project are considered from the initial design phase through final implementation. This holistic perspective allows us to identify potential challenges early and develop solutions that optimize performance, efficiency, and cost-effectiveness.'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    commitment: {
      title: 'Total Commitment and Qualifications',
      content: [
        'Every team member at LSEA holds the highest industry certifications and continues their professional development. Our commitment to excellence is reflected in our track record of successful projects and satisfied clients across multiple industries.',
        'We maintain strict quality control standards throughout every phase of our work, from initial concept development through final project delivery. Our quality assurance processes ensure that all deliverables meet or exceed industry standards and client expectations.',
        'Our professional certifications include Professional Engineer (PE) licenses, LEED accreditation, and specialized certifications in various engineering disciplines. We actively participate in continuing education programs and industry conferences to stay current with emerging trends and technologies.'
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    partners: {
      title: 'Partners',
      content: [
        'We work with industry-leading partners to expand our capabilities and provide comprehensive solutions to our clients. Our strategic partnerships enable us to offer specialized services and access to cutting-edge technologies that enhance our project delivery.',
        'Our partner network includes technology companies, specialty contractors, research institutions, and other engineering firms that share our commitment to excellence. These relationships allow us to tackle complex projects that require diverse expertise and resources.',
        'Through these collaborative relationships, we can offer our clients access to the latest innovations in engineering software, materials, and construction techniques. Our partners help us stay competitive and deliver superior results on projects of all sizes and complexity levels.'
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
            <div className="relative">
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className={`w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-400 ${
                  animatingSection ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
            </div>
            <div className={`space-y-6 transition-all duration-400 ${
              animatingSection ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900">
                {sections[activeSection].title}
              </h2>
              <div className="space-y-4">
                {sections[activeSection].content.map((paragraph, index) => (
                  <p key={index} className="font-arial text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {activeSection === 'partners' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-montserrat text-xl font-semibold mb-2">TechSolutions Inc.</h3>
                    <p className="font-arial text-gray-600 mb-4">Leading technology partner providing innovative software solutions for engineering projects.</p>
                    <Button asChild>
                      <a href="/partners/techsolutions" className="font-arial">Learn about the partner</a>
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-montserrat text-xl font-semibold mb-2">BuildCorp Partners</h3>
                    <p className="font-arial text-gray-600 mb-4">Construction and project management expertise for large-scale engineering projects.</p>
                    <Button asChild>
                      <a href="/partners/buildcorp" className="font-arial">Learn about the partner</a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
