import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc'; // 1. Import Markdoc
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://squidrbx.pages.dev', 
  
  integrations: [
    react(), 
    markdoc(), // 2. Tambahkan Markdoc di sini agar file .mdoc terbaca
    keystatic()
  ],
  
  output: 'static', 
  
  adapter: cloudflare({
    mode: 'directory'
  }),
  
  vite: {
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    }
  }
});
