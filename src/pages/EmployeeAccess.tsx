
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

const EmployeeAccess = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "LSEA | Employee Access";
    if (!loading) {
      if (user) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <LoadingSkeleton variant="minimal" />;
  }

  return null;
};

export default EmployeeAccess;
