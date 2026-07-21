import fs from 'node:fs/promises';
import path from 'node:path';

export const ADMIN_COOKIE_NAME = 'rnm_master_session';
export const ADMIN_COOKIE_VALUE = 'true';
export const MASTER_USERNAME = 'Magnus';
export const MASTER_PASSWORD = 'Hora1005@#';

const ADMIN_DATA_PATH = path.join(process.cwd(), 'data', 'mestre-content.json');
const DEFAULT_CONTENT = `
<p>Escreva seu texto aqui.</p>
`;

async function ensureStorage() {
  await fs.mkdir(path.dirname(ADMIN_DATA_PATH), { recursive: true });

  try {
    await fs.access(ADMIN_DATA_PATH);
  } catch {
    await fs.writeFile(
      ADMIN_DATA_PATH,
      JSON.stringify({ content: DEFAULT_CONTENT }, null, 2),
      'utf8',
    );
  }
}

export async function readStoredContent() {
  await ensureStorage();

  const raw = await fs.readFile(ADMIN_DATA_PATH, 'utf8');
  const parsed = JSON.parse(raw) as { content?: string };

  return parsed.content ?? DEFAULT_CONTENT;
}

export async function writeStoredContent(content: string) {
  await ensureStorage();

  await fs.writeFile(
    ADMIN_DATA_PATH,
    JSON.stringify({ content }, null, 2),
    'utf8',
  );
}

export function verifyMasterLogin(username: string, password: string) {
  return username === MASTER_USERNAME && password === MASTER_PASSWORD;
}

export function isAuthenticatedCookie(cookie: { get(name: string): { value?: string } | undefined }) {
  return cookie.get(ADMIN_COOKIE_NAME)?.value === ADMIN_COOKIE_VALUE;
}
