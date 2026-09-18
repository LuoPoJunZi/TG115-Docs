# 重新部署与升级

重新运行部署适合以下场景：

- 修改 Telegram、WebDAV 或资源配置；
- 升级 TG115 Bot 与配套部署文件；
- 修复部署环境并重新执行健康检查。

## 升级前

1. 阅读目标版本发布说明，并从项目正式 Release 下载新版部署器；
2. 在 Bot 中执行 `/pause`，停止调度新任务；
3. 用 `/status` 或 `/queue` 等待正在传输的任务结束；
4. 记录当前 VPS、Telegram、WebDAV、安装目录和资源配置；
5. 在 VPS 上运行 `sudo /opt/tg115/manage.sh status`，确认当前环境状态。

正常重新部署应保留任务数据库、下载目录、日志、CloudDrive2 配置与挂载数据，但仍建议先确认重要配置和 115 挂载可恢复。不要手工删除 `/opt/tg115` 或 CloudDrive2 数据目录后再尝试升级。

## 使用新版部署器

在新版 Windows 部署器中重新填写或载入配置，测试 SSH 后执行基础部署。仅修改部署器输入框并不会改变 VPS 上的配置，必须完成部署步骤才会生效。

部署完成后依次执行：

1. 查看部署器健康检查结果；
2. 执行 WebDAV 写入验收并确认 `TG115_DESTINATION=OK`；
3. 向 Bot 发送 `/doctor`；
4. 用一个小文件做真实传输测试；
5. 在 115 官方客户端核验后发送 `/resume` 恢复调度。

::: warning `manage.sh update` 不是在线升级
`sudo /opt/tg115/manage.sh update` 只会重新构建 VPS 当前已有的代码，不会从 GitHub 拉取新版本。要升级正式版本，请使用对应 Release 的新版部署器重新部署。
:::

若部署后异常，先保留日志并检查配置，不要连续覆盖部署。配置应用失败时，管理脚本生成的 `.env` 备份可通过 `manage.sh backups` 查看。
