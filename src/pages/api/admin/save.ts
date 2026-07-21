import type { APIRoute } from 'astro';
import { ADMIN_COOKIE_NAME, isAuthenticatedCookie, writeStoredContent } from '../../../lib/admin';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!isAuthenticatedCookie(cookies)) {
    return redirect('/admin');
  }

  const formData = await request.formData();
  const content = String(formData.get('content') ?? '');

  await writeStoredContent(content);
  return redirect('/admin?status=saved');
};
