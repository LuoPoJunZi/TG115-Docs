# 更新日志

这里记录 TG115 正式版本的用户可见变化。文档站默认以当前稳定版为主；完整发布文件与 Release Notes 以 GitHub Releases 为准。

<div class="tg115-release-card compact">
  <div>
    <span class="tg115-release-badge">当前稳定版</span>
    <h2>v1.6.2</h2>
    <p>Modern / Classic 双版本部署器、Telegram 原生命令菜单，以及持续完善的部署和传输可靠性。</p>
  </div>
  <div class="tg115-release-actions">
    <a class="tg115-btn primary" href="https://github.com/LuoPoJunZi/TG115/releases/latest" target="_blank" rel="noreferrer">下载 Release</a>
  </div>
</div>

## v1.6.2

**状态：当前稳定版**

### v1.6.2 主要变化

- Windows 部署器的主界面迁移到 PySide6，发布 Modern 与 Classic 两个版本；
- Modern 版增加离线预览、依赖诊断、脱敏日志导出和 Qt 打包自检；
- 保留 SSH 主机密钥确认、VPS 资源建议、部署前容量复检、固定本机隧道、网络修复和 WebDAV 真写验收；
- 构建时隔离 DLL 搜索路径，避免其他软件的 ICU 运行库导致 QtCore 无法启动；
- Bot 改用 Telegram 输入框左侧的 7 项原生命令菜单，新回复不再附带消息下方快捷按钮；
- 系统状态精简目的端可访问文案，后台探测和过期保护逻辑不变。

### 当前部署能力

- 支持 Windows 10/11 64 位，以及密码或 SSH 私钥连接；
- 支持 x86_64 与 ARM64 Linux VPS；
- 首次 SSH 连接要求核对主机密钥指纹；
- 自动检查 Linux、CPU、内存、磁盘，并在受管 CloudDrive2 模式检查 `/dev/fuse`；
- 自动安装环境、构建 Bot、启动服务并执行健康检查；
- 提供 CloudDrive2 管理入口、网络修复与 WebDAV 写入验收。

### 任务与可靠性

- 使用 SQLite 持久化任务队列，服务重启后可以恢复未完成任务；
- 普通文件先完整落盘，WebDAV 上传失败时保留本地文件；
- 远端验证成功后再清理本地文件；
- 使用任务编号配合 `/task`、`/watch`、`/retry`、`/stream`、`/cancel` 管理任务；
- 支持持久化 `/pause`、`/resume`、只读 `/doctor` 和带二次确认的遗留临时文件清理；
- 重新部署保留任务数据库、下载目录、日志、CloudDrive2 配置和挂载数据。

### 大文件与资源调度

- 源码默认使用 20GB 本地任务预算和 20GB 磁盘安全线，并由部署器按 VPS 条件给出可选实例建议；
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

当前日常界面使用：

```text
Bot 传输已完成（CloudDrive2 已接收）
```

它表示 Bot 已完成 WebDAV 写入、远端复验与主要清理，不代表 115 官方端已经完成最终入库。用户仍应在 115 官方客户端核验重要文件。旧版 `/confirm` 命令仅作兼容保留，不再是日常流程的必需步骤。

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

v1.6.2 的更新验收记录包括 174 项 Python `unittest` 回归且无跳过，其中包含 4 项真实本地 rclone 回环 WebDAV 集成测试；Modern / Classic 构建还分别执行打包后自检。自动化结果不能替代用户环境中的真实端到端验证。

由于实际 VPS、Telegram、CloudDrive2 和 115 环境属于用户自己的账号与基础设施，第一次部署完成后仍建议先使用一个 **5～20MB** 测试文件做真实端到端验证。

### 第三方镜像复核

主项目的第三方组件说明记录：正式版 1.5.0 交付包锁定了 CloudDrive2 与 Python 基础镜像摘要，并于 2026-07-29 进行镜像与依赖复核；当前部署配置仍使用这些固定摘要。该记录不是针对 v1.6.2 新做的 CloudDrive2 源代码审计，也不能消除专有软件和特权容器的风险。

## Release 文件

正式版本请统一从 GitHub Releases 获取：

- [最新 Release](https://github.com/LuoPoJunZi/TG115/releases/latest)
- [全部 Releases](https://github.com/LuoPoJunZi/TG115/releases)

v1.6.2 提供：

- `TG115-Deployer-Modern-v1.6.2.exe`：推荐的现代界面部署器；
- `TG115-Deployer-Classic-v1.6.2.exe`：兼容性优先的经典界面部署器；
- `TG115-Source-v1.6.2.zip`：源码包；
- `SHA256SUMS.txt`：上述发布文件的 SHA-256 校验值。

## 文档更新与程序版本

文档站的小幅文字修正不等于 TG115 程序发布新版本。只有主项目正式创建新的 GitHub Release 后，才应：

1. 修改顶部版本下拉；
2. 更新首页下载按钮文本；
3. 在本页新增版本章节；
4. 同步“从零部署”中的文件名与版本说明；
5. 检查截图与 UI 是否仍匹配新部署器。
