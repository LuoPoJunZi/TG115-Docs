# TG115 Docs

TG115 独立项目文档站，基于 VitePress 构建。

主项目：<https://github.com/LuoPoJunZi/TG115>

## 已包含

- TG115 Logo / 导航 Mark / favicon；
- 首页视觉背景与 Hero；
- v1.6.2 版本下拉；
- GitHub Releases 下载入口；
- 完整“从零部署”教程；
- 部署器 4 个核心页面 UI 预览图；
- 分类 FAQ；
- v1.6.2 更新日志；
- Cloudflare Pages 部署说明；
- 本地中文搜索、深浅色模式、页面目录、最后更新时间和编辑链接。

## 本地运行

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

输出：

```text
docs/.vitepress/dist
```

## Cloudflare Pages

```text
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
```

正式绑定自定义域名后，可按需在 VitePress 配置中加入 sitemap hostname。

## 界面预览

`docs/public/images/` 已包含 4 张来自 TG115 交互式 UI 设计稿的界面预览：

- `deployer-vps.png`
- `deployer-telegram.png`
- `deployer-clouddrive.png`
- `deployer-options.png`

这些图片不包含真实 VPS、Telegram 或 WebDAV 凭据。它们用于展示当前部署器的界面设计与操作分区，并非原生 Qt 实机运行截图。
