import type { StorybookViteConfig } from "@storybook/builder-vite";
import UnoCSS from "unocss/vite";

const config: StorybookViteConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, options) {
    config.plugins.push(UnoCSS({
      postcss: true
    }));
    return config;
  },
};

export default config;
