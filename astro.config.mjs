import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Tambahkan URL website kamu di sini
  site: 'https://squidrbx.pages.dev', 
  
  integrations: [
    react(), 
    keystatic()
  ],
  
  // Gunakan 'static' (Default Astro 5+), ia sudah mendukung prerendering otomatis
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