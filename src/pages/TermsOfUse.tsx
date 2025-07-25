
import { useEffect, useState } from 'react';

const TermsOfUse = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "LSEA | Terms of Use";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
  <header className="bg-white py-10">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold font-montserrat text-gray-900 text-center">
        Terms of Use
      </h1>
    </div>
  </header>
    
      {/* Terms Content */}
      <section className={`bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="font-arial text-gray-600 mb-8">
              Last updated: July 24, 2025
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              By accessing and using the LS Engineering Associates Corporation website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              2. Website Usage
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              The content of this website is for general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              3. Intellectual Property
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              This website contains material which is owned by or licensed to LS Engineering Associates Corporation. This material includes, but is not limited to, the design, layout, look, appearance and graphics.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              4. Privacy and Data Protection
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="font-arial text-gray-600 mb-6">
              LS Engineering Associates Corporation shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of, or inability to use, the website.
            </p>

            <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
              6. Contact Information
            </h2>
            <p className="font-arial text-gray-600">
              If you have any questions about these Terms of Use, please contact us at legal@lseacorp.com or (212) 555-0100.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
