import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Stamped at build time so the header version never goes stale by hand.
const now = new Date();
const buildVersion = `v${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`;

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    __BUILD_VERSION__: JSON.stringify(buildVersion),
  },
});
