/// <reference types="astro/client" />

// Membantu TypeScript mengenali sistem Content Layer Astro 6
/// <reference types="astro/client-navigation" />

// Definisi untuk modul virtual Keystatic agar error "Could not resolve" hilang
declare module 'virtual:keystatic-config' {
  const config: import('@keystatic/core').Config;
  export default config;
}

// Tambahan jika Anda menggunakan variabel lingkungan (.env) di dalam kode Astro
interface ImportMetaEnv {
  readonly KEYSTATIC_GITHUB_CLIENT_ID: string;
  readonly KEYSTATIC_GITHUB_CLIENT_SECRET: string;
  readonly KEYSTATIC_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}