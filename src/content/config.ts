import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // 'type: content' di Astro 5 otomatis membaca .md dan .mdoc 
  // asalkan integrasi Markdoc sudah terpasang
  type: 'content', 
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()),
  }),
});

export const collections = {
  'posts': posts,
};
