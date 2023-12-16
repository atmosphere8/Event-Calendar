import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/assets/components", import.meta.url)
      ),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@videos": fileURLToPath(new URL("./src/assets/videos", import.meta.url)),
    },
  },
});
