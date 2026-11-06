import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://spqvojmddodpcaosruiy.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_KEY) {
    throw new Error('Falta configurar la clave pública de Supabase.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
});