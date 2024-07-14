import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my_blog/",

  lang: "zh-CN",

  title: "翼的博客",

  description: "翼的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
