# 更新日志

这里记录 TG115 正式版本的用户可见变化。文档站默认以当前稳定版为主；完整发布文件与 Release Notes 以 GitHub Releases 为准。

<div class="tg115-release-card compact">
  <div>
    <span class="tg115-release-badge">当前稳定版</span>
    <h2>v1.6.2</h2>
    <p>Windows 一键部署、持久化任务队列、大文件流式传输、动态资源调度与更严格的安全边界。</p>
  </div>
  <div class="tg115-release-actions">
    <a class="tg115-btn primary" href="https://github.com/LuoPoJunZi/TG115/releases/latest" target="_blank" rel="noreferrer">下载 Release</a>
  </div>
</div>

## v1.6.2

**状态：当前稳定版**

### 部署体验

- 提供 Windows 10/11 64 位图形化一键部署器；
- 支持密码和 SSH 私钥连接 VPS；
- 首次 SSH 连接显示并要求确认主机密钥指纹；
- 自动检查 Linux、CPU 架构、内存、磁盘与 `/dev/fuse`；
- 自动安装 Docker、Docker Compose、FUSE 等环境；
- 自动安装/启动 CloudDrive2，并构建 TG115 Bot；
- 部署完成执行基础健康检查；
- 支持“打开 CloudDrive2 管理页”“修复 CloudDrive2 网络”“WebDAV 验收”等日常维护入口。

### 任务与可靠性

- 使用 SQLite 持久化任务队列，服务重启后可以恢复未完成任务；
- 普通文件先完整落盘，WebDAV 上传失败时保留本地文件；
- 远端验证成功后再清理本地文件；
- 使用任务编号配合 `/task`、`/retry`、`/cancel`、`/confirm` 管理任务；
- 重新部署保留任务数据库、下载目录、日志、CloudDrive2 配置和挂载数据。

### 大文件与资源调度

- 默认使用 20GB 本地任务预算和独立磁盘安全线；
- 单文件超过本地预算时自动切换到：

```text
Telegram → rclone → CloudDrive2
```

- 流式模式不在 VPS 保存完整文件副本；
- 根据 CPU、内存、磁盘、网络和目的端状态动态调节任务放行；
- 即使使用流式模式，仍持续监测 VPS 实际剩余磁盘空间，因为 CloudDrive2 可能额外产生缓存。

### CloudDrive2 / WebDAV

- TG115 通过 CloudDrive2 WebDAV 写入目标目录；
- WebDAV 验收执行真实随机文件写入、大小校验、改名、再次校验和清理；
- 文件直接保存到“WebDAV 根目录 + 可选子目录”，不再自动创建年份/月度目录；
- 部署器管理 CloudDrive2 时，Bot 使用容器内网地址 `http://clouddrive2:19798/dav`；
- CloudDrive2 管理页通过 SSH 隧道访问，不要求公开 19798 管理端口。

### 任务完成状态

v1.6.2 明确区分：

```text
Bot 传输已完成，115 官方端待确认
```

与：

```text
115 官方端已由你确认
```

用户在 115 官方客户端确认文件大小正常并可打开后，使用：

```text
/confirm <任务编号>
```

完成最终人工确认。`/confirm` 不会再次上传、移动或删除文件。

### 安全设计

- 只允许配置的 Telegram 数字 ID 使用 Bot；
- Bot 容器使用专用非 root 用户；
- 使用只读根文件系统并移除 Linux capabilities；
- VPS 正式 `.env` 设置限制权限；
- rclone 将 WebDAV 密码转换为 obscure 格式；
- Docker 构建上下文使用白名单；
- CloudDrive2 和 Python 基础镜像锁定到复核过的不可变摘要；
- 普通重新部署不自动切换到未经复核的新基础镜像；
- CloudDrive2 管理端口只通过本地回环地址 + SSH 隧道访问。

### 发布验证边界

v1.6.2 文档记录的发布前验证包括代码审查、56 项自动化测试、队列与磁盘模拟、GUI 自检、打包自检、ShellCheck、Python 依赖漏洞扫描和容器镜像扫描。

由于实际 VPS、Telegram、CloudDrive2 和 115 环境属于用户自己的账号与基础设施，第一次部署完成后仍建议先使用一个 **5～20MB** 测试文件做真实端到端验证。

### 第三方镜像复核

正式版 1.6.2 的第三方组件说明记录了 CloudDrive2 与 Python 基础镜像摘要，并在 2026-07-29 进行了镜像/依赖安全复核。扫描结果用于了解基础镜像风险，不等于对 CloudDrive2 专有程序完成源代码安全审计。

## Release 文件

正式版本请统一从 GitHub Releases 获取：

- [最新 Release](https://github.com/LuoPoJunZi/TG115/releases/latest)
- [全部 Releases](https://github.com/LuoPoJunZi/TG115/releases)

下载部署器后请使用 `SHA256SUMS.txt` 校验文件。

## 文档更新与程序版本

文档站的小幅文字修正不等于 TG115 程序发布新版本。只有主项目正式创建新的 GitHub Release 后，才应：

1. 修改顶部版本下拉；
2. 更新首页下载按钮文本；
3. 在本页新增版本章节；
4. 同步“从零部署”中的文件名与版本说明；
5. 检查截图与 UI 是否仍匹配新部署器。
