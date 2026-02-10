
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Download, Share2, Trash2, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface FileItem {
  id: string;
  filename: string;
  original_name: string;
  file_size: number;
  content_type: string;
  storage_path: string;
  created_at: string;
}

export const FileList: React.FC = () => {
  const { user } = useAuth();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // File list feature disabled - Supabase backend removed
    setFiles([]);
    setLoading(false);
  }, [user]);

  const downloadFile = async (file: FileItem) => {
    toast({
      title: "Service Unavailable",
      description: "File download service is currently unavailable",
      variant: "destructive",
    });
  };

  const createShareLink = async (file: FileItem) => {
    toast({
      title: "Service Unavailable",
      description: "File sharing service is currently unavailable",
      variant: "destructive",
    });
  };

  const deleteFile = async (file: FileItem) => {
    toast({
      title: "Service Unavailable",
      description: "File deletion service is currently unavailable",
      variant: "destructive",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center text-gray-500">No files - service unavailable</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 font-montserrat">Your Files</h2>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="p-6 text-center text-gray-500">
          File management service is currently unavailable
        </div>
      </div>
    </div>
  );
};
