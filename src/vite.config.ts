// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@kontent-ai/kontent-core": "@kontent-ai/kontent-core/dist/cjs",
      "@kontent-ai/kontent-delivery": "@kontent-ai/kontent-delivery/dist/cjs"
    }
  }
})