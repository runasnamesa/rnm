export const prerender = false;

import type { APIRoute } from 'astro';
import { writeStoredContent } from '../../../lib/admin';

export const POST: APIRoute = async ({ request }) => {
  const raw = await request.json().catch(() => null);

  const content = typeof raw?.content === 'string'
    ? raw.content
    : typeof raw?.text === 'string'
      ? raw.text
      : '';

  if (!content.trim()) {
    return new Response(JSON.stringify({ ok: false, message: 'Conteúdo vazio.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await writeStoredContent(content);

  return new Response(JSON.stringify({ ok: true, message: 'Conteúdo recebido com sucesso.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
