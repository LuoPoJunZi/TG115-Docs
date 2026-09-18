# 常见问题速查

这一页用于快速定位；更详细说明已经按类别整理到 FAQ。

| 问题 | 优先查看 |
| --- | --- |
| 受管 CloudDrive2 所在 VPS 没有 `/dev/fuse` | [部署与连接 FAQ](/faq/deployment) |
| SSH 连接失败 | [部署与连接 FAQ](/faq/deployment) |
| `lookup clouddrive2` | [部署与连接 FAQ](/faq/deployment) |
| Bot 一直“在排队” | [传输与任务 FAQ](/faq/transfer) |
| 单文件超过 20GB | [传输与任务 FAQ](/faq/transfer) |
| Bot 完成后如何确认 115 状态 | [传输与任务 FAQ](/faq/transfer) |
| Windows 安全软件提示 | [部署与连接 FAQ](/faq/deployment) |
| 敏感凭据如何保护 | [安全与隐私 FAQ](/faq/security) |

## VPS 日志与状态

SSH 登录 VPS 后：

```bash
sudo /opt/tg115/manage.sh logs
```

查看状态：

```bash
sudo /opt/tg115/manage.sh status
```

手动执行 WebDAV 写入验收：

```bash
sudo /opt/tg115/manage.sh verify
```

重启 Bot：

```bash
sudo /opt/tg115/manage.sh restart
```
