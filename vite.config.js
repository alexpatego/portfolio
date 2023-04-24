import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    cssMinify: true, // Activer la minification CSS
  },
  plugins: [
    react(),
    terser({
      compress: {
        drop_console: true,
        ecma: 2015,
        warnings: true,
        passes: 3,
      },
      format: {
        comments: false,
      },
    }),
  ],
});
