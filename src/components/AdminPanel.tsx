
import React, { useState, useEffect } from 'react';
import { UserPlus, Users, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from './AuthProvider';

interface User {
  id: string;
  email: string;
  full_name: string | null;
  role: string;
  created_at: string;
}

export const AdminPanel: React.FC = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [currentUserRole, setCurrentUserRole] = useState<string>('user');

  useEffect(() => {
    if (currentUser) {
      // Admin access disabled - Supabase backend removed
      setCurrentUserRole('user');
      setLoading(false);
    }
  }, [currentUser]);

  if (currentUserRole !== 'admin') {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500 text-center">Admin panel is currently unavailable. The Supabase backend has been removed.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 font-montserrat flex items-center">
            <Users className="w-5 h-5 mr-2" />
            User Management
          </h2>
          <button
            disabled
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 cursor-not-allowed"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Service Unavailable
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="p-6 text-center text-gray-500">
          Admin functionality is currently unavailable
        </div>
      </div>
    </div>
  );
};
