import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  server: {
    port: 80,
    host: true,
  },
  preview: {
    port: 80,
  },

  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@videos": fileURLToPath(new URL("./src/assets/videos", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/assets/styles", import.meta.url)),
      "@fonts": fileURLToPath(new URL("./src/assets/fonts", import.meta.url)),
    },
  },
});
