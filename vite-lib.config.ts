import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/components/index.ts'),
      name: 'vueStorybook',
      fileName: (format) => `vue-storybook.${format}.js`,
    },
    cssCodeSplit: true,
    outDir: 'lib/dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  publicDir: false,
  plugins: [vue()],
});
