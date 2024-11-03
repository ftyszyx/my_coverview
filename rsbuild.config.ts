import { defineConfig, rspack } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";
import Dotenv from "dotenv-webpack";
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "index.html",
    favicon: "./public/logo.png",
  },
  source: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  tools: {
    rspack: {
      plugins: [
        new Dotenv({ systemvars: true }),
        // new rspack.HtmlRspackPlugin({
        //   publicPath: path.resolve(__dirname, "public"),
        // }),
      ],
    },
  },
});
