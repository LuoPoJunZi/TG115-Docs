# 服务管理

默认安装目录为 `/opt/tg115`，VPS 上可通过管理脚本执行常用操作：

| 命令 | 作用 |
| --- | --- |
| `sudo /opt/tg115/manage.sh status` | 查看 Compose 服务状态 |
| `sudo /opt/tg115/manage.sh logs` | 持续查看 Bot 最近 30 分钟、最多 200 行日志 |
| `sudo /opt/tg115/manage.sh check` | 核对运行配置、代码指纹并执行容器健康检查；`doctor` 为同义命令 |
| `sudo /opt/tg115/manage.sh verify` | 向 CloudDrive2 WebDAV 执行真实写入、校验、改名和清理验收 |
| `sudo /opt/tg115/manage.sh restart` | 重启 Bot 容器 |
| `sudo /opt/tg115/manage.sh stop` | 停止 Bot 容器 |
| `sudo /opt/tg115/manage.sh start` | 启动 Bot 并等待健康检查通过 |
| `sudo /opt/tg115/manage.sh backups` | 查看已有配置备份 |
| `sudo /opt/tg115/manage.sh prune-backups 5` | 仅保留最近 5 份备份，可填写 1～50 |

按 `Ctrl+C` 可退出持续日志查看，不会停止 Bot。

## 建议的排查顺序

1. 先在 Bot 中发送 `/status` 或 `/doctor`；
2. 用 `manage.sh status` 确认容器状态；
3. 用 `manage.sh logs` 查看具体错误；
4. 怀疑目的端异常时再运行 `manage.sh verify`；
5. 确认配置无误后才考虑 `restart` 或重新部署。

`verify` 会在远端创建并删除测试文件，并非纯只读操作。若只是 CloudDrive2 登录状态或 115 授权问题，优先通过 SSH 隧道打开 CloudDrive2 管理页检查，不要反复重装整个环境。

## 本地更新命令的边界

```bash
sudo /opt/tg115/manage.sh update
```

该命令只会使用 VPS 上**已经存在的本地代码**重新构建并启动 Bot，不会从 GitHub 下载新版本。升级正式版本应使用新版 Windows 部署器重新部署。

`apply-config /absolute/config.env` 供熟悉服务器运维的用户原子替换配置：脚本会先备份旧 `.env`，验证失败时自动回滚。普通用户优先通过 Windows 部署器修改配置。
