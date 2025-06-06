// src/lib/posts.ts
import type { TablesInsert, Tables } from './db/types';

// For reading (e.g., listing posts)
export type Post = Tables<'posts'>;

// For creating (optional, more restrictive)
export type NewPost = TablesInsert<'posts'>;

const posts: Post[] = [];

export function getPosts(): Post[] {
	return posts;
}

export function addPost(post: NewPost): Post {
	const newPost: Post = {
		id: crypto.randomUUID(),
		title: post.title,
		content: post.content,
		created_at: new Date().toISOString(),
		user_id: post.user_id ?? null
	};
	posts.push(newPost);
	return newPost;
}

