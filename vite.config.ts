import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      base: '/josephosoo',
      // IMPORTANT: Avoid exposing secrets to the client-side.
      // The `define` block below was removed to prevent the `GEMINI_API_KEY` 
      // from being embedded in the compiled JavaScript bundle.
      // If you need to use environment variables in your client-side code,
      // make sure to prefix them with `VITE_` (e.g., `VITE_GEMINI_API_KEY`)
      // and access them via `import.meta.env.VITE_GEMINI_API_KEY`.
      // define: {
      //   'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      //   'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      // },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
