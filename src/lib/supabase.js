import { createClient } from '@supabase/supabase-js'

/*
  Supabase client (single shared instance).

  Values come from environment variables so we never commit secrets.
  1. Copy `.env.example` to `.env.local`
  2. Fill in your project's URL and anon key (Supabase Dashboard -> Project Settings -> API)

  Vite only exposes variables prefixed with `VITE_` to the browser.
*/
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly during dev so a missing .env.local is obvious.
  console.warn(
    '[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
      'Copy .env.example to .env.local and fill in your keys.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
