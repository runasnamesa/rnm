export const prerender = false;

import type { APIRoute } from 'astro';
import { readStoredContent } from '../../../lib/admin';

export const GET: APIRoute = async () => {
  const content = await readStoredContent();

  return new Response(JSON.stringify({ content }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
