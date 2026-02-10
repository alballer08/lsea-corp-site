
import React, { useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface FileUploadProps {
  onUploadComplete: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onUploadComplete }) => {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // File upload disabled - Supabase backend removed
    toast({
      title: "Service Unavailable",
      description: "File upload service is currently unavailable",
      variant: "destructive",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">Upload Files</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center opacity-50">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-2">
          <label htmlFor="file-upload" className="cursor-pointer">
            <span className="mt-2 block text-sm font-medium text-gray-900">
              File upload service unavailable
            </span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={handleFileUpload}
              disabled={true}
            />
          </label>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          This service has been disabled
        </p>
      </div>
    </div>
  );
};
