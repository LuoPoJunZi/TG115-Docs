# 文档站维护

TG115 文档站使用 **VitePress**，内容主要由 Markdown 维护。

## 目录约定

```text
docs/
├── index.md
├── guide/
├── deployment/
├── usage/
├── operations/
├── faq/
├── troubleshooting/
├── security/
├── reference/
├── developer/
├── public/
│   ├── tg115-logo.png
│   ├── tg115-mark.png
│   ├── favicon.png
│   └── images/
└── .vitepress/
    ├── config.mts
    └── theme/
```

## 本地预览

```bash
npm install
npm run docs:dev
```

默认在本机 VitePress 开发地址预览。

## 构建

```bash
npm run docs:build
```

输出目录：

```text
docs/.vitepress/dist
```

## 新版本发布时要改哪里

假设未来发布 `v1.7.0`：

1. `.vitepress/config.mts`：更新顶部版本下拉；
2. `docs/index.md`：更新首页稳定版与下载按钮文案；
3. `docs/download/index.md`：更新部署器文件名；
4. `docs/reference/changelog.md`：新增 `v1.7.0` 章节；
5. `docs/deployment/from-zero.md`：检查安装步骤、参数和截图；
6. 如果部署器 UI 发生变化，重新制作截图。

## 部署器界面预览

当前文档站已经内置 4 张 1440 × 900 PNG 界面预览：

```text
docs/public/images/deployer-vps.png
docs/public/images/deployer-telegram.png
docs/public/images/deployer-clouddrive.png
docs/public/images/deployer-options.png
```

它们由 `TG115_UI_Preview.html` 生成，不包含真实凭据。若未来改用原生 Qt 实机截图，建议保持相近尺寸，并在发布前遮挡所有敏感信息。

## Logo

- `tg115-logo.png`：首页主视觉；
- `tg115-mark.png`：顶部导航 Logo；
- `favicon.png`：浏览器标签图标。

## 自定义域名上线后

当前模板没有写死文档站域名，避免在正式域名确定前生成错误的 sitemap。绑定自定义域名后，如需 sitemap，可在 `defineConfig` 中加入：

```ts
sitemap: {
  hostname: 'https://你的真实文档域名'
}
```
