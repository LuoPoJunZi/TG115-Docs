# 服务管理

TG115 在 VPS 上提供管理脚本。默认安装目录下可使用类似命令：

```bash
sudo /opt/tg115/manage.sh status
sudo /opt/tg115/manage.sh logs
sudo /opt/tg115/manage.sh verify
sudo /opt/tg115/manage.sh restart
```

## 建议的日常检查顺序

1. `status`：确认服务和依赖是否正常；
2. `logs`：查看最近错误；
3. `verify`：怀疑 WebDAV 异常时做真实写入验收；
4. `restart`：确认配置无误后再重启服务。

如果只是 CloudDrive2 登录状态或 115 授权问题，优先在 CloudDrive2 管理页检查，不要直接反复重装整个环境。
