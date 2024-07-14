import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "ASP.NET Core",
    icon: "carbon:category",
    link: "/dotnet/01_chsarp/01_概述.md",
  },
  // {
  //   text: "Vue",
  //   icon: "carbon:category",
  //   link: "/vue/",
  // },
  {
    text: "Angular",
    icon: "carbon:category",
    link: "/angular/04_Angular/01_快速入门.md",
  },
  {
    text: "分类",
    icon: "carbon:category",
    link: "/category/",
  },
  {
    text: "标签",
    icon: "ph:tag-thin",
    link: "/tag/",
  },
  {
    text: "时间线",
    icon: "ri:time-line",
    link: "/timeline/",
  },
  {
    text: "About",
    icon: "radix-icons:person",
    link: "intro",
  },
]);
