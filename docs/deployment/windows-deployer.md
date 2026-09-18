# Windows 一键部署器

TG115 的推荐部署方式是在 Windows 10/11 64 位电脑上运行 Modern 图形化部署器，由它通过 SSH 完成 VPS 侧安装。v1.6.2 同时提供：

- `TG115-Deployer-Modern-v1.6.2.exe`：PySide6 新界面，推荐使用；
- `TG115-Deployer-Classic-v1.6.2.exe`：原 Tkinter 界面的轻量兼容版。

两种版本使用同一套 VPS payload 和配置语义；新界面功能优先在 Modern 版维护。

如果你是第一次部署，请优先阅读 **[从零部署完整教程](/deployment/from-zero)**。

## 部署器负责什么

点击“一键部署基础环境”后，部署器主要负责：

- 建立 SSH/SFTP 连接并确认主机指纹；
- 检查 Linux、CPU 架构、内存、磁盘和 `/dev/fuse`；
- 安装 Docker、Docker Compose、FUSE 等环境；
- 安装并启动 CloudDrive2；
- 构建并启动 TG115 Bot；
- 初始化 SQLite 持久化任务队列；
- 配置 20GB 本地任务预算和磁盘安全线；
- 启用 CPU、内存、磁盘、网络和错误率动态调度；
- 配置自动重启、开机启动和日志轮转；
- 执行基础健康检查。

## 部署器不负责什么

以下操作必须由你本人完成：

- 登录 CloudDrive2；
- 在 CloudDrive2 中添加并挂载自己的 115；
- 开启并配置 WebDAV；
- 最终在 115 官方客户端确认文件完整性。

## 界面预览

![TG115 VPS 配置界面预览](/images/deployer-vps.png)

完整的 VPS、Telegram、CloudDrive2 / 115 与部署选项四个页面，请查看 [部署器界面预览](/deployment/screenshots)。

::: info 说明
这些图片由 Modern 部署器自身的离线预览模式生成，不连接 VPS，也不执行远程操作。实际系统字体、缩放和控件渲染可能略有差异。
:::

## VPS 信息

填写：

- VPS IP 或域名；
- SSH 端口；
- SSH 用户名；
- 密码或 SSH 私钥；
- 非 root 用户的 sudo 凭据（如需要）。

第一次连接时，应核对 VPS 主机密钥指纹，避免把凭据发送到错误服务器。

## Telegram 信息

填写：

- Bot Token；
- API ID；
- API Hash；
- 允许使用 Bot 的个人 Telegram 数字 ID。

## CloudDrive2 WebDAV

由部署器管理 CloudDrive2 时，Bot 在 Docker 网络中使用：

```text
http://clouddrive2:19798/dav
```

不需要把 19798 端口暴露到公网。

## 默认值与实例建议

```text
安装目录：/opt/tg115
本地任务预算：20GB
磁盘最少保留：20GB
时区：Asia/Shanghai
```

这些是源码默认值，不代表适合每一台 VPS。先点击“测试 SSH”或“检测 VPS 并推荐”，再根据结果主动应用“均衡模式”或“流式优先”建议。部署器不会静默修改输入框，正式部署前还会重新检查安装盘、Docker 数据盘、inode、FUSE 和已有下载占用。

CloudDrive2 可能额外产生缓存，因此磁盘容量较小时应保留更大的实际安全余量。由部署器管理 CloudDrive2 时需要 `/dev/fuse`；使用外部 CloudDrive2 时不强制要求 Bot VPS 提供 FUSE。

## 部署完成后

依次完成：

1. 打开 CloudDrive2 管理页；
2. 登录并挂载 115；
3. 开启 WebDAV；
4. 点击“WebDAV 验收（写入测试文件）”；
5. 确认出现 `TG115_DESTINATION=OK`；
6. 用一个 5～20MB 文件进行第一次真实转存；
7. 看到“Bot 传输已完成（CloudDrive2 已接收）”后，在 115 官方客户端核验文件。
