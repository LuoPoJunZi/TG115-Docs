# TG115 Docs

TG115 独立项目文档站，基于 VitePress 构建。

主项目：<https://github.com/LuoPoJunZi/TG115>

## 已包含

- TG115 Logo / 导航 Mark / favicon；
- 首页视觉背景与 Hero；
- v1.6.2 版本下拉；
- GitHub Releases 下载入口；
- 完整“从零部署”教程；
- Modern 部署器 4 个核心页面离线预览图；
- 分类 FAQ；
- v1.6.2 更新日志；
- Cloudflare Pages 构建配置；
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

当前站点使用 `https://tg115.pages.dev` 作为 sitemap hostname。绑定自定义域名后，应同步修改 VitePress 配置中的站点地址、Open Graph 地址与 sitemap hostname。

## 界面预览

`docs/public/images/` 已包含 4 张来自 TG115 交互式 UI 设计稿的界面预览：

- `deployer-vps.png`
- `deployer-telegram.png`
- `deployer-clouddrive.png`
- `deployer-options.png`

这些图片由主项目 PySide6 Modern 部署器的离线预览模式生成，不包含真实 VPS、Telegram 或 WebDAV 凭据，也不会执行远程操作。它们用于展示当前界面结构；实际系统字体和控件渲染可能略有差异。
