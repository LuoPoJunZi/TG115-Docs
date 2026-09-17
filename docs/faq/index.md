# TG115 FAQ

遇到问题时，建议先按问题类型进入对应分类。

<div class="tg115-faq-grid">
  <a href="/faq/deployment"><b>🖥️ 部署与连接</b><span>SSH、FUSE、Windows 安全提示、CloudDrive2 网络等</span></a>
  <a href="/faq/transfer"><b>📥 传输与任务</b><span>排队、大文件、速度、路径、/confirm 与任务状态</span></a>
  <a href="/faq/security"><b>🛡️ 安全与隐私</b><span>敏感凭据、端口暴露、CloudDrive2 权限与发布校验</span></a>
</div>

## 最常见的三个问题

### Bot 一直显示“在排队”

先检查 CloudDrive2 登录、115 挂载、WebDAV、目标路径和 VPS 磁盘空间。详见 [传输与任务 FAQ](/faq/transfer)。

### VPS 没有 `/dev/fuse`

CloudDrive2 的容器挂载依赖 FUSE。详见 [部署与连接 FAQ](/faq/deployment)。

### 115 已看到文件，但 Bot 仍显示“待确认”

这是 TG115 的保守状态设计，不是异常。详见 [传输与任务 FAQ](/faq/transfer)。
