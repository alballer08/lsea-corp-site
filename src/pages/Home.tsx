
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "LSEA | Home";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Video Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/public/videos/ce-mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-10 left-10 z-20">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Engineering Excellence
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900">
                Our Services
              </h2>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                We provide comprehensive engineering solutions across multiple disciplines. Our team of experienced professionals delivers innovative, cost-effective solutions that meet the highest industry standards. From conceptual design to project completion, we ensure excellence in every phase of your project.
              </p>
            </div>
            <div className="relative">
              <img
                src="/public/images/nanjing.jpg"
                alt="Engineering Services"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={`py-16 bg-gray-50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/public/images/wtc.jpg"
                alt="Company Culture"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900">
                Our Culture
              </h2>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                At LSEA, we foster a collaborative environment where innovation thrives. Our team-oriented culture promotes continuous learning, professional growth, and mutual respect. We believe that great engineering comes from great teamwork, and we're committed to creating an inclusive workplace where every voice is heard and valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className={`py-16 bg-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 animate-fade-in-delay' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900">
                Our Offices
              </h2>
              <p className="font-arial text-lg text-gray-600 leading-relaxed">
                With strategically located offices across multiple states, we're positioned to serve clients wherever their needs arise. Our regional presence allows us to understand local regulations, infrastructure requirements, and construction standards while maintaining the consistency and quality standards that define LSEA Corporation.
              </p>
            </div>
            <div className="relative">
              <img
                src="/public/images/skyline-wide.jpg"
                alt="Office Buildings"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
