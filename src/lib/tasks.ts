import fs from 'node:fs/promises';
import path from 'node:path';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'done' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  dueDate?: string;
  assignedTo?: string;
  tags: string[];
}

const TASKS_PATH = path.join(process.cwd(), 'data', 'tasks.json');

function makeTaskId(title: string): string {
  const slug = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
  return `${slug || 'task'}-${Date.now().toString(36)}`;
}

async function ensureStorage() {
  await fs.mkdir(path.dirname(TASKS_PATH), { recursive: true });
  try {
    await fs.access(TASKS_PATH);
  } catch {
    await fs.writeFile(
      TASKS_PATH,
      JSON.stringify({ tasks: [] }, null, 2),
      'utf8',
    );
  }
}

export async function readTasks(): Promise<Task[]> {
  await ensureStorage();
  const raw = await fs.readFile(TASKS_PATH, 'utf8');
  const parsed = JSON.parse(raw);
  return parsed.tasks ?? [];
}

export async function writeTasks(tasks: Task[]) {
  await ensureStorage();
  await fs.writeFile(TASKS_PATH, JSON.stringify({ tasks }, null, 2), 'utf8');
}

export async function createTask(input: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
  const task: Task = {
    ...input,
    id: makeTaskId(input.title),
    createdAt: new Date().toISOString(),
  };
  const tasks = await readTasks();
  tasks.unshift(task);
  await writeTasks(tasks);
  return task;
}

export async function updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task | null> {
  const tasks = await readTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...updates };
  await writeTasks(tasks);
  return tasks[index];
}

export async function deleteTask(id: string): Promise<boolean> {
  const tasks = await readTasks();
  const filtered = tasks.filter((t) => t.id !== id);
  if (filtered.length === tasks.length) return false;
  await writeTasks(filtered);
  return true;
}
