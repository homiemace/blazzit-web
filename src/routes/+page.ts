import type { PageLoad } from './$types';
import { supabase } from "$lib/db/client";
import type { Database } from '$lib/db/types';

type Post = Database['public']['Tables']['posts']['Row'];

export const load: PageLoad = async () => {
    const { data } = await supabase.from("posts").select();
    return {
      posts: data as Post[] ?? [],
    };
  }