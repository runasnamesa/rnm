export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = ({ cookies, redirect }) => {
  cookies.delete('rnm_master_session', { path: '/' });
  return redirect('/admin');
};
