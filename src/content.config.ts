import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { POST_CATEGORIES } from './config/content';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(POST_CATEGORIES),
    /** Cover image URL (remote) or site path (e.g. /images/cover.jpg). */
    image: z.string().min(1),
    readTime: z.string(),
    draft: z.boolean().default(false),
    /** Optional Substack metadata when the post was imported. */
    origin: z.string().optional(),
    link: z.string().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = { posts };
