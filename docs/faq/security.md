# FAQ：安全与隐私

## 哪些信息绝对不能公开

不要在 GitHub Issue、截图、聊天记录、博客或视频中公开：

- VPS 密码；
- SSH 私钥与私钥口令；
- sudo 密码；
- Telegram Bot Token；
- Telegram API Hash；
- WebDAV 密码；
- 115 / CloudDrive2 登录凭据。

## 部署器会保存 VPS 密码吗

设计上，VPS 密码、私钥口令和 sudo 密码不应写入持久化本地配置；部署过程中的临时配置应在结束后清理。VPS 正式 `.env` 使用限制权限保存。

## 为什么建议 TG115 使用独立 VPS

CloudDrive2 是第三方闭源软件，并且 FUSE 挂载需要较高容器权限。即使 TG115 Bot 本身使用非 root、只读根文件系统和移除 capabilities 等方式缩小权限面，也无法消除 CloudDrive2 特权容器带来的系统级风险。

因此建议：

- TG115 / CloudDrive2 使用独立 VPS；
- 不要和钱包、重要数据库、生产业务等高价值服务共用同一台 VPS。

## CloudDrive2 19798 端口需要开放公网吗

不需要。推荐只绑定本机回环地址，并通过部署器建立 SSH 隧道访问管理页。

## 如何确认下载的部署器没有被替换

从项目正式 GitHub Releases 下载，并使用：

```powershell
Get-FileHash .\TG115-Deployer-Modern-v1.6.2.exe -Algorithm SHA256
```

与 Release 中的 `SHA256SUMS.txt` 逐项核对。

## 旧版 `/confirm` 会修改 115 中的文件吗

不会。兼容命令 `/confirm` 只更新 Bot 的历史任务记录，不会重新上传、移动或删除文件，当前日常流程也不再要求使用它。
