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

export interface MasterPost {
  id: string;
  content: string;
  title: string;
  description: string;
  category: string;
  pubDate: string;
  readTime: string;
}

const DEFAULT_POST: Omit<MasterPost, 'content'> = {
  id: 'mestre-inicial',
  title: 'Texto do Mestre',
  description: 'Uma nova mensagem foi deixada sobre a mesa da taverna.',
  category: 'Narrativa',
  pubDate: new Date().toISOString().slice(0, 10),
  readTime: 'Leitura do Mestre',
};

// In-memory fallback if filesystem is read-only (e.g. Vercel Serverless)
let inMemoryPostsCache: MasterPost[] | null = null;

async function ensureStorage() {
  try {
    await fs.mkdir(path.dirname(ADMIN_DATA_PATH), { recursive: true });
    await fs.access(ADMIN_DATA_PATH);
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      try {
        await fs.writeFile(
          ADMIN_DATA_PATH,
          JSON.stringify({ content: DEFAULT_CONTENT }, null, 2),
          'utf8',
        );
      } catch (writeErr) {
        console.warn('[Storage] Read-only filesystem detected on Vercel/serverless. Using in-memory fallback.');
      }
    }
  }
}

function makePostId(title: string) {
  const slug = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);

  return `${slug || 'post'}-${Date.now().toString(36)}`;
}

export async function readStoredContent() {
  return (await readStoredPost()).content;
}

export async function writeStoredContent(content: string) {
  const current = await readStoredPost();
  await writeStoredPost({ ...current, content });
}

export async function readStoredPosts(): Promise<MasterPost[]> {
  if (inMemoryPostsCache) {
    return inMemoryPostsCache;
  }

  await ensureStorage();

  try {
    const raw = await fs.readFile(ADMIN_DATA_PATH, 'utf8');
    const parsed = JSON.parse(raw) as Partial<MasterPost> | MasterPost[];
    const posts = Array.isArray(parsed) ? parsed : [parsed];

    const result = posts.map((post, index) => ({
      ...DEFAULT_POST,
      ...post,
      id: post.id ?? (index === 0 ? DEFAULT_POST.id : makePostId(post.title ?? 'post')),
      content: post.content ?? DEFAULT_CONTENT,
    }));
    return result;
  } catch {
    return [{ ...DEFAULT_POST, content: DEFAULT_CONTENT }];
  }
}

export async function readStoredPost(id?: string): Promise<MasterPost> {
  const posts = await readStoredPosts();
  return posts.find((post) => post.id === id) ?? posts[0];
}

export async function writeStoredPosts(posts: MasterPost[]) {
  inMemoryPostsCache = posts;

  try {
    await ensureStorage();
    await fs.writeFile(ADMIN_DATA_PATH, JSON.stringify(posts, null, 2), 'utf8');
  } catch (err) {
    console.warn('[Storage] Write bypassed due to read-only environment.');
  }
}

export async function writeStoredPost(post: MasterPost) {
  const posts = await readStoredPosts();
  const index = posts.findIndex((item) => item.id === post.id);

  if (index === -1) {
    posts.unshift(post);
  } else {
    posts[index] = post;
  }

  await writeStoredPosts(posts);
}

export async function createStoredPost(input: Omit<MasterPost, 'id'>) {
  const post = { ...input, id: makePostId(input.title) };
  await writeStoredPost(post);
  return post;
}

export async function deleteStoredPost(id: string) {
  const posts = await readStoredPosts();
  const remainingPosts = posts.filter((post) => post.id !== id);

  if (remainingPosts.length === posts.length) {
    return false;
  }

  await writeStoredPosts(remainingPosts);
  return true;
}

export function verifyMasterLogin(username: string, password: string) {
  return username === MASTER_USERNAME && password === MASTER_PASSWORD;
}

export function isAuthenticatedCookie(cookie: { get(name: string): { value?: string } | undefined }) {
  return cookie.get(ADMIN_COOKIE_NAME)?.value === ADMIN_COOKIE_VALUE;
}
