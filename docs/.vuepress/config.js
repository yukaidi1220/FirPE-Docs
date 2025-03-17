/*
www.wepe.com.cn/ubook

常用MarkDown语法：

插入图片：![图片介绍](./img/图片名)
MarkDown 表格编辑：https://tableconvert.com/

Markdown 拓展：

::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险警告
这是一个危险警告
:::

::: details 点击查看代码
这是一个详情块，在 IE / Edge 中不生效
:::

*/
module.exports = {
  // 设置网站标题
  title: "FirPE 帮助文档",
  // 设置网页默认语言
  locales: {
    "/": {
      lang: "zh-CN",
      title: "FirPE 帮助文档",
      description: "FirPE 帮助文档",
    },
  },
  // 设置输出目录
  dest: "./dist",
  head: [["link", { rel: "icon", href: "/img/LOGO.ico" }]],
  // 设置站点根路径
  base: "/",
  // 添加 github 链接
  //repo: "https://github.com/txs1992/mt-blog"
  theme: "vuepress-theme-yilia-plus",
  plugins: [
    // 快速回顶部
    ["@vuepress/back-to-top", true],
    // 放大图片
    ["@vuepress/medium-zoom"],
    // 显示最后更新时间
    ["@vuepress/last-updated"],
  ],
  // 配置图片，支持图片中文命名
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-disable-url-encode"));
    },
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "教程首页", link: "/" },
      { text: "FirPE 维护系统", link: "https://firpe.cn/page-247" },
      { text: "投食 ", link: "https://firpe.cn/donate" },
      { text: "关于", link: "https://firpe.cn/about" },
    ],
    // 设置嵌套的标题链接深度
    sidebarDepth: 0,
    //设置侧边栏
    // sidebar: "auto",
    // 为以下路由添加侧边栏
    sidebar: {
      "/": [
        {
          title: "FirPE使用指南（必读）",
          // 默认展开
          collapsable: false,
          children: [
            { title: "1.1.使用必读", path: "/useGuide/start.md" },
            { title: "1.2.知识科普", path: "/useGuide/knowledge.md" },
            { title: "1.3.技术规格", path: "/useGuide/technicalNorms.md" },
            { title: "1.4.快速开始", path: "/useGuide/firpe.md" },
            { title: "1.5.进入WinPE", path: "/useGuide/bootPE.md" },
          ],
        },
        {
          title: "系统安装教程",
          // 默认展开
          collapsable: false,
          children: [
            {
              title: "2.1.原生安装Windows",
              path: "/installOS/installwindows.md",
            },
            {
              title: "2.3.安装器安装Windows",
              path: "/installOS/installTool.md",
            },
          ],
        },
        {
          title: "系统维护教程",
          // 默认展开
          collapsable: false,
          children: [
            {
              title: "3.1.硬盘快速分区教程",
              path: "/systemMaintains/diskpartquick.md",
            },
            {
              title: "3.2.修改本地Windows密码",
              path: "/systemMaintains/password.md",
            },
            { title: "3.3.修复系统引导", path: "/systemMaintains/fixboot.md" },
            { title: "3.4.系统备份恢复", path: "/systemMaintains/backup.md" },
          ],
        },
        {
          title: "更多玩法",
          // 默认折叠
          collapsable: false,
          children: [
            {
              title: "4.1.个性化WinPE",
              path: "/playground/customizePE.md",
            },
            {
              title: "4.2.Edgeless 插件",
              path: "/playground/edgelessPlug.md",
            },
            {
              title: "4.3.Edgeless 插件包管理工具",
              path: "/playground/ept.md",
            },
            {
              title: "4.4.HotPEModule 插件",
              path: "/playground/HotPEModule.md",
            },
          ],
        },
      ],
    },
    //搜索框
    search: true,
    //不显示所有页面的标题链接
    displayAllHeaders: true,
    //开启页面滚动效果
    smoothScroll: true,
    lastUpdated: "最后更新",
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: false,
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2021,
        // 网站作者(关闭请设置为false)
        //author: "<a href="https://gitee.com/fir834772509" target="_blank">杉</a>",
        author: false,
        // 访问量统计功能
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true,
        },
      },
    },
  },
};
