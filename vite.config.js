/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
    },
    closeBundle: async () => {
      try {
        // Your custom code for the closeBundle hook
        console.log('closeBundle hook executed successfully');
      } catch (error) {
        console.error('Error in closeBundle hook:', error);
      }
    },
    devOptions: {
      enabled: true,
    },
  })],
});
