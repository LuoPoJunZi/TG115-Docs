# TG115 FAQ

遇到问题时，建议先按问题类型进入对应分类。

<div class="tg115-faq-grid">
  <a href="/faq/deployment"><b>🖥️ 部署与连接</b><span>SSH、FUSE、Windows 安全提示、CloudDrive2 网络等</span></a>
  <a href="/faq/transfer"><b>📥 传输与任务</b><span>排队、大文件、速度、路径、完成语义与任务状态</span></a>
  <a href="/faq/security"><b>🛡️ 安全与隐私</b><span>敏感凭据、端口暴露、CloudDrive2 权限与发布校验</span></a>
</div>

## 最常见的三个问题

### Bot 一直显示“在排队”

先检查 CloudDrive2 登录、115 挂载、WebDAV、目标路径和 VPS 磁盘空间。详见 [传输与任务 FAQ](/faq/transfer)。

### 受管 CloudDrive2 所在 VPS 没有 `/dev/fuse`

同机安装的 CloudDrive2 容器挂载依赖 FUSE；外部 CloudDrive2 场景不因此要求 Bot VPS 提供 FUSE。详见 [部署与连接 FAQ](/faq/deployment)。

### Bot 显示完成，是否代表 115 已完成

Bot 的完成状态只表示 CloudDrive2 已接收并通过 TG115 的复验，仍应在 115 官方客户端核对。详见 [传输与任务 FAQ](/faq/transfer)。
