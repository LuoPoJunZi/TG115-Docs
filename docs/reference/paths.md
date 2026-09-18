# 目录与文件

## 默认安装目录

```text
/opt/tg115
```

## 常见内容

| 路径 | 用途 |
| --- | --- |
| `/opt/tg115/.env` | Bot 正式配置，包含敏感信息，权限应保持为 `600` |
| `/opt/tg115/data/tg115.db` | SQLite 任务数据库与持久暂停状态 |
| `/opt/tg115/downloads/` | 普通模式下载和待上传文件 |
| `/opt/tg115/logs/` | Bot 日志 |
| `/opt/tg115/config/rclone/rclone.conf` | rclone WebDAV 配置，仍应视为敏感文件 |
| `/opt/tg115/clouddrive/config/` | 受管 CloudDrive2 配置与登录数据 |
| `/opt/tg115/clouddrive/mounts/` | 受管 CloudDrive2 挂载目录 |
| `/opt/tg115/manage.sh` | 服务检查、验收、启停和本地重建脚本 |

不要把 `.env`、rclone 配置、CloudDrive2 配置或数据库直接上传到公开 Issue、网盘分享或公开仓库。

## 备份

项目文档中使用的备份目录为：

```text
/opt/tg115-backups/
```

重新部署时，程序配置会生成 `config-*.tar.gz`，任务数据库会生成一致性快照 `database-*.db`；`apply-config` 还会生成 `env-*.env`。可使用：

```bash
sudo /opt/tg115/manage.sh backups
```

查看备份清单。确认无误后，可用 `prune-backups [1-50]` 按数量保留最近备份。备份目录同样含有敏感信息，不应公开。
