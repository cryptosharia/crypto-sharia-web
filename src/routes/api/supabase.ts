import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from '$env/static/private';

const supabaseUrl = 'https://mvzrfxlxcmbfdgdvnzkk.supabase.co';

const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
