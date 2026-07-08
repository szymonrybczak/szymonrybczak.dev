import "server-only";

import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Null when env vars are absent (e.g. local dev without secrets) so pages
// relying on views can still render with fallback values.
export const supabase: SupabaseClient | null =
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY
    ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
    : null;
