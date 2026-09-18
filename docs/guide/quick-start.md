# 快速开始

如果你是第一次使用 TG115，推荐按下面的顺序完成。

## 1. 获取部署器

从 TG115 的 GitHub Releases 下载当前正式版本。推荐使用 `TG115-Deployer-Modern-v1.6.2.exe`；低配置电脑或偏好旧界面时可使用 Classic 兼容版。对照 `SHA256SUMS.txt` 检查文件完整性。

## 2. 准备四类信息

依次准备：

1. VPS SSH 信息；
2. Telegram Bot Token、API ID、API Hash、个人数字 ID；
3. CloudDrive2 WebDAV 用户名与密码；
4. 目标保存目录。

## 3. 执行一键部署

在 Windows 部署器中先测试 SSH，让部署器读取当前 VPS 资源；再到“部署选项”页主动应用合适的“均衡模式”或“流式优先”建议，最后执行基础环境部署。部署器会负责安装运行环境、部署 TG115 服务，并进行基础健康检查。

## 4. 完成 CloudDrive2 / 115 登录

部署完成后，通过部署器打开 CloudDrive2 管理页，在 SSH 隧道保护的本地地址中完成 CloudDrive2 登录、115 挂载以及 WebDAV 设置。

## 5. 执行 WebDAV 验收

使用部署器提供的 WebDAV 验收功能写入测试文件。通过后，再到 115 官方客户端确认目标目录可正常看到文件。

## 6. 发送测试文件

先向私人 Bot 转发一个较小测试文件，观察队列、传输和完成状态。看到“Bot 传输已完成（CloudDrive2 已接收）”后，再到 115 官方客户端确认文件大小正常且可以打开。当前 Bot 不要求逐个执行人工确认命令。

::: tip 下一步
如果是第一次部署，请继续阅读 [Windows 一键部署器](/deployment/windows-deployer)。
:::
