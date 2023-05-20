import path from "path";
import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/web-components-vite";
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    const viteConfig = mergeConfig(config, {
      resolve: {
        alias: {
          "@src": path.resolve(__dirname, "../src"),
        },
      },
    });
    // console.log(viteConfig);
    return viteConfig;
  },
};
export default config;
