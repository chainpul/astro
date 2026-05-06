import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rwahq.pages.dev',
  
  integrations: [
    react(), 
    markdoc(), 
    keystatic(),
    tailwind({
      applyBaseStyles: true,
    })
  ],
  
  output: 'server', 
  
  adapter: cloudflare({
    mode: 'directory'
  }),
  
  vite: {
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    }
  }
});