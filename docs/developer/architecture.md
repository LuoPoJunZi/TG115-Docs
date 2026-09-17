# 架构说明

TG115 可以理解为三个主要部分。

## 1. Windows 部署器

负责收集配置、连接 VPS、安装依赖、上传部署文件、执行健康检查，并提供 CloudDrive2 管理入口与验收操作。

## 2. TG115 Bot 服务

负责：

- 接收 Telegram 私聊文件；
- 校验允许的用户 ID；
- 持久化任务；
- 根据系统资源状态调度任务；
- 在普通落盘与流式模式之间选择；
- 调用 rclone 写入 CloudDrive2；
- 更新任务状态并向用户反馈。

## 3. CloudDrive2 / 115

CloudDrive2 负责把 WebDAV 写入映射到已挂载的 115 网盘。TG115 不直接保存 115 登录密码，也不把 CloudDrive2 的中间状态当作 115 官方端最终完成证明。

## 数据流

```text
Windows 部署器 ──SSH──> VPS
                         │
Telegram ──> TG115 Bot ─┼─> rclone ─> CloudDrive2 WebDAV ─> 115
                         │
                         └─> SQLite / 日志 / 临时文件
```
