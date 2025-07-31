
import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoadingSkeleton } from './LoadingSkeleton';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  userRole?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false,
  userRole 
}) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login');
        return;
      }
      
      if (requireAdmin && userRole !== 'admin') {
        navigate('/dashboard');
        return;
      }
    }
  }, [user, loading, navigate, requireAdmin, userRole]);

  if (loading) {
    return <LoadingSkeleton variant="minimal" />;
  }

  if (!user) {
    return null;
  }

  if (requireAdmin && userRole !== 'admin') {
    return null;
  }

  return <>{children}</>;
};
