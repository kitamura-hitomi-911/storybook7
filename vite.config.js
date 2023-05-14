import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  rollupOptions: {
    // ライブラリにバンドルされるべきではない依存関係を
    // 外部化するようにします
    output: {
      external: ["lit", "lit/decorators.js"],
    },
  },
});
