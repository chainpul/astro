import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'rwahq/astro',
  },
  ui: {
    brand: { name: 'SQUIDRBX' },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      // Menentukan di mana file gambar disimpan secara fisik
      assets: {
        handle: (slug) => `src/assets/posts/${slug}/`,
      },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ 
          label: 'Content',
          options: {
            image: {
              // Konfigurasi agar gambar masuk ke folder assets
              directory: 'src/assets/posts/',
              publicPath: '../../assets/posts/',
            },
          },
        }),
        publishDate: fields.date({ label: 'Published Date' }),
      },
    }),
  },
});