export const prerender = false;

import type { APIRoute } from 'astro';
import {
  createStoredPost,
  isAuthenticatedCookie,
  readStoredPost,
  writeStoredPost,
} from '../../../lib/admin';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isAuthenticatedCookie(cookies)) {
    return redirect('/admin');
  }

  const formData = await request.formData();
  const content = String(formData.get('content') ?? '');
  const postId = String(formData.get('postId') ?? '').trim();
  const current = postId ? await readStoredPost(postId) : undefined;
  const postData = {
    content,
    title: String(formData.get('title') ?? 'Novo post'),
    description: String(formData.get('description') ?? ''),
    category: String(formData.get('category') ?? 'Narrativa'),
    pubDate: current?.pubDate ?? new Date().toISOString().slice(0, 10),
    readTime: String(formData.get('readTime') ?? 'Leitura do Mestre'),
  };

  if (current) {
    await writeStoredPost({ ...current, ...postData });
  } else {
    await createStoredPost(postData);
  }

  return redirect(`/admin?status=${current ? 'saved' : 'created'}`);
};
