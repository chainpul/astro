// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'chainpul/astro',
  },
  ui: {
    brand: { name: 'CHAINPUL' },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        // --- UPDATE BAGIAN INI ---
        content: fields.markdoc({ 
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/posts', // Gambar akan disimpan di sini
              publicPath: '../../assets/posts/', // Agar Astro bisa memanggilnya
            },
          },
        }),
        // -------------------------
        publishDate: fields.date({ label: 'Published Date' }),
      },
    }),
  },
});
