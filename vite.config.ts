import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@p": path.resolve(__dirname, "./src/pages"),
      "@l": path.resolve(__dirname, "./src/layout"),
      "@r": path.resolve(__dirname, "./src/routes"),
    },
  },
  build: {
    outDir: "build",
  },
});
