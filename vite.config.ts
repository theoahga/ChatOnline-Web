import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

const config = {
  publicPath: "",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
};

module.exports = config;
