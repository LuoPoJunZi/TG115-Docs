# 从零部署 TG115

这是一份面向第一次使用 TG115 的完整教程。目标是从一台新的 VPS 开始，最终完成一次 **Telegram → CloudDrive2 → 115** 的真实文件转存。

::: tip 推荐方式
当前正式版推荐在 **Windows 10 / 11 64 位**电脑上运行图形化部署器，由部署器通过 SSH 完成 VPS 侧环境安装与 TG115 部署。
:::

## 1. 准备硬件与账号

| 项目 | 推荐配置 | 说明 |
| --- | --- | --- |
| VPS | 2 核 / 4GB / 50GB SSD | Ubuntu 22.04/24.04 或 Debian 12 64 位 |
| VPS 网络 | 100Mbps 或以上 | 需稳定访问 Telegram 与 Docker 镜像仓库 |
| CloudDrive2 | 可用会员环境 | 需要 115 挂载与 WebDAV 功能可用 |
| 115 | 可正常登录且空间充足 | 由你本人在 CloudDrive2 中完成登录/挂载 |
| Telegram | Bot Token、API ID、API Hash、个人数字 ID | Bot 只面向你本人与 Bot 的一对一私聊 |
| 本地电脑 | Windows 10/11 64 位 | 用于运行 TG115 图形化部署器 |

大量或长期批量传输，建议升级到 **4 核 / 8GB / 80～100GB SSD**。

### VPS 必须支持 `/dev/fuse`

CloudDrive2 的容器挂载方式依赖 FUSE。如果 VPS 没有 `/dev/fuse`，需要在服务商控制面板开启，或者联系服务商确认是否支持。

## 2. 下载 TG115 部署器

前往 GitHub Releases：

**[下载最新 TG115 Release](https://github.com/LuoPoJunZi/TG115/releases/latest)**

当前稳定版文档对应 `v1.6.2`，发布包中的主要文件包括：

- `TG115-Deployer-v1.6.2.exe`：Windows 图形化部署器；
- `SHA256SUMS.txt`：发布文件 SHA-256 校验值；
- 项目源代码与相关说明文件。

### 校验 SHA-256

在 PowerShell 中进入下载目录后执行：

```powershell
Get-FileHash .\TG115-Deployer-v1.6.2.exe -Algorithm SHA256
```

将结果与 `SHA256SUMS.txt` 中对应值核对。

::: warning Windows 安全提示
部署器由 PyInstaller 打包且未使用商业代码签名证书时，Windows 或第三方安全软件可能显示“未知发布者”或启发式提示。请只从项目正式 Releases 下载，并先校验 SHA-256。
:::

## 3. 准备 Telegram 信息

### 3.1 创建 Bot

在 Telegram 中打开 `@BotFather`，创建自己的 Bot，保存：

```text
Bot Token
```

### 3.2 获取 API ID / API Hash

登录 `my.telegram.org` 创建应用，保存：

```text
API ID
API Hash
```

### 3.3 获取自己的 Telegram 数字 ID

TG115 只允许配置的个人 Telegram 数字 ID 使用 Bot。请准备你自己的数字 ID，并确保以后是在 **你与 Bot 的一对一私聊**中使用。

::: danger 不要公开秘密信息
Bot Token、API Hash 与 VPS 登录凭据都属于敏感信息。截图文档、提交 Issue、录制教程时务必遮挡。
:::

## 4. 启动部署器

双击：

```text
TG115-Deployer-v1.6.2.exe
```

部署器主界面将集中填写 VPS、Telegram 和 CloudDrive2 WebDAV 信息。

![TG115 部署器主界面截图位置](/images/deployer-main.svg)

> 发布正式文档时，可将此占位图替换为真实部署器截图。截图前必须遮挡 VPS IP、密码、Bot Token、API Hash、WebDAV 密码等信息。

## 5. 填写 VPS 信息并测试 SSH

通常填写：

- **VPS IP 或域名**；
- **SSH 端口**，常见为 `22`；
- **SSH 用户名**，例如 `root`、`ubuntu`、`debian`；
- 登录方式：密码或 SSH 私钥；
- 非 root 用户如需 sudo，再填写 sudo 密码或使用免密 sudo。

填写完成后先点击：

```text
测试 SSH
```

### 首次连接：核对主机指纹

首次连接 VPS 时部署器会显示 SSH 主机密钥指纹。应与 VPS 服务商控制台或你可信渠道获取的指纹核对，一致后再确认连接。

![SSH 主机指纹确认截图位置](/images/ssh-fingerprint.svg)

## 6. 填写 Telegram 信息

依次填写：

```text
Bot Token
Telegram API ID
Telegram API Hash
你的 Telegram 数字 ID
```

这些信息用于 Bot 接收文件、Telegram MTProto 下载以及限制允许使用 Bot 的用户。

## 7. 配置 CloudDrive2 WebDAV

如果选择由部署器安装并管理 CloudDrive2，保持默认容器内 WebDAV 地址：

```text
http://clouddrive2:19798/dav
```

然后填写：

- WebDAV 用户名；
- WebDAV 密码；
- WebDAV 根目录后的可选子目录。

### 避免路径“套娃”

如果 CloudDrive2 的 WebDAV 根目录已经指向：

```text
115open/Telegram
```

那么 TG115 的子目录应当**留空**。否则再次填写 `115/Telegram` 可能形成重复嵌套路径。

::: warning 不要把 19798 暴露公网
部署器管理 CloudDrive2 时，Bot 使用 Docker 容器内网访问 `clouddrive2:19798`。CloudDrive2 管理页面应通过 SSH 隧道打开，不需要直接暴露公网端口。
:::

## 8. 保持推荐参数

首次部署建议保持：

```text
安装目录：/opt/tg115
本地任务预算：20GB
磁盘最少保留：20GB
时区：Asia/Shanghai
```

其中 20GB 是 TG115 普通落盘任务的预算，并不代表 CloudDrive2 内部缓存也严格限制为 20GB。

## 9. 一键部署基础环境

点击：

```text
一键部署基础环境
```

部署器会自动完成主要工作，包括：

1. 连接并检查 VPS；
2. 上传部署包；
3. 安装 Docker、Docker Compose、FUSE 等依赖；
4. 安装并启动 CloudDrive2；
5. 构建并启动 Telegram Bot；
6. 建立 SQLite 持久化任务队列；
7. 配置本地任务预算和磁盘安全线；
8. 启用动态资源调度；
9. 配置异常自动重启、开机自启与日志轮转；
10. 执行基础健康检查。

通常需要约 **5～15 分钟**，具体取决于 VPS 网络和镜像下载速度。

![部署成功与健康检查截图位置](/images/deployment-success.svg)

部署过程中不要关闭部署器。

## 10. 打开 CloudDrive2 管理页

部署成功后点击：

```text
打开 CloudDrive2 管理页
```

部署器会建立 SSH 安全隧道，并在浏览器打开类似：

```text
http://127.0.0.1:随机端口
```

这个地址只通过当前 SSH 隧道访问，不是直接暴露给公网的管理地址。

![CloudDrive2 SSH 隧道管理页截图位置](/images/clouddrive2-tunnel.svg)

## 11. 在 CloudDrive2 中挂载 115

在 CloudDrive2 管理页中由你本人完成：

1. 登录 CloudDrive2；
2. 添加 115；
3. 按 CloudDrive2 的流程登录或扫码；
4. 确认可以浏览 115 文件；
5. 开启 WebDAV；
6. 确认 WebDAV 根目录与 TG115 子目录配置一致。

部署器不会替你登录 115，也不需要你的 115 账号密码。

## 12. 执行 WebDAV 验收

回到部署器点击：

```text
WebDAV 验收（写入测试文件）
```

验收流程不是只检查容器“是否启动”，而是执行真实写入测试：

```text
VPS 生成随机测试文件
→ rclone 上传到 CloudDrive2 WebDAV
→ 校验远端文件大小
→ 远端改名
→ 再次校验
→ 删除远端和 VPS 测试文件
```

只有看到：

```text
TG115_DESTINATION=OK
```

才表示 CloudDrive2 WebDAV 写入链路通过。

::: info 验收边界
WebDAV 验收通过证明文件已经成功写入 CloudDrive2 WebDAV，但不能单独证明 115 官方端已经最终保存完成。最终仍应在 115 官方客户端检查文件。
:::

## 13. 第一次真实转存

不要一开始就批量转存。建议先选择一个 **5～20MB** 的测试文件：

1. 在 Telegram 找到文件；
2. 转发到你与 TG115 Bot 的一对一私聊；
3. Bot 返回任务编号；
4. 等待任务从“在排队”进入下载/流式与写入状态；
5. Bot 显示“Bot 传输已完成，115 官方端待确认”；
6. 在 115 官方客户端确认文件大小正常并可打开；
7. 向 Bot 发送：

```text
/confirm <任务编号>
```

任务状态将记录为：

```text
115 官方端已由你确认
```

## 14. 日常使用

以后使用只需：

```text
Telegram 文件
→ 转发给私人 Bot
→ TG115 自动排队与传输
→ 115 官方客户端核验
→ /confirm <任务编号>
```

常用命令：

```text
/start
/help
/queue
/status
/performance
/task <任务编号>
/confirm <任务编号>
/retry <任务编号>
/cancel <任务编号>
```

## 下一步

- [了解文件转存流程](/usage/workflow)
- [查看 Bot 命令](/usage/commands)
- [理解任务状态](/usage/status)
- [FAQ：部署与连接](/faq/deployment)
- [FAQ：传输与任务](/faq/transfer)
