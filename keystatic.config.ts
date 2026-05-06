// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud', 
    // Bagian 'repo' sudah dihapus karena menggunakan mode cloud
  },
  cloud: {
    project: 'chainpul/astro', // Gunakan format tim/proyek seperti ini
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
        content: fields.markdoc({ label: 'Content' }),
        publishDate: fields.date({ label: 'Published Date' }),
      },
    }),
  },
});