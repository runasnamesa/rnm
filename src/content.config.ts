import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['RPG', 'Narrativa', 'Guias', 'Lore', 'Reflexões']),
    image: z.string().url(),
    readTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
