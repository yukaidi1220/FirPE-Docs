import type { FooterData } from "@theojs/lumen";

export const Footer_Data: FooterData = {
  beian: { icp: "赣ICP备18007921号-1", showIcon: true },
  author: { name: "杉", link: "https://github.com/834772509" },
  group: [
    {
      title: "相关博客",
      icon: "bx:link", // `iconify`图标
      links: [
        {
          name: "作者博客",
          link: "http://blog.firpe.cn",
          icon: "noto-v1:books",
        },
      ],
    },
    {
      title: "合作伙伴",
      icon: "bx:link",
      links: [
        { name: "Edgeless", icon: "", link: "https://home.edgeless.top" },
        { name: "HotPE", icon: "", link: "https://www.hotpe.top" },
      ],
    },
    {
      title: "相关链接",
      icon: "bx:link",
      links: [{ name: "无忧论坛", link: "http://wuyou.net" }],
    },
  ],
};
