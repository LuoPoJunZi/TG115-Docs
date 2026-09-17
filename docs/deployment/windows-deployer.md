# Windows 一键部署器

TG115 的推荐部署方式是在 Windows 10/11 64 位电脑上运行图形化部署器，由它通过 SSH 完成 VPS 侧安装。

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

## 主界面截图

![部署器主界面截图位置](/images/deployer-main.svg)

截图替换规范见 [部署器截图说明](/deployment/screenshots)。

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

## 推荐默认值

```text
安装目录：/opt/tg115
本地任务预算：20GB
磁盘最少保留：20GB
时区：Asia/Shanghai
```

这些值适合基础个人使用；CloudDrive2 可能额外产生缓存，因此磁盘容量较小时应保留更大的实际安全余量。

## 部署完成后

依次完成：

1. 打开 CloudDrive2 管理页；
2. 登录并挂载 115；
3. 开启 WebDAV；
4. 点击“WebDAV 验收（写入测试文件）”；
5. 确认出现 `TG115_DESTINATION=OK`；
6. 用一个 5～20MB 文件进行第一次真实转存。
