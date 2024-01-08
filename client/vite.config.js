import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    proxy: {
      "/api/users": "http://localhost:5000",
    },
  },
};
