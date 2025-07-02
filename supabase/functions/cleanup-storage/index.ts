import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CleanupResult {
  deletedSharedLinks: number
  deletedFiles: number
  freedSpace: number
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    )

    console.log('Starting storage cleanup...')

    // 1. Find and delete expired shared links
    const { data: expiredLinks, error: expiredLinksError } = await supabaseClient
      .from('shared_links')
      .select('id, file_id')
      .lt('expires_at', new Date().toISOString())

    if (expiredLinksError) {
      console.error('Error fetching expired links:', expiredLinksError)
      throw expiredLinksError
    }

    console.log(`Found ${expiredLinks?.length || 0} expired shared links`)

    // Delete expired shared links
    let deletedSharedLinks = 0
    if (expiredLinks && expiredLinks.length > 0) {
      const { error: deleteLinksError } = await supabaseClient
        .from('shared_links')
        .delete()
        .lt('expires_at', new Date().toISOString())

      if (deleteLinksError) {
        console.error('Error deleting expired links:', deleteLinksError)
        throw deleteLinksError
      }
      deletedSharedLinks = expiredLinks.length
    }

    // 2. Find files that are no longer referenced by any shared links and have no user
    const { data: orphanedFiles, error: orphanedFilesError } = await supabaseClient
      .from('files')
      .select('id, storage_path, file_size')
      .is('user_id', null)

    if (orphanedFilesError) {
      console.error('Error fetching orphaned files:', orphanedFilesError)
      throw orphanedFilesError
    }

    console.log(`Found ${orphanedFiles?.length || 0} orphaned files`)

    let deletedFiles = 0
    let freedSpace = 0

    // Delete orphaned files from storage and database
    if (orphanedFiles && orphanedFiles.length > 0) {
      for (const file of orphanedFiles) {
        try {
          // Delete from storage
          const { error: storageError } = await supabaseClient.storage
            .from('user-files')
            .remove([file.storage_path])

          if (storageError) {
            console.error(`Error deleting file ${file.storage_path}:`, storageError)
            continue
          }

          // Delete from database
          const { error: dbError } = await supabaseClient
            .from('files')
            .delete()
            .eq('id', file.id)

          if (dbError) {
            console.error(`Error deleting file record ${file.id}:`, dbError)
            continue
          }

          deletedFiles++
          freedSpace += file.file_size
          console.log(`Deleted file: ${file.storage_path} (${file.file_size} bytes)`)
        } catch (error) {
          console.error(`Failed to delete file ${file.id}:`, error)
        }
      }
    }

    const result: CleanupResult = {
      deletedSharedLinks,
      deletedFiles,
      freedSpace
    }

    console.log('Cleanup completed:', result)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Storage cleanup completed successfully',
        result
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Cleanup error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})