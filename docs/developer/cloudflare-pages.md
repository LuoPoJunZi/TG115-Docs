# Cloudflare Pages 部署

TG115 Docs 是静态 VitePress 站点，非常适合部署到 Cloudflare Pages。

## 1. 推送到 GitHub

建议单独创建文档仓库：

```text
LuoPoJunZi/TG115-Docs
```

然后将本项目推送到 `main` 分支。

## 2. Cloudflare Pages 创建项目

在 Cloudflare Dashboard 中进入 Workers & Pages，创建 Pages 项目并连接 `TG115-Docs` 仓库。

推荐构建配置：

```text
Framework preset: VitePress（如果界面提供）
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
```

Node.js 建议使用当前 LTS / Node 20+ 环境。

## 3. 首次部署

保存配置后 Cloudflare 会自动：

```text
GitHub Push
→ 安装依赖
→ npm run docs:build
→ 发布 docs/.vitepress/dist
```

## 4. 绑定自定义域名

Pages 部署成功后，在 Custom domains 中绑定你自己的文档域名，例如：

```text
docs.example.com
```

绑定后记得修改：

```text
docs/.vitepress/config.mts
```

中的 sitemap hostname：

```ts
sitemap: {
  hostname: 'https://你的真实文档域名'
}
```

## 5. 自动更新

以后只需要：

```bash
git add .
git commit -m "docs: update documentation"
git push
```

Cloudflare Pages 会自动重新构建并发布。

## 构建失败排查

本地先运行：

```bash
npm install
npm run docs:build
```

如果本地构建成功但 Cloudflare 失败，再检查：

- Node.js 版本；
- Build command；
- Output directory；
- 如果已经生成 `package-lock.json`，是否与 `package.json` 保持一致；
- Markdown 中是否有错误的 frontmatter / Vue 语法。
