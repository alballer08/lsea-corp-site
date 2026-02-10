
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FileUpload } from '@/components/FileUpload';
import { FileList } from '@/components/FileList';
import { AdminPanel } from '@/components/AdminPanel';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { LogOut } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string>('user');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "LSEA | Dashboard";
    
    // Authentication disabled - Supabase backend removed
    if (!user) {
      navigate('/login');
      return;
    }
    
    setUserRole('user');
    setLoading(false);
  }, [user, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <ProtectedRoute userRole={userRole}>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
                  {userRole === 'admin' ? 'Admin Portal' : 'Employee Portal'}
                </h1>
                <p className="text-gray-600">Welcome back, {user?.email}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {userRole === 'admin' && (
            <div className="mb-8">
              <AdminPanel />
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <FileUpload onUploadComplete={() => window.location.reload()} />
            </div>
            <div>
              <FileList />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
