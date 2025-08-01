
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Download, Clock, FileX } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

interface SharedFileData {
  id: string;
  filename: string;
  original_name: string;
  file_size: number;
  storage_path: string;
  expires_at: string;
}

const SharedFile = () => {
  const { token } = useParams<{ token: string }>();
  const [fileData, setFileData] = useState<SharedFileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "LSEA | Shared File";
    if (token) {
      fetchFileData();
    }
  }, [token]);

  const fetchFileData = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_shared_file_data', { link_token: token });

      if (error) throw error;

      if (!data || data.length === 0) {
        setError('File not found or link has expired');
        return;
      }

      const fileInfo = data[0];
      setFileData({
        id: fileInfo.file_id,
        filename: fileInfo.filename,
        original_name: fileInfo.original_name,
        file_size: fileInfo.file_size,
        storage_path: fileInfo.storage_path,
        expires_at: fileInfo.expires_at
      });
    } catch (error: any) {
      setError('File not found or link has expired');
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async () => {
    if (!fileData) return;

    try {
      const { data, error } = await supabase.storage
        .from('user-files')
        .download(fileData.storage_path);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileData.original_name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: `Downloading ${fileData.original_name}`,
      });
    } catch (error: any) {
      toast({
        title: "Download failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return <LoadingSkeleton variant="minimal" />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <FileX className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h1 className="text-xl font-semibold text-foreground mb-2">File Not Found</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="bg-card border rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <Download className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-xl font-semibold text-card-foreground mb-2">
            Shared File
          </h1>
          <p className="text-muted-foreground mb-6">
            Someone has shared a file with you
          </p>
          
          <div className="bg-muted rounded-lg p-4 mb-6">
            <p className="font-medium text-card-foreground mb-1">
              {fileData?.original_name}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              {formatFileSize(fileData?.file_size || 0)}
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              Expires: {new Date(fileData?.expires_at || '').toLocaleDateString()}
            </div>
          </div>
          
          <button
            onClick={downloadFile}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download File
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharedFile;
