import { createClient } from '@supabase/supabase-js';

// Using Lovable's native Supabase integration
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Review = {
    id: string;
    name: string;
    rating: number;
    comment: string;
    approved: boolean;
    created_at: string;
};
