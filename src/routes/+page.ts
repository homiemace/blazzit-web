import type { PageLoad } from './$types';
import { supabase } from "$lib/db/client";
import type { Database } from '$lib/db/types';

type Post = Database['public']['Tables']['posts']['Row'];

export const load: PageLoad = async () => {
    const { data, error } = await supabase.from("posts").select();
    
    if (error) {
        console.error('Error loading posts:', error);
        return { posts: [] as Post[] };
    }
    
    return {
        posts: (data as Post[]) ?? []
    };
};