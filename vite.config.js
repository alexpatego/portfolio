import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portofolio/",
  plugins: [react()],
  env: {
    VITE_PUBLIC_URL: process.env.VITE_PUBLIC_URL || "/portofolio/",
  },
});
