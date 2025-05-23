## 双内核适配，全面覆盖新旧硬件

- Win11PE：专为新硬件设计，支持 UEFI 启动，原生兼容 NVMe 硬盘、USB 3.2 等现代设备，提供完整网络支持（Wi-Fi/有线网）。
- Win03PE：适配 15 年以上老旧机型（如缺少 SSE4.2 指令集的 CPU），支持 Legacy/BIOS 启动，解决旧机维护难题。

## 轻量高效，极速启动

- 极速启动：Win11PE 内核深度优化，主流硬件通常可 1 分钟内完成启动（实际速度因 U 盘性能及设备配置有所差异）。
- 工具即用：预装 Ghost、DISM++、DiskGenius、EasyRC 等装机必备工具，支持一键备份/还原、分区管理、密码重置等操作。

## 开放生态，自由扩展

- 插件支持：无缝兼容 Edgeless 和 HotPE 生态，可扩展 Visual Studio Code、游戏、专业工具等。
- 自定义能力：
  - 通过 config.ini 调整电源计划、分辨率、任务栏样式等。
  - 支持壁纸、LOGO、主题替换，打造个性化 PE。
  - 添加驱动、工具、脚本，满足运维/开发等专业需求。

## 安全纯净，无捆绑

- 零推广：内核与工具均通过严格筛选，无广告、无暗桩。
- 透明开源：遵循 MPL 2.0 协议，源码可查，支持二次开发（需保留原作者声明）。

## 智能功能，提升效率

- 自动加载驱动：支持从本地硬盘提取网卡、显卡驱动（config.ini 中启用）。
- 生命周期钩子：通过 Hooks 目录脚本实现自动化操作（如开机自动备份、运行诊断工具）。
- 网络工具箱：内置 Ping、IP 配置、SMB 共享连接，支持远程维护。

## 持续维护，社区支持

- 长期更新：版本迭代稳定，每年度发布大版本更新内核版本。
- 活跃社区：超 4 个 QQ 群（2.4 万+用户），提供实时技术支持与反馈通道。
- 教程丰富：从制作启动盘到重装系统，提供全流程图文/视频指南。
