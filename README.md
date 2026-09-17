# TG115 Docs

TG115 独立项目文档站，基于 VitePress 构建。

主项目：<https://github.com/LuoPoJunZi/TG115>

## 已包含

- TG115 Logo / 导航 Mark / favicon；
- 首页视觉背景与 Hero；
- v1.6.2 版本下拉；
- GitHub Releases 下载入口；
- 完整“从零部署”教程；
- 部署器截图占位与替换规范；
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

## 截图

`docs/public/images/` 中目前为安全占位图。正式发布前可以替换为真实部署器截图，但必须先遮挡所有敏感信息。
