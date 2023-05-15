import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  server: {
    //代理只在开发环境下有效
    proxy: {
      "/path": {
        target:
          "https://www.fastmock.site/mock/e110368ed1b120b7fc940533513ab460/api",
          //检测到有/path的url就把上面的url加到前面
        changeOrigin: true, //开启代理允许跨域
        rewrite: (path) => path.replace(/^\/path/, ""),//加完后/path的使命完成，不需要了
      },
    },
  },
});
