
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';
import { Shield, Users, Upload, Share2, Search, FileText } from 'lucide-react';

const EmployeeAccess = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Removed automatic navigation - let users choose to sign in manually

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            Employee Access Portal
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Secure file sharing and document management
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Portal Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our secure employee portal provides advanced file management capabilities 
            with enterprise-grade security and user-friendly interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              File Upload
            </h3>
            <p className="text-gray-600">
              Securely upload and store files with automatic encryption and backup.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Share2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              Secure Sharing
            </h3>
            <p className="text-gray-600">
              Generate expiring download links with customizable access control.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              File Management
            </h3>
            <p className="text-gray-600">
              Organize, preview, and manage your documents with an intuitive interface.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              User Management
            </h3>
            <p className="text-gray-600">
              Admin controls for user account creation and permission management.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              Advanced Search
            </h3>
            <p className="text-gray-600">
              Quickly find documents and content across the entire platform.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              Enterprise Security
            </h3>
            <p className="text-gray-600">
              Bank-level encryption and security measures to protect your data.
            </p>
          </div>
        </div>

        {/* Access Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
              Access Information
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Employee accounts are created and managed by system administrators. 
              If you need access to the portal, please contact your IT department 
              or system administrator for credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Employee Login
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                Contact IT Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAccess;
