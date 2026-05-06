import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Loader baru di Astro 6

const posts = defineCollection({
  // Gunakan loader 'glob' untuk memantau file .md
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()),
  }),
});

export const collections = {
  'posts': posts,
};