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

由部署器管理同机 CloudDrive2 时，默认 WebDAV 地址为：

```text
http://clouddrive2:19798/dav
```

此时 VPS 需要提供 `/dev/fuse`。使用外部 CloudDrive2 时，应填写 Bot 可访问的完整 WebDAV 地址，优先使用可信 HTTPS；Bot 所在 VPS 不因外部挂载而强制要求 FUSE。

如果 WebDAV 根目录已经指向目标文件夹，子目录应留空，避免产生重复嵌套路径。

## 资源控制

| 字段 | 程序默认值 | 说明 |
| --- | --- | --- |
| 本地任务预算 | 20GB | 普通落盘任务可占用的总预算；超预算单文件可自动使用流式模式 |
| 磁盘最少保留 | 20GB | VPS 需要保留的安全空间，不是 CloudDrive2 缓存上限 |
| 时区 | `Asia/Shanghai` | 日志和界面使用的时区 |

`20GB / 20GB` 是字段初始值，不是所有 VPS 的固定推荐。首次部署先运行 VPS 检测，再根据实例应用“均衡模式”或“流式优先”等建议；正式部署还会检查磁盘条件。CloudDrive2 可能另有缓存占用，不能只按 TG115 本地任务预算估算磁盘。

高级 CPU、内存、控制周期和重试参数已有安全默认值，普通用户不需要手工修改。
