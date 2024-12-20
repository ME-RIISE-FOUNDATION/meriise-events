import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 4173, // Ensure this is the port you are using
  },
  plugins: [react()],
});