export const prerender = false;

import type { APIRoute } from 'astro';
import { readStoredPosts } from '../../../lib/admin';

export const GET: APIRoute = async () => {
  const posts = await readStoredPosts();

  return new Response(JSON.stringify({ content: posts[0]?.content ?? '', posts }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
