import { getCollection, type CollectionEntry } from 'astro:content';
import {
  POST_CATEGORIES,
  type PostCategory,
} from '../config/content';

export { POST_CATEGORIES, type PostCategory };

export type PostEntry = CollectionEntry<'posts'>;

/** URL-safe slug for category routes (e.g. Reflexões → reflexoes). */
export function categorySlug(category: string): string {
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/** Public path for a post entry. */
export function postHref(post: PostEntry): string {
  return `/posts/${post.id}`;
}

/** Published posts, newest first. */
export async function getPublishedPosts(): Promise<PostEntry[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** Published posts in a category, newest first. */
export async function getPostsByCategory(
  category: PostCategory,
): Promise<PostEntry[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
}
