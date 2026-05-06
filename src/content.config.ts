import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Loader baru di Astro 6

const posts = defineCollection({
  // Kita ubah pattern agar mencari file .md DAN .mdoc
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()),
  }),
});

export const collections = {
  'posts': posts,
};
