export const prerender = false;

import type { APIRoute } from 'astro';
import { deleteStoredPost, isAuthenticatedCookie } from '../../../lib/admin';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isAuthenticatedCookie(cookies)) {
    return redirect('/admin');
  }

  const formData = await request.formData();
  const postId = String(formData.get('postId') ?? '').trim();

  if (postId) {
    await deleteStoredPost(postId);
  }

  return redirect('/admin?status=deleted');
};