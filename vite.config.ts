import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { presetMini } from 'unocss';
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      include: ['./src/**/*.{vue,js,ts}', './.storybook/**/*.{vue,js,ts}'],
      postcss: true,
      presets: [presetMini()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
