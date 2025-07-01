
import { useEffect, useState } from 'react';

const EmployeeAccess = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Employee Access"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Employee Access
          </h1>
        </div>
      </section>

      {/* Employee Access Content */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-lg p-12">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6">
              Secure File Sharing Portal
            </h2>
            <p className="font-arial text-lg text-gray-600 mb-8">
              Access the employee file sharing portal with your provided credentials. This secure system allows authorized users to upload, manage, and share files with controlled access and expiring download links.
            </p>
            
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 mb-8">
              <p className="font-arial text-yellow-800">
                <strong>Note:</strong> To enable the employee file sharing portal, this project needs to be connected to Supabase for secure authentication and file storage capabilities.
              </p>
            </div>

            <p className="font-arial text-gray-600 mb-8">
              Once Supabase is connected, employees will be able to:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-3">
                  File Management
                </h3>
                <p className="font-arial text-gray-600">
                  Upload, organize, and manage your files securely in the cloud
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-3">
                  Secure Sharing
                </h3>
                <p className="font-arial text-gray-600">
                  Generate expiring download links with strict access control
                </p>
              </div>
            </div>

            <p className="font-arial text-gray-600">
              For technical support or account access, please contact the IT department at it@lseacorp.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeAccess;
