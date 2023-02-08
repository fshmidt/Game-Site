import vue from '@vitejs/plugin-vue';

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
// export default {
//   base: '/account/',
//   plugins: [vue()],
//   port: '5173'
// };
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/account/',
  plugins: [vue()],
  server: {
    port: 3000
  },
})