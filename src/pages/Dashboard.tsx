
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { FileUpload } from '@/components/FileUpload';
import { FileList } from '@/components/FileList';
import { AdminPanel } from '@/components/AdminPanel';
import { LogOut } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string>('user');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) {
        setUserRole('user');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        setUserRole(data?.role || 'user');
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('user');
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [user]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
                {userRole === 'admin' ? 'Admin Portal' : 'Employee Portal'}
              </h1>
              {user && <p className="text-gray-600">Welcome back, {user.email}</p>}
            </div>
            {user && (
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {user && userRole === 'admin' && (
          <div className="mb-8">
            <AdminPanel />
          </div>
        )}
        
        {user && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <FileUpload onUploadComplete={() => window.location.reload()} />
            </div>
            <div>
              <FileList />
            </div>
          </div>
        )}
        
        {!user && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Welcome to LSEA Corporation Portal
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access file management features
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
