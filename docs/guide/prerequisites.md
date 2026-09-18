# 部署前准备

## VPS

推荐基础环境：

- Ubuntu 22.04 / 24.04，或 Debian 12 64 位；支持 x86_64 和 ARM64；
- 2 核 CPU、4GB 内存、50GB SSD 起步；
- 如果由部署器在这台 VPS 上管理 CloudDrive2，需要支持 `/dev/fuse`；
- VPS 能稳定访问 Telegram 与 Docker 镜像仓库；
- 准备 SSH 地址、端口、用户名，以及密码或私钥。

安装脚本会硬检查约 1.8GB 内存和安装文件系统至少 8GB 可用空间；2 核、4GB、50GB 是基础推荐值，不是简单的硬门槛。长期处理大量文件时，建议提高 CPU、内存和磁盘容量，并预留 CloudDrive2 可能产生的额外缓存空间。

## Telegram

需要准备：

- Bot Token；
- API ID；
- API Hash；
- 你自己的 Telegram 数字 ID。

::: danger 保密信息
Bot Token 和 API Hash 都属于秘密信息，不应公开提交到 GitHub、Issue、截图或聊天记录中。
:::

## CloudDrive2 / 115

需要：

- 可用的 CloudDrive2 环境；当前方案按会员环境设计；
- 已添加并挂载的 115 网盘；
- CloudDrive2 WebDAV 已开启；
- WebDAV 用户名和密码；
- 目标目录有足够空间。

TG115 不需要保存你的 115 登录密码。115 的登录与授权应由你本人在 CloudDrive2 管理页面完成。

如果使用已经存在的外部 CloudDrive2，可以在部署器中关闭“在 VPS 上安装并管理 CloudDrive2 容器”。此时 Bot 所在 VPS 不因 TG115 本身强制要求 `/dev/fuse`，但必须能访问所填的 WebDAV 地址；公网 HTTP WebDAV 会被部署器拒绝，应使用 HTTPS。
