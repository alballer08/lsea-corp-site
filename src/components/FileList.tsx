
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
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
    if (user) {
      fetchFiles();
    }
  }, [user]);

  const fetchFiles = async () => {
    try {
      const { data, error } = await supabase
        .from('files')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFiles(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading files",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (file: FileItem) => {
    try {
      const { data, error } = await supabase.storage
        .from('user-files')
        .download(file.storage_path);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.original_name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error: any) {
      toast({
        title: "Download failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const createShareLink = async (file: FileItem) => {
    const expiryDays = prompt("How many days should this link be valid? (1-30)", "7");
    if (!expiryDays) return;

    const days = parseInt(expiryDays);
    if (isNaN(days) || days < 1 || days > 30) {
      toast({
        title: "Invalid expiry",
        description: "Please enter a number between 1 and 30",
        variant: "destructive",
      });
      return;
    }

    try {
      const token = crypto.randomUUID();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + days);

      const { error } = await supabase
        .from('shared_links')
        .insert({
          file_id: file.id,
          token,
          expires_at: expiresAt.toISOString(),
        });

      if (error) throw error;

      const shareUrl = `${window.location.origin}/shared/${token}`;
      navigator.clipboard.writeText(shareUrl);
      
      toast({
        title: "Share link created",
        description: `Link copied to clipboard. Expires in ${days} day(s).`,
      });
    } catch (error: any) {
      toast({
        title: "Failed to create share link",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteFile = async (file: FileItem) => {
    if (!confirm(`Delete ${file.original_name}?`)) return;

    try {
      // Delete from storage first
      const { error: storageError } = await supabase.storage
        .from('user-files')
        .remove([file.storage_path]);

      if (storageError) throw storageError;

      // Delete any associated shared links
      const { error: sharedLinksError } = await supabase
        .from('shared_links')
        .delete()
        .eq('file_id', file.id);

      if (sharedLinksError) throw sharedLinksError;

      // Delete file record from database
      const { error: dbError } = await supabase
        .from('files')
        .delete()
        .eq('id', file.id);

      if (dbError) throw dbError;

      setFiles(files.filter(f => f.id !== file.id));
      
      toast({
        title: "File deleted",
        description: `${file.original_name} and its shared links have been deleted`,
      });
    } catch (error: any) {
      toast({
        title: "Delete failed",
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
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center">Loading files...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 font-montserrat">Your Files</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {files.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No files uploaded yet
          </div>
        ) : (
          files.map((file) => (
            <div key={file.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.original_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(file.file_size)} • {new Date(file.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadFile(file)}
                    className="p-2 text-gray-400 hover:text-blue-600"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => createShareLink(file)}
                    className="p-2 text-gray-400 hover:text-green-600"
                    title="Create share link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteFile(file)}
                    className="p-2 text-gray-400 hover:text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
