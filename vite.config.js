import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  server: {
    proxy: {
      "/path": {
        target:
          "https://www.fastmock.site/mock/e110368ed1b120b7fc940533513ab460/api",
        changeOrigin: true, //开启代理允许跨域
        rewrite: (path) => path.replace(/^\/path/, ""),
      },
    },
  },
});
