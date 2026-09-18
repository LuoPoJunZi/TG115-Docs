# 工作原理

TG115 的使用链路可以理解为三个部分。

## Windows 部署器

部署器负责收集配置、连接 VPS、安装依赖、上传部署文件、执行健康检查，并提供 CloudDrive2 管理入口与 WebDAV 验收操作。部署完成后，日常传输不要求 Windows 电脑保持在线。

## TG115 Bot 服务

VPS 上的 Bot 服务负责：

- 接收指定用户在 Telegram 私聊中发送或转发的文件；
- 持久化任务，并按资源和磁盘状态调度；
- 在普通落盘与流式模式之间选择；
- 通过 rclone 写入 CloudDrive2 WebDAV；
- 更新任务状态并向用户反馈。

## CloudDrive2 与 115

CloudDrive2 把 WebDAV 写入映射到用户自行挂载的 115 网盘。TG115 不直接保存 115 登录密码，也不能把 CloudDrive2 的接收状态当作 115 官方端最终入库证明。

## 数据流

```text
Windows 部署器 ──SSH──> VPS
                         │
Telegram ──> TG115 Bot ─┼─> rclone ─> CloudDrive2 WebDAV ─> 115
                         │
                         └─> SQLite / 日志 / 临时文件
```

传输完成后，应在 115 官方客户端核对目标文件。
