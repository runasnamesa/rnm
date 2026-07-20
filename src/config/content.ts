/**
 * Content collection rules shared by schema, pages, and helpers.
 * Keep this free of astro:content imports so content.config can use it safely.
 */
export const POST_CATEGORIES = [
  'RPG',
  'Narrativa',
  'Guias',
  'Lore',
  'Reflexões',
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];
