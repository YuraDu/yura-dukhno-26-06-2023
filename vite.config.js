import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import {copy} from "vite-plugin-copy";

export default defineConfig({
  base: "/yura-dukhno-26-06-2023/",
  plugins: [
    react(),
    // copy({
    //   patterns: [
    //     { from: "/index.html", to: "dist" },
    //     { from: "/src/assets/images", to: "/dist/assets" },
    //   ],
    // }),
  ],
});
