import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-react-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: [/\.tsx$/, /\.jsx$/, /\.md$/] }),
    Markdown(),
  ],
});
