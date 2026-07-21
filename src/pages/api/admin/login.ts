import type { APIRoute } from 'astro';
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_VALUE, verifyMasterLogin } from '../../../lib/admin';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const username = String(formData.get('username') ?? '');
  const password = String(formData.get('password') ?? '');

  if (!verifyMasterLogin(username, password)) {
    return redirect('/admin?status=invalid');
  }

  cookies.set(ADMIN_COOKIE_NAME, ADMIN_COOKIE_VALUE, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 60 * 60 * 8,
  });

  return redirect('/admin');
};
