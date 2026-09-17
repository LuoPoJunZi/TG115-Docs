# 配置字段

## VPS

| 字段 | 说明 |
| --- | --- |
| VPS IP / 域名 | SSH 可访问地址 |
| SSH 端口 | 默认常见值为 22 |
| SSH 用户名 | 如 root、ubuntu、debian |
| 登录方式 | 密码或 SSH 私钥 |
| sudo 凭据 | 非 root 用户按实际环境填写 |

## Telegram

| 字段 | 说明 |
| --- | --- |
| Bot Token | 从 BotFather 获取 |
| API ID | Telegram API 凭据 |
| API Hash | Telegram API 秘密凭据 |
| 数字 ID | 允许使用 Bot 的个人账号 ID |

## CloudDrive2

| 字段 | 说明 |
| --- | --- |
| WebDAV 地址 | Bot 访问 CloudDrive2 的 WebDAV 入口 |
| 用户名 | WebDAV 账号 |
| 密码 | WebDAV 密码 |
| 子目录 | WebDAV 根目录后的可选保存路径 |

## 资源控制

当前项目文档以 20GB 本地任务预算和 20GB 磁盘安全保留作为基础默认思路。修改前应同时考虑 VPS 总容量和 CloudDrive2 缓存占用。
