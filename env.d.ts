/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GEMINI_PUBLIC_KEY: string;
    // Add other environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  