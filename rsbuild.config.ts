import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";
import Dotenv from "dotenv-webpack";
export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  tools: {
    rspack: {
      plugins: [new Dotenv({ systemvars: true })],
    },
  },
});
