import { z, defineCollection } from 'astro:content';

const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
    }),
  }),
  wiki: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  }),
  journal: journalCollection, // <--- 保留日志集合
};