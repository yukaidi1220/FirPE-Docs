import { DefaultTheme } from "vitepress";

// 中文侧边栏
export const zhSidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "入门指引",
      collapsed: false,
      items: [
        { text: "快速开始", link: `/guide/quickstart/` },
        { text: "什么是 WinPE？", link: `/guide/whaiispe/` },
        { text: "为什么选择 FirPE？", link: `/guide/why/` },
        { text: "如何使用启动盘进入WinPE？", link: `/guide/enterpe/` },
      ],
    },
    {
      text: "功能解析",
      collapsed: false,
      items: [
        { text: "启动盘制作指南", link: `/feature/bootdisk/` },
        { text: "个性化配置指南", link: `/feature/configguide/` },
      ],
    },
    {
      text: "高阶应用",
      collapsed: false,
      items: [
        { text: "生命周期钩子", link: `/advanced/hooks/` },
        { text: "插件生态速通", link: `/advanced/plugins/` },
      ],
    },
    {
      text: "技术支持",
      collapsed: false,
      items: [
        { text: "常见问题解答", link: `/sd/qa/` },
        { text: "技术支持渠道", link: `/sd/support/` },
        { text: "捐赠支持渠道", link: `/sd/donation/` },
      ],
    },
    {
      text: "关于我们",
      collapsed: false,
      items: [{ text: "发展历程", link: `/other/history/` }],
    },
  ],
};
