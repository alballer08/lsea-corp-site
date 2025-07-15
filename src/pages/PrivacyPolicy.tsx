
import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "LSEA | Privacy Policy";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Privacy Policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="font-arial text-gray-600 mb-8">
              Last updated: January 1, 2024
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you contact us, request information about our services, or submit forms on our website.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our services.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              6. Contact Us
            </h2>
            <p className="font-arial text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@lseacorp.com or (212) 555-0100.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
