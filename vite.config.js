import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        /* globals: {
          lit: "lit",
        }, */
      },
      // external: ["lit", "lit/decorators.js"],
    },
  },
});
